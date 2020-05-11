/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: requestEmailChangeMutation
// ====================================================

export interface requestEmailChangeMutation_requestEmailChange_errors {
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

export interface requestEmailChangeMutation_requestEmailChange_user_metadata {
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

export interface requestEmailChangeMutation_requestEmailChange_user {
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
  metadata: (requestEmailChangeMutation_requestEmailChange_user_metadata | null)[];
}

export interface requestEmailChangeMutation_requestEmailChange {
  __typename: "RequestEmailChange";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: requestEmailChangeMutation_requestEmailChange_errors[];
  /**
   * A user instance.
   */
  user: requestEmailChangeMutation_requestEmailChange_user | null;
}

export interface requestEmailChangeMutation {
  /**
   * Request email change of the logged in user.
   */
  requestEmailChange: requestEmailChangeMutation_requestEmailChange | null;
}

export interface requestEmailChangeMutationVariables {
  newEmail: string;
  password: string;
  redirectUrl: string;
}
