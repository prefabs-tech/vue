<template>
  <FormPage
    :subtitle="t('form.subtitle.currencyPicker')"
    :title="$t('form.label.currencyPicker')"
    class="demo"
  >
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <CurrencyPicker
          v-model="formData.basic"
          :options="options"
          :placeholder="$t('form.placeholder.currency')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CurrencyPicker
              v-model="input"
              :options="options"
              placeholder="Select a currency"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CurrencyPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@prefabs.tech/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
            { code: "DZD", label: "Algerian dinar", value: "DZD" },
            {
              code: "ZAR",
              label: "South African Rand",
              value: "ZAR",
            },
            { code: "NPR", label: "Nepalese rupee", symbol: "Rs", value: "NPR" },
          ] as CurrencyOption[];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.selectLabelOrder") }}</h2>

      <div class="section-content">
        <CurrencyPicker
          v-model="formData.selectWithOrder"
          :option-label-order="['symbol', 'label', 'code']"
          :options="options"
          :placeholder="$t('form.placeholder.currency')"
          name="ordered-currency"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CurrencyPicker
              v-model="input"
              :option-label-order="['symbol', 'label', 'code']"
              :options="options"
              name="currency"
              placeholder="Select a currency"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CurrencyPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@prefabs.tech/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
            { code: "DZD", label: "Algerian dinar", value: "DZD" },
            {
              code: "ZAR",
              label: "South African Rand",
              value: "ZAR",
            },
            { code: "NPR", label: "Nepalese rupee", symbol: "Rs", value: "NPR" },
          ] as CurrencyOption[];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.currencyPickerExtensive") }}</h2>

      <div class="section-content">
        <CurrencyPicker
          v-model="formData.extensivePicker"
          :options="currencies"
          :placeholder="$t('form.placeholder.currency')"
          name="extensive-currency"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CurrencyPicker
              v-model="input"
              :options="currencies"
              name="currency"
              placeholder="Select a currency"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CurrencyPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import { currencies } from "../data";

          import type { CurrencyOption } from "@prefabs.tech/vue3-form";

          const input = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.multiselect") }}</h2>

      <div class="section-content">
        <CurrencyPicker
          v-model="formData.multiselect"
          :options="options"
          :placeholder="$t('form.placeholder.currency')"
          multiple
          name="multiselect-currency"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CurrencyPicker
              v-model="input"
              :options="options"
              multiple
              name="currency"
              placeholder="Select a currency"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CurrencyPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@prefabs.tech/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
            { code: "DZD", label: "Algerian dinar", value: "DZD" },
            {
              code: "ZAR",
              label: "South African Rand",
              value: "ZAR",
            },
            { code: "NPR", label: "Nepalese rupee", symbol: "Rs", value: "NPR" },
            ] as CurrencyOption[];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withSelectOptions") }}</h2>

      <div class="section-content">
        <Form>
          <CurrencyPicker
            v-model="formData.selectOptionsInput"
            :options="options"
            :placeholder="$t('form.placeholder.currency')"
            :selection-options="{
              hasSortedOptions: false,
              maxSelection: 3,
              minSelection: 2,
              showRemoveSelection: true,
            }"
            multiple
            name="select-currency"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Form&gt;
              &lt;CurrencyPicker
                v-model="input"
                :options="options"
                :selection-options="{
                  hasSortedOptions: false,
                  maxSelection: 3,
                  minSelection: 2,
                  showRemoveSelection: true,
                }"
                multiple
                name="currency"
                placeholder="Select a currency"
              /&gt;
            &lt;/Form&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CurrencyPicker, Form } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@prefabs.tech/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
            { code: "DZD", label: "Algerian dinar", value: "DZD" },
            {
              code: "ZAR",
              label: "South African Rand",
              value: "ZAR",
            },
            { code: "NPR", label: "Nepalese rupee", symbol: "Rs", value: "NPR" },
          ] as CurrencyOption[];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customValidationInput") }}</h2>

      <div class="section-content">
        <Form>
          <CurrencyPicker
            v-model="formData.validationInput"
            :options="options"
            :placeholder="$t('form.placeholder.currency')"
            :schema="inputSchema"
            multiple
            name="validation-currency"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Form&gt;
              &lt;CurrencyPicker
                v-model="input"
                :options="options"
                :schema="inputSchema"
                multiple
                name="currency"
                placeholder="Select a currency"
              /&gt;
            &lt;/Form&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CurrencyPicker, Form } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          import { z } from "zod";

          import type { CurrencyOption } from "@prefabs.tech/vue3-form";

          const input = ref();

          const inputSchema = z.preprocess(
            (value) => (value === null || value === undefined ? [] : value),
            z
              .array(z.string())
              .min(1, { message: "Please select at least one valid option" })
          );

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
            { code: "DZD", label: "Algerian dinar", value: "DZD" },
            {
              code: "ZAR",
              label: "South African Rand",
              value: "ZAR",
            },
            { code: "NPR", label: "Nepalese rupee", symbol: "Rs", value: "NPR" },
          ] as CurrencyOption[];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'CurrencyPickerProperties' })
      "
      :slots-data="slotsData"
    />

    <!-- eslint-disable -->
    <SshPre language="html-vue">
      interface CurrencyOption extends SelectOption {
        code?: string;
        symbol?: string;
      }
    </SshPre>
    <!-- eslint-enable -->
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "CurrencyPickerDemo",
};
</script>

