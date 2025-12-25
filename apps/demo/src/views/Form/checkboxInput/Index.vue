<template>
  <FormPage
    :subtitle="$t('form.subtitle.checkbox')"
    :title="$t('form.label.checkbox')"
    class="demo"
  >
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <CheckboxInput
          v-model:checked="formData.noLabelInput"
          :input-label="$t('form.label.accept')"
          name="basic"
        />

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CheckboxInput
              v-model:checked="input"
              :input-label="Accept"
              name="input"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CheckboxInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.multiCheckbox") }}</h2>

      <div class="section-content">
        <CheckboxInput
          v-model="formData.multiCheckbox"
          :label="$t('form.label.vehicle')"
          :options="vehicleOptions"
          name="multi-checkbox"
        />

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CheckboxInput
              v-model="input"
              :options="vehicleOptions"
              label="Vehicle"
              name="checkbox"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CheckboxInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const vehicleOptions = [
            {
              label: "Bike",
              value: "bike",
            },
            {
              label: "Car",
              value: "car",
            },
            {
              label: "Truck",
              value: "truck",
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <CheckboxInput
          v-model="formData.disabled"
          :label="$t('form.label.vehicle')"
          :options="vehicleOptions"
          direction="horizontal"
          disabled
          name="disabled-checkbox"
        />

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CheckboxInput
              v-model="input"
              :options="vehicleOptions"
              direction="horizontal"
              disabled
              label="Vehicle"
              name="checkbox"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CheckboxInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref(["car"]);
          const vehicleOptions = [
            {
              label: "Bike",
              value: "bike",
            },
            {
              label: "Car",
              value: "car",
            },
            {
              label: "Truck",
              value: "truck",
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.inputWithValidation") }}</h2>

      <div class="section-content">
        <Form>
          <CheckboxInput
            v-model="formData.inputWithValidation"
            :label="$t('form.label.dailySynchro')"
            :options="dailySynchroOptions"
            :schema="inputSchema"
            name="daily-synchro"
          />
        </Form>

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Form&gt;
              &lt;CheckboxInput
                v-model="input"
                :label="t('form.label.dailySynchro')"
                :options="dailySynchroOptions"
                :schema="inputSchema"
                name="checkbox"
              /&gt;
            &lt;/Form&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, CheckboxInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { ref } from "vue";

          const { t } = useI18n();

          const inputSchema = z
            .string()
            .array()
            .min(6, { message: t("form.errors.checkbox.min", { min: 6 }) });

          const input = ref();
          const dailySynchroOptions = [
            {
              label: t("form.label.title"),
              value: 1,
            },
            {
              label: t("form.label.solutions"),
              value: 2,
            },
            {
              label: t("form.label.deliverableList"),
              value: 3,
            },
            {
              label: t("form.label.workInProgress"),
              value: 4,
            },
            {
              label: t("form.label.summary"),
              value: 5,
            },
            {
              label: t("form.label.next"),
              value: 6,
            },
            {
              label: t("form.label.assumptions"),
              value: 7,
            },
            {
              label: t("form.label.generalQuestions"),
              value: 8,
            },
            {
              label: t("form.label.consequences"),
              value: 9,
            },
            {
              label: t("form.label.other"),
              value: 10,
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>
        {{ $t("common.properties", { value: "CheckboxInputProperties" }) }}
      </h2>
      <div class="section-content">
        <Table
          :columns-data="propsColumns"
          :data="propsData"
          :paginated="false"
          :persist-state="false"
        />
      </div>
    </section>

    <section>
      <h2>{{ $t("common.events") }}</h2>
      <div class="section-content">
        <Table
          :columns-data="eventColumns"
          :data="eventData"
          :paginated="false"
          :persist-state="false"
        />
      </div>
    </section>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "CheckboxInput",
};
</script>

<script setup lang="ts">
import { Form, CheckboxInput } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { Table } from "@prefabs.tech/vue3-tanstack-table";
import { reactive, ref } from "vue";
import { z } from "zod";

import FormPage from "../FormPage.vue";

const { t } = useI18n();

const inputSchema = z
  .string()
  .array()
  .min(6, { message: t("form.errors.checkbox.min", { min: 6 }) });

let formData = reactive({
  disabled: ref(["car"]),
  inputWithValidation: ref(),
  multiCheckbox: ref<string[]>([]),
  noLabelInput: ref(),
});

const dailySynchroOptions = [
  {
    label: t("form.label.title"),
    value: 1,
  },
  {
    label: t("form.label.solutions"),
    value: 2,
  },
  {
    label: t("form.label.deliverableList"),
    value: 3,
  },
  {
    label: t("form.label.workInProgress"),
    value: 4,
  },
  {
    label: t("form.label.summary"),
    value: 5,
  },
  {
    label: t("form.label.next"),
    value: 6,
  },
  {
    label: t("form.label.assumptions"),
    value: 7,
  },
  {
    label: t("form.label.generalQuestions"),
    value: 8,
  },
  {
    label: t("form.label.consequences"),
    value: 9,
  },
  {
    label: t("form.label.other"),
    value: 10,
  },
];

const eventColumns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

const eventData = [
  {
    description: "Triggers on single checkbox input state change",
    id: 1,
    name: "update:checked",
  },
  {
    description:
      "Triggers on selected value of multiple checkboxes input change",
    id: 1,
    name: "update:modelValue",
  },
];

const propsColumns = [
  {
    accessorKey: "name",
    header: "Property",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "default",
    header: "Default",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

const propsData = [
  {
    default: "false",
    description: "Determines the checked state of a single checkbox.",
    id: 1,
    name: "checked",
    type: "boolean",
  },
  {
    default: "-",
    description: "Defines the layout direction for multiple checkboxes.",
    id: 2,
    name: "direction",
    type: '"horizontal" | "vertical"',
  },
  {
    default: "-",
    description: "Disables the checkbox input.",
    id: 3,
    name: "disabled",
    type: "boolean",
  },
  {
    default: "-",
    description: "Label for the single checkbox.",
    id: 4,
    name: "inputLabel",
    type: "string",
  },
  {
    default: "-",
    description: "Label for the group of checkboxes.",
    id: 5,
    name: "label",
    type: "string",
  },
  {
    default: "-",
    description: "Array of selected values for multiple checkboxes.",
    id: 6,
    name: "modelValue",
    type: "string[]",
  },
  {
    default: "checkbox",
    description: "The name attribute for the checkbox input.",
    id: 7,
    name: "name",
    type: "string",
  },
  {
    default: "[]",
    description: "Options for multiple checkboxes.",
    id: 8,
    name: "options",
    type: "Array<{ value, label }>",
  },
  {
    default: "[]",
    description: "Determines the validation schema for checkbox input",
    id: 9,
    name: "schema",
    type: "ZodType",
  },
];

const vehicleOptions = [
  {
    label: t("form.label.bike"),
    value: "bike",
  },
  {
    label: t("form.label.car"),
    value: "car",
  },
  {
    label: t("form.label.truck"),
    value: "truck",
  },
];
</script>
