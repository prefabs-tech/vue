<template>
  <FormPage :title="$t('form.label.input')" class="demo">
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
        <Input
          v-model="formData.noLabelInput"
          :placeholder="$t('form.placeholder.username')"
          type="text"
        />

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Input 
              v-model="username"
              placeholder="Enter username"
              type="text"
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
      <h2>{{ $t("form.label.labelInput") }}</h2>

      <div class="section-content">
        <Input
          v-model="formData.input"
          :label="$t('form.label.username')"
          :placeholder="$t('form.placeholder.username')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Input 
              v-model="username"
              label="Username"
              placeholder="Enter username"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Input } from "@dzangolab/vue3-form";
          import { ref } from "vue";
  
          const username = ref(null as string);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.inputWithType") }}</h2>

      <div class="section-content">
        <Input
          v-model="formData.passwordInput"
          :label="$t('form.label.password')"
          :placeholder="$t('form.placeholder.password')"
          type="password"
        />

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
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <Input
          v-model="formData.disabled"
          :label="$t('form.label.email')"
          type="email"
          disabled
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Input 
              v-model="email"
              label="Email"
              type="email"
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
        <Input
          v-model="formData.input"
          :label="$t('form.label.username')"
          :placeholder="$t('form.placeholder.username')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Input 
              v-model="username"
              :label="t('form.label.username')"
              :placeholder="t('form.placeholder.username')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Input } from "@dzangolab/vue3-form";
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
          <Input
            v-model="formData.inputWithValidation"
            :label="$t('form.label.title')"
            :placeholder="$t('form.placeholder.title')"
            :schema="inputSchema"
            name="title"
            type="text"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;Input 
              v-model="courseTitle"
              :schema="inputSchema"
              label="Title"
              placeholder="Enter course title"
              type="text"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, Input } from "@dzangolab/vue3-form";
          import { z } from "zod";

          const inputSchema = z.string()
            .min(3, { message: "Title must be at least 3 character(s)" });        
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "InputField",
};
</script>

<script setup lang="ts">
import { Form, Input } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { ButtonElement } from "@dzangolab/vue3-ui";
import { reactive, ref } from "vue";
import { z } from "zod";

import FormPage from "../FormPage.vue";

const { t } = useI18n();

const inputSchema = z
  .string()
  .min(3, { message: t("form.errors.input.min", { length: 3 }) });

let formData = reactive({
  disabled: ref("monorepo@gmail.com"),
  input: ref(),
  inputWithValidation: ref(),
  noLabelInput: ref(),
  passwordInput: ref(),
});
</script>
