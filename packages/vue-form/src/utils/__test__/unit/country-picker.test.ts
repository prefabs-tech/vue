import { describe, expect, test } from "vitest";

import defaultEnglishTranslation from "../../../components/CountryPicker/en.json";
import { getFallbackTranslation, getFlagClass } from "../../country-picker";

import type { CountryPickerLocales } from "../../../types";

const frenchTranslation = {
  DE: "Allemagne",
  BR: "Brésil",
  CA: "Canada",
  CN: "Chine",
  ES: "Espagne",
  US: "États‑Unis",
  FR: "France",
  IT: "Italie",
  JP: "Japon",
  GB: "Royaume‑Uni",
  RU: "Russie",
};

const spanishTranslation = {
  DE: "Alemania",
  BR: "Brasil",
  CA: "Canadá",
  CN: "China",
  ES: "España",
  US: "Estados Unidos",
  FR: "Francia",
  IT: "Italia",
  JP: "Japón",
  GB: "Reino Unido",
  RU: "Rusia",
};

const locales = {
  fr: frenchTranslation,
  es: spanishTranslation,
};

const customEnglishTranslation = { FR: "France" };

describe("getFallbackTranslation", () => {
  const testCases = [
    {
      data: {
        fallbackLocale: "fr",
        locales: locales,
      },
      result: frenchTranslation,
      title: "Should return translation from locales if fallbackLocale exists in it",
    },
    {
      data: {
        fallbackLocale: "en",
        locales: {},
      },
      result: defaultEnglishTranslation,
      title: "Should return defaultEnglishTranslation if fallbackLocale is 'en' and not in locales",
    },
    {
      data: {
        fallbackLocale: "en",
        locales: { en: customEnglishTranslation },
      },
      result: customEnglishTranslation,
      title: "Should prioritize locales['en'] over defaultEnglishTranslation if provided",
    },
    {
      data: {
        fallbackLocale: "de",
        locales: locales,
      },
      result: null,
      title: "Should return null if fallbackLocale is not found and is not 'en'",
    },
    {
      data: {
        fallbackLocale: "fr",
        locales: undefined,
      },
      result: null,
      title: "Should handle undefined locales gracefully",
    },
    {
      data: {
        fallbackLocale: "en",
        locales: undefined,
      },
      result: defaultEnglishTranslation,
      title: "Should return defaultEnglishTranslation when locales is undefined but fallback is 'en'",
    },
  ];

  testCases.map((testCase) => {
    test(testCase.title, () => {
      const { fallbackLocale, locales } = testCase.data;

      const result = getFallbackTranslation(
        fallbackLocale,
        locales as CountryPickerLocales,
      );

      expect(result).toEqual(testCase.result);
    });
  });
});

describe("getFlagClass", () => {
  const testCases = [
    {
      data: { code: "US", position: "left", style: "normal" },
      result: "flag-icon flag-icon-us",
      title: "Should generate basic class with code only",
    },
    {
      data: { code: "  GB  ", position: "left", style: "normal" },
      result: "flag-icon flag-icon-gb",
      title: "Should handle lowercase and trimming of country code",
    },
    {
      data: { code: "fr", position: "right", style: "normal" },
      result: "flag-icon flag-icon-fr flag-icon-right",
      title: "Should add 'flag-icon-right' when position is 'right'",
    },
    {
      data: { code: "fr", position: "right-edge", style: "normal" },
      result: "flag-icon flag-icon-fr flag-icon-right-edge",
      title: "Should add 'flag-icon-right-edge' when position is 'right-edge'",
    },
    {
      data: { code: "jp", position: "left", style: "circle" },
      result: "flag-icon flag-icon-jp flag-icon-rounded",
      title: "Should add 'flag-icon-rounded' when style is 'circle'",
    },
    {
      data: { code: "jp", position: "left", style: "square" },
      result: "flag-icon flag-icon-jp flag-icon-squared",
      title: "Should add 'flag-icon-squared' when style is 'square'",
    },
    {
      data: { code: "ca", position: "right", style: "circle" },
      result: "flag-icon flag-icon-ca flag-icon-right flag-icon-rounded",
      title: "Should combine multiple classes correctly",
    },
    {
      data: { code: undefined, position: "left", style: "normal" },
      result: "flag-icon",
      title: "Should handle undefined code gracefully",
    },
  ];

  testCases.map((testCase) => {
    test(testCase.title, () => {
      const { code, position, style } = testCase.data;

      const result = getFlagClass(code, position, style);

      expect(result).toBe(testCase.result);
    });
  });
});
