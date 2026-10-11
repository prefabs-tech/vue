import type { AppConfig } from "@prefabs.tech/vue3-config";

import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";

const st = vi.hoisted(() => ({
  attemptRefreshingSession: vi.fn().mockResolvedValue(true),
  doesSessionExist: vi.fn(),
  emailPasswordSignIn: vi.fn(),
  emailPasswordSignUp: vi.fn(),
  emailVerificationInit: vi.fn(() => "emailVerification"),
  getAuthorisationURLWithQueryParamsAndSetState: vi.fn(),
  getClaimValue: vi.fn(),
  rolesIncludes: vi.fn((role: string) => `includes:${role}`),
  sessionInit: vi.fn(() => "session"),
  signOut: vi.fn().mockResolvedValue(undefined),
  superTokensInit: vi.fn(),
  thirdPartyEmailPasswordInit: vi.fn(() => "thirdPartyEmailPassword"),
  validateClaims: vi.fn(),
}));

vi.mock("supertokens-web-js", () => ({
  default: { init: st.superTokensInit },
}));

vi.mock("supertokens-web-js/recipe/session", () => ({
  default: {
    attemptRefreshingSession: st.attemptRefreshingSession,
    doesSessionExist: st.doesSessionExist,
    getClaimValue: st.getClaimValue,
    init: st.sessionInit,
    signOut: st.signOut,
    validateClaims: st.validateClaims,
  },
}));

vi.mock("supertokens-web-js/recipe/emailverification", () => ({
  default: { init: st.emailVerificationInit },
  sendVerificationEmail: vi.fn(),
}));

vi.mock("supertokens-web-js/recipe/thirdpartyemailpassword", () => ({
  default: { init: st.thirdPartyEmailPasswordInit },
  emailPasswordSignIn: st.emailPasswordSignIn,
  emailPasswordSignUp: st.emailPasswordSignUp,
  getAuthorisationURLWithQueryParamsAndSetState:
    st.getAuthorisationURLWithQueryParamsAndSetState,
  sendPasswordResetEmail: vi.fn(),
  submitNewPassword: vi.fn(),
}));

vi.mock("supertokens-web-js/recipe/userroles", () => ({
  UserRoleClaim: { id: "st-role", validators: { includes: st.rolesIncludes } },
}));

import type { UserType } from "../../types";

import useUserStore from "../../store";
import initSupertokens, {
  login,
  signup,
  socialSignIn,
  verifySessionRoles,
} from "../../supertokens";
import { ProfileValidationClaim } from "../../supertokens/profile-validation-claim";

const config = {
  apiBaseUrl: "https://api.test",
  appTitle: "Test app",
} as AppConfig;

const credentials = { email: "test@example.com", password: "secret" };

const getOnHandleEvent = () => {
  initSupertokens(config);

  const [[options]] = st.sessionInit.mock.calls as unknown as [
    [{ onHandleEvent: (context: { action: string }) => Promise<void> }],
  ];

  return options.onHandleEvent;
};

