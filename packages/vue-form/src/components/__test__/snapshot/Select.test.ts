import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import SelectInput from "../../SelectInput.vue";

describe("SelectInput", () => {
  const options = [
    { value: "FR", label: "FR" },
    { value: "DE", label: "DE" },
    { value: "BE", label: "BE" },
    { value: "FE", label: "FE" },
    { value: "RE", label: "RE" },
  ];

  it("matches snapshot", async () => {
    const wrapper = mount(SelectInput, {
      global: {
        mocks: {
          showDropdownMenu: true,
        },
      },
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
