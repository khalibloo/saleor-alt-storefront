/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: RequestPasswordResetMutation
// ====================================================

export interface RequestPasswordResetMutation_requestPasswordReset_accountErrors {
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

export interface RequestPasswordResetMutation_requestPasswordReset {
  __typename: "RequestPasswordReset";
  accountErrors: RequestPasswordResetMutation_requestPasswordReset_accountErrors[];
}

export interface RequestPasswordResetMutation {
  /**
   * Sends an email with the account password modification link.
   */
  requestPasswordReset: RequestPasswordResetMutation_requestPasswordReset | null;
}

export interface RequestPasswordResetMutationVariables {
  email: string;
  redirectUrl: string;
}
