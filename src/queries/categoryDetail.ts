import { PRODUCT_CARD_FRAGMENT } from "@/fragments/product";
import { gql } from "apollo-boost";

export const CATEGORY_DETAIL_PAGE_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query categoryDetailQuery(
    $category: ID!
    $categoryList: [ID]!
    $productCount: Int!
  ) {
    products(
      filter: {
        categories: $categoryList
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
    category(id: $category) {
      id
      name
      backgroundImage {
        url
        alt
      }
      level
    }
  }
`;
