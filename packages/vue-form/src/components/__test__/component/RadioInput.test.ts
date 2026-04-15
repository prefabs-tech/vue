import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

import RadioInput from "../../RadioInput.vue";

describe("RadioInput", () => {
  const options = [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
  ];

  it("emits update:modelValue only when radio is checked", async () => {
    const wrapper = mount(RadioInput, {
      props: {
        options,
      },
    });
    const radios = wrapper.findAll("input[type='radio']");

    await radios[0].setValue(true);

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["opt1"]);
  });
});
