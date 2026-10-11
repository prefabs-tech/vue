import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { flushPromises, mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createMemoryHistory, createRouter } from "vue-router";

const mocks = vi.hoisted(() => ({
  isProfileCompleted: vi.fn(),
  thirdPartySignInAndUp: vi.fn(),
  verifySessionRoles: vi.fn(),
}));

vi.mock(
  "supertokens-web-js/recipe/thirdpartyemailpassword",
  async (importOriginal) => {
    const original = await importOriginal<{ default: object }>();

    return {
      ...original,
      default: {
        ...original.default,
        thirdPartySignInAndUp: mocks.thirdPartySignInAndUp,
      },
    };
  },
);

vi.mock("../../../supertokens", async (importOriginal) => ({
  ...(await importOriginal<object>()),
  isProfileCompleted: mocks.isProfileCompleted,
  verifySessionRoles: mocks.verifySessionRoles,
}));

import { emitter } from "../../../index";
import useUserStore from "../../../store";
import AuthSocialLoginCallback from "../../AuthSocialLoginCallback.vue";
import appConfig from "../config";

const Stub = { template: "<div />" };

const user = { email: "test@example.com", id: "user-123" };

const mountCallback = async (config = appConfig) => {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { component: Stub, name: "callback", path: "/callback" },
      { component: Stub, name: "home", path: "/" },
      { component: Stub, name: "login", path: "/login" },
    ],
  });

  await router.push("/callback");

  mount(AuthSocialLoginCallback, {
    global: {
      plugins: [[configPlugin, { config }], [i18nPlugin, { config }], router],
    },
  });

  await flushPromises();

  return router;
};

describe("#48 AuthSocialLoginCallback", () => {
  const notify = vi.fn();

  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
    vi.clearAllMocks();
    emitter.all.clear();
    emitter.on("notify", notify);
  });

  it("sets the user and goes home when the handshake succeeds", async () => {
    mocks.thirdPartySignInAndUp.mockResolvedValue({ status: "OK", user });

    const router = await mountCallback();

    expect(useUserStore().user).toMatchObject(user);
    expect(router.currentRoute.value.name).toBe("home");
  });

  it("notifies and goes to login when the handshake fails", async () => {
    mocks.thirdPartySignInAndUp.mockResolvedValue({
      status: "NO_EMAIL_GIVEN_BY_PROVIDER",
    });

    const router = await mountCallback();

    expect(notify).toHaveBeenCalledWith(
      expect.objectContaining({ type: "error" }),
    );
    expect(useUserStore().user).toBeUndefined();
    expect(router.currentRoute.value.name).toBe("login");
  });

  it("accepts users with a supported role", async () => {
    mocks.thirdPartySignInAndUp.mockResolvedValue({ status: "OK", user });
    mocks.verifySessionRoles.mockResolvedValue(true);

    const router = await mountCallback({
      ...appConfig,
      user: { supportedRoles: ["ADMIN"] },
    });

    expect(mocks.verifySessionRoles).toHaveBeenCalledWith(["ADMIN"]);
    expect(router.currentRoute.value.name).toBe("home");
  });

  it("rejects users without a supported role", async () => {
    mocks.thirdPartySignInAndUp.mockResolvedValue({ status: "OK", user });
    mocks.verifySessionRoles.mockResolvedValue(false);

    const router = await mountCallback({
      ...appConfig,
      user: { supportedRoles: ["ADMIN"] },
    });

    expect(notify).toHaveBeenCalledWith(
      expect.objectContaining({ type: "error" }),
    );
    expect(useUserStore().user).toBeUndefined();
    expect(router.currentRoute.value.name).toBe("login");
  });
});
