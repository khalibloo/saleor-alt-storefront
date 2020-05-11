/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { AddressInput } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: accountAddressCreateMutation
// ====================================================

export interface accountAddressCreateMutation_accountAddressCreate_errors {
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

export interface accountAddressCreateMutation_accountAddressCreate_user_metadata {
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

export interface accountAddressCreateMutation_accountAddressCreate_user {
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
  metadata: (accountAddressCreateMutation_accountAddressCreate_user_metadata | null)[];
}

export interface accountAddressCreateMutation_accountAddressCreate {
  __typename: "AccountAddressCreate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: accountAddressCreateMutation_accountAddressCreate_errors[];
  /**
   * A user instance for which the address was created.
   */
  user: accountAddressCreateMutation_accountAddressCreate_user | null;
}

export interface accountAddressCreateMutation {
  /**
   * Create a new address for the customer.
   */
  accountAddressCreate: accountAddressCreateMutation_accountAddressCreate | null;
}

export interface accountAddressCreateMutationVariables {
  address: AddressInput;
}
