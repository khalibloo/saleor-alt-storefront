/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: collectionDetailQuery
// ====================================================

export interface collectionDetailQuery_products_edges_node_thumbnail {
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

export interface collectionDetailQuery_products_edges_node_collections {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface collectionDetailQuery_products_edges_node_pricing_discount_gross {
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

export interface collectionDetailQuery_products_edges_node_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: collectionDetailQuery_products_edges_node_pricing_discount_gross;
}

export interface collectionDetailQuery_products_edges_node_pricing_priceRange_start_gross {
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

export interface collectionDetailQuery_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: collectionDetailQuery_products_edges_node_pricing_priceRange_start_gross;
}

export interface collectionDetailQuery_products_edges_node_pricing_priceRange_stop_gross {
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

export interface collectionDetailQuery_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: collectionDetailQuery_products_edges_node_pricing_priceRange_stop_gross;
}

export interface collectionDetailQuery_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: collectionDetailQuery_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: collectionDetailQuery_products_edges_node_pricing_priceRange_stop | null;
}

export interface collectionDetailQuery_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
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

export interface collectionDetailQuery_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: collectionDetailQuery_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
}

export interface collectionDetailQuery_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
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

export interface collectionDetailQuery_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: collectionDetailQuery_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
}

export interface collectionDetailQuery_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: collectionDetailQuery_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: collectionDetailQuery_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface collectionDetailQuery_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: collectionDetailQuery_products_edges_node_pricing_discount | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: collectionDetailQuery_products_edges_node_pricing_priceRange | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: collectionDetailQuery_products_edges_node_pricing_priceRangeUndiscounted | null;
}

export interface collectionDetailQuery_products_edges_node {
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
  thumbnail: collectionDetailQuery_products_edges_node_thumbnail | null;
  /**
   * List of collections for the product.
   */
  collections:
    | (collectionDetailQuery_products_edges_node_collections | null)[]
    | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: collectionDetailQuery_products_edges_node_pricing | null;
}

export interface collectionDetailQuery_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: collectionDetailQuery_products_edges_node;
}

export interface collectionDetailQuery_products {
  __typename: "ProductCountableConnection";
  edges: collectionDetailQuery_products_edges[];
}

export interface collectionDetailQuery_collection_backgroundImage {
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

export interface collectionDetailQuery_collection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  backgroundImage: collectionDetailQuery_collection_backgroundImage | null;
}

export interface collectionDetailQuery {
  /**
   * List of the shop's products.
   */
  products: collectionDetailQuery_products | null;
  /**
   * Look up a collection by ID.
   */
  collection: collectionDetailQuery_collection | null;
}

export interface collectionDetailQueryVariables {
  collection: string;
  collectionList: (string | null)[];
  productCount: number;
}
