<template>
  <FormPage
    :subtitle="$t('form.subtitle.countryDisplay')"
    :title="$t('form.label.countryDisplay')"
  >
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>
      <div>
        <div>
          <div>
            <Country code="FR" :i18n="i18n" :locale="locale" />
            <!-- eslint-disable -->
            <SshPre language="html-vue">
            &lt;template&gt;
                &lt;Country 
                code="FR" 
                :i18n="i18n" 
                :locale="locale"
                /&gt;
              &lt;/template&gt;
                      
              &lt;script setup lang="ts"&gt;
              import { Country } from '@prefabs.tech/vue3-form';
           
              &lt;/script&gt;
            </SshPre>    
            <!-- eslint-enable -->
          </div>
        </div>
      </div>
    </section>
    >
  </FormPage>
</template>

<script setup lang="ts">
import { Country } from "@prefabs.tech/vue3-form";

import FormPage from "../FormPage.vue";
</script>
