import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MainMenu from "../../MainMenu.vue";

import type { VueWrapper } from "@vue/test-utils";

describe("MainMenu", () => {
  it("matches snapshot", () => {
    const wrapper: VueWrapper = mount(MainMenu, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
