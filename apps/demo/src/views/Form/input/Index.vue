<template>
  <Page :title="$t('form.label.input')">
    <section>
      <h3>{{ $t("form.label.basicInput") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Input 
            v-model="input"
            label="Input"
            placeholder="Enter Input"
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Input } from "@dzangolab/vue3-form";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <Input
        v-model="formData.input"
        :label="$t('form.label.input')"
        :placeholder="$t('form.placeholder.input')"
        class="form-field"
      />
    </section>

    <section>
      <h3>{{ $t("form.label.noLabelInput") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Input 
            v-model="input"
            placeholder="Enter Input"
            type="text"
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Input } from "@dzangolab/vue3-form";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <Input
        v-model="formData.noLabelInput"
        :placeholder="$t('form.placeholder.input')"
        class="form-field"
        type="text"
      />
    </section>

    <section>
      <h3>{{ $t("form.label.inputWithType") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Input 
            v-model="password"
            label="Password"
            placeholder="Enter password"
            type="password"
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Input } from "@dzangolab/vue3-form";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <Input
        v-model="formData.passwordInput"
        :label="$t('form.label.password')"
        :placeholder="$t('form.placeholder.password')"
        class="form-field"
        type="password"
      />
    </section>

    <section>
      <h3>{{ $t("form.label.disabledInput") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Input 
            v-model="email"
            label="Disabled input"
            type="email"
            disabled
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Input } from "@dzangolab/vue3-form";
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <Input
        v-model="formData.disabled"
        :label="$t('form.label.disabled')"
        class="form-field"
        type="email"
        disabled
      />
    </section>

    <section>
      <h3>{{ $t("form.label.inputWithValidation") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Form&gt;
            &lt;Input 
              v-model="inputWithValidation"
              :schema="inputSchema"
              label="Input"
              placeholder="Enter input"
              type="text"
            /&gt;
          &lt;/Form&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Form, Input } from "@dzangolab/vue3-form";
        import { z } from "zod";

        const inputSchema = z.string().min(3, { message: "Input must be at least 3 character(s)" });        
        &lt;/script&gt;
      </SshPre>
      <!-- eslint-enable -->

      <Form>
        <Input
          v-model="formData.inputWithValidation"
          :label="$t('form.label.input')"
          :placeholder="$t('form.placeholder.input')"
          class="form-field"
          :schema="inputSchema"
          name="input"
          type="text"
        />
      </Form>
    </section>

    <section>
      <h3>{{ $t("form.label.customStyleInput") }}</h3>

      <!-- eslint-disable -->
      <SshPre language="html-vue">
        &lt;template&gt;
          &lt;Input 
            v-model="number"
            class="custom-style-input"
            label="Number"
            placeholder="Enter a number"
            type="number"
          /&gt;
        &lt;/template&gt;

        &lt;script setup lang="ts"&gt;
        import { Input } from "@dzangolab/vue3-form";
        &lt;/script&gt;

        &lt;style&gt;
        .custom-style-input {
          flex-direction: row;
          align-items: center;
        }

        .custom-style-input input {
          --_input-field-border-color: #007aff;
          --_input-field-border-radius: 1em;
          --_input-field-padding-h: 0.5em;
          --_input-field-padding-v: 0.5em;
        }

        .custom-style-input input:focus {
          box-shadow: 0 0 0 .25rem #004da08e;
        }
        &lt;/style&gt;
      </SshPre>
      <!-- eslint-enable -->

      <Input
        v-model="formData.numberInput"
        :label="$t('form.label.number')"
        :placeholder="$t('form.placeholder.number')"
        class="form-field custom-style-input"
        type="number"
      />
    </section>
  </Page>
</template>

<script lang="ts">
export default {
  name: "InputField",
};
</script>

<script setup lang="ts">
import { useI18n } from "@dzangolab/vue3-i18n";
import { Form, Input } from "@dzangolab/vue3-form";
import { reactive, ref } from "vue";
import { z } from "zod";

const { t } = useI18n();

const inputSchema = z.string().min(3, { message: t("form.errors.input.min") });

let formData = reactive({
  disabled: ref("monorepo@gmail.com"),
  input: ref(),
  inputWithValidation: ref(),
  noLabelInput: ref(),
  numberInput: ref(),
  passwordInput: ref(),
});
</script>

<style lang="css">
.custom-style-input {
  flex-direction: row;
  align-items: center;
}

.custom-style-input input {
  --_input-field-border-color: var(--dz-primary-color);
  --_input-field-border-radius: 1em;
  --_input-field-padding-h: 0.5em;
  --_input-field-padding-v: 0.5em;
}

.custom-style-input input:focus {
  box-shadow: 0 0 0 0.25rem #004da08e;
}
</style>
