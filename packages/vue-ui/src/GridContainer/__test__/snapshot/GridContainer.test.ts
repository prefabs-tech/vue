import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import GridContainer from "../../Index.vue";

describe("GridContainer", () => {
  it("matches snapshot", () => {
    const wrapper = mount(GridContainer, {
      slots: {
        default: "<p>This is a grid container.</p>",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
