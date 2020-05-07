import { AuthModelState } from "umi";

export { AuthModelState };

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    auth?: boolean;
  };
}

export interface ConnectState {
  auth: AuthModelState;
  loading: Loading;
}
