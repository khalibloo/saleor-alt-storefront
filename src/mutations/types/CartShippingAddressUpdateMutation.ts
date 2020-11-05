/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AddressInput, CheckoutErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: CartShippingAddressUpdateMutation
// ====================================================

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkoutErrors {
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

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_shippingMethod_minimumOrderPrice {
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

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_shippingMethod {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  minimumOrderPrice: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_shippingMethod_minimumOrderPrice | null;
}

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_shippingPrice_gross {
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

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_shippingPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_shippingPrice_gross;
}

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_subtotalPrice_gross {
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

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_subtotalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_subtotalPrice_gross;
}

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_totalPrice_gross {
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

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_totalPrice_gross;
}

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_discount {
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

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_availableShippingMethods_price {
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

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_availableShippingMethods {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  price: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_availableShippingMethods_price | null;
}

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_shippingAddress_country {
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

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_shippingAddress {
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
  country: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_shippingAddress_country;
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

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_billingAddress_country {
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

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_billingAddress {
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
  country: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_billingAddress_country;
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

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_availablePaymentGateways_config {
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

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_availablePaymentGateways {
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
  config: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_availablePaymentGateways_config[];
}

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_lines {
  __typename: "CheckoutLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
}

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout {
  __typename: "Checkout";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The checkout's token.
   */
  token: any;
  /**
   * Email of a customer.
   */
  email: string;
  shippingMethod: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_shippingMethod | null;
  /**
   * The price of the shipping, with all the taxes included.
   */
  shippingPrice: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_shippingPrice | null;
  /**
   * The price of the checkout before shipping, with taxes included.
   */
  subtotalPrice: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_subtotalPrice | null;
  /**
   * The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included.
   */
  totalPrice: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_totalPrice | null;
  discount: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_discount | null;
  voucherCode: string | null;
  /**
   * Shipping methods that can be used with this order.
   */
  availableShippingMethods: (CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_availableShippingMethods | null)[];
  shippingAddress: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_shippingAddress | null;
  billingAddress: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_billingAddress | null;
  /**
   * List of available payment gateways.
   */
  availablePaymentGateways: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_availablePaymentGateways[];
  /**
   * A list of checkout lines, each containing information about an item in the checkout.
   */
  lines: (CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout_lines | null)[] | null;
}

export interface CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate {
  __typename: "CheckoutShippingAddressUpdate";
  checkoutErrors: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkoutErrors[];
  /**
   * An updated checkout.
   */
  checkout: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate_checkout | null;
}

export interface CartShippingAddressUpdateMutation {
  /**
   * Update shipping address in the existing checkout.
   */
  checkoutShippingAddressUpdate: CartShippingAddressUpdateMutation_checkoutShippingAddressUpdate | null;
}

export interface CartShippingAddressUpdateMutationVariables {
  checkoutId: string;
  address: AddressInput;
}
