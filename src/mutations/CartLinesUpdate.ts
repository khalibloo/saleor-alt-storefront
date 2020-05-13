import { gql } from "apollo-boost";
import { CHECKOUT_DETAILS_FRAGMENT } from "@/fragments/checkout";

// only updates the lines included in the list
export const CART_LINES_UPDATE_MUTATION = gql`
  ${CHECKOUT_DETAILS_FRAGMENT}
  mutation CartLinesUpdateMutation(
    $checkoutId: ID!
    $checkoutLines: [CheckoutLineInput]!
  ) {
    checkoutLinesUpdate(checkoutId: $checkoutId, lines: $checkoutLines) {
      errors {
        field
        message
      }
      checkoutErrors {
        code
        field
        message
      }
      checkout {
        id
        token
        ...CheckoutPricingDetails
        lines {
          id
          quantity
        }
      }
    }
  }
`;
