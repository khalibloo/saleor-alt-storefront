import { gql } from "@apollo/client";
import {
  CHECKOUT_DETAILS_FRAGMENT,
  CHECKOUT_LINES_DETAILS_FRAGMENT,
} from "@/fragments/checkout";
import { ADDRESS_DETAILS_FRAGMENT } from "@/fragments/address";

export const CART_BADGE_QUERY = gql`
  query cartBadgeQuery {
    me {
      id
      checkout {
        id
        token
        lines {
          id
          quantity
        }
      }
    }
  }
`;

export const CART_BADGE_WITH_TOKEN_QUERY = gql`
  query cartBadgeWithTokenQuery($token: UUID!) {
    checkout(token: $token) {
      id
      token
      lines {
        id
        quantity
      }
    }
  }
`;

export const CART_PAGE_QUERY = gql`
  ${CHECKOUT_DETAILS_FRAGMENT}
  ${CHECKOUT_LINES_DETAILS_FRAGMENT}
  ${ADDRESS_DETAILS_FRAGMENT}
  query cartQuery {
    me {
      id
      addresses {
        ...AddressDetails
      }
      checkout {
        ...CheckoutDetails
        ...CheckoutLinesDetails
      }
    }
  }
`;

export const CART_PAGE_WITH_TOKEN_QUERY = gql`
  ${CHECKOUT_DETAILS_FRAGMENT}
  ${CHECKOUT_LINES_DETAILS_FRAGMENT}
  ${ADDRESS_DETAILS_FRAGMENT}
  query cartWithTokenQuery($token: UUID!) {
    checkout(token: $token) {
      ...CheckoutDetails
      ...CheckoutLinesDetails
    }
  }
`;
