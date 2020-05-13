import { gql } from "apollo-boost";
import { CHECKOUT_DETAILS_FRAGMENT } from "@/fragments/checkout";

export const CART_BADGE_QUERY = gql`
  query cartBadgeQuery {
    me {
      id
      checkout {
        id
        lines {
          id
          quantity
        }
      }
    }
  }
`;

export const CART_PAGE_QUERY = gql`
  ${CHECKOUT_DETAILS_FRAGMENT}
  query cartQuery {
    me {
      id
      checkout {
        id
        token
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
        lines {
          id
          variant {
            id
            name
            sku
            stocks {
              stockQuantity
            }
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
    }
  }
`;
