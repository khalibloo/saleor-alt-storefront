import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { gql } from "@apollo/client";

export const TOKEN_VERIFY_MUTATION = gql`
  ${USER_DETAILS_FRAGMENT}
  mutation TokenVerifyMutation($token: String!) {
    tokenVerify(token: $token) {
      isValid
      payload
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
