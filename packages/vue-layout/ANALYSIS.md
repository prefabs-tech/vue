<!-- Package analysis — produced by /analyze-package. Do not edit manually. -->

# Package Analysis: `@prefabs.tech/vue3-layout`

## Overview

A Vue 3 plugin that provides application layout scaffolding — header, sidebar, footer, and nav menu components — along with several pre-built layout compositions. It wraps `@prefabs.tech/vue3-ui`'s `ResponsiveMenu`, integrates with `@prefabs.tech/vue3-config` for runtime config, `@prefabs.tech/vue3-i18n` for translations, and `@vueuse/core` for responsive utilities.

---

## Base Library Passthrough Analysis

### `@prefabs.tech/vue3-ui` (`ResponsiveMenu`) — PARTIAL PASSTHROUGH

- Options type: custom (only `routes`, `active-route` and `change-route` are forwarded)
- Options passed: transformed — `activeRoute` is computed from the current vue-router route (active route matching + parent route resolution); `routes` is passed through unmodified
- Features restricted: none visible
- Features added: active-route is auto-detected from `useRoute` and parent route resolution via `useRouter().getRoutes()`

### `@prefabs.tech/vue3-config` (`useConfig`) — PARTIAL PASSTHROUGH

- Options type: `AppConfig` is module-augmented to include a `layout?: PrefabsTechVue3LayoutConfig` key
- Options passed: consumed, not forwarded — `layoutConfig.mainMenu`, `layoutConfig.homeRoute`, `layoutConfig.logo`, `layoutConfig.logoAlt`, `layoutConfig.logoRoute`, `layoutConfig.localeSwitcher.showBadges`, `appName`, `appTitle`, `appVersion`, `copyright`
- Features restricted: none
- Features added: provides typed config shape for layout-specific settings

### `@prefabs.tech/vue3-i18n` (`prependMessages`, `LocaleSwitcher`, `useI18n`) — PARTIAL PASSTHROUGH

- Options type: custom; accepts `LocaleMessages<VueMessageType>` override translations
- Options passed: plugin merges caller-provided translations on top of built-in messages via `prependMessages(messages, options.translations)`
- Features restricted: none
- Features added: translations injected via `provide/inject` symbol; `useTranslations()` composable exposes them

### `@vueuse/core` (`useWindowSize`) — FULL PASSTHROUGH

- Only `width` is consumed; no transformation
- Used to derive `isLargeScreen` breakpoints (>576px in sidebar layouts, >768px in AppHeader)

---

## Summary

### Plugin

| Export             | Type       | Description                                                                                                                                                           |
| ------------------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `default` (plugin) | Vue plugin | `install()` registers `<Layout>` globally, provides translations via `Symbol.for("dzangolab.vue-layout.translations")`, and merges caller translations with built-ins |

### Composables

| Export            | Classification | Description                                                                            |
| ----------------- | -------------- | -------------------------------------------------------------------------------------- |
| `useTranslations` | **OURS**       | Injects provided translation messages (falls back to bundled messages if not provided) |

### Layout Components

| Export                | Classification | Description                                                                                                                                                                                    |
| --------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Layout`              | **OURS**       | Dynamic layout switcher — reads `route.meta.layout` and renders it; falls back to `defaultLayout` prop (default: `NullLayout`)                                                                 |
| `BasicLayout`         | **OURS**       | Header + main + optional footer layout; supports `noFooter`, `noLocaleSwitcher` props                                                                                                          |
| `SidebarHeaderLayout` | **OURS**       | Responsive sidebar + header layout; adapts based on screen width (>576px = large screen), supports collapsible sidebar, `userMenuLocation` (header vs sidebar), `noFooter`, `noLocaleSwitcher` |
| `SidebarOnlyLayout`   | **OURS**       | Sidebar-only layout without top header; handles resize events to toggle sidebar state                                                                                                          |
| `NullLayout`          | **OURS**       | Pass-through slot wrapper with no chrome — used as default layout                                                                                                                              |

### UI Components

| Export                    | Classification | Description                                                                                                                                                     |
| ------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AppHeader`               | **OURS**       | Responsive header with toggle, logo, nav, user menu, locale switcher slots; auto-collapses at <768px; exposes `expanded` ref                                    |
| `AppFooter`               | **OURS**       | Footer with copyright, social, version slots; reads from `useConfig()`                                                                                          |
| `Sidebar`                 | **OURS**       | Collapsible sidebar nav with header (logo + toggle), `NavMenu`, and footer; exposes `sidebarActive` and `toggle()`                                              |
| `MainMenu`                | **OURS**       | Wraps `ResponsiveMenu` from `vue3-ui`; computes active route from vue-router                                                                                    |
| `NavMenu`                 | **OURS**       | Sidebar nav list; filters hidden items (`hide: true`) and collapses all-hidden children                                                                         |
| `NavMenuItem`             | **OURS**       | Recursive sidebar nav item; handles active state, child expand/collapse, shortName display, and router navigation                                               |
| `Logo`                    | **OURS**       | Router-link logo; falls back through `props.src → layoutConfig.logo`; alt falls back through `props.alt → layoutConfig.logoAlt → appName → appTitle → "My App"` |
| `Copyright`               | **OURS**       | Renders copyright year, holder link, and optional disclaimer via i18n                                                                                           |
| `StickyCollapsibleFooter` | **OURS**       | Fixed-position collapsible footer wrapper; `fixed` prop (default: `true`) controls CSS class                                                                    |

