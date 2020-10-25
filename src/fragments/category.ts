import { gql } from "@apollo/client";

export const CATEGORY_BASIC_DETAILS_FRAGMENT = gql`
  fragment BasicCategoryDetails on Category {
    id
    name
    slug
    level
    translation(languageCode: $lang) {
      id
      name
    }
  }
`;
