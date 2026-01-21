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
              :placeholder="$t('form.placeholder.country')"
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
              :placeholder="$t('form.placeholder.countries')"
              multiple
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
          :locales="{ np: nepaliTranslation }"
          :placeholder="$t('form.placeholder.country')"
          locale="np"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :locale="locale"
              :locales="locales"
              :placeholder="$t('form.placeholder.country')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ref } from 'vue';

          import nepaliTranslation from "./np.json";
          
          const locale = "np";
        
          const locales = {
            np: nepaliTranslation,
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
          v-model="formData.fallback"
          :locales="{
            np: nepaliTranslation,
            fr: frenchTranslation,
          }"
          :placeholder="$t('form.placeholder.country')"
          fallback-locale="fr"
          locale="gb"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :fallback-locale="fallbackLocale"
              :locale="locale"
              :locales="locales"
              :placeholder="$t('form.placeholder.country')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ref } from 'vue';

          import frenchTranslation from "./fr.json";
          import nepaliTranslation from "./np.json";
          
          const fallbackLocale = "fr";
          const locale = "gb";
          const locales = {
            fr: frenchTranslation,
            np: nepaliTranslation,
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
          import { useI18n } from "vue-i18n";
                  
          const { locale } = useI18n();

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
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :flags-path="flagsPath"
              :placeholder="$t('form.placeholder.country')"
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
          :placeholder="$t('form.placeholder.country')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :include="includedCountries"
              :placeholder="$t('form.placeholder.country')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const includedCountries = ["US", "GB", "DE", "FR", "JP"];

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
          :placeholder="$t('form.placeholder.country')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :exclude="excludedCountries"
              :placeholder="$t('form.placeholder.country')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          
          const excludedCountries = ["FR", "CN", "BR"];
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
          :favorites="favoriteCountries"
          :placeholder="$t('form.placeholder.country')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :favorites="favoriteCountries"
              :placeholder="$t('form.placeholder.country')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ref } from 'vue';
          
          const favoriteCountries = ["NP", "US", "GB"];

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
          v-model="formData.includeFavorites"
          :favorites="favoriteCountries"
          :include-favorites="false"
          :placeholder="$t('form.placeholder.country')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :favorites="favoriteCountries"
              :include-favorites="false"
              :placeholder="$t('form.placeholder.country')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { ref } from 'vue';
          
          const favoriteCountries = ["NP", "US", "GB"];

          const input = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.grouping") }}</h2>

      <div class="section-content">
        <CountryPicker
          v-model="formData.groups"
          :groups="groups"
          :locale="locale"
          :placeholder="$t('form.placeholder.country')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :groups="groups"
              :locale="locale"
              :placeholder="$t('form.placeholder.country')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { ref } from 'vue';

          const { locale } = useI18n();
          
          const groups = {
            "North America HQ": ["US", "CA"],
            "Offshore Dev Center": ["IN", "VN", "PH"],
            "European Hubs": ["GB", "DE", "FR"],
          };

          const input = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.groupingWithTranslations") }}</h2>

      <div class="section-content">
        <CountryPicker
          v-model="formData.groupsWithTranslations"
          :groups="regionalCountryGroups"
          :locale="locale"
          :locales="locales"
          :placeholder="$t('form.placeholder.country')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :groups="groups"
              :locale="locale"
              :locales="locales"
              :placeholder="$t('form.placeholder.country')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { ref } from 'vue';

          import englishTranslation from "./en.json";
          import frenchTranslation from "./fr.json";

          const { locale } = useI18n();

          const groups = {
            EU: ["FR", "DE", "IT", "ES"],
            ASEAN: ["VN", "TH", "SG"],
          };
          const locales = {
            en: {
              ...englishTranslation,
              ASEAN: "ASEAN",
              EU: "European Union",
            },
            fr: {
              ...frenchTranslation,
              ASEAN: "ASEAN",
              EU: "Union Européenne",
            },
          };

          const input = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.groupingWithFavroties") }}</h2>

      <div class="section-content">
        <CountryPicker
          v-model="formData.groupsWithFavorites"
          :favorites="['US', 'FR']"
          :groups="continentCountryGroups"
          :has-sorted-options="false"
          :locale="locale"
          :placeholder="$t('form.placeholder.country')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              :favorites="['US', 'FR']"
              :groups="groups"
              :has-sorted-options="false"
              :locale="locale"
              :placeholder="$t('form.placeholder.country')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { ref } from 'vue';

          const { locale } = useI18n();

          const groups = {
            "North America": ["US", "CA"],
            Europe: ["FR", "DE", "IT", "ES"],
          };

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
        <SshPre language="html-vue">           
          type CountryPickerGroups = Record&lt;string, string&lbrack;&rbrack;&gt;;
          type CountryPickerLocales = Record&lt;string, CountryPickerTranslation&gt;;
          type CountryPickerTranslation = Record&lt;string, string&gt;;

          Example Locales: 
          { 
            en:{ "US": "USA" }, 
            fr: { "US": "États-Unis" } 
          }

          Example Groups:
          {
            "European Union": ["AT", "BE", "FR", "DE"],
            "North America": ["US", "CA", "MX"]
          }
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </FormPage>
</template>

<script setup lang="ts">
import { CountryPicker } from "@prefabs.tech/vue3-form";
import { reactive } from "vue";
import { useI18n } from "vue-i18n";

import englishTranslation from "./en.json";
import nepaliTranslation from "./np.json";
import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import FormPage from "../FormPage.vue";
import frenchTranslation from "./fr.json";

const { locale, t } = useI18n();

const locales = {
  en: {
    ...englishTranslation,
    ASEAN: "ASEAN",
    EU: "European Union",
  },
  fr: {
    ...frenchTranslation,
    ASEAN: "ASEAN",
    EU: "Union Européenne",
  },
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
    default: "-",
    description: t("form.documentation.propsDescription.countryPicker.groups"),
    prop: "groups",
    type: "CountryPickerGroups",
  },
  {
    default: "true",
    description: t(
      "form.documentation.propsDescription.countryPicker.hasSortedOptions",
    ),
    prop: "hasSortedOptions",
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
    default: "en",
    description: t("form.documentation.propsDescription.select.locale"),
    prop: "locale",
    type: "String",
  },
  {
    default: "{ en: defaultEnCatalogue }",
    description: t("form.documentation.propsDescription.select.locales"),
    prop: "locales",
    type: "CountryPickerLocales",
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
  customLocale: undefined,
  excludedCountries: [],
  fallback: undefined,
  flags: undefined,
  groups: undefined,
  groupsWithTranslations: undefined,
  includedCountries: [],
  multiselect: [] as string[],
});

const continentCountryGroups = {
  "North America": ["US", "CA"],
  Europe: ["FR", "DE", "IT", "ES"],
};
const excludedCountries = ["FR", "CN", "BR"];
const favoriteCountries = ["NP", "US", "GB"];
const groups = {
  "North America HQ": ["US", "CA"],
  "Offshore Dev Center": ["IN", "VN", "PH"],
  "European Hubs": ["GB", "DE", "FR"],
};
const includedCountries = ["US", "GB", "DE", "FR", "JP"];
const regionalCountryGroups = {
  EU: ["FR", "DE", "IT", "ES"],
  ASEAN: ["VN", "TH", "SG"],
};

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
