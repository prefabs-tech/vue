import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { describe, expect, it } from "vitest";

import useUserStore from "../../../store";
import AccountInfo from "../../profile/AccountInfo.vue";
import appConfig from "../config";

import type { UserType } from "../../../types";

const mockUser: Partial<UserType> = {
  email: "test@example.com",
  givenName: "Test",
  id: "user-123",
  name: "Test User",
  roles: ["USER"],
  surname: "User",
};

const mockUserWithThirdParty: Partial<UserType> = {
  ...mockUser,
  thirdParty: { id: "google-123", userId: "user-123" },
};

const createWrapper = (
  config = appConfig,
  user: Partial<UserType> | undefined = mockUser,
) => {
  const pinia = createPinia();
  const store = useUserStore(pinia);
  store.$patch({ user: user as UserType });

  return mount(AccountInfo, {
    global: {
      plugins: [pinia, [configPlugin, { config }], [i18nPlugin, { config }]],
    },
  });
};

describe("AccountInfo", () => {
  it("shows update email button when updateEmail feature is enabled and user is not login via thirdParty", () => {
    const config = {
      ...appConfig,
      user: { features: { updateEmail: true } },
    };

    const wrapper = createWrapper(config, mockUser);

    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("does not show update email button when updateEmail feature is disabled", () => {
    const config = {
      ...appConfig,
      user: { features: { updateEmail: false } },
    };

    const wrapper = createWrapper(config, mockUser);

    expect(wrapper.find("button").exists()).toBe(false);
  });

  it("does not show update email button when user is login via thirdparty", () => {
    const config = {
      ...appConfig,
      user: { features: { updateEmail: true } },
    };

    const wrapper = createWrapper(config, mockUserWithThirdParty);

    expect(wrapper.find("button").exists()).toBe(false);
  });

  it("displays user email address", () => {
    const wrapper = createWrapper();

    expect(wrapper.text()).toContain("test@example.com");
  });
});
