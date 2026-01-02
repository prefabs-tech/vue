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
          fallback-locale="th"
        />
        <!-- eslint-disable -->
            <SshPre language="html-vue">
            &lt;template&gt;
                &lt;Country 
                :i18n="countryI18n" 
                :locale="$i18n.locale" 
                code="CN" 
                fallback-locale="th"
                /&gt;
              &lt;/template&gt;
                      
              &lt;script setup lang="ts"&gt;
              import { Country } from '@prefabs.tech/vue3-form';
              import fr from "./fr.json";
              import th from "./th.json";

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
      <h2>{{ $t("form.label.unknownCountryCode") }}</h2>
      <div>
        <Country
          :i18n="countryI18n"
          :locale="$i18n.locale"
          code="UK"
          fallback-locale="th"
        />
        <!-- eslint-disable -->
            <SshPre language="html-vue">
            &lt;template&gt;
                &lt;Country 
                :i18n="countryI18n" 
                :locale="$i18n.locale" 
                code="UK" 
                fallback-locale="th"
                /&gt;
              &lt;/template&gt;
                      
              &lt;script setup lang="ts"&gt;
              import { Country } from '@prefabs.tech/vue3-form';
              import fr from "./fr.json";
              import th from "./th.json";

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
      <h2>
        {{ $t("common.properties", { value: "CountryProperties" }) }}
      </h2>

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
             code: string;
             locale?: string;          
             fallbackLocale?: string;  
             i18n?: I18nData;         
            }

            Example I18n:
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
import th from "../countryPicker/th.json";
import FormPage from "../FormPage.vue";
const { t } = useI18n();

const countryI18n = {
  fr,
  th,
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
    default: "-",
    description: t("form.documentation.propsDescription.select.countryCode"),
    id: 1,
    prop: "code",
    type: "String",
  },
  {
    default: "en",
    description: t("form.documentation.propsDescription.select.fallbackLocale"),
    id: 2,
    prop: "fallbackLocale",
    type: "String",
  },
  {
    default: "{ en: defaultEnCatalogue }",
    description: t("form.documentation.propsDescription.select.i18n"),
    id: 3,
    prop: "i18n",
    type: "Record<string, Record<string, string>>",
  },

  {
    default: "en",
    description: t("form.documentation.propsDescription.select.locale"),
    id: 4,
    prop: "locale",
    type: "String",
  },
  {
    default: "true",
    description: t("form.documentation.propsDescription.select.showFlag"),
    id: 5,
    prop: "showFlag",
    type: "Boolean",
  },
];
</script>
