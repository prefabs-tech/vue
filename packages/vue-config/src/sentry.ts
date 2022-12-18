import { BrowserTracing } from "@sentry/tracing";
import * as Sentry from "@sentry/vue";

import type { AppConfig } from "./types";
import type { App, Plugin } from "vue";
import type { Router } from "vue-router";

const plugin: Plugin = {
  install: (app: App, options: DzangolabVueSentryPluginOptions): void => {
    const sentryOptions = options.config.sentry;

    Sentry.init({
      ...sentryOptions,
      app,
      integrations: [
        new BrowserTracing({
          routingInstrumentation: Sentry.vueRouterInstrumentation(
            options.router
          ),
          tracingOrigins: ["localhost", options.config.websiteDomain, /^\//],
        }),
      ],
      release: options.config.appVersion,
    });
  },
};

interface DzangolabVueSentryPluginOptions {
  config: AppConfig;
  router: Router;
}

export default plugin;

export type { DzangolabVueSentryPluginOptions };
