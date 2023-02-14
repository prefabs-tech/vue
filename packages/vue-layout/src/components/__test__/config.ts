import type { AppConfig } from "@dzangolab/vue3-config";
import type { LocaleMessages, VueMessageType } from "@dzangolab/vue3-i18n";

const config: AppConfig = {
  apiBaseUrl: "http://localhost",
  appTitle: "Test app",
  appVersion: "0.1.0",
  copyright: {
    holder: "Dzango Technologies Limited",
    url: "https://dzango.com",
  },
  i18n: {
    fallbackLocale: "en",
    messages: {} as LocaleMessages<VueMessageType>,
    supportedLocales: ["en", "fr"],
  },
  features: {
    showVersion: true,
    sentry: true,
  },
  layout: {
    mainMenu: [
      {
        name: "Home",
        route: "home",
      },
      {
        name: "About",
        route: "about",
      },
    ],
  },
  sentry: {
    dsn: "tbd",
  },
  slug: "app",
  websiteDomain: "test",
};

export default config;
