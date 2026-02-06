import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import router from "@/__test__/router";
import NavMenuItem from "@/components/NavMenuItem.vue";

import type { VueWrapper } from "@vue/test-utils";

describe("NavMenuItem", () => {
  const wrapper: VueWrapper = mount(NavMenuItem, {
    global: {
      mocks: {
        showChildren: true,
      },
      plugins: [router],
    },
    props: {
      item: {
        name: "Menu1",
        routeName: "menu-1",
        shortName: "M1",
        children: [
          {
            name: "child1",
            routeName: "child-1",
            shortName: "C1",
          },
          {
            name: "child2",
            routeName: "child-2",
            shortName: "C2",
          },
        ],
      },
      sidebarActive: true,
    },
  });

  it("matches snapshot ", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
