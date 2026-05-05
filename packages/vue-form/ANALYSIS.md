<!-- Package analysis — produced by /analyze-package. Do not edit manually. -->

# Package Analysis: `@prefabs.tech/vue3-form`

## Overview

A Vue 3 form component library that wraps **vee-validate** for field-level validation, **zod** (via `@vee-validate/zod`) for schema construction, **validator.js** for string validation rules, **@vuepic/vue-datepicker** for date picking, and **vue3-dropzone** for file uploads. It exports standalone primitive components (Checkbox, Switch, Radio), vee-validate-integrated input components (TextInput, Email, Password, NumberInput, SelectInput, CheckboxInput, SwitchInput, RadioInput, TextareaInput, DatePicker, Typeahead), composite pickers (Select, CountryPicker, CurrencyPicker, DaysInput), utility components (Form, FormActions, EditableContent, Country, FileInput), and four Zod schema factories.

---

## Base Library Passthrough Analysis

### vee-validate (`Field`, `ErrorMessage`, `Form`) — PARTIAL PASSTHROUGH

- **Options type:** Custom props defined per component; not imported from vee-validate.
- **Options passed:** `name`, `rules` (as `fieldSchema`), `modelValue` are forwarded to `<Field>`. The `<Form>` component wraps vee-validate's `Form` component, forwarding only the `submit` event.
- **Features restricted:** vee-validate's `Form` validation context (e.g., `setErrors`, `validate`) is not directly exposed. Only `resetForm`, `getMeta`, and `getValues` are exposed via `defineExpose`.
- **Features added:**
  - Auto-wires `toTypedSchema(zod schema)` as the `rules` prop on every `<Field>`.
  - Adds CSS validity classes (`invalid`, `valid`) based on `meta.dirty`, `meta.touched`, `meta.valid`.
  - Emits `update:modelValue` for v-model integration alongside vee-validate's `handleChange`.

### zod / `@vee-validate/zod` — MODIFIED

- **Options type:** Accepts a `z.ZodTypeAny` prop (`schema`) per component; if not provided, a built-in schema factory is used.
- **Options passed:** Passed through `toTypedSchema()` to become vee-validate rules.
- **Features restricted:** None — consumers can supply any Zod schema.
- **Features added:**
  - Four built-in schema factories (`emailSchema`, `passwordSchema`, `textSchema`, `numberSchema`) that compose Zod with validator.js refinements and customisable error messages.
  - `SelectInput` generates a dynamic array schema based on `minSelection`/`maxSelection` props when no custom schema is provided.

### validator.js — MODIFIED

- **Options type:** Custom wrapper types: `IsEmailOptions`, `IsTextOptions`, `IsIntOptions`, `StrongPasswordOptions` (mirroring the validator.js originals).
- **Options passed:** Forwarded to `validator.isEmail`, `validator.isEmpty`, `validator.isInt`, `validator.isStrongPassword`.
- **Features restricted:** `textSchema` only uses `isEmpty` (not the full range of validator.js text rules).
- **Features added:**
  - Composed with Zod `.refine()` to produce typed Zod schemas.
  - Password schema merges caller options with a hardcoded default set (`minLength: 8`, all point values).

### `@vuepic/vue-datepicker` — PARTIAL PASSTHROUGH

- **Options type:** Custom props subset; additional attrs forwarded via `v-bind="filteredAttributes"` (strips `class`).
- **Options passed:** `autoApply`, `disabled`, `filters` (wraps `disabledWeekDays`), `formats` (wraps `format`), `modelValue`, `placeholder`, `teleport`, `time-config` (wraps `enableTimePicker`).
- **Features restricted:** Most VueDatePicker props are not explicitly typed but can be passed as attrs.
- **Features added:**
  - vee-validate `Field` integration with `invalid`/`valid` CSS classes.
  - `closeOnScroll` listener attached when `teleport` is enabled (closes date picker on page scroll).

### `vue3-dropzone` (`useDropzone`) — MODIFIED

