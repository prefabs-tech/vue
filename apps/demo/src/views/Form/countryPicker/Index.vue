<template>
  <FormPage :title="$t('form.label.countryPicker')">
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/form')"
      />
    </template>
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
              :placeholder="Select a country"
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
          :placeholder="$t('form.placeholder.country')"
          multiple
        />
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              multiple
              placeholder="Select Countries"
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
      <h2>{{ $t("form.label.customData") }}</h2>
      <div class="section-content">
        <CountryPicker
          v-model="formData.multiselect"
          :placeholder="$t('form.placeholder.country')"
          :overrides="countryOverrides"
          multiple
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;CountryPicker
              v-model="input"
              multiple
              placeholder="Select Countries"
              :overrides="countryOverrides"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref&lt;string[]&gt;([]);

          const countryOverrides = [
            {
              code: "US",
              i18n: {
                en: "United States of America",
                fr: "États-Unis",
                th: "สหรัฐอเมริกา",
              },
            },
            {
              code: "FR",
              i18n: {
                en: "France (overwritten)",
                fr: "France (modifié)",
                th: "ฝรั่งเศส",
              },
            },
            {
              code: "XX",
              i18n: {
                en: "Testland",
                fr: "Pays Test",
                th: "ประเทศทดสอบ",
              },
            },
          ];
          &lt;/script&gt;
          </SshPre>
          <!-- eslint-enable -->
      </div>
    </section>
  </FormPage>
</template>

<script setup lang="ts">
import { CountryPicker } from "@prefabs.tech/vue3-form";
import { ButtonElement } from "@prefabs.tech/vue3-ui";
import { reactive } from "vue";

import FormPage from "../FormPage.vue";

const formData = reactive({
  basic: undefined,
  multiselect: undefined,
});

const countryOverrides = [
  {
    code: "US",
    i18n: {
      en: "United States of America",
      fr: "États-Unis",
      th: "สหรัฐอเมริกา",
    },
  },
  {
    code: "FR",
    i18n: {
      en: "France (overwritten)",
      fr: "France (modifié)",
      th: "ฝรั่งเศส",
    },
  },
  {
    code: "XX",
    i18n: {
      en: "Testland",
      fr: "Pays Test",
      th: "ประเทศทดสอบ",
    },
  },
];
</script>
