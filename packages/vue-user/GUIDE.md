# @prefabs.tech/vue3-user — Developer Guide

## Installation

```bash
# npm
npm install @prefabs.tech/vue3-user

# pnpm (monorepo)
pnpm --filter @prefabs.tech/vue3-user dev
```

## Setup

Install the plugin once in `main.ts`. All later examples assume this setup.

```typescript
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter } from "vue-router";
import configPlugin from "@prefabs.tech/vue3-config";
import i18nPlugin from "@prefabs.tech/vue3-i18n";
import userPlugin from "@prefabs.tech/vue3-user";

const pinia = createPinia();
const router = createRouter({ /* ... */ });

const config: AppConfig = {
  apiBaseUrl: "https://api.example.com",
  appTitle: "My App",
  appVersion: "1.0.0",
  slug: "my-app",
  websiteDomain: "https://example.com",
  user: {
    features: {
      authProvider: "supertokens", // or "laravel-passport"
      signUp: { emailVerification: true },
      confirmPassword: true,
      loginType: "email",
    },
    supportedRoles: ["ADMIN", "USER"],
  },
};

const app = createApp(App);
app.use(pinia);
app.use(configPlugin, { config });
app.use(i18nPlugin, { config });
app.use(userPlugin, {
  config,
  pinia,
  router,
  notification: (message) => console.log(message), // optional
  termsComponent: MyTermsComponent,                  // optional
  translations: myCustomTranslations,                // optional
});
app.use(router);
app.mount("#app");
```

## Base Libraries

### supertokens-web-js — Partial Passthrough

Used when `config.user.features.authProvider` is `"supertokens"` (default).

We initialize SuperTokens with `ThirdPartyEmailPassword`, `Session`, and optionally `EmailVerification` recipes. We do not expose the full `SuperTokens.init()` surface — app info (`apiDomain`, `appName`, `apiBasePath`) is derived from `AppConfig` automatically.

Docs: https://supertokens.com/docs/thirdpartyemailpassword/quick-setup/frontend

**What we change/add:**
- `apiBasePath` defaults to `"/auth"` unless `config.authBasePath` is set
- `EmailVerification` recipe only added when `features.signUp.emailVerification` is true
- Session event handler calls `attemptRefreshingSession()` on UNAUTHORISED/SESSION_EXPIRED
- Error codes from SuperTokens are normalized to string constants (`"401"`, `"SOMETHING_WRONG"`, etc.)

### Laravel Passport (custom backend) — Partial Passthrough

Used when `config.user.features.authProvider` is `"laravel-passport"`.

All operations call your backend REST API via axios. Default API paths are defined in `constant.ts` and can each be overridden via `config.user.apiRoutes`.

Docs: https://laravel.com/docs/passport

**Default API paths:**

| Operation | Default path |
|---|---|
| login | `POST /api/login` |
| logout | `POST /api/logout` |
| signup | `POST /api/signup` |
| changeEmail | `PUT /api/user/change-email-username` |
| changePassword | `PUT <changePassword>` |
| passwordResetRequest | `POST /api/reset-password-request` |
| passwordReset | `POST /api/reset-password` |
| getVerificationStatus | `GET /api/email/verification-status` |
| sendVerificationEmail | `POST /api/email/send-verification` |
| verifyEmail | `POST /api/email/verify` |
| refresh | `POST /api/login/refresh` |

**What we add:**
- Automatic token refresh interceptor: on 401, retries via POST to refresh route (once per request)
- Error normalization to `"401"` / `"SOMETHING_WRONG"` string codes

## Features

### 1. Plugin Registration

```typescript
app.use(userPlugin, {
  config,    // AppConfig — required
  pinia,     // Pinia instance — required
  router,    // Vue Router instance — required
});
```

### 2. Dual Auth Provider

Set the provider in config. The plugin auto-selects; no component changes needed.

```typescript
config.user.features.authProvider = "supertokens";     // default
config.user.features.authProvider = "laravel-passport";
```

