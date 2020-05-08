/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { AccountInput } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: CustomerNameUpdateMutation
// ====================================================

export interface CustomerNameUpdateMutation_accountUpdate_errors {
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

export interface CustomerNameUpdateMutation_accountUpdate_user_meta_clients_metadata {
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

export interface CustomerNameUpdateMutation_accountUpdate_user_meta_clients {
  __typename: "MetaClientStore";
  /**
   * Metadata client's name.
   */
  name: string;
  /**
   * Metadata stored for a client.
   */
  metadata: (CustomerNameUpdateMutation_accountUpdate_user_meta_clients_metadata | null)[];
}

export interface CustomerNameUpdateMutation_accountUpdate_user_meta {
  __typename: "MetaStore";
  /**
   * Name of metadata client group.
   */
  namespace: string;
  /**
   * List of clients that stored metadata in a group.
   */
  clients: (CustomerNameUpdateMutation_accountUpdate_user_meta_clients | null)[];
}

export interface CustomerNameUpdateMutation_accountUpdate_user {
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
  meta: (CustomerNameUpdateMutation_accountUpdate_user_meta | null)[];
}

export interface CustomerNameUpdateMutation_accountUpdate {
  __typename: "AccountUpdate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: CustomerNameUpdateMutation_accountUpdate_errors[];
  user: CustomerNameUpdateMutation_accountUpdate_user | null;
}

export interface CustomerNameUpdateMutation {
  /**
   * Updates the account of the logged-in user.
   */
  accountUpdate: CustomerNameUpdateMutation_accountUpdate | null;
}

export interface CustomerNameUpdateMutationVariables {
  input: AccountInput;
}
