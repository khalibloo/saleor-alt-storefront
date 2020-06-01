const placeholderImg = "https://via.placeholder.com/512";

// hint: regex to replace image urls "http://localhost:8000*(.+)"

export const categoryDetailQuery = {
  data: {
    category: {
      id: "Q2F0ZWdvcnk6MTQ=",
      name: "Juices",
      slug: "juices",
      level: 1,
      __typename: "Category",
      backgroundImage: {
        url: placeholderImg,
        alt: "",
        __typename: "Image",
      },
    },
  },
};

export const collectionsQuery = {
  data: {
    collections: {
      edges: [
        {
          node: {
            id: "Q29sbGVjdGlvbjox",
            name: "Summer collection",
            slug: "summer-collection",
            __typename: "Collection",
          },
          __typename: "CollectionCountableEdge",
        },
        {
          node: {
            id: "Q29sbGVjdGlvbjoy",
            name: "Winter sale",
            slug: "winter-sale",
            __typename: "Collection",
          },
          __typename: "CollectionCountableEdge",
        },
      ],
      __typename: "CollectionCountableConnection",
    },
  },
};

export const categoryTreeQuery = {
  data: {
    categories: {
      edges: [
        {
          node: {
            id: "Q2F0ZWdvcnk6Nw==",
            name: "Accessories",
            slug: "accessories",
            level: 0,
            __typename: "Category",
            children: {
              edges: [
                {
                  node: {
                    id: "Q2F0ZWdvcnk6MjA=",
                    name: "Paints",
                    slug: "paints",
                    level: 1,
                    __typename: "Category",
                    children: {
                      edges: [],
                      __typename: "CategoryCountableConnection",
                    },
                  },
                  __typename: "CategoryCountableEdge",
                },
                {
                  node: {
                    id: "Q2F0ZWdvcnk6MjI=",
                    name: "Homewares",
                    slug: "homewares",
                    level: 1,
                    __typename: "Category",
                    children: {
                      edges: [],
                      __typename: "CategoryCountableConnection",
                    },
                  },
                  __typename: "CategoryCountableEdge",
                },
              ],
              __typename: "CategoryCountableConnection",
            },
          },
          __typename: "CategoryCountableEdge",
        },
        {
          node: {
            id: "Q2F0ZWdvcnk6OA==",
            name: "Groceries",
            slug: "groceries",
            level: 0,
            __typename: "Category",
            children: {
              edges: [
                {
                  node: {
                    id: "Q2F0ZWdvcnk6MTQ=",
                    name: "Juices",
                    slug: "juices",
                    level: 1,
                    __typename: "Category",
                    children: {
                      edges: [],
                      __typename: "CategoryCountableConnection",
                    },
                  },
                  __typename: "CategoryCountableEdge",
                },
                {
                  node: {
                    id: "Q2F0ZWdvcnk6MTU=",
                    name: "Alcohol",
                    slug: "alcohol",
                    level: 1,
                    __typename: "Category",
                    children: {
                      edges: [],
                      __typename: "CategoryCountableConnection",
                    },
                  },
                  __typename: "CategoryCountableEdge",
                },
              ],
              __typename: "CategoryCountableConnection",
            },
          },
          __typename: "CategoryCountableEdge",
        },
        {
          node: {
            id: "Q2F0ZWdvcnk6OQ==",
            name: "Apparel",
            slug: "apparel",
            level: 0,
            __typename: "Category",
            children: {
              edges: [
                {
                  node: {
                    id: "Q2F0ZWdvcnk6MTA=",
                    name: "T-shirts",
                    slug: "t-shirts",
                    level: 1,
                    __typename: "Category",
                    children: {
                      edges: [],
                      __typename: "CategoryCountableConnection",
                    },
                  },
                  __typename: "CategoryCountableEdge",
                },
                {
                  node: {
                    id: "Q2F0ZWdvcnk6MTE=",
                    name: "Polo Shirts",
                    slug: "polo-shirts",
                    level: 1,
                    __typename: "Category",
                    children: {
                      edges: [],
                      __typename: "CategoryCountableConnection",
                    },
                  },
                  __typename: "CategoryCountableEdge",
                },
                {
                  node: {
                    id: "Q2F0ZWdvcnk6MTI=",
                    name: "Hoodies",
                    slug: "hoodies",
                    level: 1,
                    __typename: "Category",
                    children: {
                      edges: [],
                      __typename: "CategoryCountableConnection",
                    },
                  },
                  __typename: "CategoryCountableEdge",
                },
                {
                  node: {
                    id: "Q2F0ZWdvcnk6MTM=",
                    name: "Footwear",
                    slug: "footwear",
                    level: 1,
                    __typename: "Category",
                    children: {
                      edges: [],
                      __typename: "CategoryCountableConnection",
                    },
                  },
                  __typename: "CategoryCountableEdge",
                },
              ],
              __typename: "CategoryCountableConnection",
            },
          },
          __typename: "CategoryCountableEdge",
        },
      ],
      __typename: "CategoryCountableConnection",
    },
  },
};

