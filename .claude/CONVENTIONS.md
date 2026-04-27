# Project Conventions

Rules that apply across all skills. Each SKILL.md references this file instead of repeating these.

---

## Scope

- **Stay inside the target package directory.** Do not read files outside of it unless explicitly told to.
- **Do not invent features.** Only document or test what source code confirms exists.

## Code Examples

- Use **TypeScript** in all code examples.
- When showing component usage, include both `<script setup lang="ts">` and `<template>` sections.
- Keep examples minimal — just enough to show the point, no boilerplate.

## Testing

### General Rules

- **Use `@vue/test-utils` `mount()` or `shallowMount()`.** Do NOT mock the Vue mount process.
- **Do NOT mock base-library components** (e.g., vee-validate's `Field`, tanstack's `FlexRender`, vue-i18n's `useI18n`). The point of integration tests is to catch breakage from dependency upgrades. Mock only our own modules (API calls, stores we authored).
- **Use Vitest** (`import from "vitest"`). The project already has it configured.
- **Test environment is jsdom** (configured in each package's test script).
- **Test what WE wrote, not what third-party libraries do.** Ask: "Does this verify code our team wrote, or that a third-party library works?"
- **Name tests by behavior**, not implementation. GOOD: `"renders footer slot when provided"` BAD: `"line 14 v-if works"`

### Test File Organization

Follow the existing test script conventions. Each package has separate scripts for each test type:

- **Snapshot tests:** `src/__test__/snapshot/{Name}.test.ts`
- **Component tests:** `src/__test__/component/{Name}.test.ts`
- **Unit tests:** `src/__test__/unit/{name}.test.ts`

This matches the package.json test scripts:

- `test:snapshot` runs `vitest run snapshot/`
- `test:component` runs `vitest run component/`
- `test:unit` runs `vitest run unit/`
- `test` runs all tests

### When Components Need Sibling Plugins

Many components depend on config, i18n, or pinia being installed. Provide them via `global.plugins` in mount options:

```typescript
import configPlugin from "@prefabs.tech/vue3-config";
import { mount } from "@vue/test-utils";
import { createPinia } from "pinia";

const wrapper = mount(Component, {
  global: {
    plugins: [createPinia(), [configPlugin, { config: testConfig }], router],
    stubs: { RouterLink: RouterLinkStub },
  },
});
```

If multiple test files in the same package need the same config, create a shared test helper (e.g., `src/__test__/helpers.ts`) instead of duplicating config objects.

### Cleanup

- Reset any global state between tests where applicable.
- Unmount components explicitly if testing lifecycle hooks.

### Known Vue 3 Gotchas

These patterns have been validated or are known pitfalls. Follow them to avoid known issues:

1. **`shallowMount` stubs ALL child components** — use `mount` when testing slot content that flows through child components. Use `shallowMount` only for snapshot tests of complex components where child rendering is not under test.

2. **RouterLink requires stubbing** — any component using `<RouterLink>` must either have a real router plugin installed or use `stubs: { RouterLink: RouterLinkStub }` in mount options.

3. **Pinia stores require a pinia instance** — any component using a Pinia store must have `createPinia()` in `global.plugins`, even if the store is not directly under test.

4. **`provide/inject` with `Symbol.for()` in tests** — to test components that use `inject()`, provide the value via `global.provide: { [Symbol.for('key')]: value }` in mount options. Alternatively, install the plugin that provides it via `global.plugins`.

5. **Async component behavior** — when testing components that trigger async operations (API calls, nextTick), use `await wrapper.vm.$nextTick()` or `await flushPromises()` before asserting.

6. **Module augmentation in tests** — packages like vue-i18n and vue-layout augment `AppConfig` from vue3-config. Test configs must include these augmented fields (e.g., `i18n`, `layout`, `user`) or TypeScript will error.

## Base Library Documentation

- **Do not repeat base library documentation in detail.** Link to their docs.
- **For doc links:** use the library's official docs URL. If unsure, search for the npm page: `https://www.npmjs.com/package/{package-name}`, if the page doesn't exist, do not add the link.
- **List only the delta** for partial/modified passthroughs — what we change, not what we preserve.

## Package Types

Different packages require different analysis emphasis:

| Type                 | Examples                                                                                                      | Key constructs to analyze                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Vue plugins          | vue-config, vue-i18n, vue-user                                                                                | `install()`, `provide/inject`, `app.component()`, router injection |
| Component libraries  | vue-ui, vue-form, vue-layout, vue-tanstack-table                                                              | Props, emits, slots, computed, template logic                      |
| Third-party wrappers | vue-config (sentry), vue-form (vee-validate), vue-i18n (vue-i18n), vue-tanstack-table, vue-user (supertokens) | Passthrough analysis, option transformation, API surface wrapping  |
| Pure components      | vue-ui                                                                                                        | No wrapper analysis needed, focus on props/slots/emits             |

A single package can be multiple types (e.g., vue-i18n is both a plugin and a third-party wrapper).

## Reference Packages

- `packages/vue3-config` — has FEATURES.md and GUIDE.md as format references
- `packages/vue3-ui` — has comprehensive component tests as test format reference
