---
name: write-docs
description: Create or update FEATURES.md and GUIDE.md for a Vue 3 package based on source code analysis.
argument-hint: [package-path]
effort: medium
---

# Write Documentation for a Vue 3 Package

Document the package at: `$ARGUMENTS`

If no path is provided, use the current working directory.

Follow the shared conventions in `.claude/skills/CONVENTIONS.md`.

If `/analyze-package` was already run in this conversation, use that analysis. Otherwise, read all source files in `src/` (both `.ts` and `.vue`) and `package.json` first.

---

## Part 1: Create or Update FEATURES.md

Create (or update if it exists) a `FEATURES.md` file in the package root.

This file is a **structured feature inventory consumed by automated test generation** (`/write-tests`). It is NOT the developer-facing documentation — that's GUIDE.md.

Add this comment as the first line of FEATURES.md:

```
<!-- Structured feature inventory — used by automated test generation. Developer docs: see GUIDE.md -->
```

### Rules

1. **Only list features our code adds.** Do not list features of base libraries — developers can read those libraries' official docs.
2. Number every feature sequentially.
3. Group features under category headings (`##`).
4. Add a code example to a feature ONLY if it needs one to show usage. Do not add examples to self-explanatory features.
5. Code examples should be minimal — just enough to show the feature, no boilerplate.

### How to identify features

A "feature" is any behavior our code provides. Extract from source code:

- Plugin install behavior (what it provides, registers, configures)
- Props with validators or non-trivial defaults
- Named and scoped slots with their contracts
- Composable return values and behavior
- Pinia store actions with business logic
- Provide/inject contracts (what keys exist and what they carry)
- Module augmentation of sibling packages
- Route guard or route injection behavior
- Conditional behaviors (enable/disable flags, feature toggles)
- Type exports and module augmentations
- Utility functions exposed to consumers
- Error handling and logging we add
- Default values we provide (especially when overriding base library defaults)

---

## Part 2: Create or Update GUIDE.md

Create (or update if it exists) a `GUIDE.md` file in the package root. This is the **comprehensive developer guide** — the main documentation file for developers using this package. It covers installation, base library passthrough details, every feature with code examples, and practical use cases.

This is different from:

- **FEATURES.md** — structured inventory for test generation (not meant for humans to read end-to-end)
- **README.md** — landing page for scanning (produced by `/write-developer-docs`)

### Structure

Use the following template. Omit sections that don't apply (e.g., no "Base Libraries" section for packages with no wrapped dependencies).

```markdown
# {package-name} — Developer Guide

## Installation

### For package consumers

\`\`\`bash
npm install {package-name}
\`\`\`

\`\`\`bash
pnpm add {package-name}
\`\`\`

### For monorepo development

\`\`\`bash
pnpm install
pnpm --filter {package-name} test
pnpm --filter {package-name} build
\`\`\`

## Setup

{Show a complete, working setup once. For plugins: app.use() with config. For component libraries: import and use in template. State that all subsequent examples assume this setup.}

\`\`\`typescript
// main.ts
import { createApp } from "vue";
import plugin from "{package-name}";

const app = createApp(App);

app.use(plugin, {
  // config options
});

app.mount("#app");
\`\`\`

---

## Base Libraries

{One subsection per wrapped dependency. Skip this entire section if the package wraps nothing.}

### {library} — {Full Passthrough | Partial Passthrough | Modified}

{What this library provides, in one sentence.}

-> **Their docs:** [{library}]({docs-url})

{For FULL: "All config options are passed through unchanged. See their docs for the full API."}

{For PARTIAL: "Most options are passed through. We change:" + delta list of only what we modify/restrict/default.}

{For MODIFIED: "We wrap this library with a different surface:" + describe what's available and different.}

**What we add on top:** {list our additions related to this library}

---

## Features

{One subsection per feature or feature group. Every feature the package provides gets covered here with a description and code example. Group related features under a single heading when it improves readability.}

### {Feature Name}

{What it does, when you'd use it. 1-3 sentences.}

\`\`\`vue
<script setup lang="ts">
// script example
</script>

<template>
  <!-- template example -->
</template>
\`\`\`

---

## Use Cases

{Practical scenarios showing how features combine to solve real problems. Each use case describes a situation a developer might face and shows the solution using this package.}

### {Scenario title}

{1-2 sentence setup: "When you need to X..." or "If your app requires Y..."}

\`\`\`vue
<script setup lang="ts">
// complete solution
</script>

<template>
  <!-- template -->
</template>
\`\`\`
```

### Rules

1. **Cover every feature the package provides.** GUIDE.md must be comprehensive — a developer should not need to read source code to understand what's available. Check against FEATURES.md to ensure nothing is missed.
2. **Do not repeat base library documentation in detail.** Link to their docs. Only describe what we change, restrict, or add on top.
3. **Code examples are required** for every feature and every use case. Keep them minimal but complete enough to copy-paste.
4. **Do not repeat the full setup** in every example. Show setup once at the top, then reference it.
5. **Use cases should be realistic.** Think about what developers actually build with this package. Examples: "Multi-language form with validation", "Protected route with role check", "Feature-flagged UI section".
6. **Component examples must show both `<script setup>` and `<template>`** when the feature involves template usage. For pure utility/composable features, TypeScript-only examples are fine.

### What NOT to include

- Do not repeat the full config object in every example — show setup once
- Do not include deployment/environment-specific config examples
- Do not add explanations for things obvious from the code example

---

## Output Summary

When done, print:

- Number of features documented in FEATURES.md
- Number of features covered in GUIDE.md
- Number of use cases in GUIDE.md
- Number of base library sections in GUIDE.md (with classifications)
