import { describe, expect, it } from "vitest";

import { normalizeOptions } from "../../select";

describe("normalizeOptions", () => {
  it("returns empty array when given empty array", () => {
    const result = normalizeOptions([]);

    expect(result).toEqual([]);
  });

  it("normalizes flat options array", () => {
    const options = [
      { label: "Option 1", value: "opt1" },
      { label: "Option 2", value: "opt2" },
    ];

    const result = normalizeOptions(options);

    expect(result).toEqual([
      { groupLabel: undefined, label: "Option 1", value: "opt1" },
      { groupLabel: undefined, label: "Option 2", value: "opt2" },
    ]);
  });

  it("normalizes grouped options array", () => {
    const options = [
      {
        label: "Group 1",
        options: [
          { label: "Option 1", value: "opt1" },
          { label: "Option 2", value: "opt2" },
        ],
      },
      {
        label: "Group 2",
        options: [{ label: "Option 3", value: "opt3" }],
      },
    ];

    const result = normalizeOptions(options);

    expect(result).toEqual([
      { groupLabel: "Group 1", label: "Option 1", value: "opt1" },
      { groupLabel: "Group 1", label: "Option 2", value: "opt2" },
      { groupLabel: "Group 2", label: "Option 3", value: "opt3" },
    ]);
  });

  it("remaps label using custom labelKey", () => {
    const options = [
      { name: "Option 1", value: "opt1" },
      { name: "Option 2", value: "opt2" },
    ];

    const result = normalizeOptions(options, "name");

    expect(result).toEqual([
      {
        groupLabel: undefined,
        label: "Option 1",
        name: "Option 1",
        value: "opt1",
      },
      {
        groupLabel: undefined,
        label: "Option 2",
        name: "Option 2",
        value: "opt2",
      },
    ]);
  });

  it("remaps value using custom valueKey", () => {
    const options = [
      { id: 1, label: "Option 1" },
      { id: 2, label: "Option 2" },
    ];

    const result = normalizeOptions(options, undefined, "id");

    expect(result).toEqual([
      { groupLabel: undefined, id: 1, label: "Option 1", value: 1 },
      { groupLabel: undefined, id: 2, label: "Option 2", value: 2 },
    ]);
  });

  it("remaps both label and value using custom keys", () => {
    const options = [
      { id: 1, name: "Option 1" },
      { id: 2, name: "Option 2" },
    ];

    const result = normalizeOptions(options, "name", "id");

    expect(result).toEqual([
      {
        groupLabel: undefined,
        id: 1,
        label: "Option 1",
        name: "Option 1",
        value: 1,
      },
      {
        groupLabel: undefined,
        id: 2,
        label: "Option 2",
        name: "Option 2",
        value: 2,
      },
    ]);
  });

  it("converts label to string", () => {
    const options = [
      { label: "123", value: "opt1" },
      { label: "true", value: "opt2" },
    ];

    const result = normalizeOptions(options);

    expect(result[0].label).toBe("123");
    expect(result[1].label).toBe("true");
  });

  it("preserves additional option properties", () => {
    const options = [
      { custom: "data", disabled: true, label: "Option 1", value: "opt1" },
    ];

    const result = normalizeOptions(options);

    expect(result[0]).toEqual({
      custom: "data",
      disabled: true,
      groupLabel: undefined,
      label: "Option 1",
      value: "opt1",
    });
  });

  it("flattens nested grouped options", () => {
    const options = [
      {
        label: "Group A",
        options: [
          { label: "A1", value: "a1" },
          { label: "A2", value: "a2" },
          { label: "A3", value: "a3" },
        ],
      },
    ];

    const result = normalizeOptions(options);

    expect(result.length).toBe(3);
    expect(result.every((opt) => opt.groupLabel === "Group A")).toBe(true);
  });
});
