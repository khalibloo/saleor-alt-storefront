import { gql } from "@apollo/client";

export const USER_CONFIRM_DEACTIVATION_MUTATION = gql`
  mutation UserConfirmDeactivationMutation($token: String!) {
    accountDelete(token: $token) {
      accountErrors {
        code
        field
        message
      }
    }
  }
`;
