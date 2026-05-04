import { describe, expect, it } from "vitest";

import { formatDuration } from "../../format-duration";

describe("formatDuration", () => {
  it("formats zero seconds as 0:00", () => {
    expect(formatDuration(0)).toBe("0:00");
  });

  it("formats 90 seconds as 1:30", () => {
    expect(formatDuration(90)).toBe("1:30");
  });

  it("pads seconds below 10 with a leading zero", () => {
    expect(formatDuration(65)).toBe("1:05");
  });

  it("formats seconds-only duration (under 60) with 0 minutes", () => {
    expect(formatDuration(45)).toBe("0:45");
  });

  it("formats large durations correctly", () => {
    expect(formatDuration(3661)).toBe("61:01");
  });
});
