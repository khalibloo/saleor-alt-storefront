import { Effect, ImmerReducer, Reducer } from "umi";
import { client, APIException } from "@/apollo";
import lf from "localforage";
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
import {
  CartVoucherAddMutation,
  CartVoucherAddMutationVariables,
} from "@/mutations/types/CartVoucherAddMutation";
import { CART_VOUCHER_ADD_MUTATION } from "@/mutations/CartVoucherAdd";
import {
  CartVoucherRemoveMutation,
  CartVoucherRemoveMutationVariables,
} from "@/mutations/types/CartVoucherRemoveMutation";
import { CART_VOUCHER_REMOVE_MUTATION } from "@/mutations/CartVoucherRemove";
import config from "@/config";
import { CART_BADGE_WITH_TOKEN_QUERY } from "@/queries/cart";
import {
  cartBadgeWithTokenQuery,
  cartBadgeWithTokenQueryVariables,
} from "@/queries/types/cartBadgeWithTokenQuery";
import {
  productDetailQuery_product,
  productDetailQuery_product_variants,
} from "@/queries/types/productDetailQuery";

export interface CartModelState {
  checkout: CartCreateMutation_checkoutCreate_checkout | null;
  guestCartModalOpen: boolean;
  guestCartEntry: {
    variantId: string;
    quantity: number;
    variant: productDetailQuery_product_variants;
    product: productDetailQuery_product;
  } | null;
  onAddItem: Function | undefined;
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
    addVoucher: Effect;
    removeVoucher: Effect;
    createPayment: Effect;
  };
  reducers: {
    saveCheckout: ImmerReducer<CartModelState>;
    setGuestCartModalOpen: ImmerReducer<CartModelState>;
    saveGuestCartEntry: ImmerReducer<CartModelState>;
    setOnAddItemCallback: ImmerReducer<CartModelState>;
    clear: Reducer<CartModelState>;
  };
}

const defaultState: CartModelState = {
  checkout: null,
  guestCartModalOpen: false,
  guestCartEntry: null,
  onAddItem: undefined,
};

