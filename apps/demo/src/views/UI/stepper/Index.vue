<template>
  <Page :title="$t('ui.stepper.title')" class="demo">
    <section>
      <h2>{{ $t("ui.stepper.usage.basic") }}</h2>

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
    content: "Please enter personal details",
    label: "Personal",
    step: 1,
  },
  {
    content: "Please enter contact details",
    label: "Contact",
    step: 2,
  },
  {
    content: "Please enter payment details",
    label: "Payment",
    step: 3,
  },
  {
    content: "Do you wish to continue?",
    label: "Confirmation",
    step: 4,
  },
]);
</script>
