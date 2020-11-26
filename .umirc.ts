import { defineConfig } from "umi";
// import path from "path";
// import HtmlCriticalWebpackPlugin from "html-critical-webpack-plugin";
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
    baidu: process.env.BAIDU_CODE,
  },
  // chunks: ["vendors", "umi"],
  dva: {
    immer: true,
    hmr: true,
  },
  dynamicImport: { loading: "@/components/Loader" },
  extraPostCSSPlugins: [require("tailwindcss")],
  hash: true,
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
      href: process.env.API_ORIGIN,
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
  scripts: [
    `(function (document, src, libName, config) {
      var script             = document.createElement('script');
      script.src             = src;
      script.async           = true;
      var firstScriptElement = document.getElementsByTagName('script')[0];
      script.onload          = function () {
          for (var namespace in config) {
              if (config.hasOwnProperty(namespace)) {
                  window[libName].setup.setConfig(namespace, config[namespace]);
              }
          }
          window[libName].register();
      };

      firstScriptElement.parentNode.insertBefore(script, firstScriptElement);
  })(
    document,
    'https://secure.avangate.com/checkout/client/twoCoInlineCart.js',
    'TwoCoInlineCart',
    {
      "app":{"merchant":"${process.env.TCO_MERCHANT_CODE}","iframeLoad":"checkout"},
      "cart":{"host":"https:\/\/secure.2checkout.com","customization":"inline"}
    }
  );`,
  ],
  define: {
    APP_ENV: "default",
    API_URI: process.env.API_URI,
    GTM_CODE: process.env.GTM_CODE,
    MEILISEARCH_URL: process.env.MEILISEARCH_URL,
    MEILISEARCH_KEY: process.env.MEILISEARCH_KEY,
    SENTRY_DSN: process.env.SENTRY_DSN,
    SITE_NAME: process.env.SITE_NAME || "Alt Storefront",
    SITE_DESCRIPTION:
      process.env.SITE_DESCRIPTION ||
      "An alternate storefront for the saleor ecommerce platform",
    TCO_MERCHANT_CODE: process.env.TCO_MERCHANT_CODE,
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
    // memo.merge({
    //   optimization: {
    //     minimize: true,
    //     splitChunks: {
    //       chunks: "all",
    //       minSize: 30000,
    //       minChunks: 3,
    //       automaticNameDelimiter: ".",
    //       cacheGroups: {
    //         vendor: {
    //           name: "vendors",
    //           test({ resource }) {
    //             return /[\\/]node_modules[\\/]/.test(resource);
    //           },
    //           priority: 10,
    //         },
    //       },
    //     },
    //   },
    // });
    memo.plugin("dayjs").use(AntdDayjsWebpackPlugin);
    // memo
    //   .plugin("critical")
    //   .use(HtmlCriticalWebpackPlugin)
    //   .init(
    //     (Plugin, args) =>
    //       new HtmlCriticalWebpackPlugin({
    //         base: path.resolve(__dirname, "dist"),
    //         src: "index.html",
    //         dest: "index.html",
    //         inline: true,
    //         minify: true,
    //         extract: true,
    //         width: 375,
    //         height: 565,
    //         penthouse: {
    //           blockJSRequests: false,
    //         },
    //       }),
    //   );
    memo.plugin("workbox").use(GenerateSW);
  },
});
