# @prefabs.tech/vue3-i18n — Developer Guide

## Installation

### For package consumers

```bash
npm install @prefabs.tech/vue3-i18n
```

```bash
pnpm add @prefabs.tech/vue3-i18n
```

### For monorepo development

```bash
pnpm install
pnpm --filter @prefabs.tech/vue3-i18n test
pnpm --filter @prefabs.tech/vue3-i18n build
```

## Setup

```typescript
import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { createApp } from "vue";

import App from "./App.vue";

const config = {
  i18n: {
    messages: {
      en: {
        goodbye: "Goodbye",
        welcome: "Welcome",
      },
      fr: {
        goodbye: "Au revoir",
        welcome: "Bienvenue",
      },
      th: {
        goodbye: "ลาก่อน",
        welcome: "ยินดีต้อนรับ",
      },
    },
    supportedLocales: ["en", "fr", "th"],
  },
  slug: "my-app",
};

const app = createApp(App);

app.use(configPlugin, { config });
app.use(i18nPlugin, { config });
app.mount("#app");
```

All subsequent examples assume this setup.

---

## Base Libraries

### vue-i18n — MODIFIED

Vue I18n is the official internationalization plugin for Vue.js.

→ **Their docs:** [vue-i18n](https://vue-i18n.intlify.dev/)

We wrap vue-i18n with a modified configuration:

- Force `globalInjection: true` — makes `$t` and `$i18n` available in all templates
- Force `legacy: false` — enforces Composition API mode
- Override `locale` with stored/preferred value from localStorage or browser detection
- Merge user-provided `messages` with built-in locale name translations

All other vue-i18n config options are passed through unchanged. See their docs for the full API.

**What we add on top:**

- Locale persistence via localStorage (keyed by app slug)
- Automatic locale detection from browser language preferences
- Built-in locale name translations for common locales
- Message merging utility that combines default messages with locale names
- `LocaleSwitcher` component with dropdown UI
- Integration with `@prefabs.tech/vue3-config` via `AppConfig` augmentation

---

## Features

### Locale Persistence

User's selected locale is automatically saved to localStorage using the key `${slug}.locale`. On subsequent visits, the stored locale is restored.

```typescript
import { useLocaleStore } from "@prefabs.tech/vue3-i18n";

const { getLocale, setLocale } = useLocaleStore("my-app");

// Read stored locale
const storedLocale = getLocale(); // "fr" or undefined

// Persist a locale
setLocale("fr");

// Remove stored locale
setLocale(undefined);
```

### Automatic Locale Detection

If no locale is stored, the plugin automatically detects the user's preferred locale from `navigator.languages` and matches it against `supportedLocales`.

The matching algorithm uses progressive prefix matching:

- `en-US` matches `en-US` exactly if available
- `en-US` falls back to `en` if `en-US` is not in `supportedLocales`
- `en-GB-oxendict` progressively tries `en-GB-oxendict`, `en-GB`, then `en`

```typescript
import { getPreferredLocale } from "@prefabs.tech/vue3-i18n";

const preferred = getPreferredLocale(["en-US", "fr-FR"], ["en", "fr", "th"]);
// Returns "en" (matched "en-US" → "en")
```

### Built-in Locale Name Translations

The plugin automatically injects native locale names into your messages under the `locales` namespace. This allows the `LocaleSwitcher` component to display locale names in their native language.

Built-in locale names:

- `en` → "English"
- `en-GB` → "English (GB)"
- `en-US` → "English (US)"
- `fr` → "Français"
- `th` → "ไทย"

Access them in templates:

```vue
<template>
  <div>{{ $t("locales.fr") }}</div>
  <!-- Renders: Français -->
</template>
```

### Message Merging

The `prependMessages` utility merges two message objects, with the second argument taking precedence. This is used internally to combine locale names with user-provided messages.

```typescript
import { prependMessages } from "@prefabs.tech/vue3-i18n";

const localeNames = {
  en: { locales: { en: "English", fr: "Français" } },
  fr: { locales: { en: "English", fr: "Français" } },
};

const userMessages = {
  en: { welcome: "Welcome" },
  fr: { welcome: "Bienvenue" },
};

const merged = prependMessages(localeNames, userMessages);
// Result:
// {
//   en: { locales: { en: "English", fr: "Français" }, welcome: "Welcome" },
//   fr: { locales: { en: "English", fr: "Français" }, welcome: "Bienvenue" }
// }
```

### LocaleSwitcher Component

A dropdown component for switching between available locales. Displays the current locale name and a list of all available locales.

```vue
<script setup lang="ts">
import { LocaleSwitcher } from "@prefabs.tech/vue3-i18n";
</script>

<template>
  <LocaleSwitcher />
</template>
```

#### Hide Locale Badges

```vue
<template>
  <LocaleSwitcher :show-badges="false" />
</template>
```

#### Custom Dropdown Icon

```vue
<template>
  <LocaleSwitcher>
    <template #icon>
      <span>▼</span>
    </template>
  </LocaleSwitcher>
</template>
```

### Global Template Access

Because `globalInjection: true` is forced, `$t` and `$i18n` are available in all component templates without importing `useI18n`.

```vue
<template>
  <div>
    <h1>{{ $t("welcome") }}</h1>
    <p>Current locale: {{ $i18n.locale }}</p>
  </div>
</template>
```

### Composition API Usage

In `<script setup>`, use the re-exported `useI18n` composable:

```vue
<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";

const { t, locale, availableLocales } = useI18n();

const changeToFrench = () => {
  locale.value = "fr";
};
</script>

<template>
  <div>
    <p>{{ t("welcome") }}</p>
    <button @click="changeToFrench">Switch to French</button>
  </div>
</template>
```

### AppConfig Type Augmentation

The plugin extends `@prefabs.tech/vue3-config`'s `AppConfig` interface with an `i18n` field:

```typescript
import type { AppConfig } from "@prefabs.tech/vue3-config";

const config: AppConfig = {
  i18n: {
    messages: {
      en: { welcome: "Welcome" },
      fr: { welcome: "Bienvenue" },
    },
    supportedLocales: ["en", "fr"],
  },
  slug: "my-app",
};
```

### Custom I18n Instance Creation

For advanced use cases, use the `createI18n` factory directly:

```typescript
import { createI18n } from "@prefabs.tech/vue3-i18n";

const i18n = createI18n({
  config: {
    i18n: {
      messages: {
        en: { welcome: "Welcome" },
        fr: { welcome: "Bienvenue" },
      },
      supportedLocales: ["en", "fr"],
    },
    slug: "my-app",
  },
});

app.use(i18n);
```

---

## Use Cases

### Multi-language Application with Persistent Locale

When building an app that supports multiple languages and you want users' locale preference to persist across sessions.

```typescript
import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import { createApp } from "vue";

import App from "./App.vue";

const config = {
  i18n: {
    messages: {
      en: {
        nav: { home: "Home", about: "About" },
        welcome: "Welcome to our app",
      },
      "en-GB": {
        nav: { home: "Home", about: "About" },
        welcome: "Welcome to our application",
      },
      fr: {
        nav: { home: "Accueil", about: "À propos" },
        welcome: "Bienvenue dans notre application",
      },
      th: {
        nav: { home: "หน้าแรก", about: "เกี่ยวกับ" },
        welcome: "ยินดีต้อนรับสู่แอปของเรา",
      },
    },
    supportedLocales: ["en", "fr", "th", "en-GB"],
  },
  slug: "my-app",
};

const app = createApp(App);

app.use(configPlugin, { config });
app.use(i18nPlugin, { config });
app.mount("#app");
```

### Programmatic Locale Switching with Persistence

When you need to change locale programmatically and persist the choice.

```vue
<script setup lang="ts">
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { useLocaleStore } from "@prefabs.tech/vue3-i18n";
import { useConfig } from "@prefabs.tech/vue3-config";

const { locale } = useI18n();
const config = useConfig();
const { setLocale } = useLocaleStore(config.slug);

const switchLocale = (newLocale: string) => {
  locale.value = newLocale;
  setLocale(newLocale);
};
</script>

<template>
  <div>
    <button @click="switchLocale('en')">English</button>
    <button @click="switchLocale('fr')">Français</button>
    <button @click="switchLocale('th')">ไทย</button>
  </div>
</template>
```

### Custom Locale Detection Logic

When you need to implement custom locale detection beyond browser preferences.

```typescript
import configPlugin from "@prefabs.tech/vue3-config";
import {
  createI18n,
  getPreferredLocale,
  useLocaleStore,
} from "@prefabs.tech/vue3-i18n";
import { createApp } from "vue";

import App from "./App.vue";

const config = {
  slug: "my-app",
  i18n: {
    supportedLocales: ["en", "fr", "th"],
    messages: {
      en: { welcome: "Welcome" },
      fr: { welcome: "Bienvenue" },
      th: { welcome: "ยินดีต้อนรับ" },
    },
  },
};

// Custom detection: check URL param, then localStorage, then browser
const urlParams = new URLSearchParams(window.location.search);
const urlLocale = urlParams.get("lang");

const { getLocale, setLocale } = useLocaleStore(config.slug);
let locale = urlLocale || getLocale();

if (!locale) {
  locale = getPreferredLocale(
    navigator.languages,
    config.i18n.supportedLocales,
  );

  if (locale) {
    setLocale(locale);
  }
}

const app = createApp(App);

app.use(configPlugin, { config });
app.use(createI18n({ config }));
app.mount("#app");
```

### Themed LocaleSwitcher

When you want to customize the appearance of the locale switcher using CSS custom properties.

```vue
<style>
.themed-switcher {
  --locale-switcher-badge-bg-color: #ff6b6b;
  --locale-switcher-badge-country-bg-color: #4ecdc4;
  --locale-switcher-badge-country-color: #fff;
}
</style>
```
