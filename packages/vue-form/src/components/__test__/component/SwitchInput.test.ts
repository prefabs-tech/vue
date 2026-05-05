import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import SwitchInput from "../../SwitchInput.vue";

describe("SwitchInput", () => {
  it("emits update:modelValue with boolean value", async () => {
    const wrapper = mount(SwitchInput, {
      props: {
        modelValue: false,
      },
    });
    const input = wrapper.find("input[type='checkbox']");

    await input.setValue(true);

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([true]);
  });
});
