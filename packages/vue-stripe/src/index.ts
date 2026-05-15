import type { App, Plugin } from "vue";

import { inject } from "vue";

import type {
  PrefabsTechVueStripeConfig,
  PrefabsTechVueStripePluginOptions,
} from "./types";

import usePaymentStore from "./stores/payment";

const STRIPE_CONFIG_KEY = Symbol.for("prefabs.vue-stripe.config");

export default {
  install: (app: App, options: PrefabsTechVueStripePluginOptions): void => {
    const config = options.config.stripe;

    app.provide(STRIPE_CONFIG_KEY, config);
  },
} as Plugin;

export const useStripeConfig = () => {
  return inject<PrefabsTechVueStripeConfig>(STRIPE_CONFIG_KEY);
};

export { usePaymentStore };

export type { CheckoutSessionPayload } from "./types/payment";
