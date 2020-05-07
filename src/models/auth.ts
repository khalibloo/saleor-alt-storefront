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

export interface AuthModelState {
  authenticated: boolean;
}

export interface AuthModelType {
  namespace: "auth";
  state: AuthModelState;
  effects: {
    initialize: Effect;
    login: Effect;
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
        const email = payload.email;
        const password = payload.password;
        const remember = payload.remember;
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
