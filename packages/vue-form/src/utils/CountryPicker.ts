import defaultEnglishCatalogue from "../components/country-picker/en.json";

export type Translation = Record<string, string>;
export type Locales = Record<string, Translation>;

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
