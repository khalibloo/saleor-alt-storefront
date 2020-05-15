import { gql } from "apollo-boost";

export const USER_REQUEST_DEACTIVATION_MUTATION = gql`
  mutation UserRequestDeactivationMutation($redirectUrl: String!) {
    accountRequestDeletion(redirectUrl: $redirectUrl) {
      accountErrors {
        code
        field
        message
      }
    }
  }
`;
