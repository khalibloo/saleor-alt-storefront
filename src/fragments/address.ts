import { gql } from "apollo-boost";

export const ADDRESS_DETAILS_FRAGMENT = gql`
  fragment AddressDetails on Address {
    id
    firstName
    lastName
    companyName
    streetAddress1
    streetAddress2
    city
    cityArea
    postalCode
    country {
      code
      country
    }
    countryArea
    phone
    isDefaultShippingAddress
    isDefaultBillingAddress
  }
`;
