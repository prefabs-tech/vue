import type { AppConfig } from "@prefabs.tech/vue3-config";
import type { LocaleMessages, VueMessageType } from "@prefabs.tech/vue3-i18n";

import { createPinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createApp, inject } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";

const mocks = vi.hoisted(() => ({
  initAuthProvider: vi.fn(),
  initSupertokens: vi.fn(),
  updateRouter: vi.fn(),
}));

vi.mock("../../router", () => ({
  default: mocks.updateRouter,
  filterRoutes: vi.fn(),
}));

vi.mock("../../supertokens", async (importOriginal) => ({
  ...(await importOriginal<object>()),
  default: mocks.initSupertokens,
}));

vi.mock("../../auth-provider", async (importOriginal) => ({
  ...(await importOriginal<object>()),
  default: mocks.initAuthProvider,
}));

import type { DzangolabVueUserPluginOptions } from "../../types";

import plugin, { emitter } from "../../index";
import messages from "../../locales/messages.json";

const translationsKey = Symbol.for("dzangolab.vue-user.translations");

const baseConfig = {
  apiBaseUrl: "http://localhost",
  appTitle: "Test app",
} as AppConfig;

const install = (options: Partial<DzangolabVueUserPluginOptions> = {}) => {
  const app = createApp({ template: "<div />" });
  const router = createRouter({ history: createMemoryHistory(), routes: [] });

  app.use(plugin, {
    config: baseConfig,
    pinia: createPinia(),
    router,
    ...options,
  });

  return { app, router };
};

describe("plugin", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    emitter.all.clear();
  });

  describe("#1 plugin registration", () => {
    it("wires the router with the user config", () => {
      const config = { ...baseConfig, user: { supportedRoles: ["USER"] } };

      const { router } = install({ config });

      expect(mocks.updateRouter).toHaveBeenCalledWith(router, config.user);
    });

    it("initializes the auth provider with the app config", () => {
      install();

      expect(mocks.initAuthProvider).toHaveBeenCalledWith(baseConfig);
    });
  });

  describe("#2 auth provider selection", () => {
    it("initializes SuperTokens by default", () => {
      install();

      expect(mocks.initSupertokens).toHaveBeenCalledWith(baseConfig);
    });

    it("skips SuperTokens when laravel-passport is selected", () => {
      install({
        config: {
          ...baseConfig,
          user: { features: { authProvider: "laravel-passport" } },
        },
      });

      expect(mocks.initSupertokens).not.toHaveBeenCalled();
    });
  });

  describe("#4 translation injection", () => {
    it("provides the built-in translations", () => {
      const { app } = install();

      expect(app.runWithContext(() => inject(translationsKey))).toEqual(
        messages,
      );
    });
  });

  describe("#5 custom translation merging", () => {
    it("lets caller translations win and keeps the other defaults", () => {
      const translations = {
        en: { user: { custom: "Custom" } },
      } as unknown as LocaleMessages<VueMessageType>;

      const { app } = install({ translations });

      const provided = app.runWithContext(() =>
        inject<LocaleMessages<VueMessageType>>(translationsKey),
      );

      expect(provided?.en.user).toEqual({ custom: "Custom" });
      expect(provided?.en.roles).toEqual(messages.en.roles);
    });
  });

  describe("#6 terms component injection", () => {
    it("provides the terms component", () => {
      const termsComponent = { template: "<p>Terms</p>" };

      const { app } = install({
        termsComponent:
          termsComponent as DzangolabVueUserPluginOptions["termsComponent"],
      });

      expect(app.runWithContext(() => inject("dzangolabVueUserTerms"))).toBe(
        termsComponent,
      );
    });
  });

  describe("#7 notification emitter bridge", () => {
    it("forwards notify events to the notification callback", () => {
      const notification = vi.fn();
      install({ notification });

      emitter.emit("notify", { text: "Saved", type: "success" });

      expect(notification).toHaveBeenCalledWith({
        text: "Saved",
        type: "success",
      });
    });

    it("does not listen when no callback is given", () => {
      install();

      expect(emitter.all.get("notify")).toBeUndefined();
    });
  });
});
