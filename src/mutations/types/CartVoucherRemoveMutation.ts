/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CheckoutErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: CartVoucherRemoveMutation
// ====================================================

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkoutErrors {
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

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_shippingMethod_minimumOrderPrice {
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

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_shippingMethod {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  minimumOrderPrice: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_shippingMethod_minimumOrderPrice | null;
}

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_shippingPrice_gross {
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

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_shippingPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_shippingPrice_gross;
}

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_subtotalPrice_gross {
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

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_subtotalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_subtotalPrice_gross;
}

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_totalPrice_gross {
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

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_totalPrice_gross;
}

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_availableShippingMethods_price {
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

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_availableShippingMethods {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  price: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_availableShippingMethods_price | null;
}

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_shippingAddress_country {
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

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_shippingAddress {
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
  country: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_shippingAddress_country;
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

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_billingAddress_country {
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

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_billingAddress {
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
  country: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_billingAddress_country;
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

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_availablePaymentGateways_config {
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

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_availablePaymentGateways {
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
  config: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_availablePaymentGateways_config[];
}

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_discount {
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

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_lines {
  __typename: "CheckoutLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
}

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout {
  __typename: "Checkout";
  /**
   * The ID of the object.
   */
  id: string;
  token: any;
  shippingMethod: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_shippingMethod | null;
  /**
   * The price of the shipping, with all the taxes included.
   */
  shippingPrice: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_shippingPrice | null;
  /**
   * The price of the checkout before shipping, with taxes included.
   */
  subtotalPrice: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_subtotalPrice | null;
  /**
   * The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included.
   */
  totalPrice: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_totalPrice | null;
  /**
   * Shipping methods that can be used with this order.
   */
  availableShippingMethods: (CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_availableShippingMethods | null)[];
  shippingAddress: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_shippingAddress | null;
  billingAddress: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_billingAddress | null;
  /**
   * List of available payment gateways.
   */
  availablePaymentGateways: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_availablePaymentGateways[];
  discount: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_discount | null;
  /**
   * A list of checkout lines, each containing information about an item in the checkout.
   */
  lines: (CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout_lines | null)[] | null;
}

export interface CartVoucherRemoveMutation_checkoutRemovePromoCode {
  __typename: "CheckoutRemovePromoCode";
  checkoutErrors: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkoutErrors[];
  /**
   * The checkout with the removed gift card or voucher.
   */
  checkout: CartVoucherRemoveMutation_checkoutRemovePromoCode_checkout | null;
}

export interface CartVoucherRemoveMutation {
  /**
   * Remove a gift card or a voucher from a checkout.
   */
  checkoutRemovePromoCode: CartVoucherRemoveMutation_checkoutRemovePromoCode | null;
}

export interface CartVoucherRemoveMutationVariables {
  checkoutId: string;
  voucherCode: string;
}
