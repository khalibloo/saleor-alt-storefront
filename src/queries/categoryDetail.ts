import { gql } from "@apollo/client";
import { CATEGORY_BASIC_DETAILS_FRAGMENT } from "@/fragments/category";

export const CATEGORY_DETAIL_PAGE_QUERY = gql`
  ${CATEGORY_BASIC_DETAILS_FRAGMENT}
  query categoryDetailQuery($category: ID!, $lang: LanguageCodeEnum!) {
    category(id: $category) {
      ...BasicCategoryDetails
      seoTitle
      seoDescription
      backgroundImage {
        url
        alt
      }
      translation(languageCode: $lang) {
        seoTitle
        seoDescription
      }
    }
  }
`;
