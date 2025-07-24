import type { Options as SentryOptions } from "@sentry/core";

interface AppConfig {
  authBasePath?: string;
  apiBaseUrl: string;
  appName?: string;
  appTitle: string;
  appVersion: string;
  copyright?: {
    holder: string;
    url: string;
  };
  features: AppFeatures;
  sentry?: SentryOptions & {
    enabled?: boolean;
  };
  slug: string;
  toastNotification?: {
    position: ToastNotificationPosition;
  };
  websiteDomain: string;
}

interface AppFeatures {
  showVersion: boolean;
}

type ToastNotificationPosition =
  | "bottom center"
  | "bottom left"
  | "bottom right"
  | "top center"
  | "top left"
  | "top right";

export type { AppConfig, AppFeatures };
