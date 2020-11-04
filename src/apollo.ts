import jwtDecode from "jwt-decode";
import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  Observable,
} from "@apollo/client";
import { onError } from "apollo-link-error";
import apolloLogger from "apollo-link-logger";
import { RetryLink } from "apollo-link-retry";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import { createUploadLink } from "apollo-upload-client";

import config from "./config";
import logger from "./utils/logger";
import dayjs from "dayjs";
import memstore from "./memstore";

export interface APIError {
  field: string | null;
  message: string | null;
  code?: string;
}
export class APIException {
  errors: APIError[];
  constructor(errors: APIError[]) {
    this.errors = errors;
  }
}

const storage = () =>
  localStorage.getItem("rememberme") ? localStorage : sessionStorage;
// Apollo client
const request = operation => {
  const token = memstore.get("jwt");
  const authHeader = token ? { Authorization: `JWT ${token}` } : {};
  operation.setContext({
    headers: { ...authHeader },
  });
};

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle;
      Promise.resolve(operation)
        .then(oper => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    }),
);

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 5,
    retryIf: (error, _operation) => !!error,
  },
});

const setToken = token => {
  memstore.set("jwt", token);
  const exp = jwtDecode(token).exp;
  memstore.set("exp", parseInt(exp) * 1000);
};
const getCsrfToken = () => storage().getItem("csrfToken");
const isTokenExpired = () => {
  const exp = memstore.get("exp");
  if (exp) {
    return dayjs(parseInt(exp, 10)) <= dayjs();
  }
  return false;
};

export const client: ApolloClient<any> = new ApolloClient({
  link: ApolloLink.from([
    ...(["production"].includes(config.env) ? [] : [apolloLogger]),
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          logger.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) logger.log(`[Network error]: ${networkError}`);
    }),
    requestLink,
    retryLink,
    new TokenRefreshLink({
      isTokenValidOrUndefined: () =>
        isTokenExpired() || typeof getCsrfToken() !== "string",
      fetchAccessToken: async () => {
        const csrfToken = getCsrfToken();
        const resp = await fetch(config.apiEndpoint, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `mutation AutoTokenRefreshMutation($csrfToken: String!) {
              tokenRefresh(csrfToken: $csrfToken) {
                token
                accountErrors {
                  code
                  field
                  message
                }
              }
            }`,
            variables: { csrfToken },
          }),
        });
        return resp.json();
      },
      handleFetch: accessToken => {
        setToken(accessToken);
      },
      handleResponse: (operation, accessTokenField) => response => {
        // here you can parse response, handle errors, prepare returned token to
        // further operations
        // returned object should be like this:
        // { access_token: 'token string here' }
        return { access_token: response.data.tokenRefresh.token };
      },
      handleError: err => {
        // full control over handling token fetch Error
        logger.warn("Your refresh token is invalid. Try to relogin");
        logger.error(err);
        // your custom action here
        // user.logout();
      },
    }),
    createUploadLink({
      uri: config.apiEndpoint,
      credentials: "include",
    }),
  ]),
  cache: new InMemoryCache(),
});
