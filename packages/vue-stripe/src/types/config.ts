import type { RouteOverrides } from "./router";
interface PrefabsTechVueStripeConfig {
  apiRoutes?: {
    checkoutSession?: string;
    status?: string;
  };
  routes?: RouteOverrides;
}

declare module "@prefabs.tech/vue3-config" {
  export interface AppConfig {
    stripe?: PrefabsTechVueStripeConfig;
  }
}

export type { PrefabsTechVueStripeConfig };
