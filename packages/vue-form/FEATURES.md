<!-- Structured feature inventory — used by automated test generation. Developer docs: see GUIDE.md -->

# Features: `@prefabs.tech/vue3-form`

## Form Container

1. `Form` wraps vee-validate's `Form` component and emits `submit` with validated form data.
2. `Form` exposes `resetForm()` to programmatically reset all fields to their initial state.
3. `Form` exposes `meta` (computed) reflecting the overall form validation state via vee-validate's `getMeta()`.
4. `Form` exposes `getFieldMeta(fieldName)` to inspect per-field validation metadata.
5. `Form` exposes `getFieldValue(fieldName)` to read the current value of any field by name.

## Form Actions

6. `FormActions` renders a Submit button and a Cancel button by default (no `actions` prop required).
7. `FormActions` default Submit button has `type="submit"` and uses the `submitLabel` prop (default: `"Submit"`).
8. `FormActions` default Cancel button has `severity="secondary"` and `variant="outlined"` and uses `cancelLabel` prop (default: `"Cancel"`).
9. `FormActions` accepts a custom `actions` array; each action is merged with the matching default action (by `id` or `label`) so defaults are extended, not replaced.
10. `FormActions` emits a dynamic event named after each action's `id` or `label` (lowercased) when that button is clicked.
11. `FormActions` `disabled` prop disables all buttons simultaneously.
12. `FormActions` `loading` prop disables all buttons simultaneously (same effect as `disabled`).
13. `FormActions` `alignment` prop controls horizontal alignment (`"right"` by default).
14. `FormActions` `flowDirection` prop controls layout direction (`"horizontal"` by default).
15. `FormActions` `reverse` prop reverses button order.
16. Individual action buttons can be overridden using named slots matching the action's `id` or `label`.

## Validated Text Inputs

17. `TextInput` renders a text `<input>` integrated with vee-validate via `<Field>` and uses `textSchema` by default.
18. `TextInput` applies `invalid` CSS class when the field is dirty or touched and invalid; applies `valid` CSS class when dirty and valid.
19. `TextInput` accepts a custom `schema` (Zod) prop to replace the built-in `textSchema`.
20. `TextInput` accepts `errorMessages.required` and `errorMessages.invalid` to customise validation messages (defaults: `"The field is required"` / `"Please provide a valid input data"`).
21. `TextInput` `options` prop is forwarded to `textSchema` (controls `required` and `ignore_whitespace` for `validator.isEmpty`).

22. `NumberInput` renders a number `<input>` integrated with vee-validate and uses `numberSchema` by default.
23. `NumberInput` coerces the HTML input string value to a `Number` before emitting `update:modelValue`; emits `undefined` when the field is cleared.
24. `NumberInput` accepts `errorMessages.required` / `errorMessages.invalid` (defaults: `"The field is required"` / `"Please provide a valid integer field"`).
25. `NumberInput` `options` prop is forwarded to `numberSchema` (controls `validator.isInt` options such as `min`, `max`, `allow_leading_zeroes`).

26. `TextareaInput` renders a `<textarea>` with the same `textSchema` integration as `TextInput`, plus `rows` and `cols` props.

27. `Email` renders an `<input type="email">` with built-in `emailSchema` using `validator.isEmail`.
28. `Email` `autocomplete` prop defaults to `"email"`.
29. `Email` `options` prop is forwarded to `validator.isEmail` (e.g. `allow_utf8_local_part`, `domain_specific_validation`).
30. `Email` `errorMessages.required` / `errorMessages.invalid` (defaults: `"Email address is required"` / `"Please provide a valid email address"`).

31. `Password` renders a password input with a show/hide toggle button.
32. `Password` toggles input type between `"password"` and `"text"` via an internal `showPassword` ref.
33. `Password` disables the show/hide toggle when the `disabled` prop is `true`.
34. `Password` uses built-in `passwordSchema` (validator.js `isStrongPassword`) unless a custom `schema` is supplied.
35. `Password` `autocomplete` prop defaults to `"new-password"`.
36. `Password` `errorMessages.required` / `errorMessages.weak` (defaults: `"A password is required"` / `"This password is too weak"`).
37. `Password` exposes a `#icon` slot receiving `showPassword` boolean to replace the default eye SVG icons.

