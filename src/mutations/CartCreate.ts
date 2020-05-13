import { gql } from "apollo-boost";
import { CHECKOUT_DETAILS_FRAGMENT } from "@/fragments/checkout";

export const CART_CREATE_MUTATION = gql`
  ${CHECKOUT_DETAILS_FRAGMENT}
  mutation CartCreateMutation($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
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
