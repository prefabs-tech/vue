<!-- Structured feature inventory — used by automated test generation. Developer docs: see GUIDE.md -->

## Plugin Setup

1. Vue plugin registration — installs auth system via `app.use(plugin, options)`, wires router, auth provider, and translations
2. Dual auth provider support — switches between SuperTokens and Laravel Passport via `config.user.features.authProvider`
3. Configurable API routes — all Laravel Passport API paths are overridable via `config.user.apiRoutes`
4. Translation injection — provides translations under `Symbol.for("dzangolab.vue-user.translations")`
5. Custom translation merging — caller translations are prepended to built-in defaults (caller wins on conflict)
6. Custom Terms component injection — `termsComponent` option is provided under `"dzangolabVueUserTerms"` inject key
7. Notification emitter bridge — `"notify"` events on the `emitter` are forwarded to caller's `notification` callback

## Auth Provider — SuperTokens

8. SuperTokens initialization — initializes `ThirdPartyEmailPassword` and `Session` recipes from `AppConfig`
9. Conditional EmailVerification recipe — added to SuperTokens recipe list only when `features.signUp.emailVerification` is true
10. Session auto-refresh — on UNAUTHORISED/SESSION_EXPIRED, `Session.attemptRefreshingSession()` is called
11. Login error normalization — maps `WRONG_CREDENTIALS_ERROR` to `"401"`, all others to `"SOMETHING_WRONG"`
12. Signup error normalization — maps `FIELD_ERROR` to `"409"`, all others to `"SOMETHING_WRONG"`
13. Social sign-in — `socialSignIn(providerId, redirectURL)` gets auth URL and redirects via `window.location.assign`
14. Role validation — `verifySessionRoles(claims)` validates `UserRoleClaim` against session; logs out if all fail
15. Profile completion claim — custom `ProfileValidationClaim` reads `profileValidation` from session JWT payload
16. Grace period logic — `isProfileCompleted()` returns `true` if within grace period (`gracePeriodEndsAt >= Date.now()`)

## Auth Provider — Laravel Passport

17. REST-based auth operations — all operations POST/PUT/GET to configurable API paths
18. Token refresh interceptor — on 401, automatically retries via POST to `/api/login/refresh` (once per request)

## Router & Navigation Guards

19. Dynamic route registration — all user routes added via `router.addRoute()` on plugin install
20. Conditional signup route — route omitted when `config.user.routes.signup.disabled` is true
21. Conditional first-user signup route — added only when signup is disabled AND signupFirstUser is not disabled
22. Conditional email verification routes — `verifyEmail` and `verifyEmailReminder` routes added only when `emailVerification` feature is on
23. Authentication guard — unauthenticated access to `meta.authenticated` routes redirects to `login`
24. Post-login redirect restoration — destination stored in `sessionStorage.redirectAfterLogin`; restored after login
25. Email verification guard — unverified users on authenticated routes redirect to `verifyEmailReminder`
26. Profile completion guard — users with incomplete profile on authenticated routes redirect to `profile`
27. Auth page redirect — logged-in users navigating to login/signup/reset routes are redirected to `profile`
28. Dynamic route display filtering — routes with `meta.display` (boolean or `(user) => boolean`) are added/removed reactively

## Pinia Stores

29. User persistence — `setUser()` writes user to localStorage; `getUser()` reads back from state or localStorage
30. Auth token persistence — `setAuthTokens()` stores access/refresh tokens in localStorage
31. Full logout cleanup — clears user state, isEmailVerified, removes localStorage user/tokens, clears `sFrontToken` cookie
32. Profile completion enrichment — after `setUser()`, calls `isProfileCompleted()` if provider supports it; attaches result to user object
33. Roles store — `createRole`, `deleteRole`, `getRoles`, `getPermissions`, `updateRolePermissions` via API

## Components — Auth Forms

