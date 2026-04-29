import configPlugin from "@prefabs.tech/vue3-config";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import AppFooter from "@/components/AppFooter.vue";
import Copyright from "@/components/Copyright.vue";

import type { AppConfig } from "@prefabs.tech/vue3-config";

const baseConfig: AppConfig = {
  apiBaseUrl: "http://localhost",
  appTitle: "Test App",
  appVersion: "2.3.4",
};

const configWithCopyright: AppConfig = {
  ...baseConfig,
  copyright: {
    holder: "Acme Corp",
    url: "https://acme.example.com",
  },
};

describe("AppFooter", () => {
  it("renders Copyright when config.copyright is set", () => {
    const wrapper = shallowMount(AppFooter, {
      global: {
        plugins: [[configPlugin, { config: configWithCopyright }]],
      },
    });

    expect(wrapper.findComponent(Copyright).exists()).toBe(true);
  });

  it("does not render Copyright when config.copyright is absent", () => {
    const wrapper = shallowMount(AppFooter, {
      global: {
        plugins: [[configPlugin, { config: baseConfig }]],
      },
    });

    expect(wrapper.findComponent(Copyright).exists()).toBe(false);
  });

  it("renders app version in the default version slot", () => {
    const wrapper = shallowMount(AppFooter, {
      global: {
        plugins: [[configPlugin, { config: baseConfig }]],
      },
    });

    expect(wrapper.find(".version").text()).toBe("2.3.4");
  });
});
