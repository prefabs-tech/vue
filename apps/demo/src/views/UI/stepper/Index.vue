<template>
  <Page :title="$t('ui.dropdown.title')" class="demo">
    <section>
      <h2>{{ $t("ui.dropdown.usage.basic") }}</h2>

      <div class="section-content">
        <Stepper :steps="steps" />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { Stepper } from "@dzangolab/vue3-ui";
import { ref } from "vue";

const steps = ref([
  {
    label: "Personal",
    step: 1,
  },
  {
    label: "Contact",
    step: 2,
  },
  {
    label: "Payment",
    step: 3,
  },
  {
    label: "Confirmation",
    step: 4,
  },
]);
</script>
