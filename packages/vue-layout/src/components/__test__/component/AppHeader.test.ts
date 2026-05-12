import type { AppConfig } from "@prefabs.tech/vue3-config";

import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import AppHeader from "@/components/AppHeader.vue";
import Logo from "@/components/Logo.vue";
import MainMenu from "@/components/MainMenu.vue";

import router from "../../../__test__/router";

const config: AppConfig = {
  apiBaseUrl: "http://localhost",
  appTitle: "Test App",
  appVersion: "1.0.0",
  i18n: {
    defaultLocale: "en",
    supportedLocales: ["en"],
  },
};

describe("AppHeader", () => {
  it("hides Logo when noLogo prop is true", () => {
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [[configPlugin, { config }], [i18nPlugin, { config }], router],
        stubs: {
          LocaleSwitcher: true,
          RouterLink: RouterLinkStub,
        },
      },
      props: {
        noLogo: true,
      },
    });

    expect(wrapper.findComponent(Logo).exists()).toBe(false);
  });

  it("hides MainMenu when noMainMenu prop is true even with layoutConfig.mainMenu set", () => {
    const configWithMenu: AppConfig = {
      ...config,
      layout: {
        mainMenu: [{ name: "Home", route: "home" }],
      },
    };

    const wrapper = mount(AppHeader, {
      global: {
        plugins: [
          [configPlugin, { config: configWithMenu }],
          [i18nPlugin, { config: configWithMenu }],
          router,
        ],
        stubs: {
          LocaleSwitcher: true,
          RouterLink: RouterLinkStub,
        },
      },
      props: {
        noMainMenu: true,
      },
    });

    expect(wrapper.findComponent(MainMenu).exists()).toBe(false);
  });

  it("hides LocaleSwitcher when noLocaleSwitcher prop is true", () => {
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [[configPlugin, { config }], [i18nPlugin, { config }], router],
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      props: {
        noLocaleSwitcher: true,
      },
    });

    expect(wrapper.find(".locales").exists()).toBe(false);
  });
});
