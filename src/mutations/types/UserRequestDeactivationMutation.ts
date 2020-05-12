/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { AccountErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: UserRequestDeactivationMutation
// ====================================================

export interface UserRequestDeactivationMutation_accountRequestDeletion_errors {
  __typename: "Error";
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

export interface UserRequestDeactivationMutation_accountRequestDeletion_accountErrors {
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

export interface UserRequestDeactivationMutation_accountRequestDeletion {
  __typename: "AccountRequestDeletion";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: UserRequestDeactivationMutation_accountRequestDeletion_errors[];
  accountErrors: UserRequestDeactivationMutation_accountRequestDeletion_accountErrors[];
}

export interface UserRequestDeactivationMutation {
  /**
   * Sends an email with the account removal link for the logged-in user.
   */
  accountRequestDeletion: UserRequestDeactivationMutation_accountRequestDeletion | null;
}

export interface UserRequestDeactivationMutationVariables {
  redirectUrl: string;
}
