/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AccountErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: PasswordResetMutation
// ====================================================

export interface PasswordResetMutation_setPassword_accountErrors {
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

export interface PasswordResetMutation_setPassword_user_metadata {
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

export interface PasswordResetMutation_setPassword_user {
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
  metadata: (PasswordResetMutation_setPassword_user_metadata | null)[];
}

export interface PasswordResetMutation_setPassword {
  __typename: "SetPassword";
  /**
   * List of errors that occurred executing the mutation.
   */
  accountErrors: PasswordResetMutation_setPassword_accountErrors[];
  token: string | null;
  /**
   * A user instance.
   */
  user: PasswordResetMutation_setPassword_user | null;
}

export interface PasswordResetMutation {
  /**
   * Sets the user's password from the token sent by email using the RequestPasswordReset mutation.
   */
  setPassword: PasswordResetMutation_setPassword | null;
}

export interface PasswordResetMutationVariables {
  email: string;
  password: string;
  token: string;
}
