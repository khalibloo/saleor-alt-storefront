import { Effect, ImmerReducer, Subscription, Reducer } from "umi";
import { client, APIException } from "@/apollo";
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
import { USER_CONFIRM_EMAIL_CHANGE_MUTATION } from "@/mutations/UserConfirmEmailChange";
import { USER_ADDRESS_CREATE_MUTATION } from "@/mutations/UserAddressCreate";
import { USER_ADDRESS_UPDATE_MUTATION } from "@/mutations/UserAddressUpdate";
import { USER_ADDRESS_DELETE_MUTATION } from "@/mutations/UserAddressDelete";
import {
  UserRegisterMutationVariables,
  UserRegisterMutation,
} from "@/mutations/types/UserRegisterMutation";
import {
  UserNameUpdateMutationVariables,
  UserNameUpdateMutation,
} from "@/mutations/types/userNameUpdateMutation";
import {
  UserAddressCreateMutationVariables,
  UserAddressCreateMutation,
} from "@/mutations/types/UserAddressCreateMutation";
import {
  UserAddressUpdateMutationVariables,
  UserAddressUpdateMutation,
} from "@/mutations/types/UserAddressUpdateMutation";
import {
  UserAddressDeleteMutationVariables,
  UserAddressDeleteMutation,
} from "@/mutations/types/UserAddressDeleteMutation";
import {
  PasswordChangeMutationVariables,
  PasswordChangeMutation,
} from "@/mutations/types/PasswordChangeMutation";
import { USER_PASSWORD_CHANGE_MUTATION } from "@/mutations/UserPasswordChange";
import { USER_CONFIRM_DEACTIVATION_MUTATION } from "@/mutations/UserConfirmDeactivation";
import {
  UserRequestDeactivationMutationVariables,
  UserRequestDeactivationMutation,
} from "@/mutations/types/UserRequestDeactivationMutation";
import { USER_REQUEST_DEACTIVATION_MUTATION } from "@/mutations/UserRequestDeactivation";
import { USER_REQUEST_PASSWORD_RESET_MUTATION } from "@/mutations/UserRequestPasswordReset";
import { USER_CONFIRM_PASSWORD_RESET_MUTATION } from "@/mutations/UserConfirmPasswordReset";
import {
  UserRequestEmailChangeMutation,
  UserRequestEmailChangeMutationVariables,
} from "@/mutations/types/UserRequestEmailChangeMutation";
import { USER_REQUEST_EMAIL_CHANGE_MUTATION } from "@/mutations/UserRequestEmailChange";
import {
  UserConfirmEmailChangeMutation,
  UserConfirmEmailChangeMutationVariables,
} from "@/mutations/types/UserConfirmEmailChangeMutation";
import {
  UserConfirmPasswordResetMutation,
  UserConfirmPasswordResetMutationVariables,
} from "@/mutations/types/UserConfirmPasswordResetMutation";
import {
  UserConfirmDeactivationMutation,
  UserConfirmDeactivationMutationVariables,
} from "@/mutations/types/UserConfirmDeactivationMutation";
import {
  UserRequestPasswordResetMutation,
  UserRequestPasswordResetMutationVariables,
} from "@/mutations/types/UserRequestPasswordResetMutation";
import {
  UserSetDefaultAddressMutation,
  UserSetDefaultAddressMutationVariables,
} from "@/mutations/types/UserSetDefaultAddressMutation";
import { USER_SET_DEFAULT_ADDRESS_MUTATION } from "@/mutations/UserSetDefaultAddress";

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
    requestEmailChange: Effect;
    confirmEmailChange: Effect;
    changePassword: Effect;
    requestPasswordReset: Effect;
    confirmPasswordReset: Effect;
    createAddress: Effect;
    updateAddress: Effect;
    setDefaultAddress: Effect;
    deleteAddress: Effect;
    logout: Effect;
    requestAccountDeactivation: Effect;
    confirmAccountDeactivation: Effect;
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
        yield call(client.resetStore);

        if (!response.data.tokenCreate?.token) {
          throw new APIException([
            { field: null, message: null, code: "INVALID_CREDENTIALS" },
          ]);
        }
        payload?.onCompleted?.(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *signup({ payload }, { call, put, take }) {
      try {
        const { firstName, lastName, email, password } = payload;
        // create account
        const variables: UserRegisterMutationVariables = {
          input: {
            email,
            password,
            redirectUrl: window.location.origin,
          },
        };
        const response: { data: UserRegisterMutation } = yield call(
          client.mutate,
          {
            mutation: USER_REGISTER_MUTATION,
            variables,
          },
        );

        const errors = response.data.accountRegister?.accountErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }

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
        yield call(client.resetStore);
        payload?.onCompleted(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *updateName({ payload }, { call, put }) {
      try {
        const { firstName, lastName } = payload;
        const variables: UserNameUpdateMutationVariables = {
          input: {
            firstName,
            lastName,
          },
        };
        const response: { data: UserNameUpdateMutation } = yield call(
          client.mutate,
          {
            mutation: USER_NAME_UPDATE_MUTATION,
            variables: variables,
          },
        );
        const errors = response.data.accountUpdate?.accountErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *requestEmailChange({ payload }, { call, put }) {
      try {
        const { email, password } = payload;
        const variables: UserRequestEmailChangeMutationVariables = {
          newEmail: email,
          password,
          redirectUrl: window.location.origin + "/account/confirm/emailchange",
        };
        const response: { data: UserRequestEmailChangeMutation } = yield call(
          client.mutate,
          {
            mutation: USER_REQUEST_EMAIL_CHANGE_MUTATION,
            variables: variables,
          },
        );
        const errors = response.data.requestEmailChange?.accountErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *confirmEmailChange({ payload }, { call, put }) {
      try {
        const { token } = payload;
        const variables: UserConfirmEmailChangeMutationVariables = {
          token,
        };
        const response: { data: UserConfirmEmailChangeMutation } = yield call(
          client.mutate,
          {
            mutation: USER_CONFIRM_EMAIL_CHANGE_MUTATION,
            variables: variables,
          },
        );
        const errors = response.data.confirmEmailChange?.accountErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *changePassword({ payload }, { call, put }) {
      try {
        const { oldPassword, newPassword } = payload;
        const variables: PasswordChangeMutationVariables = {
          oldPassword,
          newPassword,
        };
        const response: { data: PasswordChangeMutation } = yield call(
          client.mutate,
          {
            mutation: USER_PASSWORD_CHANGE_MUTATION,
            variables: variables,
          },
        );
        const errors = response.data.passwordChange?.accountErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *requestPasswordReset({ payload }, { call, put }) {
      try {
        const { email } = payload;
        const variables: UserRequestPasswordResetMutationVariables = {
          email,
          redirectUrl: window.location.origin + "/account/confirm/resetpwd",
        };
        const response: { data: UserRequestPasswordResetMutation } = yield call(
          client.mutate,
          {
            mutation: USER_REQUEST_PASSWORD_RESET_MUTATION,
            variables: variables,
          },
        );
        const errors = response.data.requestPasswordReset?.accountErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *confirmPasswordReset({ payload }, { call, put }) {
      try {
        const { email, password, token } = payload;
        const variables: UserConfirmPasswordResetMutationVariables = {
          email,
          password,
          token,
        };
        const response: { data: UserConfirmPasswordResetMutation } = yield call(
          client.mutate,
          {
            mutation: USER_CONFIRM_PASSWORD_RESET_MUTATION,
            variables: variables,
          },
        );

        const errors = response.data.setPassword?.accountErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *createAddress({ payload }, { call, put }) {
      try {
        const { address } = payload;
        const variables: UserAddressCreateMutationVariables = {
          address,
        };
        const response: { data: UserAddressCreateMutation } = yield call(
          client.mutate,
          {
            mutation: USER_ADDRESS_CREATE_MUTATION,
            variables: variables,
          },
        );
        const errors = response.data.accountAddressCreate?.accountErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *updateAddress({ payload }, { call, put }) {
      try {
        const { id, address } = payload;
        const variables: UserAddressUpdateMutationVariables = {
          id,
          address,
        };
        const response: { data: UserAddressUpdateMutation } = yield call(
          client.mutate,
          {
            mutation: USER_ADDRESS_UPDATE_MUTATION,
            variables: variables,
          },
        );
        const errors = response.data.accountAddressUpdate?.accountErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *setDefaultAddress({ payload }, { call, put }) {
      try {
        const { id, type } = payload;
        const variables: UserSetDefaultAddressMutationVariables = {
          id,
          type,
        };
        const response: { data: UserSetDefaultAddressMutation } = yield call(
          client.mutate,
          {
            mutation: USER_SET_DEFAULT_ADDRESS_MUTATION,
            variables: variables,
          },
        );
        const errors = response.data.accountSetDefaultAddress?.accountErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *deleteAddress({ payload }, { call, put }) {
      try {
        const { id } = payload;
        const variables: UserAddressDeleteMutationVariables = {
          id,
        };
        const response: { data: UserAddressDeleteMutation } = yield call(
          client.mutate,
          {
            mutation: USER_ADDRESS_DELETE_MUTATION,
            variables: variables,
          },
        );
        const errors = response.data.accountAddressDelete?.accountErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *logout({ payload }, { call, put }) {
      yield put({ type: "clear" });
      localStorage.removeItem("jwt");
      sessionStorage.removeItem("jwt");
      localStorage.removeItem("rememberme");
      yield call(client.resetStore);
    },
    *requestAccountDeactivation({ payload }, { call, put }) {
      try {
        const variables: UserRequestDeactivationMutationVariables = {
          redirectUrl: window.location.origin + "/account/confirm/deactivate",
        };
        const response: { data: UserRequestDeactivationMutation } = yield call(
          client.mutate,
          {
            mutation: USER_REQUEST_DEACTIVATION_MUTATION,
            variables: variables,
          },
        );
        const errors = response.data.accountRequestDeletion?.accountErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *confirmAccountDeactivation({ payload }, { call, put }) {
      try {
        const variables: UserConfirmDeactivationMutationVariables = {
          token: payload.token,
        };
        const response: { data: UserConfirmDeactivationMutation } = yield call(
          client.mutate,
          {
            mutation: USER_CONFIRM_DEACTIVATION_MUTATION,
            variables: variables,
          },
        );
        yield put({ type: "logout" });
        const errors = response.data.accountDelete?.accountErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
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
