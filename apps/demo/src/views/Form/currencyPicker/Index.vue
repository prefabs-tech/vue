<template>
  <FormPage :title="$t('form.label.currencyPicker')" class="demo">
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
          import { CurrencyPicker } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@dzangolab/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
          ] as CurrencyOption[];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withSearch") }}</h2>

      <div class="section-content">
        <CurrencyPicker
          v-model="formData.selectWithSearch"
          :options="options"
          :placeholder="$t('form.placeholder.currency')"
          enable-search
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CurrencyPicker
              v-model="input"
              :options="options"
              enable-search
              placeholder="Select a currency"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CurrencyPicker } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@dzangolab/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
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
          enable-search
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CurrencyPicker
              v-model="input"
              :option-label-order="['symbol', 'label', 'code']"
              :options="options"
              enable-search
              placeholder="Select a currency"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CurrencyPicker } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@dzangolab/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
          ] as CurrencyOption[];
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
          enable-search
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CurrencyPicker
              v-model="input"
              :options="options"
              enable-search
              multiple
              placeholder="Select a currency"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CurrencyPicker } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@dzangolab/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
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
            enable-search
            multiple
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
                enable-search
                multiple
                placeholder="Select a currency"
              /&gt;
            &lt;/Form&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CurrencyPicker, Form } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@dzangolab/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
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
            enable-search
            multiple
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
                enable-search
                multiple
                placeholder="Select a currency"
              /&gt;
            &lt;/Form&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CurrencyPicker, Form } from "@dzangolab/vue3-form";
          import { ref } from "vue";
          import { z } from "zod";

          import type { CurrencyOption } from "@dzangolab/vue3-form";

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
          ] as CurrencyOption[];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "CurrencyPickerDemo",
};
</script>

<script setup lang="ts">
import { CurrencyPicker, Form } from "@dzangolab/vue3-form";
import { useI18n } from "@dzangolab/vue3-i18n";
import { ButtonElement } from "@dzangolab/vue3-ui";
import { reactive } from "vue";
import { z } from "zod";

import FormPage from "../FormPage.vue";

import type { CurrencyOption } from "@dzangolab/vue3-form";

const { t } = useI18n();

const formData = reactive({
  basic: undefined,
  multiselect: undefined,
  selectOptionsInput: undefined,
  selectWithOrder: undefined,
  selectWithSearch: undefined,
  validationInput: undefined,
});

const inputSchema = z.preprocess(
  (value) => (value === null || value === undefined ? [] : value),
  z
    .array(z.string())
    .min(1, { message: t("form.errors.currencyPicker.invalid") }),
);

const options = [
  { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
  { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
  { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
  { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
  { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
] as CurrencyOption[];
</script>
