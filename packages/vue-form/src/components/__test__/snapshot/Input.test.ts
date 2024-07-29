import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Input from "../../Input.vue";

describe("Input", () => {
  it("matches snapshot", () => {
    const wrapper = mount(Input, {
      props: {
        label: "Input",
        placeholder: "Placeholder",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
