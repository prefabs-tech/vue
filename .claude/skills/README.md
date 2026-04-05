# Skills

Slash commands for analyzing, documenting, and testing Vue 3 packages.

All skills share conventions defined in [CONVENTIONS.md](CONVENTIONS.md) — testing rules, code example standards, Vue 3 gotchas, and base library documentation patterns.

## Available Skills

| Skill                            | Description                                               |
| -------------------------------- | --------------------------------------------------------- |
| `/analyze-package <path>`        | Explore source code and classify it as "ours" vs "theirs" |
| `/write-docs <path>`             | Create/update FEATURES.md and GUIDE.md                    |
| `/write-developer-docs <path>`   | Create/update README.md for developer evaluation          |
| `/write-tests <path>`            | Write and run unit tests                                  |
| `/package-developer-docs <path>` | Run analyze → developer-docs in sequence                  |
| `/package-full <path>`           | Run analyze → docs → developer-docs → tests in sequence   |

## Usage

### Full pipeline (new package)

```
/package-full packages/vue-config
```

Runs analyze → docs → developer-docs → tests in order. Use this when starting from scratch.

### Individual skills

Run any skill standalone:

```
/analyze-package packages/vue-config
/write-docs packages/vue-config
/write-developer-docs packages/vue-config
/write-tests packages/vue-config
```

### Chaining in one conversation

Skills share context within the same conversation. Running `/analyze-package` first means downstream skills reuse the analysis instead of re-reading everything.

```
/analyze-package packages/vue-config        # explore and classify code
/write-docs packages/vue-config             # uses analysis above
/write-developer-docs packages/vue-config   # uses analysis above
/write-tests packages/vue-config            # uses FEATURES.md from write-docs
```

### Common scenarios

| Scenario                           | What to run                        |
| ---------------------------------- | ---------------------------------- |
| New package, need everything       | `/package-full`                    |
| Just need README for evaluation    | `/package-developer-docs`          |
| Docs exist, just need tests        | `/write-tests`                     |
| Source changed, update docs only   | `/write-docs`                      |
| Want to understand a package first | `/analyze-package`                 |
| Tests broke after dependency bump  | `/write-tests` (fix/rewrite tests) |

## Inputs and outputs

| Skill                   | Reads                                           | Produces                                |
| ----------------------- | ----------------------------------------------- | --------------------------------------- |
| `/analyze-package`      | `src/**/*.{ts,vue}`, `package.json`, `README.md` | Analysis summary (conversation context) |
| `/write-docs`           | Source files or prior analysis                  | `FEATURES.md`, `GUIDE.md`              |
| `/write-developer-docs` | Prior analysis                                  | `README.md`                             |
| `/write-tests`          | `FEATURES.md`, `src/**/*.{ts,vue}`              | `src/__test__/*.test.ts`                |
