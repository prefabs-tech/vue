import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { flushPromises, mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { defineComponent, h, Suspense } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";

const authMock = vi.hoisted(() => ({
  doLogin: vi.fn(),
  verifySessionRoles: vi.fn(),
}));

vi.mock("../../../auth-provider", () => ({
  auth: vi.fn(() => authMock),
  authConfig: undefined,
  default: vi.fn(),
}));

import appConfig from "../../../components/__test__/config";
import LoginForm from "../../../components/LoginForm.vue";
import useUserStore from "../../../store";
import Login from "../../Login.vue";

const Stub = { template: "<div />" };

const user = { email: "test@example.com", id: "user-123" };

const credentials = { email: "test@example.com", password: "secret" };

const login = async (config = appConfig) => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { component: Stub, name: "home", path: "/" },
      { component: Stub, name: "login", path: "/login" },
      { component: Stub, name: "order", path: "/orders/:id" },
      { component: Stub, name: "resetPasswordRequest", path: "/reset" },
      { component: Stub, name: "signup", path: "/signup" },
    ],
  });

  await router.replace("/login");

  const wrapper = mount(
    defineComponent({
      render: () => h(Suspense, null, { default: () => h(Login) }),
    }),
    {
      global: {
        plugins: [[configPlugin, { config }], [i18nPlugin, { config }], router],
      },
    },
  );

  await flushPromises();

  wrapper.findComponent(LoginForm).vm.$emit("submit", credentials);
  await flushPromises();

  return { router, wrapper };
};

describe("Login", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
    sessionStorage.clear();
    vi.clearAllMocks();
    authMock.doLogin.mockResolvedValue(user);
  });

  describe("#24 post-login redirect restoration", () => {
    it("returns to the saved path with its params and query", async () => {
      sessionStorage.setItem("redirectAfterLogin", "/orders/42?tab=items");

      const { router } = await login();

      expect(router.currentRoute.value.fullPath).toBe("/orders/42?tab=items");
      expect(sessionStorage.getItem("redirectAfterLogin")).toBeNull();
    });

    it("goes home when nothing was saved", async () => {
      const { router } = await login();

      expect(router.currentRoute.value.name).toBe("home");
    });
  });

  it("sets the user after login", async () => {
    await login();

    expect(authMock.doLogin).toHaveBeenCalledWith({
      ...credentials,
      withRoles: undefined,
    });
    expect(useUserStore().user).toMatchObject(user);
  });

  it("stays on login when no supported role matches", async () => {
    authMock.verifySessionRoles.mockResolvedValue(false);
    sessionStorage.setItem("redirectAfterLogin", "/orders/42");

    const { router } = await login({
      ...appConfig,
      user: { supportedRoles: ["ADMIN"] },
    });

    expect(authMock.verifySessionRoles).toHaveBeenCalledWith(["ADMIN"]);
    expect(localStorage.getItem("user")).toBeNull();
    expect(sessionStorage.getItem("redirectAfterLogin")).toBe("/orders/42");
    expect(router.currentRoute.value.name).toBe("login");
  });

  it("shows the login error", async () => {
    authMock.doLogin.mockRejectedValue(new Error("401"));

    const { wrapper } = await login();

    expect(wrapper.find(".message").exists()).toBe(true);
  });
});
