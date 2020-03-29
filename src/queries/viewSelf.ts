import { USER_DETAILS_FRAGMENT } from "@/fragments/user";
import { gql } from "apollo-boost";

export const VIEW_SELF_QUERY = gql`
  ${USER_DETAILS_FRAGMENT}
  query viewSelfQuery {
    me {
      ...UserDetails
    }
  }
`;
