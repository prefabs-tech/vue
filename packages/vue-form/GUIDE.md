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
  Form,
  FormActions,
  Email,
  Password,
  TextInput,
  NumberInput,
  SelectInput,
  CountryPicker,
  DatePicker,
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
  <TextInput name="username" label="Username" />
  <FormActions />
</Form>

// script
const myForm = ref();
const onSubmit = (data: object) => console.log(data);

// reset programmatically
myForm.value?.resetForm();

// check overall validity
console.log(myForm.value?.meta.valid);

// read a single field's value
console.log(myForm.value?.getFieldValue("username"));
```

### FormActions

`FormActions` renders Submit and Cancel buttons. By default no `actions` prop is required.

```typescript
// Default: Submit (type="submit") + Cancel (secondary, outlined)
<FormActions @submit="..." @cancel="..." />

// Custom labels
<FormActions submit-label="Save" cancel-label="Discard" />

// Add a third button, keep the defaults
<FormActions
  :actions="[
    { id: 'submit', label: 'Save' },
    { id: 'cancel', label: 'Discard' },
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
<FormActions alignment="left" flow-direction="vertical" :reverse="true" />
```

### TextInput

```typescript
<TextInput
  v-model="username"
  name="username"
  label="Username"
  placeholder="Enter username"
  :error-messages="{ required: 'Username is required', invalid: 'Invalid characters' }"
  :options="{ required: true, ignore_whitespace: true }"
/>
```

### NumberInput

```typescript
<NumberInput
  v-model="age"
  name="age"
  label="Age"
  :options="{ min: '0', max: '120' }"
/>
```

### TextareaInput

```typescript
<TextareaInput
  v-model="bio"
  name="bio"
  label="Bio"
  :rows="5"
  :cols="40"
  :options="{ required: true }"
/>
```

### Email

```typescript
<Email
  v-model="email"
  name="email"
  label="Email address"
  :options="{ domain_specific_validation: true }"
/>
```

### Password

The show/hide eye icon can be replaced via the `#icon` slot.

```typescript
<Password
  v-model="password"
  name="password"
  label="Password"
  :options="{ minLength: 12, minNumbers: 1, minSymbols: 1 }"
  :error-messages="{ required: 'Required', weak: 'Must be at least 12 chars with a number and symbol' }"
>
  <template #icon="{ showPassword }">
    <span>{{ showPassword ? '🙈' : '👁' }}</span>
  </template>
</Password>
```

### Input (generic)

Use `Input` when you need a custom input type with optional Zod validation and no built-in schema.

```typescript
import { z } from "zod";

<Input
  v-model="url"
  name="url"
  label="Website"
  type="url"
  :schema="z.string().url('Must be a valid URL')"
/>
```

### Schema Factories

Use the factories directly when building forms with your own `<Field>` or when composing schemas.

```typescript
import { emailSchema, passwordSchema, textSchema, numberSchema } from "@prefabs.tech/vue3-form";
import { toTypedSchema } from "@vee-validate/zod";

// Email with custom messages
const myEmailSchema = emailSchema(
  { required: "Email is required", invalid: "Not a valid email" },
  { allow_utf8_local_part: false },
);

// Password with stricter requirements
const myPasswordSchema = passwordSchema(
  { required: "Required", weak: "Too weak" },
  { minLength: 12, minNumbers: 1, minSymbols: 1 },
);

// Text with required enforcement (trims whitespace)
const myTextSchema = textSchema(
  { required: "This field is required", invalid: "Invalid" },
  { required: true, ignore_whitespace: true },
);

// Number with range
const myNumberSchema = numberSchema(
  { required: "Required", invalid: "Must be an integer 1–100" },
  { min: "1", max: "100" },
);
```

### SelectInput

`SelectInput` is the vee-validate wrapper around the `Select` dropdown, suitable for use inside a `<Form>`.

```typescript
<SelectInput
  v-model="role"
  name="role"
  label="Role"
  :options="[
    { label: 'Admin', value: 'admin' },
    { label: 'User', value: 'user' },
  ]"
/>

// Multi-select with min/max constraint (auto-generates Zod schema)
<SelectInput
  v-model="tags"
  name="tags"
  label="Tags"
  multiple
  :min-selection="1"
  :max-selection="3"
  :options="tagOptions"
/>
```

### Select (standalone)

`Select` can be used outside a `<Form>` when you need a feature-rich dropdown without validation.

```typescript
// Single select with search disabled
<Select
  v-model="country"
  :options="countryOptions"
  :disable-search="true"
/>

// Multi-select with server-side search
<Select
  v-model="selectedUsers"
  :options="searchResults"
  multiple
  enable-custom-search
  :loading="isSearching"
  custom-search-helper-text="Type a name to search..."
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

| Prop | Default | Description |
|---|---|---|
| `multiple` | `false` | Multi-select mode |
| `disableSearch` | `false` | Hide search input |
| `enableCustomSearch` | `false` | Disable client-side filtering |
| `hasSortedOptions` | `true` | Alphabetically sort options |
| `loading` | `false` | Show loading spinner |
| `disableGroupSelect` | `false` | Disable group-level selection |
| `enableTooltip` | `true` | Tooltip for selected labels |
| `showRemoveSelection` | `true` | Show clear (×) button |
| `noOptionsMessage` | `"No options available"` | Empty state text |
| `labelKey` | `undefined` | Custom field mapped to `label` |
| `valueKey` | `undefined` | Custom field mapped to `value` |

### CountryPicker

```typescript
<CountryPicker
  v-model="country"
  name="country"
  label="Country"
  locale="fr"
  :locales="{ fr: { US: 'États-Unis', GB: 'Royaume-Uni' } }"
  :favorites="['US', 'GB', 'CA']"
  :exclude="['KP']"
  flags-style="circle"
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
<Country code="US" locale="fr" :locales="{ fr: { US: 'États-Unis' } }" />

