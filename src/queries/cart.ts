import { gql } from "apollo-boost";

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
  query cartQuery {
    me {
      id
      checkout {
        id
        lines {
          id
          variant {
            id
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
