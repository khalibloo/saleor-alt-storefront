/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: homePageQuery
// ====================================================

export interface homePageQuery_shop_geolocalization_country {
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

export interface homePageQuery_shop_geolocalization {
  __typename: "Geolocalization";
  /**
   * Country of the user acquired by his IP address.
   */
  country: homePageQuery_shop_geolocalization_country | null;
}

export interface homePageQuery_shop_homepageCollection_backgroundImage {
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

export interface homePageQuery_shop_homepageCollection_products_edges_node_thumbnail {
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

export interface homePageQuery_shop_homepageCollection_products_edges_node_images {
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

export interface homePageQuery_shop_homepageCollection_products_edges_node_collections {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface homePageQuery_shop_homepageCollection_products_edges_node_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface homePageQuery_shop_homepageCollection_products_edges_node_pricing_discount_gross {
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

export interface homePageQuery_shop_homepageCollection_products_edges_node_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: homePageQuery_shop_homepageCollection_products_edges_node_pricing_discount_gross;
}

export interface homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRange_start_gross {
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

export interface homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRange_start_gross;
}

export interface homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRange_stop_gross {
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

export interface homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRange_stop_gross;
}

export interface homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRange_stop | null;
}

export interface homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
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

export interface homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
}

export interface homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
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

export interface homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
}

export interface homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface homePageQuery_shop_homepageCollection_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: homePageQuery_shop_homepageCollection_products_edges_node_pricing_discount | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRange | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: homePageQuery_shop_homepageCollection_products_edges_node_pricing_priceRangeUndiscounted | null;
}

export interface homePageQuery_shop_homepageCollection_products_edges_node {
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
  thumbnail: homePageQuery_shop_homepageCollection_products_edges_node_thumbnail | null;
  /**
   * List of images for the product.
   */
  images: (homePageQuery_shop_homepageCollection_products_edges_node_images | null)[] | null;
  /**
   * List of collections for the product.
   */
  collections: (homePageQuery_shop_homepageCollection_products_edges_node_collections | null)[] | null;
  category: homePageQuery_shop_homepageCollection_products_edges_node_category | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: homePageQuery_shop_homepageCollection_products_edges_node_pricing | null;
}

export interface homePageQuery_shop_homepageCollection_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: homePageQuery_shop_homepageCollection_products_edges_node;
}

export interface homePageQuery_shop_homepageCollection_products {
  __typename: "ProductCountableConnection";
  edges: homePageQuery_shop_homepageCollection_products_edges[];
}

export interface homePageQuery_shop_homepageCollection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  backgroundImage: homePageQuery_shop_homepageCollection_backgroundImage | null;
  /**
   * List of products in this collection.
   */
  products: homePageQuery_shop_homepageCollection_products | null;
}

export interface homePageQuery_shop {
  __typename: "Shop";
  /**
   * Shop's name.
   */
  name: string;
  /**
   * Customer's geolocalization data.
   */
  geolocalization: homePageQuery_shop_geolocalization | null;
  /**
   * Collection displayed on homepage.
   */
  homepageCollection: homePageQuery_shop_homepageCollection | null;
}

export interface homePageQuery {
  /**
   * Return information about the shop.
   */
  shop: homePageQuery_shop;
}
