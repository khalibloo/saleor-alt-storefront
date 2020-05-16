/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { AddressInput, CheckoutErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: CartShippingAddressMutation
// ====================================================

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate_checkoutErrors {
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

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_shippingMethod_minimumOrderPrice {
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

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_shippingMethod {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  minimumOrderPrice: CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_shippingMethod_minimumOrderPrice | null;
}

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_shippingPrice_gross {
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

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_shippingPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_shippingPrice_gross;
}

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_subtotalPrice_gross {
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

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_subtotalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_subtotalPrice_gross;
}

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_totalPrice_gross {
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

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_totalPrice_gross;
}

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_availableShippingMethods_price {
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

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_availableShippingMethods {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  price: CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_availableShippingMethods_price | null;
}

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_shippingAddress_country {
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

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_shippingAddress {
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
  country: CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_shippingAddress_country;
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

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_billingAddress_country {
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

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_billingAddress {
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
  country: CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_billingAddress_country;
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

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_lines {
  __typename: "CheckoutLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
}

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout {
  __typename: "Checkout";
  /**
   * The ID of the object.
   */
  id: string;
  token: any;
  shippingMethod: CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_shippingMethod | null;
  /**
   * The price of the shipping, with all the taxes included.
   */
  shippingPrice: CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_shippingPrice | null;
  /**
   * The price of the checkout before shipping, with taxes included.
   */
  subtotalPrice: CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_subtotalPrice | null;
  /**
   * The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included.
   */
  totalPrice: CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_totalPrice | null;
  /**
   * Shipping methods that can be used with this order.
   */
  availableShippingMethods: (CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_availableShippingMethods | null)[];
  shippingAddress: CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_shippingAddress | null;
  billingAddress: CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_billingAddress | null;
  /**
   * A list of checkout lines, each containing information about an item in the checkout.
   */
  lines: (CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout_lines | null)[] | null;
}

export interface CartShippingAddressMutation_checkoutShippingAddressUpdate {
  __typename: "CheckoutShippingAddressUpdate";
  checkoutErrors: CartShippingAddressMutation_checkoutShippingAddressUpdate_checkoutErrors[];
  /**
   * An updated checkout.
   */
  checkout: CartShippingAddressMutation_checkoutShippingAddressUpdate_checkout | null;
}

export interface CartShippingAddressMutation {
  /**
   * Update shipping address in the existing checkout.
   */
  checkoutShippingAddressUpdate: CartShippingAddressMutation_checkoutShippingAddressUpdate | null;
}

export interface CartShippingAddressMutationVariables {
  checkoutId: string;
  address: AddressInput;
}
