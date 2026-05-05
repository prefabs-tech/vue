import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";

import ChangePasswordForm from "../../ChangePasswordForm.vue";
import appConfig from "../config";

const pinia = createPinia();

const createWrapper = (config = appConfig) => {
  return mount(ChangePasswordForm, {
    global: {
      plugins: [pinia, [configPlugin, { config }], [i18nPlugin, { config }]],
    },
  });
};

describe("ChangePasswordForm", () => {
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

  it("renders current password and new password fields", () => {
    const wrapper = createWrapper();

    expect(wrapper.text()).toContain("Current password");
    expect(wrapper.text()).toContain("New password");
  });
});
