import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { ADDRESS_DETAILS_FRAGMENT } from "@/fragments/address";
import { gql } from "apollo-boost";

export const USER_NAME_UPDATE_MUTATION = gql`
  ${USER_DETAILS_FRAGMENT}
  ${ADDRESS_DETAILS_FRAGMENT}
  mutation UserNameUpdateMutation($input: AccountInput!) {
    accountUpdate(input: $input) {
      errors {
        field
        message
      }
      accountErrors {
        code
        field
        message
      }
      user {
        ...UserDetails
        addresses {
          ...AddressDetails
        }
      }
    }
  }
`;
