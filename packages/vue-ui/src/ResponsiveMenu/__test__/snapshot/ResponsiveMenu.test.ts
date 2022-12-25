import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Index from "../../Index.vue";
import { routes } from "../routes";

describe("ResponsiveMenu", () => {
  it("should render", () => {
    const wrapper = mount(Index, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      props: {
        routes,
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
