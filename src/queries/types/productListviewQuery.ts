/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productListviewQuery
// ====================================================

export interface productListviewQuery_product_thumbnail {
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

export interface productListviewQuery_product_collections {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface productListviewQuery_product_pricing_discount_gross {
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

export interface productListviewQuery_product_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: productListviewQuery_product_pricing_discount_gross;
}

export interface productListviewQuery_product_pricing_priceRange_start_gross {
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

export interface productListviewQuery_product_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productListviewQuery_product_pricing_priceRange_start_gross;
}

export interface productListviewQuery_product_pricing_priceRange_stop_gross {
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

export interface productListviewQuery_product_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productListviewQuery_product_pricing_priceRange_stop_gross;
}

export interface productListviewQuery_product_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: productListviewQuery_product_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: productListviewQuery_product_pricing_priceRange_stop | null;
}

export interface productListviewQuery_product_pricing_priceRangeUndiscounted_start_gross {
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

export interface productListviewQuery_product_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productListviewQuery_product_pricing_priceRangeUndiscounted_start_gross;
}

export interface productListviewQuery_product_pricing_priceRangeUndiscounted_stop_gross {
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

export interface productListviewQuery_product_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productListviewQuery_product_pricing_priceRangeUndiscounted_stop_gross;
}

export interface productListviewQuery_product_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: productListviewQuery_product_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: productListviewQuery_product_pricing_priceRangeUndiscounted_stop | null;
}

export interface productListviewQuery_product_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: productListviewQuery_product_pricing_discount | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: productListviewQuery_product_pricing_priceRange | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: productListviewQuery_product_pricing_priceRangeUndiscounted | null;
}

export interface productListviewQuery_product {
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
  thumbnail: productListviewQuery_product_thumbnail | null;
  /**
   * List of collections for the product.
   */
  collections: (productListviewQuery_product_collections | null)[] | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: productListviewQuery_product_pricing | null;
  descriptionJson: any;
  /**
   * Whether the product is in stock and visible or not.
   */
  isAvailable: boolean | null;
}

export interface productListviewQuery {
  /**
   * Look up a product by ID.
   */
  product: productListviewQuery_product | null;
}

export interface productListviewQueryVariables {
  productID: string;
}
