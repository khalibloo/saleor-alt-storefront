/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: TokenRefreshMutation
// ====================================================

export interface TokenRefreshMutation_tokenRefresh_accountErrors {
  __typename: "AccountError";
  /**
   * The error code.
   */
  code: AccountErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface TokenRefreshMutation_tokenRefresh_user_metadata {
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

export interface TokenRefreshMutation_tokenRefresh_user {
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
  metadata: (TokenRefreshMutation_tokenRefresh_user_metadata | null)[];
}

export interface TokenRefreshMutation_tokenRefresh {
  __typename: "RefreshToken";
  /**
   * JWT token, required to authenticate.
   */
  token: string | null;
  accountErrors: TokenRefreshMutation_tokenRefresh_accountErrors[];
  /**
   * A user instance.
   */
  user: TokenRefreshMutation_tokenRefresh_user | null;
}

export interface TokenRefreshMutation {
  /**
   * Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie.
   */
  tokenRefresh: TokenRefreshMutation_tokenRefresh | null;
}

export interface TokenRefreshMutationVariables {
  refreshToken?: string | null;
  csrfToken?: string | null;
}
