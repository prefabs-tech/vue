<template>
  <Uipage :title="$t('ui.countryPicker.label.title')">
    <section>
      <h2>{{ $t("ui.countryPicker.label.basicInput") }}</h2>

      <div class="section-content">
        <CountryPicker />
      </div>
    </section>
  </Uipage>
</template>

<script setup lang="ts">
import { CountryPicker } from "@prefabs.tech/vue3-ui";

import Uipage from "../UiPage.vue";
</script>
