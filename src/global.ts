import * as Sentry from "@sentry/browser";
import { configResponsive } from "@umijs/hooks";
import { message } from "antd";
import { getIntl } from "umi";

import config from "./config";

export { client } from "./apollo";

configResponsive({
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
});

const intl = getIntl();
window.addEventListener("load", function() {
  const key = "offline";
  const offlineMsg = () =>
    message.error({
      content: intl.formatMessage({ id: "misc.offline.msg" }),
      duration: 20,
      key,
      onClose: offlineMsg,
    });
  window.addEventListener("offline", offlineMsg);

  window.addEventListener("online", () => {
    message.error({
      content: intl.formatMessage({ id: "misc.offline.msg" }),
      duration: 0.01,
      key,
    });
    message.success({
      content: intl.formatMessage({ id: "misc.online.msg" }),
    });
  });
});

// configure sentry
if (config.sentryDSN) {
  Sentry.init({
    dsn: config.sentryDSN,
    environment: config.env,
  });
}

// type declaration for Google Ecommerce dataLayer
declare global {
  interface Window {
    dataLayer: {
      event:
        | "add_payment_info"
        | "add_shipping_info"
        | "add_to_cart"
        | "add_to_wishlist"
        | "begin_checkout"
        | "generate_lead"
        | "purchase"
        | "refund"
        | "remove_from_cart"
        | "select_item"
        | "select_promotion"
        | "view_cart"
        | "view_item"
        | "view_item_list"
        | "view_promotion";
      ecommerce: {
        items: {
          item_name?: string;
          item_id?: string;
          price?: string;
          item_brand?: string;
          item_category?: string;
          item_category_2?: string;
          item_category_3?: string;
          item_category_4?: string;
          item_variant?: string;
          item_list_name?: string;
          item_list_id?: string;
          index?: number;
          quantity?: string | number;
        }[];
      };
    }[];
  }
}
