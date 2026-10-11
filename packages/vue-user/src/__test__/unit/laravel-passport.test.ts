import type { AppConfig } from "@prefabs.tech/vue3-config";

import { AxiosError, AxiosHeaders } from "axios";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";

const http = vi.hoisted(() => ({
  client: vi.fn(),
  get: vi.fn(),
  post: vi.fn(),
  put: vi.fn(),
}));

vi.mock("../../api/axios", () => ({
  default: http.client,
  encodeURIParameter: vi.fn(),
}));

import type { UserType } from "../../types";

import initAuthProvider, { auth } from "../../auth-provider";
import useUserStore from "../../store";

const passportConfig = (apiRoutes = {}) =>
  ({
    apiBaseUrl: "https://api.test",
    user: { apiRoutes, features: { authProvider: "laravel-passport" } },
  }) as AppConfig;

const axiosError = (status: number) =>
  new AxiosError("Request failed", "ERR_BAD_REQUEST", undefined, undefined, {
    config: { headers: new AxiosHeaders() },
    data: {},
    headers: {},
    status,
    statusText: "",
  });

const credentials = { email: "test@example.com", password: "secret" };

describe("laravel-passport", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
    vi.clearAllMocks();
    http.client.mockReturnValue({
      get: http.get,
      post: http.post,
      put: http.put,
    });
    http.get.mockResolvedValue({ data: {}, status: 200 });
    http.post.mockResolvedValue({ data: {}, status: 200 });
    http.put.mockResolvedValue({ data: {}, status: 200 });
    initAuthProvider(passportConfig());
  });

  describe("#2 auth provider selection", () => {
    it("selects laravel-passport from config", () => {
      expect(auth()).not.toHaveProperty("isLoggedIn");
    });

    it("defaults to supertokens", () => {
      initAuthProvider(undefined);

      expect(auth()).toHaveProperty("isLoggedIn");
    });

    it("falls back to supertokens for an unknown provider", () => {
      initAuthProvider({
        user: { features: { authProvider: "unknown" } },
      } as AppConfig);

      expect(auth()).toHaveProperty("isLoggedIn");
    });
  });

  describe("#3 configurable API routes", () => {
    const operations = [
      [
        "changeEmail",
        "put",
        "/api/user/change-email-username",
        () => auth().doChangeEmail("new@example.com", "https://api.test"),
      ],
      [
        "changePassword",
        "put",
        "/api/user/change-password",
        () =>
          auth().doChangePassword(
            {
              confirmPassword: "b",
              currentPassword: "a",
              newPassword: "b",
            },
            "https://api.test",
          ),
      ],
      [
        "getVerificationStatus",
        "get",
        "/api/email/verification-status",
        () => auth().doGetVerificationStatus(),
      ],
      ["login", "post", "/api/login", () => auth().doLogin(credentials)],
      ["logout", "post", "/api/logout", () => auth().doLogout()],
      [
        "passwordReset",
        "post",
        "/api/reset-password",
        () => auth().doResetPassword({ password: "secret", token: "t" }),
      ],
      [
        "passwordResetRequest",
        "post",
        "/api/reset-password-request",
        () =>
          auth().doRequestPasswordReset({
            email: "test@example.com",
            url: "u",
          }),
      ],
      [
        "sendVerificationEmail",
        "post",
        "/api/email/send-verification",
        () => auth().doSendVerificationEmail(),
      ],
      ["signup", "post", "/api/signup", () => auth().doSignup(credentials)],
      [
        "verifyEmail",
        "post",
        "/api/email/verify",
        () =>
          (auth().doVerifyEmail as (token: string) => Promise<unknown>)(
            "token",
          ),
      ],
    ] as const;

    it.each(operations)(
      "%s uses its default path",
      async (_route, method, defaultPath, call) => {
        await call().catch(() => undefined);

        expect(http.client).toHaveBeenCalledWith("https://api.test");
        expect(http[method].mock.calls[0][0]).toBe(defaultPath);
      },
    );

    it.each(operations)(
      "%s uses the configured path",
      async (route, method, _defaultPath, call) => {
        initAuthProvider(passportConfig({ [route]: `/custom/${route}` }));

        await call().catch(() => undefined);

        expect(http[method].mock.calls[0][0]).toBe(`/custom/${route}`);
      },
    );
  });

  describe("#17 REST-based auth operations", () => {
    it("login posts the credentials and returns the user", async () => {
      const user = { email: "test@example.com", id: "user-123" };
      http.post.mockResolvedValue({ data: { user }, status: 200 });

      await expect(auth().doLogin(credentials)).resolves.toEqual(user);
      expect(http.post).toHaveBeenCalledWith("/api/login", credentials, {
        withCredentials: true,
      });
    });

    it("login maps a 401 response to 401", async () => {
      http.post.mockRejectedValue(axiosError(401));

      await expect(auth().doLogin(credentials)).rejects.toThrow("401");
    });

    it("login maps other failures to SOMETHING_WRONG", async () => {
      http.post.mockRejectedValue(axiosError(500));

      await expect(auth().doLogin(credentials)).rejects.toThrow(
        "SOMETHING_WRONG",
      );
    });

    it("signup returns the user on 201", async () => {
      const user = { email: "test@example.com", id: "user-123" };
      http.post.mockResolvedValue({ data: { user }, status: 201 });

      await expect(auth().doSignup(credentials)).resolves.toEqual(user);
    });

    it("getVerificationStatus returns isVerified", async () => {
      http.get.mockResolvedValue({ data: { isVerified: true }, status: 200 });

      await expect(auth().doGetVerificationStatus()).resolves.toBe(true);
    });

    it("sendVerificationEmail reports an already verified email", async () => {
      http.post.mockResolvedValue({ data: false, status: 200 });

      await expect(auth().doSendVerificationEmail()).resolves.toBe(
        "EMAIL_ALREADY_VERIFIED_ERROR",
      );
    });

    it("verifyEmail posts the token and reports an invalid token", async () => {
      http.post.mockResolvedValue({ data: false, status: 200 });

      await expect(
        (auth().doVerifyEmail as (token: string) => Promise<unknown>)("abc"),
      ).resolves.toEqual({ status: "EMAIL_VERIFICATION_INVALID_TOKEN_ERROR" });
      expect(http.post).toHaveBeenCalledWith("/api/email/verify", {
        token: "abc",
      });
    });

    it("resetPassword maps failures to SOMETHING_WRONG", async () => {
      http.post.mockRejectedValue(axiosError(500));

      await expect(
        auth().doResetPassword({ password: "secret", token: "t" }),
      ).rejects.toThrow("SOMETHING_WRONG");
    });
  });

  describe("verifySessionRoles", () => {
    const setUser = (roles: UserType["roles"]) => {
      useUserStore().$patch({ user: { id: "user-123", roles } as UserType });
    };

    it("accepts a supported string role", async () => {
      setUser(["ADMIN"]);

      await expect(auth().verifySessionRoles(["ADMIN"])).resolves.toBe(true);
    });

    it("accepts a supported role object", async () => {
      setUser([{ id: 1, name: "Admin", role: "ADMIN" }]);

      await expect(auth().verifySessionRoles(["ADMIN"])).resolves.toBe(true);
    });

    it("logs out users without a supported role", async () => {
      setUser(["USER"]);

      await expect(auth().verifySessionRoles(["ADMIN"])).resolves.toBe(false);
      expect(http.post).toHaveBeenCalledWith("/api/logout", {
        withCredentials: true,
      });
      expect(useUserStore().user).toBeUndefined();
    });
  });
});
