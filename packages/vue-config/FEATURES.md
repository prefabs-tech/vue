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

## Configuration Parsing

6. **Type-aware config parser** — Parse config values with type-aware fallback logic

```typescript
import { parse } from "@prefabs.tech/vue3-config";

const enabled = parse(process.env.FEATURE_ENABLED, false); // boolean
const host = parse(process.env.HOST, "localhost"); // string
const port = parse(process.env.PORT, 3000); // number
```

7. **Undefined fallback** — Returns fallback value when input is undefined
8. **Boolean passthrough** — Returns boolean values unchanged without conversion
9. **String to boolean conversion** — Converts string values to boolean when fallback is boolean
10. **String to number conversion** — Converts string values to number when fallback is number

## Sentry Integration

11. **Conditional Sentry initialization** — Only initializes Sentry when enabled flag is true AND dsn is provided
12. **Automatic browser tracing** — Adds browserTracingIntegration with router injection automatically
13. **Automatic trace propagation targets** — Sets tracePropagationTargets to localhost, websiteDomain, and relative paths
14. **Automatic release tracking** — Sets release field to appVersion from config

## Type Exports

15. **AppConfig type** — TypeScript interface for app configuration structure
16. **AppFeatures type** — TypeScript interface for feature flags (designed for module augmentation)

## Provide/Inject Keys

17. **Config injection key** — Symbol.for("dzangolab.vue-config.config") for config injection
18. **Feature function injection key** — Symbol.for("dzangolab.vue-config.feature") for feature check function injection
