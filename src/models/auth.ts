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
import { USER_REGISTER_MUTATION } from "@/mutations/UserRegister";
import { USER_NAME_UPDATE_MUTATION } from "@/mutations/UserNameUpdate";
import { USER_EMAIL_CHANGE_MUTATION } from "@/mutations/UserEmailChange";
import {
  userRegisterMutationVariables,
  userRegisterMutation,
} from "@/mutations/types/userRegisterMutation";
import {
  userNameUpdateMutationVariables,
  userNameUpdateMutation,
} from "@/mutations/types/userNameUpdateMutation";
import {
  requestEmailChangeMutation,
  requestEmailChangeMutationVariables,
} from "@/mutations/types/requestEmailChangeMutation";
import {
  accountAddressCreateMutationVariables,
  accountAddressCreateMutation,
} from "@/mutations/types/accountAddressCreateMutation";
import { USER_ADDRESS_CREATE_MUTATION } from "@/mutations/UserAddressCreate";

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
    changeEmail: Effect;
    createAddress: Effect;
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
        const variables: userRegisterMutationVariables = {
          input: {
            email,
            password,
            redirectUrl: window.location.origin,
          },
        };
        const response: { data: userRegisterMutation } = yield call(
          client.mutate,
          {
            mutation: USER_REGISTER_MUTATION,
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

          yield take("setLoggedIn");
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
        const variables: userNameUpdateMutationVariables = {
          input: {
            firstName,
            lastName,
          },
        };
        const response: { data: userNameUpdateMutation } = yield call(
          client.mutate,
          {
            mutation: USER_NAME_UPDATE_MUTATION,
            variables: variables,
          },
        );
        payload?.onCompleted(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *changeEmail({ payload }, { call, put }) {
      try {
        const { email, password } = payload;
        const variables: requestEmailChangeMutationVariables = {
          newEmail: email,
          password,
          redirectUrl: window.location.origin + "/profile",
        };
        const response: { data: requestEmailChangeMutation } = yield call(
          client.mutate,
          {
            mutation: USER_EMAIL_CHANGE_MUTATION,
            variables: variables,
          },
        );
        payload?.onCompleted(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *createAddress({ payload }, { call, put }) {
      try {
        const { address } = payload;
        const variables: accountAddressCreateMutationVariables = {
          address,
        };
        const response: { data: accountAddressCreateMutation } = yield call(
          client.mutate,
          {
            mutation: USER_ADDRESS_CREATE_MUTATION,
            variables: variables,
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