- **Options type:** Custom `dropzoneOptions` prop passed through; `multiple` and `noDrag` are computed from our props.
- **Options passed:** `multiple`, `noDrag` (derived from `inputMethod === 'button'`), `onDrop`, plus spread of `dropzoneOptions`.
- **Features restricted:** None beyond what `dropzoneOptions` can override.
- **Features added:**
  - Two input methods: `button` (hidden input + ButtonElement) and `dropzone` (drag-and-drop area).
  - `append` vs `update` mode for file accumulation (deduplication logic in append mode).
  - Error code mapping from vue3-dropzone error codes to custom `errorMessages` strings.
  - File list management: add, remove, update (for description editing via `SelectedFile`).
  - Exposes `inputFiles` ref.

### `@prefabs.tech/vue3-ui` — THEIRS (passthrough)

- `DebouncedInput`, `Divider`, `LoadingIcon`, `Tooltip` used directly in `Select.vue` and `Typeahead.vue`.
- `ButtonElement` used directly in `FormActions.vue` and `FileInput.vue`.
- `Card` used directly in `EditableContent.vue`.
- No transformation of these components.

### `@vueuse/core` (`onClickOutside`) — THEIRS (passthrough)

- Used in `Select.vue`, `Typeahead.vue`, `EditableContent.vue` to close dropdowns/menus on outside click. No wrapping logic.

### `@dzangolab/flag-icon-css` — THEIRS (passthrough)

- CSS lazily imported on `onMounted` in `CountryPicker` and `Country` components.

---

## Summary

### Exports

#### Components

