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
          v-model="selectedCountry"
          :options="countries"
          :placeholder="$t('form.placeholder.country')"
        />
        <div v-if="selectedCountry" class="mt-4 p-4 bg-gray-100 rounded">
          Selected Country: {{ countries.find((c) => c.value === selectedCountry)?.label || 'None' }}
        </div>
      </div>
    </section>
  </FormPage>
</template>

<script setup lang="ts">
import { CountryPicker } from "@prefabs.tech/vue3-form";
import { ref } from "vue";
import FormPage from "../FormPage.vue";

</script>