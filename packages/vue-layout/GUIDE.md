# `@prefabs.tech/vue3-layout` — Developer Guide

## Installation

### For package consumers

```bash
npm install @prefabs.tech/vue3-layout
```

```bash
pnpm add @prefabs.tech/vue3-layout
```

### For monorepo development

```bash
pnpm install
pnpm --filter @prefabs.tech/vue3-layout test
pnpm --filter @prefabs.tech/vue3-layout build
```

---

## Setup

Register the plugin once in your app entry point. All layout components and translations are configured here.

```typescript
// main.ts
import { createApp } from "vue";
import { createConfig } from "@prefabs.tech/vue3-config";
import layoutPlugin from "@prefabs.tech/vue3-layout";
import type { PrefabsTechVue3LayoutPluginOptions } from "@prefabs.tech/vue3-layout";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const config = createConfig({
  appName: "@my/app",
  appTitle: "My App",
  appVersion: "1.0.0",
  layout: {
    homeRoute: "home",
    logo: "/logo.svg",
    logoAlt: "My App",
    logoRoute: "home",
    localeSwitcher: { showBadges: true },
    mainMenu: [
      { name: "Dashboard", route: "dashboard" },
      { name: "Settings", route: "settings" },
    ],
  },
  copyright: { holder: "My Company", url: "https://example.com" },
});

const layoutOptions: PrefabsTechVue3LayoutPluginOptions = { config };

app.use(router);
app.use(layoutPlugin, layoutOptions);
app.mount("#app");
```

All subsequent examples assume this setup is in place.

---

## Base Libraries

### `@prefabs.tech/vue3-config` — Partial Passthrough

Provides typed runtime config via `useConfig()`. This package adds a `layout` key to `AppConfig` via module augmentation — no extra config registration is needed beyond passing `config` to the plugin options.

