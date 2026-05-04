import type { App, Plugin } from "vue";
import type { Router } from "vue-router";

import * as Sentry from "@sentry/vue";

import type { AppConfig } from "./types";

const plugin: Plugin = {
  install: (app: App, options: DzangolabVueSentryPluginOptions): void => {
    const { config } = options;
    const sentryOptions = config.sentry;

    if (sentryOptions?.enabled && sentryOptions?.dsn) {
      Sentry.init({
        ...sentryOptions,
        app,
        integrations: [
          Sentry.browserTracingIntegration({
            router: options.router,
          }),
        ],
        release: options.config.appVersion,
        tracePropagationTargets: ["localhost", config.websiteDomain, /^\//],
      });
    }
  },
};

interface DzangolabVueSentryPluginOptions {
  config: AppConfig;
  router: Router;
}

export default plugin;

export type { DzangolabVueSentryPluginOptions };
