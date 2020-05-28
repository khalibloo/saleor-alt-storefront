import { gql } from "apollo-boost";

export const COLLECTIONS_QUERY = gql`
  query collectionsQuery {
    collections(first: 100) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;
