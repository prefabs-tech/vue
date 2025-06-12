<template>
  <FormPage :title="$t('form.label.currencySelector')" class="demo">
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
        <CurrencySelector
          v-model="formData.basic"
          :options="options"
          :placeholder="$t('form.placeholder.currency')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CurrencySelector
              v-model="input"
              :options="options"
              placeholder="Select a currency"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CurrencySelector } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@dzangolab/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", label: "Euro", symbol: "€", value: "EUR" },
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
        <CurrencySelector
          v-model="formData.selectWithSearch"
          :options="options"
          :placeholder="$t('form.placeholder.currency')"
          :search-placeholder="$t('form.placeholder.search')"
          enable-search
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CurrencySelector
              v-model="input"
              :options="options"
              enable-search
              placeholder="Select a currency"
              search-placeholder="Select..."
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CurrencySelector } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@dzangolab/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", label: "Euro", symbol: "€", value: "EUR" },
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
  name: "CurrencySelectorDemo",
};
</script>

<script setup lang="ts">
import { CurrencySelector } from "@dzangolab/vue3-form";
import { ButtonElement } from "@dzangolab/vue3-ui";
import { reactive } from "vue";

import FormPage from "../FormPage.vue";

import type { CurrencyOption } from "@dzangolab/vue3-form";

const formData = reactive({
  basic: undefined,
  selectWithSearch: undefined,
});

const options = [
  { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
  { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
  { code: "EUR", label: "Euro", symbol: "€", value: "EUR" },
  { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
  { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
] as CurrencyOption[];
</script>
