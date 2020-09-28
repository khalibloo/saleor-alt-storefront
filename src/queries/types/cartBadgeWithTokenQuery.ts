/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: cartBadgeWithTokenQuery
// ====================================================

export interface cartBadgeWithTokenQuery_checkout_lines {
  __typename: "CheckoutLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
}

export interface cartBadgeWithTokenQuery_checkout {
  __typename: "Checkout";
  /**
   * The ID of the object.
   */
  id: string;
  token: any;
  /**
   * A list of checkout lines, each containing information about an item in the checkout.
   */
  lines: (cartBadgeWithTokenQuery_checkout_lines | null)[] | null;
}

export interface cartBadgeWithTokenQuery {
  /**
   * Look up a checkout by token.
   */
  checkout: cartBadgeWithTokenQuery_checkout | null;
}

export interface cartBadgeWithTokenQueryVariables {
  token: any;
}
