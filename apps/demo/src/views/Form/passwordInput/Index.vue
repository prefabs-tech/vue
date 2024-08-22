<template>
  <Page :title="$t('form.label.textInput')">
    <section class="demo-section">
      <h3>{{ $t("form.label.basicInput") }}</h3>

      <!-- eslint-disable -->
       <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Password 
            v-model="input"
            placeholder="Enter a password"
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Password } from "@dzangolab/vue3-form";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <Password
        v-model="formData.noLabelInput"
        :placeholder="$t('form.placeholder.password')"
        class="form-field"
      />
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.labelInput") }}</h3>

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
        import { Password } from "@dzangolab/vue3-form";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <Password
        v-model="formData.input"
        :label="$t('form.label.password')"
        :placeholder="$t('form.placeholder.password')"
        class="form-field"
      />
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.disabled") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Password 
            v-model="input"
            label="Disabled"
            disabled
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Password } from "@dzangolab/vue3-form";
        import { ref } from vue;

        const input = ref("P@ssw0rd");
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <Password
        v-model="formData.disabled"
        :label="$t('form.label.disabled')"
        class="form-field"
        disabled
      />
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.inputWithValidation") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Form&gt;
            &lt;Password 
              v-model="input"
              :options="validationOptions"
              label="Password"
              placeholder="Enter a password"
            /&gt;
          &lt;/Form&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Form, Password } from "@dzangolab/vue3-form";
        
        import type { StrongPasswordOptions } from "@dzangolab/vue3-form";

        const validationOptions = {
          minLength: 10,
          minLowercase: 1,
          minUppercase: 1,
          minSymbols: 1,
        } as StrongPasswordOptions;
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <Form>
        <Password
          v-model="formData.inputWithValidation"
          :label="$t('form.label.password')"
          :options="validationOptions"
          :placeholder="$t('form.placeholder.password')"
          class="form-field"
        />
      </Form>
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.customErrorMessageInput") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Form&gt;
            &lt;Password 
              v-model="input"
              :error-messages="validationMessages"
              :options="validationOptions"
              label="Password"
              placeholder="Enter a password"
            /&gt;
          &lt;/Form&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Form, Password } from "@dzangolab/vue3-form";
        
        import type { PasswordErrorMessages, StrongPasswordOptions } from "@dzangolab/vue3-form";

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

      <Form>
        <Password
          v-model="formData.passwordInput"
          :label="$t('form.label.password')"
          :error-messages="validationMessages"
          :options="validationOptions"
          :placeholder="$t('form.placeholder.password')"
          class="form-field"
        />
      </Form>
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.customValidationInput") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Form&gt;
            &lt;Password 
              v-model="input"
              :schema="inputSchema"
              label="Password"
              placeholder="Enter a password"
              name="input"
            /&gt;
          &lt;/Form&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Form, Password } from "@dzangolab/vue3-form";
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

      <Form>
        <Password
          v-model="formData.customValidationInput"
          :label="$t('form.label.password')"
          :placeholder="$t('form.placeholder.password')"
          :schema="inputSchema"
          class="form-field"
          name="custom_input"
        />
      </Form>
    </section>

    <section class="demo-section">
      <h3>{{ $t("form.label.customStyleInput") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Password 
            v-model="input"
            class="custom-style-input"
            label="Password"
            placeholder="Enter a password"
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Password } from "@dzangolab/vue3-form";
        &lt;/script&gt;

        &lt;style&gt;
        .custom-style-input input {
          --_input-field-border-color: #007aff;
          --_input-field-border-radius: 0.5em;
          --_input-field-label-color: #007aff;
          --_input-field-padding-h: 0.5em;
          --_input-field-padding-v: 0.5em;

          color: #007aff;
        }

        .custom-style-input input:focus {
          box-shadow: 0 0 0 0.25rem #03449e9a;
        }
        &lt;/style&gt;
      </SshPre>
      <!-- eslint-enable -->

      <Password
        v-model="formData.customStyleInput"
        :label="$t('form.label.password')"
        :placeholder="$t('form.placeholder.password')"
        class="form-field custom-style-input"
      />
    </section>
  </Page>
</template>

<script lang="ts">
export default {
  name: "PasswordInputField",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { Form, Password } from "@dzangolab/vue3-form";
import { reactive, ref } from "vue";
import { z } from "zod";

import type {
  PasswordErrorMessages,
  StrongPasswordOptions,
} from "@dzangolab/vue3-form";

const { t } = useI18n();

const inputSchema = z
  .string({
    invalid_type_error: t("form.errors.password.invalid"),
    required_error: t("form.errors.input.required"),
  })
  .min(8, { message: t("form.errors.password.min", { length: 8 }) })
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
    t("form.errors.password.invalid")
  );

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
  customStyleInput: ref(),
  customValidationInput: ref(),
  disabled: ref("P@ssw0rd"),
  input: ref(),
  inputWithValidation: ref(),
  noLabelInput: ref(),
  passwordInput: ref(),
});
</script>

<style lang="css">
.custom-style-input input {
  --_input-field-border-color: var(--dz-primary-color);
  --_input-field-border-radius: 0.5em;
  --_input-field-padding-h: 0.5em;
  --_input-field-padding-v: 0.5em;

  color: var(--dz-primary-color);
}

.custom-style-input input:focus {
  box-shadow: 0 0 0 0.25rem #03449e9a;
}

.custom-style-input label {
  --_input-field-label-color: var(--dz-primary-color);
}
</style>
