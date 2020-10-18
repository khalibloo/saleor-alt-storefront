/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CheckoutLinesDetails
// ====================================================

export interface CheckoutLinesDetails_lines_variant_images {
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

export interface CheckoutLinesDetails_lines_variant_attributes_attribute {
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

export interface CheckoutLinesDetails_lines_variant_attributes_values {
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

export interface CheckoutLinesDetails_lines_variant_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: CheckoutLinesDetails_lines_variant_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (CheckoutLinesDetails_lines_variant_attributes_values | null)[];
}

export interface CheckoutLinesDetails_lines_variant_pricing_price_gross {
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

export interface CheckoutLinesDetails_lines_variant_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CheckoutLinesDetails_lines_variant_pricing_price_gross;
}

export interface CheckoutLinesDetails_lines_variant_pricing {
  __typename: "VariantPricingInfo";
  /**
   * The price, with any discount subtracted.
   */
  price: CheckoutLinesDetails_lines_variant_pricing_price | null;
}

export interface CheckoutLinesDetails_lines_variant_product_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface CheckoutLinesDetails_lines_variant_product_thumbnail {
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

export interface CheckoutLinesDetails_lines_variant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  category: CheckoutLinesDetails_lines_variant_product_category | null;
  descriptionJson: any;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: CheckoutLinesDetails_lines_variant_product_thumbnail | null;
}

export interface CheckoutLinesDetails_lines_variant {
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
  images: (CheckoutLinesDetails_lines_variant_images | null)[] | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: CheckoutLinesDetails_lines_variant_attributes[];
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: CheckoutLinesDetails_lines_variant_pricing | null;
  product: CheckoutLinesDetails_lines_variant_product;
}

export interface CheckoutLinesDetails_lines_totalPrice_gross {
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

export interface CheckoutLinesDetails_lines_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CheckoutLinesDetails_lines_totalPrice_gross;
}

export interface CheckoutLinesDetails_lines {
  __typename: "CheckoutLine";
  /**
   * The ID of the object.
   */
  id: string;
  variant: CheckoutLinesDetails_lines_variant;
  quantity: number;
  /**
   * The sum of the checkout line price, taxes and discounts.
   */
  totalPrice: CheckoutLinesDetails_lines_totalPrice | null;
}

export interface CheckoutLinesDetails {
  __typename: "Checkout";
  /**
   * A list of checkout lines, each containing information about an item in the checkout.
   */
  lines: (CheckoutLinesDetails_lines | null)[] | null;
}
