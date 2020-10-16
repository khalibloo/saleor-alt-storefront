/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: featuredCollectionProducts
// ====================================================

export interface featuredCollectionProducts_collection_products_edges_node_thumbnail {
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

export interface featuredCollectionProducts_collection_products_edges_node_images {
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

export interface featuredCollectionProducts_collection_products_edges_node_collections {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface featuredCollectionProducts_collection_products_edges_node_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_discount_gross {
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

export interface featuredCollectionProducts_collection_products_edges_node_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: featuredCollectionProducts_collection_products_edges_node_pricing_discount_gross;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRange_start_gross {
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

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: featuredCollectionProducts_collection_products_edges_node_pricing_priceRange_start_gross;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRange_stop_gross {
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

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: featuredCollectionProducts_collection_products_edges_node_pricing_priceRange_stop_gross;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: featuredCollectionProducts_collection_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: featuredCollectionProducts_collection_products_edges_node_pricing_priceRange_stop | null;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
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

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
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

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface featuredCollectionProducts_collection_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: featuredCollectionProducts_collection_products_edges_node_pricing_discount | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: featuredCollectionProducts_collection_products_edges_node_pricing_priceRange | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: featuredCollectionProducts_collection_products_edges_node_pricing_priceRangeUndiscounted | null;
}

export interface featuredCollectionProducts_collection_products_edges_node {
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
  thumbnail: featuredCollectionProducts_collection_products_edges_node_thumbnail | null;
  /**
   * List of images for the product.
   */
  images: (featuredCollectionProducts_collection_products_edges_node_images | null)[] | null;
  /**
   * List of collections for the product.
   */
  collections: (featuredCollectionProducts_collection_products_edges_node_collections | null)[] | null;
  category: featuredCollectionProducts_collection_products_edges_node_category | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: featuredCollectionProducts_collection_products_edges_node_pricing | null;
}

export interface featuredCollectionProducts_collection_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: featuredCollectionProducts_collection_products_edges_node;
}

export interface featuredCollectionProducts_collection_products {
  __typename: "ProductCountableConnection";
  edges: featuredCollectionProducts_collection_products_edges[];
}

export interface featuredCollectionProducts_collection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  /**
   * List of products in this collection.
   */
  products: featuredCollectionProducts_collection_products | null;
}

export interface featuredCollectionProducts {
  /**
   * Look up a collection by ID.
   */
  collection: featuredCollectionProducts_collection | null;
}

export interface featuredCollectionProductsVariables {
  slug: string;
  first: number;
}
