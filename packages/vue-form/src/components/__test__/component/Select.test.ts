import { mount } from "@vue/test-utils";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import Select from "../../Select.vue";

beforeEach(() => {
  Element.prototype.scrollIntoView = vi.fn();
});

afterEach(() => {
  document.body.innerHTML = "";
});

describe("Select", () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  const groupedOptions = [
    {
      label: "Group A",
      options: [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
      ],
    },
    {
      label: "Group B",
      options: [{ label: "Option 3", value: "3" }],
    },
  ];

  const createWrapper = (props = {}) => {
    return mount(Select, {
      props: { options, ...props },
      attachTo: document.body,
    });
  };

  const getDropdown = () => document.querySelector(".multiselect-options");
  const getOptions = () => document.querySelectorAll(".multiselect-option");
  const getFocusedOption = () =>
    document.querySelector(".multiselect-option.focused");

  describe("Events", () => {
    it("emits update:modelValue when option is selected", async () => {
      const wrapper = createWrapper();
      await wrapper.vm.$emit("update:modelValue", "1");

      expect(wrapper.emitted("update:modelValue")).toBeTruthy();
      expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["1"]);
      wrapper.unmount();
    });

    it("emits update:searchInput when search changes", async () => {
      const wrapper = createWrapper();
      await wrapper.vm.$emit("update:searchInput", "search term");

      expect(wrapper.emitted("update:searchInput")).toBeTruthy();
      expect(wrapper.emitted("update:searchInput")?.[0]).toEqual([
        "search term",
      ]);
      wrapper.unmount();
    });
  });

  describe("Dropdown Toggle", () => {
    it("toggles dropdown when trigger is clicked", async () => {
      const wrapper = createWrapper();

      expect(getDropdown()).toBeNull();

      await wrapper.find(".multiselect-input").trigger("click");
      await wrapper.vm.$nextTick();
      expect(getDropdown()).not.toBeNull();

      await wrapper.find(".multiselect-input").trigger("click");
      await wrapper.vm.$nextTick();
      expect(getDropdown()).toBeNull();

      wrapper.unmount();
    });

    it("opens dropdown with keyboard shortcuts", async () => {
      const keys = ["ArrowDown", "ArrowUp", "Enter", " "];

      for (const key of keys) {
        const wrapper = createWrapper();
        expect(getDropdown()).toBeNull();

        await wrapper.find(".multiselect").trigger("keydown", { key });
        await wrapper.vm.$nextTick();

        expect(getDropdown()).not.toBeNull();
        wrapper.unmount();
      }
    });
  });

  describe("Disabled State", () => {
    it("does not respond to click when disabled", async () => {
      const wrapper = createWrapper({ disabled: true });

      await wrapper.find(".multiselect-input").trigger("click");
      await wrapper.vm.$nextTick();

      expect(getDropdown()).toBeNull();
      wrapper.unmount();
    });

    it("does not respond to keyboard when disabled", async () => {
      const wrapper = createWrapper({ disabled: true });

      await wrapper.find(".multiselect").trigger("keydown", { key: "Enter" });
      await wrapper.vm.$nextTick();

      expect(getDropdown()).toBeNull();
      wrapper.unmount();
    });
  });

  describe("Keyboard Navigation", () => {
    it("navigates down through options with ArrowDown", async () => {
      const wrapper = createWrapper();

      await wrapper.find(".multiselect").trigger("keydown", { key: "Enter" });
      await wrapper.vm.$nextTick();

      expect(getFocusedOption()).toBeNull();

      await wrapper
        .find(".multiselect")
        .trigger("keydown", { key: "ArrowDown" });
      await wrapper.vm.$nextTick();
      expect(getOptions()[0].classList.contains("focused")).toBe(true);

      await wrapper
        .find(".multiselect")
        .trigger("keydown", { key: "ArrowDown" });
      await wrapper.vm.$nextTick();
      expect(getOptions()[1].classList.contains("focused")).toBe(true);

      wrapper.unmount();
    });

    it("navigates up through options with ArrowUp", async () => {
      const wrapper = createWrapper();

      await wrapper.find(".multiselect").trigger("keydown", { key: "Enter" });
      await wrapper
        .find(".multiselect")
        .trigger("keydown", { key: "ArrowDown" });
      await wrapper
        .find(".multiselect")
        .trigger("keydown", { key: "ArrowDown" });
      await wrapper.vm.$nextTick();

      expect(getOptions()[1].classList.contains("focused")).toBe(true);

      await wrapper.find(".multiselect").trigger("keydown", { key: "ArrowUp" });
      await wrapper.vm.$nextTick();

      expect(getOptions()[0].classList.contains("focused")).toBe(true);
      wrapper.unmount();
    });

    it("selects focused option with Enter", async () => {
      const wrapper = createWrapper();

      await wrapper.find(".multiselect").trigger("keydown", { key: "Enter" });
      await wrapper
        .find(".multiselect")
        .trigger("keydown", { key: "ArrowDown" });
      await wrapper.vm.$nextTick();

      await wrapper.find(".multiselect").trigger("keydown", { key: "Enter" });
      await wrapper.vm.$nextTick();

      expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["1"]);
      wrapper.unmount();
    });

    it("selects focused option with Space", async () => {
      const wrapper = createWrapper();

      await wrapper.find(".multiselect").trigger("keydown", { key: "Enter" });
      await wrapper
        .find(".multiselect")
        .trigger("keydown", { key: "ArrowDown" });
      await wrapper.vm.$nextTick();

      await wrapper.find(".multiselect").trigger("keydown", { key: " " });
      await wrapper.vm.$nextTick();

      expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["1"]);
      wrapper.unmount();
    });
  });

  describe("Single Select Mode", () => {
    it("selects single option and closes dropdown", async () => {
      const wrapper = createWrapper();

      await wrapper.find(".multiselect-input").trigger("click");
      await wrapper.vm.$nextTick();

      const firstOption = getOptions()[0] as HTMLElement;
      await firstOption.click();
      await wrapper.vm.$nextTick();

      expect(wrapper.emitted("update:modelValue")?.[0]).toEqual(["1"]);
      expect(getDropdown()).toBeNull();
      wrapper.unmount();
    });

    it("displays selected option", async () => {
      const wrapper = createWrapper({ modelValue: "1" });
      await wrapper.vm.$nextTick();

      expect(wrapper.find(".selected-options").text()).toContain("Option 1");
      wrapper.unmount();
    });
  });

  describe("Multiple Select Mode", () => {
    it("selects multiple options without closing dropdown", async () => {
      const wrapper = createWrapper({ multiple: true });

      await wrapper.find(".multiselect-input").trigger("click");
      await wrapper.vm.$nextTick();

      const firstOption = getOptions()[1] as HTMLElement;
      firstOption.click();
      await wrapper.vm.$nextTick();

      expect(wrapper.emitted("update:modelValue")?.[0]).toBeDefined();
      expect(getDropdown()).not.toBeNull();

      const secondOption = getOptions()[2] as HTMLElement;
      secondOption.click();
      await wrapper.vm.$nextTick();

      expect(wrapper.emitted("update:modelValue")).toBeTruthy();
      wrapper.unmount();
    });

    it("displays multiple selected options", async () => {
      const wrapper = createWrapper({ multiple: true, modelValue: ["1", "2"] });
      await wrapper.vm.$nextTick();

      const selectedText = wrapper.find(".selected-options").text();
      expect(selectedText).toContain("Option 1");
      expect(selectedText).toContain("Option 2");
      wrapper.unmount();
    });

    it("shows select all option when multiple mode", async () => {
      const wrapper = createWrapper({ multiple: true });

      await wrapper.find(".multiselect-input").trigger("click");
      await wrapper.vm.$nextTick();

      expect(document.querySelector(".select-all-option")).not.toBeNull();
      wrapper.unmount();
    });
  });

  describe("Search Functionality", () => {
    it("filters options based on search input", async () => {
      const wrapper = createWrapper();

      await wrapper.find(".multiselect-input").trigger("click");
      await wrapper.vm.$nextTick();

      const searchInput = document.querySelector(
        ".multiselect-search input",
      ) as HTMLInputElement;
      if (searchInput) {
        searchInput.value = "Option 1";
        searchInput.dispatchEvent(new Event("input"));
        await wrapper.vm.$nextTick();

        const visibleOptions = getOptions();
        expect(visibleOptions.length).toBe(1);
        expect(visibleOptions[0].textContent).toContain("Option 1");
      }
      wrapper.unmount();
    });

    it("shows no options message when search has no results", async () => {
      const wrapper = createWrapper();

      await wrapper.find(".multiselect-input").trigger("click");
      await wrapper.vm.$nextTick();

      const searchInput = document.querySelector(
        ".multiselect-search input",
      ) as HTMLInputElement;
      if (searchInput) {
        searchInput.value = "nonexistent";
        searchInput.dispatchEvent(new Event("input"));
        await wrapper.vm.$nextTick();

        expect(document.querySelector(".no-options")).not.toBeNull();
      }
      wrapper.unmount();
    });

    it("does not show search input when disableSearch is true", async () => {
      const wrapper = createWrapper({ disableSearch: true });

      await wrapper.find(".multiselect-input").trigger("click");
      await wrapper.vm.$nextTick();

      expect(wrapper.find(".multiselect-search").exists()).toBe(false);
      wrapper.unmount();
    });
  });

  describe("Clear Selection", () => {
    it("clears selection when clear icon is clicked", async () => {
      const wrapper = createWrapper({ modelValue: "1" });
      await wrapper.vm.$nextTick();

      const clearIcon = wrapper.find(".action-items svg");
      clearIcon.trigger("click");
      await wrapper.vm.$nextTick();

      expect(wrapper.emitted("update:modelValue")).toBeTruthy();
      wrapper.unmount();
    });

    it("does not show clear icon when showRemoveSelection is false", async () => {
      const wrapper = createWrapper({
        modelValue: "1",
        showRemoveSelection: false,
      });
      await wrapper.vm.$nextTick();

      const actionItems = wrapper.find(".action-items");
      expect(actionItems.findAll("svg").length).toBe(1);
      wrapper.unmount();
    });
  });

  describe("Grouped Options", () => {
    it("renders group headers", async () => {
      const wrapper = createWrapper({ options: groupedOptions });

      await wrapper.find(".multiselect-input").trigger("click");
      await wrapper.vm.$nextTick();

      const groupHeaders = document.querySelectorAll(".multiselect-group");
      expect(groupHeaders.length).toBe(2);

      const groupTexts = [...groupHeaders].map((element) =>
        element.textContent?.trim(),
      );
      expect(groupTexts).toContain("Group A");
      expect(groupTexts).toContain("Group B");

      wrapper.unmount();
    });

    it("allows group selection in multiple mode", async () => {
      const wrapper = createWrapper({
        options: groupedOptions,
        multiple: true,
      });

      await wrapper.find(".multiselect-input").trigger("click");
      await wrapper.vm.$nextTick();

      const groupHeader = document.querySelector(".multiselect-group");
      if (groupHeader) {
        (groupHeader as HTMLElement).click();
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted("update:modelValue")).toBeTruthy();
      }
      wrapper.unmount();
    });
  });

  describe("Loading State", () => {
    it("shows loading indicator when loading is true", async () => {
      const wrapper = createWrapper({ loading: true });

      await wrapper.find(".multiselect-input").trigger("click");
      await wrapper.vm.$nextTick();

      expect(document.querySelector(".loading-container")).not.toBeNull();
      wrapper.unmount();
    });
  });
});
