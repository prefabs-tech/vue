import configPlugin from "@prefabs.tech/vue3-config";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";

import plugin from "../../index";
import LocaleSwitcher from "../../locale-switcher/Index.vue";

import type { AppConfig } from "@prefabs.tech/vue3-config";

describe("LocaleSwitcher", () => {
  const config: AppConfig = {
    apiBaseUrl: "https://api.example.com",
    appTitle: "Test App",
    appVersion: "1.0.0",
    features: {
      showVersion: false,
    },
    i18n: {
      messages: {
        en: {
          locales: { en: "English", fr: "French", th: "Thai" },
        },
        fr: {
          locales: { en: "Anglais", fr: "Français", th: "Thaï" },
        },
        th: {
          locales: { en: "อังกฤษ", fr: "ฝรั่งเศส", th: "ไทย" },
        },
      },
      supportedLocales: ["en", "fr", "th"],
    },
    slug: "test-app",
    websiteDomain: "example.com",
  };

  beforeEach(() => {
    localStorage.clear();
  });

  it("renders current locale name", () => {
    const wrapper = mount(LocaleSwitcher, {
      global: {
        plugins: [
          createPinia(),
          [configPlugin, { config }],
          [plugin, { config }],
        ],
      },
    });

    expect(wrapper.find(".locale-trigger .locale").text()).toBe("English");
  });

  it("displays all available locales in dropdown", () => {
    const wrapper = mount(LocaleSwitcher, {
      global: {
        plugins: [
          createPinia(),
          [configPlugin, { config }],
          [plugin, { config }],
        ],
      },
    });

    const items = wrapper.findAll(".dropdown li");

    expect(items).toHaveLength(3);
  });

  it("expands dropdown when trigger is clicked", async () => {
    const wrapper = mount(LocaleSwitcher, {
      global: {
        plugins: [
          createPinia(),
          [configPlugin, { config }],
          [plugin, { config }],
        ],
      },
    });

    expect(wrapper.find("nav").classes()).not.toContain("expanded");

    await wrapper.find(".locale-trigger").trigger("click");

    expect(wrapper.find("nav").classes()).toContain("expanded");
  });

  it("changes locale when option is clicked", async () => {
    const wrapper = mount(LocaleSwitcher, {
      global: {
        plugins: [
          createPinia(),
          [configPlugin, { config }],
          [plugin, { config }],
        ],
      },
    });

    await wrapper.find(".locale-trigger").trigger("click");
    await wrapper.findAll(".dropdown li")[1].trigger("click");

    expect(wrapper.find(".locale-trigger .locale").text()).toBe("Français");
  });

  it("persists locale to localStorage when changed", async () => {
    const wrapper = mount(LocaleSwitcher, {
      global: {
        plugins: [
          createPinia(),
          [configPlugin, { config }],
          [plugin, { config }],
        ],
      },
    });

    await wrapper.find(".locale-trigger").trigger("click");
    await wrapper.findAll(".dropdown li")[1].trigger("click");

    expect(localStorage.getItem("test-app.locale")).toBe("fr");
  });

  it("closes dropdown after locale selection", async () => {
    const wrapper = mount(LocaleSwitcher, {
      global: {
        plugins: [
          createPinia(),
          [configPlugin, { config }],
          [plugin, { config }],
        ],
      },
    });

    await wrapper.find(".locale-trigger").trigger("click");
    expect(wrapper.find("nav").classes()).toContain("expanded");

    await wrapper.findAll(".dropdown li")[1].trigger("click");
    expect(wrapper.find("nav").classes()).not.toContain("expanded");
  });

  it("renders custom icon slot", () => {
    const wrapper = mount(LocaleSwitcher, {
      slots: {
        icon: '<span class="custom-icon">▼</span>',
      },
      global: {
        plugins: [
          createPinia(),
          [configPlugin, { config }],
          [plugin, { config }],
        ],
      },
    });

    expect(wrapper.find(".custom-icon").exists()).toBe(true);
  });
});
