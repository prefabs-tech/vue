import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";
import { createRouter, createWebHistory } from "vue-router";

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
