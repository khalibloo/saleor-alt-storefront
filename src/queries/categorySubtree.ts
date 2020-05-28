import { gql } from "apollo-boost";
import { CATEGORY_BASIC_DETAILS_FRAGMENT } from "@/fragments/category";

export const CATEGORY_SUBTREE_QUERY = gql`
  ${CATEGORY_BASIC_DETAILS_FRAGMENT}
  query categorySubtreeQuery($categoryId: ID!) {
    category(id: $categoryId) {
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
`;
