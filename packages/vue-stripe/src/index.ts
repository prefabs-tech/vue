import type { App, Plugin } from "vue";

import type {
  PrefabsTechVueStripeConfig,
  PrefabsTechVueStripePluginOptions,
} from "./types";

import usePaymentStore from "./stores/payment";

export default {
  install: (app: App, options: PrefabsTechVueStripePluginOptions): void => {
    const config: PrefabsTechVueStripeConfig = options.config.stripe || {};

    const store = usePaymentStore(options.pinia);
    store.setConfig(config);
  },
} as Plugin;

export { usePaymentStore };

export { checkoutSession, getAxiosClient, getStatus } from "./api";

export type { CheckoutSessionPayload } from "./types/payment";
