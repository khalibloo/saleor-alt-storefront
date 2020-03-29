import { PRODUCT_CARD_FRAGMENT } from "@/fragments/product";
import { gql } from "apollo-boost";

export const CATEGORIES_PRODUCTS_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query CategoriesProducts_Query(
    $categoryID: ID
    $categoryList: [ID]
    $sortBy: ProductOrder
    $attributes: [AttributeInput]
    $priceGte: Float
    $priceLte: Float
    $prodsPerPage: Int!
    $cursor: String
  ) {
    minPrice: products(
      filter: {
        categories: $categoryList
        stockAvailability: IN_STOCK
        isPublished: true
      }
      first: 1
      sortBy: { field: PRICE, direction: ASC }
    ) {
      edges {
        node {
          id
          pricing {
            priceRange {
              start {
                gross {
                  currency
                  amount
                }
              }
            }
          }
        }
      }
    }
    maxPrice: products(
      filter: {
        categories: $categoryList
        stockAvailability: IN_STOCK
        isPublished: true
      }
      first: 1
      sortBy: { field: PRICE, direction: DESC }
    ) {
      edges {
        node {
          id
          pricing {
            priceRange {
              start {
                gross {
                  currency
                  amount
                }
              }
            }
          }
        }
      }
    }
    attributes: attributes(
      filter: { inCategory: $categoryID, filterableInStorefront: true }
      first: 100
    ) {
      edges {
        node {
          id
          name
          slug
          values {
            id
            name
            slug
          }
        }
      }
    }
    products(
      filter: {
        categories: $categoryList
        stockAvailability: IN_STOCK
        isPublished: true
        attributes: $attributes
        price: { gte: $priceGte, lte: $priceLte }
      }
      sortBy: $sortBy
      first: $prodsPerPage
      after: $cursor
    ) {
      edges {
        cursor
        node {
          ...ProductCard
        }
      }
    }
  }
`;
