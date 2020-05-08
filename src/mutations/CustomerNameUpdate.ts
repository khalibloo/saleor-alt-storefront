import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { gql } from "apollo-boost";

export const CUSTOMER_NAME_UPDATE_MUTATION = gql`
  ${USER_DETAILS_FRAGMENT}
  mutation CustomerNameUpdateMutation($input: AccountInput!) {
    accountUpdate(input: $input) {
      errors {
        field
        message
      }
      user {
        ...UserDetails
      }
    }
  }
`;
