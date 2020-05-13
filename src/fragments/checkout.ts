import { gql } from "apollo-boost";

export const CHECKOUT_DETAILS_FRAGMENT = gql`
  fragment CheckoutPricingDetails on Checkout {
    shippingMethod {
      id
      name
      minimumOrderPrice {
        currency
        amount
      }
    }
    shippingPrice {
      gross {
        currency
        amount
      }
    }
    subtotalPrice {
      gross {
        currency
        amount
      }
    }
    totalPrice {
      gross {
        currency
        amount
      }
    }
  }
`;
