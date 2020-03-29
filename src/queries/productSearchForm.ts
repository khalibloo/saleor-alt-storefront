import gql from "graphql-tag";

export const PRODUCT_SEARCH_FORM_QUERY = gql`
  query ProductSearchFormQuery($query: String) {
    products(filter: { search: $query }, first: 20) {
      edges {
        node {
          id
          name
          category {
            id
            name
          }
        }
      }
    }
  }
`;
