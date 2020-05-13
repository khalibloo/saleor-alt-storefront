/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CheckoutLineInput, CheckoutErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: CartLinesUpdateMutation
// ====================================================

export interface CartLinesUpdateMutation_checkoutLinesUpdate_errors {
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

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkoutErrors {
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

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout_shippingMethod_minimumOrderPrice {
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

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout_shippingMethod {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  minimumOrderPrice: CartLinesUpdateMutation_checkoutLinesUpdate_checkout_shippingMethod_minimumOrderPrice | null;
}

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout_shippingPrice_gross {
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

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout_shippingPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartLinesUpdateMutation_checkoutLinesUpdate_checkout_shippingPrice_gross;
}

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout_subtotalPrice_gross {
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

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout_subtotalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartLinesUpdateMutation_checkoutLinesUpdate_checkout_subtotalPrice_gross;
}

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout_totalPrice_gross {
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

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartLinesUpdateMutation_checkoutLinesUpdate_checkout_totalPrice_gross;
}

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout_lines {
  __typename: "CheckoutLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
}

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout {
  __typename: "Checkout";
  /**
   * The ID of the object.
   */
  id: string;
  token: any;
  shippingMethod: CartLinesUpdateMutation_checkoutLinesUpdate_checkout_shippingMethod | null;
  /**
   * The price of the shipping, with all the taxes included.
   */
  shippingPrice: CartLinesUpdateMutation_checkoutLinesUpdate_checkout_shippingPrice | null;
  /**
   * The price of the checkout before shipping, with taxes included.
   */
  subtotalPrice: CartLinesUpdateMutation_checkoutLinesUpdate_checkout_subtotalPrice | null;
  /**
   * The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included.
   */
  totalPrice: CartLinesUpdateMutation_checkoutLinesUpdate_checkout_totalPrice | null;
  /**
   * A list of checkout lines, each containing information about an item in the checkout.
   */
  lines: (CartLinesUpdateMutation_checkoutLinesUpdate_checkout_lines | null)[] | null;
}

export interface CartLinesUpdateMutation_checkoutLinesUpdate {
  __typename: "CheckoutLinesUpdate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: CartLinesUpdateMutation_checkoutLinesUpdate_errors[];
  checkoutErrors: CartLinesUpdateMutation_checkoutLinesUpdate_checkoutErrors[];
  /**
   * An updated checkout.
   */
  checkout: CartLinesUpdateMutation_checkoutLinesUpdate_checkout | null;
}

export interface CartLinesUpdateMutation {
  /**
   * Updates checkout line in the existing checkout.
   */
  checkoutLinesUpdate: CartLinesUpdateMutation_checkoutLinesUpdate | null;
}

export interface CartLinesUpdateMutationVariables {
  checkoutId: string;
  checkoutLines: (CheckoutLineInput | null)[];
}
