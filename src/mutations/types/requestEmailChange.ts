/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: requestEmailChange
// ====================================================

export interface requestEmailChange_requestEmailChange_errors {
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

export interface requestEmailChange_requestEmailChange_user_metadata {
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

export interface requestEmailChange_requestEmailChange_user {
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
  metadata: (requestEmailChange_requestEmailChange_user_metadata | null)[];
}

export interface requestEmailChange_requestEmailChange {
  __typename: "RequestEmailChange";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: requestEmailChange_requestEmailChange_errors[];
  /**
   * A user instance.
   */
  user: requestEmailChange_requestEmailChange_user | null;
}

export interface requestEmailChange {
  /**
   * Request email change of the logged in user.
   */
  requestEmailChange: requestEmailChange_requestEmailChange | null;
}

export interface requestEmailChangeVariables {
  newEmail: string;
  password: string;
  redirectUrl: string;
}
