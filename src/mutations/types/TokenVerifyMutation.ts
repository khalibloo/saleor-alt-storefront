/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: TokenVerifyMutation
// ====================================================

export interface TokenVerifyMutation_tokenVerify_user_meta_clients_metadata {
  __typename: "MetaItem";
  /**
   * Key of a metadata item.
   */
  key: string;
  /**
   * Value of a metadata item.
   */
  value: string;
}

export interface TokenVerifyMutation_tokenVerify_user_meta_clients {
  __typename: "MetaClientStore";
  /**
   * Metadata client's name.
   */
  name: string;
  /**
   * Metadata stored for a client.
   */
  metadata: (TokenVerifyMutation_tokenVerify_user_meta_clients_metadata | null)[];
}

export interface TokenVerifyMutation_tokenVerify_user_meta {
  __typename: "MetaStore";
  /**
   * Name of metadata client group.
   */
  namespace: string;
  /**
   * List of clients that stored metadata in a group.
   */
  clients: (TokenVerifyMutation_tokenVerify_user_meta_clients | null)[];
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
   * List of publicly stored metadata namespaces.
   */
  meta: (TokenVerifyMutation_tokenVerify_user_meta | null)[];
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
