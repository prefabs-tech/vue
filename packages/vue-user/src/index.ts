import "./assets/css/index.css";

import { prependMessages } from "@prefabs.tech/vue3-i18n";
import mitt from "mitt";
import { inject } from "vue";

import client from "./api/axios";
import initAuthProvider from "./auth-provider";
import { ERROR_UNAUTHORIZED } from "./constant";
import messages from "./locales/messages.json";
import updateRouter from "./router";
import userStore from "./store";
import initSupertokens from "./supertokens";
import ChangePassword from "./views/ChangePassword.vue";
import ProfileLegacy from "./views/Profile.vue";
import Profile from "./views/Profile/Index.vue";

import type { DzangolabVueUserPluginOptions } from "./types";
import type { LocaleMessages, VueMessageType } from "@prefabs.tech/vue3-i18n";
import type { App, Plugin } from "vue";

const __dzangolabVueUserTranslations = Symbol.for(
  "dzangolab.vue-user.translations",
);

const emitter = mitt();

const plugin: Plugin = {
  install: (app: App, options: DzangolabVueUserPluginOptions): void => {
    updateRouter(options.router, options.config?.user);

    if (options?.config?.user?.features?.authProvider !== "laravel-passport") {
      initSupertokens(options.config);
    }

    if (options?.config?.user?.features?.signUp?.emailVerification) {
      const { getVerificationStatus, logout } = userStore();

      getVerificationStatus()
      .catch((error) => {
        if (error.status === ERROR_UNAUTHORIZED) {
          logout();
        }
      });
    }

    initAuthProvider(options.config);

    const translations = options?.translations
      ? prependMessages(messages, options.translations)
      : messages;

    app.provide(__dzangolabVueUserTranslations, translations);
    app.provide("dzangolabVueUserTerms", options?.termsComponent);

    if (options && options.notification) {
      emitter.on("notify", (message: object | string | unknown) => {
        options.notification?.(message);
      });
    }
  },
};

const useTranslations = () => {
  return inject<LocaleMessages<VueMessageType>>(
    __dzangolabVueUserTranslations,
    messages,
  );
};

export default plugin;

export { client, userStore, useTranslations, emitter };

export * from "./api/roles";

export { ChangePassword, Profile, ProfileLegacy };

export * from "./components";

export * from "./layouts";

export type {
  AuthTokens,
  DzangolabVueUserConfig,
  DzangolabVueUserPluginOptions,
  InvitationPayload,
  LoginCredentials,
  PasswordResetPayload,
  PasswordResetRequestPayload,
  Role,
  RolePermissionsInput,
  RouteOverride,
  RouteOverrides,
  User,
} from "./types";
