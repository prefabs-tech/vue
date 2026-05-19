import type { AxiosInstance } from "axios";

import type { RouteOverrides } from "./router";

interface PrefabsTechVueStripeConfig {
  apiRoutes?: {
    checkoutSession?: string;
    status?: string;
  };
  axiosClient?: (baseURL: string) => AxiosInstance;
  routes?: RouteOverrides;
}

declare module "@prefabs.tech/vue3-config" {
  export interface AppConfig {
    stripe?: PrefabsTechVueStripeConfig;
  }
}

export type { PrefabsTechVueStripeConfig };
