<template>
  <Page :title="$t('form.title')">
    <Form class="form" @submit="onSubmit">
      <Input
        v-model="formData.name"
        :label="$t('form.label.fullName')"
        :placeholder="$t('form.placeholder.fullName')"
        :schema="nameSchema"
        class="form-field"
        name="name"
        type="text"
      />

      <NumberInput
        v-model="formData.age"
        :label="$t('form.label.age')"
        :options="schemaOptions"
        :placeholder="$t('form.placeholder.age')"
        class="form-field"
        name="age"
      />

      <NumberInput
        v-model="formData.employeeNo"
        :label="$t('form.label.employeeNo')"
        :placeholder="$t('form.placeholder.employeeNo')"
        :schema="employeeNoSchema"
        class="form-field"
        name="employee_number"
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
import { Input, NumberInput } from "@dzangolab/vue3-form";
import { Form } from "vee-validate";
import { computed, reactive, ref } from "vue";
import { z } from "zod";

import CodeBlock from "@/components/CodeBlock.vue";

import type { Ref } from "vue";

let formData = reactive({
  age: ref(),
  employeeNo: ref(),
  name: ref(),
});

const showSubmittedData: Ref<boolean> = ref(false);

const { t } = useI18n();

const employeeNoSchema = z.string().refine((val) => Number(val) > 0, {
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
