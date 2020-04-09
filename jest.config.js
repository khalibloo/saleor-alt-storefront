const testMatchTypes = ["spec", "test"];
const testMatchPrefix = "";
module.exports = {
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  testMatch: [
    `${testMatchPrefix}**/?*.(${testMatchTypes.join("|")}).(j|t)s?(x)`,
  ],
  globals: {
    APP_ENV: "test",
    SITE_NAME: "Alt Storefront",
    ENDPOINT: "http://localhost:8000",
  },
};
