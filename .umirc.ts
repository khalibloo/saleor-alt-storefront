import { defineConfig } from "umi";

export default defineConfig({
  routes: [{ path: "/", component: "@/pages/index" }],
  define: {
    APP_ENV: "default",
    SITE_NAME: "Saleor Alt",
  },
});
