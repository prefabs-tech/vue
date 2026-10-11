import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { flushPromises, mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  doChangeEmail: vi.fn(),
  getMe: vi.fn(),
}));

vi.mock("../../../auth-provider", () => ({
  auth: vi.fn(() => ({ doChangeEmail: mocks.doChangeEmail })),
  authConfig: undefined,
  default: vi.fn(),
}));

vi.mock("../../../api/user", async (importOriginal) => ({
  ...(await importOriginal<object>()),
  getMe: mocks.getMe,
}));

import type { UserType } from "../../../types";

import { emitter } from "../../../index";
import useUserStore from "../../../store";
import UpdateEmailForm from "../../profile/UpdateEmailForm.vue";
import UpdateEmailModal from "../../profile/UpdateEmailModal.vue";
import appConfig from "../config";

const user = { email: "old@example.com", id: "user-123" } as UserType;

const mountWithUser = (component: object, config = appConfig, props = {}) => {
  useUserStore().$patch({ user });

  return mount(component, {
    global: {
      plugins: [
        [configPlugin, { config }],
        [i18nPlugin, { config }],
      ],
    },
    props,
  });
};

const submitEmail = async (
  wrapper: ReturnType<typeof mount>,
  email = "new@example.com",
) => {
  await wrapper.find('input[name="email"]').setValue(email);
  await wrapper.find("form").trigger("submit");
  await flushPromises();
  await vi.waitFor(() => expect(mocks.doChangeEmail).toHaveBeenCalled());
  await flushPromises();
};

describe("#50 UpdateEmailForm", () => {
  const notify = vi.fn();

  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
    vi.clearAllMocks();
    emitter.all.clear();
    emitter.on("notify", notify);
  });

  it("disables submit until the email changes", async () => {
    const wrapper = mountWithUser(UpdateEmailForm);

    expect(
      wrapper.find('button[type="submit"]').attributes("disabled"),
    ).toBeDefined();

    await wrapper.find('input[name="email"]').setValue("new@example.com");

    expect(
      wrapper.find('button[type="submit"]').attributes("disabled"),
    ).toBeUndefined();
  });

  it.each([
    ["EMAIL_ALREADY_EXISTS_ERROR", "Email already exists."],
    ["EMAIL_SAME_AS_CURRENT_ERROR", "Email is same as the current one."],
    ["EMAIL_INVALID_ERROR", "Invalid email"],
    [
      "EMAIL_FEATURE_DISABLED_ERROR",
      "Update email feature is currently disabled.",
    ],
    ["UNKNOWN", "An error occurred while updating the email."],
  ])("shows the message for %s", async (status, message) => {
    mocks.doChangeEmail.mockResolvedValue(status);
    const wrapper = mountWithUser(UpdateEmailForm);

    await submitEmail(wrapper);

    expect(mocks.doChangeEmail).toHaveBeenCalledWith(
      "new@example.com",
      appConfig.apiBaseUrl,
    );
    expect(wrapper.text()).toContain(message);
    expect(wrapper.emitted("email:updateProcessed")).toBeUndefined();
  });

  it("shows an error when the request throws", async () => {
    mocks.doChangeEmail.mockRejectedValue(new Error("network"));
    const wrapper = mountWithUser(UpdateEmailForm);

    await submitEmail(wrapper);

    expect(wrapper.text()).toContain(
      "An error occurred while updating the email.",
    );
  });

  it("updates the user on OK", async () => {
    mocks.doChangeEmail.mockResolvedValue("OK");
    mocks.getMe.mockResolvedValue({
      data: { ...user, email: "new@example.com" },
    });
    const wrapper = mountWithUser(UpdateEmailForm);

    await submitEmail(wrapper);

    expect(useUserStore().user?.email).toBe("new@example.com");
    expect(notify).toHaveBeenCalledWith({
      text: "Email updated successfully.",
      type: "success",
    });
    expect(wrapper.emitted("email:updateProcessed")).toHaveLength(1);
  });

  it("asks for verification on OK when email verification is enabled", async () => {
    mocks.doChangeEmail.mockResolvedValue("OK");
    mocks.getMe.mockResolvedValue({ data: user });
    const wrapper = mountWithUser(UpdateEmailForm, {
      ...appConfig,
      user: { features: { signUp: { emailVerification: true } } },
    });

    await submitEmail(wrapper);

    expect(useUserStore().user?.email).toBe("old@example.com");
    expect(notify).toHaveBeenCalledWith({
      text: "A verification link has been sent to your email.",
      type: "success",
    });
    expect(wrapper.emitted("email:updateProcessed")).toHaveLength(1);
  });
});

describe("#51 UpdateEmailModal", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
    vi.clearAllMocks();
  });

  it("resets the form and emits on:close when dismissed", async () => {
    mocks.doChangeEmail.mockResolvedValue("EMAIL_INVALID_ERROR");
    const wrapper = mountWithUser(UpdateEmailModal, appConfig, { show: true });

    await submitEmail(wrapper);

    expect(wrapper.text()).toContain("Invalid email");

    await wrapper.find('svg[aria-label="close modal"]').trigger("click");
    await flushPromises();

    expect(wrapper.emitted("on:close")).toHaveLength(1);
    expect(wrapper.text()).not.toContain("Invalid email");
  });

  it("emits on:close once the email update is processed", async () => {
    mocks.doChangeEmail.mockResolvedValue("OK");
    mocks.getMe.mockResolvedValue({
      data: { ...user, email: "new@example.com" },
    });
    const wrapper = mountWithUser(UpdateEmailModal, appConfig, { show: true });

    await submitEmail(wrapper);

    expect(wrapper.emitted("on:close")).toHaveLength(1);
  });
});
