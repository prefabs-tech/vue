import type { MenuItem } from "./menu";
import type { AppConfig } from "@dzangolab/vue3-config";
import type { LocaleMessages, VueMessageType } from "@dzangolab/vue3-i18n";

interface DzangolabVue3LayoutConfig {
  mainMenu?: MenuItem[];
}

interface DzangolabVue3LayoutPluginOptions {
  config: AppConfig;
  translations?: LocaleMessages<VueMessageType>;
}

export type { DzangolabVue3LayoutConfig, DzangolabVue3LayoutPluginOptions };
