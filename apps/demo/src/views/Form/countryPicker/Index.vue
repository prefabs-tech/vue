<template>
  <FormPage :title="$t('form.label.countryPicker')">
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <CountryPicker />
      </div>
    </section>
  </FormPage>
</template>

<script setup lang="ts">
import { CountryPicker } from "@prefabs.tech/vue3-form";

import FormPage from "../FormPage.vue";
</script>
