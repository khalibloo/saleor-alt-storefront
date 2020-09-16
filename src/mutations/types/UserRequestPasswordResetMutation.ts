/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: UserRequestPasswordResetMutation
// ====================================================

export interface UserRequestPasswordResetMutation_requestPasswordReset_accountErrors {
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

export interface UserRequestPasswordResetMutation_requestPasswordReset {
  __typename: "RequestPasswordReset";
  accountErrors: UserRequestPasswordResetMutation_requestPasswordReset_accountErrors[];
}

export interface UserRequestPasswordResetMutation {
  /**
   * Sends an email with the account password modification link.
   */
  requestPasswordReset: UserRequestPasswordResetMutation_requestPasswordReset | null;
}

export interface UserRequestPasswordResetMutationVariables {
  email: string;
  redirectUrl: string;
}
