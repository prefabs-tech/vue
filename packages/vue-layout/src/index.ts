import { prependMessages } from "@dzangolab/vue3-i18n";
import { inject } from "vue";

import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import Copyright from "./components/Copyright.vue";
import Layout from "./Layout.vue";
import BasicLayout from "./layouts/BasicLayout.vue";
import NullLayout from "./layouts/NullLayout.vue";
import messages from "./locales/messages.json";

import type { LayoutType } from "./types";
import type { LocaleMessages, VueMessageType } from "@dzangolab/vue3-i18n";
import type { App } from "vue";

const __dzangolabVueLayoutTranslations = Symbol.for(
  "dzangolab.vue-layout.translations"
);

const useTranslations = () => {
  return inject(__dzangolabVueLayoutTranslations, messages);
};

const plugin = {
  install: (
    app: App,
    options: { translations?: LocaleMessages<VueMessageType> }
  ): void => {
    app.component("Layout", Layout);

    const translations: LocaleMessages<VueMessageType> = options?.translations
      ? prependMessages(messages, options.translations)
      : messages;

    app.provide(__dzangolabVueLayoutTranslations, translations);
  },
};

export default plugin;

export {
  AppFooter,
  AppHeader,
  BasicLayout,
  Copyright,
  Layout,
  NullLayout,
  useTranslations,
};

export type { LayoutType };
