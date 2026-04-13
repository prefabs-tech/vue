import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { defineComponent } from "vue";

import Layout from "@/Layout.vue";

import router from "../router";

import type { AppConfig } from "@prefabs.tech/vue3-config";

const config: AppConfig = {
  apiBaseUrl: "http://localhost",
  appTitle: "Test App",
  appVersion: "1.0.0",
  i18n: {
    supportedLocales: ["en"],
  },
};

describe("Layout", () => {
  it("uses custom defaultLayout prop when provided", async () => {
    const CustomLayout = defineComponent({
      name: "CustomLayout",
      template: '<div class="custom-layout"><slot /></div>',
    });

    await router.push("/");
    await router.isReady();

    const wrapper = mount(Layout, {
      props: {
        defaultLayout: CustomLayout,
      },
      global: {
        plugins: [[configPlugin, { config }], [i18nPlugin, { config }], router],
      },
      slots: {
        default: "<div>Content</div>",
      },
    });

    await wrapper.vm.$nextTick();

    // Verifies that Layout respects the defaultLayout prop
    expect(wrapper.find(".custom-layout").exists()).toBe(true);
    expect(wrapper.text()).toContain("Content");
  });
});
