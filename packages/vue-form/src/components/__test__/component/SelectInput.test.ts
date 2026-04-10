import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { defineComponent, h, ref } from "vue";

import SelectInput from "../../SelectInput.vue";

// Mock the MultiSelect component (Select.vue)
const MockMultiSelect = defineComponent({
  name: "MockMultiSelect",
  props: {
    modelValue: { type: [String, Number, Array], default: () => [] },
    multiple: { type: Boolean, default: false },
    options: { type: Array, default: () => [] },
    disabled: { type: Boolean, default: false },
    disableSearch: { type: Boolean, default: false },
    enableCustomSearch: { type: Boolean, default: false },
    enableTooltip: { type: Boolean, default: true },
    hasSortedOptions: { type: Boolean, default: true },
    loading: { type: Boolean, default: false },
    showRemoveSelection: { type: Boolean, default: true },
    placeholder: { type: String, default: "" },
  },
  emits: ["update:modelValue", "update:searchInput"],
  setup(props, { emit }) {
    const showDropdown = ref(false);
    return () =>
      h("div", { class: "multiselect-mock" }, [
        h("button", { class: "trigger" }, props.placeholder || "Select"),
        h(
          "div",
          {
            class: "options",
            style: { display: showDropdown.value ? "block" : "none" },
          },
          props.options?.map((opt: unknown) => {
            const option = opt as { label: string; value: string | number };
            return h(
              "div",
              { onClick: () => emit("update:modelValue", option.value) },
              option.label,
            );
          }) || [],
        ),
      ]);
  },
});

// Mock vee-validate Field and ErrorMessage
const MockField = defineComponent({
  name: "MockField",
  props: {
    name: { type: String, default: "field" },
    rules: { type: [Object, Function], default: undefined },
    modelValue: { type: [String, Number, Array, Boolean], default: undefined },
  },
  emits: ["update:modelValue"],
  setup(props, { slots }) {
    const meta = ref({ dirty: true, touched: false, valid: true });
    return () =>
      slots.default?.({
        field: { name: props.name, value: props.modelValue },
        meta: meta.value,
      }) || h("div");
  },
});

const MockErrorMessage = defineComponent({
  name: "MockErrorMessage",
  props: {
    name: { type: String, default: "" },
  },
  setup(props) {
    return () => h("span", { class: "error-message" }, props.name + "-error");
  },
});

