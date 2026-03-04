<template>
  <FormPage
    :subtitle="t('form.subtitle.text')"
    :title="$t('form.label.textInput')"
    class="demo"
  >
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
          import { TextInput } from "@prefabs.tech/vue3-form";
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
          name="label-input"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TextInput 
              v-model="input"
              label="Input"
              name="text"
              placeholder="Enter Input"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TextInput } from "@prefabs.tech/vue3-form";
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
          name="disabled-input"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TextInput 
              v-model="input"
              disabled
              label="Disabled"
              name="text"
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
        <TextInput
          v-model="formData.input"
          :label="$t('form.label.textInput')"
          :placeholder="$t('form.placeholder.textInput')"
          name="i18n-input"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;TextInput 
              v-model="input"
              :label="t('form.label.textInput')"
              :placeholder="t('form.placeholder.textInput')"
              name="text"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { TextInput } from "@prefabs.tech/vue3-form";
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
          <TextInput
            v-model="formData.inputWithValidation"
            :label="$t('form.label.input')"
            :options="validationOptions"
            :placeholder="$t('form.placeholder.input')"
            name="validation-input"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;TextInput 
              v-model="input"
              :options="validationOptions"
              label="Input"
              name="text"
              placeholder="Enter input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, TextInput } from "@prefabs.tech/vue3-form";

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
            name="custom-message-input"
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
              name="text"
              placeholder="Enter input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, TextInput } from "@prefabs.tech/vue3-form";

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
            name="custom-validation-input"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;TextInput 
              v-model="input"
              :schema="inputSchema"
              label="Input"
              name="text"
              placeholder="Enter input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, Input } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .length(5, { message: "Input must be exactly 5 characters long") });
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'TextInputProperties' })
      "
    />

    <!-- eslint-disable -->
    <SshPre language="html-vue">
      interface TextErrorMessages {
        invalid?: string;
        required?: string;
      }
    </SshPre>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "TextInputDemo",
};
</script>

<script setup lang="ts">
import { Form, TextInput } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { reactive, ref } from "vue";
import { z } from "zod";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import FormPage from "../FormPage.vue";

const { t } = useI18n();

const eventsData = [
  {
    description: t("form.documentation.eventDescription.input.modelValue"),
    name: "update:modelValue",
    payload: "string | null | undefined",
  },
];

const inputSchema = z
  .string()
  .length(5, { message: t("form.errors.input.length", { length: 5 }) });

const propsData = [
  {
    default: "false",
    description: t("form.documentation.propsDescription.input.disabled"),
    prop: "disabled",
    type: "Boolean",
  },
  {
    default: `{ invalid: "Please provide a valid input data", required: "The field is required", }`,
    description: t("form.documentation.propsDescription.input.errorMessages"),
    prop: "errorMessages",
    type: "TextErrorMessages",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.label"),
    prop: "label",
    type: "String",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.modelValue"),
    prop: "modelValue",
    type: "String | null | undefined",
  },
  {
    default: '"text_input"',
    description: t("form.documentation.propsDescription.input.name"),
    prop: "name",
    type: "String",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.options"),
    prop: "options",
    type: "Object",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.placeholder"),
    prop: "placeholder",
    type: "String",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.schema"),
    prop: "schema",
    type: "z.ZodType<string | number | object>",
  },
];

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
