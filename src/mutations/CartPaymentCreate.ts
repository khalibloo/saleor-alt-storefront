import { gql } from "@apollo/client";
import { CHECKOUT_DETAILS_FRAGMENT } from "@/fragments/checkout";

export const CART_PAYMENT_CREATE_MUTATION = gql`
  ${CHECKOUT_DETAILS_FRAGMENT}
  mutation CartPaymentCreateMutation(
    $checkoutId: ID!
    $paymentDetails: PaymentInput!
  ) {
    checkoutPaymentCreate(checkoutId: $checkoutId, input: $paymentDetails) {
      paymentErrors {
        code
        field
        message
      }
      payment {
        id
        chargeStatus
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
