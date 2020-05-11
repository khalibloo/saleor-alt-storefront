/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { AccountInput } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: userNameUpdateMutation
// ====================================================

export interface userNameUpdateMutation_accountUpdate_errors {
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

export interface userNameUpdateMutation_accountUpdate_user_metadata {
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

export interface userNameUpdateMutation_accountUpdate_user_addresses_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface userNameUpdateMutation_accountUpdate_user_addresses {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  cityArea: string;
  postalCode: string;
  /**
   * Shop's default country.
   */
  country: userNameUpdateMutation_accountUpdate_user_addresses_country;
  countryArea: string;
  phone: string | null;
  /**
   * Address is user's default shipping address.
   */
  isDefaultShippingAddress: boolean | null;
  /**
   * Address is user's default billing address.
   */
  isDefaultBillingAddress: boolean | null;
}

export interface userNameUpdateMutation_accountUpdate_user {
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
  metadata: (userNameUpdateMutation_accountUpdate_user_metadata | null)[];
  /**
   * List of all user's addresses.
   */
  addresses: (userNameUpdateMutation_accountUpdate_user_addresses | null)[] | null;
}

export interface userNameUpdateMutation_accountUpdate {
  __typename: "AccountUpdate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: userNameUpdateMutation_accountUpdate_errors[];
  user: userNameUpdateMutation_accountUpdate_user | null;
}

export interface userNameUpdateMutation {
  /**
   * Updates the account of the logged-in user.
   */
  accountUpdate: userNameUpdateMutation_accountUpdate | null;
}

export interface userNameUpdateMutationVariables {
  input: AccountInput;
}
