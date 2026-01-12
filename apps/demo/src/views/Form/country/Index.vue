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
                &lt;Country code="FR" /&gt;
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
        <Country :locales="locales" :locale="selectedLocale" code="NP" />
        <!-- eslint-disable -->
            <SshPre language="html-vue">
              &lt;template&gt;
                &lt;Country :locales="locales" :locale="selectedLocale" code="NP" /&gt;
              &lt;/template&gt;
                      
              &lt;script setup lang="ts"&gt;
              import { Country } from '@prefabs.tech/vue3-form';
              import fr from "./fr.json";

              const { locale } = useI18n();

              const selectedLocale = "np";
              
              const locales = {
                fr,
              };
              &lt;/script&gt;
            </SshPre>    
            <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.localesSupport") }}</h2>
      <div>
        <Country :locale="locale" :locales="locales" code="JP" />
        <!-- eslint-disable -->
            <SshPre language="html-vue">
              &lt;template&gt;
                &lt;Country :locale="locale" :locales="locales" code="JP" /&gt;
              &lt;/template&gt;
                      
              &lt;script setup lang="ts"&gt;
              import { Country } from '@prefabs.tech/vue3-form';
              import fr from "./fr.json";

              const { locale } = useI18n();
              
              const locales = {
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
          :locale="locale"
          :locales="locales"
          code="CN"
          fallback-locale="np"
        />
        <!-- eslint-disable -->
            <SshPre language="html-vue">
              &lt;template&gt;
                &lt;Country 
                :locale="locale"
                :locales="locales"
                 code="CN"
                 fallback-locale="np" 
                 /&gt;
              &lt;/template&gt;
                      
              &lt;script setup lang="ts"&gt;
              import { Country } from '@prefabs.tech/vue3-form';
              import { useI18n } from "vue-i18n";
              import fr from "./fr.json";
              import np from "./np.json";
              
              const { locale } = useI18n();

              const locales = {
                fr,
                np,
              };
              &lt;/script&gt;
            </SshPre>    
            <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.flagVisibility") }}</h2>
      <div>
        <Country code="FR" :show-flag="false" />
        <!-- eslint-disable -->
            <SshPre language="html-vue">
              &lt;template&gt;
                &lt;Country code="FR" :show-flag="false" /&gt;
              &lt;/template&gt;
                      
              &lt;script setup lang="ts"&gt;
              import { Country } from '@prefabs.tech/vue3-form';
           
              &lt;/script&gt;
            </SshPre>    
            <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.flagsStyle") }}</h2>
      <div>
        <h3>{{ $t("form.label.rectangle") }}</h3>
        <Country code="IS" />
        <!-- eslint-disable -->
            <SshPre language="html-vue">
              &lt;template&gt;
                &lt;Country code="IS"&gt; 
              &lt;/template&gt;       
            </SshPre>    
            <!-- eslint-enable -->
      </div>
      <div>
        <h3>{{ $t("form.label.square") }}</h3>
        <Country code="IS" flags-style="square" />
        <!-- eslint-disable -->
            <SshPre language="html-vue">
              &lt;template&gt;
                &lt;Country code="IS" :flags-style="square"&gt; 
              &lt;/template&gt;          
            </SshPre>    
            <!-- eslint-enable -->
      </div>
      <div>
        <h3>{{ $t("form.label.circle") }}</h3>
        <Country code="IS" flags-style="circle" />
        <!-- eslint-disable -->
            <SshPre language="html-vue">
              &lt;template&gt;
                &lt;Country code="IS" flags-style="circle"&gt; 
              &lt;/template&gt;          
            </SshPre>    
            <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.flagsPosition") }}</h2>
      <div>
        <h3>{{ $t("form.label.left") }}</h3>
        <Country code="IS" />
        <!-- eslint-disable -->
            <SshPre language="html-vue">
              &lt;template&gt;
                &lt;Country code="IS"&gt; 
              &lt;/template&gt;       
            </SshPre>    
            <!-- eslint-enable -->
      </div>
      <div>
        <h3>{{ $t("form.label.right") }}</h3>
        <Country code="IS" flags-position="right" />
        <!-- eslint-disable -->
            <SshPre language="html-vue">
              &lt;template&gt;
                &lt;Country code="IS" :flags-position="right"&gt; 
              &lt;/template&gt;
                      
            </SshPre>    
            <!-- eslint-enable -->
      </div>
      <div>
        <h3>{{ $t("form.label.rightEdge") }}</h3>
        <Country code="IS" flags-position="right-edge" />
        <!-- eslint-disable -->
            <SshPre language="html-vue">
              &lt;template&gt;
                &lt;Country code="IS" flags-position="right-edge"&gt; 
              &lt;/template&gt;
                      
            </SshPre>    
            <!-- eslint-enable -->
      </div>
    </section>
    <section>
      <h2>{{ $t("form.label.unknownCountryCode") }}</h2>
      <div>
        <span class="unknown-country">Country:</span>
        <Country
          :locale="locale"
          :locales="locales"
          code="WW"
          fallback-locale="th"
        />

        <!-- eslint-disable -->
            <SshPre language="html-vue">
              &lt;template&gt;
                &lt;Country 
                :locale="locale" 
                :locales="locales" 
                code="WW" 
                fallback-locale="th" 
                /&gt;
              &lt;/template&gt;
                      
              &lt;script setup lang="ts"&gt;
              import { Country } from '@prefabs.tech/vue3-form';
              import { useI18n } from "vue-i18n";
              import fr from "./fr.json";
              import np from "./np.json";

              const { locale } = useI18n();

              const locales = {
                fr,
                th,
              };
              &lt;/script&gt;
            </SshPre>    
            <!-- eslint-enable -->
      </div>
    </section>
    <ComponentDocumentation
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'CountryProperties' })
      "
      :slots-data="slotsData"
    />
    <section>
      <h2>{{ $t("common.type") }}</h2>
      <div class="section-content">
        <!-- eslint-disable -->
         <SshPre language="typescript">
            interface CountryProperties {
             code: string;
             fallbackLocale?: string;  
             locale?: string;          
             locales?: I18nData;         
             showFlag?: boolean;            
            }
          </SshPre>
      </div>
    </section>
  </FormPage>
</template>

<script setup lang="ts">
import { Country } from "@prefabs.tech/vue3-form";
import { useI18n } from "vue-i18n";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import fr from "../countryPicker/fr.json";
import np from "../countryPicker/np.json";
import FormPage from "../FormPage.vue";

const { t } = useI18n();

const { locale } = useI18n();

const locales = {
  fr,
  np,
};

const selectedLocale = "np";

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
    default: "en",
    description: t("form.documentation.propsDescription.select.locale"),
    id: 3,
    prop: "locale",
    type: "String",
  },
  {
    default: "{ en: defaultEnCatalogue }",
    description: t("form.documentation.propsDescription.select.locales"),
    id: 4,
    prop: "locales",
    type: "Record<string, Record<string, string>>",
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
