import { PRODUCT_CARD_FRAGMENT } from "@/fragments/product";
import { gql } from "apollo-boost";

export const SEARCH_PAGE_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query searchQuery(
    $query: String
    $minPrice: Float
    $maxPrice: Float
    $attributes: [AttributeInput]
    $sort: ProductOrder
    $count: Int
    $after: String
  ) {
    products(
      filter: {
        search: $query
        stockAvailability: IN_STOCK
        isPublished: true
        minimalPrice: { gte: $minPrice, lte: $maxPrice }
        attributes: $attributes
      }
      first: $count
      after: $after
      sortBy: $sort
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
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
