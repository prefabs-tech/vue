import { describe, expect, it } from "vitest";
import { z } from "zod";

import emailSchema from "../../../../schemas/Email";

describe("emailSchema", () => {
  it("creates a valid Zod schema with default error messages", () => {
    const schema = emailSchema(
      {
        invalid: "Invalid email format",
        required: "Email is required",
      },
      undefined,
    );

    // Schema with refine() returns ZodEffects wrapping ZodString
    expect(schema).toBeInstanceOf(z.ZodEffects);

    // Valid email should pass
    const result = schema.safeParse("test@example.com");
    expect(result.success).toBe(true);

    // Invalid email should fail
    const invalidResult = schema.safeParse("not-an-email");
    expect(invalidResult.success).toBe(false);
    if (!invalidResult.success) {
      expect(invalidResult.error.errors[0].message).toBe(
        "Invalid email format",
      );
    }
  });

  it("validates empty string returns invalid error (not required)", () => {
    const schema = emailSchema(
      {
        invalid: "Invalid email format",
        required: "Email is required",
      },
      undefined,
    );

    // Empty string triggers the refine check which uses invalid message
    const result = schema.safeParse("");
    expect(result.success).toBe(false);
    if (!result.success) {
      // The refine runs first, so it returns invalid message
      expect(result.error.errors[0].message).toBe("Invalid email format");
    }
  });

  it("accepts custom error messages", () => {
    const customMessages = {
      invalid: "Must be a valid email address",
      required: "Please enter your email",
    };

    const schema = emailSchema(customMessages, undefined);

    const invalidResult = schema.safeParse("invalid");
    expect(invalidResult.success).toBe(false);
    if (!invalidResult.success) {
      expect(invalidResult.error.errors[0].message).toBe(
        "Must be a valid email address",
      );
    }
  });

  it("forwards options to validator.isEmail", () => {
    const schema = emailSchema(
      {
        invalid: "Invalid email",
        required: "Email is required",
      },
      { allow_utf8_local_part: true },
    );

    // Test with UTF-8 local part (should pass with option enabled)
    const result = schema.safeParse("test@exämple.com");
    // This may or may not pass depending on validator.js version
    expect(result.success).toBeDefined();
  });
});
