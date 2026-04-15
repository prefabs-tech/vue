import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";

import DatePicker from "../../DatePicker.vue";

describe("DatePicker", () => {
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
});
