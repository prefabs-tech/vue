<template>
  <FormPage
    :subtitle="$t('form.subtitle.country')"
    :title="$t('form.label.country')"
  >
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <Country code="US" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Country code="US" /&gt;
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
      <div class="section-content">
        <Country :locale="selectedLocale" :locales="locales" code="NP" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Country :locale="selectedLocale" :locales="locales" code="NP" /&gt;
          &lt;/template&gt;
                  
          &lt;script setup lang="ts"&gt;
          import { Country } from '@prefabs.tech/vue3-form';

          import nepaliTranslation from "./np.json";

          const selectedLocale = "np";
          
          const locales = {
            np: nepaliTranslation,
          };
          &lt;/script&gt;
        </SshPre>    
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.localesSupport") }}</h2>

      <div class="section-content">
        <Country :locale="locale" :locales="locales" code="EG" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Country :locale="locale" :locales="locales" code="EG" /&gt;
          &lt;/template&gt;
                  
          &lt;script setup lang="ts"&gt;
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { Country } from "@prefabs.tech/vue3-form";

          import englishTranslation from "./en.json";
          import frenchTranslation from "./fr.json";

          const { locale } = useI18n();
          
          const locales = {
            en: englishTranslation,
            fr: frenchTranslation,
          };
          &lt;/script&gt;
        </SshPre>    
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.fallbackLocale") }}</h2>

      <div class="section-content">
        <Country
          :locale="locale"
          :locales="locales"
          code="GB"
          fallback-locale="np"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Country
              :locale="locale"
              :locales="locales"
              code="GB"
              fallback-locale="np"
            /&gt;
          &lt;/template&gt;
                  
          &lt;script setup lang="ts"&gt;
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { Country } from '@prefabs.tech/vue3-form';

          import englishTranslation from "./en.json";
          import nepaliTranslation from "./np.json";
          
          const { locale } = useI18n();

          const locales = {
            en: englishTranslation,
            np: nepaliTranslation,
          };
          &lt;/script&gt;
        </SshPre>    
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.flagVisibility") }}</h2>

      <div class="section-content">
        <Country :show-flag="false" code="CA" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Country :show-flag="false" code="CA" /&gt;
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

      <div class="section-content">
        <h3>{{ $t("form.label.rectangle") }}</h3>

        <Country code="US" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Country code="US"&gt; 
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Country } from '@prefabs.tech/vue3-form';
          &lt;/script&gt;       
        </SshPre>    
        <!-- eslint-enable -->

        <h3>{{ $t("form.label.square") }}</h3>

        <Country code="US" flags-style="square" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Country code="US" flags-style="square"&gt; 
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Country } from '@prefabs.tech/vue3-form';
          &lt;/script&gt;          
        </SshPre>
        <!-- eslint-enable -->

        <h3>{{ $t("form.label.circle") }}</h3>

        <Country code="US" flags-style="circle" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Country code="US" flags-style="circle"&gt; 
          &lt;/template&gt;   

          &lt;script setup lang="ts"&gt;
          import { Country } from '@prefabs.tech/vue3-form';
          &lt;/script&gt;       
        </SshPre>    
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.flagsPosition") }}</h2>
      <div class="section-content">
        <h3>{{ $t("form.label.left") }}</h3>

        <Country code="BR" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Country code="BR"&gt; 
          &lt;/template&gt;     

          &lt;script setup lang="ts"&gt;
          import { Country } from '@prefabs.tech/vue3-form';
          &lt;/script&gt;  
        </SshPre>    
        <!-- eslint-enable -->

        <h3>{{ $t("form.label.right") }}</h3>

        <Country code="BR" flags-position="right" />
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Country code="BR" flags-position="right"&gt; 
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Country } from '@prefabs.tech/vue3-form';
          &lt;/script&gt; 
        </SshPre>    
        <!-- eslint-enable -->

        <h3>{{ $t("form.label.rightEdge") }}</h3>

        <Country code="BR" flags-position="right-edge" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Country code="BR" flags-position="right-edge"&gt; 
          &lt;/template&gt;
          
          &lt;script setup lang="ts"&gt;
          import { Country } from '@prefabs.tech/vue3-form';
          &lt;/script&gt;  
        </SshPre>    
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customFlagsPath") }}</h2>

      <div class="section-content">
        <Country :flags-path="customFlagsPath" code="CA" />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Country :flags-path="flagsPath" code="CA" /&gt;
          &lt;/template&gt;
                  
          &lt;script setup lang="ts"&gt;
          import { Country } from '@prefabs.tech/vue3-form';

          const flagsPath = (code: string) => {
            return `https://flagcdn.com/${code.toLowerCase().trim()}.svg`;
          };
          &lt;/script&gt;
        </SshPre>    
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.customRender") }}</h2>
      <div class="section-content">
        <Country code="JP">
          <template #default="{ code, label }">
            <div class="custom-render">
              <span
                :class="`flag-icon flag-icon-${code.toLowerCase()} flag-icon-rounded`"
              ></span>
              <span>{{ label }}</span>
            </div>
          </template>
        </Country>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Country code="JP"&gt;
              &lt;template #default="{ code, label }"&gt;
                &lt;div class="custom-render"&gt;
                  &lt;span :class="`flag-icon flag-icon-${code.toLowerCase()} flag-icon-rounded`"&gt;&lt;/span&gt;
                  &lt;span&gt;&lbrace;&lbrace; label &rbrace;&rbrace;&lt;/span&gt;
                &lt;/div&gt;
              &lt;/template&gt;
            &lt;/Country&gt;
          &lt;/template&gt;
                  
          &lt;script setup lang="ts"&gt;
          import { Country } from '@prefabs.tech/vue3-form';
          &lt;/script&gt;

          &lt;style lang="css"&gt;
          @import "./assets/css/country.css";
          &lt;/style&gt;
        </SshPre>    
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.missingCountryCode") }}</h2>
      <div class="section-content">
        <div class="demo-country">
          <span>{{ $t("form.label.country") }}</span>

          <Country code="WW" />
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Country code="WW" /&gt;
          &lt;/template&gt;
                  
          &lt;script setup lang="ts"&gt;
          import { Country } from '@prefabs.tech/vue3-form';
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
  </FormPage>
