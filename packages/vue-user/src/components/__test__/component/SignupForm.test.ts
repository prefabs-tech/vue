import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";
import { createRouter, createWebHistory } from "vue-router";

import SignupForm from "../../SignupForm.vue";
import appConfig from "../config";

const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: { template: "<div />" } }],
});

const createWrapper = (config = appConfig, mountOptions = {}) => {
  return mount(SignupForm, {
    global: {
      plugins: [
        pinia,
        [configPlugin, { config }],
        [i18nPlugin, { config }],
        router,
      ],
      provide: { dzangolabVueUserTerms: null },
    },
    ...mountOptions,
  });
};

describe("SignupForm", () => {
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

  it("renders terms and conditions section when display is enabled", () => {
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

    const wrapper = createWrapper(config);

    expect(wrapper.find(".terms-and-conditions").exists()).toBe(true);
  });

  it("does not render terms and conditions when display is disabled", () => {
    const config = {
      ...appConfig,
      user: {
        features: {
          signUp: { termsAndConditions: { display: false } },
        },
      },
    };

    const wrapper = createWrapper(config);

    expect(wrapper.find(".terms-and-conditions").exists()).toBe(false);
  });

  it("renders username field when loginType is username", async () => {
    const config = {
      ...appConfig,
      user: { features: { loginType: "username" as const } },
    };

    const wrapper = createWrapper(config);

    expect(wrapper.text()).toContain("Your username");
  });

  it("shows checkbox when showCheckbox is true", () => {
    const config = {
      ...appConfig,
      user: {
        features: {
          signUp: {
            termsAndConditions: { display: true, showCheckbox: true },
          },
        },
      },
    };

    const wrapper = createWrapper(config);

    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
  });

  it("hides checkbox when showCheckbox is false", () => {
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

    const wrapper = createWrapper(config);

    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(false);
  });

  it("disables submit button when checkbox is required but unchecked", () => {
    const config = {
      ...appConfig,
      user: {
        features: {
          signUp: {
            termsAndConditions: { display: true, showCheckbox: true },
          },
        },
      },
    };

    const wrapper = createWrapper(config);

    const submitButton = wrapper.find('button[type="submit"]');
    expect(submitButton.attributes("disabled")).toBeDefined();
  });

  it("enables submit button when checkbox is checked", async () => {
    const config = {
      ...appConfig,
      user: {
        features: {
          signUp: {
            termsAndConditions: { display: true, showCheckbox: true },
          },
        },
      },
    };

    const wrapper = createWrapper(config);

    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.setValue(true);
    await wrapper.vm.$nextTick();

    const submitButton = wrapper.find('button[type="submit"]');
    expect(submitButton.attributes("disabled")).toBeUndefined();
  });
});
