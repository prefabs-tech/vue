interface AppConfig {
  apiBaseUrl: string;
  appVersion: string;
  copyrightHolder: string;
  features: AppFeatures;
  locales: string;
  localStorageNamespace: string;
}

interface AppFeatures {
  showVersion: boolean;
}

export type { AppConfig, AppFeatures };
