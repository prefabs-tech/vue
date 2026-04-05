---
name: write-developer-docs
description: Create or update README.md for a Vue 3 package, aimed at developers evaluating whether to use the package.
argument-hint: [package-path]
effort: medium
---

# Write Developer-Facing Documentation (README.md)

Write the README for the package at: `$ARGUMENTS`

If no path is provided, use the current working directory.

Follow the shared conventions in `.claude/skills/CONVENTIONS.md`.

---

## Step 0: Gather Context

If `/analyze-package` was already run in this conversation, use the passthrough analysis and feature summary from that output.

If it was NOT run, gather the information yourself:

1. Use Glob to find all `.ts` and `.vue` files in `src/`, then Read each one.
2. Read `package.json` for name, description, dependencies, peer dependencies.
3. Read `README.md`, `FEATURES.md`, and `GUIDE.md` if they exist.
4. Perform the classification and passthrough analysis described below before writing.

---

## What This Skill Produces

A `README.md` aimed at developers deciding whether to adopt this package. It answers: "What do I get, how should I use it, and where do I learn more?"

There are three distinct layers of documentation:

- **README.md** — landing page + opinionated design conventions (this file)
- **GUIDE.md** — comprehensive developer guide: passthrough analysis, every feature with examples, use cases
- **FEATURES.md** — structured feature inventory for automated test generation

The README is richer than just a landing page. It also captures **design conventions** — the "you must / you should not" rules the package imposes on callers. These are NOT recipes (GUIDE.md covers those) and NOT features (FEATURES.md covers those). They are the package's opinionated contract with the caller, e.g. "vue-config must be installed before any other @prefabs.tech plugin", "always provide the full AppConfig object, not partial config". If the existing README has this kind of content, preserve it. If it doesn't, look for it in the analysis and add it.

---

## Step 1: Classify Each Dependency

Using the analysis (from `/analyze-package` or your own reading), classify each wrapped dependency into one of:

| Classification          | Meaning                                                                               | README treatment                                                      |
| ----------------------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **Full passthrough**    | All config options forwarded unmodified. Types imported from base library.            | Link to their docs. One sentence: "All options supported."            |
| **Partial passthrough** | Most options forwarded, but we modify, default, or restrict some.                     | Link to their docs. List only what we change or restrict.             |
| **Modified**            | We significantly transform options, restrict features, or impose our own API surface. | Describe what's available and what's different from the base library. |

If the package has no wrapped dependencies (pure custom code), skip the dependency sections entirely.

---

## Step 2: Identify Key Features

From the analysis, pick the **high-level features** our code adds. These are not the exhaustive FEATURES.md list — group and summarize:

- Collapse related items (e.g., 5 form input components -> "20+ form input components with validation")
- Aim for 5-15 bullet points that a scanning developer can absorb in 30 seconds
- Focus on capabilities, not implementation details

---

## Step 3: Read Existing Files

Read these files if they exist in the package (skip any already read):

- `README.md` — to preserve any existing content worth keeping (e.g., "Why this package?" sections, Usage Guidelines)
- `package.json` — for the package name, description, dependencies, peer dependencies, and repository URL
- `FEATURES.md` and `GUIDE.md` — to link to them

---

## Step 4: Write README.md

Use this structure. Omit sections that don't apply (e.g., no "Base Libraries" section for pure component packages).

```markdown
# {package-name}

{One-line description from package.json, or write a better one if it's generic.}

## Why This Package?

{Keep existing "Why this package?" content if it exists and is good. Otherwise write 2-4 sentences explaining the problem this solves and why a developer would use it instead of wiring things up themselves.}

## What You Get

### {Base Library 1} — {Full Passthrough | Partial Passthrough | Modified}

{For FULL: one sentence + link}
All configuration options from [{library name}]({docs-url}) are supported and passed through unchanged.

{For PARTIAL: one sentence + link + delta list}
Most configuration options from [{library name}]({docs-url}) are supported. This plugin modifies:

- **{option}** — {what we do differently}
- **{option}** — {what we restrict or default}

{For MODIFIED: describe what's available}
Wraps [{library name}]({docs-url}) with a different configuration surface:

- {what's different}

### Added by This Package

- {High-level feature bullet}
- {High-level feature bullet}
- ...

-> [Full feature list](FEATURES.md) | [Developer guide](GUIDE.md)

## Usage Guidelines

{Only include this section if the package imposes opinionated conventions on callers — rules they must follow for the package to work correctly or safely. These are NOT recipes. They are the contract.}

{Examples of what belongs here:}

- {A "do this / not that" rule with a brief wrong/correct code example}
- {A "you must always X" constraint with a one-line explanation of why}
- {A "never do Y" rule the package relies on}

{If no such conventions exist, omit this section entirely.}

## Requirements

{List peer dependencies and sibling @prefabs.tech packages that must be app.use()'d first. Note if pinia or vue-router are required.}

## Quick Start

{Minimal setup code — imports, app.use(), basic component usage. Keep it under 20 lines. Do not repeat what GUIDE.md covers in detail.}

## Installation

Install with npm:

\`\`\`bash
npm install {package-name}
\`\`\`

Install with pnpm:

\`\`\`bash
pnpm add {package-name}
\`\`\`
```

### Rules

1. **Do not repeat base library documentation.** Link to it. Developers know how to click.
2. **List only the delta** for partial/modified passthroughs — what we change, not what we preserve.
3. **Keep the feature list high-level.** FEATURES.md has the details. README sells the package.
4. **Use links to FEATURES.md and GUIDE.md** instead of duplicating recipes and feature lists.
5. **Preserve design conventions.** If the existing README has a "Usage Guidelines" section, "do this / not that" patterns, or "you must / never do" rules — keep them. Do not strip them on the grounds that GUIDE.md exists. They serve a different purpose.
6. **Code examples in the Usage Guidelines section are appropriate** — a short wrong/correct comparison is worth more than a paragraph. Keep them concise (under 10 lines each).
7. **Code examples in Quick Start should be minimal** — just enough to show the setup works. GUIDE.md has the full recipes.

---

## Output Summary

When done, print:

- Number of base library sections written (with their classifications)
- Number of high-level features listed
- Whether FEATURES.md and GUIDE.md exist (for linking)
