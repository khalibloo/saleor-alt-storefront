import { PRODUCT_CARD_FRAGMENT } from "@/fragments/product";
import { gql } from "apollo-boost";

export const HOME_PAGE_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query homePageQuery {
    shop {
      name
      homepageCollection {
        id
        name
        backgroundImage {
          url
          alt
        }
        products(first: 12) {
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
