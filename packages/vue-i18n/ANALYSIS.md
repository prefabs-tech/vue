<!-- Package analysis — produced by /analyze-package. Do not edit manually. -->

# Package Analysis: @prefabs.tech/vue3-i18n

## Base Library Passthrough Analysis

### vue-i18n — MODIFIED

- **Options type**: Custom subset (`DzangolabI18nOptions` extends `I18nOptions` with added `supportedLocales`)
- **Options passed**: Transformed — we add `globalInjection: true`, `legacy: false`, override `locale` with stored/preferred value, and merge `messages` with prepended locale names
- **Features restricted**: None — all base library features remain accessible
- **Features added**:
  - Locale persistence via localStorage (keyed by app slug)
  - Automatic locale detection from `navigator.languages` with fallback matching
  - Built-in locale name translations (native locale names for en, en-GB, en-US, fr, th)
  - Message merging utility (`prependMessages`) that combines default messages with locale names
  - `LocaleSwitcher` component with dropdown UI
  - Integration with `@prefabs.tech/vue3-config` via `AppConfig` augmentation

---

## Code Classification

### OURS — Custom Logic

#### Plugin Installation (`src/index.ts`)

- **`createI18n(options)`** — Factory function that:
  - Reads locale from localStorage via `useLocaleStore(slug).getLocale()`
  - Falls back to `getPreferredLocale(navigator.languages, supportedLocales)` if no stored locale
  - Calls `prependMessages()` to merge locale names with user-provided messages
  - Passes transformed options to `baseCreateI18n()` with forced `globalInjection: true` and `legacy: false`
  - Returns the configured i18n plugin instance

- **`plugin.install(app, options)`** — Vue plugin install function:
  - Calls `createI18n(options)` to create configured instance
  - Installs the i18n plugin via `app.use(i18n)`

- **Module augmentation** — Extends `@prefabs.tech/vue3-config` `AppConfig` interface with `i18n: DzangolabI18nOptions`

#### Locale Utilities (`src/utilities.ts`)

- **`getLocaleNames(supportedLocales)`** — Generates message objects for each supported locale containing `locales: nativeLocaleNames` mapping

- **`getPreferredLocale(languages, locales)`** — Matches browser language preferences against supported locales:
  - Iterates through `navigator.languages`
  - Splits each language by `-` (e.g., `en-US` → `['en', 'US']`)
  - Progressively filters supported locales by matching prefixes
  - Returns first exact match or undefined

- **`prependMessages(messages, defaults)`** — Merges two message objects:
  - Iterates through both `defaults` and `messages`
  - For each locale, spreads `prepend` first, then `base` (so base overwrites prepend)
  - Returns combined message object

#### Locale Store (`src/store.ts`)

- **`useLocaleStore(slug)`** — localStorage wrapper for locale persistence:
  - **`getLocale()`** — Reads `${slug}.locale` from localStorage, returns string or undefined
  - **`setLocale(locale)`** — Writes to localStorage if locale is defined, removes key if undefined

#### LocaleSwitcher Component (`src/locale-switcher/Index.vue`)

- **Props**: `showBadges` (boolean, default true)
- **State**: `expanded` (ref, controls dropdown visibility)
- **Computed**: `current` — returns `{ locale, name }` for current locale
- **Methods**:
  - `changeLocale(newLocale)` — Updates `locale.value`, closes dropdown, persists via `useLocaleStore(slug).setLocale()`
  - `toggle()` — Toggles `expanded` state
  - `translateLocale(locale)` — Returns `t(\`locales.${locale}\`)`
- **Template**: Dropdown with trigger showing current locale name, list of available locales
- **Lifecycle**: Uses `onClickOutside` from `@vueuse/core` to close dropdown when clicking outside

#### LocaleOption Component (`src/locale-switcher/LocaleOption.vue`)

- **Props**: `locale` (string, required), `name` (string, required), `showBadges` (boolean, default true)
- **Template**: Renders `Badge` component (if `showBadges`) and locale name

#### Badge Component (`src/locale-switcher/Badge.vue`)

