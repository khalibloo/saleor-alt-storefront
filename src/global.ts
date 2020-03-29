import * as Sentry from "@sentry/browser";

import config from "./config";

export { client } from "./apollo";

if (["staging", "production"].includes(config.env)) {
  Sentry.init({
    dsn: "https://13f440bce1084c3397c480ee35ee1931@sentry.io/5178361",
    environment: config.env,
  });
}
