import { CATEGORY_BASIC_DETAILS_FRAGMENT } from "@/fragments/category";
import { PRODUCT_CARD_FRAGMENT } from "@/fragments/product";
import { gql } from "@apollo/client";

export const FEATURED_CATEGORY_PRODUCTS_QUERY = gql`
  ${CATEGORY_BASIC_DETAILS_FRAGMENT}
  ${PRODUCT_CARD_FRAGMENT}
  query featuredCategoryProducts($slug: String!, $first: Int!) {
    category(slug: $slug) {
      ...BasicCategoryDetails
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
