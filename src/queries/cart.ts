import { gql } from "@apollo/client";
import { CHECKOUT_DETAILS_FRAGMENT } from "@/fragments/checkout";
import { ADDRESS_DETAILS_FRAGMENT } from "@/fragments/address";

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
  ${ADDRESS_DETAILS_FRAGMENT}
  query cartQuery {
    me {
      id
      addresses {
        ...AddressDetails
      }
      checkout {
        ...CheckoutDetails
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
    }
  }
`;
