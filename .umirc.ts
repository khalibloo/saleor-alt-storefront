import { defineConfig } from "umi";
import path from "path";
import HtmlCriticalWebpackPlugin from "html-critical-webpack-plugin";
import AntdDayjsWebpackPlugin from "antd-dayjs-webpack-plugin";
import { GenerateSW } from "workbox-webpack-plugin";

const useDark = false;
// uncomment to use dark theme for users who prefer dark
// const useDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
export default defineConfig({
  title: process.env.SITE_NAME || "Alt Storefront",
  antd: {
    dark: useDark,
  },
  analytics: {
    ga: process.env.GA_CODE,
    // baidu: process.env.BAIDU_CODE,
  },
  dva: {
    immer: true,
    hmr: true,
  },
  locale: {
    default: "en-US",
    antd: true,
    title: true,
    baseNavigator: false,
    baseSeparator: "-",
  },
  links: [
    {
      rel: "preconnect",
      href: process.env.ENDPOINT_ORIGIN,
    },
    {
      rel: "preconnect",
      href: process.env.STORAGE_ORIGIN,
    },
  ],
  metas: [
    // {
    //   name: "viewport",
    //   content: "width=device-width, initial-scale=1",
    // },
  ],
  define: {
    APP_ENV: "default",
    ENDPOINT: process.env.ENDPOINT,
    SENTRY_DSN: process.env.SENTRY_DSN,
    GTM_CODE: process.env.GTM_CODE,
    SITE_NAME: process.env.SITE_NAME || "Alt Storefront",
    SITE_DESCRIPTION:
      process.env.SITE_DESCRIPTION ||
      "An alternate storefront for the saleor ecommerce platform",
  },
  theme: useDark
    ? {}
    : {
        "layout-header-background": "#fff",
        "layout-body-background": "#fff",
        "layout-footer-background": "#eee",
        "text-color-secondary": "#0009",
      },
  chainWebpack: (memo, {}) => {
    memo.plugin("dayjs").use(AntdDayjsWebpackPlugin);
    memo
      .plugin("critical")
      .use(HtmlCriticalWebpackPlugin)
      .init(
        (Plugin, args) =>
          new HtmlCriticalWebpackPlugin({
            base: path.resolve(__dirname, "dist"),
            src: "index.html",
            dest: "index.html",
            inline: true,
            minify: true,
            extract: true,
            width: 375,
            height: 565,
            penthouse: {
              blockJSRequests: false,
            },
          }),
      );
    memo.plugin("workbox").use(GenerateSW);
  },
});
