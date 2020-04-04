import { defineConfig } from "umi";

export default defineConfig({
  define: {
    APP_ENV: "production",
    ENDPOINT: "https://saleor-alt-core.herokuapp.com",
  },
});
