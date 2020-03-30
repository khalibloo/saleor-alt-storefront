import { defineConfig } from "umi";

export default defineConfig({
  title: "Alt Storefront",
  locale: {
    default: "en-US",
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: "-",
  },
  define: {
    APP_ENV: "default",
    SITE_NAME: "Alt Storefront",
  },
  theme: {
    "layout-header-background": "#fff",
    "layout-body-background": "#fff",
  },
});