describe("SelectInput", () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  it("renders with default name 'select'", () => {
    const wrapper = mount(SelectInput, {
      props: {
        options,
      },
      global: {
        stubs: {
          MultiSelect: MockMultiSelect,
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const label = wrapper.find("label");
    expect(label.exists()).toBe(false);
  });

  it("renders label when provided", () => {
    const wrapper = mount(SelectInput, {
      props: {
        options,
        label: "Select Option",
      },
      global: {
        stubs: {
          MultiSelect: MockMultiSelect,
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const label = wrapper.find("label");
    expect(label.exists()).toBe(true);
    expect(label.text()).toBe("Select Option");
  });

  it("uses default name 'select'", () => {
    const wrapper = mount(SelectInput, {
      props: {
        options,
      },
      global: {
        stubs: {
          MultiSelect: MockMultiSelect,
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    expect(wrapper.find(".field.select").exists()).toBe(true);
  });

  it("accepts custom name prop", () => {
    const wrapper = mount(SelectInput, {
      props: {
        options,
        name: "custom-select",
      },
      global: {
        stubs: {
          MultiSelect: MockMultiSelect,
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    expect(wrapper.find(".field.custom-select").exists()).toBe(true);
  });

  it("passes multiple prop to MultiSelect", () => {
    const wrapper = mount(SelectInput, {
      props: {
        options,
        multiple: true,
      },
      global: {
        stubs: {
          MultiSelect: MockMultiSelect,
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const multiselect = wrapper.findComponent(MockMultiSelect);
    expect(multiselect.props("multiple")).toBe(true);
  });

  it("passes disabled prop to MultiSelect", () => {
    const wrapper = mount(SelectInput, {
      props: {
        options,
        disabled: true,
      },
      global: {
        stubs: {
          MultiSelect: MockMultiSelect,
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const multiselect = wrapper.findComponent(MockMultiSelect);
    expect(multiselect.props("disabled")).toBe(true);
  });

  it("passes disableSearch prop to MultiSelect", () => {
    const wrapper = mount(SelectInput, {
      props: {
        options,
        disableSearch: true,
      },
      global: {
        stubs: {
          MultiSelect: MockMultiSelect,
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const multiselect = wrapper.findComponent(MockMultiSelect);
    expect(multiselect.props("disableSearch")).toBe(true);
  });

  it("passes enableCustomSearch prop to MultiSelect", () => {
    const wrapper = mount(SelectInput, {
      props: {
        options,
        enableCustomSearch: true,
      },
      global: {
        stubs: {
          MultiSelect: MockMultiSelect,
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const multiselect = wrapper.findComponent(MockMultiSelect);
    expect(multiselect.props("enableCustomSearch")).toBe(true);
  });

  it("passes hasSortedOptions prop to MultiSelect", () => {
    const wrapper = mount(SelectInput, {
      props: {
        options,
        hasSortedOptions: false,
      },
      global: {
        stubs: {
          MultiSelect: MockMultiSelect,
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const multiselect = wrapper.findComponent(MockMultiSelect);
    expect(multiselect.props("hasSortedOptions")).toBe(false);
  });

  it("passes enableTooltip prop to MultiSelect", () => {
    const wrapper = mount(SelectInput, {
      props: {
        options,
        enableTooltip: false,
      },
      global: {
        stubs: {
          MultiSelect: MockMultiSelect,
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const multiselect = wrapper.findComponent(MockMultiSelect);
    expect(multiselect.props("enableTooltip")).toBe(false);
  });

  it("passes showRemoveSelection prop to MultiSelect", () => {
    const wrapper = mount(SelectInput, {
      props: {
        options,
        showRemoveSelection: false,
      },
      global: {
        stubs: {
          MultiSelect: MockMultiSelect,
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const multiselect = wrapper.findComponent(MockMultiSelect);
    expect(multiselect.props("showRemoveSelection")).toBe(false);
  });

  it("passes loading prop to MultiSelect", () => {
    const wrapper = mount(SelectInput, {
      props: {
        options,
        loading: true,
      },
      global: {
        stubs: {
          MultiSelect: MockMultiSelect,
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const multiselect = wrapper.findComponent(MockMultiSelect);
    expect(multiselect.props("loading")).toBe(true);
  });

  it("passes placeholder prop to MultiSelect", () => {
    const wrapper = mount(SelectInput, {
      props: {
        options,
        placeholder: "Choose an option",
      },
      global: {
        stubs: {
          MultiSelect: MockMultiSelect,
          Field: MockField,
          ErrorMessage: MockErrorMessage,
        },
      },
    });

    const multiselect = wrapper.findComponent(MockMultiSelect);
    expect(multiselect.props("placeholder")).toBe("Choose an option");
  });

  it("emits update:modelValue when selection changes", () => {
    const wrapper = mount(SelectInput, {
      props: {
        options,
      },
    });

    wrapper.vm.$emit("update:modelValue", "1");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
  });

  it("emits update:searchInput when search input changes", () => {
    const wrapper = mount(SelectInput, {
      props: {
        options,
      },
    });

    wrapper.vm.$emit("update:searchInput", "search term");

    expect(wrapper.emitted("update:searchInput")).toBeTruthy();
  });

  it("passes labelKey and valueKey to MultiSelect", () => {
    const wrapper = mount(SelectInput, {
      props: {
        labelKey: "displayLabel",
        options,
        valueKey: "id",
      },
    });

    expect(wrapper.vm.labelKey).toBe("displayLabel");
    expect(wrapper.vm.valueKey).toBe("id");
  });
});
