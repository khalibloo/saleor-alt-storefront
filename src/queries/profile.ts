import { gql } from "apollo-boost";
import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { ADDRESS_DETAILS_FRAGMENT } from "@/fragments/address";

export const PROFILE_PAGE_QUERY = gql`
  ${USER_DETAILS_FRAGMENT}
  ${ADDRESS_DETAILS_FRAGMENT}
  query profileQuery {
    me {
      ...UserDetails
      addresses {
        ...AddressDetails
      }
    }
  }
`;
