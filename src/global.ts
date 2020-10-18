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
        | "view_promotion"
        | "sign_up"
        | "login"
        | "search";
      method?: string;
      search_term?: string;
      ecommerce?: {
        // currency code
        currency?: string;
        // total value
        value?: number | string;
        // coupon code
        coupon?: string;
        // shipping fee
        shipping?: number | string;
        // shipping method name
        shipping_tier?: string;
        // order ID
        transaction_id?: string;
        // name of store or sth
        affiliation?: string;
        // tax amount
        tax?: number | string;
        // promo details
        promotion_id?: string;
        promotion_name?: string;
        creative_name?: string;
        creative_slot?: string;
        location_id?: string;
        items?: {
          // name or ID must be given
          item_name?: string;
          // sku
          item_id?: string;
          price?: number | string;
          item_brand?: string;
          item_category?: string;
          item_category_2?: string;
          item_category_3?: string;
          item_category_4?: string;
          // variant name
          item_variant?: string;
          // collection/category/list name
          item_list_name?: string;
          item_list_id?: string;
          // index of item in the list
          index?: number;
          quantity?: number | string;
          //promo details
          promotion_id?: string;
          promotion_name?: string;
          creative_name?: string;
          creative_slot?: string;
          location_id?: string;
        }[];
      };
    }[];
  }
}
