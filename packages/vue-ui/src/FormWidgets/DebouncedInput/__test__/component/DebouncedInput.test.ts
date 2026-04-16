import { mount } from "@vue/test-utils";
import { describe, expect, it, vi, afterEach } from "vitest";

import DebouncedInput from "../../Index.vue";

const flushMicrotasks = async () => {
  await Promise.resolve();
  await Promise.resolve();
};

describe("DebouncedInput (component)", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("emits update:modelValue after debounceTime", async () => {
    vi.useFakeTimers();

    const wrapper = mount(DebouncedInput, {
      props: {
        modelValue: "",
        debounceTime: 50,
      },
    });

    const input = wrapper.find("input");
    await input.setValue("hello");

    expect(wrapper.emitted("update:modelValue")).toBeFalsy();

    vi.advanceTimersByTime(60);
    await flushMicrotasks();

    expect(wrapper.emitted("update:modelValue")).toBeTruthy();
    expect(wrapper.emitted("update:modelValue")?.[0][0]).toBe("hello");
  });
});
