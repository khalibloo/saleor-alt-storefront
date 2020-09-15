/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: TokenCreateMutation
// ====================================================

export interface TokenCreateMutation_tokenCreate_user_metadata {
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

export interface TokenCreateMutation_tokenCreate_user {
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
  metadata: (TokenCreateMutation_tokenCreate_user_metadata | null)[];
}

export interface TokenCreateMutation_tokenCreate {
  __typename: "CreateToken";
  token: string | null;
  /**
   * A user instance.
   */
  user: TokenCreateMutation_tokenCreate_user | null;
}

export interface TokenCreateMutation {
  /**
   * Mutation that authenticates a user and returns token and user data.
   * 
   * It overrides the default graphql_jwt.ObtainJSONWebToken to wrap potential
   * authentication errors in our Error type, which is consistent to how the rest of
   * the mutation works.
   */
  tokenCreate: TokenCreateMutation_tokenCreate | null;
}

export interface TokenCreateMutationVariables {
  email: string;
  password: string;
}
