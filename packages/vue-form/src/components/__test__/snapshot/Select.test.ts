import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MultiSelect from "../../Select.vue";

describe("MultiSelect", () => {
  const options = [
    { value: "FR", label: "FR" },
    { value: "DE", label: "DE" },
    { value: "BE", label: "BE" },
    { value: "FE", label: "FE" },
    { value: "RE", label: "RE" },
  ];

  it("matches snapshot for multiple select", async () => {
    const wrapper = mount(MultiSelect, {
      global: {
        mocks: {
          selectedOptions: [
            { value: "FR", label: "FR" },
            { value: "FE", label: "FE" },
          ],
          showDropdownMenu: true,
        },
      },
      props: {
        label: "Select",
        modelValue: ["FR", "FE"],
        multiple: true,
        options: options,
        placeholder: "Select multiple value",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it("matches snapshot for single select", async () => {
    const wrapper = mount(MultiSelect, {
      global: {
        mocks: {
          selectedOptions: [{ value: "FR", label: "FR" }],
        },
      },
      props: {
        label: "Select",
        modelValue: "FR",
        options: options,
        placeholder: "Select a value",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
