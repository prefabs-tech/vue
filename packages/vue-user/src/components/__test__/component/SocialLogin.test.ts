import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { flushPromises, mount } from "@vue/test-utils";
import { createPinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";

const authMock = vi.hoisted(() => ({
  doSocialSignIn: vi.fn(),
}));

vi.mock("../../../auth-provider", () => ({
  auth: vi.fn(() => authMock),
  authConfig: undefined,
  default: vi.fn(),
}));

import FacebookLogin from "../../FacebookLogin.vue";
import GoogleLogin from "../../GoogleLogin.vue";
import appConfig from "../config";

const createWrapper = (component: typeof GoogleLogin) =>
  mount(component, {
    global: {
      plugins: [
        createPinia(),
        [configPlugin, { config: appConfig }],
        [i18nPlugin, { config: appConfig }],
      ],
    },
  });

describe.each([
  ["#46 GoogleLogin", GoogleLogin, "google", "test/auth/callback/google"],
  [
    "#47 FacebookLogin",
    FacebookLogin,
    "facebook",
    "test/auth/callback/facebook",
  ],
])("%s", (_name, component, providerId, redirectURL) => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("signs in with the provider and the websiteDomain callback URL", async () => {
    authMock.doSocialSignIn.mockResolvedValue(undefined);
    const wrapper = createWrapper(component);

    await wrapper.find("button").trigger("click");
    await flushPromises();

    expect(authMock.doSocialSignIn).toHaveBeenCalledWith(
      providerId,
      redirectURL,
    );
    expect(wrapper.emitted("error")).toBeUndefined();
  });

  it("emits an error when sign-in fails", async () => {
    authMock.doSocialSignIn.mockRejectedValue(new Error("network"));
    const wrapper = createWrapper(component);

    await wrapper.find("button").trigger("click");
    await flushPromises();

    expect(wrapper.emitted("error")?.[0]).toEqual([
      new Error("SOMETHING_WRONG"),
    ]);
  });
});
