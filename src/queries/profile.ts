import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { gql } from "apollo-boost";

export const PROFILE_PAGE_QUERY = gql`
  ${USER_DETAILS_FRAGMENT}
  query profileQuery {
    me {
      ...UserDetails
    }
  }
`;
