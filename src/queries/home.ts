import { ADDRESS_DETAILS_FRAGMENT } from "@/fragments/address";
import { PRODUCT_CARD_FRAGMENT } from "@/fragments/product";
import { gql } from "@apollo/client";

export const HOME_PAGE_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  ${ADDRESS_DETAILS_FRAGMENT}
  query homePageQuery($lang: LanguageCodeEnum!) {
    shop {
      name
      description
      geolocalization {
        country {
          code
          country
        }
      }
      companyAddress {
        ...AddressDetails
      }
      translation(languageCode: $lang) {
        id
        headerText
        description
      }
    }
  }
`;
