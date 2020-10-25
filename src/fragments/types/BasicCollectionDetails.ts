/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BasicCollectionDetails
// ====================================================

export interface BasicCollectionDetails_translation {
  __typename: "CollectionTranslation";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface BasicCollectionDetails {
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
  translation: BasicCollectionDetails_translation | null;
}
