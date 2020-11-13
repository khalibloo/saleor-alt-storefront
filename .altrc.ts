import { AddressInput, CountryCode } from "@/globalTypes";
import {
  cartQuery_me_checkout,
  cartQuery_me_checkout_billingAddress,
  cartQuery_me_checkout_lines,
  cartQuery_me_checkout_shippingAddress,
} from "@/queries/types/cartQuery";
import Logger from "@/utils/logger";
import { getProductName, getVariantName } from "@/utils/utils";

declare global {
  interface Window {
    TwoCoInlineCart: any;
  }
}

interface GoogleAnalyticsPromo {
  promotion_id?: string;
  promotion_name?: string;
  creative_name?: string;
  creative_slot?: string;
  location_id?: string;
}
export interface HomeBannerImage {
  imageUrl: string;
  linkUrl?: string;
  alt?: string;
  title?: string;
  googleAnalyticsPromoData?: GoogleAnalyticsPromo;
}
export interface HomeBannerConfig {
  type: "banner";
  height:
    | string
    | {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
      };
  fullWidth: boolean;
  // overlay the menu item name on the image
  showTitleOverlay?: boolean;
  // name of saleor menu to use
  menuName?: string;
  // images can be used instead of a saleor menu
  images?: HomeBannerImage[];
}
export interface HomeSplitBannerConfig {
  type: "split-banner";
  height:
    | string
    | {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
      };
  layout: {
    // xs: ""; // unused. will break into 2 rows
    // sm: ""; // unused. will break into 2 rows
    md: "1-2" | "1-1" | "2-1";
    lg: "1-2" | "1-1" | "2-1";
    xl: "1-2" | "1-1" | "2-1";
    xxl: "1-2" | "1-1" | "2-1";
  };
  gap?: number;
  // if using saleor menu, overlay the menu item name on the image
  showTitleOverlay?: boolean;
  // name of saleor menu to use
  menuName?: string;
  // images can be used instead of a saleor menu
  images?: HomeBannerImage[];
}
export interface HomeProductListConfig {
  type: "product-list";
  rows: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  shuffle: boolean;
  firstNProducts: number;
  collectionSlug?: string;
  categorySlug?: string;
  title?: string;
  showTitle: boolean;
  googleAnalyticsPromoData?: GoogleAnalyticsPromo;
}
export interface HomeCatalogListConfig {
  type: "catalog-list";
  rows: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  menuName: string;
  title?: string;
  useMenuNameAsTitle?: boolean;
  showNames: boolean;
  justify?: "start" | "end" | "center" | "space-around" | "space-between";
  gap?: number | string;
  googleAnalyticsPromoData?: GoogleAnalyticsPromo;
}
export interface HomeSignupConfig {
  type: "signup";
  message?: string;
  buttonText?: string;
  googleAnalyticsPromoData?: GoogleAnalyticsPromo;
}
export interface HomeVSpacingConfig {
  type: "vertical-spacing";
  spacing: number | string;
}
interface AltConfig {
  name: string;
  // allow users to checkout without logging in?
  showSearch: boolean;
  allowAnonCheckout: boolean;
  showCookieNotice: boolean;
  paymentGateways: {
    id: string;
    config?: any;
    onPay: (
      checkoutData: {
        checkout: cartQuery_me_checkout;
        email: string;
        totalPrice: number;
        billingAddress: cartQuery_me_checkout_billingAddress;
        shippingAddress: cartQuery_me_checkout_shippingAddress;
        shippingPrice: number;
        discountPrice: number;
        shippingMethod: string;
        currency: string;
        lines: cartQuery_me_checkout_lines[];
        checkoutToken: string;
        voucherCode: string;
        langCode: string;
      },
      config: any,
      onSuccess: (token: string, billingAddress?: AddressInput) => void,
      onError: (errorMsg: string) => void,
      onCancel: () => void,
    ) => void;
  }[];
  homeLayout: (
    | HomeBannerConfig
    | HomeSplitBannerConfig
    | HomeProductListConfig
    | HomeCatalogListConfig
    | HomeSignupConfig
    | HomeVSpacingConfig
  )[];
}

