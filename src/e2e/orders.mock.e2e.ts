const placeholderImg = "https://via.placeholder.com/512";

// hint: regex to replace image urls "http://localhost:8000*(.+)"

export const ordersQuery = {
  data: {
    me: {
      id: "VXNlcjozMA==",
      orders: {
        totalCount: 2,
        pageInfo: {
          hasNextPage: false,
          hasPreviousPage: false,
          startCursor: "WyIyMiJd",
          endCursor: "WyIyMSJd",
          __typename: "PageInfo",
        },
        edges: [
          {
            node: {
              id: "T3JkZXI6MjI=",
              created: "2020-05-17T06:54:12.728679+00:00",
              status: "UNFULFILLED",
              number: "22",
              token: "19997340-0fb6-4deb-ba08-d66be8a37708",
              isShippingRequired: true,
              isPaid: false,
              total: {
                gross: { amount: 220.54, currency: "USD", __typename: "Money" },
                __typename: "TaxedMoney",
              },
              subtotal: {
                gross: { amount: 193.3, currency: "USD", __typename: "Money" },
                __typename: "TaxedMoney",
              },
              shippingPrice: {
                gross: { amount: 27.24, currency: "USD", __typename: "Money" },
                __typename: "TaxedMoney",
              },
              shippingAddress: {
                id: "QWRkcmVzczo4Mw==",
                firstName: "Peach",
                lastName: "Toadstool",
                companyName: "",
                streetAddress1: "123 Bowser's Castle",
                streetAddress2: "",
                city: "COOPA ISLAND",
                cityArea: "",
                postalCode: "54321",
                country: {
                  code: "FI",
                  country: "Finland",
                  __typename: "CountryDisplay",
                },
                countryArea: "",
                phone: "+23058432123",
                isDefaultShippingAddress: null,
                isDefaultBillingAddress: null,
                __typename: "Address",
              },
              billingAddress: {
                id: "QWRkcmVzczo4Nw==",
                firstName: "Peach",
                lastName: "Toadstool",
                companyName: "",
                streetAddress1: "123 Castle",
                streetAddress2: "",
                city: "MUSHROOM KINGDOM",
                cityArea: "",
                postalCode: "54321",
                country: {
                  code: "SE",
                  country: "Sweden",
                  __typename: "CountryDisplay",
                },
                countryArea: "",
                phone: "+23058432123",
                isDefaultShippingAddress: null,
                isDefaultBillingAddress: null,
                __typename: "Address",
              },
              shippingMethod: {
                id: "U2hpcHBpbmdNZXRob2Q6OTY=",
                name: "DHL",
                price: { amount: 27.24, currency: "USD", __typename: "Money" },
                __typename: "ShippingMethod",
              },
              fulfillments: [],
              lines: [
                {
                  id: "T3JkZXJMaW5lOjU4",
                  isShippingRequired: true,
                  quantity: 1,
                  quantityFulfilled: 0,
                  unitPrice: {
                    gross: { amount: 20, currency: "USD", __typename: "Money" },
                    __typename: "TaxedMoney",
                  },
                  variant: {
                    id: "UHJvZHVjdFZhcmlhbnQ6MTk3",
                    name: "45cm x 45cm",
                    sku: "698223582",
                    images: [],
                    attributes: [
                      {
                        attribute: {
                          id: "QXR0cmlidXRlOjIy",
                          name: "Cushion Size",
                          __typename: "Attribute",
                        },
                        values: [
                          {
                            id: "QXR0cmlidXRlVmFsdWU6NzA=",
                            name: "45cm x 45cm",
                            __typename: "AttributeValue",
                          },
                        ],
                        __typename: "SelectedAttribute",
                      },
                    ],
                    pricing: {
                      price: {
                        gross: {
                          currency: "USD",
                          amount: 20,
                          __typename: "Money",
                        },
                        __typename: "TaxedMoney",
                      },
                      __typename: "VariantPricingInfo",
                    },
                    product: {
                      id: "UHJvZHVjdDo4NQ==",
                      name: "Colored Parrot Cushion",
                      descriptionJson:
                        '{"blocks": [{"key": "", "data": {}, "text": "Add a little color to your life with a Saleor parrot cushion. Turns any old sofa into a rainbow of classy interior design.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                      thumbnail: {
                        url: placeholderImg,
                        alt: "",
                        __typename: "Image",
                      },
                      __typename: "Product",
                    },
                    __typename: "ProductVariant",
                  },
                  __typename: "OrderLine",
                },
                {
                  id: "T3JkZXJMaW5lOjU5",
                  isShippingRequired: true,
                  quantity: 2,
                  quantityFulfilled: 0,
                  unitPrice: {
                    gross: {
                      amount: 2.5,
                      currency: "USD",
                      __typename: "Money",
                    },
                    __typename: "TaxedMoney",
                  },
                  variant: {
                    id: "UHJvZHVjdFZhcmlhbnQ6MjIx",
                    name: "1l",
                    sku: "81470859",
                    images: [],
                    attributes: [
                      {
                        attribute: {
                          id: "QXR0cmlidXRlOjE1",
                          name: "Bottle Size",
                          __typename: "Attribute",
                        },
                        values: [
                          {
                            id: "QXR0cmlidXRlVmFsdWU6NDc=",
                            name: "1l",
                            __typename: "AttributeValue",
                          },
                        ],
                        __typename: "SelectedAttribute",
                      },
                    ],
                    pricing: {
                      price: {
                        gross: {
                          currency: "USD",
                          amount: 2.5,
                          __typename: "Money",
                        },
                        __typename: "TaxedMoney",
                      },
                      __typename: "VariantPricingInfo",
                    },
                    product: {
                      id: "UHJvZHVjdDo3OA==",
                      name: "Green Juice",
                      descriptionJson:
                        '{"blocks": [{"key": "", "data": {}, "text": "Brussel sprouts, spinach, peas, kale, lettuce, cabbage, zucchini, more brussel sprouts. All the greens you\\u2019ll ever need in one delicious juice.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                      thumbnail: {
                        url: placeholderImg,
                        alt: "",
                        __typename: "Image",
                      },
                      __typename: "Product",
                    },
                    __typename: "ProductVariant",
                  },
                  __typename: "OrderLine",
                },
                {
                  id: "T3JkZXJMaW5lOjYw",
                  isShippingRequired: true,
                  quantity: 1,
                  quantityFulfilled: 0,
                  unitPrice: {
                    gross: {
                      amount: 39.2,
                      currency: "USD",
                      __typename: "Money",
                    },
                    __typename: "TaxedMoney",
                  },
                  variant: {
                    id: "UHJvZHVjdFZhcmlhbnQ6MTg1",
                    name: "5l",
                    sku: "998423585",
                    images: [],
                    attributes: [
                      {
                        attribute: {
                          id: "QXR0cmlidXRlOjE4",
                          name: "Bucket Size",
                          __typename: "Attribute",
                        },
                        values: [
                          {
                            id: "QXR0cmlidXRlVmFsdWU6NjI=",
                            name: "5l",
                            __typename: "AttributeValue",
                          },
                        ],
                        __typename: "SelectedAttribute",
                      },
                    ],
                    pricing: {
                      price: {
                        gross: {
                          currency: "USD",
                          amount: 39.2,
                          __typename: "Money",
                        },
                        __typename: "TaxedMoney",
                      },
                      __typename: "VariantPricingInfo",
                    },
                    product: {
                      id: "UHJvZHVjdDo2NQ==",
                      name: "Hyperspace Turquoise Paint",
                      descriptionJson:
                        '{"blocks": [{"key": "", "data": {}, "text": "Turquoise is the new black. No more gloomy night skies, brighten up your evenings with hyperspace paint.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                      thumbnail: {
                        url: placeholderImg,
                        alt: "",
                        __typename: "Image",
                      },
                      __typename: "Product",
                    },
                    __typename: "ProductVariant",
                  },
                  __typename: "OrderLine",
                },
                {
                  id: "T3JkZXJMaW5lOjYx",
                  isShippingRequired: true,
                  quantity: 3,
                  quantityFulfilled: 0,
                  unitPrice: {
                    gross: { amount: 21, currency: "USD", __typename: "Money" },
                    __typename: "TaxedMoney",
                  },
                  variant: {
                    id: "UHJvZHVjdFZhcmlhbnQ6MzA2",
                    name: "S",
                    sku: "33963052",
                    images: [],
                    attributes: [
                      {
                        attribute: {
                          id: "QXR0cmlidXRlOjEz",
                          name: "Size",
                          __typename: "Attribute",
                        },
                        values: [
                          {
                            id: "QXR0cmlidXRlVmFsdWU6MzY=",
                            name: "S",
                            __typename: "AttributeValue",
                          },
                        ],
                        __typename: "SelectedAttribute",
                      },
                    ],
                    pricing: {
                      price: {
                        gross: {
                          currency: "USD",
                          amount: 21,
                          __typename: "Money",
                        },
                        __typename: "TaxedMoney",
                      },
                      __typename: "VariantPricingInfo",
                    },
                    product: {
                      id: "UHJvZHVjdDoxMTc=",
                      name: "Mustard Hoodie",
                      descriptionJson:
                        '{"blocks": [{"key": "", "data": {}, "text": "Who dunnit? It was Colonel Mustard, in the dining room, with the lead piping, wearing this hot as mustard hoodie.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                      thumbnail: {
                        url: placeholderImg,
                        alt: "",
                        __typename: "Image",
                      },
                      __typename: "Product",
                    },
                    __typename: "ProductVariant",
                  },
                  __typename: "OrderLine",
                },
                {
                  id: "T3JkZXJMaW5lOjYy",
                  isShippingRequired: true,
                  quantity: 1,
                  quantityFulfilled: 0,
                  unitPrice: {
                    gross: { amount: 35, currency: "USD", __typename: "Money" },
                    __typename: "TaxedMoney",
                  },
                  variant: {
                    id: "UHJvZHVjdFZhcmlhbnQ6MTcy",
                    name: "2.5l",
                    sku: "546451997",
                    images: [],
                    attributes: [
                      {
                        attribute: {
                          id: "QXR0cmlidXRlOjE4",
                          name: "Bucket Size",
                          __typename: "Attribute",
                        },
                        values: [
                          {
                            id: "QXR0cmlidXRlVmFsdWU6NjE=",
                            name: "2.5l",
                            __typename: "AttributeValue",
                          },
                        ],
                        __typename: "SelectedAttribute",
                      },
                    ],
                    pricing: {
                      price: {
                        gross: {
                          currency: "USD",
                          amount: 35,
                          __typename: "Money",
                        },
                        __typename: "TaxedMoney",
                      },
                      __typename: "VariantPricingInfo",
                    },
                    product: {
                      id: "UHJvZHVjdDo2MQ==",
                      name: "Nebula Night Sky Paint",
                      descriptionJson:
                        '{"blocks": [{"key": "", "data": {}, "text": "Tonight, my love, let us take fat brushes and paint the skies with the shades of nebula tides. Get the dark, moody shades of the ether.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                      thumbnail: {
                        url: placeholderImg,
                        alt: "",
                        __typename: "Image",
                      },
                      __typename: "Product",
                    },
                    __typename: "ProductVariant",
                  },
                  __typename: "OrderLine",
                },
                {
                  id: "T3JkZXJMaW5lOjYz",
                  isShippingRequired: true,
                  quantity: 1,
                  quantityFulfilled: 0,
                  unitPrice: {
                    gross: {
                      amount: 2.1,
                      currency: "USD",
                      __typename: "Money",
                    },
                    __typename: "TaxedMoney",
                  },
                  variant: {
                    id: "UHJvZHVjdFZhcmlhbnQ6MTkw",
                    name: "500ml",
                    sku: "988323582",
                    images: [],
                    attributes: [
                      {
                        attribute: {
                          id: "QXR0cmlidXRlOjE1",
                          name: "Bottle Size",
                          __typename: "Attribute",
                        },
                        values: [
                          {
                            id: "QXR0cmlidXRlVmFsdWU6NDY=",
                            name: "500ml",
                            __typename: "AttributeValue",
                          },
                        ],
                        __typename: "SelectedAttribute",
                      },
                    ],
                    pricing: {
                      price: {
                        gross: {
                          currency: "USD",
                          amount: 2.1,
                          __typename: "Money",
                        },
                        __typename: "TaxedMoney",
                      },
                      __typename: "VariantPricingInfo",
                    },
                    product: {
                      id: "UHJvZHVjdDo3MQ==",
                      name: "Orange Juice",
                      descriptionJson:
                        '{"blocks": [{"key": "", "data": {}, "text": "Fell from a tree straight into the bottle. No additives, no preservatives, just the refreshing taste of pure sun-kissed Californian oranges.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                      thumbnail: {
                        url: placeholderImg,
                        alt: "",
                        __typename: "Image",
                      },
                      __typename: "Product",
                    },
                    __typename: "ProductVariant",
                  },
                  __typename: "OrderLine",
                },
                {
                  id: "T3JkZXJMaW5lOjY0",
                  isShippingRequired: true,
                  quantity: 1,
                  quantityFulfilled: 0,
                  unitPrice: {
                    gross: { amount: 5, currency: "USD", __typename: "Money" },
                    __typename: "TaxedMoney",
                  },
                  variant: {
                    id: "UHJvZHVjdFZhcmlhbnQ6MjEy",
                    name: "1l",
                    sku: "79129513",
                    images: [],
                    attributes: [
                      {
                        attribute: {
                          id: "QXR0cmlidXRlOjE1",
                          name: "Bottle Size",
                          __typename: "Attribute",
                        },
                        values: [
                          {
                            id: "QXR0cmlidXRlVmFsdWU6NDc=",
                            name: "1l",
                            __typename: "AttributeValue",
                          },
                        ],
                        __typename: "SelectedAttribute",
                      },
                    ],
                    pricing: {
                      price: {
                        gross: {
                          currency: "USD",
                          amount: 5,
                          __typename: "Money",
                        },
                        __typename: "TaxedMoney",
                      },
                      __typename: "VariantPricingInfo",
                    },
                    product: {
                      id: "UHJvZHVjdDo3NQ==",
                      name: "Pineapple Juice",
                      descriptionJson:
                        '{"blocks": [{"key": "", "data": {}, "text": "I can\\u2019t stand pineapples, so this one is not for me. They have a weird, fluffy, tangy taste. But if it is your kind of thing, then knock yourself out.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                      thumbnail: {
                        url: placeholderImg,
                        alt: "",
                        __typename: "Image",
                      },
                      __typename: "Product",
                    },
                    __typename: "ProductVariant",
                  },
                  __typename: "OrderLine",
                },
                {
                  id: "T3JkZXJMaW5lOjY1",
                  isShippingRequired: true,
                  quantity: 1,
                  quantityFulfilled: 0,
                  unitPrice: {
                    gross: { amount: 24, currency: "USD", __typename: "Money" },
                    __typename: "TaxedMoney",
                  },
                  variant: {
                    id: "UHJvZHVjdFZhcmlhbnQ6MjU2",
                    name: "S",
                    sku: "29716755",
                    images: [],
                    attributes: [
                      {
                        attribute: {
                          id: "QXR0cmlidXRlOjEz",
                          name: "Size",
                          __typename: "Attribute",
                        },
                        values: [
                          {
                            id: "QXR0cmlidXRlVmFsdWU6MzY=",
                            name: "S",
                            __typename: "AttributeValue",
                          },
                        ],
                        __typename: "SelectedAttribute",
                      },
                    ],
                    pricing: {
                      price: {
                        gross: {
                          currency: "USD",
                          amount: 24,
                          __typename: "Money",
                        },
                        __typename: "TaxedMoney",
                      },
                      __typename: "VariantPricingInfo",
                    },
                    product: {
                      id: "UHJvZHVjdDoxMDc=",
                      name: "Polo Shirt",
                      descriptionJson:
                        '{"blocks": [{"key": "", "data": {}, "text": "Ever have those days where you feel a bit geometric? Can\'t quite shape yourself up right? Show your different sides with a Saleor styles.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                      thumbnail: {
                        url: placeholderImg,
                        alt: "",
                        __typename: "Image",
                      },
                      __typename: "Product",
                    },
                    __typename: "ProductVariant",
                  },
                  __typename: "OrderLine",
                },
              ],
              __typename: "Order",
            },
            __typename: "OrderCountableEdge",
          },
          {
            node: {
              id: "T3JkZXI6MjE=",
              created: "2020-05-16T23:08:09.126073+00:00",
              status: "UNFULFILLED",
              number: "21",
              token: "bfdac989-b540-4c6c-9fcb-0383492b1a70",
              isShippingRequired: true,
              isPaid: false,
              total: {
                gross: { amount: 36.83, currency: "USD", __typename: "Money" },
                __typename: "TaxedMoney",
              },
              subtotal: {
                gross: { amount: 24.1, currency: "USD", __typename: "Money" },
                __typename: "TaxedMoney",
              },
              shippingPrice: {
                gross: { amount: 12.73, currency: "USD", __typename: "Money" },
                __typename: "TaxedMoney",
              },
              shippingAddress: {
                id: "QWRkcmVzczo3Nw==",
                firstName: "Peach",
                lastName: "Toadstool",
                companyName: "",
                streetAddress1: "123 Castle Street",
                streetAddress2: "",
                city: "COOPA ISLAND",
                cityArea: "",
                postalCode: "54321",
                country: {
                  code: "MG",
                  country: "Madagascar",
                  __typename: "CountryDisplay",
                },
                countryArea: "",
                phone: "+23058432123",
                isDefaultShippingAddress: null,
                isDefaultBillingAddress: null,
                __typename: "Address",
              },
              billingAddress: {
                id: "QWRkcmVzczo4MA==",
                firstName: "Peach",
                lastName: "Toadstool",
                companyName: "",
                streetAddress1: "123 Castle Street",
                streetAddress2: "",
                city: "COOPA ISLAND",
                cityArea: "",
                postalCode: "54321",
                country: {
                  code: "MG",
                  country: "Madagascar",
                  __typename: "CountryDisplay",
                },
                countryArea: "",
                phone: "+23058432123",
                isDefaultShippingAddress: null,
                isDefaultBillingAddress: null,
                __typename: "Address",
              },
              shippingMethod: {
                id: "U2hpcHBpbmdNZXRob2Q6OTQ=",
                name: "fastway couriers",
                price: { amount: 12.73, currency: "USD", __typename: "Money" },
                __typename: "ShippingMethod",
              },
              fulfillments: [],
              lines: [
                {
                  id: "T3JkZXJMaW5lOjU1",
                  isShippingRequired: true,
                  quantity: 1,
                  quantityFulfilled: 0,
                  unitPrice: {
                    gross: { amount: 7, currency: "USD", __typename: "Money" },
                    __typename: "TaxedMoney",
                  },
                  variant: {
                    id: "UHJvZHVjdFZhcmlhbnQ6MjA0",
                    name: "2l",
                    sku: "80884671",
                    images: [],
                    attributes: [
                      {
                        attribute: {
                          id: "QXR0cmlidXRlOjE1",
                          name: "Bottle Size",
                          __typename: "Attribute",
                        },
                        values: [
                          {
                            id: "QXR0cmlidXRlVmFsdWU6NDg=",
                            name: "2l",
                            __typename: "AttributeValue",
                          },
                        ],
                        __typename: "SelectedAttribute",
                      },
                    ],
                    pricing: {
                      price: {
                        gross: {
                          currency: "USD",
                          amount: 7,
                          __typename: "Money",
                        },
                        __typename: "TaxedMoney",
                      },
                      __typename: "VariantPricingInfo",
                    },
                    product: {
                      id: "UHJvZHVjdDo3Mg==",
                      name: "Apple Juice",
                      descriptionJson:
                        '{"blocks": [{"key": "", "data": {}, "text": "Fell straight from the tree, on to Newton\\u2019s head, then into the bottle. The autumn taste of English apples. Brought to you by gravity.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                      thumbnail: {
                        url: placeholderImg,
                        alt: "",
                        __typename: "Image",
                      },
                      __typename: "Product",
                    },
                    __typename: "ProductVariant",
                  },
                  __typename: "OrderLine",
                },
                {
                  id: "T3JkZXJMaW5lOjU2",
                  isShippingRequired: true,
                  quantity: 1,
                  quantityFulfilled: 0,
                  unitPrice: {
                    gross: {
                      amount: 2.1,
                      currency: "USD",
                      __typename: "Money",
                    },
                    __typename: "TaxedMoney",
                  },
                  variant: {
                    id: "UHJvZHVjdFZhcmlhbnQ6MjA4",
                    name: "500ml",
                    sku: "45328412",
                    images: [],
                    attributes: [
                      {
                        attribute: {
                          id: "QXR0cmlidXRlOjE1",
                          name: "Bottle Size",
                          __typename: "Attribute",
                        },
                        values: [
                          {
                            id: "QXR0cmlidXRlVmFsdWU6NDY=",
                            name: "500ml",
                            __typename: "AttributeValue",
                          },
                        ],
                        __typename: "SelectedAttribute",
                      },
                    ],
                    pricing: {
                      price: {
                        gross: {
                          currency: "USD",
                          amount: 2.1,
                          __typename: "Money",
                        },
                        __typename: "TaxedMoney",
                      },
                      __typename: "VariantPricingInfo",
                    },
                    product: {
                      id: "UHJvZHVjdDo3NA==",
                      name: "Banana Juice",
                      descriptionJson:
                        '{"blocks": [{"key": "", "data": {}, "text": "Build your protein the natural way, with exotic banana juice made from ripe fruit and packed with all the goodness of the tropical sun.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                      thumbnail: {
                        url: placeholderImg,
                        alt: "",
                        __typename: "Image",
                      },
                      __typename: "Product",
                    },
                    __typename: "ProductVariant",
                  },
                  __typename: "OrderLine",
                },
                {
                  id: "T3JkZXJMaW5lOjU3",
                  isShippingRequired: true,
                  quantity: 1,
                  quantityFulfilled: 0,
                  unitPrice: {
                    gross: { amount: 15, currency: "USD", __typename: "Money" },
                    __typename: "TaxedMoney",
                  },
                  variant: {
                    id: "UHJvZHVjdFZhcmlhbnQ6Mjk2",
                    name: "S",
                    sku: "62783187",
                    images: [],
                    attributes: [
                      {
                        attribute: {
                          id: "QXR0cmlidXRlOjEz",
                          name: "Size",
                          __typename: "Attribute",
                        },
                        values: [
                          {
                            id: "QXR0cmlidXRlVmFsdWU6MzY=",
                            name: "S",
                            __typename: "AttributeValue",
                          },
                        ],
                        __typename: "SelectedAttribute",
                      },
                    ],
                    pricing: {
                      price: {
                        gross: {
                          currency: "USD",
                          amount: 15,
                          __typename: "Money",
                        },
                        __typename: "TaxedMoney",
                      },
                      __typename: "VariantPricingInfo",
                    },
                    product: {
                      id: "UHJvZHVjdDoxMTU=",
                      name: "Black Hoodie",
                      descriptionJson:
                        '{"blocks": [{"key": "", "data": {}, "text": "Special offer. Buy a hood and get a free jet black sweater attached. Perfect for when you are up to no good.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                      thumbnail: {
                        url: placeholderImg,
                        alt: "",
                        __typename: "Image",
                      },
                      __typename: "Product",
                    },
                    __typename: "ProductVariant",
                  },
                  __typename: "OrderLine",
                },
              ],
              __typename: "Order",
            },
            __typename: "OrderCountableEdge",
          },
        ],
        __typename: "OrderCountableConnection",
      },
      __typename: "User",
    },
  },
};
