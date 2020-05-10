/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MetaInput, AccountErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: userMetaUpdate
// ====================================================

export interface userMetaUpdate_accountUpdateMeta_errors {
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

export interface userMetaUpdate_accountUpdateMeta_accountErrors {
  __typename: "AccountError";
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
  /**
   * The error code.
   */
  code: AccountErrorCode;
}

export interface userMetaUpdate_accountUpdateMeta_user_metadata {
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

export interface userMetaUpdate_accountUpdateMeta_user {
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
  metadata: (userMetaUpdate_accountUpdateMeta_user_metadata | null)[];
}

export interface userMetaUpdate_accountUpdateMeta {
  __typename: "AccountUpdateMeta";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: userMetaUpdate_accountUpdateMeta_errors[];
  accountErrors: userMetaUpdate_accountUpdateMeta_accountErrors[];
  user: userMetaUpdate_accountUpdateMeta_user | null;
}

export interface userMetaUpdate {
  /**
   * Updates metadata of the logged-in user.
   */
  accountUpdateMeta: userMetaUpdate_accountUpdateMeta | null;
}

export interface userMetaUpdateVariables {
  input: MetaInput;
}