### Types

| Export                               | Description                                                                                                                                     |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `PrefabsTechVue3LayoutConfig`        | Config shape added to `AppConfig` via module augmentation: `homeRoute`, `localeSwitcher.showBadges`, `logo`, `logoAlt`, `logoRoute`, `mainMenu` |
| `PrefabsTechVue3LayoutPluginOptions` | Plugin install options: `config: AppConfig`, `translations?: LocaleMessages<VueMessageType>`                                                    |
| `LayoutType`                         | Type alias for `InstanceType<typeof Layout>` — used for `route.meta.layout` typing (module-augments `vue-router`)                               |
| `MenuItem`                           | Menu item shape for `mainMenu`: `name`, `route`, `children?`, `hide?`, `icon?`, `shortName?`                                                    |
| `SidebarMenu`                        | Sidebar menu item shape: `name`, `routeName`, `children?`, `hide?`, `icon?`, `shortName?`                                                       |

### Module Augmentations

- `@prefabs.tech/vue3-config` → `AppConfig.layout?: PrefabsTechVue3LayoutConfig`
- `vue-router` → `RouteMeta.layout?: LayoutType`

### Provide/Inject Keys

| Symbol                                            | Provider           | Consumer                                               |
| ------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| `Symbol.for("dzangolab.vue-layout.translations")` | Plugin `install()` | `useTranslations()` composable → `Copyright` component |

### Global Component Registrations

- `app.component("Layout", Layout)` — registered globally on plugin install

### Conditional Branches & Feature Flags

