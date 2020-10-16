import { defineConfig } from "umi";
import path from "path";
import HtmlCriticalWebpackPlugin from "html-critical-webpack-plugin";
import AntdDayjsWebpackPlugin from "antd-dayjs-webpack-plugin";

const useDark = false;
// uncomment to use dark theme for users who prefer dark
// const useDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
export default defineConfig({
  title: "Alt Storefront",
  antd: {
    dark: useDark,
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
  ],
  metas: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
  define: {
    APP_ENV: "default",
    ENDPOINT: process.env.ENDPOINT,
    SITE_NAME: "Alt Storefront",
    SITE_DESCRIPTION:
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
  },
});
