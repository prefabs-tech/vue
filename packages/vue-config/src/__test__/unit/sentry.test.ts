import * as Sentry from "@sentry/vue";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";

import sentryPlugin from "../../sentry";

import type { AppConfig } from "../../types";

vi.mock("@sentry/vue", () => ({
  init: vi.fn(),
  browserTracingIntegration: vi.fn(() => ({ name: "BrowserTracing" })),
}));

describe("sentry plugin", () => {
  const mockRouter = createRouter({
    history: createMemoryHistory(),
    routes: [],
  });

  const baseConfig: AppConfig = {
    apiBaseUrl: "https://api.example.com",
    appTitle: "Test App",
    appVersion: "1.2.3",
    slug: "test-app",
    websiteDomain: "example.com",
    features: {
      showVersion: true,
    },
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("conditional initialization", () => {
    it("initializes Sentry when enabled is true and dsn is provided", () => {
      const config: AppConfig = {
        ...baseConfig,
        sentry: {
          enabled: true,
          dsn: "https://test@sentry.io/123",
        },
      };

      const app = createApp({ template: "<div></div>" });
      app.use(sentryPlugin, { config, router: mockRouter });

      expect(Sentry.init).toHaveBeenCalledTimes(1);
    });

    it("does not initialize Sentry when enabled is false", () => {
      const config: AppConfig = {
        ...baseConfig,
        sentry: {
          enabled: false,
          dsn: "https://test@sentry.io/123",
        },
      };

      const app = createApp({ template: "<div></div>" });
      app.use(sentryPlugin, { config, router: mockRouter });

      expect(Sentry.init).not.toHaveBeenCalled();
    });

    it("does not initialize Sentry when dsn is missing", () => {
      const config: AppConfig = {
        ...baseConfig,
        sentry: {
          enabled: true,
        },
      };

      const app = createApp({ template: "<div></div>" });
      app.use(sentryPlugin, { config, router: mockRouter });

      expect(Sentry.init).not.toHaveBeenCalled();
    });

    it("does not initialize Sentry when sentry config is missing", () => {
      const app = createApp({ template: "<div></div>" });
      app.use(sentryPlugin, { config: baseConfig, router: mockRouter });

      expect(Sentry.init).not.toHaveBeenCalled();
    });
  });
});