const CartModel: CartModelType = {
  namespace: "cart",

  state: {
    ...defaultState,
  },

  effects: {
    *create({ payload }, { call, put, select }) {
      try {
        const authenticated = yield select(
          (state: ConnectState) => state.auth.authenticated,
        );
        const guestCartToken = yield lf.getItem("guest_cart_token");
        let checkout;
        if (!authenticated && guestCartToken) {
          const variables: cartBadgeWithTokenQueryVariables = {
            token: guestCartToken,
          };
          const response: {
            data: cartBadgeWithTokenQuery;
          } = yield call(client.query, {
            query: CART_BADGE_WITH_TOKEN_QUERY,
            variables,
          });

          checkout = response.data.checkout;
        } else {
          const guestEmail = yield lf.getItem("guest_email");
          const email = authenticated
            ? undefined
            : payload?.email || guestEmail;
          const variables: CartCreateMutationVariables = {
            input: {
              email,
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
          const errors = response.data.checkoutCreate?.checkoutErrors;
          if (errors && errors.length > 0) {
            throw new APIException(errors);
          }

          checkout = response.data.checkoutCreate?.checkout;
        }
        yield put({ type: "saveCheckout", payload: { checkout } });
        if (!authenticated) {
          yield lf.setItem("guest_cart_token", checkout?.token);
        }

        payload?.onCompleted?.(checkout);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *addItem({ payload }, { call, put, select, take }) {
      try {
        const {
          variantId,
          quantity,
          variant,
          product,
        }: {
          variantId: string;
          quantity: number;
          variant: productDetailQuery_product_variants;
          product: productDetailQuery_product;
        } = payload;
        const authenticated = yield select(
          (state: ConnectState) => state.auth.authenticated,
        );
        const localEmail = yield lf.getItem("guest_email");
        if (!authenticated && !localEmail) {
          // save cart line
          yield put({
            type: "saveGuestCartEntry",
            payload: { line: { variantId, quantity, variant, product } },
          });
          if (config.altConfig.allowAnonCheckout) {
            yield put({
              type: "setGuestCartModalOpen",
              payload: { open: true },
            });
          } else {
            yield put({
              type: "auth/setAuthModalOpen",
              payload: { open: true, line: { variantId, quantity } },
            });
          }
          yield put({
            type: "setOnAddItemCallback",
            payload: { onAddItem: payload?.onCompleted },
          });
          // payload?.onCompleted?.();
        } else {
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
          yield put({
            type: "saveGuestCartEntry",
            payload: { line: null },
          });
          payload?.onCompleted?.(response.data);
          const savedCallback = yield select(
            (state: ConnectState) => state.cart.onAddItem,
          );
          savedCallback?.();
          yield put({
            type: "setOnAddItemCallback",
            payload: { onAddItem: undefined },
          });
        }

        // Google Commerce - track add to cart
        if (config.gtmEnabled && product && variant) {
          window.dataLayer.push({
            event: "add_to_cart",
            ecommerce: {
              currency: variant.pricing?.price?.gross.currency,
              items: [
                {
                  item_name: product.name,
                  item_id: variant.sku,
                  price: variant.pricing?.price?.gross.amount,
                  item_category: product.category?.name,
                  item_variant: variant.name,
                  quantity: quantity,
                },
              ],
            },
          });
        }
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *updateItem({ payload }, { call, put, select, take }) {
      try {
        const { variantId, quantity, variant, product, oldQuantity } = payload;
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

        // Google Commerce - track cart qty adjustments
        if (config.gtmEnabled && product && variant) {
          if (quantity > oldQuantity) {
            // item qty has been increased
            window.dataLayer.push({
              event: "add_to_cart",
              ecommerce: {
                currency: variant.pricing?.price?.gross.currency,
                items: [
                  {
                    item_name: product.name,
                    item_id: variant.sku,
                    price: variant.pricing?.price?.gross.amount.toString(),
                    item_category: product.category?.name,
                    item_variant: variant.name,
                    quantity: quantity - oldQuantity,
                  },
                ],
              },
            });
          } else if (quantity < oldQuantity) {
            // item qty has been decreased
            window.dataLayer.push({
              event: "remove_from_cart",
              ecommerce: {
                currency: variant.pricing?.price?.gross.currency,
                items: [
                  {
                    item_name: product.name,
                    item_id: variant.sku,
                    price: variant.pricing?.price?.gross.amount.toString(),
                    item_category: product.category?.name,
                    item_variant: variant.name,
                    quantity: oldQuantity - quantity,
                  },
                ],
              },
            });
          }
        }

        payload?.onCompleted?.(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *deleteItem({ payload }, { call, put, select, take }) {
      try {
        const { checkoutLineId, variant, product, quantity } = payload;
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

        // Google Commerce - track add to cart
        if (config.gtmEnabled && product && variant) {
          window.dataLayer.push({
            event: "remove_from_cart",
            ecommerce: {
              currency: variant.pricing?.price?.gross.currency,
              items: [
                {
                  item_name: product.name,
                  item_id: variant.sku,
                  price: variant.pricing?.price?.gross.amount.toString(),
                  item_category: product.category?.name,
                  item_variant: variant.name,
                  quantity: quantity,
                },
              ],
            },
          });
        }
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
    *addVoucher({ payload }, { call, put, select, take }) {
      try {
        const { voucherCode } = payload;
        yield put({ type: "create" });
        yield take("saveCheckout");
        let checkout = yield select(
          (state: ConnectState) => state.cart.checkout,
        );
        const variables: CartVoucherAddMutationVariables = {
          checkoutId: checkout.id,
          voucherCode,
        };
        const response: { data: CartVoucherAddMutation } = yield call(
          client.mutate,
          {
            mutation: CART_VOUCHER_ADD_MUTATION,
            variables,
          },
        );
        checkout = response.data.checkoutAddPromoCode?.checkout;
        yield put({ type: "saveCheckout", payload: { checkout } });

        const errors = response.data.checkoutAddPromoCode?.checkoutErrors;
        if (errors && errors.length > 0) {
          throw new APIException(errors);
        }
        payload?.onCompleted?.(response.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
    *removeVoucher({ payload }, { call, put, select, take }) {
      try {
        const { voucherCode } = payload;
        yield put({ type: "create" });
        yield take("saveCheckout");
        let checkout = yield select(
          (state: ConnectState) => state.cart.checkout,
        );
        const variables: CartVoucherRemoveMutationVariables = {
          checkoutId: checkout.id,
          voucherCode,
        };
        const response: { data: CartVoucherRemoveMutation } = yield call(
          client.mutate,
          {
            mutation: CART_VOUCHER_REMOVE_MUTATION,
            variables,
          },
        );
        checkout = response.data.checkoutRemovePromoCode?.checkout;
        yield put({ type: "saveCheckout", payload: { checkout } });

        const errors = response.data.checkoutRemovePromoCode?.checkoutErrors;
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

        yield lf.removeItem("guest_cart_token");
        yield put({ type: "cart/create" });

        payload?.onCompleted?.(res.data);
      } catch (err) {
        payload?.onError?.(err);
      }
    },
  },
  reducers: {
    saveCheckout(state, { payload }) {
      state.checkout = payload.checkout;
    },
    setGuestCartModalOpen(state: CartModelState, { payload }) {
      state.guestCartModalOpen = payload.open;
    },
    saveGuestCartEntry(state: CartModelState, { payload }) {
      state.guestCartEntry = payload.line;
    },
    setOnAddItemCallback(state: CartModelState, { payload }) {
      state.onAddItem = payload.onAddItem;
    },
    clear(state, { payload }) {
      return { ...defaultState };
    },
  },
};

export default CartModel;
