import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { flushPromises, mount } from "@vue/test-utils";
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

describe("#42 ChangePasswordForm confirmation", () => {
  const fill = async (
    wrapper: ReturnType<typeof createWrapper>,
    confirmation: string,
  ) => {
    await wrapper.find('input[name="current-password"]').setValue("old");
    await wrapper.find('input[name="new-password"]').setValue("N3wPassword");
    await wrapper.find('input[name="confirm-password"]').setValue(confirmation);
    await wrapper.find("form").trigger("submit");
    await flushPromises();
    await new Promise((resolve) => setTimeout(resolve, 0));
    await flushPromises();
  };

  const config = {
    ...appConfig,
    user: { features: { confirmPassword: true } },
  };

  it("rejects a confirmation that does not match", async () => {
    const wrapper = createWrapper(config);

    await fill(wrapper, "Different1");

    expect(wrapper.text()).toContain("Passwords must match");
    expect(wrapper.emitted("submit")).toBeUndefined();
  });

  it("submits when the confirmation matches", async () => {
    const wrapper = createWrapper(config);

    await fill(wrapper, "N3wPassword");

    expect(wrapper.emitted("submit")?.[0]).toEqual([
      {
        confirmPassword: "N3wPassword",
        currentPassword: "old",
        newPassword: "N3wPassword",
      },
    ]);
  });
});
