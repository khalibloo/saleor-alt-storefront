import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { gql } from "apollo-boost";

export const USER_META_UPDATE_MUTATION = gql`
  ${USER_DETAILS_FRAGMENT}
  mutation userMetaUpdate($input: MetaInput!) {
    accountUpdateMeta(input: $input) {
      errors {
        field
        message
      }
      accountErrors {
        field
        message
        code
      }
      user {
        ...UserDetails
      }
    }
  }
`;
