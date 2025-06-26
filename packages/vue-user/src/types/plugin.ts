import type { AppConfig } from "@dzangolab/vue3-config";
import type { LocaleMessages, VueMessageType } from "@dzangolab/vue3-i18n";
import type { Pinia } from "pinia";
import { DefineComponent, VNode } from "vue";
import type { Router } from "vue-router";

interface DzangolabVueUserPluginOptions {
  config: AppConfig;
  notification?: (message: object | string | unknown) => void;
  pinia: Pinia;
  router: Router;
  termsComponent?: string | DefineComponent | VNode;
  translations?: LocaleMessages<VueMessageType>;
}

export type { DzangolabVueUserPluginOptions };
