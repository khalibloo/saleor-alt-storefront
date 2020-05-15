/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productDetailQuery
// ====================================================

export interface productDetailQuery_product_images {
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

export interface productDetailQuery_product_pricing_discount_gross {
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

export interface productDetailQuery_product_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_product_pricing_discount_gross;
}

export interface productDetailQuery_product_pricing_priceRange_start_gross {
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

export interface productDetailQuery_product_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_product_pricing_priceRange_start_gross;
}

export interface productDetailQuery_product_pricing_priceRange_stop_gross {
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

export interface productDetailQuery_product_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_product_pricing_priceRange_stop_gross;
}

export interface productDetailQuery_product_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: productDetailQuery_product_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: productDetailQuery_product_pricing_priceRange_stop | null;
}

export interface productDetailQuery_product_pricing_priceRangeUndiscounted_start_gross {
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

export interface productDetailQuery_product_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_product_pricing_priceRangeUndiscounted_start_gross;
}

export interface productDetailQuery_product_pricing_priceRangeUndiscounted_stop_gross {
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

export interface productDetailQuery_product_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_product_pricing_priceRangeUndiscounted_stop_gross;
}

export interface productDetailQuery_product_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: productDetailQuery_product_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: productDetailQuery_product_pricing_priceRangeUndiscounted_stop | null;
}

export interface productDetailQuery_product_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: productDetailQuery_product_pricing_discount | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: productDetailQuery_product_pricing_priceRange | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: productDetailQuery_product_pricing_priceRangeUndiscounted | null;
}

export interface productDetailQuery_product_attributes_attribute {
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

export interface productDetailQuery_product_attributes_values {
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

export interface productDetailQuery_product_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: productDetailQuery_product_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (productDetailQuery_product_attributes_values | null)[];
}

export interface productDetailQuery_product_variants_images {
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

export interface productDetailQuery_product_variants_pricing_price_gross {
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

export interface productDetailQuery_product_variants_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_product_variants_pricing_price_gross;
}

export interface productDetailQuery_product_variants_pricing {
  __typename: "VariantPricingInfo";
  /**
   * The price, with any discount subtracted.
   */
  price: productDetailQuery_product_variants_pricing_price | null;
}

export interface productDetailQuery_product_variants_attributes_values {
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

export interface productDetailQuery_product_variants_attributes_attribute_values {
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

export interface productDetailQuery_product_variants_attributes_attribute {
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
   * List of attribute's values.
   */
  values: (productDetailQuery_product_variants_attributes_attribute_values | null)[] | null;
}

export interface productDetailQuery_product_variants_attributes {
  __typename: "SelectedAttribute";
  /**
   * Values of an attribute.
   */
  values: (productDetailQuery_product_variants_attributes_values | null)[];
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: productDetailQuery_product_variants_attributes_attribute;
}

export interface productDetailQuery_product_variants {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  sku: string;
  name: string;
  /**
   * List of images for the product variant.
   */
  images: (productDetailQuery_product_variants_images | null)[] | null;
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: productDetailQuery_product_variants_pricing | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: productDetailQuery_product_variants_attributes[];
  /**
   * Quantity of a product available for sale in one checkout.
   */
  quantityAvailable: number;
}

export interface productDetailQuery_product_category_products_edges_node_thumbnail {
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

export interface productDetailQuery_product_category_products_edges_node_images {
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

export interface productDetailQuery_product_category_products_edges_node_collections {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface productDetailQuery_product_category_products_edges_node_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface productDetailQuery_product_category_products_edges_node_pricing_discount_gross {
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

export interface productDetailQuery_product_category_products_edges_node_pricing_discount {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_product_category_products_edges_node_pricing_discount_gross;
}

export interface productDetailQuery_product_category_products_edges_node_pricing_priceRange_start_gross {
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

export interface productDetailQuery_product_category_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_product_category_products_edges_node_pricing_priceRange_start_gross;
}

export interface productDetailQuery_product_category_products_edges_node_pricing_priceRange_stop_gross {
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

export interface productDetailQuery_product_category_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_product_category_products_edges_node_pricing_priceRange_stop_gross;
}

export interface productDetailQuery_product_category_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: productDetailQuery_product_category_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: productDetailQuery_product_category_products_edges_node_pricing_priceRange_stop | null;
}

export interface productDetailQuery_product_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
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

export interface productDetailQuery_product_category_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_product_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
}

export interface productDetailQuery_product_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
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

export interface productDetailQuery_product_category_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: productDetailQuery_product_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
}

export interface productDetailQuery_product_category_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: productDetailQuery_product_category_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: productDetailQuery_product_category_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface productDetailQuery_product_category_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The discount amount if in sale (null otherwise).
   */
  discount: productDetailQuery_product_category_products_edges_node_pricing_discount | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: productDetailQuery_product_category_products_edges_node_pricing_priceRange | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: productDetailQuery_product_category_products_edges_node_pricing_priceRangeUndiscounted | null;
}

export interface productDetailQuery_product_category_products_edges_node {
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
  thumbnail: productDetailQuery_product_category_products_edges_node_thumbnail | null;
  /**
   * List of images for the product.
   */
  images: (productDetailQuery_product_category_products_edges_node_images | null)[] | null;
  /**
   * List of collections for the product.
   */
  collections: (productDetailQuery_product_category_products_edges_node_collections | null)[] | null;
  category: productDetailQuery_product_category_products_edges_node_category | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: productDetailQuery_product_category_products_edges_node_pricing | null;
}

export interface productDetailQuery_product_category_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: productDetailQuery_product_category_products_edges_node;
}

export interface productDetailQuery_product_category_products {
  __typename: "ProductCountableConnection";
  edges: productDetailQuery_product_category_products_edges[];
}

export interface productDetailQuery_product_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * List of products in the category.
   */
  products: productDetailQuery_product_category_products | null;
}

export interface productDetailQuery_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  descriptionJson: any;
  /**
   * List of images for the product.
   */
  images: (productDetailQuery_product_images | null)[] | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: productDetailQuery_product_pricing | null;
  /**
   * Whether the product is in stock and visible or not.
   */
  isAvailable: boolean | null;
  /**
   * List of attributes assigned to this product.
   */
  attributes: productDetailQuery_product_attributes[];
  /**
   * List of variants for the product.
   */
  variants: (productDetailQuery_product_variants | null)[] | null;
  category: productDetailQuery_product_category | null;
}

export interface productDetailQuery {
  /**
   * Look up a product by ID.
   */
  product: productDetailQuery_product | null;
}

export interface productDetailQueryVariables {
  productID: string;
}
