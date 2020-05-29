/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categoryDetailQuery
// ====================================================

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
}
