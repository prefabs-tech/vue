import { expect, it } from "vitest";

import nativeLocaleNames from "../../locales/native-locale-names";
import { getLocaleNames } from "../../utils";

it("returns the list of locale names", () => {
  const supportedLocales = ["en", "de", "fr", "th"];

  const localeNames = getLocaleNames(supportedLocales);

  for (const locale of supportedLocales) {
    expect(localeNames[locale]).toEqual({
      locales: nativeLocaleNames,
    });
  }
});
