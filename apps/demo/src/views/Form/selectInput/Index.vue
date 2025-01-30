<template>
  <FormPage :title="$t('form.label.select')" class="demo">
    <template #toolbar>
      <router-link :to="{ name: 'form' }" class="back">
        {{ $t("common.back") }}
      </router-link>
    </template>

    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.noLabelInput"
          :options="options"
          :placeholder="$t('form.placeholder.language')"
        />

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput
              v-model="input"
              :options="options"
              placeholder="Select a language"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { value: "fr", label: "French" },
            { value: "de", label: "German" },
            { value: "be", label: "Dutch" },
            { value: "np", label: "Nepali" },
            { value: "hi", label: "Hindi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.labelInput") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.input"
          :label="$t('form.label.language')"
          :options="options"
          :placeholder="$t('form.placeholder.language')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              label="Language"
              placeholder="Select a language"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { value: "fr", label: "French" },
            { value: "de", label: "German" },
            { value: "be", label: "Dutch" },
            { value: "np", label: "Nepali" },
            { value: "hi", label: "Hindi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.disabled"
          :label="$t('form.label.language')"
          :options="options"
          disabled
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Language"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";
  
          const disabled = ref("de");

          const options = ref([
            { value: "fr", label: "French" },
            { value: "de", label: "German" },
            { value: "be", label: "Dutch" },
            { value: "np", label: "Nepali" },
            { value: "hi", label: "Hindi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disableSort") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.input"
          :has-sorted-options="false"
          :label="$t('form.label.language')"
          :options="options"
          :placeholder="$t('form.placeholder.language')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :has-sorted-options="false"
              :options="options"
              label="Language"
              placeholder="Select a language"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { value: "fr", label: "French" },
            { value: "de", label: "German" },
            { value: "be", label: "Dutch" },
            { value: "np", label: "Nepali" },
            { value: "hi", label: "Hindi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withI18n") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.input"
          :label="$t('form.label.language')"
          :options="options"
          :placeholder="$t('form.placeholder.language')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              :label="t('form.label.language')"
              :placeholder="t('form.placeholder.language')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();

          const options = ref([
            { value: "fr", label: t("form.label.french") },
            { value: "de", label: t("form.label.german") },
            { value: "be", label: t("form.label.dutch") },
            { value: "np", label: t("form.label.nepali") },
            { value: "hi", label: t("form.label.hindi") },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.multiSelect") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.multiSelect"
          :label="$t('form.label.language')"
          :options="options"
          :placeholder="$t('form.placeholder.languages')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              label="Language"
              multiple
              placeholder="Select languages"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { value: "fr", label: "French" },
            { value: "de", label: "German" },
            { value: "be", label: "Dutch" },
            { value: "np", label: "Nepali" },
            { value: "hi", label: "Hindi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabledMultiSelect") }}</h2>

      <div class="section-content">
        <SelectInput
          v-model="formData.disabledMultiSelect"
          :label="$t('form.label.language')"
          :options="options"
          disabled
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Language"
              multiple
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const disabled = ref(["be", "de"]);

          const options = ref([
            { value: "fr", label: "French" },
            { value: "de", label: "German" },
            { value: "be", label: "Dutch" },
            { value: "np", label: "Nepali" },
            { value: "hi", label: "Hindi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.inputWithValidation") }}</h2>

      <div class="section-content">
        <Form>
          <SelectInput
            v-model="formData.inputWithValidation"
            :label="$t('form.label.language')"
            :options="options"
            :placeholder="$t('form.placeholder.languages')"
            :schema="inputSchema"
            multiple
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SelectInput 
              v-model="input"
              :options="options"
              :schema="inputSchema"
              label="Language"
              multiple
              placeholder="Select languages"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const inputSchema = z
            .string({invalid_type_error: "Please select at least one valid option"})
            .array()
            .min(1, { message: "Please select at least one valid option" });

          const options = ref([
            { value: "fr", label: "French" },
            { value: "de", label: "German" },
            { value: "be", label: "Dutch" },
            { value: "np", label: "Nepali" },
            { value: "hi", label: "Hindi" },
          ]);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "SelectInputField",
};
</script>

<script setup lang="ts">
import { Form, SelectInput } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { reactive, ref } from "vue";
import { z } from "zod";

import FormPage from "../FormPage.vue";

const { t } = useI18n();

const inputSchema = z
  .string({ invalid_type_error: t("form.errors.multiSelect.invalid") })
  .array()
  .min(1, { message: t("form.errors.multiSelect.invalid") });

let formData = reactive({
  disabled: ref("de"),
  disabledMultiSelect: ref(["be", "de"]),
  input: ref(),
  inputWithValidation: ref([]),
  multiSelect: ref(),
  noLabelInput: ref(),
});

const options = ref([
  { value: "fr", label: t("form.label.french") },
  { value: "de", label: t("form.label.german") },
  { value: "be", label: t("form.label.dutch") },
  { value: "np", label: t("form.label.nepali") },
  { value: "hi", label: t("form.label.hindi") },
]);
</script>
