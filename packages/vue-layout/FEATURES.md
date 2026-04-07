<!-- Structured feature inventory — used by automated test generation. Developer docs: see GUIDE.md -->

# Features: `@prefabs.tech/vue3-layout`

## Plugin Registration

1. Registers `<Layout>` as a global Vue component on install.
2. Provides translations via `Symbol.for("dzangolab.vue-layout.translations")` so all child components share the same message set.
3. Merges caller-provided translations on top of bundled messages using `prependMessages` when `options.translations` is supplied.
4. Falls back to bundled messages when no `options.translations` is provided.

## Module Augmentations

5. Augments `@prefabs.tech/vue3-config` `AppConfig` with `layout?: PrefabsTechVue3LayoutConfig` — enables typed config access via `useConfig()`.
6. Augments `vue-router` `RouteMeta` with `layout?: LayoutType` — enables per-route layout assignment.

## `Layout` Component — Dynamic Layout Switcher

7. Reads `route.meta.layout` on each navigation and renders the specified layout component dynamically.
8. Falls back to `defaultLayout` prop when `route.meta.layout` is absent or throws on load.
9. Default value for `defaultLayout` is `NullLayout` (loaded async with a 3-second timeout).
10. Forwards all named slots to the active layout component.

## `BasicLayout` Component

11. Renders a header (`AppHeader`) + `<main>` + optional footer (`AppFooter`) structure.
12. `noFooter` prop (Boolean) — omits the footer entirely when `true`.
13. `noLocaleSwitcher` prop (Boolean) — passed down to `AppHeader` to hide the locale switcher.
14. Exposes named slots: `header`, `logo`, `addon`, `menu`, `userMenu`, `locales`, `default`, `footer`, `copyright`, `social`, `version`.
15. Wraps the header in a `slot name="header"` so the entire header can be replaced.

## `SidebarHeaderLayout` Component

16. Renders a sidebar + optional top header + `<main>` structure.
17. Responsive breakpoint at 576px: below it, the sidebar acts as a mobile drawer; above it, the header is shown and the sidebar is a persistent panel.
18. `collapsible` prop (Boolean, default: `true`) — enables sidebar collapse toggle on large screens.
19. `userMenuLocation` prop (`"sidebar"` | `"header"`, default: `"sidebar"`) — places the user menu slot in the header (large screens only) or always in the sidebar.
20. `noFooter` prop (Boolean) — hides the `AppFooter` rendered inside the sidebar footer slot.
21. `noLocaleSwitcher` prop (Boolean) — hides locale switcher in both header and sidebar.
22. Closes the sidebar automatically when a menu item is selected on mobile (via `onSelectMenu`).
23. Syncs `sidebarActive` with screen size on resize — open on large screens, closed on small.
24. Exposes `onSelectMenu` via `defineExpose`.
25. Exposes named slots: `header`, `userMenu`, `locales`, `afterNavLinks`, `afterSidebarMenu`, `footer`, `default`.

## `SidebarOnlyLayout` Component

26. Renders a sidebar + `<main>` with no top header.
27. `noHeader` prop (Boolean, default: `false`) — hides the sidebar's own header section (logo + toggle button).
28. `noFooter` prop (Boolean) — hides `AppFooter` in sidebar footer slot.
29. `noLocaleSwitcher` prop (Boolean) — hides `LocaleSwitcher` inside the sidebar.
30. Listens to `window resize` to toggle `sidebarActive` based on screen width (>576px = open).
31. Cleans up resize listener on `onUnmounted`.
32. Exposes named slots: `afterNavLinks`, `afterSidebarMenu`, `userMenu`, `locales`, `default`.

## `NullLayout` Component

33. Renders only a default slot — no wrapping chrome. Used as the default fallback layout.

## `AppHeader` Component

34. Renders a `<header>` with toggle button, logo, nav (menu, user menu, addon, locale switcher).
35. `noLogo` prop (Boolean) — hides the `Logo` component.
36. `noMainMenu` prop (Boolean) — hides the `MainMenu` component even when `layoutConfig.mainMenu` is set.
37. `noToggle` prop (Boolean) — hides the toggle button on large screens (>768px); toggle always shows on small screens.
38. `noLocaleSwitcher` prop (Boolean) — hides the `LocaleSwitcher`.
39. Responsive at 768px: expands nav on load/resize above 768px; collapses and sets nav height to `(viewport - header)px` below 768px.
40. Toggle button shows a close icon (`prime:times`) when expanded on mobile, hamburger (`prime:bars`) otherwise.
41. Reads `layoutConfig.mainMenu` to show `MainMenu`; shows `MainMenu` only when `!noMainMenu` and the config array is set.
42. Reads `layoutConfig.homeRoute` to pass as `route` to `Logo`.
43. Reads `layoutConfig.localeSwitcher.showBadges` and passes it to `LocaleSwitcher`.
44. Exposes `expanded` ref for parent components to observe header state.
45. Named slots: `toggle`, `logo`, `menu`, `userMenu`, `addon`, `locales`.
46. Adds/removes `resize` and `load` event listeners via `onMounted`/`onUnmounted`.

