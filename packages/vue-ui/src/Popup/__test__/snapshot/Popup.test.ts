import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Popup from "../../Index.vue";

describe("Popup", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Popup, {
      global: {
        mocks: {
          isVisible: true,
        },
      },
      slots: {
        content: "<p>This is a popup.</p>",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