</template>

<script setup lang="ts">
import { Country } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";

import englishTranslation from "./en.json";
import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import frenchTranslation from "../countryPicker/fr.json";
import nepaliTranslation from "../countryPicker/np.json";
import FormPage from "../FormPage.vue";

const { t } = useI18n();

const { locale } = useI18n();

const locales = {
  en: englishTranslation,
  fr: frenchTranslation,
  np: nepaliTranslation,
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
    default: "-",
    description: t("form.documentation.propsDescription.select.flagsPath"),
    id: 3,
    prop: "flagsPath",
    type: "(code: string) => string",
  },
  {
    default: "left",
    description: t("form.documentation.propsDescription.select.flagsPosition"),
    id: 4,
    prop: "flagsPosition",
    type: "left | right | right-edge",
  },
  {
    default: "rectangular",
    description: t("form.documentation.propsDescription.select.flagsStyle"),
    id: 5,
    prop: "flagsStyle",
    type: "circle | rectangular | square",
  },
  {
    default: "en",
    description: t("form.documentation.propsDescription.select.locale"),
    id: 6,
    prop: "locale",
    type: "String",
  },
  {
    default: "{ en: defaultEnCatalogue }",
    description: t("form.documentation.propsDescription.select.locales"),
    id: 7,
    prop: "locales",
    type: "Record<string, Record<string, string>>",
  },
  {
    default: "true",
    description: t("form.documentation.propsDescription.select.showFlag"),
    id: 8,
    prop: "showFlag",
    type: "Boolean",
  },
];

const slotsData = [
  {
    description: t("form.documentation.slotDescription.country.default"),
    name: "default",
    props: "{ code: string, label: string }",
  },
];

const customFlagsPath = (code: string) => {
  return `https://flagcdn.com/${code.toLowerCase().trim()}.svg`;
};
</script>

<style lang="css">
@import "../../../assets/css/form/country.css";
</style>