38. `Input` is a generic vee-validate-connected `<input>` with a configurable `type` prop (default `"text"`); no built-in schema — validation only when a `schema` prop is provided.

## Schema Factories

39. `emailSchema(errorMessages, options)` returns a Zod string schema with a `validator.isEmail` refinement. Error messages are fully customisable.
40. `passwordSchema(errorMessages, options)` returns a Zod string schema with a `validator.isStrongPassword` refinement. Merges caller options with defaults: `minLength: 8`, all `pointsForContaining*: 10`, `pointsPerUnique: 1`, `pointsPerRepeat: 0.5`.
41. `textSchema(errorMessages, options)` returns a Zod string schema. When `options.required` is `true`, refines with `validator.isEmpty` to enforce non-empty input. `options.ignore_whitespace` controls whether whitespace-only strings pass.
42. `numberSchema(errorMessages, options)` returns a Zod `coerce.number` schema with a `validator.isInt` refinement. All `IsIntOptions` (e.g. `min`, `max`) are supported.

## Select / Multiselect

43. `Select` is a fully custom multiselect dropdown (no third-party base). Supports single and multi-select via the `multiple` prop.
44. `Select` performs client-side search filtering (case-insensitive, matches label or groupLabel) with a debounced search input.
45. `Select` `enableCustomSearch` disables client-side filtering so the consumer can drive results externally; shows `customSearchHelperText` (default: `"Please type to search..."`) when no input yet.
46. `Select` `disableSearch` hides the search input entirely.
47. `Select` `hasSortedOptions` (default `true`) sorts options alphabetically by label; grouped options are sorted by groupLabel then label.
48. `Select` `loading` prop shows a `LoadingIcon` spinner inside the dropdown instead of options.
49. `Select` in multi-select mode shows a "Select all" checkbox row that toggles all non-disabled options.
50. `Select` `disableGroupSelect` removes group-level checkbox selection in multi-select mode.
51. `Select` individual options can be disabled via `option.disabled`.
52. `Select` dropdown is teleported to `<body>` and its position is computed from the trigger's `getBoundingClientRect()`, tracking both scroll and resize events.
53. `Select` dropdown expands to at least 200px and up to 240px when the trigger is narrow and space allows.
54. `Select` `enableTooltip` (default `true`) wraps selected labels in a `Tooltip` component; `tooltipOptions` passes additional tooltip configuration.
55. `Select` `showRemoveSelection` (default `true`) shows a clear (×) button when a selection exists.
56. `Select` supports full keyboard navigation: Arrow keys move focus, Enter/Space select, Tab closes the dropdown.
57. `Select` `labelKey` / `valueKey` props remap arbitrary option fields to `label` / `value`.
58. `Select` emits `update:searchInput` when the search field changes, enabling server-side search integration.
59. `Select` exposes three slots: `#option` (`{ multiple, option, selected }`), `#group` (`{ label, selected }`), `#selection` (`{ selectedLabels }`).

60. `SelectInput` wraps `Select` inside a vee-validate `<Field>`, adding a form name, validation schema, and `<ErrorMessage>`.
61. `SelectInput` `minSelection` / `maxSelection` props auto-generate a Zod array schema enforcing selection count when no custom `schema` is provided and `multiple` is `true`.
62. `SelectInput` clamps `minSelection` to the number of available (non-disabled) options if `minSelection` exceeds it.

## Country Picker

