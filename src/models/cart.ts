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
  CartShippingAddressUpdateMutationVariables,
  CartShippingAddressUpdateMutation,
} from "@/mutations/types/CartShippingAddressUpdateMutation";
import { CART_SHIPPING_ADDRESS_UPDATE_MUTATION } from "@/mutations/CartShippingAddressUpdate";
import {
  CartShippingMethodUpdateMutationVariables,
  CartShippingMethodUpdateMutation,
} from "@/mutations/types/CartShippingMethodUpdateMutation";
import { CART_SHIPPING_METHOD_UPDATE_MUTATION } from "@/mutations/CartShippingMethodUpdate";
import {
  CartPaymentCreateMutation,
  CartPaymentCreateMutationVariables,
} from "@/mutations/types/CartPaymentCreateMutation";
import { CART_PAYMENT_CREATE_MUTATION } from "@/mutations/CartPaymentCreate";
import {
  CartCompleteMutation,
  CartCompleteMutationVariables,
} from "@/mutations/types/CartCompleteMutation";
import { CART_COMPLETE_MUTATION } from "@/mutations/CartComplete";
import {
  CartBillingAddressUpdateMutation,
  CartBillingAddressUpdateMutationVariables,
} from "@/mutations/types/CartBillingAddressUpdateMutation";
import { CART_BILLING_ADDRESS_UPDATE_MUTATION } from "@/mutations/CartBillingAddressUpdate";

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
    setBillingAddress: Effect;
    setShippingAddress: Effect;
    setShippingMethod: Effect;
    createPayment: Effect;
  };
  reducers: {
    saveCheckout: ImmerReducer<CartModelState>;
    clear: Reducer<CartModelState>;
  };
}

const defaultState: CartModelState = {
  checkout: null,
};

const CartModel: CartModelType = {
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
    *setBillingAddress({ payload }, { call, put, select, take }) {
      try {
        const { address } = payload;
        yield put({ type: "create" });
        yield take("saveCheckout");
        let checkout = yield select(
          (state: ConnectState) => state.cart.checkout,
        );
        const variables: CartBillingAddressUpdateMutationVariables = {
          checkoutId: checkout.id,
          address,
        };
        const response: {
          data: CartBillingAddressUpdateMutation;
        } = yield call(client.mutate, {
          mutation: CART_BILLING_ADDRESS_UPDATE_MUTATION,
          variables,
        });
        checkout = response.data.checkoutBillingAddressUpdate?.checkout;
        yield put({ type: "saveCheckout", payload: { checkout } });

        const errors =
          response.data.checkoutBillingAddressUpdate?.checkoutErrors;
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
        const variables: CartShippingAddressUpdateMutationVariables = {
          checkoutId: checkout.id,
          address,
        };
        const response: {
          data: CartShippingAddressUpdateMutation;
        } = yield call(client.mutate, {
          mutation: CART_SHIPPING_ADDRESS_UPDATE_MUTATION,
          variables,
        });
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
    *setShippingMethod({ payload }, { call, put, select, take }) {
      try {
        const { shippingMethodId } = payload;
        yield put({ type: "create" });
        yield take("saveCheckout");
        let checkout = yield select(
          (state: ConnectState) => state.cart.checkout,
        );
        const variables: CartShippingMethodUpdateMutationVariables = {
          checkoutId: checkout.id,
          shippingMethodId,
        };
        const response: { data: CartShippingMethodUpdateMutation } = yield call(
          client.mutate,
          {
            mutation: CART_SHIPPING_METHOD_UPDATE_MUTATION,
            variables,
          },
        );
        checkout = response.data.checkoutShippingMethodUpdate?.checkout;
        yield put({ type: "saveCheckout", payload: { checkout } });

        const errors =
          response.data.checkoutShippingMethodUpdate?.checkoutErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted?.(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *createPayment({ payload }, { call, put, select, take }) {
      try {
        const { gateway, token, amount, billingAddress } = payload;
        yield put({ type: "create" });
        yield take("saveCheckout");
        let checkout = yield select(
          (state: ConnectState) => state.cart.checkout,
        );
        // pay
        const variables: CartPaymentCreateMutationVariables = {
          checkoutId: checkout.id,
          paymentDetails: {
            gateway,
            token,
            amount,
            billingAddress,
          },
        };
        const response: { data: CartPaymentCreateMutation } = yield call(
          client.mutate,
          {
            mutation: CART_PAYMENT_CREATE_MUTATION,
            variables,
          },
        );
        // checkout = response.data.checkoutPaymentCreate?.checkout;
        // yield put({ type: "saveCheckout", payload: { checkout } });

        const errors = response.data.checkoutPaymentCreate?.paymentErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }

        // complete
        const vars: CartCompleteMutationVariables = {
          checkoutId: checkout.id,
          redirectUrl: window.location.origin + "/orders",
          storeSource: false,
        };
        const res: { data: CartCompleteMutation } = yield call(client.mutate, {
          mutation: CART_COMPLETE_MUTATION,
          variables: vars,
        });

        const errs = res.data.checkoutComplete?.checkoutErrors;
        if (errs && errs.length > 0) {
          throw new APIException(errs);
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

export default CartModel;
