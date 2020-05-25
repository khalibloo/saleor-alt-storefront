import { gql } from "apollo-boost";

export const PRODUCT_CARD_FRAGMENT = gql`
  fragment ProductCard on Product {
    id
    name
    slug
    thumbnail {
      url
      alt
    }
    images {
      id
      url
      alt
    }
    collections {
      id
      name
    }
    category {
      id
      name
    }
    pricing {
      onSale
      discount {
        currency
        gross {
          currency
          amount
        }
      }
      priceRange {
        start {
          gross {
            currency
            amount
          }
        }
        stop {
          gross {
            currency
            amount
          }
        }
      }
      priceRangeUndiscounted {
        start {
          gross {
            currency
            amount
          }
        }
        stop {
          gross {
            currency
            amount
          }
        }
      }
    }
  }
`;
