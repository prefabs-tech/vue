import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import AppHeader from "@/components/AppHeader.vue";
import Logo from "@/components/Logo.vue";
import MainMenu from "@/components/MainMenu.vue";

import router from "../../../__test__/router";

import type { AppConfig } from "@prefabs.tech/vue3-config";

const config: AppConfig = {
  apiBaseUrl: "http://localhost",
  appTitle: "Test App",
  appVersion: "1.0.0",
  i18n: {
    supportedLocales: ["en"],
    defaultLocale: "en",
  },
};

describe("AppHeader", () => {
  it("hides Logo when noLogo prop is true", () => {
    const wrapper = mount(AppHeader, {
      props: {
        noLogo: true,
      },
      global: {
        plugins: [[configPlugin, { config }], [i18nPlugin, { config }], router],
        stubs: {
          RouterLink: RouterLinkStub,
          LocaleSwitcher: true,
        },
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
      props: {
        noMainMenu: true,
      },
      global: {
        plugins: [
          [configPlugin, { config: configWithMenu }],
          [i18nPlugin, { config: configWithMenu }],
          router,
        ],
        stubs: {
          RouterLink: RouterLinkStub,
          LocaleSwitcher: true,
        },
      },
    });

    expect(wrapper.findComponent(MainMenu).exists()).toBe(false);
  });

  it("hides LocaleSwitcher when noLocaleSwitcher prop is true", () => {
    const wrapper = mount(AppHeader, {
      props: {
        noLocaleSwitcher: true,
      },
      global: {
        plugins: [[configPlugin, { config }], [i18nPlugin, { config }], router],
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    expect(wrapper.find(".locales").exists()).toBe(false);
  });
});
