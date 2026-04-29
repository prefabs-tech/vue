import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Radio from "../../Radio.vue";

describe("Radio", () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  it("highlights selected option based on modelValue", () => {
    const wrapper = mount(Radio, {
      props: {
        options,
        modelValue: "2",
      },
    });

    const radios = wrapper.findAll('input[type="radio"]');
    expect((radios[1].element as HTMLInputElement).checked).toBe(true);
  });

  it("emits update:modelValue when option is selected", async () => {
    const wrapper = mount(Radio, {
      props: {
        options,
      },
    });

    const radios = wrapper.findAll('input[type="radio"]');
    (radios[1].element as HTMLInputElement).checked = true;
    await radios[1].trigger("change");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["2"]);
  });
});
