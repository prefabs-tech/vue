import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Checkbox from "../../Checkbox.vue";

describe("Checkbox", () => {
  it("emits update:modelValue when changed", async () => {
    const wrapper = mount(Checkbox);

    const input = wrapper.find('input[type="checkbox"]');
    (input.element as HTMLInputElement).checked = true;
    await input.trigger("change");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([true]);
  });
});
