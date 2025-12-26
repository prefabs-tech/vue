<template>
  <FormPage
    :subtitle="$t('form.subtitle.countryPicker')"
    :title="$t('form.label.countryPicker')"
  >
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <CountryPicker
          v-model="formData.basic"
          :placeholder="$t('form.placeholder.country')"
        />
        <!-- eslint-disable -->
        <SshPre language="html-vue">
         &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              placeholder="$t('form.placeholder.country')"
            /&gt;
          &lt;/template&gt;
                  
          &lt;script setup lang="ts"&gt;
          import { CountryPicker } from '@prefabs.tech/vue3-form';
          import { ref } from 'vue';
                  
          const input = ref();
          &lt;/script&gt;
        </SshPre>    
         <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.multiselect") }}</h2>

      <div class="section-content">
        <CountryPicker
          v-model="formData.multiselect"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              multiple
              placeholder="$t('form.placeholder.countries')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.customLocale") }}</h2>
      <div class="section-content">
        <CountryPicker
          v-model="formData.customLocale"
          :data="frLocaleSupport"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
              &lt;CountryPicker
                v-model="input"
                :data="newLocaleSupport"
                multiple
                placeholder="$t('form.placeholder.countries')"
              /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ref } from 'vue';
          import Fr from "./fr.json";

          const newLocaleSupport = Fr;
          const input = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.fallbackLocale") }}</h2>
      <div class="section-content">
        <CountryPicker
          v-model="formData.fallbackDemo"
          :data="thLocaleSupport"
          :fallback-locale="frLocaleSupport"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
    <SshPre language="html-vue">
      &lt;template&gt;
        &lt;CountryPicker
          v-model="input"
          :data="thLocaleSupport"
          :fallback-locale="frLocaleSupport"

          multiple
          placeholder="$t('form.placeholder.countries')"
        /&gt;
      &lt;/template&gt;

      &lt;script setup lang="ts"&gt;
      import { ref } from 'vue';
      import Fr from "./fr.json";
      import Th from "./th.json";

      const frLocaleSupport = Fr;
      const input = ref();
      const thLocaleSupport = Th;
      &lt;/script&gt;
    </SshPre>
    <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.include") }}</h2>
      <div class="section-content">
        <CountryPicker
          v-model="formData.includedCountries"
          :include="includedCountries"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :include="includedCountries"
              multiple
              placeholder="$t('form.placeholder.countries')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const includedCountries = ['US', 'CA', 'FR', 'AU','NP'];
          const input = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.exclude") }}</h2>
      <div class="section-content">
        <CountryPicker
          v-model="formData.excludedCountries"
          :exclude="excludedCountries"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :exclude="excludedCountries"
              multiple
              placeholder="$t('form.placeholder.countries')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          
          const excludedCountries = ["US", "AU", "QA", "IR", "CI", "CA"];
          const input = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.favorites") }}</h2>
      <div class="section-content">
        <CountryPicker
          v-model="formData.favorites"
          :favorites="favoritesCountries"
          :has-sorted-options="false"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
              &lt;CountryPicker
                v-model="input"
                :favorites="favoritesCountries"
                :has-sorted-options="false"
                placeholder="$t('form.placeholder.countries')"
              /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ref } from 'vue';
          
          const favoritesCountries = ["US", "AU", "QA", "IR", "CI", "CA", "NP", "IN"];
          const input = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.includeFavorites") }}</h2>
      <div class="section-content">
        <CountryPicker
          v-model="formData.favorites"
          :favorites="favoritesCountries"
          :has-sorted-options="false"
          :include-favorites="false"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
              &lt;CountryPicker
                v-model="input"
                :favorites="favoritesCountries"
                :has-sorted-options="false"
                multiple
                placeholder="$t('form.placeholder.countries')"
              /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ref } from 'vue';
          
          const favoritesCountries = ["US", "AU", "QA", "IR", "CI", "CA", "NP", "IN"];
          const input = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.customData") }}</h2>
      <div class="section-content">
        <CountryPicker
          v-model="formData.custom"
          :data="data"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :data="data"
              multiple
              placeholder="$t('form.placeholder.countries')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          import En from "./en.json";

          const data = En;
          const input = ref&lt;string[]&gt;([])
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>
        {{ $t("common.properties", { value: "CountryPickerProperties" }) }}
      </h2>

      <Table
        :columns-data="propsColumns"
        :data="propsData"
        :paginated="false"
        :persist-state="false"
      />
    </section>
    <section>
      <h2>{{ $t("common.events") }}</h2>

      <Table
        :columns-data="eventsColumns"
        :data="eventsData"
        :paginated="false"
        :persist-state="false"
      />
    </section>
  </FormPage>
</template>

<script setup lang="ts">
import { CountryPicker } from "@prefabs.tech/vue3-form";
import { Table } from "@prefabs.tech/vue3-tanstack-table";
import { reactive } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

import FormPage from "../FormPage.vue";
import en from "./en.json";
import fr from "./fr.json";
import th from "./th.json";

const data = en;
const frLocaleSupport = fr;
const thLocaleSupport = th;

const propsColumns = [
  {
    accessorKey: "prop",
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
    default: "[]",
    description: t("form.documentation.propsDescription.select.data"),
    id: 1,
    prop: "data",
    type: "CountryOption[]",
  },
  {
    default: "[]",
    description: t("form.documentation.propsDescription.select.exclude"),
    id: 2,
    prop: "exclude",
    type: "String[]",
  },
  {
    default: "en",
    description: t("form.documentation.propsDescription.select.fallbackLocale"),
    id: 3,
    prop: "fallbackLocale",
    type: "String",
  },
  {
    default: "[]",
    description: t("form.documentation.propsDescription.select.favorites"),
    id: 4,
    prop: "favorites",
    type: "String[]",
  },
  {
    default: "true",
    description: t(
      "form.documentation.propsDescription.select.hasSortedOption",
    ),
    id: 5,
    prop: "has-sorted-options",
    type: "Boolean",
  },
  {
    default: "[]",
    description: t("form.documentation.propsDescription.select.include"),
    id: 6,
    prop: "include",
    type: "String[]",
  },
  {
    default: "true",
    description: t(
      "form.documentation.propsDescription.select.includeFavorites",
    ),
    id: 7,
    prop: "includeFavorites",
    type: "Boolean",
  },
  {
    default: "en",
    description: t("form.documentation.propsDescription.select.locale"),
    id: 8,
    prop: "locale",
    type: "String",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.modelValue"),
    id: 9,
    prop: "modelValue",
    type: "String | Number | Array<String|Number> | undefined",
  },
  {
    default: "false",
    description: t("form.documentation.propsDescription.select.multiple"),
    id: 10,
    prop: "multiple",
    type: "Boolean",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.placeholder"),
    id: 11,
    prop: "placeholder",
    type: "String",
  },
];

const eventsColumns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "payload",
    header: "Payload",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

const eventsData = [
  {
    description: t("form.documentation.eventDescription.input.modelValue"),
    name: "update:modelValue",
    payload: "string | number | (string | number)[] | undefined",
  },
];

const formData = reactive({
  basic: undefined as string | undefined,
  custom: [] as string[],
  customLocale: [],
  excludedCountries: [],
  includedCountries: [],
  multiselect: [] as string[],
});
const excludedCountries = ["US", "AU", "QA", "IR", "CI", "CA"];
const favoritesCountries = ["US", "AU", "QA", "IR", "CI", "CA", "NP", "IN"];
const includedCountries = ["US", "CA", "FR", "AU", "NP"];
</script>
