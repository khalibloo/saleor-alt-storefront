/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ProductOrder, AttributeInput } from "./../../globalTypes";

// ====================================================
// GraphQL query operation: CollectionsProducts_Query
// ====================================================

export interface CollectionsProducts_Query_minPrice_edges_node_pricing_priceRange_start_gross {
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

export interface CollectionsProducts_Query_minPrice_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CollectionsProducts_Query_minPrice_edges_node_pricing_priceRange_start_gross;
}

export interface CollectionsProducts_Query_minPrice_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: CollectionsProducts_Query_minPrice_edges_node_pricing_priceRange_start | null;
}

export interface CollectionsProducts_Query_minPrice_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * The discounted price range of the product variants.
   */
  priceRange: CollectionsProducts_Query_minPrice_edges_node_pricing_priceRange | null;
}

export interface CollectionsProducts_Query_minPrice_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: CollectionsProducts_Query_minPrice_edges_node_pricing | null;
}

export interface CollectionsProducts_Query_minPrice_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: CollectionsProducts_Query_minPrice_edges_node;
}

export interface CollectionsProducts_Query_minPrice {
  __typename: "ProductCountableConnection";
  edges: CollectionsProducts_Query_minPrice_edges[];
}

export interface CollectionsProducts_Query_maxPrice_edges_node_pricing_priceRange_start_gross {
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

export interface CollectionsProducts_Query_maxPrice_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CollectionsProducts_Query_maxPrice_edges_node_pricing_priceRange_start_gross;
}

export interface CollectionsProducts_Query_maxPrice_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: CollectionsProducts_Query_maxPrice_edges_node_pricing_priceRange_start | null;
}

export interface CollectionsProducts_Query_maxPrice_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * The discounted price range of the product variants.
   */
  priceRange: CollectionsProducts_Query_maxPrice_edges_node_pricing_priceRange | null;
}

export interface CollectionsProducts_Query_maxPrice_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: CollectionsProducts_Query_maxPrice_edges_node_pricing | null;
}

export interface CollectionsProducts_Query_maxPrice_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: CollectionsProducts_Query_maxPrice_edges_node;
}

export interface CollectionsProducts_Query_maxPrice {
  __typename: "ProductCountableConnection";
  edges: CollectionsProducts_Query_maxPrice_edges[];
}

export interface CollectionsProducts_Query_attributes_edges_node_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of a value (unique per attribute).
   */
  slug: string | null;
}

export interface CollectionsProducts_Query_attributes_edges_node {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of an attribute name.
   */
  slug: string | null;
  /**
   * List of attribute's values.
   */
  values: (CollectionsProducts_Query_attributes_edges_node_values | null)[] | null;
}

export interface CollectionsProducts_Query_attributes_edges {
  __typename: "AttributeCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: CollectionsProducts_Query_attributes_edges_node;
}

export interface CollectionsProducts_Query_attributes {
  __typename: "AttributeCountableConnection";
  edges: CollectionsProducts_Query_attributes_edges[];
}

export interface CollectionsProducts_Query_products_edges_node_thumbnail {
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

export interface CollectionsProducts_Query_products_edges_node_collections {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface CollectionsProducts_Query_products_edges_node_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface CollectionsProducts_Query_products_edges_node_pricing_discount_gross {
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

export interface CollectionsProducts_Query_products_edges_node_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: CollectionsProducts_Query_products_edges_node_pricing_discount_gross;
}

export interface CollectionsProducts_Query_products_edges_node_pricing_priceRange_start_gross {
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

export interface CollectionsProducts_Query_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CollectionsProducts_Query_products_edges_node_pricing_priceRange_start_gross;
}

export interface CollectionsProducts_Query_products_edges_node_pricing_priceRange_stop_gross {
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

export interface CollectionsProducts_Query_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CollectionsProducts_Query_products_edges_node_pricing_priceRange_stop_gross;
}

export interface CollectionsProducts_Query_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: CollectionsProducts_Query_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: CollectionsProducts_Query_products_edges_node_pricing_priceRange_stop | null;
}

export interface CollectionsProducts_Query_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
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

export interface CollectionsProducts_Query_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CollectionsProducts_Query_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
}

export interface CollectionsProducts_Query_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
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

export interface CollectionsProducts_Query_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CollectionsProducts_Query_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
}

export interface CollectionsProducts_Query_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: CollectionsProducts_Query_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: CollectionsProducts_Query_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface CollectionsProducts_Query_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: CollectionsProducts_Query_products_edges_node_pricing_discount | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: CollectionsProducts_Query_products_edges_node_pricing_priceRange | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: CollectionsProducts_Query_products_edges_node_pricing_priceRangeUndiscounted | null;
}

export interface CollectionsProducts_Query_products_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: CollectionsProducts_Query_products_edges_node_thumbnail | null;
  /**
   * List of collections for the product.
   */
  collections: (CollectionsProducts_Query_products_edges_node_collections | null)[] | null;
  category: CollectionsProducts_Query_products_edges_node_category | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: CollectionsProducts_Query_products_edges_node_pricing | null;
}

export interface CollectionsProducts_Query_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: CollectionsProducts_Query_products_edges_node;
}

export interface CollectionsProducts_Query_products {
  __typename: "ProductCountableConnection";
  edges: CollectionsProducts_Query_products_edges[];
}

export interface CollectionsProducts_Query {
  /**
   * List of the shop's products.
   */
  minPrice: CollectionsProducts_Query_minPrice | null;
  /**
   * List of the shop's products.
   */
  maxPrice: CollectionsProducts_Query_maxPrice | null;
  /**
   * List of the shop's attributes.
   */
  attributes: CollectionsProducts_Query_attributes | null;
  /**
   * List of the shop's products.
   */
  products: CollectionsProducts_Query_products | null;
}

export interface CollectionsProducts_QueryVariables {
  collectionID?: string | null;
  collectionList?: (string | null)[] | null;
  sortBy?: ProductOrder | null;
  attributes?: (AttributeInput | null)[] | null;
  priceGte?: number | null;
  priceLte?: number | null;
  prodsPerPage: number;
  cursor?: string | null;
}
