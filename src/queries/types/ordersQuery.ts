/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCodeEnum, OrderStatus } from "./../../globalTypes";

// ====================================================
// GraphQL query operation: ordersQuery
// ====================================================

export interface ordersQuery_me_orders_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
}

export interface ordersQuery_me_orders_edges_node_total_gross {
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

export interface ordersQuery_me_orders_edges_node_total {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ordersQuery_me_orders_edges_node_total_gross;
}

export interface ordersQuery_me_orders_edges_node_subtotal_gross {
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

export interface ordersQuery_me_orders_edges_node_subtotal {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ordersQuery_me_orders_edges_node_subtotal_gross;
}

export interface ordersQuery_me_orders_edges_node_shippingPrice_gross {
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

export interface ordersQuery_me_orders_edges_node_shippingPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ordersQuery_me_orders_edges_node_shippingPrice_gross;
}

export interface ordersQuery_me_orders_edges_node_shippingAddress_country {
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

export interface ordersQuery_me_orders_edges_node_shippingAddress {
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
  country: ordersQuery_me_orders_edges_node_shippingAddress_country;
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

export interface ordersQuery_me_orders_edges_node_billingAddress_country {
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

export interface ordersQuery_me_orders_edges_node_billingAddress {
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
  country: ordersQuery_me_orders_edges_node_billingAddress_country;
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

export interface ordersQuery_me_orders_edges_node_shippingMethod_price {
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

export interface ordersQuery_me_orders_edges_node_shippingMethod {
  __typename: "ShippingMethod";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  price: ordersQuery_me_orders_edges_node_shippingMethod_price | null;
}

export interface ordersQuery_me_orders_edges_node_fulfillments_lines_orderLine {
  __typename: "OrderLine";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface ordersQuery_me_orders_edges_node_fulfillments_lines {
  __typename: "FulfillmentLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
  orderLine: ordersQuery_me_orders_edges_node_fulfillments_lines_orderLine | null;
}

export interface ordersQuery_me_orders_edges_node_fulfillments {
  __typename: "Fulfillment";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of lines for the fulfillment.
   */
  lines: (ordersQuery_me_orders_edges_node_fulfillments_lines | null)[] | null;
}

export interface ordersQuery_me_orders_edges_node_lines_unitPrice_gross {
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

export interface ordersQuery_me_orders_edges_node_lines_unitPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ordersQuery_me_orders_edges_node_lines_unitPrice_gross;
}

export interface ordersQuery_me_orders_edges_node_lines_variant_images {
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

export interface ordersQuery_me_orders_edges_node_lines_variant_attributes_attribute {
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

export interface ordersQuery_me_orders_edges_node_lines_variant_attributes_values {
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

export interface ordersQuery_me_orders_edges_node_lines_variant_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: ordersQuery_me_orders_edges_node_lines_variant_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (ordersQuery_me_orders_edges_node_lines_variant_attributes_values | null)[];
}

export interface ordersQuery_me_orders_edges_node_lines_variant_pricing_price_gross {
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

export interface ordersQuery_me_orders_edges_node_lines_variant_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ordersQuery_me_orders_edges_node_lines_variant_pricing_price_gross;
}

export interface ordersQuery_me_orders_edges_node_lines_variant_pricing {
  __typename: "VariantPricingInfo";
  /**
   * The price, with any discount subtracted.
   */
  price: ordersQuery_me_orders_edges_node_lines_variant_pricing_price | null;
}

export interface ordersQuery_me_orders_edges_node_lines_variant_translation {
  __typename: "ProductVariantTranslation";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface ordersQuery_me_orders_edges_node_lines_variant_product_thumbnail {
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

export interface ordersQuery_me_orders_edges_node_lines_variant_product_translation {
  __typename: "ProductTranslation";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  descriptionJson: any;
}

export interface ordersQuery_me_orders_edges_node_lines_variant_product {
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
  thumbnail: ordersQuery_me_orders_edges_node_lines_variant_product_thumbnail | null;
  /**
   * Returns translated product fields for the given language code.
   */
  translation: ordersQuery_me_orders_edges_node_lines_variant_product_translation | null;
}

export interface ordersQuery_me_orders_edges_node_lines_variant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  sku: string;
  /**
   * List of images for the product variant.
   */
  images: (ordersQuery_me_orders_edges_node_lines_variant_images | null)[] | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: ordersQuery_me_orders_edges_node_lines_variant_attributes[];
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: ordersQuery_me_orders_edges_node_lines_variant_pricing | null;
  /**
   * Returns translated product variant fields for the given language code.
   */
  translation: ordersQuery_me_orders_edges_node_lines_variant_translation | null;
  product: ordersQuery_me_orders_edges_node_lines_variant_product;
}

export interface ordersQuery_me_orders_edges_node_lines {
  __typename: "OrderLine";
  /**
   * The ID of the object.
   */
  id: string;
  isShippingRequired: boolean;
  quantity: number;
  quantityFulfilled: number;
  /**
   * Price of the single item in the order line.
   */
  unitPrice: ordersQuery_me_orders_edges_node_lines_unitPrice | null;
  /**
   * A purchased product variant. Note: this field may be null if the variant has been removed from stock at all.
   */
  variant: ordersQuery_me_orders_edges_node_lines_variant | null;
}

export interface ordersQuery_me_orders_edges_node {
  __typename: "Order";
  /**
   * The ID of the object.
   */
  id: string;
  created: any;
  status: OrderStatus;
  /**
   * User-friendly number of an order.
   */
  number: string | null;
  token: string;
  /**
   * Returns True, if order requires shipping.
   */
  isShippingRequired: boolean;
  /**
   * Informs if an order is fully paid.
   */
  isPaid: boolean | null;
  /**
   * Total amount of the order.
   */
  total: ordersQuery_me_orders_edges_node_total | null;
  /**
   * The sum of line prices not including shipping.
   */
  subtotal: ordersQuery_me_orders_edges_node_subtotal | null;
  /**
   * Total price of shipping.
   */
  shippingPrice: ordersQuery_me_orders_edges_node_shippingPrice | null;
  shippingAddress: ordersQuery_me_orders_edges_node_shippingAddress | null;
  billingAddress: ordersQuery_me_orders_edges_node_billingAddress | null;
  shippingMethod: ordersQuery_me_orders_edges_node_shippingMethod | null;
  /**
   * List of shipments for the order.
   */
  fulfillments: (ordersQuery_me_orders_edges_node_fulfillments | null)[];
  /**
   * List of order lines.
   */
  lines: (ordersQuery_me_orders_edges_node_lines | null)[];
}

export interface ordersQuery_me_orders_edges {
  __typename: "OrderCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ordersQuery_me_orders_edges_node;
}

export interface ordersQuery_me_orders {
  __typename: "OrderCountableConnection";
  /**
   * A total count of items in the collection.
   */
  totalCount: number | null;
  /**
   * Pagination data for this connection.
   */
  pageInfo: ordersQuery_me_orders_pageInfo;
  edges: ordersQuery_me_orders_edges[];
}

export interface ordersQuery_me {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of user's orders.
   */
  orders: ordersQuery_me_orders | null;
}

export interface ordersQuery {
  /**
   * Return the currently authenticated user.
   */
  me: ordersQuery_me | null;
}

export interface ordersQueryVariables {
  lang: LanguageCodeEnum;
}
