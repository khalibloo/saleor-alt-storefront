/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: TokenCreateMutation
// ====================================================

export interface TokenCreateMutation_tokenCreate_accountErrors {
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
  /**
   * JWT token, required to authenticate.
   */
  token: string | null;
  /**
   * JWT refresh token, required to re-generate access token.
   */
  refreshToken: string | null;
  /**
   * CSRF token required to re-generate access token.
   */
  csrfToken: string | null;
  accountErrors: TokenCreateMutation_tokenCreate_accountErrors[];
  /**
   * A user instance.
   */
  user: TokenCreateMutation_tokenCreate_user | null;
}

export interface TokenCreateMutation {
  /**
   * Create JWT token.
   */
  tokenCreate: TokenCreateMutation_tokenCreate | null;
}

export interface TokenCreateMutationVariables {
  email: string;
  password: string;
}
