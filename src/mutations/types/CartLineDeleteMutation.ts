/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CheckoutErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: CartLineDeleteMutation
// ====================================================

export interface CartLineDeleteMutation_checkoutLineDelete_errors {
  __typename: "Error";
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface CartLineDeleteMutation_checkoutLineDelete_checkoutErrors {
  __typename: "CheckoutError";
  /**
   * The error code.
   */
  code: CheckoutErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface CartLineDeleteMutation_checkoutLineDelete_checkout_shippingMethod_minimumOrderPrice {
  __typename: "Money";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money.
   */
  amount: number;
}

export interface CartLineDeleteMutation_checkoutLineDelete_checkout_shippingMethod {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  minimumOrderPrice: CartLineDeleteMutation_checkoutLineDelete_checkout_shippingMethod_minimumOrderPrice | null;
}

export interface CartLineDeleteMutation_checkoutLineDelete_checkout_shippingPrice_gross {
  __typename: "Money";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money.
   */
  amount: number;
}

export interface CartLineDeleteMutation_checkoutLineDelete_checkout_shippingPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartLineDeleteMutation_checkoutLineDelete_checkout_shippingPrice_gross;
}

export interface CartLineDeleteMutation_checkoutLineDelete_checkout_subtotalPrice_gross {
  __typename: "Money";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money.
   */
  amount: number;
}

export interface CartLineDeleteMutation_checkoutLineDelete_checkout_subtotalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartLineDeleteMutation_checkoutLineDelete_checkout_subtotalPrice_gross;
}

export interface CartLineDeleteMutation_checkoutLineDelete_checkout_totalPrice_gross {
  __typename: "Money";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money.
   */
  amount: number;
}

export interface CartLineDeleteMutation_checkoutLineDelete_checkout_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartLineDeleteMutation_checkoutLineDelete_checkout_totalPrice_gross;
}

export interface CartLineDeleteMutation_checkoutLineDelete_checkout_lines {
  __typename: "CheckoutLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
}

export interface CartLineDeleteMutation_checkoutLineDelete_checkout {
  __typename: "Checkout";
  /**
   * The ID of the object.
   */
  id: string;
  token: any;
  shippingMethod: CartLineDeleteMutation_checkoutLineDelete_checkout_shippingMethod | null;
  /**
   * The price of the shipping, with all the taxes included.
   */
  shippingPrice: CartLineDeleteMutation_checkoutLineDelete_checkout_shippingPrice | null;
  /**
   * The price of the checkout before shipping, with taxes included.
   */
  subtotalPrice: CartLineDeleteMutation_checkoutLineDelete_checkout_subtotalPrice | null;
  /**
   * The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included.
   */
  totalPrice: CartLineDeleteMutation_checkoutLineDelete_checkout_totalPrice | null;
  /**
   * A list of checkout lines, each containing information about an item in the checkout.
   */
  lines: (CartLineDeleteMutation_checkoutLineDelete_checkout_lines | null)[] | null;
}

export interface CartLineDeleteMutation_checkoutLineDelete {
  __typename: "CheckoutLineDelete";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: CartLineDeleteMutation_checkoutLineDelete_errors[];
  checkoutErrors: CartLineDeleteMutation_checkoutLineDelete_checkoutErrors[];
  /**
   * An updated checkout.
   */
  checkout: CartLineDeleteMutation_checkoutLineDelete_checkout | null;
}

export interface CartLineDeleteMutation {
  /**
   * Deletes a CheckoutLine.
   */
  checkoutLineDelete: CartLineDeleteMutation_checkoutLineDelete | null;
}

export interface CartLineDeleteMutationVariables {
  checkoutId: string;
  checkoutLineId: string;
}
