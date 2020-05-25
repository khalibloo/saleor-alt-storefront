import { AuthModelState } from "umi";
import { CartModelState } from "./cart";

export { AuthModelState, CartModelState };

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    auth?: boolean;
    cart?: boolean;
  };
}

export interface ConnectState {
  auth: AuthModelState;
  cart: CartModelState;
  loading: Loading;
}
