/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: featuredCategoryProducts
// ====================================================

export interface featuredCategoryProducts_category_products_edges_node_thumbnail {
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

export interface featuredCategoryProducts_category_products_edges_node_images {
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

export interface featuredCategoryProducts_category_products_edges_node_collections {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface featuredCategoryProducts_category_products_edges_node_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface featuredCategoryProducts_category_products_edges_node_pricing_discount_gross {
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

export interface featuredCategoryProducts_category_products_edges_node_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: featuredCategoryProducts_category_products_edges_node_pricing_discount_gross;
}

export interface featuredCategoryProducts_category_products_edges_node_pricing_priceRange_start_gross {
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

export interface featuredCategoryProducts_category_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: featuredCategoryProducts_category_products_edges_node_pricing_priceRange_start_gross;
}

export interface featuredCategoryProducts_category_products_edges_node_pricing_priceRange_stop_gross {
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

export interface featuredCategoryProducts_category_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: featuredCategoryProducts_category_products_edges_node_pricing_priceRange_stop_gross;
}

export interface featuredCategoryProducts_category_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: featuredCategoryProducts_category_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: featuredCategoryProducts_category_products_edges_node_pricing_priceRange_stop | null;
}

export interface featuredCategoryProducts_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
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

export interface featuredCategoryProducts_category_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: featuredCategoryProducts_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
}

export interface featuredCategoryProducts_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
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

export interface featuredCategoryProducts_category_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: featuredCategoryProducts_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
}

export interface featuredCategoryProducts_category_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: featuredCategoryProducts_category_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: featuredCategoryProducts_category_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface featuredCategoryProducts_category_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: featuredCategoryProducts_category_products_edges_node_pricing_discount | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: featuredCategoryProducts_category_products_edges_node_pricing_priceRange | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: featuredCategoryProducts_category_products_edges_node_pricing_priceRangeUndiscounted | null;
}

export interface featuredCategoryProducts_category_products_edges_node {
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
  thumbnail: featuredCategoryProducts_category_products_edges_node_thumbnail | null;
  /**
   * List of images for the product.
   */
  images: (featuredCategoryProducts_category_products_edges_node_images | null)[] | null;
  /**
   * List of collections for the product.
   */
  collections: (featuredCategoryProducts_category_products_edges_node_collections | null)[] | null;
  category: featuredCategoryProducts_category_products_edges_node_category | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: featuredCategoryProducts_category_products_edges_node_pricing | null;
}

export interface featuredCategoryProducts_category_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: featuredCategoryProducts_category_products_edges_node;
}

export interface featuredCategoryProducts_category_products {
  __typename: "ProductCountableConnection";
  edges: featuredCategoryProducts_category_products_edges[];
}

export interface featuredCategoryProducts_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * List of products in the category.
   */
  products: featuredCategoryProducts_category_products | null;
}

export interface featuredCategoryProducts {
  /**
   * Look up a category by ID or slug.
   */
  category: featuredCategoryProducts_category | null;
}

export interface featuredCategoryProductsVariables {
  slug: string;
  first: number;
}
