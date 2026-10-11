import type { RouteRecordRaw } from "vue-router";

import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createMemoryHistory, createRouter } from "vue-router";

const authMock = vi.hoisted(() => ({
  doGetVerificationStatus: vi.fn(),
  doLogout: vi.fn().mockResolvedValue(undefined),
  isLoggedIn: vi.fn(),
}));

vi.mock("../../auth-provider", () => ({
  auth: vi.fn(() => authMock),
  authConfig: undefined,
  default: vi.fn(),
}));

import type { DzangolabVueUserConfig, UserType } from "../../types";

import updateRouter, { filterRoutes } from "../../router";
import useUserStore from "../../store";

const Stub = { template: "<div />" };

const mockUser = { email: "test@example.com", id: "user-123" } as UserType;

const setup = (
  config?: DzangolabVueUserConfig,
  routes: RouteRecordRaw[] = [],
) => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { component: Stub, name: "home", path: "/" },
      {
        component: Stub,
        meta: { authenticated: true },
        name: "order",
        path: "/orders/:id",
      },
      ...routes,
    ],
  });

  updateRouter(router, config);

  return router;
};

const logIn = (user: UserType = mockUser) => {
  authMock.isLoggedIn.mockResolvedValue(true);
  useUserStore().$patch({ user });
};

