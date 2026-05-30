# @prefabs.tech/vue3-config — Developer Guide

## Installation

### For package consumers

```bash
npm install @prefabs.tech/vue3-config
```

```bash
pnpm add @prefabs.tech/vue3-config
```

### For monorepo development

```bash
pnpm install
pnpm --filter @prefabs.tech/vue3-config test
pnpm --filter @prefabs.tech/vue3-config build
```

## Base Libraries

### @sentry/vue — MODIFIED

Sentry provides error tracking and performance monitoring for Vue applications.

→ **Their docs:** [@sentry/vue](https://docs.sentry.io/platforms/javascript/guides/vue/)

We wrap Sentry initialization with conditional logic and automatic configuration. All Sentry options are passed through unchanged, but we add:

- Conditional initialization (only runs if `enabled: true` and `dsn` is provided)
- Automatic `browserTracingIntegration` with router injection
- Automatic `tracePropagationTargets` set to `["localhost", config.websiteDomain, /^\//]`
- Automatic `release` field set to `config.appVersion`

**What we add on top:**

- `enabled` flag to control initialization
- Automatic integration with Vue Router for performance tracking
- Automatic release versioning from app config
- Automatic trace propagation configuration

---

## Features

### Main Config Plugin

Provides app configuration and feature flags to all components via Vue's provide/inject system.

```typescript
import configPlugin from "@prefabs.tech/vue3-config";

import type { AppConfig } from "@prefabs.tech/vue3-config";

const config: AppConfig = {
  apiBaseUrl: "https://api.example.com",
  appTitle: "My App",
  appVersion: "1.0.0",
  features: {
    showVersion: true,
  },
  slug: "my-app",
  websiteDomain: "example.com",
};

app.use(configPlugin, { config });
```

### useConfig Composable

Access the injected app configuration from any component.

```typescript
<script setup lang="ts">
import { useConfig } from "@prefabs.tech/vue3-config";

const config = useConfig();
</script>

<template>
  <div>
    <h1>{{ config.appTitle }}</h1>
    <p>API: {{ config.apiBaseUrl }}</p>
  </div>
</template>
```

### useFeature Composable

Access the feature flag checking function from any component.

```typescript
<script setup lang="ts">
import { useFeature } from "@prefabs.tech/vue3-config";

const feature = useFeature();
const showVersion = feature?.("showVersion");
</script>

<template>
  <div>
    <p v-if="showVersion">Version: {{ config.appVersion }}</p>
  </div>
</template>
```

The feature check function returns `false` if the config or features object is missing, making it safe to use without null checks on the config itself.

### Sentry Plugin

Conditionally initialize Sentry error tracking with automatic configuration.

```typescript
import { sentry } from "@prefabs.tech/vue3-config";

import type { AppConfig } from "@prefabs.tech/vue3-config";

const config: AppConfig = {
  apiBaseUrl: "https://api.example.com",
  appTitle: "My App",
  appVersion: "1.0.0",
  features: {
    showVersion: true,
  },
  sentry: {
    enabled: true,
    dsn: "https://your-sentry-dsn@sentry.io/project",
    environment: "production",
    tracesSampleRate: 1,
  },
  slug: "my-app",
  websiteDomain: "example.com",
};

app.use(sentry, { config, router });
```

Sentry will only initialize if both `enabled: true` and `dsn` are provided. If either is missing or `enabled` is false, the plugin does nothing.

The plugin automatically configures:

- `browserTracingIntegration` with your router for performance tracking
- `tracePropagationTargets` to `["localhost", config.websiteDomain, /^\//]`
- `release` to `config.appVersion`

All other Sentry options are passed through unchanged.

### AppConfig Type

TypeScript interface defining the structure of your app configuration.

```typescript
import type { AppConfig } from "@prefabs.tech/vue3-config";

const config: AppConfig = {
  apiBaseUrl: "https://api.example.com",
  appName: "My Application",
  appTitle: "My App",
  appVersion: "1.0.0",
  authBasePath: "/auth",
  copyright: {
    holder: "Example Inc",
    url: "https://example.com",
  },
  features: {
    showVersion: true,
  },
  slug: "my-app",
  toastNotification: {
    position: "top-right",
  },
  websiteDomain: "example.com",
};
```

Required fields:

- `apiBaseUrl` — Base URL for API requests
- `appTitle` — Application title
- `appVersion` — Application version
- `features` — Feature flags object
- `slug` — Application slug
- `websiteDomain` — Website domain for Sentry trace propagation

Optional fields:

- `authBasePath` — Base path for authentication routes
- `appName` — Full application name
- `copyright` — Copyright holder and URL
- `sentry` — Sentry configuration with `enabled` flag
- `toastNotification` — Toast notification position

### AppFeatures Type

TypeScript interface for feature flags, designed for module augmentation.

```typescript
import type { AppFeatures } from "@prefabs.tech/vue3-config";

const features: AppFeatures = {
  showVersion: true,
};
```

Other packages (vue-i18n, vue-layout, vue-user) extend this interface with their own feature flags via module augmentation.

---

## Use Cases

### Conditional Feature Rendering

Show or hide features based on feature flags.

```typescript
<script setup lang="ts">
import { useConfig, useFeature } from "@prefabs.tech/vue3-config";

const config = useConfig();
const feature = useFeature();
</script>

<template>
  <div>
    <header>
      <h1>{{ config.appTitle }}</h1>
      <span v-if="feature?.('showVersion')">v{{ config.appVersion }}</span>
    </header>
  </div>
</template>
```

### Sentry Error Tracking with Router Integration

Enable error tracking with automatic performance monitoring for route transitions.

```typescript
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import configPlugin, { sentry } from "@prefabs.tech/vue3-config";

import type { AppConfig } from "@prefabs.tech/vue3-config";

const config: AppConfig = {
  apiBaseUrl: "https://api.example.com",
  appTitle: "My App",
  appVersion: "1.0.0",
  features: {
    showVersion: true,
  },
  sentry: {
    enabled: true,
    dsn: "https://your-sentry-dsn@sentry.io/project",
    environment: "production",
    tracesSampleRate: 0.1,
    beforeSend(event) {
      if (event.exception) {
        console.error("Sentry error:", event.exception);
      }
      return event;
    },
  },
  slug: "my-app",
  websiteDomain: "example.com",
};

const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

const app = createApp(App);

app.use(configPlugin, { config });
app.use(sentry, { config, router });
app.use(router);

app.mount("#app");
```

The Sentry plugin automatically tracks route transitions and propagates traces to your API domain.
