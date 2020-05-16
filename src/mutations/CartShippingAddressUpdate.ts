import { gql } from "apollo-boost";
import { CHECKOUT_DETAILS_FRAGMENT } from "@/fragments/checkout";

export const CART_SHIPPING_ADDRESS_UPDATE_MUTATION = gql`
  ${CHECKOUT_DETAILS_FRAGMENT}
  mutation CartShippingAddressMutation(
    $checkoutId: ID!
    $address: AddressInput!
  ) {
    checkoutShippingAddressUpdate(
      checkoutId: $checkoutId
      shippingAddress: $address
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
