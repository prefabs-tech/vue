import { describe, expect, it } from "vitest";
import { createApp } from "vue";

import plugin, { useConfig, useFeature } from "../../index";

import type { AppConfig } from "../../types";

describe("config plugin", () => {
  const mockConfig: AppConfig = {
    apiBaseUrl: "https://api.example.com",
    appTitle: "Test App",
    appVersion: "1.0.0",
    slug: "test-app",
    websiteDomain: "example.com",
    features: {
      showVersion: true,
    },
  };

  describe("useConfig composable", () => {
    it("returns injected config with all fields", () => {
      const app = createApp({
        setup() {
          const config = useConfig();
          expect(config.apiBaseUrl).toBe("https://api.example.com");
          expect(config.appTitle).toBe("Test App");
          expect(config.appVersion).toBe("1.0.0");
          expect(config.slug).toBe("test-app");
          expect(config.websiteDomain).toBe("example.com");
          return {};
        },
        template: "<div></div>",
      });

      app.use(plugin, { config: mockConfig });
      app.mount(document.createElement("div"));
    });
  });

  describe("useFeature composable", () => {
    it("returns true when feature is enabled", () => {
      const app = createApp({
        setup() {
          const feature = useFeature();
          expect(feature).toBeDefined();
          const isEnabled = feature?.("showVersion");
          expect(isEnabled).toBe(true);
          return {};
        },
        template: "<div></div>",
      });

      app.use(plugin, { config: mockConfig });
      app.mount(document.createElement("div"));
    });

    it("returns false when feature is disabled", () => {
      const configWithDisabledFeature: AppConfig = {
        ...mockConfig,
        features: {
          showVersion: false,
        },
      };

      const app = createApp({
        setup() {
          const feature = useFeature();
          const isEnabled = feature?.("showVersion");
          expect(isEnabled).toBe(false);
          return {};
        },
        template: "<div></div>",
      });

      app.use(plugin, { config: configWithDisabledFeature });
      app.mount(document.createElement("div"));
    });

    it("returns undefined when plugin not installed", () => {
      const app = createApp({
        setup() {
          const feature = useFeature();
          expect(feature).toBeUndefined();
          return {};
        },
        template: "<div></div>",
      });

      app.mount(document.createElement("div"));
    });
  });
});
