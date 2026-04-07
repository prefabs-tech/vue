import configPlugin from "@prefabs.tech/vue3-config";
import { RouterLinkStub, mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Logo from "@/components/Logo.vue";

import type { AppConfig } from "@prefabs.tech/vue3-config";

const makeConfig = (overrides: Partial<AppConfig> = {}): AppConfig => ({
  apiBaseUrl: "http://localhost",
  appTitle: "My App",
  appVersion: "1.0.0",
  ...overrides,
});

const mountLogo = (
  props: Record<string, unknown> = {},
  config: AppConfig = makeConfig(),
) =>
  mount(Logo, {
    global: {
      plugins: [[configPlugin, { config }]],
      stubs: { RouterLink: RouterLinkStub },
    },
    props,
  });

describe("Logo", () => {
  it("renders an img when src prop is provided", () => {
    const wrapper = mountLogo({ src: "/my-logo.svg", alt: "My Logo" });

    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("img").attributes("src")).toBe("/my-logo.svg");
  });

  it("falls back to layoutConfig.logo when no src prop is given", () => {
    const config = makeConfig({
      layout: {
        localeSwitcher: { showBadges: false },
        logo: "/config-logo.svg",
        logoAlt: "Config Logo",
      },
    });

    const wrapper = mountLogo({}, config);

    expect(wrapper.find("img").exists()).toBe(true);
    expect(wrapper.find("img").attributes("src")).toBe("/config-logo.svg");
  });

  it("renders a text fallback when no image source is available", () => {
    const wrapper = mountLogo({}, makeConfig({ appTitle: "Acme" }));

    expect(wrapper.find("img").exists()).toBe(false);
    expect(wrapper.find(".logo-default").exists()).toBe(true);
  });

  it("uses the alt prop when provided", () => {
    const wrapper = mountLogo({ src: "/logo.svg", alt: "Custom Alt" });

    expect(wrapper.find("img").attributes("alt")).toBe("Custom Alt");
  });

  it("falls back to layoutConfig.logoAlt for alt text", () => {
    const config = makeConfig({
      layout: {
        localeSwitcher: { showBadges: false },
        logo: "/logo.svg",
        logoAlt: "Config Alt",
      },
    });

    const wrapper = mountLogo({}, config);

    expect(wrapper.find("img").attributes("alt")).toBe("Config Alt");
  });

  it("falls back to parsedAppName for alt text", () => {
    const config = makeConfig({
      appName: "@prefabs.tech/test-app",
      layout: {
        localeSwitcher: { showBadges: false },
        logo: "/logo.svg",
      },
    });

    const wrapper = mountLogo({}, config);

    expect(wrapper.find("img").attributes("alt")).toBe("prefabs.tech test-app");
  });

  it("falls back to appTitle for alt text when logoAlt is not configured", () => {
    const config = makeConfig({
      appTitle: "App Title",
      layout: {
        localeSwitcher: { showBadges: false },
        logo: "/logo.svg",
      },
    });

    const wrapper = mountLogo({}, config);

    expect(wrapper.find("img").attributes("alt")).toBe("App Title");
  });

  it("defaults the logo link route to home when nothing is configured", () => {
    const wrapper = mountLogo({ src: "/logo.svg" });

    // RouterLinkStub renders the `to` prop; check the stub's prop
    const link = wrapper.findComponent(RouterLinkStub);
    expect(link.props("to")).toEqual({ name: "home" });
  });

  it("uses logoRoute from config when no route prop is given", () => {
    const config = makeConfig({
      layout: {
        localeSwitcher: { showBadges: false },
        logo: "/logo.svg",
        logoRoute: "dashboard",
      },
    });

    const wrapper = mountLogo({}, config);

    const link = wrapper.findComponent(RouterLinkStub);
    expect(link.props("to")).toEqual({ name: "dashboard" });
  });
});
