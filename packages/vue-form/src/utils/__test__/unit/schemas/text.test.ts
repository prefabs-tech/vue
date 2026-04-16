import { describe, expect, it } from "vitest";
import { z } from "zod";

import textSchema from "../../../../schemas/Text";

describe("textSchema", () => {
  it("creates a valid Zod schema with optional validation by default", () => {
    const schema = textSchema(
      {
        required: "This field is required",
        invalid: "Invalid input",
      },
      undefined,
    );

    // The schema always applies refine() (even when not required), so it's ZodEffects
    expect(schema).toBeInstanceOf(z.ZodEffects);

    // Empty string should pass when not required (refine returns true)
    const emptyResult = schema.safeParse("");
    expect(emptyResult.success).toBe(true);

    // Any string should pass when not required
    const result = schema.safeParse("Some text");
    expect(result.success).toBe(true);
  });

  it("validates required fields", () => {
    const schema = textSchema(
      {
        required: "This field is required",
        invalid: "Invalid input",
      },
      { required: true },
    );

    expect(schema).toBeInstanceOf(z.ZodEffects);

    // Empty string should fail when required
    const emptyResult = schema.safeParse("");
    expect(emptyResult.success).toBe(false);
    if (!emptyResult.success) {
      expect(emptyResult.error.errors[0].message).toBe(
        "This field is required",
      );
    }

    // Non-empty string should pass
    const result = schema.safeParse("Some text");
    expect(result.success).toBe(true);
  });

  it("accepts custom error messages", () => {
    const customMessages = {
      required: "Please fill in this field",
      invalid: "Invalid value",
    };

    const schema = textSchema(customMessages, { required: true });

    const result = schema.safeParse("");
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors[0].message).toBe("Please fill in this field");
    }
  });
});