### 3. Configurable API Routes (Laravel Passport only)

```typescript
config.user.apiRoutes = {
  login: "/api/auth/login",
  logout: "/api/auth/logout",
  refresh: "/api/auth/refresh",
  // ... any subset
};
```

### 4 & 5. Translation Injection and Custom Merging

```typescript
<script setup lang="ts">
import { useTranslations } from "@prefabs.tech/vue3-user";
import { useI18n } from "@prefabs.tech/vue3-i18n";

const messages = useTranslations();
const { t } = useI18n({ messages });
</script>
```

Override specific keys by passing `translations` to plugin options. Your keys take precedence.

### 6. Custom Terms Component

```typescript
app.use(userPlugin, {
  config,
  pinia,
  router,
  termsComponent: MyTermsAndConditions, // DefineComponent or VNode
});
```

Inside `SignupForm`, your component renders inside the T&C slot.

### 7. Notification Emitter Bridge

```typescript
app.use(userPlugin, {
  config,
  pinia,
  router,
  notification: ({ text, type }) => toast(text, { type }),
});
```

Any `emitter.emit("notify", ...)` call from within the package (profile updates, login success, etc.) is forwarded to your handler.

You can also emit notifications manually:

```typescript
import { emitter } from "@prefabs.tech/vue3-user";
emitter.emit("notify", { text: "Hello!", type: "success" });
```

### 8–16. SuperTokens Auth Operations (via `useUserStore`)

All auth operations are accessed through the Pinia store:

```typescript
import useUserStore from "@prefabs.tech/vue3-user";

const store = useUserStore();
await store.login({ email: "a@b.com", password: "..." });
await store.logout();
await store.signup({ email: "a@b.com", password: "..." });
await store.requestPasswordReset({ email: "a@b.com", url: "..." });
await store.resetPassword({ token: "...", password: "..." });
await store.verifyEmail();
await store.sendVerificationEmail();
await store.socialSignIn("google", redirectURL);
await store.verifySessionRoles(["ADMIN"]);
```

**Error codes thrown:**
- `"401"` — wrong credentials
- `"409"` — email already exists (signup)
- `"SOMETHING_WRONG"` — unexpected errors
- `"UNSUPPORTED_AUTH_PROVIDER"` — operation not supported by selected provider

### 17–18. Laravel Passport Token Refresh

The axios client (`import { client } from "@prefabs.tech/vue3-user"`) automatically retries failed requests after refreshing tokens. No extra configuration needed beyond setting `config.user.apiRoutes.refresh` if your endpoint differs.

### 19–22. Route Registration

All routes are added in `updateRouter()` during plugin install:

| Route name | Path | Conditional |
|---|---|---|
| `login` | `/login` | always |
| `signup` | `/signup` | unless `routes.signup.disabled` |
| `signupFirstUser` | `/signup-first-user` | only if signup disabled + signupFirstUser not disabled |
| `passwordReset` | `/reset-password/:token?` | always |
| `passwordResetRequest` | `/reset-password-request` | always |
| `profile` | `/profile` | always (authenticated) |
| `roles` | `/roles` | always (authenticated) |
| `acceptInvitation` | `/signup/token/:token?` | always |
| `authGoogleCallback` | `/auth/callback/google` | always |
| `authFacebookCallback` | `/auth/callback/facebook` | always |
| `verifyEmail` | `/verify-email` | only if `emailVerification` feature on |
| `verifyEmailReminder` | `/verify-email-reminder` | only if `emailVerification` feature on |

Override any route's path, component, or meta:

```typescript
config.user.routes = {
  login: { path: "/auth/login" },
  signup: { disabled: true },
  profile: { meta: { layout: MyLayout } },
};
```

### 23–27. Navigation Guards

Three guards are installed automatically:

**Authentication guard** — redirects unauthenticated users to login when `route.meta.authenticated` is true:
```typescript
// Mark any route as requiring auth:
{ meta: { authenticated: true }, ... }
```

