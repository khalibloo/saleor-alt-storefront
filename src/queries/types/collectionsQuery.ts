/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: collectionsQuery
// ====================================================

export interface collectionsQuery_collections_edges_node {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
}

export interface collectionsQuery_collections_edges {
  __typename: "CollectionCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: collectionsQuery_collections_edges_node;
}

export interface collectionsQuery_collections {
  __typename: "CollectionCountableConnection";
  edges: collectionsQuery_collections_edges[];
}

export interface collectionsQuery {
  /**
   * List of the shop's collections.
   */
  collections: collectionsQuery_collections | null;
}
