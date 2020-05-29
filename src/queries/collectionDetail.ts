import { gql } from "apollo-boost";

export const COLLECTION_DETAIL_PAGE_QUERY = gql`
  query collectionDetailQuery($collection: ID!) {
    collection(id: $collection) {
      id
      name
      slug
      backgroundImage {
        url
        alt
      }
    }
  }
`;
