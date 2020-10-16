import { gql } from "@apollo/client";

export const HOME_BANNER_SECTION_QUERY = gql`
  query homeBannerSectionQuery($menuName: String!) {
    menu(name: $menuName) {
      id
      name
      items {
        id
        name
        category {
          id
          name
          slug
          backgroundImage {
            url
            alt
          }
        }
        collection {
          id
          name
          slug
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
