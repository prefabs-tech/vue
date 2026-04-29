import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";

import PasswordResetRequestAcknowledge from "../../PasswordResetRequestAcknowledge.vue";
import appConfig from "../config";

const pinia = createPinia();

const createWrapper = (config = appConfig, mountOptions = {}) => {
  return mount(PasswordResetRequestAcknowledge, {
    global: {
      plugins: [pinia, [configPlugin, { config }], [i18nPlugin, { config }]],
    },
    ...mountOptions,
  });
};

describe("PasswordResetRequestAcknowledge", () => {
  it("shows the resend timer initially disabled when timer is configured", () => {
    const config = {
      ...appConfig,
      user: {
        features: { forgotPasswordResendTimeInSeconds: 60 },
      },
    };

    const wrapper = createWrapper(config, {
      props: { email: "user@example.com" },
    });

    // Timer span should be shown when timer > 0
    expect(wrapper.find(".timer").exists()).toBe(true);
    // The resend section should have "disabled" class
    expect(wrapper.find(".disabled").exists()).toBe(true);
  });

  it("uses default 30-second timer when forgotPasswordResendTimeInSeconds is not configured", () => {
    const config = {
      ...appConfig,
      user: {},
    };

    const wrapper = createWrapper(config, {
      props: { email: "user@example.com" },
    });

    // Timer is active (default 30s)
    expect(wrapper.find(".timer").exists()).toBe(true);
    expect(wrapper.find(".disabled").exists()).toBe(true);
  });

  it("shows resend link as enabled when timer is zero", () => {
    const config = {
      ...appConfig,
      user: {
        features: { forgotPasswordResendTimeInSeconds: 0 },
      },
    };

    const wrapper = createWrapper(config, {
      props: { email: "user@example.com" },
    });

    // Timer span should NOT be shown when timer is 0
    expect(wrapper.find(".timer").exists()).toBe(false);
    // No disabled class
    expect(wrapper.find(".disabled").exists()).toBe(false);
  });

  it("displays the email address in the acknowledgement message", () => {
    const wrapper = createWrapper(appConfig, {
      props: { email: "test@example.com" },
    });

    expect(wrapper.text()).toContain("test@example.com");
  });

  it("emits resend event when resend link is clicked with timer at zero", async () => {
    const config = {
      ...appConfig,
      user: {
        features: { forgotPasswordResendTimeInSeconds: 0 },
      },
    };

    const wrapper = createWrapper(config, {
      props: { email: "user@example.com" },
    });

    await wrapper.find(".inline-link").trigger("click");

    expect(wrapper.emitted("resend")).toBeDefined();
  });
});
