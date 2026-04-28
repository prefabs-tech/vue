import { expect, it } from "vitest";

import { getPreferredLocale } from "../../utilities";

const dataset = [
  {
    languages: ["fr"],
    locale: "fr",
    locales: ["en", "fr", "de"],
  },
  {
    languages: ["fr-CA"],
    locale: "fr",
    locales: ["en", "fr", "de"],
  },
  {
    languages: ["fr", "en"],
    locale: "fr",
    locales: ["en", "fr", "de"],
  },
  {
    languages: ["de-DE", "fr", "en"],
    locale: "de",
    locales: ["en", "fr", "de"],
  },
  {
    languages: ["de-DE-bavarian", "fr", "en"],
    locale: "de",
    locales: ["en", "fr", "de"],
  },
  {
    languages: ["de-DE-bavarian", "fr", "en"],
    locale: "de-DE",
    locales: ["en", "fr", "de", "de-DE"],
  },
];

it("identifies the default locale", () => {
  for (const data of dataset) {
    const locale = getPreferredLocale(data.languages, data.locales);

    expect(locale).toBe(data.locale);
  }
});
