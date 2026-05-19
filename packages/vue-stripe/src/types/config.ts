import type { AxiosInstance } from "axios";

interface PrefabsTechVueStripeConfig {
  apiRoutes?: {
    checkoutSession?: string;
    status?: string;
  };
  axiosClient?: (baseURL: string) => AxiosInstance;
}

declare module "@prefabs.tech/vue3-config" {
  export interface AppConfig {
    stripe?: PrefabsTechVueStripeConfig;
  }
}

export type { PrefabsTechVueStripeConfig };
