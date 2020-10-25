import { CATEGORY_BASIC_DETAILS_FRAGMENT } from "@/fragments/category";
import { COLLECTION_BASIC_DETAILS_FRAGMENT } from "@/fragments/collection";
import { gql } from "@apollo/client";

export const HOME_BANNER_SECTION_QUERY = gql`
  ${CATEGORY_BASIC_DETAILS_FRAGMENT}
  ${COLLECTION_BASIC_DETAILS_FRAGMENT}
  query homeBannerSectionQuery($menuName: String!, $lang: LanguageCodeEnum!) {
    menu(name: $menuName) {
      id
      name
      items {
        id
        name
        category {
          ...BasicCategoryDetails
          backgroundImage {
            url
            alt
          }
        }
        collection {
          ...BasicCollectionDetails
          backgroundImage {
            url
            alt
          }
        }
        url
      }
    }
  }
`;
