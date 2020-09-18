/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaymentInput, PaymentErrorCode, PaymentChargeStatusEnum } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: CartPaymentCreateMutation
// ====================================================

export interface CartPaymentCreateMutation_checkoutPaymentCreate_paymentErrors {
  __typename: "PaymentError";
  /**
   * The error code.
   */
  code: PaymentErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface CartPaymentCreateMutation_checkoutPaymentCreate_payment {
  __typename: "Payment";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Internal payment status.
   */
  chargeStatus: PaymentChargeStatusEnum;
}

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout_shippingMethod_minimumOrderPrice {
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

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout_shippingMethod {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  minimumOrderPrice: CartPaymentCreateMutation_checkoutPaymentCreate_checkout_shippingMethod_minimumOrderPrice | null;
}

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout_shippingPrice_gross {
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

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout_shippingPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartPaymentCreateMutation_checkoutPaymentCreate_checkout_shippingPrice_gross;
}

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout_subtotalPrice_gross {
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

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout_subtotalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartPaymentCreateMutation_checkoutPaymentCreate_checkout_subtotalPrice_gross;
}

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout_totalPrice_gross {
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

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CartPaymentCreateMutation_checkoutPaymentCreate_checkout_totalPrice_gross;
}

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout_availableShippingMethods_price {
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

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout_availableShippingMethods {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  price: CartPaymentCreateMutation_checkoutPaymentCreate_checkout_availableShippingMethods_price | null;
}

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout_shippingAddress_country {
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

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout_shippingAddress {
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
  country: CartPaymentCreateMutation_checkoutPaymentCreate_checkout_shippingAddress_country;
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

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout_billingAddress_country {
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

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout_billingAddress {
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
  country: CartPaymentCreateMutation_checkoutPaymentCreate_checkout_billingAddress_country;
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

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout_availablePaymentGateways_config {
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

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout_availablePaymentGateways {
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
  config: CartPaymentCreateMutation_checkoutPaymentCreate_checkout_availablePaymentGateways_config[];
}

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout_lines {
  __typename: "CheckoutLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
}

export interface CartPaymentCreateMutation_checkoutPaymentCreate_checkout {
  __typename: "Checkout";
  /**
   * The ID of the object.
   */
  id: string;
  token: any;
  shippingMethod: CartPaymentCreateMutation_checkoutPaymentCreate_checkout_shippingMethod | null;
  /**
   * The price of the shipping, with all the taxes included.
   */
  shippingPrice: CartPaymentCreateMutation_checkoutPaymentCreate_checkout_shippingPrice | null;
  /**
   * The price of the checkout before shipping, with taxes included.
   */
  subtotalPrice: CartPaymentCreateMutation_checkoutPaymentCreate_checkout_subtotalPrice | null;
  /**
   * The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included.
   */
  totalPrice: CartPaymentCreateMutation_checkoutPaymentCreate_checkout_totalPrice | null;
  /**
   * Shipping methods that can be used with this order.
   */
  availableShippingMethods: (CartPaymentCreateMutation_checkoutPaymentCreate_checkout_availableShippingMethods | null)[];
  shippingAddress: CartPaymentCreateMutation_checkoutPaymentCreate_checkout_shippingAddress | null;
  billingAddress: CartPaymentCreateMutation_checkoutPaymentCreate_checkout_billingAddress | null;
  /**
   * List of available payment gateways.
   */
  availablePaymentGateways: CartPaymentCreateMutation_checkoutPaymentCreate_checkout_availablePaymentGateways[];
  /**
   * A list of checkout lines, each containing information about an item in the checkout.
   */
  lines: (CartPaymentCreateMutation_checkoutPaymentCreate_checkout_lines | null)[] | null;
}

export interface CartPaymentCreateMutation_checkoutPaymentCreate {
  __typename: "CheckoutPaymentCreate";
  paymentErrors: CartPaymentCreateMutation_checkoutPaymentCreate_paymentErrors[];
  /**
   * A newly created payment.
   */
  payment: CartPaymentCreateMutation_checkoutPaymentCreate_payment | null;
  /**
   * Related checkout object.
   */
  checkout: CartPaymentCreateMutation_checkoutPaymentCreate_checkout | null;
}

export interface CartPaymentCreateMutation {
  /**
   * Create a new payment for given checkout.
   */
  checkoutPaymentCreate: CartPaymentCreateMutation_checkoutPaymentCreate | null;
}

export interface CartPaymentCreateMutationVariables {
  checkoutId: string;
  paymentDetails: PaymentInput;
}