**Email verification guard** — unverified users on authenticated routes are redirected to `verifyEmailReminder`. Active only when `features.signUp.emailVerification` is true.

**Profile completion guard** — users with `isProfileCompleted === false` are redirected to `profile`. Active only when the provider returns an `isProfileCompleted` value (SuperTokens + `ProfileValidationClaim`).

**Auth page redirect** — logged-in users visiting login, signup, password reset, or acceptInvitation are redirected to `profile`.

### 24. Post-Login Redirect Restoration

When an unauthenticated user is redirected to login, their destination is saved:
```typescript
sessionStorage.setItem("redirectAfterLogin", routeName);
```
After successful login, the Login view restores and clears this key automatically.

### 28. Dynamic Route Display

Add `meta.display` to routes that should only appear conditionally:

```typescript
router.addRoute({
  name: "admin",
  path: "/admin",
  meta: {
    authenticated: true,
    display: (user) => user.roles.includes("ADMIN"),
  },
  component: AdminPage,
});
```

`filterRoutes(router)` evaluates display functions using the current user and removes hidden routes. All layout components call `filterRoutes()` reactively when the user changes.

```typescript
import { filterRoutes } from "@prefabs.tech/vue3-user";
filterRoutes(router); // call manually if needed
```

### 29–32. User Store

```typescript
import { userStore } from "@prefabs.tech/vue3-user";
const store = userStore();

// Read user (state or localStorage fallback)
const user = store.getUser();

// Set user after external login
await store.setUser(userData);

// Persist auth tokens (Laravel Passport)
store.setAuthTokens({ accessToken: "...", refreshToken: "..." });

// Full logout
await store.logout();
```

### 33. Roles Store

```typescript
import useRolesStore from "@prefabs.tech/vue3-user/stores/roles";
const roles = useRolesStore();

const { roles: roleList } = await roles.getRoles(config.apiBaseUrl);
await roles.createRole({ role: "EDITOR", permissions: ["edit:posts"] }, config.apiBaseUrl);
await roles.deleteRole("EDITOR", config.apiBaseUrl);
await roles.updateRolePermissions({ role: "EDITOR", permissions: [...] }, config.apiBaseUrl);
```

### 34. `LoginForm`

```html
<script setup lang="ts">
import { LoginForm } from "@prefabs.tech/vue3-user";
import useUserStore from "@prefabs.tech/vue3-user";

const store = useUserStore();

const handleSubmit = async (credentials) => {
  await store.login(credentials);
};
</script>

<template>
  <LoginForm :loading="loading" @submit="handleSubmit" />
</template>
```

Shows email field by default. Shows username field when `config.user.features.loginType === "username"`.

### 35–38. `SignupForm`

```html
<template>
  <SignupForm :loading="loading" @submit="handleSubmit" />
</template>
```

Feature flags affect what fields appear:
- `confirmPassword: true` → shows confirmation field
- `loginType: "username"` → shows username field
- `signUp.termsAndConditions.display: true` → shows T&C section
- `signUp.termsAndConditions.showCheckbox: true` → submit disabled until checked

### 39–41. Password Reset Components

```html
<template>
  <!-- Step 1: Request form -->
  <PasswordResetRequestForm :loading="loading" @submit="handleRequest" />

  <!-- Step 2: Acknowledgement with countdown timer -->
  <PasswordResetRequestAcknowledge :email="email" @resend="goBack" />

  <!-- Token link: actual reset form -->
  <PasswordResetForm :loading="loading" @submit="handleReset" />
</template>
```

`PasswordResetRequestAcknowledge` shows a resend link disabled for `config.user.features.forgotPasswordResendTimeInSeconds` seconds (default 30).

### 42. `ChangePasswordForm`

```html
<template>
  <ChangePasswordForm :loading="loading" @submit="handleChangePassword" />
</template>
```

### 43–45. User Menu Components

```html
<!-- Smart menu — use this in layouts -->
<template>
  <UserMenu :user-menu-items="extraItems" @select:menu="onSelect">
    <template #userMenuTrigger>
      <Avatar :user="user" />
    </template>
  </UserMenu>
</template>
```

