import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Input from "../../Input.vue";

describe("Input", () => {
  it("emits update:modelValue on input", async () => {
    const wrapper = mount(Input);
    const input = wrapper.find("input");

    await input.setValue("test value");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["test value"]);
  });
});
