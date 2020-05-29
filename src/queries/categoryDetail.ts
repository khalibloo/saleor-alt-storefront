import { gql } from "apollo-boost";
import { CATEGORY_BASIC_DETAILS_FRAGMENT } from "@/fragments/category";

export const CATEGORY_DETAIL_PAGE_QUERY = gql`
  ${CATEGORY_BASIC_DETAILS_FRAGMENT}
  query categoryDetailQuery($category: ID!) {
    category(id: $category) {
      ...BasicCategoryDetails
      backgroundImage {
        url
        alt
      }
    }
  }
`;
