<template>
  <FormPage
    :subtitle="t('form.subtitle.number')"
    :title="$t('form.label.number')"
    class="demo"
  >
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
        <NumberInput
          v-model="formData.noLabelInput"
          :placeholder="$t('form.placeholder.number')"
        />

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;NumberInput 
              v-model="input"
              placeholder="Enter a number"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { NumberInput } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.labelInput") }}</h2>

      <div class="section-content">
        <NumberInput
          v-model="formData.input"
          :label="$t('form.label.number')"
          :placeholder="$t('form.placeholder.number')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;NumberInput 
              v-model="input"
              label="Number"
              placeholder="Enter a number"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { NumberInput } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <NumberInput
          v-model="formData.disabled"
          :label="$t('form.label.number')"
          disabled
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;NumberInput 
              v-model="input"
              label="Number"
              disabled
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { NumberInput } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withI18n") }}</h2>

      <div class="section-content">
        <NumberInput
          v-model="formData.i18nInput"
          :label="$t('form.label.number')"
          :placeholder="$t('form.placeholder.number')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;NumberInput 
              v-model="input"
              :label="t('form.label.number')"
              :placeholder="t('form.placeholder.number')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { NumberInput } from "@prefabs.tech/vue3-form";
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
          <NumberInput
            v-model="formData.inputWithValidation"
            :label="$t('form.label.number')"
            :options="validationOptions"
            :placeholder="$t('form.placeholder.number')"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;NumberInput 
              v-model="input"
              :options="validationOptions"
              label="Number"
              placeholder="Enter a number"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, NumberInput } from "@prefabs.tech/vue3-form";
          
          import type { IsIntOptions } from "@prefabs.tech/vue3-form";
  
          const validationOptions = {
            min: 1,
            max: 100,
            allow_leading_zeroes: false,
          } as IsIntOptions;
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customErrorMessageInput") }}</h2>

      <div class="section-content">
        <Form>
          <NumberInput
            v-model="formData.textInput"
            :label="$t('form.label.number')"
            :error-messages="validationMessages"
            :options="validationOptions"
            :placeholder="$t('form.placeholder.number')"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;NumberInput 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Number"
              placeholder="Enter a number"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, NumberInput } from "@prefabs.tech/vue3-form";

          import type { NumberErrorMessages, IsIntOptions } from "@prefabs.tech/vue3-form";

          const validationMessages = {
            invalid: "Please provide a number between 1 to 100",
            required: "The field is required",
          } as NumberErrorMessages;

          const validationOptions = {
            min: 1,
            max: 100,
            allow_leading_zeroes: false,
          } as IsIntOptions;
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customValidationInput") }}</h2>

      <div class="section-content">
        <Form>
          <NumberInput
            v-model="formData.customValidationInput"
            :label="$t('form.label.number')"
            :placeholder="$t('form.placeholder.number')"
            :schema="inputSchema"
            name="number"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;NumberInput 
              v-model="input"
              :schema="inputSchema"
              label="Number"
              placeholder="Enter a number"
              name="number"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, NumberInput } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const invalidNumberError = "Please provide a number between 1 to 100";

          const inputSchema =  z.coerce
            .number({invalid_type_error: invalidNumberError})
            .gte(1, invalidNumberError)
            .lte(100, invalidNumberError);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'NumberInputProperties' })
      "
    />

    <!-- eslint-disable -->
    <SshPre language="html-vue">
      interface NumberErrorMessages {
        invalid?: string;
        required?: string;
      }
    </SshPre>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "NumberInputField",
};
</script>

<script setup lang="ts">
import { Form, NumberInput } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { ButtonElement } from "@prefabs.tech/vue3-ui";
import { reactive, ref } from "vue";
import { z } from "zod";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import FormPage from "../FormPage.vue";

import type {
  NumberErrorMessages,
  IsIntOptions,
} from "@prefabs.tech/vue3-form";

const { t } = useI18n();

const eventsData = [
  {
    description: t("form.documentation.eventDescription.input.modelValue"),
    name: "update:modelValue",
    payload: "number | undefined",
  },
];

const inputSchema = z.coerce
  .number({ invalid_type_error: t("form.errors.number.invalid") })
  .gte(1, t("form.errors.number.invalid"))
  .lte(100, t("form.errors.number.invalid"));

const propsData = [
  {
    default: "false",
    description: t("form.documentation.propsDescription.input.disabled"),
    prop: "disabled",
    type: "Boolean",
  },
  {
    default: `{ required: "The field is required", invalid: "Please provide a valid integer field" }`,
    description: t("form.documentation.propsDescription.input.errorMessages"),
    prop: "errorMessages",
    type: "NumberErrorMessages",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.label"),
    prop: "label",
    type: "String",
  },
  {
    default: "undefined",
    description: t("form.documentation.propsDescription.input.modelValue"),
    prop: "modelValue",
    type: "number | null | undefined",
  },
  {
    default: '"number"',
    description: t("form.documentation.propsDescription.input.name"),
    prop: "name",
    type: "String",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.options"),
    prop: "options",
    type: "IsIntOptions",
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
    type: "z.ZodType<string | number>",
  },
];

const validationMessages = {
  invalid: t("form.errors.number.invalid"),
  required: t("form.errors.number.required"),
} as NumberErrorMessages;

const validationOptions = {
  min: 1,
  max: 100,
  allow_leading_zeroes: false,
} as IsIntOptions;

let formData = reactive({
  customValidationInput: ref(),
  disabled: ref(100),
  i18nInput: ref(),
  input: ref(),
  inputWithValidation: ref(),
  noLabelInput: ref(),
  textInput: ref(),
});
</script>
