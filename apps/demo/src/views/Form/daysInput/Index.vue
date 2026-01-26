<template>
  <FormPage
    :subtitle="$t('form.subtitle.daysInput')"
    :title="$t('form.label.daysInput')"
    class="demo"
  >
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <DaysInput
          v-model="formData.basic"
          :placeholder="$t('form.placeholder.days')"
          @update:date="result.basic = $event"
        />
        <div v-if="result.basic" class="result-date">{{ result.basic }}</div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;DaysInput
              v-model="input"
              placeholder="Enter number of days"
              @update:date="result = $event"
            /&gt;
          &lt;/template&gt;
          &lt;div v-if="result" class="result-date"&gt;&lbrace;&lbrace; result &rbrace;&rbrace;&lt;/div&gt;

          &lt;script setup lang="ts"&gt;
          import { DaysInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const result = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.labelInput") }}</h2>

      <div class="section-content">
        <Form>
          <DaysInput
            v-model="formData.label"
            :label="$t('form.label.arrivalDate')"
            :placeholder="$t('form.placeholder.days')"
            @update:date="result.label = $event"
          />
        </Form>
        <div v-if="result.label" class="result-date">{{ result.label }}</div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DaysInput
              v-model="input"
              label="Arrival date"
              placeholder="Enter number of days"
              @update:date="result = $event"
            /&gt;
          &lt;/Form&gt;
          &lt;div v-if="result" class="result-date"&gt;&lbrace;&lbrace; result &rbrace;&rbrace;&lt;/div&gt;

          &lt;script setup lang="ts"&gt;
          import { DaysInput, Form } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const result = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <Form>
          <DaysInput
            v-model="formData.disabled"
            :label="$t('form.label.appointmentDate')"
            :placeholder="$t('form.placeholder.days')"
            disabled
            @update:date="result.disabled = $event"
          />
        </Form>
        <div v-if="result.disabled" class="result-date">
          {{ result.disabled }}
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DaysInput
              v-model="input"
              disabled
              label="Appointment date"
              placeholder="Enter number of days"
              @update:date="result = $event"
            /&gt;
          &lt;/Form&gt;
          &lt;div v-if="result" class="result-date"&gt;&lbrace;&lbrace; result &rbrace;&rbrace;&lt;/div&gt;

          &lt;script setup lang="ts"&gt;
          import { DaysInput, Form } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const result = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customValidationInput") }}</h2>

      <div class="section-content">
        <Form>
          <DaysInput
            v-model="formData.validationInput"
            :label="$t('form.label.expiresAfter')"
            :placeholder="$t('form.placeholder.days')"
            :schema="inputSchema"
            @update:date="result.validationInput = $event"
          />
        </Form>
        <div
          v-if="
            result.validationInput &&
            formData.validationInput > 0 &&
            formData.validationInput <= 365
          "
          class="result-date"
        >
          {{ result.validationInput }}
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;DaysInput
              v-model="input"
              :schema="inputSchema"
              label="Expires after"
              placeholder="Enter number of days"
              @update:date="result = $event"
            /&gt;
          &lt;/Form&gt;
          &lt;div
            v-if="result &gt; 0 &amp;&amp; result &lt;= 365"
            class="result-date"
          &gt;
            &lbrace;&lbrace; result &rbrace;&rbrace;
          &lt;/div&gt;

          &lt;script setup lang="ts"&gt;
          import { DaysInput, Form } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          import { z } from "zod";

          const input = ref();
          const result = ref();

          const inputSchema = z.coerce
            .number({ invalid_type_error: "The field is required" })
            .min(1, { message: "Please provide number of days within a year" })
            .max(365, { message: "Please provide number of days within a year" });
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'DaysInputProperties' })
      "
    />
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "DaysInput",
};
</script>

<script setup lang="ts">
import { DaysInput, Form } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { reactive, ref } from "vue";
import { z } from "zod";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import FormPage from "../FormPage.vue";

const { t } = useI18n();

const inputSchema = z.coerce
  .number({ invalid_type_error: t("form.errors.number.required") })
  .min(1, { message: t("form.errors.daysInput.invalid") })
  .max(365, { message: t("form.errors.daysInput.invalid") });

const eventsData = [
  {
    description: t("form.documentation.eventDescription.daysInput.date"),
    name: "update:date",
    payload: "date: string",
  },
  {
    description: t("form.documentation.eventDescription.input.modelValue"),
    name: "update:modelValue",
    payload: "value: number",
  },
];

const propsData = [
  {
    default: "false",
    description: t("form.documentation.propsDescription.input.disabled"),
    prop: "disabled",
    type: "Boolean",
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
    type: "Number | Null | Undefined",
  },
  {
    default: '"days-input"',
    description: t("form.documentation.propsDescription.input.name"),
    prop: "name",
    type: "String",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.placeholder"),
    prop: "placeholder",
    type: "String",
  },
  {
    default: "z.coerce.number().optional()",
    description: t("form.documentation.propsDescription.input.schema"),
    prop: "schema",
    type: "z.ZodType<string | number>",
  },
];

const result = reactive({
  basic: ref(),
  disabled: ref(),
  label: ref(),
  validationInput: ref(),
});

let formData = reactive({
  basic: ref(),
  disabled: ref(30),
  label: ref(),
  validationInput: ref(),
});
</script>
