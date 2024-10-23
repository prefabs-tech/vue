import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import TextInput from "../../TextInput.vue";

describe("TextInput", () => {
  it("matches snapshot", () => {
    const wrapper = mount(TextInput, {
      props: {
        label: "Text input",
        placeholder: "Placeholder",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
