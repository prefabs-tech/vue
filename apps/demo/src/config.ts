import { parse } from "@prefabs.tech/vue3-config";

import type { AppConfig, AppFeatures } from "@prefabs.tech/vue3-config";
import type { LocaleMessages, VueMessageType } from "@prefabs.tech/vue3-i18n";

import en from "@/locales/en";
import fr from "@/locales/fr";

const config: AppConfig = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL as string,
  appName: import.meta.env.VITE_APP_NAME as string,
  appTitle: import.meta.env.VITE_APP_TITLE as string,
  appVersion: `${import.meta.env.VITE_APP_VERSION}-${
    import.meta.env.VITE_APP_BUILD
  }` as string,
  copyright: {
    holder: import.meta.env.VITE_COPYRIGHT_HOLDER as string,
    url: import.meta.env.VITE_COPYRIGHT_HOLDER_URL as string,
  },
  features: {
    showVersion: parse(
      import.meta.env.VITE_FEATURE_SHOW_VERSION as string,
      true,
    ) as boolean,
  } as AppFeatures,
  i18n: {
    fallbackLocale: (import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE ||
      "en") as string,
    messages: {
      en: en,
      "en-GB": en,
      "en-US": en,
      fr: fr,
    } as LocaleMessages<VueMessageType>,
    supportedLocales: (import.meta.env.VITE_I18N_LOCALES as string).split(","),
  },
  layout: {
    logo: "/vue/logo.png",
    mainMenu: [
      {
        name: "UI",
        route: "ui",
      },
      {
        name: "User",
        route: "user",
      },
      {
        name: "Form",
        route: "form",
      },
      {
        name: "Layout",
        route: "layout",
      },
      {
        name: "Table",
        route: "table",
      },
    ],
  },
  sentry: {
    dsn: import.meta.env.VITE_SENTRY_DSN,
    enabled: parse(import.meta.env.VITE_SENTRY_ENABLED, false) as boolean,
    environment: import.meta.env.VITE_SENTRY_ENVIRONMENT,
  },
  slug: import.meta.env.VITE_APP_SLUG as string,
  user: {
    options: {
      email: {
        host_whitelist: ["dzangolab.com", "dzango.com"],
      },
      password: {
        minNumbers: 2,
        minSymbols: 1,
      },
    },
    socialLogins: ["google"],
  },
  websiteDomain: (window.location.protocol +
    "//" +
    window.location.host) as string,
};

const feature = (name: keyof AppFeatures): boolean | undefined => {
  return config.features[name];
};

export default config;

export { feature };
