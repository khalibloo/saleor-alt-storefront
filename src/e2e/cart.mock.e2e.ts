const placeholderImg = "https://via.placeholder.com/512";

// hint: regex to replace image urls "http://localhost:8000*(.+)"

export const cartQuery = {
  data: {
    me: {
      id: "VXNlcjozMA==",
      addresses: [
        {
          id: "QWRkcmVzczo2OQ==",
          firstName: "Peach",
          lastName: "Toadstool",
          companyName: "",
          streetAddress1: "123 Castle Street",
          streetAddress2: "Dungeon Floor",
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
          isDefaultShippingAddress: true,
          isDefaultBillingAddress: true,
          __typename: "Address",
        },
        {
          id: "QWRkcmVzczo3MA==",
          firstName: "Courage",
          lastName: "Cowardly Dog",
          companyName: "",
          streetAddress1: "Middle of Nowhere",
          streetAddress2: "Somewhere",
          city: "SOME CITY",
          cityArea: "",
          postalCode: "54321",
          country: {
            code: "MG",
            country: "Madagascar",
            __typename: "CountryDisplay",
          },
          countryArea: "",
          phone: "+2348011112222",
          isDefaultShippingAddress: false,
          isDefaultBillingAddress: false,
          __typename: "Address",
        },
      ],
      checkout: {
        id: "Q2hlY2tvdXQ6ODVmMjYyOWMtMDBlMi00NjY4LWJiNmItNmM1YjFmNzliYmRh",
        token: "85f2629c-00e2-4668-bb6b-6c5b1f79bbda",
        shippingMethod: null,
        shippingPrice: {
          gross: { currency: "USD", amount: 0, __typename: "Money" },
          __typename: "TaxedMoney",
        },
        subtotalPrice: {
          gross: { currency: "USD", amount: 16.5, __typename: "Money" },
          __typename: "TaxedMoney",
        },
        totalPrice: {
          gross: { currency: "USD", amount: 16.5, __typename: "Money" },
          __typename: "TaxedMoney",
        },
        __typename: "Checkout",
        availableShippingMethods: [
          {
            id: "U2hpcHBpbmdNZXRob2Q6MQ==",
            name: "Free shipping",
            price: { currency: "USD", amount: 0, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6OTk=",
            name: "DB Schenker",
            price: { currency: "USD", amount: 6.11, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6MjA=",
            name: "DHL",
            price: { currency: "USD", amount: 8.32, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6Nzk=",
            name: "Registered priority",
            price: { currency: "USD", amount: 15.22, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6NA==",
            name: "DB Schenker",
            price: { currency: "USD", amount: 23.15, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6Mw==",
            name: "Registered priority",
            price: { currency: "USD", amount: 23.7, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6OTY=",
            name: "DHL",
            price: { currency: "USD", amount: 27.24, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6Nzg=",
            name: "UPS",
            price: { currency: "USD", amount: 27.98, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6NDE=",
            name: "Registered priority",
            price: { currency: "USD", amount: 30.12, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6NjE=",
            name: "DB Schenker",
            price: { currency: "USD", amount: 31.11, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6NjA=",
            name: "Registered priority",
            price: { currency: "USD", amount: 32.4, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6NTk=",
            name: "UPS",
            price: { currency: "USD", amount: 39.92, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6OTg=",
            name: "Registered priority",
            price: { currency: "USD", amount: 45.46, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6MTE3",
            name: "Registered priority",
            price: { currency: "USD", amount: 47.5, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6NTg=",
            name: "DHL",
            price: { currency: "USD", amount: 48.25, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6MTE4",
            name: "DB Schenker",
            price: { currency: "USD", amount: 49.8, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6NDI=",
            name: "DB Schenker",
            price: { currency: "USD", amount: 56.43, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6MTE2",
            name: "UPS",
            price: { currency: "USD", amount: 61.96, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6Nzc=",
            name: "DHL",
            price: { currency: "USD", amount: 63.88, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6MjI=",
            name: "Registered priority",
            price: { currency: "USD", amount: 70.72, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6NDA=",
            name: "UPS",
            price: { currency: "USD", amount: 77.7, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6MjE=",
            name: "UPS",
            price: { currency: "USD", amount: 83.85, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6MTE1",
            name: "DHL",
            price: { currency: "USD", amount: 85.6, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6Mzk=",
            name: "DHL",
            price: { currency: "USD", amount: 89.45, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6OTc=",
            name: "UPS",
            price: { currency: "USD", amount: 92.66, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6MjM=",
            name: "DB Schenker",
            price: { currency: "USD", amount: 92.7, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6ODA=",
            name: "DB Schenker",
            price: { currency: "USD", amount: 93.85, __typename: "Money" },
            __typename: "ShippingMethod",
          },
          {
            id: "U2hpcHBpbmdNZXRob2Q6Mg==",
            name: "UPS",
            price: { currency: "USD", amount: 96.42, __typename: "Money" },
            __typename: "ShippingMethod",
          },
        ],
        shippingAddress: {
          id: "QWRkcmVzczoxMDA=",
          firstName: "Peach",
          lastName: "Toadstool",
          companyName: "",
          streetAddress1: "123 Castle Street",
          streetAddress2: "Dungeon Floor",
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
          id: "QWRkcmVzczo5OQ==",
          firstName: "Peach",
          lastName: "Toadstool",
          companyName: "",
          streetAddress1: "123 Castle Street",
          streetAddress2: "Dungeon Floor",
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
        availablePaymentGateways: [
          {
            id: "mirumee.payments.dummy",
            name: "Dummy",
            config: [
              {
                field: "store_customer_card",
                value: "false",
                __typename: "GatewayConfigLine",
              },
            ],
            __typename: "PaymentGateway",
          },
        ],
        discount: { currency: "USD", amount: 0, __typename: "Money" },
        voucherCode: null,
        lines: [
          {
            id: "Q2hlY2tvdXRMaW5lOjEz",
            variant: {
              id: "UHJvZHVjdFZhcmlhbnQ6MTk1",
              name: "",
              sku: "98616712",
              quantityAvailable: 50,
              images: [],
              attributes: [],
              pricing: {
                price: {
                  gross: { currency: "USD", amount: 3, __typename: "Money" },
                  __typename: "TaxedMoney",
                },
                __typename: "VariantPricingInfo",
              },
              product: {
                id: "UHJvZHVjdDo4Mw==",
                name: "Seaman Lager",
                descriptionJson:
                  '{"blocks": [{"key": "", "data": {}, "text": "Find your sea legs and then lose the power to use them with extra strong seaman\\u2019s lager. Don\\u2019t drink and sail, me hearties!", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                thumbnail: {
                  url: placeholderImg,
                  alt: "",
                  __typename: "Image",
                },
                __typename: "Product",
              },
              __typename: "ProductVariant",
            },
            quantity: 1,
            totalPrice: {
              gross: { amount: 3, currency: "USD", __typename: "Money" },
              __typename: "TaxedMoney",
            },
            __typename: "CheckoutLine",
          },
          {
            id: "Q2hlY2tvdXRMaW5lOjE0",
            variant: {
              id: "UHJvZHVjdFZhcmlhbnQ6MjA2",
              name: "1l",
              sku: "14925419",
              quantityAvailable: 50,
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
                  gross: { currency: "USD", amount: 4.5, __typename: "Money" },
                  __typename: "TaxedMoney",
                },
                __typename: "VariantPricingInfo",
              },
              product: {
                id: "UHJvZHVjdDo3Mw==",
                name: "Carrot Juice",
                descriptionJson:
                  '{"blocks": [{"key": "", "data": {}, "text": "Improve your eyesight the natural way with 100% pure, squeezed carrot juice. The sweet, orange nectar of Mother Earth.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                thumbnail: {
                  url: placeholderImg,
                  alt: "",
                  __typename: "Image",
                },
                __typename: "Product",
              },
              __typename: "ProductVariant",
            },
            quantity: 1,
            totalPrice: {
              gross: { amount: 4.5, currency: "USD", __typename: "Money" },
              __typename: "TaxedMoney",
            },
            __typename: "CheckoutLine",
          },
          {
            id: "Q2hlY2tvdXRMaW5lOjE1",
            variant: {
              id: "UHJvZHVjdFZhcmlhbnQ6MjA3",
              name: "2l",
              sku: "62426105",
              quantityAvailable: 50,
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
                  gross: { currency: "USD", amount: 6.3, __typename: "Money" },
                  __typename: "TaxedMoney",
                },
                __typename: "VariantPricingInfo",
              },
              product: {
                id: "UHJvZHVjdDo3Mw==",
                name: "Carrot Juice",
                descriptionJson:
                  '{"blocks": [{"key": "", "data": {}, "text": "Improve your eyesight the natural way with 100% pure, squeezed carrot juice. The sweet, orange nectar of Mother Earth.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                thumbnail: {
                  url: placeholderImg,
                  alt: "",
                  __typename: "Image",
                },
                __typename: "Product",
              },
              __typename: "ProductVariant",
            },
            quantity: 1,
            totalPrice: {
              gross: { amount: 6.3, currency: "USD", __typename: "Money" },
              __typename: "TaxedMoney",
            },
            __typename: "CheckoutLine",
          },
          {
            id: "Q2hlY2tvdXRMaW5lOjE2",
            variant: {
              id: "UHJvZHVjdFZhcmlhbnQ6MjA1",
              name: "500ml",
              sku: "67882967",
              quantityAvailable: 50,
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
                  gross: { currency: "USD", amount: 2.7, __typename: "Money" },
                  __typename: "TaxedMoney",
                },
                __typename: "VariantPricingInfo",
              },
              product: {
                id: "UHJvZHVjdDo3Mw==",
                name: "Carrot Juice",
                descriptionJson:
                  '{"blocks": [{"key": "", "data": {}, "text": "Improve your eyesight the natural way with 100% pure, squeezed carrot juice. The sweet, orange nectar of Mother Earth.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                thumbnail: {
                  url: placeholderImg,
                  alt: "",
                  __typename: "Image",
                },
                __typename: "Product",
              },
              __typename: "ProductVariant",
            },
            quantity: 1,
            totalPrice: {
              gross: { amount: 2.7, currency: "USD", __typename: "Money" },
              __typename: "TaxedMoney",
            },
            __typename: "CheckoutLine",
          },
        ],
      },
      __typename: "User",
    },
  },
};
