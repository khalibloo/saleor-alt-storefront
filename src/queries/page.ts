import { gql } from "@apollo/client";

export const PAGE_QUERY = gql`
  query pageQuery($slug: String!, $lang: LanguageCodeEnum!) {
    page(slug: $slug) {
      id
      title
      contentJson
      seoTitle
      seoDescription
      translation(languageCode: $lang) {
        id
        title
        contentJson
        seoTitle
        seoDescription
      }
    }
  }
`;
