import { gql } from "@apollo/client";
import { ADDRESS_DETAILS_FRAGMENT } from "./address";

export const CHECKOUT_PRICING_FRAGMENT = gql`
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
    discount {
      currency
      amount
    }
    voucherCode
  }
`;

export const CHECKOUT_DETAILS_FRAGMENT = gql`
  ${CHECKOUT_PRICING_FRAGMENT}
  ${ADDRESS_DETAILS_FRAGMENT}
  fragment CheckoutDetails on Checkout {
    id
    token
    email
    ...CheckoutPricingDetails
    availableShippingMethods {
      id
      name
      price {
        currency
        amount
      }
    }
    shippingMethod {
      id
      name
    }
    shippingAddress {
      ...AddressDetails
    }
    billingAddress {
      ...AddressDetails
    }
    availablePaymentGateways {
      id
      name
      config {
        field
        value
      }
    }
  }
`;

export const CHECKOUT_LINES_DETAILS_FRAGMENT = gql`
  fragment CheckoutLinesDetails on Checkout {
    lines {
      id
      variant {
        id
        name
        sku
        quantityAvailable
        images {
          id
          url
          alt
        }
        attributes {
          attribute {
            id
            name
          }
          values {
            id
            name
          }
        }
        pricing {
          price {
            gross {
              currency
              amount
            }
          }
        }
        product {
          id
          name
          descriptionJson
          thumbnail {
            url
            alt
          }
        }
      }
      quantity
      totalPrice {
        gross {
          amount
          currency
        }
      }
    }
  }
`;
