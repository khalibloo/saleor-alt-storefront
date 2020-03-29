/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: profileQuery
// ====================================================

export interface profileQuery_me_meta_clients_metadata {
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

export interface profileQuery_me_meta_clients {
  __typename: "MetaClientStore";
  /**
   * Metadata client's name.
   */
  name: string;
  /**
   * Metadata stored for a client.
   */
  metadata: (profileQuery_me_meta_clients_metadata | null)[];
}

export interface profileQuery_me_meta {
  __typename: "MetaStore";
  /**
   * Name of metadata client group.
   */
  namespace: string;
  /**
   * List of clients that stored metadata in a group.
   */
  clients: (profileQuery_me_meta_clients | null)[];
}

export interface profileQuery_me {
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
  meta: (profileQuery_me_meta | null)[];
}

export interface profileQuery {
  /**
   * Return the currently authenticated user.
   */
  me: profileQuery_me | null;
}
