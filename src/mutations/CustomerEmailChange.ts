import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { gql } from "apollo-boost";

export const CUSTOMER_EMAIL_CHANGE_MUTATION = gql`
  ${USER_DETAILS_FRAGMENT}
  mutation requestEmailChange(
    $newEmail: String!
    $password: String!
    $redirectUrl: String!
  ) {
    requestEmailChange(
      newEmail: $newEmail
      password: $password
      redirectUrl: $redirectUrl
    ) {
      errors {
        field
        message
      }
      user {
        ...UserDetails
      }
    }
  }
`;
