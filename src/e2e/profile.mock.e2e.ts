// const placeholderImg = "https://via.placeholder.com/512";

// hint: regex to replace image urls "http://localhost:8000*(.+)"

export const profileQuery = {
  data: {
    me: {
      id: "VXNlcjozMA==",
      email: "peach@example.com",
      firstName: "Peach",
      lastName: "Toadstool",
      isStaff: false,
      metadata: [],
      __typename: "User",
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
    },
  },
};
