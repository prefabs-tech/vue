import type { Locale, LocaleMessageValue, VueMessageType } from "vue-i18n";

import nativeLocaleNames from "./locales/native-locale-names";

// Locale messages collection using vue-i18n's exported types (like v9)
type LocaleMessages<Message = VueMessageType> = Record<
  Locale,
  Record<string, LocaleMessageValue<Message>>
>;

const getLocaleNames = (supportedLocales: string[]) => {
  const names: LocaleMessages = {};

  for (const locale of supportedLocales) {
    names[locale] = {
      locales: nativeLocaleNames,
    };
  }

  return names;
};

const getPreferredLocale = (
  languages: readonly string[],
  locales: string[],
): string | undefined => {
  let locale: string | undefined;

  languages.some((language) => {
    const tokens = language.split("-");

    let subset: string[] = [];

    for (let n = 1; n <= tokens.length; n++) {
      subset = (subset.length === 0 ? locales : subset).filter((l) => {
        return l.startsWith(tokens.slice(0, n).join("-"));
      });

      if (subset.length === 1) {
        locale = subset[0];

        return true;
      }
    }
  });

  return locale;
};

const prependMessages = (
  messages: LocaleMessages,
  defaults: LocaleMessages | undefined,
): LocaleMessages => {
  if (!defaults) {
    return messages;
  }

  const m: LocaleMessages = {};

  for (const locale in defaults) {
    const base = defaults[locale];
    const prepend = messages[locale];

    m[locale] = prepend
      ? {
          ...prepend,
          ...base,
        }
      : base;
  }

  for (const locale in messages) {
    if (m[locale]) {
      continue;
    }

    const base = defaults[locale];
    const prepend = messages[locale];

    m[locale] = base
      ? {
          ...prepend,
          ...base,
        }
      : prepend;
  }

  return m;
};

export { getLocaleNames, getPreferredLocale, prependMessages };
