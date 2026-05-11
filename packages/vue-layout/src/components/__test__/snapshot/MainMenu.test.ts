import type { VueWrapper } from "@vue/test-utils";

import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MainMenu from "../../MainMenu.vue";

describe("MainMenu", () => {
  it("matches snapshot", () => {
    const wrapper: VueWrapper = mount(MainMenu, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      props: {
        routes: [
          {
            name: "Home",
            route: "home",
          },
          {
            name: "About",
            route: "about",
          },
        ],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
