import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Tooltip from "../../Index.vue";

describe("Tooltip", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Tooltip, {
      global: {
        mocks: {
          isVisible: true,
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
