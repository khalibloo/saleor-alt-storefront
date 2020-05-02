const placeholderImg = "https://via.placeholder.com/512";

// hint: regex to replace image urls "http://localhost:8000*(.+)"

export default {
  data: {
    product: {
      id: "UHJvZHVjdDo3Mw==",
      name: "Carrot Juice",
      slug: "carrot-juice",
      descriptionJson:
        '{"blocks": [{"key": "", "data": {}, "text": "Improve your eyesight the natural way with 100% pure, squeezed carrot juice. The sweet, orange nectar of Mother Earth.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
      images: [
        {
          id: "UHJvZHVjdEltYWdlOjg=",
          url: placeholderImg,
          alt: "",
          __typename: "ProductImage",
        },
        {
          id: "UHJvZHVjdEltYWdlOjUx",
          url: placeholderImg,
          alt: "",
          __typename: "ProductImage",
        },
        {
          id: "UHJvZHVjdEltYWdlOjUy",
          url: placeholderImg,
          alt: "",
          __typename: "ProductImage",
        },
        {
          id: "UHJvZHVjdEltYWdlOjUz",
          url: placeholderImg,
          alt: "",
          __typename: "ProductImage",
        },
        {
          id: "UHJvZHVjdEltYWdlOjU0",
          url: placeholderImg,
          alt: "",
          __typename: "ProductImage",
        },
        {
          id: "UHJvZHVjdEltYWdlOjU1",
          url: placeholderImg,
          alt: "",
          __typename: "ProductImage",
        },
        {
          id: "UHJvZHVjdEltYWdlOjU2",
          url: placeholderImg,
          alt: "",
          __typename: "ProductImage",
        },
        {
          id: "UHJvZHVjdEltYWdlOjU3",
          url: placeholderImg,
          alt: "",
          __typename: "ProductImage",
        },
      ],
      pricing: {
        onSale: true,
        discount: {
          currency: "USD",
          gross: {
            currency: "USD",
            amount: 0.3,
            __typename: "Money",
          },
          __typename: "TaxedMoney",
        },
        priceRange: {
          start: {
            gross: {
              currency: "USD",
              amount: 2.7,
              __typename: "Money",
            },
            __typename: "TaxedMoney",
          },
          stop: {
            gross: {
              currency: "USD",
              amount: 6.3,
              __typename: "Money",
            },
            __typename: "TaxedMoney",
          },
          __typename: "TaxedMoneyRange",
        },
        priceRangeUndiscounted: {
          start: {
            gross: {
              currency: "USD",
              amount: 3,
              __typename: "Money",
            },
            __typename: "TaxedMoney",
          },
          stop: {
            gross: {
              currency: "USD",
              amount: 7,
              __typename: "Money",
            },
            __typename: "TaxedMoney",
          },
          __typename: "TaxedMoneyRange",
        },
        __typename: "ProductPricingInfo",
      },
      isAvailable: true,
      attributes: [
        {
          attribute: {
            id: "QXR0cmlidXRlOjE2",
            name: "Flavor",
            __typename: "Attribute",
          },
          values: [
            {
              id: "QXR0cmlidXRlVmFsdWU6NTI=",
              name: "Carrot",
              __typename: "AttributeValue",
            },
          ],
          __typename: "SelectedAttribute",
        },
      ],
      variants: [
        {
          id: "UHJvZHVjdFZhcmlhbnQ6MjA1",
          sku: "67882967",
          name: "500ml",
          images: [],
          pricing: {
            price: {
              gross: {
                amount: 2.7,
                currency: "USD",
                __typename: "Money",
              },
              __typename: "TaxedMoney",
            },
            __typename: "VariantPricingInfo",
          },
          attributes: [
            {
              values: [
                {
                  id: "QXR0cmlidXRlVmFsdWU6NDY=",
                  name: "500ml",
                  __typename: "AttributeValue",
                },
              ],
              attribute: {
                id: "QXR0cmlidXRlOjE1",
                name: "Bottle Size",
                values: [
                  {
                    id: "QXR0cmlidXRlVmFsdWU6NDY=",
                    name: "500ml",
                    __typename: "AttributeValue",
                  },
                  {
                    id: "QXR0cmlidXRlVmFsdWU6NDc=",
                    name: "1l",
                    __typename: "AttributeValue",
                  },
                  {
                    id: "QXR0cmlidXRlVmFsdWU6NDg=",
                    name: "2l",
                    __typename: "AttributeValue",
                  },
                ],
                __typename: "Attribute",
              },
              __typename: "SelectedAttribute",
            },
          ],
          stocks: [
            { stockQuantity: 50, __typename: "Stock" },
            { stockQuantity: 50, __typename: "Stock" },
            { stockQuantity: 50, __typename: "Stock" },
            { stockQuantity: 50, __typename: "Stock" },
            { stockQuantity: 50, __typename: "Stock" },
          ],
          __typename: "ProductVariant",
        },
        {
          id: "UHJvZHVjdFZhcmlhbnQ6MjA2",
          sku: "14925419",
          name: "1l",
          images: [],
          pricing: {
            price: {
              gross: {
                amount: 4.5,
                currency: "USD",
                __typename: "Money",
              },
              __typename: "TaxedMoney",
            },
            __typename: "VariantPricingInfo",
          },
          attributes: [
            {
              values: [
                {
                  id: "QXR0cmlidXRlVmFsdWU6NDc=",
                  name: "1l",
                  __typename: "AttributeValue",
                },
              ],
              attribute: {
                id: "QXR0cmlidXRlOjE1",
                name: "Bottle Size",
                values: [
                  {
                    id: "QXR0cmlidXRlVmFsdWU6NDY=",
                    name: "500ml",
                    __typename: "AttributeValue",
                  },
                  {
                    id: "QXR0cmlidXRlVmFsdWU6NDc=",
                    name: "1l",
                    __typename: "AttributeValue",
                  },
                  {
                    id: "QXR0cmlidXRlVmFsdWU6NDg=",
                    name: "2l",
                    __typename: "AttributeValue",
                  },
                ],
                __typename: "Attribute",
              },
              __typename: "SelectedAttribute",
            },
          ],
          stocks: [
            { stockQuantity: 50, __typename: "Stock" },
            { stockQuantity: 50, __typename: "Stock" },
            { stockQuantity: 50, __typename: "Stock" },
            { stockQuantity: 50, __typename: "Stock" },
            { stockQuantity: 50, __typename: "Stock" },
          ],
          __typename: "ProductVariant",
        },
        {
          id: "UHJvZHVjdFZhcmlhbnQ6MjA3",
          sku: "62426105",
          name: "2l",
          images: [],
          pricing: {
            price: {
              gross: {
                amount: 6.3,
                currency: "USD",
                __typename: "Money",
              },
              __typename: "TaxedMoney",
            },
            __typename: "VariantPricingInfo",
          },
          attributes: [
            {
              values: [
                {
                  id: "QXR0cmlidXRlVmFsdWU6NDg=",
                  name: "2l",
                  __typename: "AttributeValue",
                },
              ],
              attribute: {
                id: "QXR0cmlidXRlOjE1",
                name: "Bottle Size",
                values: [
                  {
                    id: "QXR0cmlidXRlVmFsdWU6NDY=",
                    name: "500ml",
                    __typename: "AttributeValue",
                  },
                  {
                    id: "QXR0cmlidXRlVmFsdWU6NDc=",
                    name: "1l",
                    __typename: "AttributeValue",
                  },
                  {
                    id: "QXR0cmlidXRlVmFsdWU6NDg=",
                    name: "2l",
                    __typename: "AttributeValue",
                  },
                ],
                __typename: "Attribute",
              },
              __typename: "SelectedAttribute",
            },
          ],
          stocks: [
            { stockQuantity: 50, __typename: "Stock" },
            { stockQuantity: 50, __typename: "Stock" },
            { stockQuantity: 50, __typename: "Stock" },
            { stockQuantity: 50, __typename: "Stock" },
            { stockQuantity: 50, __typename: "Stock" },
          ],
          __typename: "ProductVariant",
        },
      ],
      category: {
        id: "Q2F0ZWdvcnk6MTQ=",
        products: {
          edges: [
            {
              node: {
                id: "UHJvZHVjdDo3Mg==",
                name: "Apple Juice",
                slug: "apple-juice",
                thumbnail: {
                  url: placeholderImg,
                  alt: "",
                  __typename: "Image",
                },
                images: [
                  {
                    id: "UHJvZHVjdEltYWdlOjc=",
                    url: placeholderImg,
                    alt: "",
                    __typename: "ProductImage",
                  },
                ],
                collections: [],
                category: {
                  id: "Q2F0ZWdvcnk6MTQ=",
                  name: "Juices",
                  __typename: "Category",
                },
                pricing: {
                  onSale: false,
                  discount: null,
                  priceRange: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 3,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 7,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  priceRangeUndiscounted: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 3,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 7,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  __typename: "ProductPricingInfo",
                },
                __typename: "Product",
              },
              __typename: "ProductCountableEdge",
            },
            {
              node: {
                id: "UHJvZHVjdDo3NA==",
                name: "Banana Juice",
                slug: "banana-juice",
                thumbnail: {
                  url: placeholderImg,
                  alt: "",
                  __typename: "Image",
                },
                images: [
                  {
                    id: "UHJvZHVjdEltYWdlOjk=",
                    url: placeholderImg,
                    alt: "",
                    __typename: "ProductImage",
                  },
                ],
                collections: [],
                category: {
                  id: "Q2F0ZWdvcnk6MTQ=",
                  name: "Juices",
                  __typename: "Category",
                },
                pricing: {
                  onSale: true,
                  discount: {
                    currency: "USD",
                    gross: {
                      currency: "USD",
                      amount: 0.9,
                      __typename: "Money",
                    },
                    __typename: "TaxedMoney",
                  },
                  priceRange: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 2.1,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 4.9,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  priceRangeUndiscounted: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 3,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 7,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  __typename: "ProductPricingInfo",
                },
                __typename: "Product",
              },
              __typename: "ProductCountableEdge",
            },
            {
              node: {
                id: "UHJvZHVjdDo3OQ==",
                name: "Bean Juice",
                slug: "bean-juice",
                thumbnail: {
                  url: placeholderImg,
                  alt: "",
                  __typename: "Image",
                },
                images: [
                  {
                    id: "UHJvZHVjdEltYWdlOjE0",
                    url: placeholderImg,
                    alt: "",
                    __typename: "ProductImage",
                  },
                ],
                collections: [],
                category: {
                  id: "Q2F0ZWdvcnk6MTQ=",
                  name: "Juices",
                  __typename: "Category",
                },
                pricing: {
                  onSale: false,
                  discount: null,
                  priceRange: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 3,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 7,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  priceRangeUndiscounted: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 3,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 7,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  __typename: "ProductPricingInfo",
                },
                __typename: "Product",
              },
              __typename: "ProductCountableEdge",
            },
            {
              node: {
                id: "UHJvZHVjdDo3Mw==",
                name: "Carrot Juice",
                slug: "carrot-juice",
                thumbnail: {
                  url: placeholderImg,
                  alt: "",
                  __typename: "Image",
                },
                images: [
                  {
                    id: "UHJvZHVjdEltYWdlOjg=",
                    url: placeholderImg,
                    alt: "",
                    __typename: "ProductImage",
                  },
                  {
                    id: "UHJvZHVjdEltYWdlOjUx",
                    url: placeholderImg,
                    alt: "",
                    __typename: "ProductImage",
                  },
                  {
                    id: "UHJvZHVjdEltYWdlOjUy",
                    url: placeholderImg,
                    alt: "",
                    __typename: "ProductImage",
                  },
                  {
                    id: "UHJvZHVjdEltYWdlOjUz",
                    url: placeholderImg,
                    alt: "",
                    __typename: "ProductImage",
                  },
                  {
                    id: "UHJvZHVjdEltYWdlOjU0",
                    url: placeholderImg,
                    alt: "",
                    __typename: "ProductImage",
                  },
                  {
                    id: "UHJvZHVjdEltYWdlOjU1",
                    url: placeholderImg,
                    alt: "",
                    __typename: "ProductImage",
                  },
                  {
                    id: "UHJvZHVjdEltYWdlOjU2",
                    url: placeholderImg,
                    alt: "",
                    __typename: "ProductImage",
                  },
                  {
                    id: "UHJvZHVjdEltYWdlOjU3",
                    url: placeholderImg,
                    alt: "",
                    __typename: "ProductImage",
                  },
                ],
                collections: [
                  {
                    id: "Q29sbGVjdGlvbjox",
                    name: "Summer collection",
                    __typename: "Collection",
                  },
                ],
                category: {
                  id: "Q2F0ZWdvcnk6MTQ=",
                  name: "Juices",
                  __typename: "Category",
                },
                pricing: {
                  onSale: true,
                  discount: {
                    currency: "USD",
                    gross: {
                      currency: "USD",
                      amount: 0.3,
                      __typename: "Money",
                    },
                    __typename: "TaxedMoney",
                  },
                  priceRange: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 2.7,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 6.3,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  priceRangeUndiscounted: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 3,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 7,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  __typename: "ProductPricingInfo",
                },
                __typename: "Product",
              },
              __typename: "ProductCountableEdge",
            },
            {
              node: {
                id: "UHJvZHVjdDo3Ng==",
                name: "Coconut Juice",
                slug: "coconut-juice",
                thumbnail: {
                  url: placeholderImg,
                  alt: "",
                  __typename: "Image",
                },
                images: [
                  {
                    id: "UHJvZHVjdEltYWdlOjEx",
                    url: placeholderImg,
                    alt: "",
                    __typename: "ProductImage",
                  },
                ],
                collections: [],
                category: {
                  id: "Q2F0ZWdvcnk6MTQ=",
                  name: "Juices",
                  __typename: "Category",
                },
                pricing: {
                  onSale: false,
                  discount: null,
                  priceRange: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 3,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 7,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  priceRangeUndiscounted: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 3,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 7,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  __typename: "ProductPricingInfo",
                },
                __typename: "Product",
              },
              __typename: "ProductCountableEdge",
            },
            {
              node: {
                id: "UHJvZHVjdDo3OA==",
                name: "Green Juice",
                slug: "green-juice",
                thumbnail: {
                  url: placeholderImg,
                  alt: "",
                  __typename: "Image",
                },
                images: [
                  {
                    id: "UHJvZHVjdEltYWdlOjEz",
                    url: placeholderImg,
                    alt: "",
                    __typename: "ProductImage",
                  },
                ],
                collections: [],
                category: {
                  id: "Q2F0ZWdvcnk6MTQ=",
                  name: "Juices",
                  __typename: "Category",
                },
                pricing: {
                  onSale: true,
                  discount: {
                    currency: "USD",
                    gross: {
                      currency: "USD",
                      amount: 1.5,
                      __typename: "Money",
                    },
                    __typename: "TaxedMoney",
                  },
                  priceRange: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 1.5,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 3.5,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  priceRangeUndiscounted: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 3,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 7,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  __typename: "ProductPricingInfo",
                },
                __typename: "Product",
              },
              __typename: "ProductCountableEdge",
            },
            {
              node: {
                id: "UHJvZHVjdDo3MQ==",
                name: "Orange Juice",
                slug: "orange-juice",
                thumbnail: {
                  url: placeholderImg,
                  alt: "",
                  __typename: "Image",
                },
                images: [
                  {
                    id: "UHJvZHVjdEltYWdlOjY=",
                    url: placeholderImg,
                    alt: "",
                    __typename: "ProductImage",
                  },
                ],
                collections: [],
                category: {
                  id: "Q2F0ZWdvcnk6MTQ=",
                  name: "Juices",
                  __typename: "Category",
                },
                pricing: {
                  onSale: true,
                  discount: {
                    currency: "USD",
                    gross: {
                      currency: "USD",
                      amount: 0.9,
                      __typename: "Money",
                    },
                    __typename: "TaxedMoney",
                  },
                  priceRange: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 2.1,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 4.9,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  priceRangeUndiscounted: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 3,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 7,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  __typename: "ProductPricingInfo",
                },
                __typename: "Product",
              },
              __typename: "ProductCountableEdge",
            },
            {
              node: {
                id: "UHJvZHVjdDo3NQ==",
                name: "Pineapple Juice",
                slug: "pineapple-juice",
                thumbnail: {
                  url: placeholderImg,
                  alt: "",
                  __typename: "Image",
                },
                images: [
                  {
                    id: "UHJvZHVjdEltYWdlOjEw",
                    url: placeholderImg,
                    alt: "",
                    __typename: "ProductImage",
                  },
                ],
                collections: [],
                category: {
                  id: "Q2F0ZWdvcnk6MTQ=",
                  name: "Juices",
                  __typename: "Category",
                },
                pricing: {
                  onSale: false,
                  discount: null,
                  priceRange: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 3,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 7,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  priceRangeUndiscounted: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 3,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 7,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  __typename: "ProductPricingInfo",
                },
                __typename: "Product",
              },
              __typename: "ProductCountableEdge",
            },
            {
              node: {
                id: "UHJvZHVjdDo3Nw==",
                name: "Power Juice",
                slug: "power-juice",
                thumbnail: {
                  url: placeholderImg,
                  alt: "",
                  __typename: "Image",
                },
                images: [
                  {
                    id: "UHJvZHVjdEltYWdlOjEy",
                    url: placeholderImg,
                    alt: "",
                    __typename: "ProductImage",
                  },
                ],
                collections: [],
                category: {
                  id: "Q2F0ZWdvcnk6MTQ=",
                  name: "Juices",
                  __typename: "Category",
                },
                pricing: {
                  onSale: false,
                  discount: null,
                  priceRange: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 3,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 7,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  priceRangeUndiscounted: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 3,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 7,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    __typename: "TaxedMoneyRange",
                  },
                  __typename: "ProductPricingInfo",
                },
                __typename: "Product",
              },
              __typename: "ProductCountableEdge",
            },
          ],
          __typename: "ProductCountableConnection",
        },
        __typename: "Category",
      },
      __typename: "Product",
    },
  },
};
