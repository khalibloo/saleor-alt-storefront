import * as Sentry from "@sentry/browser";

import config from "./config";
import { configResponsive } from "@umijs/hooks";

export { client } from "./apollo";

configResponsive({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
});

// configure sentry
if (["staging", "production"].includes(config.env)) {
  Sentry.init({
    dsn: "https://13f440bce1084c3397c480ee35ee1931@sentry.io/5178361",
    environment: config.env,
  });
}
