import defaultEnglishCatalogue from "../components/CountryPicker/en.json";

import type {
  CountryPickerLocales,
  CountryPickerTranslation,
  GroupedOption as OptionGroup,
  SelectOption,
} from "../types";

export const getFallbackTranslation = (
  fallbackLocale: string,
  locales: CountryPickerLocales | undefined,
): CountryPickerTranslation | null => {
  if (locales?.[fallbackLocale]) {
    return locales[fallbackLocale];
  }

  if (fallbackLocale === "en") {
    return defaultEnglishCatalogue;
  }

  return null;
};

export const getFlagClass = (
  code: string | undefined,
  position: string,
  style: string,
) =>
  [
    "flag-icon",
    code && `flag-icon-${code.trim().toLowerCase()}`,
    position === "right" && "flag-icon-right",
    position === "right-edge" && "flag-icon-right-edge",
    style === "circle" && "flag-icon-rounded",
    style === "square" && "flag-icon-squared",
  ]
    .filter(Boolean)
    .join(" ");

export const getLabel = (
  code: string,
  locale: string,
  locales: CountryPickerLocales | undefined,
  fallbackTranslation: CountryPickerTranslation,
) => {
  return locales?.[locale]?.[code] || fallbackTranslation[code] || code;
};

export const sortByLabel = (
  optionA: SelectOption | OptionGroup,
  optionB: SelectOption | OptionGroup,
) => (optionA.label ?? "").localeCompare(optionB.label ?? "");
