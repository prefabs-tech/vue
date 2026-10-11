import type { Tab } from "@prefabs.tech/vue3-ui";

import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { TabView } from "@prefabs.tech/vue3-ui";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it } from "vitest";

import type { UserType } from "../../../types";

import appConfig from "../../../components/__test__/config";
import useUserStore from "../../../store";
import ProfileTabsPage from "../../Profile/ProfileTabsPage.vue";

const user = { email: "test@example.com", id: "user-123" } as UserType;

const createWrapper = (props = {}, config = appConfig, currentUser = user) => {
  useUserStore().$patch({ user: currentUser });

  return mount(ProfileTabsPage, {
    global: {
      plugins: [
        [configPlugin, { config }],
        [i18nPlugin, { config }],
      ],
      stubs: { AccountInfo: true, ChangePassword: true, ProfileForm: true },
    },
    props,
  });
};

const tabs = (wrapper: ReturnType<typeof createWrapper>) =>
  wrapper.findComponent(TabView).props("tabs") as Tab[];

describe("#53 ProfileTabsPage", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
  });

  it("shows the profile and credentials tabs by default", () => {
    expect(tabs(createWrapper())).toEqual([
      { key: "profile", label: "My profile" },
      { key: "credentials", label: "Credentials" },
    ]);
  });

  it("appends caller tabs", () => {
    const wrapper = createWrapper({
      tabs: [{ key: "billing", label: "Billing" }],
    });

    expect(tabs(wrapper).map((tab) => tab.key)).toEqual([
      "profile",
      "credentials",
      "billing",
    ]);
  });

  it("overrides a default tab by key", () => {
    const wrapper = createWrapper({
      tabs: [{ key: "profile", label: "About me" }],
    });

    expect(tabs(wrapper)).toEqual([
      { key: "profile", label: "About me" },
      { key: "credentials", label: "Credentials" },
    ]);
  });

  it("shows the change-password section for email users", () => {
    const wrapper = createWrapper({ activeKey: "credentials" });

    expect(wrapper.findComponent({ name: "ChangePassword" }).exists()).toBe(
      true,
    );
  });

  it("hides the change-password section for social-login users", () => {
    const wrapper = createWrapper(
      { activeKey: "credentials" },
      { ...appConfig, user: { socialLogins: ["google"] } },
      { ...user, thirdParty: { id: "google", userId: "g-1" } },
    );

    expect(wrapper.findComponent({ name: "ChangePassword" }).exists()).toBe(
      false,
    );
  });
});
