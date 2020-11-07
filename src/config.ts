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
  siteDescription: SITE_DESCRIPTION,
  sentryDSN: SENTRY_DSN,
  gtmEnabled: GTM_CODE,
  meiliSearchKey: MEILISEARCH_KEY,
  meiliSearchUrl: MEILISEARCH_URL ? new URL(MEILISEARCH_URL) : undefined,
  altConfig,
};
