import type { Options as SentryOptions } from "@sentry/types";

interface AppConfig {
  apiBaseUrl: string;
  appTitle: string;
  appVersion: string;
  copyright?: {
    holder: string;
    url: string;
  };
  features: AppFeatures;
  sentry?: SentryOptions;
  slug: string;
  websiteDomain: string;
}

interface AppFeatures {
  sentry?: boolean;
  showVersion: boolean;
}

export type { AppConfig, AppFeatures };
