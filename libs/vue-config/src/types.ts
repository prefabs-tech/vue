interface AppConfig {
  apiBaseUrl: string;
  appTitle: string;
  appVersion: string;
  copyright?: {
    holder: string;
    url: string;
  };
  features: AppFeatures;
  slug: string;
  websiteDomain: string;
}

interface AppFeatures {
  showVersion: boolean;
}

export type { AppConfig, AppFeatures };
