const placeholderImg = "https://via.placeholder.com/512";

// hint: regex to replace image urls "http://localhost:8000*(.+)"

export default {
  data: {
    shop: {
      name: "Saleor e-commerce",
      homepageCollection: {
        id: "Q29sbGVjdGlvbjox",
        name: "Summer collection",
        backgroundImage: {
          url: placeholderImg,
          alt: "",
          __typename: "Image",
        },
        products: {
          edges: [
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
                id: "UHJvZHVjdDo4Mw==",
                name: "Seaman Lager",
                slug: "seaman-lager",
                thumbnail: {
                  url: placeholderImg,
                  alt: "",
                  __typename: "Image",
                },
                images: [
                  {
                    id: "UHJvZHVjdEltYWdlOjE3",
                    url: placeholderImg,
                    alt: "",
                    __typename: "ProductImage",
                  },
                  {
                    id: "UHJvZHVjdEltYWdlOjE4",
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
                  {
                    id: "Q29sbGVjdGlvbjoy",
                    name: "Winter sale",
                    __typename: "Collection",
                  },
                ],
                category: {
                  id: "Q2F0ZWdvcnk6MTU=",
                  name: "Alcohol",
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
                        amount: 3,
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
            {
              node: {
                id: "UHJvZHVjdDoxMTA=",
                name: "Polo Shirt",
                slug: "polo-shirt-4",
                thumbnail: {
                  url: placeholderImg,
                  alt: "",
                  __typename: "Image",
                },
                images: [
                  {
                    id: "UHJvZHVjdEltYWdlOjM2",
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
                  {
                    id: "Q29sbGVjdGlvbjoy",
                    name: "Winter sale",
                    __typename: "Collection",
                  },
                ],
                category: {
                  id: "Q2F0ZWdvcnk6MTE=",
                  name: "Polo Shirts",
                  __typename: "Category",
                },
                pricing: {
                  onSale: false,
                  discount: null,
                  priceRange: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 30,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 30,
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
                        amount: 30,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 30,
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
                id: "UHJvZHVjdDo4Ng==",
                name: "White Parrot Cushion",
                slug: "white-parrot-cushion",
                thumbnail: {
                  url: placeholderImg,
                  alt: "",
                  __typename: "Image",
                },
                images: [
                  {
                    id: "UHJvZHVjdEltYWdlOjIy",
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
                  id: "Q2F0ZWdvcnk6MjI=",
                  name: "Homewares",
                  __typename: "Category",
                },
                pricing: {
                  onSale: true,
                  discount: {
                    currency: "USD",
                    gross: {
                      currency: "USD",
                      amount: 2,
                      __typename: "Money",
                    },
                    __typename: "TaxedMoney",
                  },
                  priceRange: {
                    start: {
                      gross: {
                        currency: "USD",
                        amount: 18,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 18,
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
                        amount: 20,
                        __typename: "Money",
                      },
                      __typename: "TaxedMoney",
                    },
                    stop: {
                      gross: {
                        currency: "USD",
                        amount: 20,
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
        __typename: "Collection",
      },
      __typename: "Shop",
    },
  },
};
