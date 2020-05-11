import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { gql } from "apollo-boost";

export const USER_ADDRESS_CREATE_MUTATION = gql`
  ${USER_DETAILS_FRAGMENT}
  mutation accountAddressCreateMutation($address: AddressInput!) {
    accountAddressCreate(input: $address) {
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
