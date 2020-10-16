import { defineConfig } from "umi";

export default defineConfig({
  metas: [
    {
      name: "google-site-verification",
      content: "PhT8Ba8zCBvr-qWPpYGUpU_yNLwDpT7nnK3dePaxv3M",
    },
  ],
  define: {
    APP_ENV: "production",
    ENDPOINT: "https://saleor-alt-core.herokuapp.com/graphql/",
  },
});
