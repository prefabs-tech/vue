import type { RouteOverrides } from "./router";

interface DzangolabVueUserConfig {
  password?: {
    minLength: number;
  };
  routes?: RouteOverrides;
}

declare module "@dzangolab/vue3-config" {
  export interface AppConfig {
    user?: DzangolabVueUserConfig;
  }
}

export type { DzangolabVueUserConfig };
