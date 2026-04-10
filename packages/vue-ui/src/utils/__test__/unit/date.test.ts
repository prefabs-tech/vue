import { describe, expect, it } from "vitest";

import { formatDate, formatDateTime } from "../../date";

describe("formatDate", () => {
  it("returns null for an empty string", () => {
    expect(formatDate("")).toBeNull();
  });

  it("returns null for zero (falsy number)", () => {
    expect(formatDate(0)).toBeNull();
  });

  it("returns null for an invalid date string", () => {
    expect(formatDate("not-a-date")).toBeNull();
  });

  it("formats a date string with default locale en-GB", () => {
    const result = formatDate("2025-01-01");

    expect(result).toBe("1 Jan 2025");
  });

  it("formats a timestamp number", () => {
    // 2025-01-01T00:00:00.000Z
    const timestamp = Date.UTC(2025, 0, 1);
    const result = formatDate(timestamp, "en-GB");

    expect(result).toContain("2025");
    expect(result).toContain("Jan");
  });

  it("accepts a custom locale", () => {
    const result = formatDate("2025-06-15", "fr-FR");

    expect(result).not.toBeNull();
    expect(typeof result).toBe("string");
  });
});

describe("formatDateTime", () => {
  it("returns null for an empty string", () => {
    expect(formatDateTime("")).toBeNull();
  });

  it("returns null for an invalid date string", () => {
    expect(formatDateTime("not-a-date")).toBeNull();
  });

  it("returns a string without a leading comma", () => {
    const result = formatDateTime("2025-01-01T14:30:00.000Z", "en-GB");

    expect(result).not.toBeNull();
    expect(result?.startsWith(",")).toBe(false);
  });

  it("includes time in the formatted output", () => {
    const result = formatDateTime("2025-01-01T14:30:00.000Z", "en-GB");

    // Result should contain AM or PM since hour12 is true
    expect(result).toMatch(/am|pm/i);
  });
});
