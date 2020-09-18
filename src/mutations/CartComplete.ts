import { gql } from "@apollo/client";

export const CART_COMPLETE_MUTATION = gql`
  mutation CartCompleteMutation(
    $checkoutId: ID!
    $redirectUrl: String!
    $storeSource: Boolean!
  ) {
    checkoutComplete(
      checkoutId: $checkoutId
      redirectUrl: $redirectUrl
      storeSource: $storeSource
    ) {
      checkoutErrors {
        code
        field
        message
      }
      order {
        id
        status
        number
      }
      confirmationNeeded
    }
  }
`;
