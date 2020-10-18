/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: cartWithTokenQuery
// ====================================================

export interface cartWithTokenQuery_checkout_shippingMethod_minimumOrderPrice {
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

export interface cartWithTokenQuery_checkout_shippingMethod {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  minimumOrderPrice: cartWithTokenQuery_checkout_shippingMethod_minimumOrderPrice | null;
}

export interface cartWithTokenQuery_checkout_shippingPrice_gross {
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

export interface cartWithTokenQuery_checkout_shippingPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: cartWithTokenQuery_checkout_shippingPrice_gross;
}

export interface cartWithTokenQuery_checkout_subtotalPrice_gross {
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

export interface cartWithTokenQuery_checkout_subtotalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: cartWithTokenQuery_checkout_subtotalPrice_gross;
}

export interface cartWithTokenQuery_checkout_totalPrice_gross {
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

export interface cartWithTokenQuery_checkout_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: cartWithTokenQuery_checkout_totalPrice_gross;
}

export interface cartWithTokenQuery_checkout_discount {
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

export interface cartWithTokenQuery_checkout_availableShippingMethods_price {
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

export interface cartWithTokenQuery_checkout_availableShippingMethods {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  price: cartWithTokenQuery_checkout_availableShippingMethods_price | null;
}

export interface cartWithTokenQuery_checkout_shippingAddress_country {
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

export interface cartWithTokenQuery_checkout_shippingAddress {
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
  country: cartWithTokenQuery_checkout_shippingAddress_country;
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

export interface cartWithTokenQuery_checkout_billingAddress_country {
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

export interface cartWithTokenQuery_checkout_billingAddress {
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
  country: cartWithTokenQuery_checkout_billingAddress_country;
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

export interface cartWithTokenQuery_checkout_availablePaymentGateways_config {
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

export interface cartWithTokenQuery_checkout_availablePaymentGateways {
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
  config: cartWithTokenQuery_checkout_availablePaymentGateways_config[];
}

export interface cartWithTokenQuery_checkout_lines_variant_images {
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

export interface cartWithTokenQuery_checkout_lines_variant_attributes_attribute {
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

export interface cartWithTokenQuery_checkout_lines_variant_attributes_values {
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

export interface cartWithTokenQuery_checkout_lines_variant_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: cartWithTokenQuery_checkout_lines_variant_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (cartWithTokenQuery_checkout_lines_variant_attributes_values | null)[];
}

export interface cartWithTokenQuery_checkout_lines_variant_pricing_price_gross {
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

export interface cartWithTokenQuery_checkout_lines_variant_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: cartWithTokenQuery_checkout_lines_variant_pricing_price_gross;
}

export interface cartWithTokenQuery_checkout_lines_variant_pricing {
  __typename: "VariantPricingInfo";
  /**
   * The price, with any discount subtracted.
   */
  price: cartWithTokenQuery_checkout_lines_variant_pricing_price | null;
}

export interface cartWithTokenQuery_checkout_lines_variant_product_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface cartWithTokenQuery_checkout_lines_variant_product_thumbnail {
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

export interface cartWithTokenQuery_checkout_lines_variant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  category: cartWithTokenQuery_checkout_lines_variant_product_category | null;
  descriptionJson: any;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: cartWithTokenQuery_checkout_lines_variant_product_thumbnail | null;
}

export interface cartWithTokenQuery_checkout_lines_variant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  sku: string;
  /**
   * Quantity of a product available for sale in one checkout.
   */
  quantityAvailable: number;
  /**
   * List of images for the product variant.
   */
  images: (cartWithTokenQuery_checkout_lines_variant_images | null)[] | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: cartWithTokenQuery_checkout_lines_variant_attributes[];
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: cartWithTokenQuery_checkout_lines_variant_pricing | null;
  product: cartWithTokenQuery_checkout_lines_variant_product;
}

export interface cartWithTokenQuery_checkout_lines_totalPrice_gross {
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

export interface cartWithTokenQuery_checkout_lines_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: cartWithTokenQuery_checkout_lines_totalPrice_gross;
}

export interface cartWithTokenQuery_checkout_lines {
  __typename: "CheckoutLine";
  /**
   * The ID of the object.
   */
  id: string;
  variant: cartWithTokenQuery_checkout_lines_variant;
  quantity: number;
  /**
   * The sum of the checkout line price, taxes and discounts.
   */
  totalPrice: cartWithTokenQuery_checkout_lines_totalPrice | null;
}

export interface cartWithTokenQuery_checkout {
  __typename: "Checkout";
  /**
   * The ID of the object.
   */
  id: string;
  token: any;
  /**
   * Email of a customer.
   */
  email: string;
  shippingMethod: cartWithTokenQuery_checkout_shippingMethod | null;
  /**
   * The price of the shipping, with all the taxes included.
   */
  shippingPrice: cartWithTokenQuery_checkout_shippingPrice | null;
  /**
   * The price of the checkout before shipping, with taxes included.
   */
  subtotalPrice: cartWithTokenQuery_checkout_subtotalPrice | null;
  /**
   * The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included.
   */
  totalPrice: cartWithTokenQuery_checkout_totalPrice | null;
  discount: cartWithTokenQuery_checkout_discount | null;
  voucherCode: string | null;
  /**
   * Shipping methods that can be used with this order.
   */
  availableShippingMethods: (cartWithTokenQuery_checkout_availableShippingMethods | null)[];
  shippingAddress: cartWithTokenQuery_checkout_shippingAddress | null;
  billingAddress: cartWithTokenQuery_checkout_billingAddress | null;
  /**
   * List of available payment gateways.
   */
  availablePaymentGateways: cartWithTokenQuery_checkout_availablePaymentGateways[];
  /**
   * A list of checkout lines, each containing information about an item in the checkout.
   */
  lines: (cartWithTokenQuery_checkout_lines | null)[] | null;
}

export interface cartWithTokenQuery {
  /**
   * Look up a checkout by token.
   */
  checkout: cartWithTokenQuery_checkout | null;
}

export interface cartWithTokenQueryVariables {
  token: any;
}
