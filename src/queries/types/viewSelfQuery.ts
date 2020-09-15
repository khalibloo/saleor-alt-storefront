/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: viewSelfQuery
// ====================================================

export interface viewSelfQuery_me_metadata {
  __typename: "MetadataItem";
  /**
   * Key of a metadata item.
   */
  key: string;
  /**
   * Value of a metadata item.
   */
  value: string;
}

export interface viewSelfQuery_me {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isStaff: boolean;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (viewSelfQuery_me_metadata | null)[];
}

export interface viewSelfQuery {
  /**
   * Return the currently authenticated user.
   */
  me: viewSelfQuery_me | null;
}
