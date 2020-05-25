/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { AddressInput, AccountErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: UserAddressUpdateMutation
// ====================================================

export interface UserAddressUpdateMutation_accountAddressUpdate_accountErrors {
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

export interface UserAddressUpdateMutation_accountAddressUpdate_user_metadata {
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

export interface UserAddressUpdateMutation_accountAddressUpdate_user_addresses_country {
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

export interface UserAddressUpdateMutation_accountAddressUpdate_user_addresses {
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
  country: UserAddressUpdateMutation_accountAddressUpdate_user_addresses_country;
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

export interface UserAddressUpdateMutation_accountAddressUpdate_user {
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
  metadata: (UserAddressUpdateMutation_accountAddressUpdate_user_metadata | null)[];
  /**
   * List of all user's addresses.
   */
  addresses: (UserAddressUpdateMutation_accountAddressUpdate_user_addresses | null)[] | null;
}

export interface UserAddressUpdateMutation_accountAddressUpdate {
  __typename: "AccountAddressUpdate";
  accountErrors: UserAddressUpdateMutation_accountAddressUpdate_accountErrors[];
  /**
   * A user object for which the address was edited.
   */
  user: UserAddressUpdateMutation_accountAddressUpdate_user | null;
}

export interface UserAddressUpdateMutation {
  /**
   * Updates an address of the logged-in user.
   */
  accountAddressUpdate: UserAddressUpdateMutation_accountAddressUpdate | null;
}

export interface UserAddressUpdateMutationVariables {
  id: string;
  address: AddressInput;
}
