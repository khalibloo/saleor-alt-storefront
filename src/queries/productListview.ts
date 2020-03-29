import { PRODUCT_CARD_FRAGMENT } from "@/fragments/product";
import { gql } from "apollo-boost";

export const PRODUCT_LISTVIEW_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query productListviewQuery($productID: ID!) {
    product(id: $productID) {
      ...ProductCard
      descriptionJson
      isAvailable
    }
  }
`;
