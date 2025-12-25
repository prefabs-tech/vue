<template>
  <FormPage
    :subtitle="t('form.subtitle.email')"
    :title="$t('form.label.email')"
    class="demo"
  >
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <Email
          v-model="formData.noLabelInput"
          :placeholder="$t('form.placeholder.email')"
        />

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Email 
              v-model="input"
              placeholder="Enter a email"
            /&gt;
          &lt;/template&gt;
  
          &lt;script setup lang="ts"&gt;
          import { Email } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.labelInput") }}</h2>

      <div class="section-content">
        <Email
          v-model="formData.input"
          :label="$t('form.label.email')"
          :placeholder="$t('form.placeholder.email')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Email 
              v-model="input"
              label="Email"
              placeholder="Enter a email"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Email } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <Email
          v-model="formData.disabled"
          :label="$t('form.label.email')"
          disabled
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Email 
              v-model="input"
              label="Email"
              disabled
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Email } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
  
          const input = ref("monorepo@prefabs.tech.com");
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withI18n") }}</h2>

      <div class="section-content">
        <Email
          v-model="formData.i18nInput"
          :label="t('form.label.email')"
          :placeholder="t('form.placeholder.email')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Email 
              v-model="input"
              :label="t('form.label.email')"
              :placeholder="t('form.placeholder.email')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Email } from "@prefabs.tech/vue3-form";
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
          <Email
            v-model="formData.inputWithValidation"
            :label="$t('form.label.email')"
            :placeholder="$t('form.placeholder.email')"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;Email 
              v-model="input"
              label="Email"
              placeholder="Enter a email"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, Email } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.inputWithValidationOptions") }}</h2>

      <div class="section-content">
        <Form>
          <Email
            v-model="formData.validationOptionInput"
            :label="$t('form.label.email')"
            :options="validationOptions"
            :placeholder="$t('form.placeholder.email')"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;Email 
              v-model="input"
              :options="validationOptions"
              label="Email"
              placeholder="Enter a email"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, Email } from "@prefabs.tech/vue3-form";
          
          import type { IsEmailOptions } from "@prefabs.tech/vue3-form";

          const validationOptions = {
            allow_display_name: false,
            allow_utf8_local_part: true,
            host_whitelist: ["dzangolab.com", "dzango.com", "gmail.com"],
            require_display_name: false,
          } as IsEmailOptions;
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customErrorMessageInput") }}</h2>

      <div class="section-content">
        <Form>
          <Email
            v-model="formData.textInput"
            :label="$t('form.label.email')"
            :error-messages="validationMessages"
            :options="validationOptions"
            :placeholder="$t('form.placeholder.email')"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;Email 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Email"
              placeholder="Enter a email"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, Email } from "@prefabs.tech/vue3-form";
          
          import type { EmailErrorMessages, IsEmailOptions } from "@prefabs.tech/vue3-form";

          const validationMessages = {
            required: "The field should not be empty",
            invalid: "Please provide a valid email (dzangolab.com, dzango.com, gmail.com)"
          } as EmailErrorMessages;

          const validationOptions = {
            allow_display_name: false,
            allow_utf8_local_part: true,
            host_whitelist: ["dzangolab.com", "dzango.com", "gmail.com"],
            require_display_name: false,
          } as IsEmailOptions;
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customValidationInput") }}</h2>

      <div class="section-content">
        <Form>
          <Email
            v-model="formData.customValidationInput"
            :label="$t('form.label.email')"
            :placeholder="$t('form.placeholder.email')"
            :schema="inputSchema"
            name="custom_input"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;Email 
              v-model="input"
              :schema="inputSchema"
              label="Email"
              placeholder="Enter a email"
              name="input"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, Email } from "@prefabs.tech/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .email({ message: "Please provide a valid email" });
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="$t('common.properties', { value: 'EmailProperties' })"
    />

    <!-- eslint-disable -->
    <SshPre language="html-vue">
      interface EmailErrorMessages {
        invalid?: string;
        required?: string;
      }
    </SshPre>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "EmailInputField",
};
</script>

<script setup lang="ts">
import { Form, Email } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { reactive, ref } from "vue";
import { z } from "zod";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import FormPage from "../FormPage.vue";

import type {
  EmailErrorMessages,
  IsEmailOptions,
} from "@prefabs.tech/vue3-form";

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
  .email({ message: t("form.errors.email.invalid") });

const propsData = [
  {
    default: "false",
    description: t("form.documentation.propsDescription.input.disabled"),
    prop: "disabled",
    type: "Boolean",
  },
  {
    default: `{ required: "Email address is required", invalid: "Please provide a valid email address" }`,
    description: t("form.documentation.propsDescription.input.errorMessages"),
    prop: "errorMessages",
    type: "EmailErrorMessages",
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
    default: '"email"',
    description: t("form.documentation.propsDescription.input.name"),
    prop: "name",
    type: "String",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.options"),
    prop: "options",
    type: "IsEmailOptions",
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
  invalid: t("form.errors.email.invalid", {
    list: "(dzangolab.com, dzango.com, gmail.com)",
  }),
} as EmailErrorMessages;

const validationOptions = {
  allow_display_name: false,
  allow_utf8_local_part: true,
  host_whitelist: ["dzangolab.com", "dzango.com", "gmail.com"],
  require_display_name: false,
} as IsEmailOptions;

let formData = reactive({
  customValidationInput: ref(),
  disabled: ref("monorepo@prefabs.tech.com"),
  i18nInput: ref(),
  input: ref(),
  inputWithValidation: ref(),
  noLabelInput: ref(),
  textInput: ref(),
  validationOptionInput: ref(),
});
</script>
