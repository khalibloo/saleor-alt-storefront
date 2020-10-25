import { gql } from "@apollo/client";
import { CATEGORY_BASIC_DETAILS_FRAGMENT } from "./category";
import { COLLECTION_BASIC_DETAILS_FRAGMENT } from "./collection";

export const PRODUCT_CARD_FRAGMENT = gql`
  ${CATEGORY_BASIC_DETAILS_FRAGMENT}
  ${COLLECTION_BASIC_DETAILS_FRAGMENT}
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
      ...BasicCollectionDetails
    }
    category {
      ...BasicCategoryDetails
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
    translation(languageCode: $lang) {
      id
      name
    }
  }
`;
