import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import NumberInput from "../../NumberInput.vue";

describe("NumberInput", () => {
  it("matches snapshot", () => {
    const wrapper = mount(NumberInput, {
      props: {
        label: "Number input",
        placeholder: "Placeholder",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
