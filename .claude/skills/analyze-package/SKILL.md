---
name: analyze-package
description: Explore a Vue 3 package and produce a structured analysis classifying code as "ours" vs "theirs" with passthrough behavior.
argument-hint: [package-path]
effort: low
---

# Analyze a Vue 3 Package

Analyze the package at: `$ARGUMENTS`

If no path is provided, use the current working directory.

Follow the shared conventions in `.claude/skills/CONVENTIONS.md`.

---

## Step 1: Read the Package

Use the Glob tool to find all `.ts` and `.vue` files in `src/`, then use the Read tool to read each one. Also read these files if they exist:

- `package.json`
- `README.md`
- `FEATURES.md`
- `GUIDE.md`
- Any existing tests in `src/__test__/`

From these files, identify: dependencies, exports, types, components, composables, plugins, provide/inject keys, defaults, and conditional logic.

---

## Step 2: Classify Code — "Ours" vs "Theirs"

Go through each function, component, and code block. Classify:

- **"Ours"**: Logic we wrote — conditionals, defaults, provide/inject setup, option merging, transformations, validation, composables, Pinia store actions with business logic, computed properties with logic, utility functions, emit handlers, route guards, error handling
- **"Theirs"**: Direct calls to third-party libraries with no transformation (e.g., just passing options through to `createI18n` or `Sentry.init`)

### Vue-Specific Constructs to Identify

For each construct found, note it in the analysis:

- **Plugin `install()` logic** — what gets `app.provide()`'d, what gets `app.component()`'d globally, what gets `app.use()`'d
- **Composables** — every `useX()` function: what it injects, what state it manages, what it returns
- **Component API surface** — for each `.vue` file: props (with types, defaults, validators), emits (with payload types), slots (named and scoped with scope types), expose
- **Pinia stores** — state shape, getters, actions
- **Module augmentation** — `declare module` blocks that extend sibling package types (e.g., extending `AppConfig`)
- **Route injection** — any `router.addRoute()` or route setup in `install()`
- **Provide/inject keys** — every `Symbol.for()` key and what value it carries

---

## Step 3: Passthrough Analysis

For each dependency the package wraps, answer:

1. **Are all config options passed through?** Check if types come from the base library or if we define a subset.
2. **Do we transform, filter, or override any options?** Look for modifications before passing to the base library.
3. **Do we restrict any base library features?**
4. **What do we add on top?** List every feature our code adds.

### Output format

Print a section titled `## Base Library Passthrough Analysis` with a subsection per dependency:

```
### @scope/library-name — [FULL PASSTHROUGH | PARTIAL PASSTHROUGH | MODIFIED]

- Options type: [imported from base library | custom subset]
- Options passed: [unmodified | transformed — describe how]
- Features restricted: [none | list them]
- Features added: [list them]
```

If the package has no wrapped dependencies (pure custom code), print: "No wrapped dependencies — this is a pure component/utility package."

---

## Step 4: Summary

Print a structured summary listing:

- Every function/export with a one-line description
- Every provide key registered (with the Symbol and what it carries)
- Every global component registered via `app.component()`
- Every composable exported (with return type summary)
- Every Pinia store action (with one-line description)
- Every module augmentation
- Every conditional branch (feature flags, enable/disable logic)
- Default values
- Component API surfaces (props, emits, slots per `.vue` file)

This analysis stays in conversation context for use by downstream documentation or test-writing steps.