export const ProductsQuery = {
  data: {
    minPrice: {
      edges: [
        {
          node: {
            id: "UHJvZHVjdDo3Mg==",
            pricing: {
              priceRange: {
                start: {
                  gross: {
                    currency: "USD",
                    amount: 3,
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
    maxPrice: {
      edges: [
        {
          node: {
            id: "UHJvZHVjdDo4Nw==",
            pricing: {
              priceRange: {
                start: {
                  gross: {
                    currency: "USD",
                    amount: 59,
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
    attributes: {
      edges: [
        {
          node: {
            id: "QXR0cmlidXRlOjE1",
            name: "Bottle Size",
            slug: "bottle-size",
            values: [
              {
                id: "QXR0cmlidXRlVmFsdWU6NDY=",
                name: "500ml",
                slug: "500ml",
                __typename: "AttributeValue",
              },
              {
                id: "QXR0cmlidXRlVmFsdWU6NDc=",
                name: "1l",
                slug: "1l",
                __typename: "AttributeValue",
              },
              {
                id: "QXR0cmlidXRlVmFsdWU6NDg=",
                name: "2l",
                slug: "2l",
                __typename: "AttributeValue",
              },
            ],
            __typename: "Attribute",
          },
          __typename: "AttributeCountableEdge",
        },
        {
          node: {
            id: "QXR0cmlidXRlOjE2",
            name: "Flavor",
            slug: "flavor",
            values: [
              {
                id: "QXR0cmlidXRlVmFsdWU6NDk=",
                name: "Orange",
                slug: "orange",
                __typename: "AttributeValue",
              },
              {
                id: "QXR0cmlidXRlVmFsdWU6NTA=",
                name: "Banana",
                slug: "banana",
                __typename: "AttributeValue",
              },
              {
                id: "QXR0cmlidXRlVmFsdWU6NTE=",
                name: "Bean",
                slug: "bean",
                __typename: "AttributeValue",
              },
              {
                id: "QXR0cmlidXRlVmFsdWU6NTI=",
                name: "Carrot",
                slug: "carrot",
                __typename: "AttributeValue",
              },
              {
                id: "QXR0cmlidXRlVmFsdWU6NTM=",
                name: "Sprouty",
                slug: "sprouty",
                __typename: "AttributeValue",
              },
              {
                id: "QXR0cmlidXRlVmFsdWU6NTQ=",
                name: "Salty, like the tears of your enemy",
                slug: "salty-like-the-tears-of-your-enemy",
                __typename: "AttributeValue",
              },
              {
                id: "QXR0cmlidXRlVmFsdWU6MQ==",
                name: "Pineapple",
                slug: "pineapple",
                __typename: "AttributeValue",
              },
              {
                id: "QXR0cmlidXRlVmFsdWU6Mg==",
                name: "Coconut",
                slug: "coconut",
                __typename: "AttributeValue",
              },
              {
                id: "QXR0cmlidXRlVmFsdWU6Mw==",
                name: "Apple",
                slug: "apple",
                __typename: "AttributeValue",
              },
            ],
            __typename: "Attribute",
          },
          __typename: "AttributeCountableEdge",
        },
      ],
      __typename: "AttributeCountableConnection",
    },
    products: {
      edges: [
        {
          cursor: "WyJBcHBsZSBKdWljZSIsICJhcHBsZS1qdWljZSJd",
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
          cursor: "WyJCYW5hbmEgSnVpY2UiLCAiYmFuYW5hLWp1aWNlIl0=",
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
          cursor: "WyJCZWFuIEp1aWNlIiwgImJlYW4tanVpY2UiXQ==",
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
          cursor: "WyJDYXJyb3QgSnVpY2UiLCAiY2Fycm90LWp1aWNlIl0=",
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
          cursor: "WyJDb2NvbnV0IEp1aWNlIiwgImNvY29udXQtanVpY2UiXQ==",
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
          cursor: "WyJHcmVlbiBKdWljZSIsICJncmVlbi1qdWljZSJd",
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
          cursor: "WyJPcmFuZ2UgSnVpY2UiLCAib3JhbmdlLWp1aWNlIl0=",
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
          cursor: "WyJQaW5lYXBwbGUgSnVpY2UiLCAicGluZWFwcGxlLWp1aWNlIl0=",
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
          cursor: "WyJQb3dlciBKdWljZSIsICJwb3dlci1qdWljZSJd",
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
  },
};
