import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import MultiSelect from "../../Select.vue";

describe("MultiSelect", () => {
  const options = [
    { label: "FR", value: "FR" },
    { label: "DE", value: "DE" },
    { label: "BE", value: "BE" },
    { label: "FE", value: "FE" },
    { label: "RE", value: "RE" },
  ];

  it("matches snapshot for multiple select", async () => {
    const wrapper = mount(MultiSelect, {
      global: {
        mocks: {
          selectedOptions: [
            { label: "FR", value: "FR" },
            { label: "FE", value: "FE" },
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
          selectedOptions: [{ label: "FR", value: "FR" }],
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
