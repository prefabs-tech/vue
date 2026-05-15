import type { AppConfig } from "@prefabs.tech/vue3-config";
import type { Pinia } from "pinia";

interface PrefabsTechVueStripePluginOptions {
  config: AppConfig;
  pinia: Pinia;
}

export type { PrefabsTechVueStripePluginOptions };

export type * from "./config";
export type * from "./payment";
