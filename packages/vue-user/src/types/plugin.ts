import type { AppConfig } from "@prefabs.tech/vue3-config";
import type { LocaleMessages, VueMessageType } from "@prefabs.tech/vue3-i18n";
import type { Pinia } from "pinia";
import type { Router } from "vue-router";

import { DefineComponent, VNode } from "vue";

interface DzangolabVueUserPluginOptions {
  config: AppConfig;
  notification?: (message: object | string | unknown) => void;
  pinia: Pinia;
  router: Router;
  termsComponent?: DefineComponent | string | VNode;
  translations?: LocaleMessages<VueMessageType>;
}

export type { DzangolabVueUserPluginOptions };
