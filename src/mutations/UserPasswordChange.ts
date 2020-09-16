import { gql } from "@apollo/client";
import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { ADDRESS_DETAILS_FRAGMENT } from "@/fragments/address";

export const USER_PASSWORD_CHANGE_MUTATION = gql`
  ${USER_DETAILS_FRAGMENT}
  ${ADDRESS_DETAILS_FRAGMENT}
  mutation PasswordChangeMutation(
    $newPassword: String!
    $oldPassword: String!
  ) {
    passwordChange(newPassword: $newPassword, oldPassword: $oldPassword) {
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
