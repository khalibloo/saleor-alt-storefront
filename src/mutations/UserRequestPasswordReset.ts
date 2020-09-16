import { gql } from "@apollo/client";

export const USER_REQUEST_PASSWORD_RESET_MUTATION = gql`
  mutation UserRequestPasswordResetMutation(
    $email: String!
    $redirectUrl: String!
  ) {
    requestPasswordReset(email: $email, redirectUrl: $redirectUrl) {
      accountErrors {
        code
        field
        message
      }
    }
  }
`;
