/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CheckoutLineInput, CheckoutErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: CartLinesUpdateMutation
// ====================================================

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkoutErrors {
  __typename: "CheckoutError";
  /**
   * The error code.
   */
  code: CheckoutErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
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

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout_availableShippingMethods_price {
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

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout_availableShippingMethods {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  price: CartLinesUpdateMutation_checkoutLinesUpdate_checkout_availableShippingMethods_price | null;
}

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout_shippingAddress_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout_shippingAddress {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  cityArea: string;
  postalCode: string;
  /**
   * Shop's default country.
   */
  country: CartLinesUpdateMutation_checkoutLinesUpdate_checkout_shippingAddress_country;
  countryArea: string;
  phone: string | null;
  /**
   * Address is user's default shipping address.
   */
  isDefaultShippingAddress: boolean | null;
  /**
   * Address is user's default billing address.
   */
  isDefaultBillingAddress: boolean | null;
}

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout_billingAddress_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout_billingAddress {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  cityArea: string;
  postalCode: string;
  /**
   * Shop's default country.
   */
  country: CartLinesUpdateMutation_checkoutLinesUpdate_checkout_billingAddress_country;
  countryArea: string;
  phone: string | null;
  /**
   * Address is user's default shipping address.
   */
  isDefaultShippingAddress: boolean | null;
  /**
   * Address is user's default billing address.
   */
  isDefaultBillingAddress: boolean | null;
}

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout_availablePaymentGateways_config {
  __typename: "GatewayConfigLine";
  /**
   * Gateway config key.
   */
  field: string;
  /**
   * Gateway config value for key.
   */
  value: string | null;
}

export interface CartLinesUpdateMutation_checkoutLinesUpdate_checkout_availablePaymentGateways {
  __typename: "PaymentGateway";
  /**
   * Payment gateway ID.
   */
  id: string;
  /**
   * Payment gateway name.
   */
  name: string;
  /**
   * Payment gateway client configuration.
   */
  config: CartLinesUpdateMutation_checkoutLinesUpdate_checkout_availablePaymentGateways_config[];
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
   * Shipping methods that can be used with this order.
   */
  availableShippingMethods: (CartLinesUpdateMutation_checkoutLinesUpdate_checkout_availableShippingMethods | null)[];
  shippingAddress: CartLinesUpdateMutation_checkoutLinesUpdate_checkout_shippingAddress | null;
  billingAddress: CartLinesUpdateMutation_checkoutLinesUpdate_checkout_billingAddress | null;
  /**
   * List of available payment gateways.
   */
  availablePaymentGateways: CartLinesUpdateMutation_checkoutLinesUpdate_checkout_availablePaymentGateways[];
  /**
   * A list of checkout lines, each containing information about an item in the checkout.
   */
  lines: (CartLinesUpdateMutation_checkoutLinesUpdate_checkout_lines | null)[] | null;
}

export interface CartLinesUpdateMutation_checkoutLinesUpdate {
  __typename: "CheckoutLinesUpdate";
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
