import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

import DaysInput from "../../DaysInput.vue";

describe("DaysInput", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-04-10T00:00:00Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("emits update:modelValue on input", async () => {
    const wrapper = mount(DaysInput);
    const numberInput = wrapper.findComponent({ name: "NumberInput" });

    await numberInput.vm.$emit("update:modelValue", 5);

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0]).toEqual([5]);
  });

  it("emits update:date with ISO string when value changes", async () => {
    const wrapper = mount(DaysInput);
    const numberInput = wrapper.findComponent({ name: "NumberInput" });

    await numberInput.vm.$emit("update:modelValue", 5);

    expect(wrapper.emitted("update:date")).toBeTruthy();
    const emittedDate = wrapper.emitted("update:date")?.[0]?.[0] as string;
    const expectedDate = new Date("2026-04-15T00:00:00Z");

    expect(new Date(emittedDate).toISOString()).toBe(
      expectedDate.toISOString(),
    );
  });

  it("emits update:date on mount when modelValue is provided", () => {
    const wrapper = mount(DaysInput, {
      props: {
        modelValue: 3,
      },
    });

    expect(wrapper.emitted("update:date")).toBeTruthy();
    const emittedDate = wrapper.emitted("update:date")?.[0]?.[0] as string;
    const expectedDate = new Date("2026-04-13T00:00:00Z");

    expect(new Date(emittedDate).toISOString()).toBe(
      expectedDate.toISOString(),
    );
  });

  it("emits update:date on mount when modelValue is 0", () => {
    const wrapper = mount(DaysInput, {
      props: {
        modelValue: 0,
      },
    });

    expect(wrapper.emitted("update:date")).toBeTruthy();
    const emittedDate = wrapper.emitted("update:date")?.[0]?.[0] as string;
    const expectedDate = new Date("2026-04-10T00:00:00Z");

    expect(new Date(emittedDate).toISOString()).toBe(
      expectedDate.toISOString(),
    );
  });
});
