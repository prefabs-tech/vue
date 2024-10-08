<template>
  <Page :title="$t('ui.stepper.title')" class="demo">
    <section>
      <h2>{{ $t("ui.stepper.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Stepper :steps="steps" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Stepper } from "@dzangolab/vue3-ui";

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
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Stepper :steps="steps" />
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.stepper.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Stepper
              :next-button-properties="nextButtonProperties"
              :previous-button-properties="previousButtonProperties" 
              :steps="steps"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Stepper } from "@dzangolab/vue3-ui";

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

          const nextButtonProperties = ref({
            iconRight: "pi pi-chevron-right",
            label: "Next",
            severity: "primary",
            variant: "filled",
          });

          const previousButtonProperties = ref({
            iconLeft: "pi pi-chevron-left",
            label: "Back",
            severity: 'secondary',
            variant: "filled",
          });
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Stepper
          :next-button-properties="nextButtonProperties"
          :previous-button-properties="previousButtonProperties"
          :steps="steps"
        />
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

const nextButtonProperties = ref({
  iconRight: "pi pi-chevron-right",
  label: "Next",
  severity: "primary",
  variant: "filled",
});

const previousButtonProperties = ref({
  iconLeft: "pi pi-chevron-left",
  label: "Back",
  severity: "secondary",
  variant: "filled",
});
</script>
