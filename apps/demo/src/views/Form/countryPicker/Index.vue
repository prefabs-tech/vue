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
          :i18n="countryI18n"
          :locale="$i18n.locale"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
              &lt;CountryPicker
                v-model="input"
                :i18n="countryI18n"
                :locale="$i18n.locale"
                multiple
                placeholder="$t('form.placeholder.countries')"
              /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ref } from 'vue';
          import en from "./en.json";
          import fr from "./fr.json";

          const countryI18n = {
            en,
            fr,
          };
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
          :i18n="countryI18n"
          :locale="$i18n.locale"
          fallback-locale="th"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
    <SshPre language="html-vue">
      &lt;template&gt;
        &lt;CountryPicker
          v-model="input"
          :i18n="countryI18n"
          :locale="$i18n.locale"
          fallback-locale="th"
          multiple
          placeholder="$t('form.placeholder.countries')"
        /&gt;
      &lt;/template&gt;

      &lt;script setup lang="ts"&gt;
      import { ref } from 'vue';
      import en from "./en.json";
      import fr from "./fr.json";
      import th from "./th.json";

      const countryI18n = {
        en,
        fr,
        th,
      };
      const input = ref();
     
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
          :i18n="englishOverWrites"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :i18n="englishOverWrites"
              multiple
              placeholder="$t('form.placeholder.countries')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          import en from "./en.json";

          const englishOverWrites = {
            en,
          };


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
    <section>
      <h2>{{ $t("common.type") }}</h2>
      <div class="section-content">
        <!-- eslint-disable -->
          <SshPre language="typescript">
            type TranslationCatalogue = Record&lt;string, string&gt;;

            type I18nConfig = Record&lt;string, TranslationCatalogue&gt;;

            interface CountryOption {
             code: string;
             label?: string;
            }

            // Example usage:
            const example: I18nConfig = {
              en: { 
                US: "USA",
                FR: "France"
              },
              fr: { 
                US: "États-Unis",
                FR: "France"
              }
              };
          </SshPre>
      </div>
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

const countryI18n = {
  fr,
  th,
};
const englishOverWrites = {
  en: en,
};
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
    description: t("form.documentation.propsDescription.select.exclude"),
    id: 1,
    prop: "exclude",
    type: "String[]",
  },
  {
    default: "en",
    description: t("form.documentation.propsDescription.select.fallbackLocale"),
    id: 2,
    prop: "fallbackLocale",
    type: "String",
  },
  {
    default: "[]",
    description: t("form.documentation.propsDescription.select.favorites"),
    id: 3,
    prop: "favorites",
    type: "String[]",
  },
  {
    default: "true",
    description: t(
      "form.documentation.propsDescription.select.hasSortedOption",
    ),
    id: 4,
    prop: "has-sorted-options",
    type: "Boolean",
  },
  {
    default: "[]",
    description: t("form.documentation.propsDescription.select.include"),
    id: 5,
    prop: "include",
    type: "String[]",
  },
  {
    default: "true",
    description: t(
      "form.documentation.propsDescription.select.includeFavorites",
    ),
    id: 6,
    prop: "includeFavorites",
    type: "Boolean",
  },
  {
    default: "{ en: defaultEnCatalogue }",
    description: t("form.documentation.propsDescription.select.i18n"),
    id: 7,
    prop: "i18n",
    type: "Record<string, Record<string, string>>",
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
