import configPlugin from "@prefabs.tech/vue3-config";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";

import plugin from "../../index";
import Badge from "../../locale-switcher/Badge.vue";

import type { AppConfig } from "@prefabs.tech/vue3-config";

describe("Badge", () => {
  const config: AppConfig = {
    apiBaseUrl: "https://api.example.com",
    appTitle: "Test App",
    appVersion: "1.0.0",
    features: {
      showVersion: false,
    },
    i18n: {
      messages: {
        en: {},
      },
      supportedLocales: ["en"],
    },
    slug: "test-app",
    websiteDomain: "example.com",
  };

  it("displays first 2 characters of locale code", () => {
    const wrapper = mount(Badge, {
      props: {
        locale: "en",
      },
      global: {
        plugins: [
          createPinia(),
          [configPlugin, { config }],
          [plugin, { config }],
        ],
      },
    });

    expect(wrapper.text()).toContain("en");
  });

  it("displays country code overlay for locale with hyphen", () => {
    const wrapper = mount(Badge, {
      props: {
        locale: "en-US",
      },
      global: {
        plugins: [
          createPinia(),
          [configPlugin, { config }],
          [plugin, { config }],
        ],
      },
    });

    expect(wrapper.text()).toContain("en");
    expect(wrapper.find(".country").text()).toBe("US");
  });

  it("does not display country code for locale without hyphen", () => {
    const wrapper = mount(Badge, {
      props: {
        locale: "en",
      },
      global: {
        plugins: [
          createPinia(),
          [configPlugin, { config }],
          [plugin, { config }],
        ],
      },
    });

    expect(wrapper.find(".country").exists()).toBe(false);
  });
});
