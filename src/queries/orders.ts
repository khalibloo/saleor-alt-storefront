import { gql } from "apollo-boost";
import { ADDRESS_DETAILS_FRAGMENT } from "@/fragments/address";

export const ORDERS_PAGE_QUERY = gql`
  ${ADDRESS_DETAILS_FRAGMENT}
  query ordersQuery {
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
                  }
                  values {
                    id
                    name
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
                product {
                  id
                  name
                  descriptionJson
                  thumbnail {
                    url
                    alt
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
