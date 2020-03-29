/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: TokenRefreshMutation
// ====================================================

export interface TokenRefreshMutation_tokenRefresh {
  __typename: "Refresh";
  token: string | null;
  payload: any | null;
}

export interface TokenRefreshMutation {
  tokenRefresh: TokenRefreshMutation_tokenRefresh | null;
}

export interface TokenRefreshMutationVariables {
  token: string;
}
