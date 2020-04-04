const sampleProduct = {
  id: "meow",
  name: "Sample Product",
  slug: "sample-product",
  descriptionJson:
    '{"blocks": [{"key": "", "data": {}, "text": "Fell straight from the tree, on to Newton\\u2019s head, then into the bottle. The autumn taste of English apples. Brought to you by gravity.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
  thumbnail: {
    alt: "sample image text",
    url: "https://via.placeholder.com/512.jpg",
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

export { sampleProduct };
