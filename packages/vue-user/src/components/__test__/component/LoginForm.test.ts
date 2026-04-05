import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";

import LoginForm from "../../LoginForm.vue";
import appConfig from "../config";

const emailConfig = {
  ...appConfig,
  user: {
    features: { loginType: "email" as const },
  },
};

const usernameConfig = {
  ...appConfig,
  user: {
    features: { loginType: "username" as const },
  },
};

describe("LoginForm", () => {
  it("renders email field by default", () => {
    const pinia = createPinia();

    const wrapper = mount(LoginForm, {
      global: {
        plugins: [
          pinia,
          [configPlugin, { config: emailConfig }],
          [i18nPlugin, { config: emailConfig }],
        ],
      },
    });

    expect(wrapper.text()).toContain("Your email");
    expect(wrapper.text()).not.toContain("Your username");
  });

  it("renders username field when loginType is username", () => {
    const pinia = createPinia();

    const wrapper = mount(LoginForm, {
      global: {
        plugins: [
          pinia,
          [configPlugin, { config: usernameConfig }],
          [i18nPlugin, { config: usernameConfig }],
        ],
      },
    });

    expect(wrapper.text()).toContain("Your username");
    expect(wrapper.text()).not.toContain("Your email");
  });

  it("renders password field", () => {
    const pinia = createPinia();

    const wrapper = mount(LoginForm, {
      global: {
        plugins: [
          pinia,
          [configPlugin, { config: appConfig }],
          [i18nPlugin, { config: appConfig }],
        ],
      },
    });

    expect(wrapper.text()).toContain("Your password");
  });
});
