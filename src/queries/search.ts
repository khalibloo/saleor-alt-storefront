import { PRODUCT_CARD_FRAGMENT } from "@/fragments/product";
import { gql } from "apollo-boost";

export const SEARCH_PAGE_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query searchQuery($query: String, $count: Int) {
    products(
      filter: { search: $query, stockAvailability: IN_STOCK, isPublished: true }
      first: $count
    ) {
      totalCount
      edges {
        node {
          ...ProductCard
          category {
            id
            name
            ancestors(first: 5) {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
