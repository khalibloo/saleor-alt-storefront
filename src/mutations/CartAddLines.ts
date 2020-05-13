import { gql } from "apollo-boost";
import { CHECKOUT_DETAILS_FRAGMENT } from "@/fragments/checkout";

export const CART_LINES_ADD_MUTATION = gql`
  ${CHECKOUT_DETAILS_FRAGMENT}
  mutation CartLinesAddMutation(
    $checkoutId: ID!
    $checkoutLines: [CheckoutLineInput]!
  ) {
    checkoutLinesAdd(checkoutId: $checkoutId, lines: $checkoutLines) {
      errors {
        field
        message
      }
      checkoutErrors {
        field
        message
        code
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
