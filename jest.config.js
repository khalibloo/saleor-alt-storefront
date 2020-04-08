module.exports = {
  // NOTE: ts-jest breaks our defines and env vars
  // preset doesnt work correctly. doesnt set testEnv
  // preset: "jest-playwright-preset",
  testEnvironment: "jest-playwright-preset",
  globalSetup: "./global-setup.js",
  // we need teardown to terminate the process when testing completed
  globalTeardown: "./global-teardown.js",
  setupFilesAfterEnv: ["expect-playwright"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  globals: {
    APP_ENV: "test",
    SITE_NAME: "Alt Storefront",
    ENDPOINT: "http://localhost:8000",
  },
};
