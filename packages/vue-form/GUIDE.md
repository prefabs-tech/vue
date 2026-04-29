# vue3-form — Developer Guide

## Installation

### For package consumers

```bash
npm install @prefabs.tech/vue3-form vee-validate @vee-validate/zod zod
```

```bash
pnpm add @prefabs.tech/vue3-form vee-validate @vee-validate/zod zod
```

### For monorepo development

```bash
pnpm install
pnpm --filter @prefabs.tech/vue3-form test
pnpm --filter @prefabs.tech/vue3-form build
```

## Setup

All components are tree-shakeable named exports. Import only what you need. There is no plugin to install.

```typescript
import {
  CountryPicker,
  DatePicker,
  Email,
  Form,
  FormActions,
  NumberInput,
  Password,
  SelectInput,
  TextInput,
} from "@prefabs.tech/vue3-form";
```

The package also ships CSS that must be imported separately:

```typescript
import "@prefabs.tech/vue3-form/dist/PrefabsTechVue3Form.css";
```

All examples below assume these imports are in place.

---

## Base Libraries

### vee-validate — Partial Passthrough

vee-validate provides field-level validation state and the `<Form>` container.

-> **Their docs:** [vee-validate](https://vee-validate.logaretm.com/v4/)

Most vee-validate internals are not exposed. What we surface:

- Every validated input wires itself to a `<Field>` automatically — no manual `<Field>` wrapping needed.
- The `<Form>` component exposes only `resetForm`, `meta`, `getFieldMeta`, and `getFieldValue` (not `setErrors` or the full vee-validate context).
- `invalid` / `valid` CSS classes are applied based on `meta.dirty`, `meta.touched`, and `meta.valid`.

**What we add on top:**

- Automatic `toTypedSchema(zod)` wiring on every field component.
- v-model integration alongside vee-validate's `handleChange`.

### zod / @vee-validate/zod — Modified

Zod provides the validation schemas; `@vee-validate/zod` bridges them to vee-validate.

-> **Their docs:** [zod](https://zod.dev) · [@vee-validate/zod](https://vee-validate.logaretm.com/v4/integrations/zod-schema-validation/)

We wrap the bridge with four built-in schema factories. You can pass any `z.ZodTypeAny` via the `schema` prop to replace the built-in one. When no `schema` is provided, the appropriate factory is used automatically.

### validator.js — Modified

validator.js provides the string-validation logic inside our schema factories.

-> **Their docs:** [validator.js](https://www.npmjs.com/package/validator)

We expose four typed option interfaces — `IsEmailOptions`, `IsTextOptions`, `IsIntOptions`, `StrongPasswordOptions` — that mirror validator.js's own option shapes. Pass them via the `options` prop on field components, or directly to the schema factories.

**What we add:** Each factory wraps a validator.js function in a Zod `.refine()` so errors surface as vee-validate messages.

### @vuepic/vue-datepicker — Partial Passthrough

Provides the calendar panel inside `DatePicker`.

-> **Their docs:** [@vuepic/vue-datepicker](https://vue3datepicker.com/)

Explicitly typed props: `autoApply`, `disabled`, `disabledWeekDays`, `enableTimePicker`, `format`, `modelValue`, `name`, `placeholder`, `teleport`. All other `@vuepic/vue-datepicker` props can be passed as attrs and are forwarded (the `class` attr is stripped to prevent duplication).

**What we add on top:**

- vee-validate `<Field>` integration with `invalid`/`valid` CSS classes.
- Scroll listener (`closeOnScroll`) when `teleport` is set — closes the calendar on page scroll.

### vue3-dropzone — Modified

Provides drag-and-drop file handling inside `FileInput`.

-> **Their docs:** [vue3-dropzone](https://www.npmjs.com/package/vue3-dropzone)

We derive `multiple` and `noDrag` from our own props; additional dropzone options can be passed via `dropzoneOptions` and are spread into `useDropzone`.

**What we add on top:**

- Two `inputMethod` modes: `"button"` and `"dropzone"`.
- `mode="append"` file accumulation with deduplication.
- Error code → human message mapping via `errorMessages`.
- Per-file description editing via `SelectedFile`.
- `inputFiles` ref exposed for programmatic access.

---

## Features

### Form Container

`Form` wraps vee-validate's `<Form>` and provides a simple API for managing the form lifecycle.

```typescript
// template
<Form ref="myForm" @submit="onSubmit">
  <TextInput label="Username" name="username" />
  <FormActions />
</Form>

// script
const myForm = ref();

const onSubmit = (data: object) => console.log(data);

// reset programmatically
myForm.value?.resetForm();

// check overall validity
myForm.value?.meta.valid;

// read a single field's value
myForm.value?.getFieldValue("username");
```

### FormActions

`FormActions` renders Submit and Cancel buttons. By default no `actions` prop is required.

```typescript
// Default: Submit (type="submit") + Cancel (secondary, outlined)
<FormActions @cancel="..." @submit="..." />

// Custom labels
<FormActions cancel-label="Discard" submit-label="Save" />

// Add a third button, keep the defaults
<FormActions
  :actions="[
    { id: 'cancel', label: 'Discard' },
    { id: 'submit', label: 'Save' },
    { id: 'preview', label: 'Preview', severity: 'info' },
  ]"
  @preview="openPreview"
/>

// Override a button with a slot
<FormActions>
  <template #cancel>
    <RouterLink to="/">Back</RouterLink>
  </template>
</FormActions>

// Layout control
<FormActions :reverse="true" alignment="left" flow-direction="vertical" />
```

### TextInput

```typescript
<TextInput
  v-model="username"
  :error-messages="{
    invalid: 'Invalid characters',
    required: 'Username is required',
  }"
  :options="{ ignore_whitespace: true, required: true }"
  label="Username"
  name="username"
  placeholder="Enter username"
/>
```

### NumberInput

```typescript
<NumberInput
  v-model="age"
  :options="{ min: '0', max: '120' }"
  label="Age"
  name="age"
/>
```

### TextareaInput

```typescript
<TextareaInput
  v-model="bio"
  :cols="40"
  :options="{ required: true }"
  :rows="5"
  label="Bio"
  name="bio"
/>
```

### Email

```typescript
<Email
  v-model="email"
  :options="{ domain_specific_validation: true }"
  label="Email address"
  name="email"
/>
```

### Password

The show/hide eye icon can be replaced via the `#icon` slot.

```typescript
<Password
  v-model="password"
  :error-messages="{
    required: 'Required',
    weak: 'Must be at least 12 chars with a number and symbol'
  }"
  :options="{ minLength: 12, minNumbers: 1, minSymbols: 1 }"
  label="Password"
  name="password"
>
  <template #icon="{ showPassword }">
    <span>{{ showPassword ? 'hide' : 'show' }}</span>
  </template>
</Password>
```

### Input (generic)

Use `Input` when you need a custom input type with optional Zod validation and no built-in schema.

```typescript
import { z } from "zod";

<Input
  v-model="url"
  :schema="z.string().url('Must be a valid URL')"
  label="Website"
  name="url"
  type="url"
/>
```

### Schema Factories

Use the factories directly when building forms with your own `<Field>` or when composing schemas.

```typescript
import {
  emailSchema,
  numberSchema,
  passwordSchema,
  textSchema,
} from "@prefabs.tech/vue3-form";
import { toTypedSchema } from "@vee-validate/zod";

// Email with custom messages
const myEmailSchema = emailSchema(
  { invalid: "Not a valid email", required: "Email is required" },
  { allow_utf8_local_part: false },
);

// Password with stricter requirements
const myPasswordSchema = passwordSchema(
  { required: "Required", weak: "Too weak" },
  { minLength: 12, minNumbers: 1, minSymbols: 1 },
);

// Text with required enforcement (trims whitespace)
const myTextSchema = textSchema(
  { invalid: "Invalid", required: "This field is required" },
  { ignore_whitespace: true, required: true },
);

// Number with range
const myNumberSchema = numberSchema(
  { invalid: "Must be an integer 1–100", required: "Required" },
  { max: "100", min: "1" },
);
```

### SelectInput

`SelectInput` is the vee-validate wrapper around the `Select` dropdown, suitable for use inside a `<Form>`.

```typescript
<SelectInput
  v-model="role"
  :options="[
    { label: 'Admin', value: 'admin' },
    { label: 'User', value: 'user' },
  ]"
  label="Role"
  name="role"
/>

// Multi-select with min/max constraint (auto-generates Zod schema)
<SelectInput
  v-model="tags"
  :max-selection="3"
  :min-selection="1"
  :options="tagOptions"
  label="Tags"
  multiple
  name="tags"
/>
```

### Select (standalone)

`Select` can be used outside a `<Form>` when you need a feature-rich dropdown without validation.

```typescript
// Single select with search disabled
<Select
  v-model="country"
  :disable-search="true"
  :options="countryOptions"
/>

// Multi-select with server-side search
<Select
  v-model="selectedUsers"
  :loading="isSearching"
  :options="searchResults"
  enable-custom-search
  custom-search-helper-text="Type a name to search..."
  multiple
  @update:search-input="fetchUsers"
/>

// Grouped options
<Select
  v-model="city"
  :options="[
    { label: 'Europe', options: [{ label: 'Paris', value: 'FR-PAR' }] },
    { label: 'Asia', options: [{ label: 'Tokyo', value: 'JP-TYO' }] },
  ]"
/>

// Custom option slot
<Select v-model="user" :options="users">
  <template #option="{ option }">
    <img :src="option.avatar" /> {{ option.label }}
  </template>
</Select>
```

**Props:**

| Prop                  | Default                  | Description                    |
| --------------------- | ------------------------ | ------------------------------ |
| `multiple`            | `false`                  | Multi-select mode              |
| `disableSearch`       | `false`                  | Hide search input              |
| `enableCustomSearch`  | `false`                  | Disable client-side filtering  |
| `hasSortedOptions`    | `true`                   | Alphabetically sort options    |
| `loading`             | `false`                  | Show loading spinner           |
| `disableGroupSelect`  | `false`                  | Disable group-level selection  |
| `enableTooltip`       | `true`                   | Tooltip for selected labels    |
| `showRemoveSelection` | `true`                   | Show clear (×) button          |
| `noOptionsMessage`    | `"No options available"` | Empty state text               |
| `labelKey`            | `undefined`              | Custom field mapped to `label` |
| `valueKey`            | `undefined`              | Custom field mapped to `value` |

### CountryPicker

```typescript
<CountryPicker
  v-model="country"
  :exclude="['KP']"
  :favorites="['US', 'GB', 'CA']"
  :locales="{ fr: { US: 'États-Unis', GB: 'Royaume-Uni' } }"
  flags-style="circle"
  label="Country"
  locale="fr"
  name="country"
/>

// Custom flag images
<CountryPicker
  v-model="country"
  :flags-path="(code) => `/flags/${code.toLowerCase()}.svg`"
/>

// Grouped countries
<CountryPicker
  v-model="country"
  :groups="{
    EU: ['FR', 'DE', 'ES', 'IT'],
    NA: ['US', 'CA', 'MX'],
  }"
  :labels="{ allCountries: 'All Regions' }"
/>

// Only specific countries
<CountryPicker
  v-model="country"
  :include="['US', 'CA', 'GB', 'AU']"
/>
```

### Country (display)

```typescript
// Resolves code to localised label + flag
<Country :locales="{ fr: { US: 'États-Unis' } }" code="US" locale="fr" />

// No flag
<Country :show-flag="false" code="DE" />

// Custom rendering via slot
<Country code="JP">
  <template #default="{ code, label }">
    <strong>{{ code }}</strong>: {{ label }}
  </template>
</Country>
```

### CurrencyPicker

```typescript
const currencies = [
  { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
  { code: "EUR", label: "Euro", symbol: "€", value: "EUR" },
];

// Default: shows code, label, symbol
<CurrencyPicker v-model="currency" :options="currencies" name="currency" />

// Show symbol first
<CurrencyPicker
  v-model="currency"
  :option-label-order="['symbol', 'label', 'code']"
  :options="currencies"
  name="currency"
/>
```

### DatePicker

```typescript
import { z } from "zod";

// Basic date picker
<DatePicker v-model="date" label="Start date" name="startDate" />

// With time, disabled weekends, validation
<DatePicker
  v-model="appointmentDate"
  :disabled-week-days="[0, 6]"
  :enable-time-picker="true"
  :schema="z.date().min(new Date(), 'Must be in the future')"
  format="dd/MM/yyyy HH:mm"
  label="Appointment"
  name="appointment"
/>

// Teleported calendar (closes on scroll)
<DatePicker v-model="date" name="date" teleport="body" />
```

### DaysInput

`DaysInput` is a number field that also calculates a future date. Every change emits both `update:modelValue` (the integer) and `update:date` (an ISO string for today + N days).

```typescript
<DaysInput
  v-model="trialDays"
  label="Trial period (days)"
  name="trialDays"
  @update:date="onDateCalculated"
/>

const onDateCalculated = (isoDate: string) => {
  expiresAt.value = isoDate;
};
```

### Typeahead

```typescript
const suggestions = ref([
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
]);

<Typeahead
  v-model="fruit"
  :debounce-time="300"
  :suggestions="suggestions"
  empty-message="No matching fruit"
  helper-text="Start typing to search"
  label="Fruit"
  name="fruit"
/>

// Server-side suggestions
<Typeahead
  v-model="query"
  :loading="isFetching"
  :suggestions="serverResults"
  name="search"
  @update:model-value="fetchSuggestions"
>
  <template #suggestion="{ suggestion }">
    <strong>{{ suggestion.label }}</strong>
  </template>
</Typeahead>
```

### CheckboxInput

```typescript
// Single checkbox (boolean)
<CheckboxInput
  name="agree"
  :checked="agreedToTerms"
  input-label="I agree to the terms"
  @update:checked="agreedToTerms = $event"
/>

// Checkbox group (array of values)
<CheckboxInput
  v-model="selectedRoles"
  :options="[
    { label: 'Admin', value: 'admin' },
    { label: 'Editor', value: 'editor' },
    { label: 'Viewer', value: 'viewer' },
  ]"
  direction="horizontal"
  label="Roles"
  name="roles"
/>
```

### SwitchInput

```typescript
<SwitchInput
  v-model="isEnabled"
  label="Enable notifications"
  name="enabled"
  off-label="Off"
  on-label="On"
/>
```

### RadioInput

```typescript
<RadioInput
  v-model="plan"
  :options="[
    { label: 'Free', value: 'free' },
    { label: 'Pro', value: 'pro' },
    { label: 'Enterprise', value: 'enterprise' },
  ]"
  direction="horizontal"
  helper-text="Choose the plan that suits you"
  label="Subscription plan"
  name="plan"
/>
```

### FileInput

```typescript
// Button mode (default)
<FileInput
  name="avatar"
  :dropzone-options="{ accept: { 'image/*': [] }, maxSize: 2_000_000 }"
  :error-messages="{
    invalid: 'Only PNG/JPG allowed',
    maxSize: 'File too large (max 2 MB)',
  }"
  button-label="Upload photo"
  label="Avatar"
  @on:files-update="files = $event"
/>

// Dropzone mode with multi-file append
<FileInput
  :show-error-message="true"
  dropzone-message="Drop files here or click to browse"
  input-method="dropzone"
  label="Attachments"
  mode="append"
  multiple
  name="attachments"
  @on:files-update="attachments = $event"
/>

// With per-file descriptions
<FileInput
  add-description-label="Add a note"
  description-placeholder="Describe this file..."
  enable-description
  input-method="dropzone"
  multiple
  name="docs"
  @on:files-update="docs = $event"
/>
```

### EditableContent

```typescript
<EditableContent
  v-model="bio"
  content-element="h2"
  placeholder="Click to add a bio..."
  size="full"
/>

// Read-only display
<EditableContent v-model="title" :allow-edit="!isPublished" />
```

---

## Use Cases

### Login Form with Email and Password

```typescript
<script setup lang="ts">
import { Form, FormActions, Email, Password } from "@prefabs.tech/vue3-form";
import { ref } from "vue";

const formRef = ref();

const onSubmit = async (data: { email: string; password: string }) => {
  await login(data.email, data.password);
};
</script>

<template>
  <Form ref="formRef" @submit="onSubmit">
    <Email v-model="email" label="Email" name="email" />
    <Password v-model="password" label="Password" name="password" />
    <FormActions submit-label="Log in" @cancel="router.push('/')" />
  </Form>
</template>
```

### Registration Form with Custom Validation

```typescript
<script setup lang="ts">
import { Form, FormActions, Email, Password, TextInput } from "@prefabs.tech/vue3-form";
import { z } from "zod";

const usernameSchema = z
  .string()
  .min(3, "Must be at least 3 characters")
  .max(20, "Must be at most 20 characters")
  .regex(/^[a-z0-9_]+$/, "Only lowercase letters, numbers, and underscores");
</script>

<template>
  <Form @submit="onSubmit">
    <TextInput
      v-model="username"
      :schema="usernameSchema"
      label="Username"
      name="username"
    />
    <Email v-model="email" label="Email" name="email" />
    <Password
      v-model="password"
      :options="{ minLength: 10, minNumbers: 1 }"
      label="Password"
      name="password"
    />
    <FormActions submit-label="Create account" @cancel="router.back()" />
  </Form>
</template>
```

### Country and Currency Selection

```typescript
<script setup lang="ts">
import { Form, CountryPicker, CurrencyPicker, FormActions } from "@prefabs.tech/vue3-form";

const currencies = [
  { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
  { code: "EUR", label: "Euro", symbol: "€", value: "EUR" },
  { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
];
</script>

<template>
  <Form @submit="onSubmit">
    <CountryPicker
      v-model="country"
      :favorites="['US', 'GB', 'AU', 'CA']"
      flags-style="circle"
      label="Country"
      name="country"
    />
    <CurrencyPicker
      v-model="currency"
      :options="currencies"
      label="Currency"
      name="currency"
    />
    <FormActions />
  </Form>
</template>
```

### Multi-Select with Min/Max Constraint

```typescript
<template>
  <Form @submit="onSubmit">
    <SelectInput
      v-model="skills"
      :min-selection="2"
      :max-selection="5"
      :options="skillOptions"
      label="Skills (choose 2–5)"
      multiple
      name="skills"
    />
    <FormActions submit-label="Save profile" />
  </Form>
</template>
```

### File Upload Form (Dropzone with Append Mode)

```typescript
<script setup lang="ts">
import { Form, FormActions, FileInput } from "@prefabs.tech/vue3-form";
import { ref } from "vue";

const attachments = ref<File[]>([]);
</script>

<template>
  <Form @submit="onSubmit">
    <FileInput
      :dropzone-options="{ maxFiles: 10, maxSize: 10_000_000 }"
      :error-messages="{
        invalid: 'Unsupported file type',
        maxFiles: 'Maximum 10 files allowed',
        maxSize: 'File exceeds 10 MB limit',
      }"
      :show-error-message="true"
      enable-description
      input-method="dropzone"
      label="Attachments"
      mode="append"
      multiple
      name="attachments"
      @on:files-update="attachments = $event"
    />
    <FormActions submit-label="Upload" />
  </Form>
</template>
```

### Inline-Editable Content Card

```typescript
<script setup lang="ts">
import { EditableContent } from "@prefabs.tech/vue3-form";
import { ref } from "vue";

const description = ref("Click to edit this description.");
</script>

<template>
  <EditableContent
    v-model="description"
    content-element="p"
    placeholder="Add a description..."
    resize="vertical"
    size="full"
  />
</template>
```

### Subscription Form with Date and Days Offset

```typescript
<script setup lang="ts">
import { Form, FormActions, DatePicker, DaysInput } from "@prefabs.tech/vue3-form";
import { ref } from "vue";
import { z } from "zod";

const startDate = ref<Date | null>(null);
const trialDays = ref(14);
const trialEndDate = ref<string>();
</script>

<template>
  <Form @submit="onSubmit">
    <DatePicker
      v-model="startDate"
      :schema="z.date().min(new Date(), 'Must start today or later')"
      label="Start date"
      name="startDate"
    />
    <DaysInput
      v-model="trialDays"
      label="Trial length (days)"
      name="trialDays"
      @update:date="trialEndDate = $event"
    />
    <p v-if="trialEndDate">Trial ends: {{ trialEndDate }}</p>
    <FormActions submit-label="Start trial" />
  </Form>
</template>
```

### Typeahead with Server-Side Search

```typescript
<script setup lang="ts">
import { Form, FormActions, Typeahead } from "@prefabs.tech/vue3-form";
import { ref } from "vue";
import type { SelectOption } from "@prefabs.tech/vue3-form";

const assignee = ref("");
const isSearching = ref(false);
const suggestions = ref<SelectOption[]>([]);

const fetchUsers = async (query: string) => {
  isSearching.value = true;
  suggestions.value = await searchUsers(query);
  isSearching.value = false;
};
</script>

<template>
  <Form @submit="onSubmit">
    <Typeahead
      v-model="assignee"
      :debounce-time="300"
      :loading="isSearching"
      :suggestions="suggestions"
      empty-message="No users found"
      label="Assign to"
      name="assignee"
      @update:model-value="fetchUsers"
    />
    <FormActions submit-label="Assign" />
  </Form>
</template>
```
