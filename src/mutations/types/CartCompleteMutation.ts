/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CheckoutErrorCode, OrderStatus } from "./../../globalTypes";

// ====================================================
// GraphQL mutation operation: CartCompleteMutation
// ====================================================

export interface CartCompleteMutation_checkoutComplete_checkoutErrors {
  __typename: "CheckoutError";
  /**
   * The error code.
   */
  code: CheckoutErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface CartCompleteMutation_checkoutComplete_order {
  __typename: "Order";
  /**
   * The ID of the object.
   */
  id: string;
  status: OrderStatus;
  /**
   * User-friendly number of an order.
   */
  number: string | null;
}

export interface CartCompleteMutation_checkoutComplete {
  __typename: "CheckoutComplete";
  checkoutErrors: CartCompleteMutation_checkoutComplete_checkoutErrors[];
  /**
   * Placed order.
   */
  order: CartCompleteMutation_checkoutComplete_order | null;
  /**
   * Set to true if payment needs to be confirmed before checkout is complete.
   */
  confirmationNeeded: boolean;
}

export interface CartCompleteMutation {
  /**
   * Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation.
   */
  checkoutComplete: CartCompleteMutation_checkoutComplete | null;
}

export interface CartCompleteMutationVariables {
  checkoutId: string;
  redirectUrl: string;
  storeSource: boolean;
}
