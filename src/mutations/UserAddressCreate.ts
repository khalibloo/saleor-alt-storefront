import { gql } from "@apollo/client";
import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { ADDRESS_DETAILS_FRAGMENT } from "@/fragments/address";

export const USER_ADDRESS_CREATE_MUTATION = gql`
  ${USER_DETAILS_FRAGMENT}
  ${ADDRESS_DETAILS_FRAGMENT}
  mutation UserAddressCreateMutation($address: AddressInput!) {
    accountAddressCreate(input: $address) {
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
