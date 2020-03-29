/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MetaPath, AccountErrorCode } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: userMetaRemove
// ====================================================

export interface userMetaRemove_userClearMetadata_errors {
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

export interface userMetaRemove_userClearMetadata_accountErrors {
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

export interface userMetaRemove_userClearMetadata_user_meta_clients_metadata {
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

export interface userMetaRemove_userClearMetadata_user_meta_clients {
  __typename: "MetaClientStore";
  /**
   * Metadata client's name.
   */
  name: string;
  /**
   * Metadata stored for a client.
   */
  metadata: (userMetaRemove_userClearMetadata_user_meta_clients_metadata | null)[];
}

export interface userMetaRemove_userClearMetadata_user_meta {
  __typename: "MetaStore";
  /**
   * Name of metadata client group.
   */
  namespace: string;
  /**
   * List of clients that stored metadata in a group.
   */
  clients: (userMetaRemove_userClearMetadata_user_meta_clients | null)[];
}

export interface userMetaRemove_userClearMetadata_user {
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
  meta: (userMetaRemove_userClearMetadata_user_meta | null)[];
}

export interface userMetaRemove_userClearMetadata {
  __typename: "UserClearMeta";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: userMetaRemove_userClearMetadata_errors[];
  accountErrors: userMetaRemove_userClearMetadata_accountErrors[];
  user: userMetaRemove_userClearMetadata_user | null;
}

export interface userMetaRemove {
  /**
   * Clear metadata for user.
   */
  userClearMetadata: userMetaRemove_userClearMetadata | null;
}

export interface userMetaRemoveVariables {
  id: string;
  input: MetaPath;
}
