import { shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import NavMenu from "@/components/NavMenu.vue";

import type { VueWrapper } from "@vue/test-utils";

describe("NavMenu", () => {
  const wrapper: VueWrapper = shallowMount(NavMenu, {
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
      sidebarActive: true,
    },
  });

  it("matches snapshot ", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
