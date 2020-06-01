/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: collectionDetailQuery
// ====================================================

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
  slug: string;
  backgroundImage: collectionDetailQuery_collection_backgroundImage | null;
}

export interface collectionDetailQuery {
  /**
   * Look up a collection by ID.
   */
  collection: collectionDetailQuery_collection | null;
}

export interface collectionDetailQueryVariables {
  collection: string;
}
