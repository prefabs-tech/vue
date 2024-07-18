<template>
  <Page :title="$t('form.title')">
    <form class="form" @submit.prevent>
      <Input
        v-model="nameInput"
        :label="$t('form.label.full_name')"
        :placeholder="$t('form.placeholder.full_name')"
        :schema="nameSchema"
        class="form-field"
        name="name"
        type="text"
      />

      <NumberInput
        v-model="ageInput"
        :label="$t('form.label.age')"
        :options="schemaOptions"
        :placeholder="$t('form.placeholder.age')"
        class="form-field"
        name="age"
      />

      <NumberInput
        v-model="employeeNoInput"
        :label="$t('form.label.employee_no')"
        :placeholder="$t('form.placeholder.employee_no')"
        :schema="employeeNoSchema"
        class="form-field"
        name="employee_number"
      />

      <div class="form-actions">
        <button class="submit-button" type="submit">Submit</button>
      </div>
    </form>
  </Page>
</template>

<script lang="ts">
export default {
  name: "Layout",
};
</script>

<script setup lang="ts">
import { Input, NumberInput } from "@dzangolab/vue3-form";
import { z } from "zod";
import { ref } from "vue";

import type { Ref } from "vue";

const ageInput: Ref<number | undefined> = ref();
const employeeNoInput: Ref<number | undefined> = ref();
const nameInput: Ref<string> = ref("");

const employeeNoSchema = z.string().refine((val) => Number(val) > 0, {
  message: "Must be a valid employee number",
});
const nameSchema = z
  .string()
  .min(3, { message: "Username must be atleast 3 character(s)" });

const schemaOptions = {
  max: 100,
  min: 18,
};
</script>

<style scoped>
.form > .form-actions {
  align-items: center;
  display: flex;
  justify-content: flex-end;
}

.form-actions > .submit-button {
  background: var(--dz-primary-color);
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  float: right;
  font-weight: 700;
  padding: 0.75rem 1.25rem;
  width: max-content;
}
</style>
