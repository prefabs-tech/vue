import type { VueWrapper } from "@vue/test-utils";

import configPlugin from "@prefabs.tech/vue3-config";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";
import { createRouter, createWebHistory } from "vue-router";

import SidebarHeaderLayout from "../../SidebarHeaderLayout.vue";
import appConfig from "../config";

describe("SidebarHeaderLayout", () => {
  it("matches snapshot", () => {
    const pinia = createPinia();
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          component: SidebarHeaderLayout,
          name: "home",
          path: "/",
        },
      ],
    });

    const wrapper: VueWrapper = mount(SidebarHeaderLayout, {
      global: {
        plugins: [
          pinia,
          [
            configPlugin,
            {
              config: appConfig,
            },
          ],
          router,
        ],
        stubs: {
          LocaleSwitcher: true,
          UserMenu: true,
        },
      },
      slots: {
        afterNavLinks: "<div class='after-nav'></div>",
        afterSidebarMenu: "<div class='after-sidebar'></div>",
        default: "<div class='default'></div>",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
