/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * An enumeration.
 */
export enum AccountErrorCode {
  ACTIVATE_OWN_ACCOUNT = "ACTIVATE_OWN_ACCOUNT",
  ACTIVATE_SUPERUSER_ACCOUNT = "ACTIVATE_SUPERUSER_ACCOUNT",
  ASSIGN_NON_STAFF_MEMBER = "ASSIGN_NON_STAFF_MEMBER",
  DEACTIVATE_OWN_ACCOUNT = "DEACTIVATE_OWN_ACCOUNT",
  DEACTIVATE_SUPERUSER_ACCOUNT = "DEACTIVATE_SUPERUSER_ACCOUNT",
  DELETE_NON_STAFF_USER = "DELETE_NON_STAFF_USER",
  DELETE_OWN_ACCOUNT = "DELETE_OWN_ACCOUNT",
  DELETE_STAFF_ACCOUNT = "DELETE_STAFF_ACCOUNT",
  DELETE_SUPERUSER_ACCOUNT = "DELETE_SUPERUSER_ACCOUNT",
  GRAPHQL_ERROR = "GRAPHQL_ERROR",
  INVALID = "INVALID",
  INVALID_PASSWORD = "INVALID_PASSWORD",
  NOT_FOUND = "NOT_FOUND",
  PASSWORD_ENTIRELY_NUMERIC = "PASSWORD_ENTIRELY_NUMERIC",
  PASSWORD_TOO_COMMON = "PASSWORD_TOO_COMMON",
  PASSWORD_TOO_SHORT = "PASSWORD_TOO_SHORT",
  PASSWORD_TOO_SIMILAR = "PASSWORD_TOO_SIMILAR",
  REQUIRED = "REQUIRED",
  UNIQUE = "UNIQUE",
}

export enum OrderDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export enum ProductOrderField {
  DATE = "DATE",
  MINIMAL_PRICE = "MINIMAL_PRICE",
  NAME = "NAME",
  PRICE = "PRICE",
  PUBLISHED = "PUBLISHED",
  TYPE = "TYPE",
}

export interface AccountRegisterInput {
  email: string;
  password: string;
  redirectUrl?: string | null;
}

export interface AttributeInput {
  slug: string;
  value?: string | null;
  values?: (string | null)[] | null;
}

export interface MetaInput {
  namespace: string;
  clientName: string;
  key: string;
  value: string;
}

export interface MetaPath {
  namespace: string;
  clientName: string;
  key: string;
}

export interface ProductOrder {
  direction: OrderDirection;
  attributeId?: string | null;
  field?: ProductOrderField | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
