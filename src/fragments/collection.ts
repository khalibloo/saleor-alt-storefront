import { gql } from "@apollo/client";

export const COLLECTION_BASIC_DETAILS_FRAGMENT = gql`
  fragment BasicCollectionDetails on Collection {
    id
    name
    slug
    translation(languageCode: $lang) {
      id
      name
    }
  }
`;
