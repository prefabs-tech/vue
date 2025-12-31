<template>
  <FormPage
    :subtitle="$t('form.subtitle.country')"
    :title="$t('form.label.country')"
  >
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>
      <div>
        <div>
          <div>
            <Country code="FR" />
            <!-- eslint-disable -->
            <SshPre language="html-vue">
            &lt;template&gt;
                &lt;Country 
                code="FR" 
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
