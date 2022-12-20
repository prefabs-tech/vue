import { expect, it } from "vitest";

import { getPreferredLocale } from "../../utils";

const dataset = [
  {
    languages: ["fr"],
    locales: ["en", "fr", "de"],
    locale: "fr",
  },
  {
    languages: ["fr-CA"],
    locales: ["en", "fr", "de"],
    locale: "fr",
  },
  {
    languages: ["fr", "en"],
    locales: ["en", "fr", "de"],
    locale: "fr",
  },
  {
    languages: ["de-DE", "fr", "en"],
    locales: ["en", "fr", "de"],
    locale: "de",
  },
  {
    languages: ["de-DE-bavarian", "fr", "en"],
    locales: ["en", "fr", "de"],
    locale: "de",
  },
  {
    languages: ["de-DE-bavarian", "fr", "en"],
    locales: ["en", "fr", "de", "de-DE"],
    locale: "de-DE",
  },
];

it("identifies the default locale", () => {
  for (const data of dataset) {
    const locale = getPreferredLocale(data.languages, data.locales);

    expect(locale).toBe(data.locale);
  }
});
