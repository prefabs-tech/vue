<template>
  <FormPage
    :subtitle="t('form.subtitle.password')"
    :title="$t('form.label.password')"
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
        <Password
          v-model="formData.noLabelInput"
          :placeholder="$t('form.placeholder.password')"
          name="basic"
        />

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Password 
              v-model="input"
              placeholder="Enter a password"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Password } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.labelInput") }}</h2>

      <div class="section-content">
        <Password
          v-model="formData.input"
          :label="$t('form.label.password')"
          :placeholder="$t('form.placeholder.password')"
          name="labeled"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Password 
              v-model="input"
              label="Password"
              placeholder="Enter a password"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Password } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <Password
          v-model="formData.disabled"
          :label="$t('form.label.password')"
          disabled
          name="disabled"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Password 
              v-model="input"
              label="Password"
              disabled
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Password } from "@prefabs.tech/vue3-form";
          import { ref } from vue;
  
          const input = ref("P@ssw0rd");
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withI18n") }}</h2>

      <div class="section-content">
        <Password
          v-model="formData.input"
          :label="$t('form.label.password')"
          :placeholder="$t('form.placeholder.password')"
          name="i18n"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Password 
              v-model="input"
              :label="t('form.label.password')"
              :placeholder="t('form.placeholder.password')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Password } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.iconSlot") }}</h2>

      <div class="section-content">
        <Password
          v-model="formData.input"
          :label="$t('form.label.password')"
          :placeholder="$t('form.placeholder.password')"
          name="icon-slot"
        >
          <template #icon="{ showPassword }">
            <i :class="`pi ${showPassword ? 'pi-eye' : 'pi-eye-slash'}`" />
          </template>
        </Password>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Password 
              v-model="input"
              :label="t('form.label.password')"
              :placeholder="t('form.placeholder.password')"
            &gt;
              &lt;template #icon="{ showPassword }"&gt;
                &lt;i :class="`pi ${ showPassword ? 'pi-eye' : 'pi-eye-slash'}`" /&gt;
              &lt;/template&gt;
            &lt;Password&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Password } from "@prefabs.tech/vue3-form";
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
          <Password
            v-model="formData.inputWithValidation"
            :label="$t('form.label.password')"
            :options="validationOptions"
            :placeholder="$t('form.placeholder.password')"
            name="validation"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;Password 
              v-model="input"
              :options="validationOptions"
              label="Password"
              placeholder="Enter a password"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, Password } from "@prefabs.tech/vue3-form";
          
          import type { StrongPasswordOptions } from "@prefabs.tech/vue3-form";

          const validationOptions = {
            minLength: 10,
            minLowercase: 1,
            minUppercase: 1,
            minSymbols: 1,
          } as StrongPasswordOptions;
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customErrorMessageInput") }}</h2>

      <div class="section-content">
        <Form>
          <Password
            v-model="formData.passwordInput"
            :label="$t('form.label.password')"
            :error-messages="validationMessages"
            :options="validationOptions"
            :placeholder="$t('form.placeholder.password')"
            name="custom-error"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;Password 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Password"
              placeholder="Enter a password"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, Password } from "@prefabs.tech/vue3-form";
          import type { PasswordErrorMessages, StrongPasswordOptions } from "@prefabs.tech/vue3-form";

          const validationMessages = {
            required: "The field should not be empty",
            weak: "Please provide a strong password",
          } as PasswordErrorMessages;

          const validationOptions = {
            minLength: 10,
            minLowercase: 1,
            minUppercase: 1,
            minSymbols: 1,
          } as StrongPasswordOptions;
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customValidationInput") }}</h2>

      <div class="section-content">
        <Form>
          <Password
            v-model="formData.customValidationInput"
            :label="$t('form.label.password')"
            :placeholder="$t('form.placeholder.password')"
            :schema="inputSchema"
            name="custom-input"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;Password 
              v-model="input"
              :schema="inputSchema"
              label="Password"
              placeholder="Enter a password"
              name="input"
            /&gt;
          &lt;/Form&gt;
  
          &lt;script setup lang="ts"&gt;
          import { Form, Password } from "@prefabs.tech/vue3-form";
          import { z } from "zod";
  
          const inputSchema = z
            .string({
              invalid_type_error: "Please provide a strong password",
              required_error: "The field is required"
            })
            .min(8, { message: "Input must be at least 8 character(s)" })
            .regex(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
              "Please provide a strong password"
            );
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'PasswordProperties' })
      "
      :slots-data="slotsData"
    />

    <!-- eslint-disable -->
    <SshPre language="html-vue">
      interface PasswordErrorMessages {
        required?: string;
        weak?: string;
      }
    </SshPre>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "PasswordInputField",
};
</script>

<script setup lang="ts">
import { Form, Password } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { ButtonElement } from "@prefabs.tech/vue3-ui";
import { reactive, ref } from "vue";
import { z } from "zod";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import FormPage from "../FormPage.vue";

import type {
  PasswordErrorMessages,
  StrongPasswordOptions,
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
  .string({
    invalid_type_error: t("form.errors.password.invalid"),
    required_error: t("form.errors.input.required"),
  })
  .min(8, { message: t("form.errors.password.min", { length: 8 }) })
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
    t("form.errors.password.invalid"),
  );

const propsData = [
  {
    default: "false",
    description: t("form.documentation.propsDescription.input.disabled"),
    prop: "disabled",
    type: "Boolean",
  },
  {
    default: `{ required: "A password is required", weak: "This password is too weak" }`,
    description: t("form.documentation.propsDescription.input.errorMessages"),
    prop: "errorMessages",
    type: "PasswordErrorMessages",
  },
  {
    default: "null",
    description: t("form.documentation.propsDescription.input.label"),
    prop: "label",
    type: "string | null | undefined",
  },
  {
    default: "null",
    description: t("form.documentation.propsDescription.input.modelValue"),
    prop: "modelValue",
    type: "string | null | undefined",
  },
  {
    default: '"password"',
    description: t("form.documentation.propsDescription.input.name"),
    prop: "name",
    type: "String",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.options"),
    prop: "options",
    type: "StrongPasswordOptions",
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

const slotsData = [
  {
    description: t("form.documentation.slotDescription.password.icon"),
    name: "icon",
    props: "{ showPassword: boolean }",
  },
];

const validationMessages = {
  required: t("form.errors.input.required"),
  weak: t("form.errors.password.invalid"),
} as PasswordErrorMessages;

const validationOptions = {
  minLength: 10,
  minLowercase: 1,
  minUppercase: 1,
  minSymbols: 1,
} as StrongPasswordOptions;

let formData = reactive({
  customValidationInput: ref(),
  disabled: ref("P@ssw0rd"),
  input: ref(),
  inputWithValidation: ref(),
  noLabelInput: ref(),
  passwordInput: ref(),
});
</script>
