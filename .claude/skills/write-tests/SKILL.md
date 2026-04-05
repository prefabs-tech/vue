---
name: write-tests
description: Write unit, component, and snapshot tests for a Vue 3 package. Uses FEATURES.md as the "what to test" guide and focuses on verifying custom code only.
argument-hint: [package-path]
effort: medium
---

# Write Tests for a Vue 3 Package

Write tests for the package at: `$ARGUMENTS`

If no path is provided, use the current working directory.

Follow the shared conventions in `.claude/skills/CONVENTIONS.md` — especially the **Testing** and **Known Vue 3 Gotchas** sections. Read that file before writing any tests.

---

## Step 1: Understand What to Test

Read these files in the target package:

- `FEATURES.md` — this is your primary guide for what to test
- All `.ts` and `.vue` files in `src/` — to understand the implementation
- `package.json` — to identify dependencies (base libraries we wrap)

If `FEATURES.md` does not exist, read source files to identify testable features yourself.

For each feature, decide if it needs a test and what type:

| Code pattern                        | Test? | Test type     | Why                                              |
| ----------------------------------- | ----- | ------------- | ------------------------------------------------ |
| Component renders with props        | YES   | Snapshot      | Catch unintended markup changes                  |
| Prop defaults                       | YES   | Component     | Verify defaults match documentation              |
| Prop validators                     | YES   | Component     | Verify accepted/rejected values                  |
| Computed properties with logic      | YES   | Component     | Verify derived state                             |
| Slot rendering (named/scoped)       | YES   | Component     | Verify slot contracts                            |
| Emit behavior                       | YES   | Component     | Verify events fire correctly with payloads       |
| Conditional rendering (v-if/v-show) | YES   | Component     | Every branch we wrote needs coverage             |
| Composable logic                    | YES   | Unit          | Test in isolation without mount                  |
| Utility functions                   | YES   | Unit          | Pure functions, easy to test                     |
| Plugin `install()` behavior         | YES   | Component     | Verify provide/inject and component registration |
| Pinia store actions with logic      | YES   | Unit          | Test with real pinia, mock only HTTP calls       |
| Options passthrough to base library | YES   | One test only | Verify the wiring works, not the library itself  |
| CSS classes/styling                 | NO    | —             | Visual concerns, not logic                       |
| Type definitions                    | NO    | —             | Types are compile-time only                      |
| Direct re-exports                   | NO    | —             | Nothing to break                                 |
| Third-party component rendering     | NO    | —             | Their code                                       |

---

## Step 2: Write Tests

### File locations

Create test files organized by type:

- **Snapshot tests:** `src/__test__/snapshot/{ComponentName}.test.ts`
- **Component tests:** `src/__test__/component/{ComponentName}.test.ts`
- **Unit tests:** `src/__test__/unit/{name}.test.ts`

If `src/__test__/` does not exist, create it along with the appropriate subdirectories.

### Snapshot test pattern

Use for every component to catch unintended markup changes. Mount with minimal required props.

```typescript
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Component from "../../ComponentName/Index.vue";

describe("ComponentName", () => {
  it("matches snapshot with default props", () => {
    const wrapper = mount(Component);

    expect(wrapper.element).toMatchSnapshot();
  });

  it("matches snapshot with custom props", () => {
    const wrapper = mount(Component, {
      props: {
        title: "Test Title",
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
```

### Component behavior test pattern

Use for testing props, slots, emits, conditional rendering, and computed properties.

```typescript
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Component from "../../ComponentName/Index.vue";

describe("ComponentName", () => {
  it("renders title prop as heading", () => {
    const wrapper = mount(Component, {
      props: { title: "Hello" },
    });

    expect(wrapper.find(".card-title").text()).toBe("Hello");
  });

  it("renders default slot content", () => {
    const wrapper = mount(Component, {
      slots: {
        default: "<p>Body content</p>",
      },
    });

    expect(wrapper.find(".card-body").html()).toContain("Body content");
  });

  it("hides footer when no footer slot provided", () => {
    const wrapper = mount(Component);

    expect(wrapper.find(".card-footer").exists()).toBe(false);
  });

  it("emits close event when close button clicked", async () => {
    const wrapper = mount(Component, {
      props: { closable: true },
    });

    await wrapper.find(".close-button").trigger("click");

    expect(wrapper.emitted("close")).toHaveLength(1);
  });
});
```

### Unit test pattern

Use for composables, utility functions, and Pinia store actions.

```typescript
import { describe, expect, it } from "vitest";

import { utilityFunction } from "../../utilities";

describe("utilityFunction", () => {
  it("description of behavior", () => {
    const result = utilityFunction(input);

    expect(result).toBe(expectedOutput);
  });
});
```

### Composable test pattern

For composables that use `inject()`, test them through a component that uses the composable, or provide the injected values:

