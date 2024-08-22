import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import DebouncedInput from "../../Index.vue";

describe("DebouncedInput", () => {
  it("matches snapshot", () => {
    const wrapper = mount(DebouncedInput);

    expect(wrapper.element).toMatchSnapshot();
  });
});
