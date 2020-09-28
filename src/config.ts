import altConfig from "../.altrc";

//setup client config data
if (APP_ENV !== "production") {
  console.log("Environment: ", APP_ENV);
  console.log("================");
}

export default {
  env: APP_ENV,
  apiEndpoint: ENDPOINT,
  siteName: SITE_NAME,
  altConfig,
};
