/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: TokenVerifyMutation
// ====================================================

export interface TokenVerifyMutation_tokenVerify_user_metadata {
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

export interface TokenVerifyMutation_tokenVerify_user {
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
  metadata: (TokenVerifyMutation_tokenVerify_user_metadata | null)[];
}

export interface TokenVerifyMutation_tokenVerify {
  __typename: "VerifyToken";
  payload: any | null;
  user: TokenVerifyMutation_tokenVerify_user | null;
}

export interface TokenVerifyMutation {
  /**
   * Mutation that confirms if token is valid and also returns user data.
   */
  tokenVerify: TokenVerifyMutation_tokenVerify | null;
}

export interface TokenVerifyMutationVariables {
  token: string;
}
