/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BasicCategoryDetails
// ====================================================

export interface BasicCategoryDetails_translation {
  __typename: "CategoryTranslation";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface BasicCategoryDetails {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * Returns translated category fields for the given language code.
   */
  translation: BasicCategoryDetails_translation | null;
}
