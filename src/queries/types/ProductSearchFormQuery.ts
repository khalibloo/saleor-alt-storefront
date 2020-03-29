/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProductSearchFormQuery
// ====================================================

export interface ProductSearchFormQuery_products_edges_node_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface ProductSearchFormQuery_products_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  category: ProductSearchFormQuery_products_edges_node_category | null;
}

export interface ProductSearchFormQuery_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ProductSearchFormQuery_products_edges_node;
}

export interface ProductSearchFormQuery_products {
  __typename: "ProductCountableConnection";
  edges: ProductSearchFormQuery_products_edges[];
}

export interface ProductSearchFormQuery {
  /**
   * List of the shop's products.
   */
  products: ProductSearchFormQuery_products | null;
}

export interface ProductSearchFormQueryVariables {
  query?: string | null;
}
