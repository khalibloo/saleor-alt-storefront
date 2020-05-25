/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CheckoutCreateInput, CheckoutErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: CartCreateMutation
// ====================================================

export interface CartCreateMutation_checkoutCreate_checkoutErrors {
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

export interface CartCreateMutation_checkoutCreate_checkout_shippingMethod_minimumOrderPrice {
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

export interface CartCreateMutation_checkoutCreate_checkout_shippingMethod {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  minimumOrderPrice: CartCreateMutation_checkoutCreate_checkout_shippingMethod_minimumOrderPrice | null;
}

export interface CartCreateMutation_checkoutCreate_checkout_shippingPrice_gross {
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

export interface CartCreateMutation_checkoutCreate_checkout_shippingPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartCreateMutation_checkoutCreate_checkout_shippingPrice_gross;
}

export interface CartCreateMutation_checkoutCreate_checkout_subtotalPrice_gross {
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

export interface CartCreateMutation_checkoutCreate_checkout_subtotalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartCreateMutation_checkoutCreate_checkout_subtotalPrice_gross;
}

export interface CartCreateMutation_checkoutCreate_checkout_totalPrice_gross {
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

export interface CartCreateMutation_checkoutCreate_checkout_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartCreateMutation_checkoutCreate_checkout_totalPrice_gross;
}

export interface CartCreateMutation_checkoutCreate_checkout_lines {
  __typename: "CheckoutLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
}

export interface CartCreateMutation_checkoutCreate_checkout {
  __typename: "Checkout";
  /**
   * The ID of the object.
   */
  id: string;
  token: any;
  shippingMethod: CartCreateMutation_checkoutCreate_checkout_shippingMethod | null;
  /**
   * The price of the shipping, with all the taxes included.
   */
  shippingPrice: CartCreateMutation_checkoutCreate_checkout_shippingPrice | null;
  /**
   * The price of the checkout before shipping, with taxes included.
   */
  subtotalPrice: CartCreateMutation_checkoutCreate_checkout_subtotalPrice | null;
  /**
   * The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included.
   */
  totalPrice: CartCreateMutation_checkoutCreate_checkout_totalPrice | null;
  /**
   * A list of checkout lines, each containing information about an item in the checkout.
   */
  lines: (CartCreateMutation_checkoutCreate_checkout_lines | null)[] | null;
}

export interface CartCreateMutation_checkoutCreate {
  __typename: "CheckoutCreate";
  checkoutErrors: CartCreateMutation_checkoutCreate_checkoutErrors[];
  checkout: CartCreateMutation_checkoutCreate_checkout | null;
}

export interface CartCreateMutation {
  /**
   * Create a new checkout.
   */
  checkoutCreate: CartCreateMutation_checkoutCreate | null;
}

export interface CartCreateMutationVariables {
  input: CheckoutCreateInput;
}
