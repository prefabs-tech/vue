import { describe, expect, it, vi, afterEach } from "vitest";

import useDebouncedValue from "../../use-debounced-value";

describe("useDebouncedValue", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("resolves with a ref containing the initial value after the delay", async () => {
    vi.useFakeTimers();

    const promise = useDebouncedValue("hello", 300);

    vi.advanceTimersByTime(300);

    const debouncedReference = await promise;

    expect(debouncedReference.value).toBe("hello");
  });

  it("does not resolve before the delay has passed", async () => {
    vi.useFakeTimers();

    let resolved = false;

    useDebouncedValue("test", 500).then(() => {
      resolved = true;
    });

    vi.advanceTimersByTime(499);
    await Promise.resolve();

    expect(resolved).toBe(false);

    vi.advanceTimersByTime(1);
    await Promise.resolve();

    expect(resolved).toBe(true);
  });
});