`UserMenu` automatically renders `DropdownUserMenu` (logged in) or `SignInUpMenu` (logged out).

Extra menu items extend the dropdown:
```typescript
const extraItems: UserMenuItem[] = [
  { label: "Settings", route: "settings", icon: "pi pi-cog" },
];
```

### 46–48. Social Login

```html
<template>
  <GoogleLogin @error="handleError" />
  <FacebookLogin @error="handleError" />
</template>
```

Register the callback routes (auto-added by plugin):
- `/auth/callback/google` → `AuthSocialLoginCallback`
- `/auth/callback/facebook` → `AuthSocialLoginCallback`

`AuthSocialLoginCallback` validates `config.user.supportedRoles` before setting the user.

### 49–52. Profile Components

```html
<!-- Simple profile page -->
<template>
  <ProfilePage>
    <CustomField />
  </ProfilePage>
</template>

<!-- Tabbed profile page -->
<template>
  <ProfileTabsPage
    :tabs="[{ key: 'billing', label: 'Billing' }]"
    :visible-tabs="['profile', 'billing']"
  >
    <template #profile>
      <!-- Override default profile tab content -->
      <ProfileForm>
        <CustomField />
      </ProfileForm>
    </template>
    <!-- Other tabs rendered as additional slots by key -->
  </ProfileTabsPage>
</template>
```

`ProfileTabsPage` merges caller tabs with default `profile` and `credentials` tabs. Tabs with matching `key` override the default.

### 53. `ChangePassword` (profile component)

```html
<template>
  <ChangePassword>
    <template #instructions>
      <p>Use a strong password with at least 8 characters.</p>
    </template>
  </ChangePassword>
</template>
```

### 54–57. Invitation Components

```html
<!-- Modal for inviting users -->
<template>
  <InvitationModal
    :show="showInvite"
    :apps="availableApps"
    :roles="availableRoles"
    expiry-mode="calendar"
    title="Invite a user"
    @on:close="showInvite = false"
    @submitted="onInvited"
  />
</template>

<!-- Table of invitations -->
<template>
  <InvitationTable
    :invitations="invitations"
    :apps="apps"
    :roles="roles"
    :is-server-table="true"
    :total-records="total"
    expiry-mode="calendar"
    @update:request="fetchInvitations"
    @action:resend="resendInvitation"
    @action:revoke="revokeInvitation"
    @action:delete="deleteInvitation"
    @submitted="fetchInvitations"
  />
</template>
```

Override or extend default columns:
```typescript
const extraColumns = [
  {
    accessorKey: "appId",
    header: "Application",  // overrides default "appId" column
  },
  {
    accessorKey: "customField",
    header: "Custom",       // appended after defaults
  },
];
```

### 58–60. `UsersTable`

```html
<template>
  <UsersTable
    :users="users"
    :roles="availableRoles"
    :is-server-table="true"
    :total-records="total"
    @fetch:users="fetchUsers"
    @update:request="fetchUsers"
    @submitted="fetchUsers"
  />
</template>
```

Customize action menu:
```typescript
// Replace defaults
const actionMenu = [{ key: "view", label: "View Profile", ... }];

// Or extend defaults
const actionMenu = (defaults) => [
  ...defaults,
  { key: "impersonate", label: "Impersonate", ... },
];
```

### 62–67. Layout Components

```html
<!-- Basic layout with header nav -->
<template>
  <BasicLayout :no-footer="true">
    <router-view />
  </BasicLayout>
</template>

<!-- Sidebar + header layout -->
<template>
  <SidebarHeaderLayout user-menu-location="header">
    <router-view />
  </SidebarHeaderLayout>
</template>

<!-- Sidebar only -->
<template>
  <SidebarOnlyLayout :show-user-menu="true">
    <router-view />
  </SidebarOnlyLayout>
</template>
```

