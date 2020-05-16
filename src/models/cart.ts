import { Effect, ImmerReducer, Reducer } from "umi";
import { client, APIException } from "@/apollo";
import {
  CartLinesAddMutationVariables,
  CartLinesAddMutation,
} from "@/mutations/types/CartLinesAddMutation";
import {
  CartCreateMutation,
  CartCreateMutationVariables,
  CartCreateMutation_checkoutCreate_checkout,
} from "@/mutations/types/CartCreateMutation";
import { CART_CREATE_MUTATION } from "@/mutations/CartCreate";
import { CART_LINES_ADD_MUTATION } from "@/mutations/CartAddLines";
import { ConnectState } from "./connect";
import {
  CartLinesUpdateMutation,
  CartLinesUpdateMutationVariables,
} from "@/mutations/types/CartLinesUpdateMutation";
import { CART_LINES_UPDATE_MUTATION } from "@/mutations/CartLinesUpdate";
import {
  CartLineDeleteMutationVariables,
  CartLineDeleteMutation,
} from "@/mutations/types/CartLineDeleteMutation";
import { CART_LINE_DELETE_MUTATION } from "@/mutations/CartLineDelete";
import {
  CartShippingAddressMutationVariables,
  CartShippingAddressMutation,
} from "@/mutations/types/CartShippingAddressMutation";
import { CART_SHIPPING_ADDRESS_UPDATE_MUTATION } from "@/mutations/CartShippingAddressUpdate";

export interface CartModelState {
  checkout: CartCreateMutation_checkoutCreate_checkout | null;
}

export interface CartModelType {
  namespace: "cart";
  state: CartModelState;
  effects: {
    create: Effect;
    addItem: Effect;
    updateItem: Effect;
    deleteItem: Effect;
    setShippingAddress: Effect;
  };
  reducers: {
    saveCheckout: ImmerReducer<CartModelState>;
    clear: Reducer<CartModelState>;
  };
}

const defaultState: CartModelState = {
  checkout: null,
};

const AuthModel: CartModelType = {
  namespace: "cart",

  state: {
    ...defaultState,
  },

  effects: {
    *create({ payload }, { call, put }) {
      try {
        const variables: CartCreateMutationVariables = {
          input: {
            email: payload?.email,
            lines: [],
          },
        };
        const response: { data: CartCreateMutation } = yield call(
          client.mutate,
          {
            mutation: CART_CREATE_MUTATION,
            variables,
          },
        );

        const checkout = response.data.checkoutCreate?.checkout;
        yield put({ type: "saveCheckout", payload: { checkout } });

        const errors = response.data.checkoutCreate?.checkoutErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted?.(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *addItem({ payload }, { call, put, select, take }) {
      try {
        const { variantId, quantity } = payload;
        yield put({ type: "create" });
        yield take("saveCheckout");
        let checkout = yield select(
          (state: ConnectState) => state.cart.checkout,
        );
        const variables: CartLinesAddMutationVariables = {
          checkoutId: checkout.id,
          checkoutLines: [{ variantId, quantity }],
        };
        const response: { data: CartLinesAddMutation } = yield call(
          client.mutate,
          {
            mutation: CART_LINES_ADD_MUTATION,
            variables,
          },
        );
        checkout = response.data.checkoutLinesAdd?.checkout;
        yield put({ type: "saveCheckout", payload: { checkout } });

        const errors = response.data.checkoutLinesAdd?.checkoutErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted?.(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *updateItem({ payload }, { call, put, select, take }) {
      try {
        const { variantId, quantity } = payload;
        yield put({ type: "create" });
        yield take("saveCheckout");
        let checkout = yield select(
          (state: ConnectState) => state.cart.checkout,
        );
        const variables: CartLinesUpdateMutationVariables = {
          checkoutId: checkout.id,
          checkoutLines: [{ variantId, quantity }],
        };
        const response: { data: CartLinesUpdateMutation } = yield call(
          client.mutate,
          {
            mutation: CART_LINES_UPDATE_MUTATION,
            variables,
          },
        );
        checkout = response.data.checkoutLinesUpdate?.checkout;
        yield put({ type: "saveCheckout", payload: { checkout } });

        const errors = response.data.checkoutLinesUpdate?.checkoutErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted?.(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *deleteItem({ payload }, { call, put, select, take }) {
      try {
        const { checkoutLineId } = payload;
        yield put({ type: "create" });
        yield take("saveCheckout");
        let checkout = yield select(
          (state: ConnectState) => state.cart.checkout,
        );
        const variables: CartLineDeleteMutationVariables = {
          checkoutId: checkout.id,
          checkoutLineId,
        };
        const response: { data: CartLineDeleteMutation } = yield call(
          client.mutate,
          {
            mutation: CART_LINE_DELETE_MUTATION,
            variables,
          },
        );
        checkout = response.data.checkoutLineDelete?.checkout;
        yield put({ type: "saveCheckout", payload: { checkout } });

        const errors = response.data.checkoutLineDelete?.checkoutErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted?.(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *setShippingAddress({ payload }, { call, put, select, take }) {
      try {
        const { address } = payload;
        yield put({ type: "create" });
        yield take("saveCheckout");
        let checkout = yield select(
          (state: ConnectState) => state.cart.checkout,
        );
        const variables: CartShippingAddressMutationVariables = {
          checkoutId: checkout.id,
          address,
        };
        const response: { data: CartShippingAddressMutation } = yield call(
          client.mutate,
          {
            mutation: CART_SHIPPING_ADDRESS_UPDATE_MUTATION,
            variables,
          },
        );
        checkout = response.data.checkoutShippingAddressUpdate?.checkout;
        yield put({ type: "saveCheckout", payload: { checkout } });

        const errors =
          response.data.checkoutShippingAddressUpdate?.checkoutErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted?.(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
  },
  reducers: {
    saveCheckout(state, { payload }) {
      state.checkout = payload.checkout;
    },
    clear(state, { payload }) {
      return { ...defaultState };
    },
  },
};

export default AuthModel;
