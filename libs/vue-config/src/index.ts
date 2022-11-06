import { inject } from "vue";

import type { AppConfig, AppFeatures } from "./types";
import type { App, Plugin } from "vue";

const feature = (name: keyof AppFeatures): boolean => {
  const config = useConfig();

  if (!config || !config?.features) {
    return false;
  }

  return config?.features[name];
};

const parse = (
  value: string | boolean | undefined,
  fallback: bigint | string | null | boolean
) => {
  if (typeof value === "undefined") {
    return fallback;
  }

  if (typeof value === "boolean") {
    return value;
  }

  switch (typeof fallback) {
    case "boolean":
      return !!JSON.parse(value as string);

    case "number":
      return JSON.parse(value as string);

    default:
      return value;
  }
};

const plugin: Plugin = {
  install: (app: App, options: { config: AppConfig }): void => {
    const configKey = Symbol.for("dzangolab.vue-config.config");
    app.provide(configKey, options.config);

    const featureKey = Symbol.for("dzangolab.vue-config.feature");
    app.provide(featureKey, feature);
  },
};

const useConfig = (): AppConfig => {
  return inject<AppConfig>(
    Symbol.for("dzangolab.vue-config.config")
  ) as AppConfig;
};

const useFeature = (): typeof feature | undefined => {
  return inject(Symbol.for("dzangolab.vue-config.feature"));
};

export default plugin;

export { parse, useConfig, useFeature };

export type { AppConfig, AppFeatures };