| Export            | Classification | Description                                                                                                                                                                                                                             |
| ----------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Form`            | OURS           | Wraps vee-validate `Form`; exposes `resetForm`, `meta`, `getFieldMeta`, `getFieldValue`.                                                                                                                                                |
| `FormActions`     | OURS           | Renders action buttons (default: Submit + Cancel); merges custom actions with defaults; emits dynamic events by action id/label.                                                                                                        |
| `Input`           | OURS           | Generic vee-validate-connected `<input>`; optional Zod schema; configurable type.                                                                                                                                                       |
| `TextInput`       | OURS           | Text `<input>` with built-in `textSchema` (validator.js `isEmpty` check) and customisable error messages.                                                                                                                               |
| `NumberInput`     | OURS           | Number `<input>` with built-in `numberSchema` (validator.js `isInt`); coerces value to `Number` on emit.                                                                                                                                |
| `Email`           | OURS           | Email `<input>` with built-in `emailSchema` (validator.js `isEmail`) and customisable error messages.                                                                                                                                   |
| `Password`        | OURS           | Password `<input>` with show/hide toggle (SVG eye icons); built-in `passwordSchema` (validator.js `isStrongPassword`).                                                                                                                  |
| `TextareaInput`   | OURS           | `<textarea>` with same `textSchema` as TextInput; adds `rows` and `cols` props.                                                                                                                                                         |
| `CheckboxInput`   | OURS           | Single checkbox or checkbox group (from `InputOption[]`); manages checked array; emits `update:checked` for single, `update:modelValue` for group.                                                                                      |
| `Checkbox`        | OURS           | Primitive checkbox input; standalone, no vee-validate integration.                                                                                                                                                                      |
| `SwitchInput`     | OURS           | vee-validate-integrated toggle switch; optional Zod schema.                                                                                                                                                                             |
| `Switch`          | OURS           | Primitive toggle switch with optional on/off labels; no vee-validate integration.                                                                                                                                                       |
| `RadioInput`      | OURS           | vee-validate-integrated radio group; wraps `Radio`.                                                                                                                                                                                     |
| `Radio`           | OURS           | Primitive radio group from `InputOption[]`; supports `vertical`/`horizontal` direction; optional helper text.                                                                                                                           |
| `Select`          | OURS           | Custom fully-featured multiselect dropdown (no third-party base): single/multi-select, debounced search, keyboard navigation, group select, select-all, teleported dropdown with scroll-aware positioning, tooltip for selected labels. |
| `SelectInput`     | OURS           | vee-validate wrapper around `Select`; adds `minSelection`/`maxSelection` array validation; normalizes options.                                                                                                                          |
| `CountryPicker`   | OURS           | Wraps `SelectInput`; builds options from ISO country codes and locale translation maps; supports favorites, groups, include/exclude lists, flag icons (CSS classes or custom `flagsPath`).                                              |
| `Country`         | OURS           | Display-only component showing a country flag + label by country code; supports locale, flagsPath, flagsStyle, flagsPosition.                                                                                                           |
| `CurrencyPicker`  | OURS           | Wraps `SelectInput` with custom search enabled; filters by label/code/symbol; configurable `optionLabelOrder` for how currency fields render.                                                                                           |
| `DatePicker`      | OURS           | Wraps `@vuepic/vue-datepicker` with vee-validate integration; adds `disabledWeekDays`, `enableTimePicker`, `closeOnScroll` when teleported.                                                                                             |
| `DaysInput`       | OURS           | Wraps `NumberInput`; on each value change also emits `update:date` with an ISO string calculated as `today + N days`; initialises date on mount.                                                                                        |
| `Typeahead`       | OURS           | Text input with suggestion dropdown (filtered from `suggestions` prop by value match); uses `DebouncedInput` from vue3-ui; closes on outside click.                                                                                     |
| `EditableContent` | OURS           | Click-to-edit component: shows content in a configurable element (`p`, etc.); on click switches to `TextareaInput`; auto-closes on outside click when content is non-empty; resizes card when `size="full"`.                            |
| `FileInput`       | OURS           | File picker with two modes (`button`, `dropzone`) via vue3-dropzone; append vs update accumulation; deduplication; error code mapping; optional per-file description editing via `SelectedFile`.                                        |

#### Schema Factories

| Export                                   | Classification | Description                                                                                                                           |
| ---------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `emailSchema(errorMessages, options)`    | OURS           | Zod string schema with `validator.isEmail` refinement; customisable required/invalid messages.                                        |
| `passwordSchema(errorMessages, options)` | OURS           | Zod string schema with `validator.isStrongPassword` refinement; merges caller options with defaults (minLength 8, all point weights). |
| `textSchema(errorMessages, options)`     | OURS           | Zod string schema; conditionally refines with `validator.isEmpty` when `options.required` is set.                                     |
| `numberSchema(errorMessages, options)`   | OURS           | Zod `coerce.number` schema with `validator.isInt` refinement; converts input to number.                                               |

#### Utility Functions (internal, not exported from index)

| Function                                        | Classification | Description                                                                                                                                |
| ----------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `normalizeOptions(options, labelKey, valueKey)` | OURS           | Flattens grouped or flat option arrays; remaps label/value via optional custom keys.                                                       |
| `getFallbackTranslation(locale, locales)`       | OURS           | Returns locale translation map; falls back to built-in English catalogue for `"en"`.                                                       |
| `getFlagClass(code, position, style)`           | OURS           | Builds CSS class string for flag-icon-css; handles position (`left`, `right`, `right-edge`) and style (`circle`, `rectangular`, `square`). |
| `getLabel(code, locale, locales, fallback)`     | OURS           | Resolves country label from locale map; falls back to fallbackTranslation then the raw code.                                               |
| `sortByLabel(a, b)`                             | OURS           | Locale-aware label comparator for option arrays.                                                                                           |

#### Types Exported

`CurrencyOption`, `EmailErrorMessages`, `GroupedOption`, `IsEmailOptions`, `IsIntOptions`, `IsTextOptions`, `NumberErrorMessages`, `PasswordErrorMessages`, `SelectOption`, `StrongPasswordOptions`, `TextErrorMessages`

---

### Framework Constructs

- **No Vue plugin (`install()`)** — this is a component library, not a plugin.
- **No `provide/inject`** — no dependency injection used.
- **No `app.component()` global registration** — all components must be imported manually.
- **`defineExpose`** used in `Form` (exposes `resetForm`, `meta`, `getFieldMeta`, `getFieldValue`) and `FileInput` (exposes `inputFiles`).

### Lifecycle Hooks

| Component         | Hook              | Purpose                                                                                     |
| ----------------- | ----------------- | ------------------------------------------------------------------------------------------- |
| `Select`          | `onMounted`       | Initialises selected state; registers scroll + resize listeners for dropdown positioning.   |
| `Select`          | `onBeforeUnmount` | Removes scroll + resize listeners.                                                          |
| `DatePicker`      | `onMounted`       | Registers scroll listener when `teleport` is set.                                           |
| `DatePicker`      | `onBeforeUnmount` | Removes scroll listener when `teleport` is set.                                             |
| `CountryPicker`   | `onMounted`       | Lazily imports flag-icon-css.                                                               |
| `Country`         | `onMounted`       | Lazily imports flag-icon-css.                                                               |
| `DaysInput`       | (setup-time)      | Calls `prepareComponent()` immediately; emits initial `update:date` if `modelValue` is set. |
| `EditableContent` | (via `nextTick`)  | Focuses textarea and resizes card after switching to edit mode.                             |

### Conditional Branches (Feature Flags / Enable/Disable Logic)

| Component         | Condition                                  | Effect                                                                    |
| ----------------- | ------------------------------------------ | ------------------------------------------------------------------------- |
| `Select`          | `disableSearch`                            | Hides the search input.                                                   |
| `Select`          | `enableCustomSearch`                       | Disables built-in client-side filtering (consumer drives results).        |
| `Select`          | `multiple`                                 | Switches to multi-select mode with checkboxes and select-all.             |
| `Select`          | `disableGroupSelect`                       | Removes group-level select/deselect.                                      |
| `Select`          | `hasSortedOptions`                         | Enables/disables alphabetical sorting of options.                         |
| `Select`          | `enableTooltip`                            | Wraps selected labels in `Tooltip` component.                             |
| `Select`          | `showRemoveSelection`                      | Shows/hides the clear (×) button.                                         |
| `Select`          | `loading`                                  | Shows `LoadingIcon` in dropdown instead of options.                       |
| `SelectInput`     | `maxSelection`/`minSelection` + `multiple` | Auto-generates a Zod array schema with selection count validation.        |
| `CountryPicker`   | `favorites.length > 0`                     | Creates "Favorites" group in option list.                                 |
| `CountryPicker`   | `Object.keys(groups).length > 0`           | Uses custom groups instead of flat/all-countries list.                    |
| `CountryPicker`   | `include.length > 0`                       | Restricts country list to specified codes.                                |
| `CountryPicker`   | `exclude`                                  | Removes specified country codes from list.                                |
| `CountryPicker`   | `includeFavorites`                         | Controls whether favorites appear in the main list.                       |
| `CountryPicker`   | `flags`                                    | Shows/hides flag images or CSS spans.                                     |
| `CountryPicker`   | `flagsPath`                                | Uses custom image URLs instead of CSS flag classes.                       |
| `Country`         | `showFlag`                                 | Shows/hides flag display.                                                 |
| `Country`         | `flagsPath`                                | Uses `<img>` with custom URL vs CSS span.                                 |
| `Country`         | `countryLabel !== countryCode`             | Suppresses flag when code has no known translation.                       |
| `FileInput`       | `inputMethod === 'button'`                 | Button-triggered picker; sets `noDrag: true` in dropzone.                 |
| `FileInput`       | `inputMethod === 'dropzone'`               | Drag-and-drop zone.                                                       |
| `FileInput`       | `mode === 'append'`                        | Accumulates files across drops (with deduplication) instead of replacing. |
| `FileInput`       | `multiple`                                 | Allows multiple file selection.                                           |
| `FileInput`       | `enableDescription`                        | Shows per-file description textarea in `SelectedFile`.                    |
| `Password`        | `showPassword` reactive ref                | Toggles input type between `'text'` and `'password'`.                     |
| `Password`        | `disabled`                                 | Blocks show/hide toggle click.                                            |
| `EditableContent` | `allowEdit`                                | Disables click-to-edit.                                                   |
| `EditableContent` | `size === 'full'`                          | Auto-resizes card to textarea scroll height.                              |
| `DatePicker`      | `teleport`                                 | Registers scroll listener to close calendar on scroll.                    |
| `Typeahead`       | `emptyMessage`                             | Shows empty-state message when `filteredSuggestions` is empty.            |
| `Typeahead`       | `loading`                                  | Shows `LoadingIcon` instead of suggestion list.                           |

### Default Values

| Component/Schema  | Prop/Option                                                                                                                                                                                                                                                           | Default |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `Form`            | —                                                                                                                                                                                                                                                                     | —       |
| `Input`           | `disabled` `false`; `label` `""`; `modelValue` `""`; `name` `"input"`; `placeholder` `""`; `type` `"text"`                                                                                                                                                            |
| `TextInput`       | `errorMessages.invalid` `"Please provide a valid input data"`; `errorMessages.required` `"The field is required"`; `name` `"text"`                                                                                                                                    |
| `NumberInput`     | `errorMessages.invalid` `"Please provide a valid integer field"`; `errorMessages.required` `"The field is required"`; `name` `"number"`                                                                                                                               |
| `Email`           | `autocomplete` `"email"`; `errorMessages.invalid` `"Please provide a valid email address"`; `errorMessages.required` `"Email address is required"`; `name` `"email"`                                                                                                  |
| `Password`        | `autocomplete` `"new-password"`; `errorMessages.required` `"A password is required"`; `errorMessages.weak` `"This password is too weak"`; `name` `"password"`                                                                                                         |
| `passwordSchema`  | `minLength` `8`; `minLowercase/Uppercase/Numbers/Symbols` `0`; `returnScore` `false`; `pointsPerUnique` `1`; `pointsPerRepeat` `0.5`; all `pointsForContaining*` `10`                                                                                                 |
| `Select`          | `customSearchHelperText` `"Please type to search..."`; `enableTooltip` `true`; `hasSortedOptions` `true`; `modelValue` `[]`; `noOptionsMessage` `"No options available"`; `showRemoveSelection` `true`                                                                |
| `SelectInput`     | `name` `"select"`; `hasSortedOptions` `true`; `enableTooltip` `true`                                                                                                                                                                                                  |
| `CheckboxInput`   | `direction` `"vertical"`; `name` `"checkbox"`                                                                                                                                                                                                                         |
| `SwitchInput`     | `modelValue` `false`; `name` `"switch"`                                                                                                                                                                                                                               |
| `RadioInput`      | `direction` `undefined`; `name` `"radio"`                                                                                                                                                                                                                             |
| `Radio`           | `direction` `"vertical"`                                                                                                                                                                                                                                              |
| `CountryPicker`   | `fallbackLocale` `"en"`; `flags` `true`; `flagsPosition` `"left"`; `flagsStyle` `"rectangular"`; `hasSortedOptions` `true`; `includeFavorites` `true`; `labels.allCountries` `"All Countries"`; `labels.favorites` `"Favorites"`; `locale` `"en"`; `name` `"country"` |
| `Country`         | `fallbackLocale` `"en"`; `flagsPosition` `"left"`; `flagsStyle` `"rectangular"`; `locale` `"en"`; `showFlag` `true`                                                                                                                                                   |
| `CurrencyPicker`  | `name` `"currency"`; `optionLabelOrder` `["code", "label", "symbol"]`                                                                                                                                                                                                 |
| `DatePicker`      | `autoApply` `true`; `enableTimePicker` `false`; `name` `"date"`                                                                                                                                                                                                       |
| `DaysInput`       | `name` `"days-input"`; `schema` `z.coerce.number().optional()`                                                                                                                                                                                                        |
| `FormActions`     | `actions` `[]`; `alignment` `"right"`; `cancelLabel` `"Cancel"`; `disabled` `false`; `flowDirection` `"horizontal"`; `submitLabel` `"Submit"`                                                                                                                         |
| `FileInput`       | `buttonLabel` `"Select"`; `buttonLabelSelected` `"Selected"`; `dropzoneMessage` `"Drag and drop or click"`; `inputMethod` `"button"`; `mode` `"update"`; `name` `"file"`                                                                                              |
| `EditableContent` | `allowEdit` `true`; `contentElement` `"p"`; `placeholder` `""`; `resize` `"none"`; `size` `"small"`                                                                                                                                                                   |
| `Typeahead`       | `debounceTime` `500`; `modelValue` `""`; `name` `"typeahead"`; `type` `"text"`                                                                                                                                                                                        |

---

### Completeness Checklist

- [x] Classified every public export as "ours" or "theirs"
- [x] Listed every framework construct added (per CONVENTIONS.md guidance)
- [x] Identified every conditional branch (enable/disable flags, feature toggles)
- [x] Documented default values for all options we define
- [x] Produced a passthrough classification for every wrapped dependency
