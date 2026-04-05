---
name: package-full
description: Run the full analysis, documentation, and test-writing pipeline for a Vue 3 package.
argument-hint: [package-path]
effort: high
---

# Full Package Pipeline

Run the complete analysis, documentation, and testing pipeline for: `$ARGUMENTS`

If no path is provided, use the current working directory.

Follow the shared conventions in `.claude/skills/CONVENTIONS.md`. Read that file before starting.

This skill runs four phases in sequence. Complete each phase fully before starting the next. All phases operate on the same package directory.

---

## Phase 1: Analyze the Package

Use the Glob tool to find all `.ts` and `.vue` files in `src/`, then use the Read tool to read each one. Also read these files if they exist:

- `package.json`
- `README.md`
- `FEATURES.md`
- `GUIDE.md`
- Any existing tests in `src/__test__/`

From these files, identify: dependencies, exports, types, components, composables, plugins, provide/inject keys, defaults, and conditional logic.

### Classify Code — "Ours" vs "Theirs"

Go through each function, component, and code block. Classify:

- **"Ours"**: Logic we wrote — conditionals, defaults, provide/inject setup, option merging, transformations, validation, composables, Pinia store actions with business logic, computed properties with logic, utility functions, emit handlers, route guards, error handling
- **"Theirs"**: Direct calls to third-party libraries with no transformation

### Vue-Specific Constructs to Identify

- **Plugin `install()` logic** — what gets `app.provide()`'d, `app.component()`'d, `app.use()`'d
- **Composables** — every `useX()`: what it injects, state it manages, what it returns
- **Component API surface** — for each `.vue` file: props (types, defaults, validators), emits, slots (named + scoped), expose
- **Pinia stores** — state, getters, actions
- **Module augmentation** — `declare module` blocks extending sibling types
- **Route injection** — any `router.addRoute()` calls
- **Provide/inject keys** — every `Symbol.for()` key and what it carries

### Passthrough Analysis

For each dependency the package wraps, determine:

1. Are all config options passed through?
2. Do we transform, filter, or override any options?
3. Do we restrict any base library features?
4. What do we add on top?

Classify each as: **FULL PASSTHROUGH**, **PARTIAL PASSTHROUGH**, or **MODIFIED**.

### Summary

Print a structured summary listing:

- Every function/export with a one-line description
- Every provide key registered (with the Symbol and what it carries)
- Every global component registered via `app.component()`
- Every composable exported (with return type summary)
- Every Pinia store action
- Every module augmentation
- Every conditional branch (feature flags, enable/disable logic)
- Default values
- Component API surfaces (props, emits, slots per `.vue` file)

---

## Phase 2: Write FEATURES.md and GUIDE.md

### FEATURES.md

Create (or update) `FEATURES.md` in the package root. This is a **structured feature inventory consumed by test generation** (Phase 4).

Add this comment as the first line:

```
<!-- Structured feature inventory — used by automated test generation. Developer docs: see GUIDE.md -->
```

Rules:

1. Only list features our code adds — not base library features.
2. Number every feature sequentially.
3. Group features under category headings (`##`).
4. Add a code example ONLY if needed to show usage.
5. Keep code examples minimal.

### GUIDE.md

Create (or update) `GUIDE.md` in the package root. This is the **comprehensive developer guide**.

