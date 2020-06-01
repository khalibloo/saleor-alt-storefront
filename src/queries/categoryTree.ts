import { gql } from "apollo-boost";
import { CATEGORY_BASIC_DETAILS_FRAGMENT } from "@/fragments/category";

export const CATEGORY_TREE_QUERY = gql`
  ${CATEGORY_BASIC_DETAILS_FRAGMENT}
  query categoryTreeQuery {
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