34. `LoginForm` — shows email or username field based on `config.user.features.loginType`
35. `SignupForm` — optional confirm password field controlled by `config.user.features.confirmPassword`
36. `SignupForm` — optional username field when `loginType === "username"`
37. `SignupForm` — Terms and Conditions section with optional checkbox gate; submit disabled until checkbox checked
38. `SignupForm` — prefills email from invitation store when accessed via token route
39. `PasswordResetForm` — optional confirm password confirmation field
40. `PasswordResetForm` — extracts reset token from `route.params.token` or `route.query.token`; redirects to login if missing
41. `PasswordResetRequestAcknowledge` — countdown timer before resend is available (configurable via `forgotPasswordResendTimeInSeconds`, default 30)
42. `ChangePasswordForm` — optional confirm password field with cross-field match validation

## Components — User Menu

43. `UserMenu` — shows `DropdownUserMenu` when user is authenticated, `SignInUpMenu` otherwise
44. `DropdownUserMenu` — collapses on outside click via `onClickOutside`; extensible with extra `userMenuItems`
45. `SignInUpMenu` — omits signup link when `config.user.routes.signup.disabled` is true

## Components — Social Login

46. `GoogleLogin` — triggers Google OAuth; constructs redirect URL from `config.websiteDomain`
47. `FacebookLogin` — triggers Facebook OAuth; constructs redirect URL from `config.websiteDomain`
48. `AuthSocialLoginCallback` — on mount completes OAuth handshake; validates roles against `config.user.supportedRoles`; sets user and navigates home

## Components — Profile

49. `AccountInfo` — update email button shown only when `features.updateEmail` is true AND user has no `thirdParty` login
50. `UpdateEmailForm` — handles email change API status codes (`OK`, `EMAIL_ALREADY_EXISTS_ERROR`, `EMAIL_SAME_AS_CURRENT_ERROR`, `EMAIL_INVALID_ERROR`, `EMAIL_FEATURE_DISABLED_ERROR`)
51. `UpdateEmailModal` — calls `UpdateEmailForm.onCancel()` when modal is dismissed
52. `ProfileForm` — submit button disabled until form is dirty; cancel resets to original values
53. `ProfileTabsPage` — default profile/credentials tabs; additional caller tabs merged in; tabs are overridable by key

## Components — Invitation & Users

54. `InvitationForm` — app matching `window.location.origin` sorted to top of app selector with label "This App"
55. `InvitationForm` — role options filtered to selected app's `supportedRoles`; falls back to flat `roles` prop
56. `InvitationTable` — built-in columns: email, app, role, invitedBy, expiresAt, status; column props merged over defaults
57. `InvitationTable` — status column computed from `acceptedAt`, `revokedAt`, `expiresAt` fields
58. `UsersTable` — built-in columns: email, name (computed from name parts), roles, signedUpAt, disabled
59. `UsersTable` — enable/disable user actions call store and emit `fetch:users` on success
60. `UsersTable` — `dataActionMenu` prop can be an array (replaces defaults) or a function `(defaults) => items` (extends defaults)
61. `ResetPasswordModal` — presents app selector dropdown for admin password reset workflows

## Layouts

62. `BasicLayout` — auto-computes home route: logged-in → `user.routes.home` or `"profile"`; logged-out → `layout.homeRoute`
63. `BasicLayout` — filters `layout.mainMenu` items: unauthenticated users see only non-authenticated routes
64. `SidebarHeaderLayout` — filters menu items and nested children for auth state
65. `SidebarHeaderLayout` — `userMenuLocation` prop places UserMenu in `"header"` or `"sidebar"` (default `"sidebar"`)
66. `SidebarOnlyLayout` — same auth-aware menu filtering as SidebarHeaderLayout
67. All layouts — watch `user` and call `filterRoutes(router)` reactively on login/logout

## Module Augmentation

68. `AppConfig.user` — adds `DzangolabVueUserConfig` to `@prefabs.tech/vue3-config`'s `AppConfig` interface
69. `LayoutConfig.userMenu` — adds `UserMenuItem[]` to `@prefabs.tech/vue3-layout`'s layout config interface
