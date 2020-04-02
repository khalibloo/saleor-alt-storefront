/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categoryDetailQuery
// ====================================================

export interface categoryDetailQuery_products_edges_node_thumbnail {
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

export interface categoryDetailQuery_products_edges_node_collections {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface categoryDetailQuery_products_edges_node_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface categoryDetailQuery_products_edges_node_pricing_discount_gross {
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

export interface categoryDetailQuery_products_edges_node_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: categoryDetailQuery_products_edges_node_pricing_discount_gross;
}

export interface categoryDetailQuery_products_edges_node_pricing_priceRange_start_gross {
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

export interface categoryDetailQuery_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: categoryDetailQuery_products_edges_node_pricing_priceRange_start_gross;
}

export interface categoryDetailQuery_products_edges_node_pricing_priceRange_stop_gross {
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

export interface categoryDetailQuery_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: categoryDetailQuery_products_edges_node_pricing_priceRange_stop_gross;
}

export interface categoryDetailQuery_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: categoryDetailQuery_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: categoryDetailQuery_products_edges_node_pricing_priceRange_stop | null;
}

export interface categoryDetailQuery_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
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

export interface categoryDetailQuery_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: categoryDetailQuery_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
}

export interface categoryDetailQuery_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
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

export interface categoryDetailQuery_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: categoryDetailQuery_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
}

export interface categoryDetailQuery_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: categoryDetailQuery_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: categoryDetailQuery_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface categoryDetailQuery_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: categoryDetailQuery_products_edges_node_pricing_discount | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: categoryDetailQuery_products_edges_node_pricing_priceRange | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: categoryDetailQuery_products_edges_node_pricing_priceRangeUndiscounted | null;
}

export interface categoryDetailQuery_products_edges_node {
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
  thumbnail: categoryDetailQuery_products_edges_node_thumbnail | null;
  /**
   * List of collections for the product.
   */
  collections: (categoryDetailQuery_products_edges_node_collections | null)[] | null;
  category: categoryDetailQuery_products_edges_node_category | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: categoryDetailQuery_products_edges_node_pricing | null;
}

export interface categoryDetailQuery_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: categoryDetailQuery_products_edges_node;
}

export interface categoryDetailQuery_products {
  __typename: "ProductCountableConnection";
  edges: categoryDetailQuery_products_edges[];
}

export interface categoryDetailQuery_category_backgroundImage {
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

export interface categoryDetailQuery_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  backgroundImage: categoryDetailQuery_category_backgroundImage | null;
  level: number;
}

export interface categoryDetailQuery {
  /**
   * List of the shop's products.
   */
  products: categoryDetailQuery_products | null;
  /**
   * Look up a category by ID.
   */
  category: categoryDetailQuery_category | null;
}

export interface categoryDetailQueryVariables {
  category: string;
  categoryList: (string | null)[];
  productCount: number;
}
