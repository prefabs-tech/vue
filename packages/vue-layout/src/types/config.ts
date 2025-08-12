import type { MenuItem } from "./menu";
import type { AppConfig } from "@prefabs.tech/vue3-config";
import type { LocaleMessages, VueMessageType } from "@prefabs.tech/vue3-i18n";

interface PrefabsTechVue3LayoutConfig {
  homeRoute?: "home" | string;
  localeSwitcher: {
    showBadges: true,
  },
  logo?: string;
  logoAlt?: string;
  logoRoute?: string;
  mainMenu?: MenuItem[];
}

interface PrefabsTechVue3LayoutPluginOptions {
  config: AppConfig;
  translations?: LocaleMessages<VueMessageType>;
}

export type { PrefabsTechVue3LayoutConfig, PrefabsTechVue3LayoutPluginOptions };
