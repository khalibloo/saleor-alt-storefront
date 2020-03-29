import { PRODUCT_CARD_FRAGMENT } from "@/fragments/product";
import { gql } from "apollo-boost";

export const COLLECTION_DETAIL_PAGE_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query collectionDetailQuery(
    $collection: ID!
    $collectionList: [ID]!
    $productCount: Int!
  ) {
    products(
      filter: {
        collections: $collectionList
        stockAvailability: IN_STOCK
        isPublished: true
      }
      first: $productCount
    ) {
      edges {
        node {
          ...ProductCard
        }
      }
    }
    collection(id: $collection) {
      id
      name
      backgroundImage {
        url
        alt
      }
    }
  }
`;
