import { Effect, ImmerReducer, Subscription, Reducer } from "umi";
import { client } from "@/apollo";
import { TOKEN_CREATE_MUTATION } from "@/mutations/TokenCreate";
import {
  TokenCreateMutationVariables,
  TokenCreateMutation,
} from "@/mutations/types/TokenCreateMutation";
import {
  TokenVerifyMutationVariables,
  TokenVerifyMutation,
} from "@/mutations/types/TokenVerifyMutation";
import { TOKEN_VERIFY_MUTATION } from "@/mutations/TokenVerify";
import {
  CustomerRegisterMutationVariables,
  CustomerRegisterMutation,
} from "@/mutations/types/CustomerRegisterMutation";
import { CUSTOMER_REGISTER_MUTATION } from "@/mutations/CustomerRegister";
import {
  CustomerNameUpdateMutationVariables,
  CustomerNameUpdateMutation,
} from "@/mutations/types/CustomerNameUpdateMutation";
import { CUSTOMER_NAME_UPDATE_MUTATION } from "@/mutations/CustomerNameUpdate";

export interface AuthModelState {
  authenticated: boolean;
}

export interface AuthModelType {
  namespace: "auth";
  state: AuthModelState;
  effects: {
    initialize: Effect;
    login: Effect;
    signup: Effect;
    updateName: Effect;
    logout: Effect;
  };
  reducers: {
    setLoggedIn: ImmerReducer<AuthModelState>;
    clear: Reducer<AuthModelState>;
  };
  subscriptions: { setup: Subscription };
}

const defaultState: AuthModelState = {
  authenticated: false,
};

const AuthModel: AuthModelType = {
  namespace: "auth",

  state: {
    ...defaultState,
  },

  effects: {
    *initialize({ payload }, { call, put }) {
      try {
        const remember = !!localStorage.getItem("rememberme");
        const storage = remember ? localStorage : sessionStorage;
        const token = storage.getItem("jwt");
        let response: { data: TokenVerifyMutation } | null = null;
        if (token) {
          const variables: TokenVerifyMutationVariables = {
            token,
          };
          response = yield call(client.mutate, {
            mutation: TOKEN_VERIFY_MUTATION,
            variables,
          });
          yield put({ type: "setLoggedIn", payload: { authenticated: true } });
        }
        payload?.onCompleted?.(response?.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *login({ payload }, { call, put }) {
      try {
        const { email, password, remember } = payload;
        const variables: TokenCreateMutationVariables = {
          email,
          password,
        };
        const response: { data: TokenCreateMutation } = yield call(
          client.mutate,
          {
            mutation: TOKEN_CREATE_MUTATION,
            variables,
          },
        );
        if (remember) {
          localStorage.setItem("rememberme", "yes");
        } else {
          localStorage.removeItem("rememberme");
        }
        const storage = remember ? localStorage : sessionStorage;
        storage.setItem("jwt", response.data.tokenCreate?.token as string);
        yield put({ type: "setLoggedIn", payload: { authenticated: true } });

        payload?.onCompleted?.(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *signup({ payload }, { call, put, take }) {
      try {
        const { firstName, lastName, email, password } = payload;
        // create account
        const variables: CustomerRegisterMutationVariables = {
          input: {
            email,
            password,
            redirectUrl: window.location.origin,
          },
        };
        const response: { data: CustomerRegisterMutation } = yield call(
          client.mutate,
          {
            mutation: CUSTOMER_REGISTER_MUTATION,
            variables,
          },
        );

        if (response.data.accountRegister?.requiresConfirmation === false) {
          // login
          yield put({
            type: "login",
            payload: {
              email,
              password,
              remember: true,
              onError: payload?.onError,
            },
          });

          // set user's name
          yield put({
            type: "updateName",
            payload: {
              firstName,
              lastName,
              onError: payload?.onError,
            },
          });
        }

        payload?.onCompleted(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *updateName({ payload }, { call, put }) {
      try {
        const { firstName, lastName } = payload;
        const nameVariables: CustomerNameUpdateMutationVariables = {
          input: {
            firstName,
            lastName,
          },
        };
        const response: { data: CustomerNameUpdateMutation } = yield call(
          client.mutate,
          {
            mutation: CUSTOMER_NAME_UPDATE_MUTATION,
            variables: nameVariables,
          },
        );
        payload?.onCompleted(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *logout({ payload }, { call, put }) {
      yield put({ type: "clear" });
      yield call(client.resetStore);
      localStorage.removeItem("jwt");
      sessionStorage.removeItem("jwt");
      localStorage.removeItem("rememberme");
      localStorage.removeItem("exp");
    },
  },
  reducers: {
    setLoggedIn(state, { payload }) {
      state.authenticated = payload.authenticated;
    },
    clear(state, { payload }) {
      return { ...defaultState };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === "/") {
          dispatch({
            type: "query",
          });
        }
      });
    },
  },
};

export default AuthModel;
