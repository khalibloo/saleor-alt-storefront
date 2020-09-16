import { gql } from "@apollo/client";
import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { ADDRESS_DETAILS_FRAGMENT } from "@/fragments/address";

export const USER_SET_DEFAULT_ADDRESS_MUTATION = gql`
  ${USER_DETAILS_FRAGMENT}
  ${ADDRESS_DETAILS_FRAGMENT}
  mutation UserSetDefaultAddressMutation($id: ID!, $type: AddressTypeEnum!) {
    accountSetDefaultAddress(id: $id, type: $type) {
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
