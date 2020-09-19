import { gql } from "@apollo/client";
import { CHECKOUT_DETAILS_FRAGMENT } from "@/fragments/checkout";

export const CART_VOUCHER_REMOVE_MUTATION = gql`
  ${CHECKOUT_DETAILS_FRAGMENT}
  mutation CartVoucherRemoveMutation($checkoutId: ID!, $voucherCode: String!) {
    checkoutRemovePromoCode(checkoutId: $checkoutId, promoCode: $voucherCode) {
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
