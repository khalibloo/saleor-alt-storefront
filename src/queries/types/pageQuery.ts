/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: pageQuery
// ====================================================

export interface pageQuery_page {
  __typename: "Page";
  /**
   * The ID of the object.
   */
  id: string;
  title: string;
  contentJson: any;
}

export interface pageQuery {
  /**
   * Look up a page by ID or slug.
   */
  page: pageQuery_page | null;
}

export interface pageQueryVariables {
  slug: string;
}
