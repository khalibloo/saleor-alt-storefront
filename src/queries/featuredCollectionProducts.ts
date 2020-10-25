import { COLLECTION_BASIC_DETAILS_FRAGMENT } from "@/fragments/collection";
import { PRODUCT_CARD_FRAGMENT } from "@/fragments/product";
import { gql } from "@apollo/client";

export const FEATURED_COLLECTION_PRODUCTS_QUERY = gql`
  ${COLLECTION_BASIC_DETAILS_FRAGMENT}
  ${PRODUCT_CARD_FRAGMENT}
  query featuredCollectionProducts(
    $slug: String!
    $first: Int!
    $lang: LanguageCodeEnum!
  ) {
    collection(slug: $slug) {
      ...BasicCollectionDetails
      products(first: $first) {
        edges {
          node {
            ...ProductCard
          }
        }
      }
    }
  }
`;
