import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../../auth-provider", () => ({
  auth: vi.fn(() => ({
    doLogout: vi.fn().mockResolvedValue(undefined),
    isProfileCompleted: vi.fn().mockResolvedValue(true),
  })),
  default: vi.fn(),
  authConfig: undefined,
}));

import useUserStore from "../../store";

import type { Invitation, UserType } from "../../types";

const mockUser: Partial<UserType> = {
  email: "test@example.com",
  givenName: "Test",
  id: "user-123",
  lastLoginAt: Date.now(),
  middleNames: null,
  name: "Test User",
  roles: ["USER"],
  signedUpAt: Date.now(),
  surname: "User",
};

describe("useUserStore", () => {
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
    localStorage.clear();
  });

  describe("getUser()", () => {
    it("returns user from state when user is set", () => {
      const store = useUserStore();
      store.$patch({ user: mockUser as UserType });

      const result = store.getUser();

      expect(result).toEqual(mockUser);
    });

    it("returns user from localStorage when state is empty", () => {
      localStorage.setItem("user", JSON.stringify(mockUser));
      const store = useUserStore();

      const result = store.getUser();

      expect(result).toEqual(mockUser);
    });

    it("returns undefined when neither state nor localStorage has a user", () => {
      const store = useUserStore();

      const result = store.getUser();

      expect(result).toBeUndefined();
    });
  });

  describe("setAuthTokens()", () => {
    it("persists access token to localStorage", () => {
      const store = useUserStore();

      store.setAuthTokens({
        accessToken: "access-123",
        refreshToken: "refresh-456",
      });

      expect(localStorage.getItem("accessToken")).toBe("access-123");
    });

    it("persists refresh token to localStorage", () => {
      const store = useUserStore();

      store.setAuthTokens({
        accessToken: "access-123",
        refreshToken: "refresh-456",
      });

      expect(localStorage.getItem("refreshToken")).toBe("refresh-456");
    });

    it("updates store state with provided tokens", () => {
      const store = useUserStore();

      store.setAuthTokens({
        accessToken: "access-123",
        refreshToken: "refresh-456",
      });

      expect(store.accessToken).toBe("access-123");
      expect(store.refreshToken).toBe("refresh-456");
    });
  });

  describe("removeUser()", () => {
    it("removes user from localStorage", () => {
      localStorage.setItem("user", JSON.stringify(mockUser));
      const store = useUserStore();

      store.removeUser();

      expect(localStorage.getItem("user")).toBeNull();
    });
  });

  describe("removeAuthTokens()", () => {
    it("removes tokens from localStorage", () => {
      localStorage.setItem("accessToken", "access-123");
      localStorage.setItem("refreshToken", "refresh-456");
      const store = useUserStore();

      store.removeAuthTokens();

      expect(localStorage.getItem("accessToken")).toBeNull();
      expect(localStorage.getItem("refreshToken")).toBeNull();
    });
  });

  describe("setInvitation()", () => {
    it("stores invitation in state", () => {
      const store = useUserStore();
      const invitation: Invitation = {
        id: 1,
        email: "invited@example.com",
        role: "USER",
        appId: 1,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        expiresAt: Date.now() + 86_400_000,
        acceptedAt: null,
        revokedAt: null,
        invitedById: "user-123",
        payload: null,
      };

      store.setInvitation(invitation);

      expect(store.invitation).toEqual(invitation);
    });

    it("clears invitation when called with undefined", () => {
      const store = useUserStore();
      store.$patch({
        invitation: { id: 1 } as Partial<Invitation> as Invitation,
      });

      store.setInvitation(undefined);

      expect(store.invitation).toBeUndefined();
    });
  });

  describe("setUser()", () => {
    it("persists user to localStorage", async () => {
      const store = useUserStore();

      await store.setUser(mockUser as UserType);

      const stored = JSON.parse(localStorage.getItem("user") || "{}");
      expect(stored.email).toBe(mockUser.email);
    });

    it("sets user in store state", async () => {
      const store = useUserStore();

      await store.setUser(mockUser as UserType);

      expect(store.user?.email).toBe(mockUser.email);
    });

    it("sets user state to undefined without clearing localStorage", async () => {
      localStorage.setItem("user", JSON.stringify(mockUser));
      const store = useUserStore();
      store.$patch({ user: mockUser as UserType });

      await store.setUser(undefined);

      // setUser(undefined) clears state but does NOT touch localStorage — removeUser() does that
      expect(localStorage.getItem("user")).not.toBeNull();
      expect(store.user).toBeUndefined();
    });
  });

  describe("logout()", () => {
    it("clears user from state", async () => {
      const store = useUserStore();
      store.$patch({ user: mockUser as UserType });

      await store.logout();

      expect(store.user).toBeUndefined();
    });

    it("removes user from localStorage", async () => {
      localStorage.setItem("user", JSON.stringify(mockUser));
      const store = useUserStore();
      store.$patch({ user: mockUser as UserType });

      await store.logout();

      expect(localStorage.getItem("user")).toBeNull();
    });
  });
});