| Location                  | Condition                                                                  | Behavior                                                                            |
| ------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `Layout.vue`              | `route.meta?.layout` present                                               | Uses that layout; falls back to `defaultLayout` prop                                |
| `Layout.vue`              | `defaultLayout` prop                                                       | Default: `NullLayout`                                                               |
| `BasicLayout`             | `noFooter` prop                                                            | Hides `AppFooter`                                                                   |
| `BasicLayout`             | `noLocaleSwitcher` prop                                                    | Passed down to `AppHeader`                                                          |
| `SidebarHeaderLayout`     | `isLargeScreen` (>576px)                                                   | AppHeader shown; sidebar acts as collapsible panel on large, mobile drawer on small |
| `SidebarHeaderLayout`     | `collapsible` prop (default: `true`)                                       | Enables sidebar collapse toggle                                                     |
| `SidebarHeaderLayout`     | `userMenuLocation` (default: `"sidebar"`)                                  | Renders userMenu in header (large screen only) or always in sidebar                 |
| `SidebarHeaderLayout`     | `noFooter` prop                                                            | Hides `AppFooter` in sidebar footer slot                                            |
| `SidebarHeaderLayout`     | `noLocaleSwitcher` prop                                                    | Hides locale switcher in header and sidebar                                         |
| `SidebarOnlyLayout`       | `noHeader` prop (default: `false`)                                         | Hides sidebar header section                                                        |
| `SidebarOnlyLayout`       | `noFooter` prop                                                            | Hides `AppFooter`                                                                   |
| `SidebarOnlyLayout`       | `noLocaleSwitcher` prop                                                    | Hides `LocaleSwitcher`                                                              |
| `AppHeader`               | `isLargeScreen` (>768px)                                                   | Controls expanded state and nav height calculation                                  |
| `AppHeader`               | `noLogo` prop                                                              | Hides `Logo`                                                                        |
| `AppHeader`               | `noMainMenu` prop                                                          | Hides `MainMenu`                                                                    |
| `AppHeader`               | `noToggle` prop                                                            | Hides toggle button on large screens                                                |
| `AppHeader`               | `layoutConfig?.mainMenu` present                                           | Shows `MainMenu` (if `!noMainMenu`)                                                 |
| `AppFooter`               | `config?.copyright` present                                                | Renders `Copyright` component                                                       |
| `Sidebar`                 | `collapsible` prop (default: `true`)                                       | Enables sidebar collapse                                                            |
| `Sidebar`                 | `noHeader` prop (default: `false`)                                         | Hides sidebar header (logo + toggle)                                                |
| `Sidebar`                 | `hideLogo` prop                                                            | Hides logo in sidebar header                                                        |
| `Sidebar`                 | `showOnlyToggle` computed                                                  | Shows only expand button when collapsed and no `shortName` on any menu item         |
| `Sidebar`                 | `slots.footer` present                                                     | Renders footer area                                                                 |
| `NavMenu`                 | `menu[].hide === true`                                                     | Filters out hidden top-level items                                                  |
| `NavMenu`                 | All children hidden                                                        | Filters out parent item                                                             |
| `NavMenuItem`             | `sidebarActive` false + `shortName`                                        | Shows short name instead of full name                                               |
| `NavMenuItem`             | `item.children?.length`                                                    | Opens child expand/collapse on click instead of navigating                          |
| `NavMenuItem`             | `item.routeName` absent, no children                                       | Navigates to current parent route                                                   |
| `NavMenuItem`             | child route matches current route on init                                  | Auto-expands children                                                               |
| `Logo`                    | `props.src` → `layoutConfig?.logo`                                         | Falls through for logo source                                                       |
| `Logo`                    | `props.alt` → `layoutConfig.logoAlt` → `appName` → `appTitle` → `"My App"` | Falls through for alt text                                                          |
| `Logo`                    | `props.route` → `layoutConfig.logoRoute` → `"home"`                        | Falls through for logo link                                                         |
| `Copyright`               | `showDisclaimer` prop                                                      | Renders i18n `"copyright.disclaimer"` text                                          |
| `StickyCollapsibleFooter` | `fixed` prop (default: `true`)                                             | Adds `"fixed"` CSS class                                                            |
| Plugin `install`          | `options?.translations` present                                            | Merges translations with `prependMessages`; otherwise uses bundled messages         |

### Default Values

| Location                  | Prop/Option        | Default                                     |
| ------------------------- | ------------------ | ------------------------------------------- |
| `Layout`                  | `defaultLayout`    | `NullLayout` (async)                        |
| `Sidebar`                 | `ariaLabel`        | `"Navigation"`                              |
| `Sidebar`                 | `collapsible`      | `true`                                      |
| `Sidebar`                 | `noHeader`         | `false`                                     |
| `Sidebar`                 | `sidebarActive`    | `true`                                      |
| `SidebarHeaderLayout`     | `collapsible`      | `true`                                      |
| `SidebarHeaderLayout`     | `userMenuLocation` | `"sidebar"`                                 |
| `SidebarOnlyLayout`       | `noHeader`         | `false`                                     |
| `NavMenu`                 | `sidebarActive`    | `true`                                      |
| `NavMenuItem`             | `sidebarActive`    | `true`                                      |
| `Logo`                    | `alt`              | `undefined` (falls through chain)           |
| `Logo`                    | `route`            | `undefined` (falls to `"home"`)             |
| `Logo`                    | `src`              | `undefined` (falls to `layoutConfig?.logo`) |
| `StickyCollapsibleFooter` | `fixed`            | `true`                                      |
| `AppHeader`               | `expanded` ref     | `true`                                      |
| `MainMenu`                | `activeRoute`      | `"home"` (if computed returns empty)        |

---

## Completeness Checklist

- [x] Classified every public export as "ours" or "theirs"
- [x] Listed every framework construct added (global component, provide/inject, module augmentation)
- [x] Identified every conditional branch (feature flags, enable/disable props, computed guards)
- [x] Documented default values for all defined options
- [x] Produced a passthrough classification for every wrapped dependency
