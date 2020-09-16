import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { gql } from "@apollo/client";

export const USER_CONFIRM_PASSWORD_RESET_MUTATION = gql`
  ${USER_DETAILS_FRAGMENT}
  mutation UserConfirmPasswordResetMutation(
    $email: String!
    $password: String!
    $token: String!
  ) {
    setPassword(email: $email, password: $password, token: $token) {
      accountErrors {
        code
        field
        message
      }
      token
      user {
        ...UserDetails
      }
    }
  }
`;
