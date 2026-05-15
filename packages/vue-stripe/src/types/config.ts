interface PrefabsTechVueStripeConfig {
  apiRoutes?: {
    checkoutSession?: string;
    status?: string;
  };
}

declare module "@prefabs.tech/vue3-config" {
  export interface AppConfig {
    stripe?: PrefabsTechVueStripeConfig;
  }
}

export type { PrefabsTechVueStripeConfig };
