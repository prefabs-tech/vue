import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { ResponsiveMenu } from "@prefabs.tech/vue3-ui";
import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import SignInUpMenu from "../../SignInUpMenu.vue";
import appConfig from "../config";

const createWrapper = (config = appConfig) =>
  mount(SignInUpMenu, {
    global: {
      plugins: [
        [configPlugin, { config }],
        [i18nPlugin, { config }],
      ],
      stubs: { RouterLink: RouterLinkStub },
    },
  });

const routes = (wrapper: ReturnType<typeof createWrapper>) =>
  (
    wrapper.findComponent(ResponsiveMenu).props("routes") as {
      route: string;
    }[]
  ).map((route) => route.route);

describe("#45 SignInUpMenu", () => {
  it("shows login and signup by default", () => {
    expect(routes(createWrapper())).toEqual(["login", "signup"]);
  });

  it("omits signup when it is disabled", () => {
    const wrapper = createWrapper({
      ...appConfig,
      user: { routes: { signup: { disabled: true } } },
    } as typeof appConfig);

    expect(routes(wrapper)).toEqual(["login"]);
  });

  it("keeps signup when other routes are configured", () => {
    const wrapper = createWrapper({
      ...appConfig,
      user: { routes: { login: { path: "/sign-in" } } },
    } as unknown as typeof appConfig);

    expect(routes(wrapper)).toEqual(["login", "signup"]);
  });
});
