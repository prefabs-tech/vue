import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import TextareaInput from "../../TextareaInput.vue";

describe("TextareaInput", () => {
  it("matches snapshot", () => {
    const wrapper = mount(TextareaInput, {
      props: {
        label: "Textarea input",
        placeholder: "Placeholder",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
