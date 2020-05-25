/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: TokenRefreshMutation
// ====================================================

export interface TokenRefreshMutation_tokenRefresh {
  __typename: "RefreshToken";
  token: string | null;
  payload: any | null;
}

export interface TokenRefreshMutation {
  /**
   * Mutation that refresh user token.
   * 
   * It overrides the default graphql_jwt.Refresh to update user's last_login field.
   */
  tokenRefresh: TokenRefreshMutation_tokenRefresh | null;
}

export interface TokenRefreshMutationVariables {
  token: string;
}
