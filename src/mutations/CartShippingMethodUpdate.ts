import { gql } from "apollo-boost";
import { CHECKOUT_DETAILS_FRAGMENT } from "@/fragments/checkout";

export const CART_SHIPPING_METHOD_UPDATE_MUTATION = gql`
  ${CHECKOUT_DETAILS_FRAGMENT}
  mutation CartShippingMethodUpdateMutation(
    $checkoutId: ID!
    $shippingMethodId: ID!
  ) {
    checkoutShippingMethodUpdate(
      checkoutId: $checkoutId
      shippingMethodId: $shippingMethodId
    ) {
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
