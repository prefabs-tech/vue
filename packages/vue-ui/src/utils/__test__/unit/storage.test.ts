import { describe, expect, it } from "vitest";

import { getStorage } from "../../storage";

describe("getStorage", () => {
  it("returns sessionStorage when storageType is sessionStorage", () => {
    expect(getStorage("sessionStorage")).toBe(sessionStorage);
  });

  it("returns localStorage when storageType is localStorage", () => {
    expect(getStorage("localStorage")).toBe(localStorage);
  });
});
