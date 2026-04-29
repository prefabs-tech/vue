import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import TextareaInput from "../../TextareaInput.vue";

describe("TextareaInput", () => {
  it("emits update:modelValue on input", async () => {
    const wrapper = mount(TextareaInput);
    const textarea = wrapper.find("textarea");

    await textarea.setValue("test content");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["test content"]);
  });
});
