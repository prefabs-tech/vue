import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";
import { createRouter, createWebHistory } from "vue-router";

import SignupForm from "../../SignupForm.vue";
import appConfig from "../config";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: { template: "<div />" } }],
});

describe("SignupForm", () => {
  it("renders confirm password field when confirmPassword feature is enabled", () => {
    const pinia = createPinia();
    const config = {
      ...appConfig,
      user: { features: { confirmPassword: true } },
    };

    const wrapper = mount(SignupForm, {
      global: {
        plugins: [
          pinia,
          [configPlugin, { config }],
          [i18nPlugin, { config }],
          router,
        ],
        provide: { dzangolabVueUserTerms: null },
      },
    });

    expect(wrapper.text()).toContain("Confirm password");
  });

  it("does not render confirm password field when confirmPassword feature is disabled", () => {
    const pinia = createPinia();
    const config = {
      ...appConfig,
      user: { features: { confirmPassword: false } },
    };

    const wrapper = mount(SignupForm, {
      global: {
        plugins: [
          pinia,
          [configPlugin, { config }],
          [i18nPlugin, { config }],
          router,
        ],
        provide: { dzangolabVueUserTerms: null },
      },
    });

    expect(wrapper.text()).not.toContain("Confirm password");
  });

  it("renders terms and conditions section when display is enabled", () => {
    const pinia = createPinia();
    const config = {
      ...appConfig,
      user: {
        features: {
          signUp: {
            termsAndConditions: { display: true, showCheckbox: false },
          },
        },
      },
    };

    const wrapper = mount(SignupForm, {
      global: {
        plugins: [
          pinia,
          [configPlugin, { config }],
          [i18nPlugin, { config }],
          router,
        ],
        provide: { dzangolabVueUserTerms: null },
      },
    });

    expect(wrapper.find(".terms-and-conditions").exists()).toBe(true);
  });

  it("does not render terms and conditions when display is disabled", () => {
    const pinia = createPinia();
    const config = {
      ...appConfig,
      user: {
        features: {
          signUp: { termsAndConditions: { display: false } },
        },
      },
    };

    const wrapper = mount(SignupForm, {
      global: {
        plugins: [
          pinia,
          [configPlugin, { config }],
          [i18nPlugin, { config }],
          router,
        ],
        provide: { dzangolabVueUserTerms: null },
      },
    });

    expect(wrapper.find(".terms-and-conditions").exists()).toBe(false);
  });

  it("renders username field when loginType is username", async () => {
    const pinia = createPinia();
    const config = {
      ...appConfig,
      user: { features: { loginType: "username" as const } },
    };

    const wrapper = mount(SignupForm, {
      global: {
        plugins: [
          pinia,
          [configPlugin, { config }],
          [i18nPlugin, { config }],
          router,
        ],
        provide: { dzangolabVueUserTerms: null },
      },
    });

    expect(wrapper.text()).toContain("Your username");
  });
});
