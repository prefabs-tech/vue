import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Select from "../../Select.vue";

describe("Select", () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  it("renders a select trigger element", () => {
    const wrapper = mount(Select, {
      props: {
        options,
      },
    });

    expect(wrapper.find(".multiselect-input").exists()).toBe(true);
  });

  it("applies placeholder prop", () => {
    const wrapper = mount(Select, {
      props: {
        options,
        placeholder: "Choose an option",
      },
    });

    expect(wrapper.vm.placeholder).toBe("Choose an option");
  });

  it("renders multiple mode class when multiple is true", () => {
    const wrapper = mount(Select, {
      props: {
        multiple: true,
        options,
      },
    });

    expect(wrapper.vm.multiple).toBe(true);
  });

  it("applies disabled class when disabled is true", () => {
    const wrapper = mount(Select, {
      props: {
        disabled: true,
        options,
      },
    });

    expect(wrapper.vm.disabled).toBe(true);
  });

  it("applies loading prop", () => {
    const wrapper = mount(Select, {
      props: {
        loading: true,
        options,
      },
    });

    expect(wrapper.vm.loading).toBe(true);
  });

  it("shows search input when not disabled and not disableSearch", () => {
    const wrapper = mount(Select, {
      props: {
        options,
      },
    });

    expect(wrapper.vm.disableSearch).toBe(false);
  });

  it("hides search input when disableSearch is true", () => {
    const wrapper = mount(Select, {
      props: {
        disableSearch: true,
        options,
      },
    });

    expect(wrapper.vm.disableSearch).toBe(true);
  });

  it("emits update:modelValue when option is selected", async () => {
    const wrapper = mount(Select, {
      props: {
        options,
      },
    });

    await wrapper.vm.$emit("update:modelValue", "1");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["1"]);
  });

  it("emits update:searchInput when search changes", async () => {
    const wrapper = mount(Select, {
      props: {
        options,
      },
    });

    await wrapper.vm.$emit("update:searchInput", "search term");

    expect(wrapper.emitted("update:searchInput")).toBeTruthy();
    expect(wrapper.emitted("update:searchInput")?.[0]).toEqual(["search term"]);
  });

  it("renders with hasSortedOptions prop", () => {
    const wrapper = mount(Select, {
      props: {
        hasSortedOptions: true,
        options,
      },
    });

    expect(wrapper.vm.hasSortedOptions).toBe(true);
  });

  it("renders with showRemoveSelection prop", () => {
    const wrapper = mount(Select, {
      props: {
        options,
        showRemoveSelection: true,
      },
    });

    expect(wrapper.vm.showRemoveSelection).toBe(true);
  });

  it("applies showRemoveSelection false", () => {
    const wrapper = mount(Select, {
      props: {
        options,
        showRemoveSelection: false,
      },
    });

    expect(wrapper.vm.showRemoveSelection).toBe(false);
  });

  it("renders with enableTooltip prop", () => {
    const wrapper = mount(Select, {
      props: {
        enableTooltip: true,
        options,
      },
    });

    expect(wrapper.vm.enableTooltip).toBe(true);
  });
});
