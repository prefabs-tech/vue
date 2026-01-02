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
        <Country :i18n="countryI18n" :locale="$i18n.locale" code="JP" />
        <!-- eslint-disable -->
            <SshPre language="html-vue">
            &lt;template&gt;
                &lt;Country :i18n="countryI18n" :locale="$i18n.locale" code="JP"  /&gt;
              &lt;/template&gt;
                      
              &lt;script setup lang="ts"&gt;
              import { Country } from '@prefabs.tech/vue3-form';
              import fr from "../countryPicker/fr.json";
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
              import fr from "../countryPicker/fr.json";
              import th from "../countryPicker/th.json";

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
          code="XX"
          fallback-locale="th"
        />
        <!-- eslint-disable -->
            <SshPre language="html-vue">
            &lt;template&gt;
                &lt;Country 
                :i18n="countryI18n" 
                :locale="$i18n.locale" 
                code="XX" 
                fallback-locale="th"
                /&gt;
              &lt;/template&gt;
                      
              &lt;script setup lang="ts"&gt;
              import { Country } from '@prefabs.tech/vue3-form';
              import fr from "../countryPicker/fr.json";
              import th from "../countryPicker/th.json";

              const countryI18n = {
                fr,
                th,
              };
              &lt;/script&gt;
            </SshPre>    
            <!-- eslint-enable -->
      </div>
    </section>
  </FormPage>
</template>

<script setup lang="ts">
import { Country } from "@prefabs.tech/vue3-form";

import fr from "../countryPicker/fr.json";
import th from "../countryPicker/th.json";
import FormPage from "../FormPage.vue";

const countryI18n = {
  fr,
  th,
};
</script>
