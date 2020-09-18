import { AddressInput, CountryCode } from "@/globalTypes";

interface AltConfig {
  name: String;
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
}

const altConfig: AltConfig = {
  name: "Alt Storefront",
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
