import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { flushPromises, mount, RouterLinkStub } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it, vi } from "vitest";
import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";

import PasswordResetForm from "../../PasswordResetForm.vue";
import appConfig from "../config";

const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { component: { template: "<div />" }, path: "/" },
    { component: { template: "<div />" }, name: "login", path: "/login" },
    {
      component: { template: "<div />" },
      name: "resetPassword",
      path: "/reset-password/:token?",
    },
  ],
});

const createWrapper = (config = appConfig, mountOptions = {}) => {
  return mount(PasswordResetForm, {
    global: {
      plugins: [
        pinia,
        [configPlugin, { config }],
        [i18nPlugin, { config }],
        router,
      ],
      stubs: { RouterLink: RouterLinkStub },
    },
    ...mountOptions,
  });
};

describe("PasswordResetForm", () => {
  it("renders confirm password field when confirmPassword feature is enabled", () => {
    const config = {
      ...appConfig,
      user: { features: { confirmPassword: true } },
    };

    const wrapper = createWrapper(config);

    expect(wrapper.text()).toContain("Confirm password");
  });

  it("does not render confirm password field when confirmPassword feature is disabled", () => {
    const config = {
      ...appConfig,
      user: { features: { confirmPassword: false } },
    };

    const wrapper = createWrapper(config);

    expect(wrapper.text()).not.toContain("Confirm password");
  });
});

describe("#40 PasswordResetForm reset token", () => {
  const config = {
    ...appConfig,
    user: { features: { confirmPassword: false } },
  };

  const submitAt = async (path: string) => {
    const memoryRouter = createRouter({
      history: createMemoryHistory(),
      routes: [
        { component: { template: "<div />" }, name: "login", path: "/login" },
        {
          component: { template: "<div />" },
          name: "resetPassword",
          path: "/reset-password/:token?",
        },
      ],
    });

    await memoryRouter.replace(path);

    const wrapper = mount(PasswordResetForm, {
      global: {
        plugins: [
          pinia,
          [configPlugin, { config }],
          [i18nPlugin, { config }],
          memoryRouter,
        ],
      },
    });

    await wrapper.find('input[name="password"]').setValue("Str0ngPassw0rd!");
    await wrapper.find("form").trigger("submit");
    await vi.waitFor(() =>
      expect(
        wrapper.emitted("submit") ||
          memoryRouter.currentRoute.value.name === "login",
      ).toBeTruthy(),
    );
    await flushPromises();

    return { memoryRouter, wrapper };
  };

  it("reads the token from the route params", async () => {
    const { wrapper } = await submitAt("/reset-password/param-token");

    expect(wrapper.emitted("submit")?.[0]).toEqual([
      expect.objectContaining({ token: "param-token" }),
    ]);
  });

  it("prefers the token from the query string", async () => {
    const { wrapper } = await submitAt(
      "/reset-password/param-token?token=query-token",
    );

    expect(wrapper.emitted("submit")?.[0]).toEqual([
      expect.objectContaining({ token: "query-token" }),
    ]);
  });

  it("redirects to login when there is no token", async () => {
    const { memoryRouter, wrapper } = await submitAt("/reset-password");

    expect(wrapper.emitted("submit")).toBeUndefined();
    expect(memoryRouter.currentRoute.value.name).toBe("login");
  });
});
