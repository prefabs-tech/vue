import { expect, it } from "vitest";

import { prependMessages } from "../../utilities";

it("prepends messages", () => {
  const messages = {
    de: {
      locales: {
        de: "Deutsch",
        en: "English",
        es: "Español",
        fr: "French",
        th: "Thai",
      },
      x: "X",
      y: "Y",
    },
    en: {
      x: "X",
      y: "Y",
    },
    es: {
      locales: {
        de: "Deutsch",
        es: "Español",
      },
      x: "X",
      y: "Y",
    },
    fr: {
      locales: {
        de: "Deutsch",
        es: "Español",
      },
      x: "X",
      y: "Y",
    },
    th: {
      locales: {
        de: "Deutsch [th]",
        en: "English [th]",
        es: "Español [th]",
        fr: "French [th]",
        th: "Thai [th]",
      },
      x: "X",
      y: "Y",
    },
  };

  const locales = {
    en: "English",
    fr: "Français",
    th: "ไทย",
  };

  const prepended = {
    en: {
      locales,
    },
    fr: {
      locales,
    },
    th: {
      locales,
    },
  };

  const updated = prependMessages(prepended, messages);

  expect(updated.en.locales).toBe(prepended.en.locales);

  expect(updated.fr.locales).toBe(messages.fr.locales);

  expect(updated.de.locales).toBe(messages.de.locales);

  expect(updated.es.locales).toBe(messages.es.locales);

  expect(updated.th.locales).toBe(messages.th.locales);
});
