import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { defineComponent, h, ref } from "vue";

import SelectInput from "../../SelectInput.vue";

// Mock the MultiSelect component (Select.vue)
const MockMultiSelect = defineComponent({
  emits: ["update:modelValue", "update:searchInput"],
  name: "MockMultiSelect",
  props: {
    disabled: { default: false, type: Boolean },
    disableSearch: { default: false, type: Boolean },
    enableCustomSearch: { default: false, type: Boolean },
    enableTooltip: { default: true, type: Boolean },
    hasSortedOptions: { default: true, type: Boolean },
    loading: { default: false, type: Boolean },
    modelValue: { default: () => [], type: [String, Number, Array] },
    multiple: { default: false, type: Boolean },
    options: { default: () => [], type: Array },
    placeholder: { default: "", type: String },
    showRemoveSelection: { default: true, type: Boolean },
  },
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
            const option = opt as { label: string; value: number | string };
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
  emits: ["update:modelValue"],
  name: "MockField",
  props: {
    modelValue: { default: undefined, type: [String, Number, Array, Boolean] },
    name: { default: "field", type: String },
    rules: { default: undefined, type: [Object, Function] },
  },
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
    name: { default: "", type: String },
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
        ErrorMessage: MockErrorMessage,
        Field: MockField,
        MultiSelect: MockMultiSelect,
      },
    };

    const minWrapper = mount(SelectInput, {
      global: globalStubs,
      props: { minSelection: 2, multiple: true, options },
    });
    expect(minWrapper.props("minSelection")).toBe(2);
    expect(minWrapper.props("multiple")).toBe(true);

    const maxWrapper = mount(SelectInput, {
      global: globalStubs,
      props: { maxSelection: 2, multiple: true, options },
    });
    expect(maxWrapper.props("maxSelection")).toBe(2);
    expect(maxWrapper.props("multiple")).toBe(true);

    const bothWrapper = mount(SelectInput, {
      global: globalStubs,
      props: { maxSelection: 3, minSelection: 1, multiple: true, options },
    });
    expect(bothWrapper.props("minSelection")).toBe(1);
    expect(bothWrapper.props("maxSelection")).toBe(3);
  });
});
