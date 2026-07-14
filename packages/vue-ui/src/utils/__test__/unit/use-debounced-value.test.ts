import { afterEach, describe, expect, it, vi } from "vitest";

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

    const promise = useDebouncedValue("test", 500);
    let isResolved = false;

    promise.then(() => {
      isResolved = true;
    });

    vi.advanceTimersByTime(499);
    await Promise.resolve();

    expect(isResolved).toBe(false);

    vi.advanceTimersByTime(1);
    await Promise.resolve();

    expect(isResolved).toBe(true);
  });
});
