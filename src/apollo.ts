import jwtDecode from "jwt-decode";
import { ApolloLink, Observable } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { onError } from "apollo-link-error";
import apolloLogger from "apollo-link-logger";
import { RetryLink } from "apollo-link-retry";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import { createUploadLink } from "apollo-upload-client";

import config from "./config";
import logger from "./utils/logger";
import dayjs from "dayjs";

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

interface JWTData {
  email: string;
  exp: number;
  origIat: number;
  user_id: string;
  is_staff: boolean;
  is_superuser: boolean;
}

const storage = () =>
  localStorage.getItem("rememberme") ? localStorage : sessionStorage;
// Apollo client
const request = operation => {
  const token = storage().getItem("jwt");
  operation.setContext({
    headers: {
      authorization: token ? `JWT ${token}` : "",
    },
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

const getToken = () => storage().getItem("jwt");
const setToken = token => storage().setItem("jwt", token);
const getTokenData = (): JWTData | null => {
  const token = getToken();
  if (token) {
    return jwtDecode(token);
  }
  return null;
};
const isTokenExpired = () => {
  const exp = getTokenData()?.exp;
  if (exp) {
    return dayjs(exp * 1000) <= dayjs();
  }
  return false;
};

export const client: ApolloClient<any> = new ApolloClient({
  link: ApolloLink.from([
    apolloLogger,
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
        !isTokenExpired() || typeof getToken() !== "string",
      fetchAccessToken: async () => {
        const resp = await fetch(config.gqlEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `mutation TokenRefreshMutation {
              tokenRefresh(token: "${getToken()}") {
                token
                payload
              }
            }`,
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
      uri: config.gqlEndpoint,
      credentials: "same-origin",
    }),
  ]),
  cache: new InMemoryCache(),
});
