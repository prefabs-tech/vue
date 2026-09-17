import type { VueWrapper } from "@vue/test-utils";
import type { Component } from "vue";

import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";
import { defineComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import BasicLayout from "../../BasicLayout.vue";
import appConfig from "../config";

const createWrapper = (
  component: Component = BasicLayout,
  mountOptions = {},
) => {
  const pinia = createPinia();
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        component: BasicLayout,
        name: "home",
        path: "/",
      },
    ],
  });

  return mount(component, {
    global: {
      plugins: [
        pinia,
        [
          configPlugin,
          {
            config: appConfig,
          },
        ],
        [
          i18nPlugin,
          {
            config: appConfig,
          },
        ],
        router,
      ],
      stubs: {
        AppHeader: true,
      },
    },
    ...mountOptions,
  }) as VueWrapper;
};

describe("BasicLayout", () => {
  it("renders the custom footer slot content when a footer slot is provided", () => {
    const wrapper = createWrapper(BasicLayout, {
      slots: {
        footer: "<div class='custom-footer'>Custom Footer</div>",
      },
    });

    expect(wrapper.find(".custom-footer").exists()).toBe(true);
    expect(wrapper.text()).toContain("Custom Footer");
    expect(wrapper.find(".version").exists()).toBe(false);
  });

  it("renders the default AppFooter when no footer slot is provided", () => {
    const wrapper = createWrapper();

    expect(wrapper.find("footer").exists()).toBe(true);
    expect(wrapper.text()).toContain(appConfig.appVersion);
    expect(wrapper.find(".custom-footer").exists()).toBe(false);
  });
});

describe("a layout extending BasicLayout", () => {
  it("displays the custom footer when the extending layout provides one via the footer slot", () => {
    const ExtendingLayout = defineComponent({
      components: { BasicLayout },
      name: "ExtendingLayout",
      template: `
        <BasicLayout>
          <template #footer>
            <div class="custom-footer">Custom Footer</div>
          </template>
        </BasicLayout>
      `,
    });

    const wrapper = createWrapper(ExtendingLayout);

    expect(wrapper.find(".custom-footer").exists()).toBe(true);
    expect(wrapper.text()).toContain("Custom Footer");
    expect(wrapper.find(".version").exists()).toBe(false);
  });

  it("displays the default BasicLayout footer (from vue-layout) when the extending layout does not provide one", () => {
    const ExtendingLayout = defineComponent({
      components: { BasicLayout },
      name: "ExtendingLayout",
      template: "<BasicLayout />",
    });

    const wrapper = createWrapper(ExtendingLayout);

    expect(wrapper.find("footer").exists()).toBe(true);
    expect(wrapper.text()).toContain(appConfig.appVersion);
    expect(wrapper.find(".custom-footer").exists()).toBe(false);
  });
});
