/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { AccountErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: UserDeactivateMutation
// ====================================================

export interface UserDeactivateMutation_accountDelete_accountErrors {
  __typename: "AccountError";
  /**
   * The error code.
   */
  code: AccountErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface UserDeactivateMutation_accountDelete {
  __typename: "AccountDelete";
  accountErrors: UserDeactivateMutation_accountDelete_accountErrors[];
}

export interface UserDeactivateMutation {
  /**
   * Remove user account.
   */
  accountDelete: UserDeactivateMutation_accountDelete | null;
}

export interface UserDeactivateMutationVariables {
  token: string;
}
