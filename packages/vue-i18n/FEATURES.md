<!-- Structured feature inventory — used by automated test generation. Developer docs: see GUIDE.md -->

# Features

## Plugin Installation

1. **Vue plugin with install method** — Registers i18n with the Vue app via `app.use()`

2. **AppConfig integration** — Extends `@prefabs.tech/vue3-config` `AppConfig` interface with `i18n: DzangolabI18nOptions` field

3. **Forced global injection** — Always sets `globalInjection: true`, making `$t` and `$i18n` available in all templates

4. **Composition API mode** — Always sets `legacy: false`, enforcing composition API usage

## Locale Persistence

5. **localStorage-based locale storage** — Persists user's selected locale using `${slug}.locale` key

6. **Locale retrieval** — `useLocaleStore(slug).getLocale()` reads stored locale from localStorage

7. **Locale persistence** — `useLocaleStore(slug).setLocale(locale)` writes locale to localStorage

8. **Locale removal** — Calling `setLocale(undefined)` removes the locale key from localStorage

## Automatic Locale Detection

9. **Browser language preference matching** — `getPreferredLocale(navigator.languages, supportedLocales)` matches browser languages against supported locales

10. **Progressive prefix matching** — Splits language codes by `-` and progressively filters supported locales (e.g., `en-US` matches `en-US` or falls back to `en`)

11. **Automatic fallback on first load** — If no locale is stored, automatically detects and persists the preferred locale

## Message Management

12. **Built-in locale name translations** — Provides native locale names for `en`, `en-GB`, `en-US`, `fr`, `th`

13. **Automatic locale name injection** — `getLocaleNames(supportedLocales)` generates message objects containing `locales: nativeLocaleNames` for each supported locale

14. **Message merging** — `prependMessages(messages, defaults)` merges user-provided messages with locale names, with user messages taking precedence

## LocaleSwitcher Component

15. **Dropdown locale switcher** — `<LocaleSwitcher />` component with trigger and dropdown list

16. **Current locale display** — Shows translated name of current locale in trigger

17. **Available locales list** — Displays all available locales from `useI18n().availableLocales`

18. **Locale switching** — Clicking a locale updates `locale.value`, persists to localStorage, and closes dropdown

19. **Click-outside handling** — Uses `@vueuse/core` `onClickOutside` to close dropdown when clicking outside

20. **Badge display toggle** — `showBadges` prop (default `true`) controls whether locale badges are shown

21. **Custom icon slot** — `icon` slot allows replacing the default dropdown arrow icon

## LocaleOption Component

22. **Locale option rendering** — Displays locale badge and translated name

23. **Conditional badge rendering** — Shows badge only if `showBadges` prop is `true`

## Badge Component

24. **Language code badge** — Displays first 2 characters of locale code (e.g., `en` from `en-US`)

25. **Country code overlay** — If locale contains `-`, displays country code as overlay (e.g., `US` from `en-US`)

26. **CSS custom properties** — Supports `--locale-switcher-badge-bg-color` and `--locale-switcher-badge-country-bg-color` for theming

## Exports

27. **createI18n factory** — Exported factory function for creating configured i18n instances

28. **useI18n re-export** — Re-exports `useI18n` from vue-i18n for convenience

29. **useLocaleStore composable** — Exported composable for locale persistence

30. **Utility function exports** — Exports `getPreferredLocale` and `prependMessages` for advanced use cases

## Type Exports

31. **DzangolabI18nOptions type** — Extends `I18nOptions` with `supportedLocales: string[]`

32. **DzangolabVueI18nPluginOptions type** — Plugin options shape: `{ config: AppConfig }`

33. **LocaleMessages re-export** — Re-exports `LocaleMessages` from vue-i18n

34. **VueMessageType re-export** — Re-exports `VueMessageType` from vue-i18n
