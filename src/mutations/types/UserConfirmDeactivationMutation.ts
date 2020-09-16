/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: UserConfirmDeactivationMutation
// ====================================================

export interface UserConfirmDeactivationMutation_accountDelete_accountErrors {
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

export interface UserConfirmDeactivationMutation_accountDelete {
  __typename: "AccountDelete";
  accountErrors: UserConfirmDeactivationMutation_accountDelete_accountErrors[];
}

export interface UserConfirmDeactivationMutation {
  /**
   * Remove user account.
   */
  accountDelete: UserConfirmDeactivationMutation_accountDelete | null;
}

export interface UserConfirmDeactivationMutationVariables {
  token: string;
}
