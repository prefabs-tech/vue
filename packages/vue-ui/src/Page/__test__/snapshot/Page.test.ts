import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Index from "../../Index.vue";

describe("Page", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Index, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      props: {
        title: "Home",
        subTitle: "Welcome to the home page",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
