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
          :i18n="i18n"
          :locale="$i18n.locale"
          :placeholder="$t('form.placeholder.countries')"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
              &lt;CountryPicker
                v-model="input"
                :i18n="i18n"
                :locale="$i18n.locale"
                multiple
                placeholder="$t('form.placeholder.countries')"
              /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ref } from 'vue';
          import fr from "./fr.json";

          const i18n = {
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
          :i18n="i18n"
          :locale="$i18n.locale"
          :placeholder="$t('form.placeholder.countries')"
          fallback-locale="th"
          multiple
        />

        <!-- eslint-disable -->
    <SshPre language="html-vue">
      &lt;template&gt;
        &lt;CountryPicker
          v-model="input"
          :i18n="i18n"
          :locale="$i18n.locale"
          multiple
          fallback-locale="th"
          placeholder="$t('form.placeholder.countries')"
        /&gt;
      &lt;/template&gt;

      &lt;script setup lang="ts"&gt;
      import { ref } from 'vue';
      import fr from "./fr.json";
      import th from "./th.json";

      const i18n = {
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
      <h2>{{ $t("form.label.flagsStyle") }}</h2>

      <div class="section-content">
        <CountryPicker
          v-model="formData.flags"
          :placeholder="$t('form.placeholder.country')"
          flags-position="right-edge"
          flags-style="circle"
        />
        <!-- eslint-disable -->
        <SshPre language="html-vue">
         &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :placeholder="$t('form.placeholder.country')"
              flags-position="right-edge"
              flags-style="circle"
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
      <h2>{{ $t("form.label.customFlagsPath") }}</h2>

      <div class="section-content">
        <CountryPicker
          v-model="formData.customFlags"
          :flags-path="customFlagsPath"
          :placeholder="$t('form.placeholder.country')"
          flags-position="right-edge"
          flags-style="circle"
        />
        <!-- eslint-disable -->
        <SshPre language="html-vue">
         &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :flags-path="flagsPath"
              :placeholder="$t('form.placeholder.country')"
              flags-position="right-edge"
              flags-style="circle"
            /&gt;
          &lt;/template&gt;
                  
          &lt;script setup lang="ts"&gt;
          import { CountryPicker } from '@prefabs.tech/vue3-form';
          import { ref } from 'vue';
                  
          const input = ref();

          const flagsPath = (code: string) => {
            return `https://flagcdn.com/${code.toLowerCase().trim()}.svg`;
          };
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

          const includedCountries = ["US", "CA", "FR", "AU", "NP"];

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
                :include-favorites="false"
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

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'CountryPickerProperties' })
      "
      :slots-data="slotsData"
    />

    <section>
      <h2>{{ $t("common.type") }}</h2>
      <div class="section-content">
        <!-- eslint-disable -->
          <SshPre language="typescript">
            type TranslationCatalogue = Record&lt;string, string&gt;;

            type I18nConfig = Record&lt;string, TranslationCatalogue&gt;;

            interface CountryOption {
             code: string;
            }

            type NormalizedSelectOption = {
              disabled?: boolean;
              groupLabel?: string;
              label: string | undefined;
              value: string | number;
            };

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
import { reactive } from "vue";
import { useI18n } from "vue-i18n";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import FormPage from "../FormPage.vue";
import fr from "./fr.json";
import th from "./th.json";

const { t } = useI18n();

const i18n = {
  fr,
  th,
};

const propsData = [
  {
    default: "[]",
    description: t("form.documentation.propsDescription.select.exclude"),
    prop: "exclude",
    type: "String[]",
  },
  {
    default: "en",
    description: t("form.documentation.propsDescription.select.fallbackLocale"),
    prop: "fallbackLocale",
    type: "String",
  },
  {
    default: "[]",
    description: t("form.documentation.propsDescription.select.favorites"),
    prop: "favorites",
    type: "String[]",
  },
  {
    default: "true",
    description: t("form.documentation.propsDescription.select.flags"),
    prop: "flags",
    type: "Boolean",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.select.flagsPath"),
    prop: "flagsPath",
    type: "(code: string) => string",
  },
  {
    default: "left",
    description: t("form.documentation.propsDescription.select.flagsPosition"),
    prop: "flagsPosition",
    type: "left | right | right-edge",
  },
  {
    default: "rectangular",
    description: t("form.documentation.propsDescription.select.flagsStyle"),
    prop: "flagsStyle",
    type: "circle | rectangular | square",
  },
  {
    default: "true",
    description: t(
      "form.documentation.propsDescription.select.hasSortedOption",
    ),
    prop: "has-sorted-options",
    type: "Boolean",
  },
  {
    default: "[]",
    description: t("form.documentation.propsDescription.select.include"),
    prop: "include",
    type: "String[]",
  },
  {
    default: "true",
    description: t(
      "form.documentation.propsDescription.select.includeFavorites",
    ),
    prop: "includeFavorites",
    type: "Boolean",
  },
  {
    default: "{ en: defaultEnCatalogue }",
    description: t("form.documentation.propsDescription.select.i18n"),
    prop: "i18n",
    type: "Record<string, Record<string, string>>",
  },

  {
    default: "en",
    description: t("form.documentation.propsDescription.select.locale"),
    prop: "locale",
    type: "String",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.modelValue"),
    prop: "modelValue",
    type: "String | Number | Array<String|Number> | undefined",
  },
  {
    default: "false",
    description: t("form.documentation.propsDescription.select.multiple"),
    prop: "multiple",
    type: "Boolean",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.placeholder"),
    prop: "placeholder",
    type: "String",
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
  customFlags: undefined,
  customLocale: [],
  excludedCountries: [],
  flags: undefined,
  includedCountries: [],
  multiselect: [] as string[],
});
const excludedCountries = ["US", "AU", "QA", "IR", "CI", "CA"];
const favoritesCountries = ["US", "AU", "QA", "IR", "CI", "CA", "NP", "IN"];
const includedCountries = ["US", "CA", "FR", "AU", "NP"];

const slotsData = [
  {
    description: t("form.documentation.slotDescription.countryPicker.option"),
    name: "option",
    props:
      "{ multiple: boolean, option: NormalizedSelectOption, selected: boolean }",
  },
];

const customFlagsPath = (code: string) => {
  return `https://flagcdn.com/${code.toLowerCase().trim()}.svg`;
};
</script>
