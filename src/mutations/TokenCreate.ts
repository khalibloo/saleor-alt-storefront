import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { gql } from "@apollo/client";

export const TOKEN_CREATE_MUTATION = gql`
  ${USER_DETAILS_FRAGMENT}
  mutation TokenCreateMutation($email: String!, $password: String!) {
    tokenCreate(email: $email, password: $password) {
      token
      refreshToken
      csrfToken
      accountErrors {
        code
        field
        message
      }
      user {
        ...UserDetails
      }
    }
  }
`;
