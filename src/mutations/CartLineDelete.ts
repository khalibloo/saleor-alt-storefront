import { gql } from "@apollo/client";
import { CHECKOUT_DETAILS_FRAGMENT } from "@/fragments/checkout";

export const CART_LINE_DELETE_MUTATION = gql`
  ${CHECKOUT_DETAILS_FRAGMENT}
  mutation CartLineDeleteMutation($checkoutId: ID!, $checkoutLineId: ID!) {
    checkoutLineDelete(checkoutId: $checkoutId, lineId: $checkoutLineId) {
      checkoutErrors {
        code
        field
        message
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
