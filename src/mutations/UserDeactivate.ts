import { gql } from "apollo-boost";

export const USER_DEACTIVATE_MUTATION = gql`
  mutation UserDeactivateMutation($token: String!) {
    accountDelete(token: $token) {
      accountErrors {
        code
        field
        message
      }
    }
  }
`;
