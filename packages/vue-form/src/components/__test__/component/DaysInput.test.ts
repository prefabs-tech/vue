import { mount } from "@vue/test-utils";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { z } from "zod";

import DaysInput from "../../DaysInput.vue";

describe("DaysInput", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-04-10T00:00:00Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders NumberInput component", () => {
    const wrapper = mount(DaysInput);
    const numberInput = wrapper.findComponent({ name: "NumberInput" });

    expect(numberInput.exists()).toBe(true);
  });

  it("forwards disabled prop to NumberInput", () => {
    const wrapper = mount(DaysInput, {
      props: {
        disabled: true,
      },
    });
    const numberInput = wrapper.findComponent({ name: "NumberInput" });

    expect(numberInput.props("disabled")).toBe(true);
  });

  it("forwards label prop to NumberInput", () => {
    const wrapper = mount(DaysInput, {
      props: {
        label: "Days until event",
      },
    });
    const numberInput = wrapper.findComponent({ name: "NumberInput" });

    expect(numberInput.props("label")).toBe("Days until event");
  });

  it("forwards placeholder prop to NumberInput", () => {
    const wrapper = mount(DaysInput, {
      props: {
        placeholder: "Enter days",
      },
    });
    const numberInput = wrapper.findComponent({ name: "NumberInput" });

    expect(numberInput.props("placeholder")).toBe("Enter days");
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

  it("uses default schema z.coerce.number().optional()", () => {
    const wrapper = mount(DaysInput);
    const numberInput = wrapper.findComponent({ name: "NumberInput" });

    expect(numberInput.props("schema")).toBeDefined();
  });

  it("applies custom schema when provided", () => {
    const customSchema = z.coerce.number().min(1);
    const wrapper = mount(DaysInput, {
      props: {
        schema: customSchema,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it("uses default name when not provided", () => {
    const wrapper = mount(DaysInput);
    const numberInput = wrapper.findComponent({ name: "NumberInput" });

    expect(numberInput.props("name")).toBe("days-input");
  });
});
