<template>
  <FormPage :title="$t('form.label.textInput')" class="demo">
    <template #toolbar>
      <router-link :to="{ name: 'form' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <TextInput
          v-model="formData.noLabelInput"
          :placeholder="$t('form.placeholder.input')"
        />

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TextInput 
              v-model="input"
              placeholder="Enter Input"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TextInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.labelInput") }}</h2>

      <div class="section-content">
        <TextInput
          v-model="formData.input"
          :label="$t('form.label.textInput')"
          :placeholder="$t('form.placeholder.textInput')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TextInput 
              v-model="input"
              label="Input"
              placeholder="Enter Input"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TextInput } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <TextInput
          v-model="formData.disabled"
          :label="$t('form.label.disabled')"
          disabled
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TextInput 
              v-model="input"
              label="Disabled"
              disabled
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Input } from "@dzangolab/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withI18n") }}</h2>

      <div class="section-content">
        <TextInput
          v-model="formData.input"
          :label="$t('form.label.textInput')"
          :placeholder="$t('form.placeholder.textInput')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TextInput 
              v-model="input"
              :label="t('form.label.textInput')"
              :placeholder="t('form.placeholder.textInput')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TextInput } from "@dzangolab/vue3-form";
          import { useI18n } from "@dzangolab/vue3-i18n";

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
          <TextInput
            v-model="formData.inputWithValidation"
            :label="$t('form.label.input')"
            :options="validationOptions"
            :placeholder="$t('form.placeholder.input')"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;TextInput 
              v-model="input"
              :options="validationOptions"
              label="Input"
              placeholder="Enter input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, TextInput } from "@dzangolab/vue3-form";

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
          <TextInput
            v-model="formData.textInput"
            :label="$t('form.label.input')"
            :error-messages="validationMessages"
            :options="validationOptions"
            :placeholder="$t('form.placeholder.input')"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;TextInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Input"
              placeholder="Enter input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, TextInput } from "@dzangolab/vue3-form";

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
          <TextInput
            v-model="formData.customValidationInput"
            :label="$t('form.label.input')"
            :placeholder="$t('form.placeholder.input')"
            :schema="inputSchema"
            name="custom_input"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;TextInput 
              v-model="input"
              :schema="inputSchema"
              label="Input"
              placeholder="Enter input"
              name="input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, Input } from "@dzangolab/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .length(5, { message: "Input must be exactly 5 characters long") });
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "TextInputField",
};
</script>

<script setup lang="ts">
import { Form, TextInput } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { reactive, ref } from "vue";
import { z } from "zod";

import FormPage from "../FormPage.vue";

const { t } = useI18n();

const inputSchema = z
  .string()
  .length(5, { message: t("form.errors.input.length", { length: 5 }) });

const validationMessages = {
  required: t("form.errors.input.required"),
};

const validationOptions = {
  ignore_whitespace: true,
  required: true,
};

let formData = reactive({
  customValidationInput: ref(),
  disabled: ref("dzangolab"),
  input: ref(),
  inputWithValidation: ref(),
  noLabelInput: ref(),
  textInput: ref(),
});
</script>
