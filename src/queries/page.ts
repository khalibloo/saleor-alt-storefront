import { gql } from "@apollo/client";

export const PAGE_QUERY = gql`
  query pageQuery($slug: String!) {
    page(slug: $slug) {
      id
      title
      contentJson
    }
  }
`;
