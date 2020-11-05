import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { gql } from "@apollo/client";

export const TOKEN_REFRESH_MUTATION = gql`
  ${USER_DETAILS_FRAGMENT}
  mutation TokenRefreshMutation($refreshToken: String, $csrfToken: String) {
    tokenRefresh(refreshToken: $refreshToken, csrfToken: $csrfToken) {
      token
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
