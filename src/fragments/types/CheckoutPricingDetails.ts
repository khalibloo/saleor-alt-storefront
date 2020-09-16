/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CheckoutPricingDetails
// ====================================================

export interface CheckoutPricingDetails_shippingMethod_minimumOrderPrice {
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

export interface CheckoutPricingDetails_shippingMethod {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  minimumOrderPrice: CheckoutPricingDetails_shippingMethod_minimumOrderPrice | null;
}

export interface CheckoutPricingDetails_shippingPrice_gross {
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

export interface CheckoutPricingDetails_shippingPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CheckoutPricingDetails_shippingPrice_gross;
}

export interface CheckoutPricingDetails_subtotalPrice_gross {
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

export interface CheckoutPricingDetails_subtotalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CheckoutPricingDetails_subtotalPrice_gross;
}

export interface CheckoutPricingDetails_totalPrice_gross {
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

export interface CheckoutPricingDetails_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CheckoutPricingDetails_totalPrice_gross;
}

export interface CheckoutPricingDetails {
  __typename: "Checkout";
  shippingMethod: CheckoutPricingDetails_shippingMethod | null;
  /**
   * The price of the shipping, with all the taxes included.
   */
  shippingPrice: CheckoutPricingDetails_shippingPrice | null;
  /**
   * The price of the checkout before shipping, with taxes included.
   */
  subtotalPrice: CheckoutPricingDetails_subtotalPrice | null;
  /**
   * The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included.
   */
  totalPrice: CheckoutPricingDetails_totalPrice | null;
}
