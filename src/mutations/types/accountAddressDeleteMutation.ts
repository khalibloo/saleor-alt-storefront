/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: accountAddressDeleteMutation
// ====================================================

export interface accountAddressDeleteMutation_accountAddressDelete_errors {
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

export interface accountAddressDeleteMutation_accountAddressDelete_user_metadata {
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

export interface accountAddressDeleteMutation_accountAddressDelete_user_addresses_country {
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

export interface accountAddressDeleteMutation_accountAddressDelete_user_addresses {
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
  country: accountAddressDeleteMutation_accountAddressDelete_user_addresses_country;
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

export interface accountAddressDeleteMutation_accountAddressDelete_user {
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
  metadata: (accountAddressDeleteMutation_accountAddressDelete_user_metadata | null)[];
  /**
   * List of all user's addresses.
   */
  addresses: (accountAddressDeleteMutation_accountAddressDelete_user_addresses | null)[] | null;
}

export interface accountAddressDeleteMutation_accountAddressDelete {
  __typename: "AccountAddressDelete";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: accountAddressDeleteMutation_accountAddressDelete_errors[];
  /**
   * A user instance for which the address was deleted.
   */
  user: accountAddressDeleteMutation_accountAddressDelete_user | null;
}

export interface accountAddressDeleteMutation {
  /**
   * Delete an address of the logged-in user.
   */
  accountAddressDelete: accountAddressDeleteMutation_accountAddressDelete | null;
}

export interface accountAddressDeleteMutationVariables {
  id: string;
}
