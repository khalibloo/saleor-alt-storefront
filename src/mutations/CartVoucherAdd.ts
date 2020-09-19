import { gql } from "@apollo/client";
import { CHECKOUT_DETAILS_FRAGMENT } from "@/fragments/checkout";

export const CART_VOUCHER_ADD_MUTATION = gql`
  ${CHECKOUT_DETAILS_FRAGMENT}
  mutation CartVoucherAddMutation($checkoutId: ID!, $voucherCode: String!) {
    checkoutAddPromoCode(checkoutId: $checkoutId, promoCode: $voucherCode) {
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
