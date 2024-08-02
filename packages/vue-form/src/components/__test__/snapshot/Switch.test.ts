import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Switch from "../../Switch.vue";

describe("Switch", () => {
  it("matches snapshot", async () => {
    const wrapper = mount(Switch);

    const switchInput = wrapper.find(".switch-input");

    await switchInput.trigger("change");

    expect(wrapper.element).toMatchSnapshot();
  });
});
