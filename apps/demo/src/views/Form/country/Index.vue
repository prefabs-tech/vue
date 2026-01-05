<template>
  <FormPage
    :subtitle="$t('form.subtitle.country')"
    :title="$t('form.label.country')"
  >
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>
      <div>
        <Country code="FR" />
        <!-- eslint-disable -->
            <SshPre language="html-vue">
              &lt;template&gt;
                &lt;Country code="FR"  /&gt;
              &lt;/template&gt;
                      
              &lt;script setup lang="ts"&gt;
              import { Country } from '@prefabs.tech/vue3-form';
           
              &lt;/script&gt;
            </SshPre>    
            <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.customLocale") }}</h2>
      <div>
        <Country :i18n="countryI18n" :locale="$i18n.locale" code="JP" />
        <!-- eslint-disable -->
            <SshPre language="html-vue">
              &lt;template&gt;
                &lt;Country :i18n="countryI18n" :locale="$i18n.locale" code="JP"  /&gt;
              &lt;/template&gt;
                      
              &lt;script setup lang="ts"&gt;
              import { Country } from '@prefabs.tech/vue3-form';
              import fr from "./fr.json";
              const countryI18n = {
                fr,
              };
              &lt;/script&gt;
            </SshPre>    
            <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.fallbackLocale") }}</h2>
      <div>
        <Country
          :i18n="countryI18n"
          :locale="$i18n.locale"
          code="CN"
          fallback-locale="np"
        />
        <!-- eslint-disable -->
            <SshPre language="html-vue">
              &lt;template&gt;
                &lt;Country 
                :i18n="countryI18n" 
                :locale="$i18n.locale" 
                code="CN" 
                fallback-locale="np"
                /&gt;
              &lt;/template&gt;
                      
              &lt;script setup lang="ts"&gt;
              import { Country } from '@prefabs.tech/vue3-form';
              import fr from "./fr.json";
              import np from "./np.json";

              const countryI18n = {
                fr,
                np,
              };
              &lt;/script&gt;
            </SshPre>    
            <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.unknownCountryCode") }}</h2>
      <div>
        <span class="unknown-country">Unknown:</span>
        <Country
          :i18n="countryI18n"
          :locale="$i18n.locale"
          code="WW"
          fallback-locale="th"
        />

        <!-- eslint-disable -->
            <SshPre language="html-vue">
              &lt;template&gt;
                &lt;Country 
                :i18n="countryI18n" 
                :locale="$i18n.locale" 
                code="WW" 
                fallback-locale="th"
                /&gt;
              &lt;/template&gt;
                      
              &lt;script setup lang="ts"&gt;
              import { Country } from '@prefabs.tech/vue3-form';
              import fr from "./fr.json";
              import np from "./np.json";

              const countryI18n = {
                fr,
                th,
              };
              &lt;/script&gt;
            </SshPre>    
            <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.roundedFlag") }}</h2>

      <Country code="FR" class-name="flag-icon-rounded" />
      <!-- eslint-disable -->
          <SshPre language="html-vue">
            &lt;template&gt;
              &lt;Country code="FR" class-name="flag-icon-rounded" /&gt;
            &lt;/template&gt;
                    
            &lt;script setup lang="ts"&gt;
            import { Country } from '@prefabs.tech/vue3-form';
            &lt;/script&gt;
          </SshPre>
          <!-- eslint-enable -->
      <h2>{{ $t("form.label.squaredFlag") }}</h2>
      <Country code="FR" class-name="flag-icon-squared" />
      <!-- eslint-disable -->
          <SshPre language="html-vue">
            &lt;template&gt;
              &lt;Country code="FR" class-name="flag-icon-squared" /&gt;
            &lt;/template&gt;
                    
            &lt;script setup lang="ts"&gt;
            import { Country } from '@prefabs.tech/vue3-form';
            &lt;/script&gt;
          </SshPre>
          <!-- eslint-enable -->
     
    </section>
    <section>
      <h2>{{ $t("common.properties", { value: "CountryProperties" }) }}</h2>

      <Table
        :columns-data="propsColumns"
        :data="propsData"
        :paginated="false"
        :persist-state="false"
      />
    </section>
    <section>
      <h2>{{ $t("common.type") }}</h2>
      <div class="section-content">
        <!-- eslint-disable -->
         <SshPre language="typescript">
            type I18nData = Record;

            interface CountryProperties {
             className?: string;
             code: string;
             locale?: string;          
             fallbackLocale?: string;  
             i18n?: I18nData;         
            }

            Example I18nData:
            { 
              en:{ "US": "USA" }, 
              fr: { "US": "États-Unis" } 
            }
          </SshPre>
      </div>
    </section>
  </FormPage>
</template>

<script setup lang="ts">
import { Country } from "@prefabs.tech/vue3-form";
import { Table } from "@prefabs.tech/vue3-tanstack-table";
import { useI18n } from "vue-i18n";

import fr from "../countryPicker/fr.json";
import np from "../countryPicker/np.json";
import FormPage from "../FormPage.vue";
const { t } = useI18n();

const countryI18n = {
  fr,
  np,
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
    default: "flag-icon-squared",
    description: t("form.documentation.propsDescription.select.className"),
    id: 1,
    prop: "class-name",
    type: "String",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.select.countryCode"),
    id: 2,
    prop: "code",
    type: "String",
  },
  {
    default: "en",
    description: t("form.documentation.propsDescription.select.fallbackLocale"),
    id: 3,
    prop: "fallbackLocale",
    type: "String",
  },
  {
    default: "{ en: defaultEnCatalogue }",
    description: t("form.documentation.propsDescription.select.i18n"),
    id: 4,
    prop: "i18n",
    type: "Record<string, Record<string, string>>",
  },

  {
    default: "en",
    description: t("form.documentation.propsDescription.select.locale"),
    id: 5,
    prop: "locale",
    type: "String",
  },
  {
    default: "true",
    description: t("form.documentation.propsDescription.select.showFlag"),
    id: 6,
    prop: "showFlag",
    type: "Boolean",
  },
];
</script>
