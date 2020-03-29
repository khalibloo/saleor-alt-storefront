/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: viewSelfQuery
// ====================================================

export interface viewSelfQuery_me_meta_clients_metadata {
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

export interface viewSelfQuery_me_meta_clients {
  __typename: "MetaClientStore";
  /**
   * Metadata client's name.
   */
  name: string;
  /**
   * Metadata stored for a client.
   */
  metadata: (viewSelfQuery_me_meta_clients_metadata | null)[];
}

export interface viewSelfQuery_me_meta {
  __typename: "MetaStore";
  /**
   * Name of metadata client group.
   */
  namespace: string;
  /**
   * List of clients that stored metadata in a group.
   */
  clients: (viewSelfQuery_me_meta_clients | null)[];
}

export interface viewSelfQuery_me {
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
  meta: (viewSelfQuery_me_meta | null)[];
}

export interface viewSelfQuery {
  /**
   * Return the currently authenticated user.
   */
  me: viewSelfQuery_me | null;
}
