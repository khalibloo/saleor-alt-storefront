import { defineConfig } from "umi";
import path from "path";
import HtmlCriticalWebpackPlugin from "html-critical-webpack-plugin";

export default defineConfig({
  title: "Alt Storefront",
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
      href: "https://via.placeholder.com",
    },
  ],
  define: {
    APP_ENV: "default",
    ENDPOINT: "",
    SITE_NAME: "Alt Storefront",
  },
  theme: {
    "layout-header-background": "#fff",
    "layout-body-background": "#fff",
  },
  chainWebpack: (memo, {}) => {
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
