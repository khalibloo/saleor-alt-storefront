import { PRODUCT_CARD_FRAGMENT } from "@/fragments/product";
import { gql } from "@apollo/client";

export const PRODUCT_DETAIL_PAGE_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query productDetailQuery($productID: ID!) {
    product(id: $productID) {
      id
      name
      slug
      descriptionJson
      images {
        id
        url
        alt
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
      isAvailable
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
      variants {
        id
        sku
        name
        images {
          id
          url
          alt
        }
        pricing {
          price {
            gross {
              amount
              currency
            }
          }
        }
        attributes {
          values {
            id
            name
          }
          attribute {
            id
            name
            values {
              id
              name
            }
          }
        }
        quantityAvailable
      }
      category {
        id
        name
        products(first: 10) {
          edges {
            node {
              ...ProductCard
            }
          }
        }
      }
    }
  }
`;
