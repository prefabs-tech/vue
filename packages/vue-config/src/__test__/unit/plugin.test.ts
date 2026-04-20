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

  it("provides config via useConfig", () => {
    let config: AppConfig | null = null;

    const app = createApp({
      setup() {
        config = useConfig();

        return {};
      },
      template: "<div></div>",
    });

    app.use(plugin, { config: mockConfig });
    app.mount(document.createElement("div"));

    expect(config).toEqual(mockConfig);
  });

  it("useFeature returns feature flag value", () => {
    let isEnabled: boolean | undefined;

    const app = createApp({
      setup() {
        const feature = useFeature();
        isEnabled = feature?.("showVersion");

        return {};
      },
      template: "<div></div>",
    });

    app.use(plugin, { config: mockConfig });
    app.mount(document.createElement("div"));

    expect(isEnabled).toBe(true);
  });
});
