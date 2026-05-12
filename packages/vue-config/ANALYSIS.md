<!-- Package analysis — produced by /analyze-package. Do not edit manually. -->

# Package Analysis: @prefabs.tech/vue3-config

## Base Library Passthrough Analysis

### @sentry/vue — MODIFIED

- Options type: imported from base library (`Options` from `@sentry/core`)
- Options passed: transformed — we merge user options with hardcoded integrations, tracePropagationTargets, and release
- Features restricted: none — all Sentry options are available
- Features added:
  - Conditional initialization based on `enabled` flag and `dsn` presence
  - Automatic `browserTracingIntegration` with router injection
  - Automatic `tracePropagationTargets` derived from config.websiteDomain
  - Automatic `release` field set to config.appVersion
  - App and router instance injection

## Code Classification

### "Ours" — Custom Logic

**Plugin installation (`src/index.ts`):**

- `plugin.install()` — provides config and feature function via Symbol keys
- `feature()` function — checks if a feature flag is enabled, returns false if config missing
- `useConfig()` composable — injects config via Symbol.for("dzangolab.vue-config.config")
- `useFeature()` composable — injects feature function via Symbol.for("dzangolab.vue-config.feature")

**Sentry plugin (`src/sentry.ts`):**

- `plugin.install()` — conditional Sentry initialization
  - Only initializes if `sentryOptions.enabled === true` AND `sentryOptions.dsn` exists
  - Merges user options with hardcoded integrations
  - Sets `tracePropagationTargets` to `["localhost", config.websiteDomain, /^\//]`
  - Sets `release` to `config.appVersion`
  - Injects app and router instances

### "Theirs" — Direct Passthrough

**Sentry initialization (`src/sentry.ts`):**

- `Sentry.init()` — all user-provided Sentry options are spread directly into init call
- `Sentry.browserTracingIntegration()` — called with router only

## Framework Constructs

### Vue Plugin

- **Main plugin:** `plugin` exported as default from `src/index.ts`
  - Implements `Plugin` interface with `install(app, options)` method
  - Requires `{ config: AppConfig }` as options

- **Sentry plugin:** `plugin` exported as default from `src/sentry.ts`
  - Implements `Plugin` interface with `install(app, options)` method
  - Requires `{ config: AppConfig, router: Router }` as options

### Provide/Inject Keys

- `Symbol.for("dzangolab.vue-config.config")` — provides AppConfig instance
- `Symbol.for("dzangolab.vue-config.feature")` — provides feature check function

### Composables

- `useConfig()` — returns injected AppConfig
- `useFeature()` — returns injected feature check function

## Exports

### Default Export

- `plugin` — Vue plugin for config and feature flag injection

### Named Exports

- `sentry` — Vue plugin for conditional Sentry initialization
- `useConfig` — composable to access injected config
- `useFeature` — composable to access feature check function

### Type Exports

- `AppConfig` — main config interface
- `AppFeatures` — feature flags interface

## Conditional Logic

### Feature Flag Check (`src/index.ts:9-17`)

```typescript
if (!config || !config?.features) {
  return false;
}
```

- Returns false if config is missing or features object is missing
- Otherwise returns the boolean value of the requested feature

### Sentry Conditional Initialization (`src/sentry.ts:12`)

```typescript
if (sentryOptions?.enabled && sentryOptions?.dsn) {
  Sentry.init({ ... });
}
```

- Only initializes Sentry if both `enabled` flag is true AND `dsn` is provided

## Default Values

### Feature Check Function

- Returns `false` if config or features object is missing

### Sentry Plugin

- No initialization if `enabled` is falsy or `dsn` is missing
- `tracePropagationTargets` defaults to `["localhost", config.websiteDomain, /^\//]`
- `release` defaults to `config.appVersion`
- `integrations` includes `browserTracingIntegration` with router

## AppConfig Interface

Required fields:

- `apiBaseUrl: string`
- `appTitle: string`
- `appVersion: string`
- `features: AppFeatures`
- `slug: string`
- `websiteDomain: string`

Optional fields:

- `authBasePath?: string`
- `appName?: string`
- `copyright?: { holder: string; url: string }`
- `sentry?: SentryOptions & { enabled?: boolean }`
- `toastNotification?: { position: ToastNotificationPosition }`

## AppFeatures Interface

- `showVersion: boolean` — controls version display visibility

Note: This interface is designed for module augmentation. Other packages (vue-i18n, vue-layout, vue-user) extend it with their own feature flags.

## Completeness Checklist

- [x] Classified every public export as "ours" or "theirs"
- [x] Listed every framework construct added (plugin, provide/inject, composables)
- [x] Documented default values for all options we define
- [x] Produced a passthrough classification for every wrapped dependency (@sentry/vue)
