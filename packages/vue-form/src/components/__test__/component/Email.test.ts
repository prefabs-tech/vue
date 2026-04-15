import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import Email from "../../Email.vue";

describe("Email", () => {
  it("emits update:modelValue on input", async () => {
    const wrapper = mount(Email);
    const input = wrapper.find("input");

    await input.setValue("test@example.com");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([
      "test@example.com",
    ]);
  });
});
