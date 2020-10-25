import { gql } from "@apollo/client";
import { COLLECTION_BASIC_DETAILS_FRAGMENT } from "@/fragments/collection";

export const COLLECTION_DETAIL_PAGE_QUERY = gql`
  ${COLLECTION_BASIC_DETAILS_FRAGMENT}
  query collectionDetailQuery($collection: ID!, $lang: LanguageCodeEnum!) {
    collection(id: $collection) {
      ...BasicCollectionDetails
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
