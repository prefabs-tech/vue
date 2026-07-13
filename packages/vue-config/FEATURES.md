<!-- Structured feature inventory — used by automated test generation. Developer docs: see GUIDE.md -->

# Features

## Plugin Installation

1. **Main config plugin** — Vue plugin that provides app configuration and feature flags via provide/inject
2. **Sentry plugin** — Vue plugin for conditional Sentry error tracking initialization

## Configuration Access

3. **useConfig composable** — Access injected app configuration from any component

```typescript
const config = useConfig();
console.log(config.appTitle);
```

4. **useFeature composable** — Access feature flag checking function from any component

```typescript
const feature = useFeature();
if (feature?.("showVersion")) {
  // render version
}
```

## Feature Flags

5. **Feature flag checking** — Check if a feature is enabled, returns false if config or features object is missing

```typescript
const feature = useFeature();
const isEnabled = feature?.("showVersion");
```

## Sentry Integration

6. **Conditional Sentry initialization** — Only initializes Sentry when enabled flag is true AND dsn is provided
7. **Automatic browser tracing** — Adds browserTracingIntegration with router injection automatically
8. **Automatic trace propagation targets** — Sets tracePropagationTargets to localhost, websiteDomain, and relative paths
9. **Automatic release tracking** — Sets release field to appVersion from config

## Type Exports

10. **AppConfig type** — TypeScript interface for app configuration structure
11. **AppFeatures type** — TypeScript interface for feature flags (designed for module augmentation)

## Provide/Inject Keys

12. **Config injection key** — Symbol.for("dzangolab.vue-config.config") for config injection
13. **Feature function injection key** — Symbol.for("dzangolab.vue-config.feature") for feature check function injection
