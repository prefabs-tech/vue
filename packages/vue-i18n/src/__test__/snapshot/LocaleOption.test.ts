import configPlugin from "@prefabs.tech/vue3-config";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";

import plugin from "../../index";
import LocaleOption from "../../locale-switcher/LocaleOption.vue";

import type { AppConfig } from "@prefabs.tech/vue3-config";

describe("LocaleOption", () => {
  const config: AppConfig = {
    apiBaseUrl: "https://api.example.com",
    appTitle: "Test App",
    appVersion: "1.0.0",
    features: {
      showVersion: false,
    },
    i18n: {
      supportedLocales: ["en"],
      messages: {
        en: {},
      },
    },
    slug: "test-app",
    websiteDomain: "example.com",
  };

  it("matches snapshot with badge", () => {
    const wrapper = mount(LocaleOption, {
      props: {
        locale: "en",
        name: "English",
        showBadges: true,
      },
      global: {
        plugins: [
          createPinia(),
          [configPlugin, { config }],
          [plugin, { config }],
        ],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("matches snapshot without badge", () => {
    const wrapper = mount(LocaleOption, {
      props: {
        locale: "en",
        name: "English",
        showBadges: false,
      },
      global: {
        plugins: [
          createPinia(),
          [configPlugin, { config }],
          [plugin, { config }],
        ],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
