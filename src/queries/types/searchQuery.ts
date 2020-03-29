/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: searchQuery
// ====================================================

export interface searchQuery_products_edges_node_thumbnail {
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

export interface searchQuery_products_edges_node_collections {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface searchQuery_products_edges_node_pricing_discount_gross {
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

export interface searchQuery_products_edges_node_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: searchQuery_products_edges_node_pricing_discount_gross;
}

export interface searchQuery_products_edges_node_pricing_priceRange_start_gross {
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

export interface searchQuery_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: searchQuery_products_edges_node_pricing_priceRange_start_gross;
}

export interface searchQuery_products_edges_node_pricing_priceRange_stop_gross {
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

export interface searchQuery_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: searchQuery_products_edges_node_pricing_priceRange_stop_gross;
}

export interface searchQuery_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: searchQuery_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: searchQuery_products_edges_node_pricing_priceRange_stop | null;
}

export interface searchQuery_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
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

export interface searchQuery_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: searchQuery_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
}

export interface searchQuery_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
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

export interface searchQuery_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: searchQuery_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
}

export interface searchQuery_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: searchQuery_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: searchQuery_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface searchQuery_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: searchQuery_products_edges_node_pricing_discount | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: searchQuery_products_edges_node_pricing_priceRange | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: searchQuery_products_edges_node_pricing_priceRangeUndiscounted | null;
}

export interface searchQuery_products_edges_node_category_ancestors_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface searchQuery_products_edges_node_category_ancestors_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: searchQuery_products_edges_node_category_ancestors_edges_node;
}

export interface searchQuery_products_edges_node_category_ancestors {
  __typename: "CategoryCountableConnection";
  edges: searchQuery_products_edges_node_category_ancestors_edges[];
}

export interface searchQuery_products_edges_node_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * List of ancestors of the category.
   */
  ancestors: searchQuery_products_edges_node_category_ancestors | null;
}

export interface searchQuery_products_edges_node {
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
  thumbnail: searchQuery_products_edges_node_thumbnail | null;
  /**
   * List of collections for the product.
   */
  collections: (searchQuery_products_edges_node_collections | null)[] | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: searchQuery_products_edges_node_pricing | null;
  category: searchQuery_products_edges_node_category | null;
}

export interface searchQuery_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: searchQuery_products_edges_node;
}

export interface searchQuery_products {
  __typename: "ProductCountableConnection";
  /**
   * A total count of items in the collection.
   */
  totalCount: number | null;
  edges: searchQuery_products_edges[];
}

export interface searchQuery {
  /**
   * List of the shop's products.
   */
  products: searchQuery_products | null;
}

export interface searchQueryVariables {
  query?: string | null;
  count?: number | null;
}