Configure menus in `AppConfig`:
```typescript
config.layout = {
  mainMenu: [
    { name: "Dashboard", route: "home" },
    { name: "Users", route: "users", icon: "pi pi-users" },
  ],
  userMenu: [
    { label: "Settings", route: "settings", icon: "pi pi-cog" },
  ],
  homeRoute: "home",
};
```

Layouts filter `mainMenu` based on the user's login state — unauthenticated users only see non-authenticated routes.

### 68–69. Module Augmentation

These augmentations are applied automatically when you import from this package. They extend the type interfaces from sibling packages:

```typescript
// AppConfig gains .user field:
const config: AppConfig = {
  user: {
    features: { authProvider: "supertokens" },
    routes: { signup: { disabled: true } },
  },
};

// Layout config gains .userMenu:
config.layout = {
  userMenu: [{ label: "Settings", route: "settings" }],
};
```

## Use Cases

### Authenticated App with SuperTokens

```typescript
// main.ts
app.use(userPlugin, {
  config: {
    apiBaseUrl: "https://api.example.com",
    user: {
      features: {
        authProvider: "supertokens",
        signUp: { emailVerification: true },
        confirmPassword: true,
        updateEmail: true,
      },
      supportedRoles: ["ADMIN", "USER"],
    },
  },
  pinia,
  router,
  notification: (msg) => myToast(msg),
});
```

Users who aren't verified are automatically redirected to `verifyEmailReminder`. Users with an incomplete profile are redirected to `profile`.

### Admin Dashboard with Role-Gated Routes

```typescript
// Add admin route after plugin install
router.addRoute({
  name: "admin",
  path: "/admin",
  component: AdminView,
  meta: {
    authenticated: true,
    display: (user) => user.roles.some(r =>
      typeof r === "string" ? r === "ADMIN" : r.role === "ADMIN"
    ),
  },
});
```

The layout components call `filterRoutes(router)` when the user changes, so the admin route appears/disappears reactively.

### Invitation Workflow

```html
<script setup lang="ts">
import { InvitationTable } from "@prefabs.tech/vue3-user";
import useUserStore from "@prefabs.tech/vue3-user";
import { useConfig } from "@prefabs.tech/vue3-config";
import { ref } from "vue";

const config = useConfig();
const store = useUserStore();
const invitations = ref([]);
const total = ref(0);

const fetchInvitations = async (request) => {
  const result = await myApi.getInvitations(request);
  invitations.value = result.data;
  total.value = result.total;
};
</script>

<template>
  <InvitationTable
    :invitations="invitations"
    :total-records="total"
    :roles="[{ id: 1, name: 'ADMIN' }, { id: 2, name: 'USER' }]"
    :is-server-table="true"
    expiry-mode="calendar"
    @update:request="fetchInvitations"
    @action:resend="(inv) => myApi.resend(inv.id)"
    @action:revoke="(inv) => myApi.revoke(inv.id)"
    @submitted="fetchInvitations"
  />
</template>
```

### Multi-App Invitation (with app selector)

```html
<template>
  <InvitationTable
    :apps="[
      { id: 1, name: 'App A', origin: 'https://app-a.example.com', supportedRoles: [{ id: 1, name: 'ADMIN' }] },
      { id: 2, name: 'App B', origin: 'https://app-b.example.com', supportedRoles: [{ id: 2, name: 'USER' }] },
    ]"
    :invitations="invitations"
    expiry-mode="days"
    @submitted="refresh"
  />
</template>
```

The current app (`window.location.origin` match) moves to the top of the dropdown with label "This App".

### Laravel Passport with Custom Routes

```typescript
app.use(userPlugin, {
  config: {
    apiBaseUrl: "https://api.example.com",
    user: {
      features: { authProvider: "laravel-passport" },
      apiRoutes: {
        login: "/api/v2/auth/login",
        logout: "/api/v2/auth/logout",
        refresh: "/api/v2/auth/refresh",
        signup: "/api/v2/auth/register",
      },
    },
  },
  pinia,
  router,
});
```
