import { gql } from "@apollo/client";

export const TOKEN_REFRESH_MUTATION = gql`
  mutation TokenRefreshMutation($token: String!) {
    tokenRefresh(token: $token) {
      token
      payload
    }
  }
`;
