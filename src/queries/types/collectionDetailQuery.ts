/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCodeEnum } from "./../../globalTypes";

// ====================================================
// GraphQL query operation: collectionDetailQuery
// ====================================================

export interface collectionDetailQuery_collection_translation {
  __typename: "CollectionTranslation";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  seoTitle: string | null;
  seoDescription: string | null;
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
  slug: string;
  /**
   * Returns translated collection fields for the given language code.
   */
  translation: collectionDetailQuery_collection_translation | null;
  seoTitle: string | null;
  seoDescription: string | null;
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
  lang: LanguageCodeEnum;
}
