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

  it("emits update:modelValue and update:searchInput events", () => {
    const wrapper = mount(SelectInput, {
      props: { options },
    });

    wrapper.vm.$emit("update:modelValue", "1");
    wrapper.vm.$emit("update:searchInput", "search term");

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:searchInput")).toBeTruthy();
  });

  it("generates schema with minSelection, maxSelection, or both", () => {
    const globalStubs = {
      stubs: {
        MultiSelect: MockMultiSelect,
        Field: MockField,
        ErrorMessage: MockErrorMessage,
      },
    };

    const minWrapper = mount(SelectInput, {
      props: { minSelection: 2, multiple: true, options },
      global: globalStubs,
    });
    expect(minWrapper.props("minSelection")).toBe(2);
    expect(minWrapper.props("multiple")).toBe(true);

    const maxWrapper = mount(SelectInput, {
      props: { maxSelection: 2, multiple: true, options },
      global: globalStubs,
    });
    expect(maxWrapper.props("maxSelection")).toBe(2);
    expect(maxWrapper.props("multiple")).toBe(true);

    const bothWrapper = mount(SelectInput, {
      props: { minSelection: 1, maxSelection: 3, multiple: true, options },
      global: globalStubs,
    });
    expect(bothWrapper.props("minSelection")).toBe(1);
    expect(bothWrapper.props("maxSelection")).toBe(3);
  });
});
