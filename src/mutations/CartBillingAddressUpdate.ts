import { gql } from "@apollo/client";
import { CHECKOUT_DETAILS_FRAGMENT } from "@/fragments/checkout";

export const CART_BILLING_ADDRESS_UPDATE_MUTATION = gql`
  ${CHECKOUT_DETAILS_FRAGMENT}
  mutation CartBillingAddressUpdateMutation(
    $checkoutId: ID!
    $address: AddressInput!
  ) {
    checkoutBillingAddressUpdate(
      checkoutId: $checkoutId
      billingAddress: $address
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
