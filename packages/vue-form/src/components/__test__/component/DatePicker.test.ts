import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import { z } from "zod";

import DatePicker from "../../DatePicker.vue";

describe("DatePicker", () => {
  it("renders DatePicker component", () => {
    const wrapper = mount(DatePicker);

    expect(wrapper.exists()).toBe(true);
  });

  it("renders label when provided", () => {
    const wrapper = mount(DatePicker, {
      props: {
        label: "Select Date",
      },
    });
    const label = wrapper.find("label span");

    expect(label.exists()).toBe(true);
    expect(label.text()).toBe("Select Date");
  });

  it("applies autoApply prop with default true", () => {
    const wrapper = mount(DatePicker);

    expect(wrapper.vm.autoApply).toBe(true);
  });

  it("applies custom autoApply prop", () => {
    const wrapper = mount(DatePicker, {
      props: {
        autoApply: false,
      },
    });

    expect(wrapper.vm.autoApply).toBe(false);
  });

  it("applies disabled prop", () => {
    const wrapper = mount(DatePicker, {
      props: {
        disabled: true,
      },
    });

    expect(wrapper.vm.disabled).toBe(true);
  });

  it("applies disabledWeekDays prop", () => {
    const wrapper = mount(DatePicker, {
      props: {
        disabledWeekDays: [0, 6],
      },
    });

    expect(wrapper.vm.disabledWeekDays).toEqual([0, 6]);
  });

  it("applies enableTimePicker with default false", () => {
    const wrapper = mount(DatePicker);

    expect(wrapper.vm.enableTimePicker).toBe(false);
  });

  it("applies custom enableTimePicker", () => {
    const wrapper = mount(DatePicker, {
      props: {
        enableTimePicker: true,
      },
    });

    expect(wrapper.vm.enableTimePicker).toBe(true);
  });

  it("applies format prop", () => {
    const wrapper = mount(DatePicker, {
      props: {
        format: "yyyy-MM-dd",
      },
    });

    expect(wrapper.vm.format).toBe("yyyy-MM-dd");
  });

  it("applies placeholder", () => {
    const wrapper = mount(DatePicker, {
      props: {
        placeholder: "Select a date",
      },
    });

    expect(wrapper.vm.placeholder).toBe("Select a date");
  });

  it("applies teleport prop", () => {
    const wrapper = mount(DatePicker, {
      props: {
        teleport: "body",
      },
    });

    expect(wrapper.vm.teleport).toBe("body");
  });

  it("emits update:modelValue on date selection", async () => {
    const wrapper = mount(DatePicker);
    const testDate = new Date("2026-04-10");

    await wrapper.vm.$emit("update:modelValue", testDate);

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([testDate]);
  });

  it("registers scroll listener when teleport is enabled", () => {
    const addEventListenerSpy = vi.spyOn(window, "addEventListener");

    mount(DatePicker, {
      props: {
        teleport: true,
      },
    });

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function),
      true,
    );

    addEventListenerSpy.mockRestore();
  });

  it("removes scroll listener on unmount when teleport is enabled", () => {
    const removeEventListenerSpy = vi.spyOn(window, "removeEventListener");

    const wrapper = mount(DatePicker, {
      props: {
        teleport: true,
      },
    });

    wrapper.unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function),
      true,
    );

    removeEventListenerSpy.mockRestore();
  });

  it("applies custom schema when provided", () => {
    const customSchema = z.date();
    const wrapper = mount(DatePicker, {
      props: {
        schema: customSchema,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it("uses default name when not provided", () => {
    const wrapper = mount(DatePicker);

    expect(wrapper.vm.name).toBe("date");
  });
});
