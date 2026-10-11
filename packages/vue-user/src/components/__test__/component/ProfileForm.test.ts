import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { flushPromises, mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  updateUserProfile: vi.fn(),
}));

vi.mock("../../../auth-provider", () => ({
  auth: vi.fn(() => ({})),
  authConfig: undefined,
  default: vi.fn(),
}));

vi.mock("../../../api/user", async (importOriginal) => ({
  ...(await importOriginal<object>()),
  updateUserProfile: mocks.updateUserProfile,
}));

import type { UserType } from "../../../types";

import { emitter } from "../../../index";
import useUserStore from "../../../store";
import ProfileForm from "../../profile/ProfileForm.vue";
import appConfig from "../config";

const user = {
  email: "test@example.com",
  givenName: "Test",
  id: "user-123",
  middleNames: null,
  surname: "User",
} as UserType;

const createWrapper = () => {
  useUserStore().$patch({ user });

  return mount(ProfileForm, {
    global: {
      plugins: [
        [configPlugin, { config: appConfig }],
        [i18nPlugin, { config: appConfig }],
      ],
    },
  });
};

const submitButton = (wrapper: ReturnType<typeof createWrapper>) =>
  wrapper.find('button[type="submit"]');

describe("#52 ProfileForm", () => {
  const notify = vi.fn();

  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
    vi.clearAllMocks();
    emitter.all.clear();
    emitter.on("notify", notify);
  });

  it("prefills the user's names", () => {
    const wrapper = createWrapper();

    expect(
      (wrapper.find('input[name="givenName"]').element as HTMLInputElement)
        .value,
    ).toBe("Test");
    expect(
      (wrapper.find('input[name="surname"]').element as HTMLInputElement).value,
    ).toBe("User");
  });

  it("disables submit until the form is dirty", async () => {
    const wrapper = createWrapper();

    expect(submitButton(wrapper).attributes("disabled")).toBeDefined();

    await wrapper.find('input[name="givenName"]').setValue("Changed");
    await flushPromises();

    expect(submitButton(wrapper).attributes("disabled")).toBeUndefined();
  });

  it("resets to the original values on cancel", async () => {
    const wrapper = createWrapper();

    await wrapper.find('input[name="givenName"]').setValue("Changed");
    await flushPromises();
    await wrapper
      .findAll("button")
      .find((button) => button.text() === "Cancel")
      ?.trigger("click");
    await flushPromises();

    expect(
      (wrapper.find('input[name="givenName"]').element as HTMLInputElement)
        .value,
    ).toBe("Test");
    expect(submitButton(wrapper).attributes("disabled")).toBeDefined();
  });

  it("saves the profile and updates the user", async () => {
    mocks.updateUserProfile.mockResolvedValue({
      data: { ...user, givenName: "Changed" },
    });
    const wrapper = createWrapper();

    await wrapper.find('input[name="givenName"]').setValue("Changed");
    await wrapper.find("form").trigger("submit");
    await vi.waitFor(() => expect(mocks.updateUserProfile).toHaveBeenCalled());
    await flushPromises();

    expect(mocks.updateUserProfile).toHaveBeenCalledWith(
      expect.objectContaining({ givenName: "Changed", surname: "User" }),
      appConfig.apiBaseUrl,
    );
    expect(useUserStore().user?.givenName).toBe("Changed");
    expect(notify).toHaveBeenCalledWith({
      text: "Profile updated successfully",
      type: "success",
    });
  });

  it("shows the error when saving fails", async () => {
    mocks.updateUserProfile.mockRejectedValue(new Error("SOMETHING_WRONG"));
    const wrapper = createWrapper();

    await wrapper.find('input[name="givenName"]').setValue("Changed");
    await wrapper.find("form").trigger("submit");
    await vi.waitFor(() => expect(mocks.updateUserProfile).toHaveBeenCalled());
    await flushPromises();

    expect(wrapper.text()).toContain("Something went wrong. Please try again.");
  });

  it("does not submit without a first name", async () => {
    const wrapper = createWrapper();

    await wrapper.find('input[name="givenName"]').setValue("");
    await wrapper.find("form").trigger("submit");
    await flushPromises();

    expect(mocks.updateUserProfile).not.toHaveBeenCalled();
    expect(wrapper.text()).toContain("First name is required.");
  });
});