- **Props**: `locale` (string, required)
- **Computed**:
  - `l` — First 2 characters of locale (e.g., `en` from `en-US`)
  - `country` — Country code if locale contains `-` (e.g., `US` from `en-US`)
- **Template**: Circular badge showing language code with optional country code overlay

#### Static Data (`src/locales/native-locale-names.ts`)

- Hardcoded object mapping locale codes to native names: `{ en: "English", "en-GB": "English (GB)", "en-US": "English (US)", fr: "Français", th: "ไทย" }`

---

### THEIRS — Direct Passthrough

- **`useI18n`** — Re-exported from `vue-i18n` without modification
- **`baseCreateI18n`** — Called with transformed options but not wrapped

---

## Summary

### Exports

- **`default`** — Vue plugin with `install(app, options)` method
- **`createI18n(options)`** — Factory function for creating configured i18n instance
- **`getPreferredLocale(languages, locales)`** — Browser language preference matcher
- **`prependMessages(messages, defaults)`** — Message merging utility
- **`LocaleSwitcher`** — Dropdown component for locale switching
- **`useI18n`** — Re-export from vue-i18n
- **`useLocaleStore(slug)`** — localStorage wrapper for locale persistence

### Types Exported

- `DzangolabI18nOptions` — Extends `I18nOptions` with `supportedLocales: string[]`
- `DzangolabVueI18nPluginOptions` — Plugin options shape: `{ config: AppConfig }`
- `LocaleMessages` — Re-export from vue-i18n
- `VueMessageType` — Re-export from vue-i18n

### Vue Plugin Behavior

- **`install()` method** — Registers i18n plugin with Vue app
- **Global injection** — Forces `globalInjection: true` (makes `$t`, `$i18n` available in templates)
- **Module augmentation** — Adds `i18n` field to `AppConfig` from `@prefabs.tech/vue3-config`

### Provide/Inject Keys

None directly — relies on vue-i18n's internal provide/inject mechanism

### Conditional Logic

1. **Locale initialization** (`src/index.ts:21-30`):
   - If `getLocale()` returns undefined → call `getPreferredLocale()` and persist result
   - Otherwise use stored locale

2. **Message merging** (`src/utilities.ts:44-83`):
   - If `defaults` is undefined → return `messages` as-is
   - Otherwise merge both objects with defaults taking precedence

3. **Badge country display** (`src/locale-switcher/Badge.vue:29-36`):
   - If locale contains `-` → extract and display country code
   - Otherwise display language code only

### Default Values

- `globalInjection: true` — Always set in `createI18n()`
- `legacy: false` — Always set in `createI18n()`
- `showBadges: true` — Default prop in `LocaleSwitcher` and `LocaleOption`
- Locale fallback — Uses `getPreferredLocale()` if no stored locale exists

### Dependencies

- **`vue-i18n@9.1.10`** — Base internationalization library (wrapped)
- **`@prefabs.tech/vue3-config`** — Peer dependency for `AppConfig` type and `useConfig()` composable
- **`@vueuse/core`** — Peer dependency for `onClickOutside` composable
- **`pinia`** — Peer dependency (not directly used in this package, but required by ecosystem)
- **`vue@>=3.2`** — Peer dependency

### Framework Constructs

- **Vue Plugin**: `plugin` object with `install()` method
- **Composables**: `useLocaleStore(slug)`, re-exported `useI18n`
- **Components**: `LocaleSwitcher`, `LocaleOption`, `Badge`
- **Module Augmentation**: Extends `@prefabs.tech/vue3-config` `AppConfig` interface
- **Global Injection**: Forces vue-i18n's `$t` and `$i18n` to be available in all templates

---

## Completeness Checklist

- [x] Classified every public export as "ours" or "theirs"
- [x] Listed every framework construct added (plugin, composables, components, module augmentation)
- [x] Identified every conditional branch (locale initialization, message merging, badge country display)
- [x] Documented default values for all options we define
- [x] Produced a passthrough classification for every wrapped dependency
