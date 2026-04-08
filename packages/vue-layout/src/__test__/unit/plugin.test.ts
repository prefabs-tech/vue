import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createApp, defineComponent, inject } from "vue";

import layoutPlugin, { useTranslations } from "@/index";
import Layout from "@/Layout.vue";

import type { AppConfig } from "@prefabs.tech/vue3-config";
import type { LocaleMessages, VueMessageType } from "@prefabs.tech/vue3-i18n";

const config: AppConfig = {
  apiBaseUrl: "http://localhost",
  appTitle: "Test App",
  appVersion: "1.0.0",
};

const TRANSLATIONS_KEY = Symbol.for("dzangolab.vue-layout.translations");

const TranslationsConsumer = defineComponent({
  setup() {
    const translations = inject(
      TRANSLATIONS_KEY,
    ) as LocaleMessages<VueMessageType>;
    return { translations };
  },
  template: "<div />",
});

describe("plugin", () => {
  it("registers Layout as a global component on install", () => {
    const app = createApp({ template: "<div />" });
    app.use(layoutPlugin, { config });

    expect(app.component("Layout")).toBe(Layout);
  });

  it("provides bundled translations when no custom translations are given", () => {
    const wrapper = mount(TranslationsConsumer, {
      global: {
        plugins: [[layoutPlugin, { config }]],
      },
    });

    expect(wrapper.vm.translations).toBeDefined();
  });

  it("merges custom translations with bundled messages", () => {
    const customTranslations: LocaleMessages<VueMessageType> = {
      en: { copyright: { disclaimer: "Custom disclaimer text" } },
    };

    const wrapper = mount(TranslationsConsumer, {
      global: {
        plugins: [[layoutPlugin, { config, translations: customTranslations }]],
      },
    });

    const translations = wrapper.vm.translations as Record<
      string,
      Record<string, Record<string, string>>
    >;
    expect(translations?.en?.copyright?.disclaimer).toBe(
      "Custom disclaimer text",
    );
  });
});

describe("useTranslations", () => {
  it("falls back to bundled messages when called outside the plugin context", () => {
    const Probe = defineComponent({
      setup() {
        const translations = useTranslations() as Record<
          string,
          Record<string, unknown>
        >;
        return { translations };
      },
      template: "<div />",
    });

    const wrapper = mount(Probe);

    expect(wrapper.vm.translations).toHaveProperty("en");
    expect(wrapper.vm.translations.en.copyright).toBeDefined();
  });
});
