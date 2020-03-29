import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { gql } from "apollo-boost";

export const TOKEN_VERIFY_MUTATION = gql`
  ${USER_DETAILS_FRAGMENT}
  mutation TokenVerifyMutation($token: String!) {
    tokenVerify(token: $token) {
      payload
      user {
        ...UserDetails
      }
    }
  }
`;
