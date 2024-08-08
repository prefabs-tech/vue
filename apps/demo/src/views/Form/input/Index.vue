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

        const inputSchema = z.string().min(3, { message: t("form.errors.input.min") });        
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
  input: ref(),
  inputWithValidation: ref(),
  noLabelInput: ref(),
  passwordInput: ref(),
});
</script>
