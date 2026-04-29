import Session from "supertokens-web-js/recipe/session";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { isProfileCompleted } from "../../supertokens/helper";

vi.mock("supertokens-web-js/recipe/session", () => ({
  default: {
    getClaimValue: vi.fn(),
    doesSessionExist: vi.fn(),
    validateClaims: vi.fn(),
  },
}));

vi.mock("supertokens-web-js/recipe/userroles", () => ({
  UserRoleClaim: {
    id: "st-user-roles",
    validators: {
      includes: vi.fn(),
    },
  },
}));

describe("isProfileCompleted()", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns undefined when profileClaim is null", async () => {
    vi.mocked(Session.getClaimValue).mockResolvedValueOnce(null);

    const result = await isProfileCompleted();

    expect(result).toBeUndefined();
  });

  it("returns undefined when profileClaim is undefined", async () => {
    vi.mocked(Session.getClaimValue).mockResolvedValueOnce(undefined);

    const result = await isProfileCompleted();

    expect(result).toBeUndefined();
  });

  it("returns true when isVerified is true", async () => {
    vi.mocked(Session.getClaimValue).mockResolvedValueOnce({
      isVerified: true,
    });

    const result = await isProfileCompleted();

    expect(result).toBe(true);
  });

  it("returns true when within grace period", async () => {
    const futureTime = Date.now() + 60000; // 1 minute in the future

    vi.mocked(Session.getClaimValue).mockResolvedValueOnce({
      isVerified: false,
      gracePeriodEndsAt: futureTime,
    });

    const result = await isProfileCompleted();

    expect(result).toBe(true);
  });

  it("returns false when grace period has expired", async () => {
    const pastTime = Date.now() - 60000; // 1 minute in the past

    vi.mocked(Session.getClaimValue).mockResolvedValueOnce({
      isVerified: false,
      gracePeriodEndsAt: pastTime,
    });

    const result = await isProfileCompleted();

    expect(result).toBe(false);
  });

  it("returns false when not verified and no grace period", async () => {
    vi.mocked(Session.getClaimValue).mockResolvedValueOnce({
      isVerified: false,
    });

    const result = await isProfileCompleted();

    expect(result).toBe(false);
  });
});
