import type { VueWrapper } from "@vue/test-utils";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Sidebar from "@/components/Sidebar.vue";

describe("Sidebar", () => {
  const wrapper: VueWrapper = shallowMount(Sidebar, {
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
      afterNavLinks: "<div class='after-nav'></div>",
      afterSidebarMenu: "<div class='after-sidebar'></div>",
      default: "<div class='before-nav'></div>",
      footer: "<p><small>This is some smaller text.</small></p>",
      title: "<h3>Test</h3>",
    },
  });

  it("matches snapshot ", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
