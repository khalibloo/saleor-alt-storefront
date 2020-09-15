import { gql } from "@apollo/client";
import { CHECKOUT_DETAILS_FRAGMENT } from "@/fragments/checkout";

export const CART_LINES_ADD_MUTATION = gql`
  ${CHECKOUT_DETAILS_FRAGMENT}
  mutation CartLinesAddMutation(
    $checkoutId: ID!
    $checkoutLines: [CheckoutLineInput]!
  ) {
    checkoutLinesAdd(checkoutId: $checkoutId, lines: $checkoutLines) {
      checkoutErrors {
        field
        message
        code
      }
      checkout {
        ...CheckoutDetails
        lines {
          id
          quantity
        }
      }
    }
  }
`;