```typescript
import { mount } from "@vue/test-utils";
import { defineComponent } from "vue";
import { describe, expect, it } from "vitest";

import { useConfig } from "../../index";

describe("useConfig", () => {
  it("returns the provided config", () => {
    const testConfig = { appName: "Test", slug: "test" };

    const TestComponent = defineComponent({
      setup() {
        const config = useConfig();
        return { config };
      },
      template: "<div>{{ config.appName }}</div>",
    });

    const wrapper = mount(TestComponent, {
      global: {
        provide: {
          [Symbol.for("dzangolab.vue-config.config")]: testConfig,
        },
      },
    });

    expect(wrapper.text()).toBe("Test");
  });
});
```

### Plugin test pattern

For testing plugin `install()` behavior:

```typescript
import { mount } from "@vue/test-utils";
import { createApp, defineComponent, inject } from "vue";
import { describe, expect, it } from "vitest";

import plugin from "../../index";

describe("plugin install", () => {
  it("provides config via Symbol key", () => {
    const testConfig = { appName: "Test", slug: "test" };

    const TestComponent = defineComponent({
      setup() {
        const config = inject(Symbol.for("dzangolab.vue-config.config"));
        return { config };
      },
      template: "<div>{{ config?.appName }}</div>",
    });

    const wrapper = mount(TestComponent, {
      global: {
        plugins: [[plugin, { config: testConfig }]],
      },
    });

    expect(wrapper.text()).toBe("Test");
  });
});
```

### When components need sibling plugins

Many components depend on `@prefabs.tech/vue3-config`, pinia, or vue-router. Provide them via `global.plugins`:

```typescript
import configPlugin from "@prefabs.tech/vue3-config";
import { RouterLinkStub, mount } from "@vue/test-utils";
import { createPinia } from "pinia";

const wrapper = mount(Component, {
  global: {
    plugins: [
      createPinia(),
      [configPlugin, { config: testConfig }],
    ],
    stubs: {
      RouterLink: RouterLinkStub,
    },
  },
});
```

If multiple test files need the same setup, create a shared helper at `src/__test__/helpers.ts`:

```typescript
import configPlugin from "@prefabs.tech/vue3-config";
import { createPinia } from "pinia";

export const testConfig = {
  appName: "Test App",
  slug: "test-app",
  // add fields as needed for the package
};

export const defaultGlobalPlugins = [
  createPinia(),
  [configPlugin, { config: testConfig }],
];
```

### Rules

- **Use `@vue/test-utils` `mount()`.** Do NOT mock the Vue mount process.
- **Do NOT mock base-library components.** Mock only our own modules (API calls, HTTP).
- **Name tests by behavior**, not implementation.
- **One snapshot test per component** with default props, plus additional snapshots for significant prop variations.

### Assertions for common Vue patterns

| Pattern                       | Assertion                                                              |
| ----------------------------- | ---------------------------------------------------------------------- |
| Text content                  | `wrapper.find('.selector').text()` or `wrapper.text()`                 |
| HTML content                  | `wrapper.find('.selector').html()`                                     |
| Element exists                | `wrapper.find('.selector').exists()`                                   |
| Element hidden (v-if=false)   | `wrapper.find('.selector').exists()` returns `false`                   |
| CSS class applied             | `wrapper.find('.el').classes()` contains class name                    |
| Prop value reflected          | `wrapper.find('.el').text()` or `wrapper.find('.el').attributes()`     |
| Emit fired                    | `wrapper.emitted('eventName')` is truthy                              |
| Emit payload                  | `wrapper.emitted('eventName')![0]` contains expected payload          |
| Click triggers behavior       | `await wrapper.find('.el').trigger('click')` then assert               |
| Slot renders                  | Mount with `slots: { name: '<p>content</p>' }` then find content      |
| Scoped slot                   | Mount with `slots: { name: (props) => h('div', props.item) }`         |
| Provide/inject works          | Mount with `global: { provide: { [key]: value } }` then assert output |

### What NOT to test

- That vee-validate validates correctly for various inputs
- That vue-i18n translates correctly for different locales
- That @tanstack/vue-table sorts or paginates correctly
- That Sentry captures errors correctly
- That supertokens auth flow works correctly
- TypeScript types at runtime
- CSS rendering / visual appearance
- Third-party component internal behavior
- Behavior with invalid inputs that TypeScript prevents
- Do not aim for 100% coverage — aim for testing every code path WE wrote

---

## Step 3: Run and Fix

1. Run `pnpm --filter {package-name} test` to execute all tests
2. If tests fail, read the error carefully and fix the test or assertion
3. Do not change source code to make tests pass — tests verify existing behavior
4. All tests must pass before you are done
5. If snapshot tests fail on first run, that's expected — the snapshots are being created

---

## Output Summary

When done, print:

- Number of snapshot tests written
- Number of component tests written
- Number of unit tests written
- Test results (pass/fail)
- Any concerns found (options silently dropped, missing passthrough, dead code, etc.)
