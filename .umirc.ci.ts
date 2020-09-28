import { defineConfig } from "umi";

export default defineConfig({
  define: {
    APP_ENV: "ci",
    ENDPOINT: "http://localhost:8000/graphql/",
  },
});
