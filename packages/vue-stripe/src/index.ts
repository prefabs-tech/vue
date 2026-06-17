import type { LocaleMessages, VueMessageType } from "@prefabs.tech/vue3-i18n";
import type { App, Plugin } from "vue";

import { prependMessages } from "@prefabs.tech/vue3-i18n";
import { inject } from "vue";

import type {
  PrefabsTechVueStripeConfig,
  PrefabsTechVueStripePluginOptions,
} from "./types";

import messages from "./locales/messages.json";
import updateRouter from "./router";
import usePaymentStore from "./stores/payment";
import CancelledPage from "./views/payment/CancelledPage.vue";
import SuccessPage from "./views/payment/SuccessPage.vue";

const __prefabsTechVueStripeTranslations = Symbol.for(
  "prefabs.tech.vue-stripe.translations",
);

export default {
  install: (app: App, options: PrefabsTechVueStripePluginOptions): void => {
    const config: PrefabsTechVueStripeConfig = options.config.stripe || {};

    updateRouter(options.router, config);

    const store = usePaymentStore(options.pinia);
    store.setConfig(config);

    const translations = options?.translations
      ? prependMessages(messages, options.translations)
      : messages;

    app.provide(__prefabsTechVueStripeTranslations, translations);
  },
} as Plugin;

const useTranslations = () => {
  return inject<LocaleMessages<VueMessageType>>(
    __prefabsTechVueStripeTranslations,
    messages,
  );
};

export { CancelledPage, SuccessPage, usePaymentStore, useTranslations };

export { checkoutSession, getAxiosClient, getStatus } from "./api";

export type { CheckoutSessionPayload } from "./types/payment";
