---
name: package-developer-docs
description: Run analysis then generate developer-facing README.md for a Vue 3 package.
argument-hint: [package-path]
effort: medium
---

# Package Developer Docs Pipeline

Generate developer-facing documentation for: `$ARGUMENTS`

If no path is provided, use the current working directory.

Follow the shared conventions in `.claude/skills/CONVENTIONS.md`.

This skill runs two phases in sequence. Complete each phase fully before starting the next.

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
- **Provide/inject keys** — every `Symbol.for()` key and what it carries

### Passthrough Analysis

For each dependency the package wraps, answer:

1. **Are all config options passed through?** Check if types come from the base library or if we define a subset.
2. **Do we transform, filter, or override any options?**
3. **Do we restrict any base library features?**
4. **What do we add on top?**

Classify each dependency as: **FULL PASSTHROUGH**, **PARTIAL PASSTHROUGH**, or **MODIFIED**.

### Summary

Produce a structured summary listing:

- Every function/export with a one-line description
- Every provide key registered
- Every global component registered
- Every composable exported
- Every conditional branch (feature flags, enable/disable logic)
- Default values
- Component API surfaces (props, emits, slots)

---

## Phase 2: Write README.md

Using the analysis from Phase 1, write a `README.md` aimed at developers deciding whether to adopt this package. It answers: "What do I get, how should I use it, and where do I learn more?"

There are three distinct layers of documentation:

- **README.md** — landing page + opinionated design conventions (this file)
- **GUIDE.md** — comprehensive developer guide
- **FEATURES.md** — structured feature inventory for automated test generation

The README also captures **design conventions** — the "you must / you should not" rules the package imposes on callers. If the existing README has this kind of content, preserve it.

### Identify Key Features

From the analysis, pick the **high-level features** our code adds:

- Collapse related items (e.g., 5 form inputs -> "20+ form input components with validation")
- Aim for 5-15 bullet points a scanning developer can absorb in 30 seconds
- Focus on capabilities, not implementation details

### Write README.md

Use this structure. Omit sections that don't apply.

```markdown
# {package-name}

{One-line description from package.json, or write a better one if it's generic.}

## Why This Package?

{Keep existing content if good. Otherwise 2-4 sentences on the problem this solves.}

## What You Get

### {Base Library} — {Full Passthrough | Partial Passthrough | Modified}

{For FULL: one sentence + link. "All options supported."}
{For PARTIAL: link + delta list of what we change/restrict.}
{For MODIFIED: describe what's available and different.}

### Added by This Package

- {High-level feature bullet}
- ...

-> [Full feature list](FEATURES.md) | [Developer guide](GUIDE.md)

## Usage Guidelines

{Only if the package imposes opinionated conventions on callers. Omit if none exist.}

## Requirements

{Peer dependencies and sibling @prefabs.tech packages that must be app.use()'d first. Note if pinia or vue-router are required.}

## Quick Start

{Minimal setup code, under 20 lines. Show app.use() for plugins or import for component libraries.}

## Installation

\`\`\`bash
npm install {package-name}
\`\`\`

\`\`\`bash
pnpm add {package-name}
\`\`\`
```

### Rules

1. Do not repeat base library documentation — link to it.
2. List only the delta for partial/modified passthroughs.
3. Keep the feature list high-level. FEATURES.md has details.
4. Use links to FEATURES.md and GUIDE.md instead of duplicating content.
5. Preserve existing design conventions and Usage Guidelines.
6. Code examples in Quick Start should be minimal. GUIDE.md has full recipes.

---

## Output Summary

When both phases are complete, print:

- Passthrough classifications per dependency
- Number of base library sections written
- Number of high-level features listed
- Whether FEATURES.md and GUIDE.md exist (for linking)
