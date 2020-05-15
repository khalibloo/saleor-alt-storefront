/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { AccountRegisterInput, AccountErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: UserRegisterMutation
// ====================================================

export interface UserRegisterMutation_accountRegister_accountErrors {
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

export interface UserRegisterMutation_accountRegister_user_metadata {
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

export interface UserRegisterMutation_accountRegister_user_addresses_country {
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

export interface UserRegisterMutation_accountRegister_user_addresses {
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
  country: UserRegisterMutation_accountRegister_user_addresses_country;
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

export interface UserRegisterMutation_accountRegister_user {
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
  metadata: (UserRegisterMutation_accountRegister_user_metadata | null)[];
  /**
   * List of all user's addresses.
   */
  addresses: (UserRegisterMutation_accountRegister_user_addresses | null)[] | null;
}

export interface UserRegisterMutation_accountRegister {
  __typename: "AccountRegister";
  accountErrors: UserRegisterMutation_accountRegister_accountErrors[];
  user: UserRegisterMutation_accountRegister_user | null;
  /**
   * Informs whether users need to confirm their email address.
   */
  requiresConfirmation: boolean | null;
}

export interface UserRegisterMutation {
  /**
   * Register a new user.
   */
  accountRegister: UserRegisterMutation_accountRegister | null;
}

export interface UserRegisterMutationVariables {
  input: AccountRegisterInput;
}
