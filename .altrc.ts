import { AddressInput, CountryCode } from "@/globalTypes";

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
  // if using saleor menu, overlay the menu item name on the image
  showTitleOverlay?: boolean;
  // name of saleor menu to use
  menuName?: string;
  // images can be used instead of a saleor menu
  images?: {
    imageUrl: string;
    linkUrl?: string;
    alt?: string;
    title?: string;
  }[];
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
}
export interface HomeSignupConfig {
  type: "signup";
  message?: string;
  buttonText?: string;
}
export interface HomeVSpacingConfig {
  type: "vertical-spacing";
  spacing: number | string;
}
interface AltConfig {
  name: String;
  // allow users to checkout without logging in?
  allowAnonCheckout: boolean;
  paymentGateways: {
    id: String;
    onPay: (
      amount: number,
      checkoutToken: String,
      onSuccess: (token: String, billingAddress: AddressInput) => void,
      onError: (errorMsg: String) => void,
      onCancel: () => void,
    ) => void;
  }[];
  homeLayout: (
    | HomeBannerConfig
    | HomeProductListConfig
    | HomeSignupConfig
    | HomeVSpacingConfig
  )[];
}

const altConfig: AltConfig = {
  name: "Alt Storefront",
  allowAnonCheckout: true,
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
      title: "Go Groceries",
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
      type: "banner",
      fullWidth: false,
      height: "300px",
      images: [
        {
          imageUrl: "https://via.placeholder.com/256",
          alt: "sample image",
          linkUrl: "https://saleor-alt.com",
          title: "External Image Example",
        },
        {
          imageUrl: "https://via.placeholder.com/300",
          alt: "sample image",
          linkUrl: "https://saleor-alt.com",
          title: "Placeholder 2",
        },
      ],
    },
    {
      type: "vertical-spacing",
      spacing: 24,
    },
    {
      type: "signup",
      message: "Join Us Today",
      buttonText: "Join",
    },
    {
      type: "vertical-spacing",
      spacing: 48,
    },
  ],
  paymentGateways: [
    {
      id: "mirumee.payments.dummy",
      onPay: (amount, checkoutToken, onSuccess, onError, onCancel) => {
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
  ],
};

export default altConfig;
