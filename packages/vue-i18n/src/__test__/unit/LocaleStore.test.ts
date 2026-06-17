import { beforeEach, describe, expect, it, vi } from "vitest";

import useLocaleStore from "../../store";

describe("useLocaleStore", () => {
  const slug = "test-app";
  const key = `${slug}.locale`;

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it("returns undefined when no locale is stored", () => {
    const { getLocale } = useLocaleStore(slug);

    expect(getLocale()).toBeUndefined();
  });

  it("retrieves stored locale from localStorage", () => {
    localStorage.setItem(key, "fr");

    const { getLocale } = useLocaleStore(slug);

    expect(getLocale()).toBe("fr");
  });

  it("persists locale to localStorage", () => {
    const { setLocale } = useLocaleStore(slug);

    setLocale("en");

    expect(localStorage.getItem(key)).toBe("en");
  });

  it("removes locale from localStorage when set to undefined", () => {
    localStorage.setItem(key, "fr");

    const { setLocale } = useLocaleStore(slug);

    setLocale(undefined);

    expect(localStorage.getItem(key)).toBeNull();
  });
});
