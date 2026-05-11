import { describe, expect, it } from "vitest";

import parse from "../../parse";

describe("parse", () => {
  it("returns fallback when value is undefined", () => {
    expect(parse(undefined, "default")).toBe("default");
    expect(parse(undefined, 42)).toBe(42);
    expect(parse(undefined, true)).toBe(true);
  });

  it("returns boolean when value is type boolean", () => {
    expect(parse(true, false)).toBe(true);
    expect(parse(false, true)).toBe(false);
  });

  it("converts string to boolean when fallback is boolean", () => {
    expect(parse("true", false)).toBe(true);
    expect(parse("false", true)).toBe(false);
    expect(parse("1", false)).toBe(true);
    expect(parse("0", false)).toBe(false);
  });

  it("converts string to number when fallback is number", () => {
    expect(parse("42", 0)).toBe(42);
    expect(parse("3.14", 0)).toBe(3.14);
    expect(parse("-10", 0)).toBe(-10);
  });

  it("returns string value when fallback is string", () => {
    expect(parse("hello", "default")).toBe("hello");
    expect(parse("123", "default")).toBe("123");
  });

  it("returns bigint value when provided", () => {
    const bigintValue = 9_007_199_254_740_991n;
    expect(parse(bigintValue, null)).toBe(bigintValue);
  });

  it("returns number value when provided", () => {
    expect(parse(42, "default")).toBe(42);
    expect(parse(3.14, "default")).toBe(3.14);
  });
});