63. `CountryPicker` wraps `SelectInput` and builds country options from ISO country codes using a built-in English translation catalogue.
64. `CountryPicker` `locale` prop and `locales` (translation map) prop enable localised country names; falls back to the `fallbackLocale` locale (default `"en"`), then the built-in English catalogue.
65. `CountryPicker` `favorites` prop places specified country codes in a "Favorites" group at the top of the list.
66. `CountryPicker` `includeFavorites` (default `true`) controls whether favorites also appear in the main "All Countries" group.
67. `CountryPicker` `groups` prop organises countries into named groups (replaces the flat list).
68. `CountryPicker` `include` prop restricts the displayed countries to the provided ISO codes.
69. `CountryPicker` `exclude` prop removes specific ISO codes from the list.
70. `CountryPicker` `flags` (default `true`) shows a flag icon next to each option.
71. `CountryPicker` `flagsStyle` controls flag shape: `"rectangular"` (default), `"circle"`, `"square"`.
72. `CountryPicker` `flagsPosition` controls flag placement: `"left"` (default), `"right"`, `"right-edge"`.
73. `CountryPicker` `flagsPath` accepts a function `(code: string) => string` to supply custom flag image URLs instead of CSS flag classes.
74. `CountryPicker` `labels` prop customises the "All Countries" and "Favorites" group header strings.
75. `CountryPicker` deduplicates selected values in multi-select mode using `Set`.
76. `CountryPicker` lazily imports `@dzangolab/flag-icon-css` on mount.
77. `CountryPicker` exposes a `#option` slot for fully custom option rendering.

## Country Display

78. `Country` is a display-only component that resolves a country label and flag from an ISO code.
79. `Country` suppresses flag display when the code has no known translation (avoids showing an untranslated raw code alongside a missing flag).
80. `Country` `showFlag` prop (default `true`) controls flag visibility independently.
81. `Country` supports the same `locale`, `locales`, `fallbackLocale`, `flagsPath`, `flagsPosition`, `flagsStyle` props as `CountryPicker`.
82. `Country` exposes a default slot receiving `{ code, label }` for fully custom rendering.

## Currency Picker

83. `CurrencyPicker` wraps `SelectInput` with `enableCustomSearch` always active, filtering by `label`, `code`, or `symbol` fields of each `CurrencyOption`.
84. `CurrencyPicker` `optionLabelOrder` (default `["code", "label", "symbol"]`) controls which currency fields appear as primary, secondary, and tertiary labels.
85. `CurrencyPicker` `selectionOptions` prop passes additional `SelectInput` props for fine-grained control.
86. `CurrencyPicker` emits `update:searchInput` alongside `update:modelValue`.
87. `CurrencyPicker` exposes `#option` and `#selection` slots forwarded from `SelectInput`.

## Date Picker

88. `DatePicker` wraps `@vuepic/vue-datepicker` with vee-validate `<Field>` integration, applying `invalid`/`valid` CSS classes based on validation state.
89. `DatePicker` `autoApply` (default `true`) auto-confirms selection without requiring a confirm button click.
90. `DatePicker` `enableTimePicker` (default `false`) adds time selection to the calendar.
91. `DatePicker` `disabledWeekDays` prop (array of weekday numbers 0–6) disables specific days of the week.
92. `DatePicker` `format` prop sets the display format string for the input.
93. `DatePicker` `teleport` prop (string CSS selector or `true`) teleports the calendar panel. When set, a scroll listener closes the calendar on page scroll.
94. `DatePicker` strips `class` from forwarded attributes to prevent double-application of CSS classes.
95. Additional `@vuepic/vue-datepicker` props can be passed as attrs and are forwarded (after stripping `class`).

## Days Input

96. `DaysInput` wraps `NumberInput` and additionally emits `update:date` with an ISO 8601 date string equal to today's date plus the entered number of days.
97. `DaysInput` emits `update:date` immediately on setup if `modelValue` is a non-null number (including `0`).
98. `DaysInput` default schema is `z.coerce.number().optional()`.

## Typeahead

99. `Typeahead` renders a debounced text input (via `DebouncedInput`) with a suggestion dropdown filtered by matching the typed value against `suggestion.value` (case-insensitive substring match).
100. `Typeahead` `debounceTime` prop (default `500` ms) controls the debounce delay.
101. `Typeahead` `loading` prop shows a `LoadingIcon` instead of the suggestion list.
102. `Typeahead` `emptyMessage` prop shows a message when the input has a value but no suggestions match.
103. `Typeahead` `helperText` prop displays a static helper string below the input.
104. `Typeahead` closes the suggestion dropdown on outside click (via `onClickOutside`).
105. `Typeahead` exposes a `#suggestion` slot receiving `{ suggestion }` for custom option rendering.

