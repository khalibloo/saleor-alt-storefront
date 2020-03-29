//setup client config data
console.log("Environment: ", APP_ENV);
console.log("================");

export default {
  env: APP_ENV,
  endpoint: ENDPOINT,
  gqlEndpoint: ENDPOINT + "/graphql/",
  siteName: SITE_NAME,
};