## `AppFooter` Component

47. Renders a `<footer>` with copyright, social, and version areas.
48. Renders `Copyright` component when `useConfig().copyright` is present.
49. Renders app version from `useConfig().appVersion` in the default version slot content.
50. Named slots: `copyright`, `social`, `version` — all replaceable.

## `Sidebar` Component

51. Renders a collapsible sidebar with header (logo + toggle), nav menu, and optional footer.
52. `collapsible` prop (Boolean, default: `true`) — enables collapse/expand toggle button in the header.
53. `noHeader` prop (Boolean, default: `false`) — hides the entire sidebar header section.
54. `hideLogo` prop (Boolean) — hides the logo inside the sidebar header.
55. `ariaLabel` prop (String, default: `"Navigation"`) — sets the `aria-label` on the sidebar nav wrapper.
56. `menu` prop (required, `SidebarMenu[]`) — nav items rendered by `NavMenu`.
57. When collapsed and no menu item has a `shortName`, shows only an expand-arrow button instead of the sidebar.
58. Exposes `sidebarActive` (Boolean ref) and `toggle()` method for external control.
59. Emits `select:menu` when a nav item is selected.
60. Renders a footer area only when the `footer` slot has content.
61. Named slots: `title`, `toggleIcons`, `links`, `afterNavLinks`, `afterSidebarMenu`, `footer`, default.

## `MainMenu` Component

62. Wraps `ResponsiveMenu` from `@prefabs.tech/vue3-ui`.
63. Computes `activeRoute` from the current vue-router route — matches by route name first, then by parent route path resolution.
64. Falls back to `"home"` as the active route when no match is found.
65. Emits `close` when `ResponsiveMenu` triggers `change-route`.

## `NavMenu` Component

66. Renders a list of `NavMenuItem` components for sidebar navigation.
67. Filters out items with `hide: true`.
68. Filters out a parent item when all its children are hidden.
69. Strips hidden children from partially-hidden groups.
70. `sidebarActive` prop (Boolean, default: `true`) — passed to each `NavMenuItem`.
71. Emits `select:menu` upward when any item is selected.

## `NavMenuItem` Component

72. Recursive nav item supporting unlimited nesting (children rendered as `NavMenuItem`).
73. Marks an item as active when `route.name === item.routeName` or when the item's route is a matched ancestor.
74. Shows `item.shortName` instead of `item.name` when sidebar is collapsed (`sidebarActive: false`) and `shortName` is set.
75. Shows full `item.name` when sidebar is active.
76. Renders a chevron toggle for items with children; clicking toggles child visibility.
77. Auto-expands children on mount if a child's `routeName` matches the current route.
78. Clicking an item with `routeName` navigates via `router.push({ name: routeName })`.
79. Clicking an item without `routeName` and without children navigates to the current parent route.
80. Clicking an item with children (but no direct route) toggles child list.
81. Emits `select:menu` after navigation.
82. Uses `router.hasRoute()` guard before pushing to avoid invalid route errors.

## `Logo` Component

83. Renders a `<router-link>` wrapping an `<img>` or a default text fallback.
84. Logo source falls through: `props.src` → `layoutConfig.logo` → no image (text fallback shown).
85. Logo alt text falls through: `props.alt` → `layoutConfig.logoAlt` → parsed `appName` → `appTitle` → `"My App"`.
86. Logo route falls through: `props.route` → `layoutConfig.logoRoute` → `"home"`.
87. When `appName` is used as alt, strips the `@` prefix and replaces `/` with a space.
88. Default slot replaces the entire router-link content.

## `Copyright` Component

89. Renders current year, a clickable holder link, and an optional disclaimer.
90. `holder` prop (required String) — copyright holder name shown as link text.
91. `url` prop (required String) — link target (opens in new tab).
92. `showDisclaimer` prop (Boolean) — when `true`, appends the translated `"copyright.disclaimer"` string.
93. Uses `useTranslations()` and `useI18n` to resolve translations.

## `StickyCollapsibleFooter` Component

94. Renders a `<footer>` with class `sticky-collapsible`; adds `fixed` class when `fixed` prop is `true`.
95. `fixed` prop (Boolean, default: `true`) — controls whether the footer has the `fixed` CSS class.

## `useTranslations` Composable

96. Injects translation messages provided by the plugin via `Symbol.for("dzangolab.vue-layout.translations")`.
97. Falls back to the bundled message set when called outside the plugin context.

## Types

98. `PrefabsTechVue3LayoutConfig` — typed config shape for `AppConfig.layout`.
99. `PrefabsTechVue3LayoutPluginOptions` — typed plugin install options (`config`, `translations?`).
100. `LayoutType` — instance type of `Layout`, used for `route.meta.layout` typing.
101. `MenuItem` — menu item shape for `layoutConfig.mainMenu` (`name`, `route`, `children?`, `hide?`, `icon?`, `shortName?`).
102. `SidebarMenu` — sidebar menu item shape (`name`, `routeName`, `children?`, `hide?`, `icon?`, `shortName?`).
