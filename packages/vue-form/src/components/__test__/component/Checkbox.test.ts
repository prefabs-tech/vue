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

  it("renders label and associates it with input via name prop", () => {
    const wrapper = mount(Checkbox, {
      props: {
        name: "terms",
        label: "I agree to the terms",
      },
    });

    const input = wrapper.find('input[type="checkbox"]');
    const label = wrapper.find("label");

    expect(label.exists()).toBe(true);
    expect(label.text()).toBe("I agree to the terms");
    expect(input.attributes("id")).toBe("terms");
    expect(label.attributes("for")).toBe("terms");
  });
});
