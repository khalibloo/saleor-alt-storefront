/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: cartQuery
// ====================================================

export interface cartQuery_me_checkout_shippingMethod_minimumOrderPrice {
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

export interface cartQuery_me_checkout_shippingMethod {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  minimumOrderPrice: cartQuery_me_checkout_shippingMethod_minimumOrderPrice | null;
}

export interface cartQuery_me_checkout_shippingPrice_gross {
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

export interface cartQuery_me_checkout_shippingPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: cartQuery_me_checkout_shippingPrice_gross;
}

export interface cartQuery_me_checkout_subtotalPrice_gross {
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

export interface cartQuery_me_checkout_subtotalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: cartQuery_me_checkout_subtotalPrice_gross;
}

export interface cartQuery_me_checkout_totalPrice_gross {
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

export interface cartQuery_me_checkout_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: cartQuery_me_checkout_totalPrice_gross;
}

export interface cartQuery_me_checkout_availableShippingMethods_price {
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

export interface cartQuery_me_checkout_availableShippingMethods {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  price: cartQuery_me_checkout_availableShippingMethods_price | null;
}

export interface cartQuery_me_checkout_lines_variant_stocks {
  __typename: "Stock";
  /**
   * Quantity of a product available for sale.
   */
  stockQuantity: number;
}

export interface cartQuery_me_checkout_lines_variant_images {
  __typename: "ProductImage";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The URL of the image.
   */
  url: string;
  alt: string;
}

export interface cartQuery_me_checkout_lines_variant_attributes_attribute {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
}

export interface cartQuery_me_checkout_lines_variant_attributes_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
}

export interface cartQuery_me_checkout_lines_variant_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: cartQuery_me_checkout_lines_variant_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (cartQuery_me_checkout_lines_variant_attributes_values | null)[];
}

export interface cartQuery_me_checkout_lines_variant_pricing_price_gross {
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

export interface cartQuery_me_checkout_lines_variant_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: cartQuery_me_checkout_lines_variant_pricing_price_gross;
}

export interface cartQuery_me_checkout_lines_variant_pricing {
  __typename: "VariantPricingInfo";
  /**
   * The price, with any discount subtracted.
   */
  price: cartQuery_me_checkout_lines_variant_pricing_price | null;
}

export interface cartQuery_me_checkout_lines_variant_product_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface cartQuery_me_checkout_lines_variant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  descriptionJson: any;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: cartQuery_me_checkout_lines_variant_product_thumbnail | null;
}

export interface cartQuery_me_checkout_lines_variant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  sku: string;
  /**
   * Stocks for the product variant.
   */
  stocks: (cartQuery_me_checkout_lines_variant_stocks | null)[] | null;
  /**
   * List of images for the product variant.
   */
  images: (cartQuery_me_checkout_lines_variant_images | null)[] | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: cartQuery_me_checkout_lines_variant_attributes[];
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: cartQuery_me_checkout_lines_variant_pricing | null;
  product: cartQuery_me_checkout_lines_variant_product;
}

export interface cartQuery_me_checkout_lines_totalPrice_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface cartQuery_me_checkout_lines_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: cartQuery_me_checkout_lines_totalPrice_gross;
}

export interface cartQuery_me_checkout_lines {
  __typename: "CheckoutLine";
  /**
   * The ID of the object.
   */
  id: string;
  variant: cartQuery_me_checkout_lines_variant;
  quantity: number;
  /**
   * The sum of the checkout line price, taxes and discounts.
   */
  totalPrice: cartQuery_me_checkout_lines_totalPrice | null;
}

export interface cartQuery_me_checkout {
  __typename: "Checkout";
  /**
   * The ID of the object.
   */
  id: string;
  token: any;
  shippingMethod: cartQuery_me_checkout_shippingMethod | null;
  /**
   * The price of the shipping, with all the taxes included.
   */
  shippingPrice: cartQuery_me_checkout_shippingPrice | null;
  /**
   * The price of the checkout before shipping, with taxes included.
   */
  subtotalPrice: cartQuery_me_checkout_subtotalPrice | null;
  /**
   * The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included.
   */
  totalPrice: cartQuery_me_checkout_totalPrice | null;
  /**
   * Shipping methods that can be used with this order.
   */
  availableShippingMethods: (cartQuery_me_checkout_availableShippingMethods | null)[];
  /**
   * A list of checkout lines, each containing information about an item in the checkout.
   */
  lines: (cartQuery_me_checkout_lines | null)[] | null;
}

export interface cartQuery_me {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Returns the last open checkout of this user.
   */
  checkout: cartQuery_me_checkout | null;
}

export interface cartQuery {
  /**
   * Return the currently authenticated user.
   */
  me: cartQuery_me | null;
}
