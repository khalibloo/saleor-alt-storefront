module.exports = {
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  globals: {
    APP_ENV: "test",
    SITE_NAME: "Alt Storefront",
    ENDPOINT: "http://localhost:8000",
  },
};
