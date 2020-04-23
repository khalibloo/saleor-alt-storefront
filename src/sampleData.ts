import placeholderImg from "@/res/img/512.jpg";
import moment from "moment";

const sampleProduct = {
  id: "meow",
  name: "Sample Product",
  slug: "sample-product",
  descriptionJson:
    '{"blocks": [{"key": "", "data": {}, "text": "Fell straight from the tree, on to Newton\\u2019s head, then into the bottle. The autumn taste of English apples. Brought to you by gravity.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
  thumbnail: {
    alt: "sample image text",
    url: placeholderImg,
  },
  category: {
    id: "blah",
    name: "Sample Category",
  },
  pricing: {
    priceRange: {
      start: {
        gross: {
          amount: 30,
          currency: "USD",
        },
      },
      stop: {
        gross: {
          amount: 60,
          currency: "USD",
        },
      },
    },
  },
};

const sampleAddress = {
  id: 1,
  firstName: "Courage",
  lastName: "the Cowardly Dog",
  phone: "+1234567890",
  streetAddress1: "123 Middle of Nowhere",
  streetAddress2: null,
  cityArea: null,
  city: "Some City",
  postalCode: "12345",
  countryArea: "Some State",
  country: "MU",
};

const sampleOrder = {
  id: 1,
  date: moment().toISOString(),
  number: "27",
  total: { gross: { currency: "USD", amount: 314 } },
  lines: [
    {
      id: 1,
      quantity: 2,
      unitPrice: {
        gross: {
          currency: "USD",
          amount: 24.99,
        },
      },
      variant: {
        id: 1,
        images: [
          {
            alt: "sample image text",
            url: placeholderImg,
          },
        ],
        pricing: {
          price: {
            gross: {
              currency: "USD",
              amount: 18.9,
            },
          },
        },
        product: {
          id: 1,
          name: "Sample Product",
          thumbnail: {
            alt: "sample image text",
            url: placeholderImg,
          },
        },
      },
    },
    {
      id: 2,
      quantity: 1,
      unitPrice: {
        gross: {
          currency: "USD",
          amount: 19.9,
        },
      },
      variant: {
        id: 1,
        images: [
          {
            alt: "sample image text",
            url: placeholderImg,
          },
        ],
        pricing: {
          price: {
            gross: {
              currency: "USD",
              amount: 18.9,
            },
          },
        },
        product: {
          id: 2,
          name: "Another Sample Product",
          thumbnail: {
            alt: "sample image text",
            url: placeholderImg,
          },
        },
      },
    },
  ],
};

const sampleCategory = {
  id: 1,
  name: "Sample Category",
  slug: "sample-category",
  backgroundImage: {
    alt: "Sample banner",
    url: placeholderImg,
  },
  products: [
    sampleProduct,
    sampleProduct,
    sampleProduct,
    sampleProduct,
    sampleProduct,
  ],
  level: 0,
};

export { sampleProduct, sampleAddress, sampleOrder, sampleCategory };