// No flag
<Country code="DE" :show-flag="false" />

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
<CurrencyPicker v-model="currency" name="currency" :options="currencies" />

// Show symbol first
<CurrencyPicker
  v-model="currency"
  name="currency"
  :options="currencies"
  :option-label-order="['symbol', 'label', 'code']"
/>
```

### DatePicker

```typescript
import { z } from "zod";

// Basic date picker
<DatePicker v-model="date" name="startDate" label="Start date" />

// With time, disabled weekends, validation
<DatePicker
  v-model="appointmentDate"
  name="appointment"
  label="Appointment"
  :enable-time-picker="true"
  :disabled-week-days="[0, 6]"
  format="dd/MM/yyyy HH:mm"
  :schema="z.date().min(new Date(), 'Must be in the future')"
/>

// Teleported calendar (closes on scroll)
<DatePicker v-model="date" name="date" teleport="body" />
```

### DaysInput

`DaysInput` is a number field that also calculates a future date. Every change emits both `update:modelValue` (the integer) and `update:date` (an ISO string for today + N days).

```typescript
<DaysInput
  v-model="trialDays"
  name="trialDays"
  label="Trial period (days)"
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
  name="fruit"
  label="Fruit"
  :suggestions="suggestions"
  :debounce-time="300"
  empty-message="No matching fruit"
  helper-text="Start typing to search"
/>

// Server-side suggestions
<Typeahead
  v-model="query"
  name="search"
  :suggestions="serverResults"
  :loading="isFetching"
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
  input-label="I agree to the terms"
  :checked="agreedToTerms"
  @update:checked="agreedToTerms = $event"
/>

// Checkbox group (array of values)
<CheckboxInput
  v-model="selectedRoles"
  name="roles"
  label="Roles"
  direction="horizontal"
  :options="[
    { label: 'Admin', value: 'admin' },
    { label: 'Editor', value: 'editor' },
    { label: 'Viewer', value: 'viewer' },
  ]"
/>
```

### SwitchInput

```typescript
<SwitchInput
  v-model="isEnabled"
  name="enabled"
  label="Enable notifications"
  on-label="On"
  off-label="Off"
/>
```

### RadioInput

```typescript
<RadioInput
  v-model="plan"
  name="plan"
  label="Subscription plan"
  direction="horizontal"
  helper-text="Choose the plan that suits you"
  :options="[
    { label: 'Free', value: 'free' },
    { label: 'Pro', value: 'pro' },
    { label: 'Enterprise', value: 'enterprise' },
  ]"
/>
```

### FileInput

```typescript
// Button mode (default)
<FileInput
  name="avatar"
  label="Avatar"
  button-label="Upload photo"
  :error-messages="{
    invalid: 'Only PNG/JPG allowed',
    maxSize: 'File too large (max 2 MB)',
  }"
  :dropzone-options="{ accept: { 'image/*': [] }, maxSize: 2_000_000 }"
  @on:files-update="files = $event"
/>

// Dropzone mode with multi-file append
<FileInput
  name="attachments"
  label="Attachments"
  input-method="dropzone"
  mode="append"
  multiple
  dropzone-message="Drop files here or click to browse"
  :show-error-message="true"
  @on:files-update="attachments = $event"
/>

// With per-file descriptions
<FileInput
  name="docs"
  input-method="dropzone"
  multiple
  enable-description
  add-description-label="Add a note"
  description-placeholder="Describe this file..."
  @on:files-update="docs = $event"
/>
```

### EditableContent

```typescript
<EditableContent
  v-model="bio"
  placeholder="Click to add a bio..."
  size="full"
  content-element="h2"
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
    <Email v-model="email" name="email" label="Email" />
    <Password v-model="password" name="password" label="Password" />
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
      name="username"
      label="Username"
      :schema="usernameSchema"
    />
    <Email v-model="email" name="email" label="Email" />
    <Password
      v-model="password"
      name="password"
      label="Password"
      :options="{ minLength: 10, minNumbers: 1 }"
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
      name="country"
      label="Country"
      :favorites="['US', 'GB', 'AU', 'CA']"
      flags-style="circle"
    />
    <CurrencyPicker
      v-model="currency"
      name="currency"
      label="Currency"
      :options="currencies"
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
      name="skills"
      label="Skills (choose 2–5)"
      multiple
      :min-selection="2"
      :max-selection="5"
      :options="skillOptions"
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
      name="attachments"
      label="Attachments"
      input-method="dropzone"
      mode="append"
      multiple
      enable-description
      :show-error-message="true"
      :error-messages="{
        invalid: 'Unsupported file type',
        maxSize: 'File exceeds 10 MB limit',
        maxFiles: 'Maximum 10 files allowed',
      }"
      :dropzone-options="{ maxFiles: 10, maxSize: 10_000_000 }"
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
    size="full"
    content-element="p"
    placeholder="Add a description..."
    resize="vertical"
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
      name="startDate"
      label="Start date"
      :schema="z.date().min(new Date(), 'Must start today or later')"
    />
    <DaysInput
      v-model="trialDays"
      name="trialDays"
      label="Trial length (days)"
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
const suggestions = ref<SelectOption[]>([]);
const isSearching = ref(false);

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
      name="assignee"
      label="Assign to"
      :suggestions="suggestions"
      :loading="isSearching"
      empty-message="No users found"
      :debounce-time="300"
      @update:model-value="fetchUsers"
    />
    <FormActions submit-label="Assign" />
  </Form>
</template>
```
