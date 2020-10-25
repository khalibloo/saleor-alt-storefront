/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCodeEnum } from "./../../globalTypes";

// ====================================================
// GraphQL query operation: categoryDetailQuery
// ====================================================

export interface categoryDetailQuery_category_translation {
  __typename: "CategoryTranslation";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  seoTitle: string | null;
  seoDescription: string | null;
}

export interface categoryDetailQuery_category_backgroundImage {
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

export interface categoryDetailQuery_category {
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
  translation: categoryDetailQuery_category_translation | null;
  seoTitle: string | null;
  seoDescription: string | null;
  backgroundImage: categoryDetailQuery_category_backgroundImage | null;
}

export interface categoryDetailQuery {
  /**
   * Look up a category by ID or slug.
   */
  category: categoryDetailQuery_category | null;
}

export interface categoryDetailQueryVariables {
  category: string;
  lang: LanguageCodeEnum;
}
