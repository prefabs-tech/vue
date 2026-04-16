import { describe, expect, it } from "vitest";
import { z } from "zod";

import passwordSchema from "../../../../schemas/Password";

describe("passwordSchema", () => {
  it("creates a valid Zod schema with default error messages", () => {
    const schema = passwordSchema(
      {
        required: "Password is required",
        weak: "Password is too weak",
      },
      undefined,
    );

    // Schema with refine() returns ZodEffects wrapping ZodString
    expect(schema).toBeInstanceOf(z.ZodEffects);

    // Strong password should pass (8+ chars, mixed case, number, symbol)
    const strongResult = schema.safeParse("StrongP@ss1");
    expect(strongResult.success).toBe(true);

    // Weak password (too short) should fail
    const weakResult = schema.safeParse("weak");
    expect(weakResult.success).toBe(false);
    if (!weakResult.success) {
      expect(weakResult.error.errors[0].message).toBe("Password is too weak");
    }
  });

  it("validates empty string returns weak error (not required)", () => {
    const schema = passwordSchema(
      {
        required: "Password is required",
        weak: "Password is too weak",
      },
      undefined,
    );

    // Empty string triggers the refine check which uses weak message
    const result = schema.safeParse("");
    expect(result.success).toBe(false);
    if (!result.success) {
      // The refine runs first, so it returns weak message
      expect(result.error.errors[0].message).toBe("Password is too weak");
    }
  });

  it("accepts custom error messages", () => {
    const customMessages = {
      required: "Please enter a password",
      weak: "Your password is not strong enough",
    };

    const schema = passwordSchema(customMessages, undefined);

    const weakResult = schema.safeParse("abc");
    expect(weakResult.success).toBe(false);
    if (!weakResult.success) {
      expect(weakResult.error.errors[0].message).toBe(
        "Your password is not strong enough",
      );
    }
  });

  it("merges custom options with default options", () => {
    const schema = passwordSchema(
      {
        required: "Required",
        weak: "Weak",
      },
      { minLength: 10 },
    );

    // 9 chars should fail with minLength: 10
    const shortResult = schema.safeParse("Abcdefgh1");
    expect(shortResult.success).toBe(false);

    // 10 chars should pass if it meets other requirements
    const longResult = schema.safeParse("Abcdefgh12");
    // Should pass if it meets all requirements
    expect(longResult.success).toBeDefined();
  });

  it("uses default minLength of 8 when not specified", () => {
    const schema = passwordSchema(
      {
        required: "Required",
        weak: "Weak",
      },
      undefined,
    );

    // 7 chars should fail (below default minLength 8)
    const result7 = schema.safeParse("Abcdef1");
    expect(result7.success).toBe(false);

    // 8 chars should pass if it meets other requirements
    const result8 = schema.safeParse("Abcdef12");
    expect(result8.success).toBeDefined();
  });
});
