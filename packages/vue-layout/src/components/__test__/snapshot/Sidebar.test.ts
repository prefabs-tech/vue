import { shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import type { VueWrapper } from "@vue/test-utils";

import Sidebar from "@/components/Sidebar.vue";

describe("Sidebar", () => {
  const wrapper: VueWrapper = shallowMount(Sidebar, {
    global: {
      mocks: {
        isInactive: false,
      },
    },
    props: {
      menu: [
        {
          name: "Menu1",
          routeName: "menu-1",
          shortName: "M1",
        },
        {
          name: "Menu2",
          routeName: "menu-2",
          shortName: "M2",
        },
      ],
    },
    slots: {
      title: "<h3>Test</h3>",
      default: "<div class='before-nav'></div>",
      afterNavLinks: "<div class='after-nav'></div>",
      afterSidebarMenu: "<div class='after-sidebar'></div>",
      footer: "<p><small>This is some smaller text.</small></p>",
    },
  });

  it("matches snapshot ", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
