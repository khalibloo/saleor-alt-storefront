import { gql } from "apollo-boost";

export const CATEGORY_BASIC_DETAILS_FRAGMENT = gql`
  fragment BasicCategoryDetails on Category {
    id
    name
    slug
    level
  }
`;
