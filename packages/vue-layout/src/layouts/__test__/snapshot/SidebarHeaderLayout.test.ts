import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import SidebarHeaderLayout from "../../SidebarHeaderLayout.vue";

import type { VueWrapper } from "@vue/test-utils";

describe("SidebarHeaderLayout", () => {
  it("matches snapshot", () => {
    const wrapper: VueWrapper = shallowMount(SidebarHeaderLayout, {
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
        default: "<div class='default'></div>",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
