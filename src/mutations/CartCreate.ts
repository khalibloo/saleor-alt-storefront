import { gql } from "@apollo/client";
import { CHECKOUT_PRICING_FRAGMENT } from "@/fragments/checkout";

export const CART_CREATE_MUTATION = gql`
  ${CHECKOUT_PRICING_FRAGMENT}
  mutation CartCreateMutation($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
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