const altConfig: AltConfig = {
  name: SITE_NAME,
  showSearch: true,
  allowAnonCheckout: true,
  showCookieNotice: true,
  homeLayout: [
    {
      type: "banner",
      fullWidth: true,
      height: "400px",
      menuName: "navbar",
      showTitleOverlay: true,
    },
    {
      type: "vertical-spacing",
      spacing: 24,
    },
    {
      type: "product-list",
      categorySlug: "groceries",
      firstNProducts: 10,
      shuffle: true,
      title: "Groceries",
      showTitle: true,
      rows: {
        xs: 4,
        sm: 3,
        md: 2,
        lg: 2,
        xl: 1,
        xxl: 1,
      },
    },
    {
      type: "vertical-spacing",
      spacing: 24,
    },
    {
      type: "catalog-list",
      menuName: "navbar",
      title: "Featured Collections",
      useMenuNameAsTitle: false,
      rows: {
        xs: 2,
        sm: 2,
        md: 2,
        lg: 1,
        xl: 1,
        xxl: 1,
      },
      showNames: true,
      justify: "center",
      gap: 48,
    },
    {
      type: "vertical-spacing",
      spacing: 48,
    },
    {
      type: "banner",
      fullWidth: false,
      height: "300px",
      images: [
        {
          imageUrl: "https://via.placeholder.com/256",
          alt: "sample image",
          linkUrl: "https://saleor-alt.com",
          title: "External Image Example",
          googleAnalyticsPromoData: {
            promotion_id: "demo123",
            promotion_name: "demo promotion",
            creative_name: "Launch the Demo",
            creative_slot: "1",
            location_id: "split_banner",
          },
        },
        {
          imageUrl: "https://via.placeholder.com/300",
          alt: "sample image",
          linkUrl: "https://saleor-alt.com",
          title: "Placeholder 2",
          googleAnalyticsPromoData: {
            promotion_id: "pwa123",
            promotion_name: "pwa promotion",
            creative_name: "Install the PWA",
            creative_slot: "2",
            location_id: "split_banner",
          },
        },
      ],
    },
    {
      type: "vertical-spacing",
      spacing: 24,
    },
    {
      type: "split-banner",
      height: "300px",
      layout: {
        md: "1-1",
        lg: "1-2",
        xl: "1-2",
        xxl: "1-1",
      },
      gap: 32,
      menuName: "navbar",
    },
    {
      type: "vertical-spacing",
      spacing: 24,
    },
    {
      type: "signup",
      message: "Join Us Today",
      buttonText: "Create Your Account",
    },
    {
      type: "vertical-spacing",
      spacing: 48,
    },
  ],
  paymentGateways: [
    {
      id: "mirumee.payments.dummy",
      onPay: (checkoutData, config, onSuccess, onError, onCancel) => {
        // configure payment gateway
        // open payment gateway popup
        // if success, call onSuccess
        // if error, call onError
        // if canceled by user, call onCancel
        onSuccess("fully-charged", {
          firstName: "Peach",
          lastName: "Toadstool",
          streetAddress1: "123 Castle Street",
          streetAddress2: "Dungeon Floor",
          city: "COOPA ISLAND",
          country: CountryCode.FI,
        });
      },
    },
    {
      id: "khalibloo.payments.2checkout",
      config: {
        merchantCode: TCO_MERCHANT_CODE,
      },
      onPay: (
        {
          email,
          checkoutToken,
          billingAddress,
          shippingAddress,
          lines,
          currency,
          langCode,
          shippingPrice,
          shippingMethod,
          voucherCode,
        },
        config,
        onSuccess,
        onError,
        onCancel,
      ) => {
        // configure payment gateway
        if (!config?.merchantCode) {
          Logger.error("2Checkout: Merchant code not set.");
          return null;
        }
        try {
          window.TwoCoInlineCart.setup.setMerchant(config.merchantCode);

          // use dynamic products, not those in 2CO control panel
          window.TwoCoInlineCart.setup.setMode("DYNAMIC");
          window.TwoCoInlineCart.cart.setCurrency(currency);
          window.TwoCoInlineCart.cart.setLanguage(langCode);
          window.TwoCoInlineCart.cart.setOrderExternalRef(checkoutToken);

          // add products
          lines.forEach(line => {
            const productName = getProductName(line.variant.product);
            const variantName = getVariantName(line.variant);
            window.TwoCoInlineCart.products.add({
              name: variantName
                ? `${productName} (${variantName})`
                : productName,
              quantity: line.quantity,
              price: line.variant.pricing?.price?.gross.amount,
              tangible: true,
            });
          });
          window.TwoCoInlineCart.products.add({
            name: shippingMethod,
            price: shippingPrice,
            type: "SHIPPING",
          });

          // set billing address
          window.TwoCoInlineCart.billing.setData({
            name: `${billingAddress.firstName} ${billingAddress.lastName}`,
            email,
            phone: billingAddress.phone,
            country: billingAddress.country.code,
            city: billingAddress.city,
            state: billingAddress.countryArea,
            zip: billingAddress.postalCode,
            address: billingAddress.streetAddress1,
            address2: billingAddress.streetAddress2,
            "company-name": billingAddress.companyName,
            // "fiscal-code",
            // "tax-office"
          });

          // set shipping address
          window.TwoCoInlineCart.billing.setData({
            name: `${shippingAddress.firstName} ${shippingAddress.lastName}`,
            email,
            phone: shippingAddress.phone,
            country: shippingAddress.country.code,
            city: shippingAddress.city,
            state: shippingAddress.countryArea,
            zip: shippingAddress.postalCode,
            address: shippingAddress.streetAddress1,
            address2: shippingAddress.streetAddress2,
          });

          // vouchers not yet supported
          // if (voucherCode) {
          //   window.TwoCoInlineCart.cart.addCoupon(voucherCode);
          // }

          // open payment gateway popup
          window.TwoCoInlineCart.cart.checkout();

          // if success, call onSuccess
          // if error, call onError
          // if canceled by user, call onCancel
          let hasPaid = false;
          window.TwoCoInlineCart.events.subscribe("payment:finalized", () => {
            Logger.log("payment:finalized triggered");
            hasPaid = true;
            onSuccess("fully-charged");
          });
          window.TwoCoInlineCart.events.subscribe("cart:opened", () => {
            Logger.log("cart:opened triggered");
          });
          window.TwoCoInlineCart.events.subscribe("cart:closed", () => {
            Logger.log("cart:closed triggered");
            // window.document.body.se;
            if (!hasPaid) {
              onCancel();
            }
          });
          window.TwoCoInlineCart.events.subscribe(
            "fulfillment:finalized",
            () => {
              Logger.log("fulfillment:finalized triggered");
            },
          );
        } catch (err) {
          onError("Payment failed: Please try again later");
        }
      },
    },
  ],
};

export default altConfig;
