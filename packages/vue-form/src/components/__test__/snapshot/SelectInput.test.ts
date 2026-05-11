import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import SelectInput from "../../SelectInput.vue";

describe("SelectInput", () => {
  const options = [
    { label: "FR", value: "FR" },
    { label: "DE", value: "DE" },
    { label: "BE", value: "BE" },
    { label: "FE", value: "FE" },
    { label: "RE", value: "RE" },
  ];

  it("matches snapshot", async () => {
    const wrapper = mount(SelectInput, {
      props: {
        label: "Multiselect",
        modelValue: ["FR", "FE"],
        multiple: true,
        name: "multiselect",
        options: options,
        placeholder: "Select multiple value",
      },
    });

    const multiselect = wrapper.find("#input-field-multiselect");

    await multiselect.trigger("update:modelValue", ["FR", "FE"]);

    expect(wrapper.element).toMatchSnapshot();
  });
});
