import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { gql } from "apollo-boost";

export const USER_META_REMOVE_MUTATION = gql`
  ${USER_DETAILS_FRAGMENT}
  mutation userMetaRemove($id: ID!, $input: MetaPath!) {
    userClearMetadata(id: $id, input: $input) {
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
