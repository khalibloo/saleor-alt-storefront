import { gql } from "@apollo/client";

export const USER_DETAILS_FRAGMENT = gql`
  fragment UserDetails on User {
    id
    email
    firstName
    lastName
    isStaff
    metadata {
      key
      value
    }
  }
`;