Use this structure (omit sections that don't apply):

```markdown
# {package-name} — Developer Guide

## Installation

{npm and pnpm install commands, plus monorepo dev commands}

## Setup

{Complete working setup once — app.use() with config for plugins, or import for component libraries. All later examples assume this.}

## Base Libraries

{One subsection per wrapped dependency with passthrough classification. Link to their docs. Only describe what we change/add.}

## Features

{One subsection per feature with description and code example. Component features must show both <script setup> and <template>.}

## Use Cases

{Practical scenarios showing how features combine to solve real problems.}
```

Rules:

1. Cover every feature. Check against FEATURES.md to ensure nothing is missed.
2. Do not repeat base library docs — link to them.
3. Code examples required for every feature and use case.
4. Show setup once, don't repeat it.
5. Use cases should be realistic.
6. Component examples must show both `<script setup>` and `<template>` when relevant.

---

## Phase 3: Write README.md

Write a `README.md` aimed at developers deciding whether to adopt this package.

The README also captures **design conventions** — "you must / you should not" rules the package imposes on callers. If the existing README has these, preserve them.

### Key Features

From the Phase 1 analysis, pick high-level features:

- Collapse related items into single bullets
- Aim for 5-15 bullet points
- Focus on capabilities, not implementation

### Structure

Use this template (omit sections that don't apply):

```markdown
# {package-name}

{One-line description.}

## Why This Package?

{2-4 sentences on the problem this solves.}

## What You Get

### {Base Library} — {Full Passthrough | Partial Passthrough | Modified}

{Classification-appropriate description + link to their docs.}

### Added by This Package

- {feature bullets}

-> [Full feature list](FEATURES.md) | [Developer guide](GUIDE.md)

## Usage Guidelines

{Only if opinionated conventions exist. Omit otherwise.}

## Requirements

{Peer deps and sibling @prefabs.tech packages. Note if pinia or vue-router required.}

## Quick Start

{Minimal setup, under 20 lines.}

## Installation

{npm and pnpm commands.}
```

Rules:

1. Do not repeat base library docs — link to them.
2. List only the delta for partial/modified passthroughs.
3. Keep the feature list high-level.
4. Preserve existing design conventions.

---

## Phase 4: Write and Run Tests

Read `.claude/skills/CONVENTIONS.md` again — especially the **Testing** and **Known Vue 3 Gotchas** sections.

### What to Test

Use `FEATURES.md` (written in Phase 2) as your primary guide. For each feature:

| Code pattern                        | Test? | Test type     |
| ----------------------------------- | ----- | ------------- |
| Component renders with props        | YES   | Snapshot      |
| Prop defaults/validators            | YES   | Component     |
| Computed properties with logic      | YES   | Component     |
| Slot rendering (named/scoped)       | YES   | Component     |
| Emit behavior                       | YES   | Component     |
| Conditional rendering (v-if/v-show) | YES   | Component     |
| Composable logic                    | YES   | Unit          |
| Utility functions                   | YES   | Unit          |
| Plugin `install()` behavior         | YES   | Component     |
| Pinia store actions with logic      | YES   | Unit          |
| Options passthrough to base library | YES   | One test only |
| CSS classes/styling                 | NO    | —             |
| Type definitions                    | NO    | —             |
| Direct re-exports                   | NO    | —             |

### Write Tests

Create test files organized by type:

- **Snapshot tests:** `src/__test__/snapshot/{ComponentName}.test.ts`
- **Component tests:** `src/__test__/component/{ComponentName}.test.ts`
- **Unit tests:** `src/__test__/unit/{name}.test.ts`

Snapshot test pattern:

```typescript
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Component from "../../ComponentName/Index.vue";

describe("ComponentName", () => {
  it("matches snapshot with default props", () => {
    const wrapper = mount(Component);

    expect(wrapper.element).toMatchSnapshot();
  });
});
```

Component behavior test pattern:

```typescript
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import Component from "../../ComponentName/Index.vue";

describe("ComponentName", () => {
  it("description of behavior", () => {
    const wrapper = mount(Component, {
      props: { /* props */ },
      slots: { /* slots */ },
    });

    // assertions on wrapper
  });
});
```

Unit test pattern:

```typescript
import { describe, expect, it } from "vitest";

import { utilFunction } from "../../utilities";

describe("utilFunction", () => {
  it("description", () => {
    expect(utilFunction(input)).toBe(expected);
  });
});
```

Rules:

- Use `@vue/test-utils` `mount()`. Do NOT mock the Vue mount process.
- Do NOT mock base-library components. Mock only our own modules.
- Name tests by behavior.

What NOT to test:

- Base library output for various inputs
- TypeScript types at runtime
- CSS rendering / visual appearance
- Third-party component internal behavior
- Invalid inputs TypeScript prevents

### Run and Fix

1. Run `pnpm --filter {package-name} test` to execute the tests.
2. If tests fail, read the error and fix the test or assertion.
3. Do not change source code to make tests pass.
4. All tests must pass before you are done.
5. If snapshot tests fail on first run, that's expected — snapshots are being created.

---

## Output Summary

When all four phases are complete, print:

- Number of features documented in FEATURES.md
- Number of features covered in GUIDE.md
- Number of use cases in GUIDE.md
- Passthrough classifications per dependency
- Number of base library sections in README.md
- Number of high-level features in README.md
- Whether Usage Guidelines section was written
- Number of snapshot tests written
- Number of component tests written
- Number of unit tests written
- Test results (pass/fail)
- Any concerns found
