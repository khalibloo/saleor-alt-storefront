/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: cartBadgeQuery
// ====================================================

export interface cartBadgeQuery_me_checkout_lines {
  __typename: "CheckoutLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
}

export interface cartBadgeQuery_me_checkout {
  __typename: "Checkout";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * A list of checkout lines, each containing information about an item in the checkout.
   */
  lines: (cartBadgeQuery_me_checkout_lines | null)[] | null;
}

export interface cartBadgeQuery_me {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Returns the last open checkout of this user.
   */
  checkout: cartBadgeQuery_me_checkout | null;
}

export interface cartBadgeQuery {
  /**
   * Return the currently authenticated user.
   */
  me: cartBadgeQuery_me | null;
}