<script setup lang="ts">
import type { CurrencyOption } from "@prefabs.tech/vue3-form";

import { CurrencyPicker, Form } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { computed, reactive } from "vue";
import { z } from "zod";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import { currencies } from "../data";
import FormPage from "../FormPage.vue";

const { t } = useI18n();

const formData = reactive({
  basic: undefined,
  extensivePicker: undefined,
  multiselect: undefined,
  selectOptionsInput: undefined,
  selectWithOrder: undefined,
  validationInput: undefined,
});

const options = [
  { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
  { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
  { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
  { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
  { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
  { code: "DZD", label: "Algerian dinar", value: "DZD" },
  {
    code: "ZAR",
    label: "South African Rand",
    value: "ZAR",
  },
  { code: "NPR", label: "Nepalese rupee", symbol: "Rs", value: "NPR" },
] as CurrencyOption[];

const eventsData = computed(() => [
  {
    description: t("form.documentation.eventDescription.input.modelValue"),
    name: "update:modelValue",
    payload: "string | number | string[] | number[] | null | undefined",
  },
  {
    description: t(
      "form.documentation.eventDescription.currencyPicker.searchInput",
    ),
    name: "update:searchInput",
    payload: "string",
  },
]);

const inputSchema = computed(() =>
  z.preprocess(
    (value) => (value === null || value === undefined ? [] : value),
    z
      .array(z.string())
      .min(1, { message: t("form.errors.currencyPicker.invalid") }),
  ),
);

const propsData = computed(() => [
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
    type: "boolean | number | string | (number | string)[] | null",
  },
  {
    default: "false",
    description: t("form.documentation.propsDescription.select.multiple"),
    prop: "multiple",
    type: "Boolean",
  },
  {
    default: '"currency"',
    description: t("form.documentation.propsDescription.input.name"),
    prop: "name",
    type: "String",
  },
  {
    default: '["code", "label", "symbol"]',
    description: t(
      "form.documentation.propsDescription.currencyPicker.optionLabelOrder",
    ),
    prop: "optionLabelOrder",
    type: "Array<keyof CurrencyOption>",
  },
  {
    default: "-",
    description: t(
      "form.documentation.propsDescription.currencyPicker.options",
    ),
    prop: "options",
    type: "CurrencyOption[]",
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
    type: "z.ZodType<string | number | string[] | number[]>",
  },
  {
    default: "-",
    description: t(
      "form.documentation.propsDescription.currencyPicker.selectionOptions",
    ),
    prop: "selectionOptions",
    type: "Object",
  },
]);

const slotsData = computed(() => [
  {
    description: t("form.documentation.slotDescription.currencyPicker.option"),
    name: "option",
    props: "{ multiple: boolean, option: CurrencyOption, selected: boolean }",
  },
  {
    description: t(
      "form.documentation.slotDescription.currencyPicker.selection",
    ),
    name: "selection",
    props: "{ selectedLabels: string[] }",
  },
]);
</script>
