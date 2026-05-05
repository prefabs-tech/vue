import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import TextInput from "../../TextInput.vue";

describe("TextInput", () => {
  it("emits update:modelValue when input changes", async () => {
    const wrapper = mount(TextInput, {
      props: {
        name: "test-input",
      },
    });

    const input = wrapper.find('input[type="text"]');
    await input.setValue("test value");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["test value"]);
  });
});
