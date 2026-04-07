import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";

import LoginForm from "../../LoginForm.vue";
import appConfig from "../config";

const pinia = createPinia();

const createWrapper = (config = appConfig, mountOptions = {}) => {
  return mount(LoginForm, {
    global: {
      plugins: [pinia, [configPlugin, { config }], [i18nPlugin, { config }]],
    },
    ...mountOptions,
  });
};

describe("LoginForm", () => {
  it("renders email field by default", () => {
    const emailConfig = {
      ...appConfig,
      user: {
        features: { loginType: "email" as const },
      },
    };

    const wrapper = createWrapper(emailConfig);

    expect(wrapper.text()).toContain("Your email");
    expect(wrapper.text()).not.toContain("Your username");
  });

  it("renders username field when loginType is username", () => {
    const usernameConfig = {
      ...appConfig,
      user: {
        features: { loginType: "username" as const },
      },
    };

    const wrapper = createWrapper(usernameConfig);

    expect(wrapper.text()).toContain("Your username");
    expect(wrapper.text()).not.toContain("Your email");
  });

  it("renders password field", () => {
    const wrapper = createWrapper();

    expect(wrapper.text()).toContain("Your password");
  });
});