describe("router", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
    sessionStorage.clear();
    vi.clearAllMocks();
    authMock.doLogout.mockResolvedValue(undefined);
    authMock.isLoggedIn.mockResolvedValue(false);
  });

  describe("#19 dynamic route registration", () => {
    it("registers the user routes", () => {
      const router = setup();

      for (const name of ["login", "signup", "profile", "roles"]) {
        expect(router.hasRoute(name)).toBe(true);
      }
    });
  });

  describe("#20 conditional signup route", () => {
    it("omits signup when disabled", () => {
      const router = setup({
        routes: { signup: { disabled: true } },
      } as unknown as DzangolabVueUserConfig);

      expect(router.hasRoute("signup")).toBe(false);
    });
  });

  describe("#21 conditional first-user signup route", () => {
    it("omits signupFirstUser while signup is enabled", () => {
      const router = setup();

      expect(router.hasRoute("signupFirstUser")).toBe(false);
    });

    it("adds signupFirstUser when signup is disabled", () => {
      const router = setup({
        routes: { signup: { disabled: true } },
      } as unknown as DzangolabVueUserConfig);

      expect(router.hasRoute("signupFirstUser")).toBe(true);
    });

    it("omits signupFirstUser when both are disabled", () => {
      const router = setup({
        routes: {
          signup: { disabled: true },
          signupFirstUser: { disabled: true },
        },
      } as unknown as DzangolabVueUserConfig);

      expect(router.hasRoute("signupFirstUser")).toBe(false);
    });
  });

  describe("#22 conditional email verification routes", () => {
    it("omits verification routes by default", () => {
      const router = setup();

      expect(router.hasRoute("verifyEmailReminder")).toBe(false);
    });

    it("adds verification routes when enabled", () => {
      const router = setup({
        features: { signUp: { emailVerification: true } },
      } as DzangolabVueUserConfig);

      expect(router.hasRoute("verifyEmailReminder")).toBe(true);
    });
  });

  describe("#23 authentication guard", () => {
    it("redirects anonymous users to login", async () => {
      const router = setup();

      await router.push("/orders/42?tab=items");

      expect(router.currentRoute.value.name).toBe("login");
    });

    it("lets authenticated users through", async () => {
      logIn();
      const router = setup();

      await router.push("/orders/42");

      expect(router.currentRoute.value.name).toBe("order");
    });

    it("leaves public routes alone", async () => {
      const router = setup();

      await router.push("/");

      expect(router.currentRoute.value.name).toBe("home");
    });

    it("keeps authenticated when a route override sets meta", async () => {
      const router = setup({
        routes: { profile: { meta: { layout: Stub } } },
      } as unknown as DzangolabVueUserConfig);

      await router.push("/profile");

      expect(router.currentRoute.value.name).toBe("login");
    });
  });

  describe("#24 post-login redirect", () => {
    it("stores the full path including params and query", async () => {
      const router = setup();

      await router.push("/orders/42?tab=items");

      expect(sessionStorage.getItem("redirectAfterLogin")).toBe(
        "/orders/42?tab=items",
      );
    });
  });

  describe("#25 email verification guard", () => {
    const config = {
      features: { signUp: { emailVerification: true } },
    } as DzangolabVueUserConfig;

    it("redirects unverified users to the reminder", async () => {
      logIn();
      authMock.doGetVerificationStatus.mockResolvedValue(false);
      const router = setup(config);

      await router.push("/orders/42");

      expect(router.currentRoute.value.name).toBe("verifyEmailReminder");
    });

    it("lets verified users through", async () => {
      logIn();
      authMock.doGetVerificationStatus.mockResolvedValue(true);
      const router = setup(config);

      await router.push("/orders/42");

      expect(router.currentRoute.value.name).toBe("order");
    });

    it("sends verified users from the reminder to home", async () => {
      logIn();
      authMock.doGetVerificationStatus.mockResolvedValue(true);
      const router = setup(config);

      await router.push("/verify-email-reminder");

      expect(router.currentRoute.value.name).toBe("home");
    });

    it("logs out and redirects to login on 401", async () => {
      logIn();
      authMock.doGetVerificationStatus.mockRejectedValue({ status: 401 });
      const router = setup(config);

      await router.push("/orders/42");

      expect(authMock.doLogout).toHaveBeenCalled();
      expect(useUserStore().user).toBeUndefined();
      expect(router.currentRoute.value.name).toBe("login");
    });
  });

  describe("verified route meta", () => {
    const enabled = {
      features: { signUp: { emailVerification: true } },
    } as DzangolabVueUserConfig;

    const appRoutes: RouteRecordRaw[] = [
      {
        component: Stub,
        meta: { authenticated: true, verified: false },
        name: "settings",
        path: "/settings",
      },
      {
        component: Stub,
        meta: { verified: true },
        name: "billing",
        path: "/billing",
      },
    ];

    const logInUnverified = () => {
      logIn();
      authMock.doGetVerificationStatus.mockResolvedValue(false);
    };

    it("requires verification on authenticated routes by default", async () => {
      logInUnverified();
      const router = setup(enabled, appRoutes);

      await router.push("/orders/42");

      expect(router.currentRoute.value.name).toBe("verifyEmailReminder");
    });

    it("lets unverified users through verified: false routes", async () => {
      logInUnverified();
      const router = setup(enabled, appRoutes);

      await router.push("/settings");

      expect(router.currentRoute.value.name).toBe("settings");
    });

    it("exempts the package's profile route", async () => {
      logInUnverified();
      const router = setup(enabled);

      await router.push("/profile");

      expect(router.currentRoute.value.name).toBe("profile");
    });

    it("requires verification on the package's roles route", async () => {
      logInUnverified();
      const router = setup(enabled);

      await router.push("/roles");

      expect(router.currentRoute.value.name).toBe("verifyEmailReminder");
    });

    it("lets an app override a package route with verified: true", async () => {
      logInUnverified();
      const router = setup({
        ...enabled,
        routes: { profile: { meta: { verified: true } } },
      } as unknown as DzangolabVueUserConfig);

      await router.push("/profile");

      expect(router.currentRoute.value.name).toBe("verifyEmailReminder");
    });

    it("keeps authenticated when overriding verified", async () => {
      const router = setup({
        ...enabled,
        routes: { profile: { meta: { verified: true } } },
      } as unknown as DzangolabVueUserConfig);

      await router.push("/profile");

      expect(router.currentRoute.value.name).toBe("login");
    });

    it("does not loop when the reminder itself is marked verified", async () => {
      logInUnverified();
      const router = setup({
        ...enabled,
        routes: { verifyEmailReminder: { meta: { verified: true } } },
      } as unknown as DzangolabVueUserConfig);

      await router.push("/verify-email-reminder");

      expect(router.currentRoute.value.name).toBe("verifyEmailReminder");
    });

    it("treats verified: true as requiring login", async () => {
      const router = setup(enabled, appRoutes);

      await router.push("/billing");

      expect(router.currentRoute.value.name).toBe("login");
    });

    it("requires verification on verified: true routes", async () => {
      logInUnverified();
      const router = setup(enabled, appRoutes);

      await router.push("/billing");

      expect(router.currentRoute.value.name).toBe("verifyEmailReminder");
    });

    it("lets verified users through verified: true routes", async () => {
      logIn();
      authMock.doGetVerificationStatus.mockResolvedValue(true);
      const router = setup(enabled, appRoutes);

      await router.push("/billing");

      expect(router.currentRoute.value.name).toBe("billing");
    });

    it("does not check verification when the feature is disabled", async () => {
      logIn();
      const router = setup(undefined, appRoutes);

      await router.push("/billing");

      expect(authMock.doGetVerificationStatus).not.toHaveBeenCalled();
      expect(router.currentRoute.value.name).toBe("billing");
    });
  });

  describe("#26 profile completion guard", () => {
    it("redirects users with an incomplete profile to profile", async () => {
      logIn({ ...mockUser, isProfileCompleted: false } as UserType);
      const router = setup();

      await router.push("/orders/42");

      expect(router.currentRoute.value.name).toBe("profile");
    });

    it("lets users with a complete profile through", async () => {
      logIn({ ...mockUser, isProfileCompleted: true } as UserType);
      const router = setup();

      await router.push("/orders/42");

      expect(router.currentRoute.value.name).toBe("order");
    });
  });

  describe("#27 auth page redirect", () => {
    it("sends logged-in users from login to profile", async () => {
      logIn();
      const router = setup();

      await router.push("/login");

      expect(router.currentRoute.value.name).toBe("profile");
    });
  });

  describe("#28 dynamic route display filtering", () => {
    const adminOnly = (user: UserType) =>
      !!(user.roles as string[] | undefined)?.includes("ADMIN");

    const displayRoutes: RouteRecordRaw[] = [
      {
        component: Stub,
        meta: { display: false },
        name: "hidden",
        path: "/hidden",
      },
      {
        component: Stub,
        meta: { display: true },
        name: "shown",
        path: "/shown",
      },
      {
        component: Stub,
        meta: { display: adminOnly },
        name: "admin",
        path: "/admin",
      },
    ];

    it("removes routes with display false", () => {
      const router = setup(undefined, displayRoutes);

      expect(router.hasRoute("hidden")).toBe(false);
      expect(router.hasRoute("shown")).toBe(true);
    });

    it("keeps function-display routes when there is no user", () => {
      const router = setup(undefined, displayRoutes);

      expect(router.hasRoute("admin")).toBe(true);
    });

    it("removes function-display routes the user may not see", () => {
      logIn({ ...mockUser, roles: ["USER"] } as UserType);
      const router = setup(undefined, displayRoutes);

      expect(router.hasRoute("admin")).toBe(false);
    });

    it("keeps function-display routes the user may see", () => {
      logIn({ ...mockUser, roles: ["ADMIN"] } as UserType);
      const router = setup(undefined, displayRoutes);

      expect(router.hasRoute("admin")).toBe(true);
    });

    it("reads the user from localStorage when the store is empty", () => {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...mockUser, roles: ["USER"] }),
      );
      const router = setup(undefined, displayRoutes);

      expect(router.hasRoute("admin")).toBe(false);
    });

    it("re-adds a route when filterRoutes runs after the user changes", () => {
      logIn({ ...mockUser, roles: ["USER"] } as UserType);
      const router = setup(undefined, displayRoutes);

      expect(router.hasRoute("admin")).toBe(false);

      useUserStore().$patch({
        user: { ...mockUser, roles: ["ADMIN"] } as UserType,
      });
      filterRoutes(router);

      expect(router.hasRoute("admin")).toBe(true);
    });
  });
});
