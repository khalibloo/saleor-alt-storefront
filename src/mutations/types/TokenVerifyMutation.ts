/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: TokenVerifyMutation
// ====================================================

export interface TokenVerifyMutation_tokenVerify_accountErrors {
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
  /**
   * Determine if token is valid or not.
   */
  isValid: boolean;
  /**
   * JWT payload.
   */
  payload: any | null;
  accountErrors: TokenVerifyMutation_tokenVerify_accountErrors[];
  /**
   * User assigned to token.
   */
  user: TokenVerifyMutation_tokenVerify_user | null;
}

export interface TokenVerifyMutation {
  /**
   * Verify JWT token.
   */
  tokenVerify: TokenVerifyMutation_tokenVerify | null;
}

export interface TokenVerifyMutationVariables {
  token: string;
}
