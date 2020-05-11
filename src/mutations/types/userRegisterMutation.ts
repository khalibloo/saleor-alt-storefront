/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { AccountRegisterInput } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: userRegisterMutation
// ====================================================

export interface userRegisterMutation_accountRegister_errors {
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

export interface userRegisterMutation_accountRegister_user_metadata {
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

export interface userRegisterMutation_accountRegister_user {
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
  metadata: (userRegisterMutation_accountRegister_user_metadata | null)[];
}

export interface userRegisterMutation_accountRegister {
  __typename: "AccountRegister";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: userRegisterMutation_accountRegister_errors[];
  user: userRegisterMutation_accountRegister_user | null;
  /**
   * Informs whether users need to confirm their email address.
   */
  requiresConfirmation: boolean | null;
}

export interface userRegisterMutation {
  /**
   * Register a new user.
   */
  accountRegister: userRegisterMutation_accountRegister | null;
}

export interface userRegisterMutationVariables {
  input: AccountRegisterInput;
}
