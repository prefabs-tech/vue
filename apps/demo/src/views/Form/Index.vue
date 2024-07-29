<template>
  <Page :title="$t('form.title')">
    <Form
      :class="{
        'hide-valid-state': !formData.showValid,
        'hide-invalid-state': !formData.showInvalid,
      }"
      class="form"
      @submit="onSubmit"
    >
      <FormInputModes
        v-model:show-invalid="formData.showInvalid"
        v-model:show-valid="formData.showValid"
      />

      <Email
        v-model="formData.email"
        :label="$t('form.label.email')"
        :placeholder="$t('form.placeholder.email')"
        class="form-field"
      />

      <TextInput
        v-model="formData.text"
        :label="$t('form.label.textInput')"
        :placeholder="$t('form.placeholder.textInput')"
        class="form-field"
        name="text_input"
      />

      <Password
        v-model="formData.password"
        :label="$t('form.label.password')"
        :placeholder="$t('form.placeholder.password')"
        class="form-field"
      />

      <Input
        v-model="formData.input"
        :label="$t('form.label.input')"
        :placeholder="$t('form.placeholder.input')"
        :schema="inputSchema"
        class="form-field"
        name="input"
        type="text"
      />

      <NumberInput
        v-model="formData.number"
        :error-messages="numberErrorMessages"
        :label="$t('form.label.number')"
        :options="schemaOptions"
        :placeholder="$t('form.placeholder.number')"
        class="form-field"
        name="number"
      />

      <TextareaInput
        v-model="formData.textarea"
        :label="$t('form.label.textarea')"
        :placeholder="$t('form.placeholder.textarea')"
        class="form-field"
        name="textarea"
      />

      <Input
        v-model="formData.disabled"
        :disabled="true"
        :label="$t('form.label.disabled')"
        class="form-field"
        name="disabled"
        type="email"
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
  SwitchInput,
  TextareaInput,
  TextInput,
} from "@dzangolab/vue3-form";
import { Form } from "vee-validate";
import { computed, reactive, ref } from "vue";
import { z } from "zod";

import CodeBlock from "@/components/CodeBlock.vue";
import FormInputModes from "./components/FormInputModes.vue";

import type { Ref } from "vue";

const { t } = useI18n();

const inputSchema = z.string().min(3, { message: t("form.errors.input.min") });

const schemaOptions = {
  max: 100,
  min: 1,
};

let formData = reactive({
  disabled: ref("monorepo@gmail.com"),
  email: ref(),
  input: ref(),
  number: ref(),
  password: ref(),
  showInvalid: ref(true),
  showValid: ref(true),
  text: ref(),
  textarea: ref(),
});

const numberErrorMessages = reactive({
  invalid: t("form.errors.number.invalid"),
  required: t("form.errors.number.required"),
});

const showSubmittedData: Ref<boolean> = ref(false);

const formattedData = computed(() => {
  return JSON.stringify(formData, null, 2);
});

const onSubmit = () => {
  showSubmittedData.value = true;
};
</script>

<style lang="css">
.form > .form-actions {
  align-items: center;
  display: flex;
  justify-content: flex-end;
}

.form > .form-field {
  margin-bottom: 0.625rem;
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

.hide-invalid-state input.invalid,
.hide-valid-state input.valid {
  background-image: none;
  border-color: var(--form-input-border-color);
}

.hide-invalid-state input.invalid:focus-visible,
.hide-valid-state input.valid:focus-visible {
  box-shadow: 0 0 0 0.25rem #32323240;
}
</style>
