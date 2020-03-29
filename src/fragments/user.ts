import { gql } from "apollo-boost";

export const USER_DETAILS_FRAGMENT = gql`
  fragment UserDetails on User {
    id
    email
    firstName
    lastName
    isStaff
    meta {
      namespace
      clients {
        name
        metadata {
          key
          value
        }
      }
    }
  }
`;
