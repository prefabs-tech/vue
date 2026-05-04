import { describe, expect, it } from "vitest";

import numberSchema from "../../../../schemas/Number";

describe("numberSchema", () => {
  it("creates a valid Zod coerce.number schema", () => {
    const schema = numberSchema(
      {
        invalid: "Must be a valid integer",
        required: "This field is required",
      },
      undefined,
    );

    // Should coerce string to number
    const stringResult = schema.safeParse("123");
    expect(stringResult.success).toBe(true);
    if (stringResult.success) {
      expect(typeof stringResult.data).toBe("number");
      expect(stringResult.data).toBe(123);
    }

    // Direct number should work
    const numberResult = schema.safeParse(456);
    expect(numberResult.success).toBe(true);
  });

  it("validates integer constraint", () => {
    const schema = numberSchema(
      {
        invalid: "Must be a valid integer",
        required: "This field is required",
      },
      undefined,
    );

    // Integer should pass
    const intResult = schema.safeParse("42");
    expect(intResult.success).toBe(true);

    // Float should fail (not an integer)
    const floatResult = schema.safeParse("3.14");
    expect(floatResult.success).toBe(false);
    if (!floatResult.success) {
      expect(floatResult.error.errors[0].message).toBe(
        "Must be a valid integer",
      );
    }
  });

  it("accepts custom error messages", () => {
    const customMessages = {
      invalid: "Please enter a valid whole number",
      required: "Please enter a number",
    };

    const schema = numberSchema(customMessages, undefined);

    const result = schema.safeParse("abc");
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe(
        "Please enter a valid whole number",
      );
    }
  });

  it("respects min and max options", () => {
    const schema = numberSchema(
      {
        invalid: "Invalid",
        required: "Required",
      },
      { max: 100, min: 10 },
    );

    // Below minimum should fail
    const belowMin = schema.safeParse("5");
    expect(belowMin.success).toBe(false);

    // Above maximum should fail
    const aboveMax = schema.safeParse("200");
    expect(aboveMax.success).toBe(false);

    // Within range should pass
    const inRange = schema.safeParse("50");
    expect(inRange.success).toBe(true);
  });

  it("respects allow_leading_zeroes option", () => {
    const schema = numberSchema(
      {
        invalid: "Invalid",
        required: "Required",
      },
      { allow_leading_zeroes: true },
    );

    // Leading zeros should pass
    const leadingZero = schema.safeParse("007");
    expect(leadingZero.success).toBe(true);
    if (leadingZero.success) {
      expect(leadingZero.data).toBe(7);
    }
  });
});
