/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { AccountRegisterInput } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: CustomerRegisterMutation
// ====================================================

export interface CustomerRegisterMutation_accountRegister_errors {
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

export interface CustomerRegisterMutation_accountRegister_user_metadata {
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

export interface CustomerRegisterMutation_accountRegister_user {
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
  metadata: (CustomerRegisterMutation_accountRegister_user_metadata | null)[];
}

export interface CustomerRegisterMutation_accountRegister {
  __typename: "AccountRegister";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: CustomerRegisterMutation_accountRegister_errors[];
  user: CustomerRegisterMutation_accountRegister_user | null;
  /**
   * Informs whether users need to confirm their email address.
   */
  requiresConfirmation: boolean | null;
}

export interface CustomerRegisterMutation {
  /**
   * Register a new user.
   */
  accountRegister: CustomerRegisterMutation_accountRegister | null;
}

export interface CustomerRegisterMutationVariables {
  input: AccountRegisterInput;
}
