import placeholderImg from "@/res/img/512.jpg";

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

export { sampleProduct, sampleAddress };
