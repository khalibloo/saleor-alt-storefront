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

export interface CustomerRegisterMutation_accountRegister_user_meta_clients_metadata {
  __typename: "MetaItem";
  /**
   * Key of a metadata item.
   */
  key: string;
  /**
   * Value of a metadata item.
   */
  value: string;
}

export interface CustomerRegisterMutation_accountRegister_user_meta_clients {
  __typename: "MetaClientStore";
  /**
   * Metadata client's name.
   */
  name: string;
  /**
   * Metadata stored for a client.
   */
  metadata: (CustomerRegisterMutation_accountRegister_user_meta_clients_metadata | null)[];
}

export interface CustomerRegisterMutation_accountRegister_user_meta {
  __typename: "MetaStore";
  /**
   * Name of metadata client group.
   */
  namespace: string;
  /**
   * List of clients that stored metadata in a group.
   */
  clients: (CustomerRegisterMutation_accountRegister_user_meta_clients | null)[];
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
   * List of publicly stored metadata namespaces.
   */
  meta: (CustomerRegisterMutation_accountRegister_user_meta | null)[];
}

export interface CustomerRegisterMutation_accountRegister {
  __typename: "AccountRegister";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: CustomerRegisterMutation_accountRegister_errors[];
  user: CustomerRegisterMutation_accountRegister_user | null;
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
