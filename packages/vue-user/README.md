# @prefabs.tech/vue3-user

Authentication and user management plugin for Vue 3 applications.

## Why This Package?

Building auth from scratch means wiring together an auth provider, a router, a user store, forms, layout menus, and invitation flows — and keeping all of them in sync. This package does that wiring. Drop it into your app and get a complete, opinionated user system that you can configure and extend without forking.

## What You Get

### SuperTokens (`supertokens-web-js`) — Partial Passthrough

Default auth provider. We initialize SuperTokens with your `AppConfig` and normalize its error codes. We conditionally add the `EmailVerification` recipe, attach a session event handler for automatic token refresh, and wrap social sign-in. Everything else is direct SuperTokens behavior.

Docs: https://supertokens.com/docs/thirdpartyemailpassword/quick-setup/frontend

### Laravel Passport (custom backend) — Partial Passthrough

Alternative auth provider (`authProvider: "laravel-passport"`). All operations hit your backend REST API at configurable paths. We add a 401 → refresh → retry interceptor on the axios client. Everything else is direct backend behavior.

Docs: https://laravel.com/docs/passport

### Added by This Package

**Auth & Security**
- Auth provider abstraction — switch between SuperTokens and Laravel Passport with one config key
- Authentication guard — automatic redirect to login for protected routes
- Email verification guard — unverified users redirected to reminder page
- Profile completion guard — users with incomplete profiles redirected to profile page
- Post-login redirect restoration — stores destination before auth redirect, restores after login
- Role-based session validation (SuperTokens `UserRoleClaim` + custom `ProfileValidationClaim`)
- Social sign-in support (Google, Facebook) with role validation on callback
- Axios client with automatic token refresh on 401

**Router**
- Dynamic registration of all user routes on plugin install
- Route registration is conditional: signup, first-user signup, and email verification routes respect config flags
- `filterRoutes()` — removes routes with `meta.display: false` or a failing display function

**Stores (Pinia)**
- `useUserStore` — login, logout, signup, password reset, email verification, profile updates, social sign-in, invitation management
- `useRolesStore` — CRUD for roles and permissions
- User and token persistence in localStorage; full cleanup on logout

**Ready-to-use Components**
- `LoginForm` — email or username login
- `SignupForm` — optional username, confirm password, and terms & conditions gate
- `PasswordResetRequestForm` + `PasswordResetRequestAcknowledge` (with countdown timer)
- `PasswordResetForm` — auto-extracts token from route
- `ChangePasswordForm` — current + new + optional confirm password
- `UserMenu` — smart: shows dropdown when logged in, sign in/up links when not
- `DropdownUserMenu` — extensible user dropdown with outside-click close
- `GoogleLogin`, `FacebookLogin`, `AuthSocialLoginCallback`
- `ProfilePage`, `ProfileTabsPage` (extensible tabbed profile)
- `AccountInfo` + `UpdateEmailModal` — email change with feature-flag guard
- `InvitationForm`, `InvitationModal`, `InvitationTable`
- `UsersTable` with enable/disable user actions and customizable action menu
- `ResetPasswordModal` for admin password reset flows

**Layout Components**
- `BasicLayout`, `SidebarHeaderLayout`, `SidebarOnlyLayout` — all wrap `@prefabs.tech/vue3-layout` with integrated `UserMenu` and auth-aware menu filtering

**Module Augmentation**
- Extends `AppConfig` with `user?: DzangolabVueUserConfig`
- Extends layout config with `userMenu?: UserMenuItem[]`

→ [Full feature list](FEATURES.md) | [Developer guide](GUIDE.md)

## Requirements

**Peer dependencies:**
- `vue >= 3.2`
- `vue-router >= 4.0`
- `pinia >= 2.0`
- `axios >= 0.26.1`
- `vee-validate >= 4.7.1`
- `@vee-validate/rules >= 4.7.1`
- `@vee-validate/zod >= 4.7.1`
- `zod >= 3.20.6`
- `@vueuse/core >= 9.4.0`

**Sibling packages (required):**
- `@prefabs.tech/vue3-config`
- `@prefabs.tech/vue3-i18n`
- `@prefabs.tech/vue3-layout`
- `@prefabs.tech/vue3-ui`

## Quick Start

```typescript
// main.ts
import userPlugin from "@prefabs.tech/vue3-user";

app.use(userPlugin, {
  config,   // AppConfig with config.user settings
  pinia,    // createPinia() result
  router,   // createRouter() result
  notification: ({ text, type }) => myToast.show(text, type), // optional
});
```

```typescript
// AppConfig
const config: AppConfig = {
  apiBaseUrl: "https://api.example.com",
  user: {
    features: {
      authProvider: "supertokens", // or "laravel-passport"
      signUp: { emailVerification: true },
      confirmPassword: true,
      updateEmail: true,
    },
    supportedRoles: ["ADMIN", "USER"],
  },
};
```

## Installation

```bash
npm install @prefabs.tech/vue3-user

# pnpm
pnpm add @prefabs.tech/vue3-user
```