## Checkbox

106. `CheckboxInput` renders a single checkbox (boolean mode) or a checkbox group (from `options: InputOption[]`).
107. `CheckboxInput` in single mode emits `update:checked` (boolean) when toggled.
108. `CheckboxInput` in group mode maintains a checked-values array, emitting `update:modelValue` with the updated array on each change.
109. `CheckboxInput` `direction` prop controls group layout: `"vertical"` (default) or `"horizontal"`.
110. `CheckboxInput` accepts an optional vee-validate `schema` prop.
111. `Checkbox` is a standalone primitive checkbox without vee-validate integration.

## Switch

112. `SwitchInput` wraps `Switch` inside a vee-validate `<Field>` with optional Zod schema validation.
113. `SwitchInput` `onLabel` / `offLabel` props set visible text labels on the toggle.
114. `Switch` is a standalone primitive toggle switch without vee-validate integration.

## Radio

115. `RadioInput` wraps `Radio` inside a vee-validate `<Field>` with optional Zod schema validation.
116. `RadioInput` `direction` prop controls layout: validated values are `"vertical"` or `"horizontal"`.
117. `RadioInput` emits `update:modelValue` only when the newly selected radio is checked (prevents spurious deselect events).
118. `Radio` is a standalone primitive radio group without vee-validate integration.
119. `Radio` `helperText` prop displays a helper string below the radio group.

## File Input

120. `FileInput` supports two input methods: `"button"` (default, hidden input triggered by a `ButtonElement`) and `"dropzone"` (drag-and-drop area).
121. `FileInput` `mode="update"` (default) replaces the file list on each drop. `mode="append"` accumulates files across drops with deduplication (by name + size).
122. `FileInput` `multiple` prop allows selecting more than one file.
123. `FileInput` maps vue3-dropzone error codes to human-readable messages via `errorMessages`: `invalid` (file-invalid-type), `maxSize` (file-too-large), `minSize` (file-too-small), `maxFiles` (too-many-files).
124. `FileInput` `enableDescription` shows a per-file description textarea (rendered by `SelectedFile`).
125. `FileInput` `buttonLabel` (default `"Select"`) and `buttonLabelSelected` (default `"Selected"`) customise button text; when files are selected the count is appended: `"Selected (2)"`.
126. `FileInput` `dropzoneOptions` prop is spread into `useDropzone` for advanced dropzone configuration.
127. `FileInput` emits `on:filesUpdate` with the current file array after every add, remove, or update operation.
128. `FileInput` exposes `inputFiles` ref for programmatic access to the current file list.
129. `FileInput` exposes `#details` and `#preview` slots forwarded to each `SelectedFile` item.

## Editable Content

130. `EditableContent` displays content inside a `Card`; clicking on the content switches to a `TextareaInput` for editing.
131. `EditableContent` auto-closes the edit mode on outside click when `modelValue` is non-empty (whitespace-trimmed).
132. `EditableContent` `allowEdit` (default `true`) disables click-to-edit when set to `false`.
133. `EditableContent` `contentElement` (default `"p"`) sets the HTML tag used to display the read-only content.
134. `EditableContent` `size` prop controls card size: `"small"` (default), `"medium"`, `"large"`, `"full"`.
135. `EditableContent` when `size="full"`, auto-resizes the card height to match the textarea's `scrollHeight` on each input.
136. `EditableContent` `resize` prop controls textarea CSS resize behaviour (default `"none"`).

## Types

137. Exports `SelectOption`, `GroupedOption`, `CurrencyOption`, `InputOption`, `MonthPickerValue`, `Options` for use in consuming applications.
138. Exports `EmailErrorMessages`, `NumberErrorMessages`, `PasswordErrorMessages`, `TextErrorMessages`, `FileErrorMessages` for typed error message customisation.
139. Exports `IsEmailOptions`, `IsTextOptions`, `IsIntOptions`, `StrongPasswordOptions` (validator.js option types) for schema factory configuration.
