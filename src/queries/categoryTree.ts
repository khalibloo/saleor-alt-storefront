import { gql } from "@apollo/client";
import { CATEGORY_BASIC_DETAILS_FRAGMENT } from "@/fragments/category";

export const CATEGORY_TREE_QUERY = gql`
  ${CATEGORY_BASIC_DETAILS_FRAGMENT}
  query categoryTreeQuery($lang: LanguageCodeEnum!) {
    categories(level: 0, first: 100) {
      edges {
        node {
          ...BasicCategoryDetails
          children(first: 100) {
            edges {
              node {
                ...BasicCategoryDetails
                children(first: 100) {
                  edges {
                    node {
                      ...BasicCategoryDetails
                      children(first: 100) {
                        edges {
                          node {
                            ...BasicCategoryDetails
                            children(first: 100) {
                              edges {
                                node {
                                  ...BasicCategoryDetails
                                  children(first: 100) {
                                    edges {
                                      node {
                                        ...BasicCategoryDetails
                                        children(first: 100) {
                                          edges {
                                            node {
                                              ...BasicCategoryDetails
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
