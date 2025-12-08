<template>
  <Uipage :title="$t('ui.label.countryPicker')">
    <section>
      <h2>{{ $t("ui.label.basicInput") }}</h2>

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