-> **Their docs:** [@prefabs.tech/vue3-config](https://www.npmjs.com/package/@prefabs.tech/vue3-config)

**Config fields we consume from `AppConfig.layout`:**

| Field                       | Used by                                                 |
| --------------------------- | ------------------------------------------------------- |
| `homeRoute`                 | `AppHeader` (logo link destination)                     |
| `logo`                      | `Logo` (image source fallback)                          |
| `logoAlt`                   | `Logo` (alt text fallback)                              |
| `logoRoute`                 | `Logo` (link route fallback)                            |
| `localeSwitcher.showBadges` | `AppHeader`, `SidebarHeaderLayout`, `SidebarOnlyLayout` |
| `mainMenu`                  | `AppHeader` → `MainMenu`                                |

**Other fields consumed from `AppConfig` (top-level):**

| Field                                | Used by                                    |
| ------------------------------------ | ------------------------------------------ |
| `appVersion`                         | `AppFooter` (version slot default content) |
| `copyright.holder` / `copyright.url` | `AppFooter` → `Copyright`                  |
| `appName` / `appTitle`               | `Logo` (alt text fallback chain)           |

### `@prefabs.tech/vue3-i18n` — Partial Passthrough

Provides the `LocaleSwitcher` component and i18n utilities. This package bundles its own translations and exposes a merge mechanism.

-> **Their docs:** [@prefabs.tech/vue3-i18n](https://www.npmjs.com/package/@prefabs.tech/vue3-i18n)

**What we change:** Translations are merged using `prependMessages` — caller-provided strings take precedence over bundled ones. The merged messages are injected via `provide/inject` so all layout components share the same translation context.

**What we add:** `useTranslations()` composable to access those merged messages.

### `@prefabs.tech/vue3-ui` (`ResponsiveMenu`) — Partial Passthrough

Used internally by `MainMenu`. The active route is auto-computed from vue-router; you do not pass it directly.

-> **Their docs:** [@prefabs.tech/vue3-ui](https://www.npmjs.com/package/@prefabs.tech/vue3-ui)

**What we change:** `activeRoute` is derived automatically by matching the current route name against the `routes` array, with a fallback to parent-route resolution.

---

## Features

### Dynamic Layout Switching — `<Layout>`

`Layout` is registered globally by the plugin. It reads `route.meta.layout` on each navigation and renders that component. If the meta is absent or throws, it falls back to the `defaultLayout` prop (default: `NullLayout`).

Set the layout per route in your router:

```typescript
// router/index.ts
import { SidebarHeaderLayout } from "@prefabs.tech/vue3-layout";
import type { LayoutType } from "@prefabs.tech/vue3-layout";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./pages/Home.vue"),
    meta: { layout: SidebarHeaderLayout as unknown as LayoutType },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/Login.vue"),
    // no meta.layout → NullLayout is used
  },
];
```

Use `<Layout>` in your app root:

```vue
<script setup lang="ts">
// No imports needed — Layout is registered globally by the plugin
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
</template>
```

Override the default fallback layout:

```vue
<template>
  <Layout :default-layout="BasicLayout">
    <RouterView />
  </Layout>
</template>

<script setup lang="ts">
import { BasicLayout } from "@prefabs.tech/vue3-layout";
</script>
```

### `BasicLayout` — Header + Main + Footer

Standard page layout with a top header and optional footer. Best for marketing or documentation pages with horizontal navigation.

```vue
<script setup lang="ts">
import { BasicLayout } from "@prefabs.tech/vue3-layout";
</script>

<template>
  <BasicLayout>
    <p>Page content goes here.</p>
  </BasicLayout>
</template>
```

**Props:**

| Prop               | Type    | Default | Description                         |
| ------------------ | ------- | ------- | ----------------------------------- |
| `noFooter`         | Boolean | `false` | Hides `AppFooter`                   |
| `noLocaleSwitcher` | Boolean | `false` | Hides locale switcher in the header |

**Slots:**

| Slot        | Description                          |
| ----------- | ------------------------------------ |
| `header`    | Replaces the entire `AppHeader`      |
| `logo`      | Logo area inside `AppHeader`         |
| `menu`      | Nav menu area inside `AppHeader`     |
| `userMenu`  | User menu area inside `AppHeader`    |
| `addon`     | Extra content inside `AppHeader` nav |
| `locales`   | Locale switcher area in `AppHeader`  |
| `default`   | Main page content                    |
| `footer`    | Replaces the entire `AppFooter`      |
| `copyright` | Copyright area inside `AppFooter`    |
| `social`    | Social links area inside `AppFooter` |
| `version`   | Version area inside `AppFooter`      |

### `SidebarHeaderLayout` — Sidebar + Header (Responsive)

Sidebar navigation with a top header on large screens (>576px). On small screens the header is hidden and the sidebar becomes a mobile drawer toggled from within the sidebar itself.

```vue
<script setup lang="ts">
import { SidebarHeaderLayout } from "@prefabs.tech/vue3-layout";
import type { SidebarMenu } from "@prefabs.tech/vue3-layout";

const menu: SidebarMenu[] = [
  { name: "Dashboard", routeName: "dashboard", icon: "prime:home" },
  {
    name: "Settings",
    routeName: "settings",
    icon: "prime:cog",
    children: [
      { name: "Profile", routeName: "settings-profile" },
      { name: "Security", routeName: "settings-security" },
    ],
  },
];
</script>

<template>
  <SidebarHeaderLayout :menu="menu">
    <RouterView />
  </SidebarHeaderLayout>
</template>
```

**Props:**

| Prop               | Type                      | Default     | Description                               |
| ------------------ | ------------------------- | ----------- | ----------------------------------------- |
| `menu`             | `SidebarMenu[]`           | required    | Navigation items                          |
| `collapsible`      | Boolean                   | `true`      | Enables sidebar collapse on large screens |
| `userMenuLocation` | `"sidebar"` \| `"header"` | `"sidebar"` | Where to render the `userMenu` slot       |
| `noFooter`         | Boolean                   | `false`     | Hides `AppFooter`                         |
| `noLocaleSwitcher` | Boolean                   | `false`     | Hides locale switcher                     |

**Slots:**

| Slot               | Description                               |
| ------------------ | ----------------------------------------- |
| `header`           | Replaces the entire `AppHeader`           |
| `userMenu`         | User menu (placed per `userMenuLocation`) |
| `locales`          | Locale switcher                           |
| `afterNavLinks`    | Content after the nav list in sidebar     |
| `afterSidebarMenu` | Content after the entire sidebar menu     |
| `footer`           | Replaces the default `AppFooter`          |
| `default`          | Main page content                         |

Place the user menu in the header on large screens:

```vue
<template>
  <SidebarHeaderLayout :menu="menu" user-menu-location="header">
    <template #userMenu>
      <UserDropdown />
    </template>
    <RouterView />
  </SidebarHeaderLayout>
</template>
```

### `SidebarOnlyLayout` — Sidebar Without Header

Sidebar navigation with no top header bar. Suitable for dashboards where the sidebar is the primary navigation and screen real estate matters.

```vue
<script setup lang="ts">
import { SidebarOnlyLayout } from "@prefabs.tech/vue3-layout";
import type { SidebarMenu } from "@prefabs.tech/vue3-layout";

const menu: SidebarMenu[] = [
  { name: "Dashboard", routeName: "dashboard", shortName: "Dash" },
  { name: "Analytics", routeName: "analytics", shortName: "Stats" },
];
</script>

<template>
  <SidebarOnlyLayout :menu="menu">
    <RouterView />
  </SidebarOnlyLayout>
</template>
```

**Props:**

| Prop               | Type            | Default  | Description                          |
| ------------------ | --------------- | -------- | ------------------------------------ |
| `menu`             | `SidebarMenu[]` | required | Navigation items                     |
| `noHeader`         | Boolean         | `false`  | Hides sidebar header (logo + toggle) |
| `noFooter`         | Boolean         | `false`  | Hides `AppFooter`                    |
| `noLocaleSwitcher` | Boolean         | `false`  | Hides locale switcher                |

**Slots:** `afterNavLinks`, `afterSidebarMenu`, `userMenu`, `locales`, `default`

### `NullLayout` — No Chrome

Renders only its default slot. Useful for login, error, and maintenance pages that need no navigation frame.

```vue
<script setup lang="ts">
import { NullLayout } from "@prefabs.tech/vue3-layout";
</script>

<template>
  <NullLayout>
    <LoginForm />
  </NullLayout>
</template>
```

### `AppHeader` Component

Responsive header with toggle, logo, nav menu, user menu, addon, and locale switcher. Collapses below 768px; toggle button appears on small screens.

```vue
<script setup lang="ts">
import { AppHeader } from "@prefabs.tech/vue3-layout";
</script>

<template>
  <AppHeader>
    <template #userMenu>
      <UserDropdown />
    </template>
  </AppHeader>
</template>
```

**Props:**

| Prop               | Type    | Default | Description                       |
| ------------------ | ------- | ------- | --------------------------------- |
| `noLogo`           | Boolean | `false` | Hides the logo                    |
| `noMainMenu`       | Boolean | `false` | Hides the main nav menu           |
| `noToggle`         | Boolean | `false` | Hides the toggle on large screens |
| `noLocaleSwitcher` | Boolean | `false` | Hides the locale switcher         |

**Exposes:** `expanded` (Boolean ref) — `true` when the nav is open.

**Slots:** `toggle`, `logo`, `menu`, `userMenu`, `addon`, `locales`

### `AppFooter` Component

Footer rendering copyright, social links, and app version from config. All areas are overridable via slots.

```vue
<script setup lang="ts">
import { AppFooter } from "@prefabs.tech/vue3-layout";
</script>

<template>
  <AppFooter>
    <template #social>
      <a href="https://twitter.com/myapp">Twitter</a>
    </template>
  </AppFooter>
</template>
```

**Slots:** `copyright`, `social`, `version`

### `Sidebar` Component

Collapsible sidebar with header, nav, and footer areas. Normally used via a layout component, but can be used standalone.

```vue
<script setup lang="ts">
import { Sidebar } from "@prefabs.tech/vue3-layout";
import type { SidebarMenu } from "@prefabs.tech/vue3-layout";

const menu: SidebarMenu[] = [{ name: "Home", routeName: "home" }];
</script>

<template>
  <Sidebar :menu="menu" aria-label="App navigation">
    <template #afterSidebarMenu>
      <UserCard />
    </template>
    <template #footer>
      <AppFooter />
    </template>
  </Sidebar>
</template>
```

**Props:**

| Prop          | Type            | Default        | Description                         |
| ------------- | --------------- | -------------- | ----------------------------------- |
| `menu`        | `SidebarMenu[]` | required       | Nav items                           |
| `collapsible` | Boolean         | `true`         | Show collapse toggle                |
| `noHeader`    | Boolean         | `false`        | Hide sidebar header                 |
| `hideLogo`    | Boolean         | `false`        | Hide logo inside header             |
| `ariaLabel`   | String          | `"Navigation"` | Accessible label for the nav region |

**Exposes:**

- `sidebarActive` — Boolean ref controlling open/closed state
- `toggle()` — flips `sidebarActive`

**Emits:** `select:menu`

**Slots:** `title`, `toggleIcons`, `links`, `afterNavLinks`, `afterSidebarMenu`, `footer`, default

### `MainMenu` Component

Horizontal/responsive nav menu backed by `ResponsiveMenu` from `vue3-ui`. The active route is resolved automatically from vue-router.

```vue
<script setup lang="ts">
import { MainMenu } from "@prefabs.tech/vue3-layout";

const routes = [
  { name: "Dashboard", route: "dashboard" },
  { name: "Reports", route: "reports" },
];
</script>

<template>
  <MainMenu :routes="routes" @close="onClose" />
</template>
```

**Props:**

| Prop     | Type                                | Description |
| -------- | ----------------------------------- | ----------- |
| `routes` | `{ name: string; route: string }[]` | Menu items  |

**Emits:** `close` — when a route change triggers a close action

### `NavMenu` + `NavMenuItem` Components

Sidebar navigation list with recursive item support. Items are rendered from a `SidebarMenu[]` array. Hidden items (`hide: true`) are filtered out automatically.

```vue
<script setup lang="ts">
import { NavMenu } from "@prefabs.tech/vue3-layout";
import type { SidebarMenu } from "@prefabs.tech/vue3-layout";

const menu: SidebarMenu[] = [
  { name: "Visible", routeName: "dashboard" },
  { name: "Hidden", routeName: "secret", hide: true },
  {
    name: "Reports",
    routeName: "reports",
    children: [
      { name: "Monthly", routeName: "reports-monthly" },
      { name: "Annual", routeName: "reports-annual", hide: true },
    ],
  },
];
</script>

<template>
  <NavMenu :menu="menu" />
</template>
```

`NavMenuItem` handles:

- Active highlighting (matches current route or parent route)
- Expand/collapse for items with children
- Short name display when sidebar is collapsed
- `router.push` navigation with `hasRoute` guard

### `Logo` Component

Logo with configurable source, alt text, and link destination. Falls through a chain of defaults.

```vue
<script setup lang="ts">
import { Logo } from "@prefabs.tech/vue3-layout";
</script>

<!-- Uses layoutConfig values as source/alt/route -->
<template>
  <Logo />
</template>

<!-- Override any combination of props -->
<template>
  <Logo src="/custom-logo.svg" alt="Custom" route="home" />
</template>
```

**Props:**

| Prop    | Fallback chain                                               |
| ------- | ------------------------------------------------------------ |
| `src`   | `layoutConfig.logo` → no image (text fallback)               |
| `alt`   | `layoutConfig.logoAlt` → `appName` → `appTitle` → `"My App"` |
| `route` | `layoutConfig.logoRoute` → `"home"`                          |

### `Copyright` Component

Renders copyright year, a holder link, and optional disclaimer text.

```vue
<script setup lang="ts">
import { Copyright } from "@prefabs.tech/vue3-layout";
</script>

<template>
  <Copyright holder="Acme Corp" url="https://acme.example.com" />
</template>

<!-- With disclaimer -->
<template>
  <Copyright
    holder="Acme Corp"
    url="https://acme.example.com"
    show-disclaimer
  />
</template>
```

### `StickyCollapsibleFooter` Component

A sticky footer wrapper. The `fixed` prop (default: `true`) applies the `fixed` CSS class for positioning.

```vue
<script setup lang="ts">
import { StickyCollapsibleFooter } from "@prefabs.tech/vue3-layout";
</script>

<template>
  <StickyCollapsibleFooter>
    <ActionBar />
  </StickyCollapsibleFooter>
</template>
```

### `useTranslations` Composable

Access the plugin's merged translation messages inside a custom component. The result is passed directly to `useI18n`.

```vue
<script setup lang="ts">
import { useTranslations } from "@prefabs.tech/vue3-layout";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import type { LocaleMessages, VueMessageType } from "@prefabs.tech/vue3-i18n";

const messages = useTranslations() as LocaleMessages<VueMessageType>;
const { t } = useI18n({ messages });
</script>

<template>
  <span>{{ t("copyright.disclaimer") }}</span>
</template>
```

### Custom Translations

Provide custom translations at plugin install time. Your strings are merged on top of the bundled ones — partial overrides are supported.

```typescript
// main.ts
import layoutPlugin from "@prefabs.tech/vue3-layout";
import type { LocaleMessages, VueMessageType } from "@prefabs.tech/vue3-i18n";

const translations: LocaleMessages<VueMessageType> = {
  en: {
    copyright: {
      disclaimer: "All rights reserved.",
    },
  },
};

app.use(layoutPlugin, { config, translations });
```

### Menu Item Types

**`MenuItem`** — for `layoutConfig.mainMenu` (horizontal menu):

```typescript
import type { MenuItem } from "@prefabs.tech/vue3-layout";

const mainMenu: MenuItem[] = [
  { name: "Dashboard", route: "dashboard" },
  { name: "Admin", route: "admin", hide: true }, // hidden from menu
  {
    name: "Reports",
    route: "reports",
    icon: "prime:chart-bar",
    children: [{ name: "Monthly", route: "reports-monthly" }],
  },
];
```

**`SidebarMenu`** — for sidebar layouts (uses `routeName` instead of `route`):

```typescript
import type { SidebarMenu } from "@prefabs.tech/vue3-layout";

const sidebarMenu: SidebarMenu[] = [
  {
    name: "Dashboard",
    routeName: "dashboard",
    shortName: "Dash",
    icon: "prime:home",
  },
  { name: "Analytics", routeName: "analytics", shortName: "Stats" },
];
```

The `shortName` field is shown when the sidebar is collapsed and no full name fits.

---

## Use Cases

### Different layouts per route (login vs app)

Login and auth pages need no navigation chrome; app pages need a sidebar. Assign layouts via `route.meta`:

```typescript
// router/index.ts
import { SidebarHeaderLayout, NullLayout } from "@prefabs.tech/vue3-layout";
import type { LayoutType } from "@prefabs.tech/vue3-layout";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/Login.vue"),
    meta: { layout: NullLayout as unknown as LayoutType },
  },
  {
    path: "/",
    name: "dashboard",
    component: () => import("./pages/Dashboard.vue"),
    meta: { layout: SidebarHeaderLayout as unknown as LayoutType },
  },
];
```

```vue
<!-- App.vue -->
<template>
  <Layout>
    <RouterView />
  </Layout>
</template>
```

### Sidebar with collapsible short names

When sidebar space is limited, provide `shortName` on each menu item. The sidebar shows abbreviated names when collapsed, expanding to full names on hover/open.

```typescript
const menu: SidebarMenu[] = [
  {
    name: "Dashboard",
    routeName: "dashboard",
    shortName: "Dash",
    icon: "prime:home",
  },
  {
    name: "User Management",
    routeName: "users",
    shortName: "Users",
    icon: "prime:users",
  },
  {
    name: "System Settings",
    routeName: "settings",
    shortName: "Cfg",
    icon: "prime:cog",
  },
];
```

```vue
<template>
  <SidebarHeaderLayout :menu="menu" :collapsible="true">
    <RouterView />
  </SidebarHeaderLayout>
</template>
```

### Hiding menu items based on permissions

Use `hide: true` on items to conditionally remove them from the rendered menu without changing the route definition.

```typescript
import { useUserStore } from "./stores/user";

const userStore = useUserStore();

const menu = computed<SidebarMenu[]>(() => [
  { name: "Dashboard", routeName: "dashboard" },
  { name: "Admin Panel", routeName: "admin", hide: !userStore.isAdmin },
]);
```

### Adding a user menu to the header on desktop, sidebar on mobile

`SidebarHeaderLayout` accepts `userMenuLocation` to control where the user menu slot renders. On large screens it appears in the header; on mobile the layout automatically moves it to the sidebar.

```vue
<template>
  <SidebarHeaderLayout :menu="menu" user-menu-location="header">
    <template #userMenu>
      <UserAvatarDropdown />
    </template>
    <RouterView />
  </SidebarHeaderLayout>
</template>
```

### Sticky action bar at the bottom of a form page

Wrap form action buttons in `StickyCollapsibleFooter` to keep them visible while the user scrolls through a long form.

```vue
<script setup lang="ts">
import { StickyCollapsibleFooter } from "@prefabs.tech/vue3-layout";
</script>

<template>
  <div>
    <LongForm />
    <StickyCollapsibleFooter>
      <button type="submit">Save</button>
      <button type="button" @click="cancel">Cancel</button>
    </StickyCollapsibleFooter>
  </div>
</template>
```

### Replacing the default header in a layout

All layouts expose a `header` slot that replaces the entire `AppHeader`. Use this to render a completely custom header without touching the layout scaffolding.

```vue
<template>
  <BasicLayout>
    <template #header>
      <MyCustomHeader />
    </template>
    <RouterView />
  </BasicLayout>
</template>
```
