import defaultEnglishCatalogue from "../components/country-picker/en.json";

import type { Translation, Locales } from "../types";

export const getFallbackTranslation = (
  fallbackLocale: string,
  locales: Locales | undefined,
): Translation | null => {
  if (locales?.[fallbackLocale]) {
    return locales[fallbackLocale];
  }

  if (fallbackLocale === "en") {
    return defaultEnglishCatalogue;
  }

  return null;
};
