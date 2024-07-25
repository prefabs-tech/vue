<template>
  <Page :title="$t('form.title')">
    <Form class="form" @submit="onSubmit">
      <Input
        v-model="formData.name"
        :label="$t('form.label.fullName') + ' *'"
        :placeholder="$t('form.placeholder.fullName')"
        :schema="nameSchema"
        class="form-field"
        name="name"
        type="text"
      />

      <Email
        v-model="formData.email"
        :label="$t('form.label.email') + ' *'"
        :placeholder="$t('form.placeholder.email')"
      />

      <Password
        v-model="formData.password"
        :label="$t('form.label.password') + ' *'"
        :placeholder="$t('form.placeholder.password')"
      />

      <NumberInput
        v-model="formData.age"
        :label="$t('form.label.age') + ' *'"
        :options="schemaOptions"
        :placeholder="$t('form.placeholder.age')"
        class="form-field"
        name="age"
      />

      <NumberInput
        v-model="formData.employeeNo"
        :label="$t('form.label.employeeNo') + ' *'"
        :placeholder="$t('form.placeholder.employeeNo')"
        :schema="employeeNoSchema"
        class="form-field"
        name="employee_number"
      />

      <TextInput
        v-model="formData.current_address"
        :label="$t('form.label.currentAddress')"
        :placeholder="$t('form.placeholder.currentAddress')"
        class="form-field"
        name="current_address"
      />

      <TextareaInput
        v-model="formData.bio"
        :label="$t('form.label.bio')"
        :placeholder="$t('form.placeholder.bio')"
        class="form-field"
        name="bio"
      />

      <div class="form-actions">
        <button class="submit-button" type="submit">
          {{ $t("form.actions.submit") }}
        </button>
      </div>
    </Form>

    <div v-if="showSubmittedData" class="submitted-data">
      <CodeBlock
        :code-content="formattedData"
        :title="$t('form.submittedValue')"
      />
    </div>
  </Page>
</template>

<script lang="ts">
export default {
  name: "Layout",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import {
  Email,
  Input,
  NumberInput,
  Password,
  TextareaInput,
  TextInput,
} from "@dzangolab/vue3-form";
import { Form } from "vee-validate";
import { computed, reactive, ref } from "vue";
import { z } from "zod";

import CodeBlock from "@/components/CodeBlock.vue";

import type { Ref } from "vue";

let formData = reactive({
  age: ref(),
  bio: ref(),
  current_address: ref(),
  email: ref(),
  employeeNo: ref(),
  password: ref(),
  name: ref(),
});

const showSubmittedData: Ref<boolean> = ref(false);

const { t } = useI18n();

const employeeNoSchema = z
  .string({ invalid_type_error: t("form.errors.employeeNo.invalid") })
  .refine((val) => Number(val) > 0, {
    message: t("form.errors.employeeNo.invalid"),
  });

const nameSchema = z.string().min(3, { message: t("form.errors.name.min") });

const schemaOptions = {
  max: 100,
  min: 18,
};

const formattedData = computed(() => {
  return JSON.stringify(formData, null, 2);
});

const onSubmit = () => {
  showSubmittedData.value = true;
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
