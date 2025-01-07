import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Divider from "../../Index.vue";

describe("Divider", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Divider);

    expect(wrapper.element).toMatchSnapshot();
  });
});
