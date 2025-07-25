<template>
  <FormPage :title="$t('form.label.textarea')" class="demo">
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/form')"
      />
    </template>

    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <TextareaInput
          v-model="formData.noLabelInput"
          :placeholder="$t('form.placeholder.input')"
        />

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TextareaInput 
              v-model="input"
              placeholder="Enter Input"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TextareaInput } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.labelInput") }}</h2>

      <div class="section-content">
        <TextareaInput
          v-model="formData.input"
          :label="$t('form.label.textarea')"
          :placeholder="$t('form.placeholder.textarea')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TextareaInput 
              v-model="input"
              label="Input"
              placeholder="Enter Input"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TextareaInput } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <TextareaInput
          v-model="formData.disabled"
          :label="$t('form.label.disabled')"
          disabled
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TextareaInput 
              v-model="input"
              label="Disabled"
              disabled
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Input } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withI18n") }}</h2>

      <div class="section-content">
        <TextareaInput
          v-model="formData.input"
          :label="$t('form.label.textarea')"
          :placeholder="$t('form.placeholder.textarea')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TextareaInput 
              v-model="input"
              :label="t('form.label.textarea')"
              :placeholder="t('form.placeholder.textarea')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TextareaInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.inputWithValidation") }}</h2>

      <div class="section-content">
        <Form>
          <TextareaInput
            v-model="formData.inputWithValidation"
            :label="$t('form.label.textarea')"
            :options="validationOptions"
            :placeholder="$t('form.placeholder.input')"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;TextareaInput 
              v-model="input"
              :options="validationOptions"
              label="Textarea"
              placeholder="Enter input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, TextareaInput } from "@prefabs.tech/vue3-form";
          
          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customErrorMessageInput") }}</h2>

      <div class="section-content">
        <Form>
          <TextareaInput
            v-model="formData.textInput"
            :label="$t('form.label.textarea')"
            :error-messages="validationMessages"
            :options="validationOptions"
            :placeholder="$t('form.placeholder.input')"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;TextareaInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Textarea"
              placeholder="Enter input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, TextareaInput } from "@prefabs.tech/vue3-form";

          const validationMessages = {
            required: "The field should not be empty"
          };

          const validationOptions = {
            ignore_whitespace: true,
            required: true
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customValidationInput") }}</h2>

      <div class="section-content">
        <Form>
          <TextareaInput
            v-model="formData.customValidationInput"
            :label="$t('form.label.textarea')"
            :placeholder="$t('form.placeholder.input')"
            :schema="inputSchema"
            name="custom_input"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;TextareaInput 
              v-model="courseTitle"
              :schema="inputSchema"
              label="Textarea""
              placeholder="Enter course title"
              name="input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, TextareaInput } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .min(15, { message: "Title must be at least 15 character(s)"") });
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customColsRowsInput") }}</h2>

      <div class="section-content">
        <Form>
          <TextareaInput
            v-model="formData.customRowsColsInput"
            :cols="100"
            :label="$t('form.label.textarea')"
            :placeholder="$t('form.placeholder.input')"
            :rows="5"
            class="textarea-field"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;TextareaInput 
              v-model="input"
              class="textarea-field"
              cols="100",
              label="Textarea"
              placeholder="Enter input"
              rows="5"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Input } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;

          &lt;style&gt;
          .textarea-field textarea {
            --_input-field-textarea-height: unset;
            --_input-field-textarea-width: unset;
          }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "TextareaInputField",
};
</script>

<script setup lang="ts">
import { Form, TextareaInput } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { ButtonElement } from "@prefabs.tech/vue3-ui";
import { reactive, ref } from "vue";
import { z } from "zod";

import FormPage from "../FormPage.vue";

const { t } = useI18n();

const inputSchema = z
  .string()
  .min(15, { message: t("form.errors.input.min", { length: 15 }) });

const validationMessages = {
  required: t("form.errors.input.required"),
};

const validationOptions = {
  ignore_whitespace: true,
  required: true,
};

let formData = reactive({
  customRowsColsInput: ref(),
  customValidationInput: ref(),
  disabled: ref("Disabled textarea input"),
  input: ref(),
  inputWithValidation: ref(),
  noLabelInput: ref(),
  textInput: ref(),
});
</script>

<style lang="css">
.textarea-field textarea {
  --_input-field-textarea-height: unset;
  --_input-field-textarea-width: unset;
}
</style>
