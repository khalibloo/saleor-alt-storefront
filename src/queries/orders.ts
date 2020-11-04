import { gql } from "@apollo/client";
import { ADDRESS_DETAILS_FRAGMENT } from "@/fragments/address";

export const ORDERS_PAGE_QUERY = gql`
  ${ADDRESS_DETAILS_FRAGMENT}
  query ordersQuery($lang: LanguageCodeEnum!) {
    me {
      id
      orders(first: 50) {
        totalCount
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          node {
            id
            created
            status
            number
            token
            isShippingRequired
            isPaid
            total {
              gross {
                amount
                currency
              }
            }
            subtotal {
              gross {
                amount
                currency
              }
            }
            shippingPrice {
              gross {
                amount
                currency
              }
            }
            shippingAddress {
              ...AddressDetails
            }
            billingAddress {
              ...AddressDetails
            }
            shippingMethod {
              id
              name
              price {
                amount
                currency
              }
            }
            fulfillments {
              id
              lines {
                id
                quantity
                orderLine {
                  id
                }
              }
            }
            invoices {
              id
              status
              url
              createdAt
            }
            lines {
              id
              isShippingRequired
              quantity
              quantityFulfilled
              unitPrice {
                gross {
                  amount
                  currency
                }
              }
              variant {
                id
                name
                sku
                images {
                  id
                  url
                  alt
                }
                attributes {
                  attribute {
                    id
                    name
                    translation(languageCode: $lang) {
                      id
                      name
                    }
                  }
                  values {
                    id
                    name
                    translation(languageCode: $lang) {
                      id
                      name
                    }
                  }
                }
                pricing {
                  price {
                    gross {
                      currency
                      amount
                    }
                  }
                }
                translation(languageCode: $lang) {
                  id
                  name
                }
                product {
                  id
                  name
                  descriptionJson
                  thumbnail {
                    url
                    alt
                  }
                  translation(languageCode: $lang) {
                    id
                    name
                    descriptionJson
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
