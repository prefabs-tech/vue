import type { VueWrapper } from "@vue/test-utils";

import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import StickyCollapsibleFooter from "../../StickyCollapsibleFooter.vue";

describe("StickyCollapsibleFooter", () => {
  it("matches snapshot", () => {
    const wrapper: VueWrapper = mount(StickyCollapsibleFooter, {
      slots: {
        default: "This is test footer.",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