describe("supertokens", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe("#8 initialization", () => {
    it("initializes SuperTokens with the app info and base recipes", () => {
      initSupertokens(config);

      expect(st.superTokensInit).toHaveBeenCalledWith({
        appInfo: {
          apiBasePath: "/auth",
          apiDomain: "https://api.test",
          appName: "Test app",
        },
        recipeList: ["thirdPartyEmailPassword", "session"],
      });
    });

    it("uses authBasePath when configured", () => {
      initSupertokens({ ...config, authBasePath: "/custom-auth" } as AppConfig);

      expect(st.superTokensInit).toHaveBeenCalledWith(
        expect.objectContaining({
          appInfo: expect.objectContaining({ apiBasePath: "/custom-auth" }),
        }),
      );
    });
  });

  describe("#9 conditional EmailVerification recipe", () => {
    it("adds EmailVerification when the feature is enabled", () => {
      initSupertokens({
        ...config,
        user: { features: { signUp: { emailVerification: true } } },
      } as AppConfig);

      expect(st.superTokensInit).toHaveBeenCalledWith(
        expect.objectContaining({
          recipeList: [
            "thirdPartyEmailPassword",
            "session",
            "emailVerification",
          ],
        }),
      );
    });

    it("leaves EmailVerification out by default", () => {
      initSupertokens(config);

      expect(st.emailVerificationInit).not.toHaveBeenCalled();
    });
  });

  describe("#10 session auto-refresh", () => {
    it.each(["UNAUTHORISED", "SESSION_EXPIRED"])(
      "refreshes the session on %s while logged in",
      async (action) => {
        st.doesSessionExist.mockResolvedValue(true);
        const onHandleEvent = getOnHandleEvent();

        await onHandleEvent({ action });

        expect(st.attemptRefreshingSession).toHaveBeenCalled();
      },
    );

    it("does not refresh when there is no session", async () => {
      st.doesSessionExist.mockResolvedValue(false);
      const onHandleEvent = getOnHandleEvent();

      await onHandleEvent({ action: "UNAUTHORISED" });

      expect(st.attemptRefreshingSession).not.toHaveBeenCalled();
    });

    it("ignores other session events", async () => {
      st.doesSessionExist.mockResolvedValue(true);
      const onHandleEvent = getOnHandleEvent();

      await onHandleEvent({ action: "SESSION_CREATED" });

      expect(st.attemptRefreshingSession).not.toHaveBeenCalled();
    });
  });

  describe("#11 login error normalization", () => {
    it("returns the user on success", async () => {
      const user = { email: "test@example.com", id: "user-123" };
      st.emailPasswordSignIn.mockResolvedValue({ status: "OK", user });

      await expect(login(credentials)).resolves.toEqual(user);
      expect(st.emailPasswordSignIn).toHaveBeenCalledWith({
        formFields: [
          { id: "email", value: "test@example.com" },
          { id: "password", value: "secret" },
        ],
      });
    });

    it("maps WRONG_CREDENTIALS_ERROR to 401", async () => {
      st.emailPasswordSignIn.mockResolvedValue({
        status: "WRONG_CREDENTIALS_ERROR",
      });

      await expect(login(credentials)).rejects.toThrow("401");
    });

    it("maps a thrown 401 to 401", async () => {
      st.emailPasswordSignIn.mockRejectedValue({ status: 401 });

      await expect(login(credentials)).rejects.toThrow("401");
    });

    it("maps other failures to SOMETHING_WRONG", async () => {
      st.emailPasswordSignIn.mockResolvedValue({ status: "FIELD_ERROR" });

      await expect(login(credentials)).rejects.toThrow("SOMETHING_WRONG");

      st.emailPasswordSignIn.mockRejectedValue(new Error("network"));

      await expect(login(credentials)).rejects.toThrow("SOMETHING_WRONG");
    });
  });

  describe("#12 signup error normalization", () => {
    it("returns the user on success", async () => {
      const user = { email: "test@example.com", id: "user-123" };
      st.emailPasswordSignUp.mockResolvedValue({ status: "OK", user });

      await expect(signup(credentials)).resolves.toEqual(user);
    });

    it("maps FIELD_ERROR to 409", async () => {
      st.emailPasswordSignUp.mockResolvedValue({ status: "FIELD_ERROR" });

      await expect(signup(credentials)).rejects.toThrow("409");
    });

    it("maps other failures to SOMETHING_WRONG", async () => {
      st.emailPasswordSignUp.mockResolvedValue({ status: "GENERAL_ERROR" });

      await expect(signup(credentials)).rejects.toThrow("SOMETHING_WRONG");

      st.emailPasswordSignUp.mockRejectedValue(new Error("network"));

      await expect(signup(credentials)).rejects.toThrow("SOMETHING_WRONG");
    });
  });

  describe("#13 social sign-in", () => {
    it("redirects to the provider's authorisation URL", async () => {
      const assign = vi.fn();
      vi.stubGlobal("location", { ...window.location, assign });
      st.getAuthorisationURLWithQueryParamsAndSetState.mockResolvedValue(
        "https://accounts.google.com/auth",
      );

      await socialSignIn("google", "https://app.test/auth/callback/google");

      expect(
        st.getAuthorisationURLWithQueryParamsAndSetState,
      ).toHaveBeenCalledWith({
        authorisationURL: "https://app.test/auth/callback/google",
        providerId: "google",
      });
      expect(assign).toHaveBeenCalledWith("https://accounts.google.com/auth");

      vi.unstubAllGlobals();
    });
  });

  describe("#14 role validation", () => {
    const roleError = { validatorId: "st-role" };

    it("returns false when there is no session", async () => {
      st.doesSessionExist.mockResolvedValue(false);

      await expect(verifySessionRoles(["ADMIN"])).resolves.toBe(false);
      expect(st.validateClaims).not.toHaveBeenCalled();
    });

    it("adds a role validator for each claim", async () => {
      st.doesSessionExist.mockResolvedValue(true);
      st.validateClaims.mockResolvedValue([]);

      await verifySessionRoles(["ADMIN", "USER"]);

      const [[{ overrideGlobalClaimValidators }]] = st.validateClaims.mock
        .calls as unknown as [
        [{ overrideGlobalClaimValidators: (globals: string[]) => string[] }],
      ];

      expect(overrideGlobalClaimValidators(["global"])).toEqual([
        "global",
        "includes:ADMIN",
        "includes:USER",
      ]);
    });

    it("returns true when every claim passes", async () => {
      st.doesSessionExist.mockResolvedValue(true);
      st.validateClaims.mockResolvedValue([]);

      await expect(verifySessionRoles(["ADMIN"])).resolves.toBe(true);
    });

    it("returns true when at least one role claim passes", async () => {
      st.doesSessionExist.mockResolvedValue(true);
      st.validateClaims.mockResolvedValue([roleError]);

      await expect(verifySessionRoles(["ADMIN", "USER"])).resolves.toBe(true);
      expect(st.signOut).not.toHaveBeenCalled();
    });

    it("logs out and returns false when every role claim fails", async () => {
      st.doesSessionExist.mockResolvedValue(true);
      st.validateClaims.mockResolvedValue([roleError, roleError]);
      const store = useUserStore();
      store.$patch({ user: { id: "user-123" } as UserType });

      await expect(verifySessionRoles(["ADMIN", "USER"])).resolves.toBe(false);
      expect(st.signOut).toHaveBeenCalled();
      expect(store.user).toBeUndefined();
    });
  });

  describe("#15 profile completion claim", () => {
    it("reads profileValidation from the session payload", () => {
      const claim = new ProfileValidationClaim();

      expect(
        claim.getValueFromPayload({
          profileValidation: { v: { isVerified: true } },
        }),
      ).toEqual({ isVerified: true });
    });

    it("returns undefined when the payload has no profileValidation", () => {
      const claim = new ProfileValidationClaim();

      expect(claim.getValueFromPayload({})).toBeUndefined();
    });

    it("uses the profileValidation claim id", () => {
      expect(ProfileValidationClaim.id).toBe("profileValidation");
    });
  });
});
