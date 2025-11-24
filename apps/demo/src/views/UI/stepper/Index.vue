<template>
  <UiPage
    :sub-title="$t('ui.stepper.subtitle')"
    :title="$t('ui.stepper.title')"
    class="demo-stepper"
  >
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/ui')"
      />
    </template>

    <section>
      <h2>{{ $t("ui.stepper.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <Stepper :steps="steps" @complete="onFinish" />

        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Stepper :steps="steps" @complete="onFinish" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Stepper } from "@prefabs.tech/vue3-ui";

          import { useRouter } from "vue-router";

          const router = useRouter();

          const steps = [
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
          ];

          const onFinish = () => {
            router.push("/ui");
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.stepper.usage.buttonProperties") }}</h2>

      <div class="section-content">
        <Stepper
          :next-button-properties="nextButtonProperties"
          :previous-button-properties="previousButtonProperties"
          :steps="steps"
        />

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
          import { Stepper } from "@prefabs.tech/vue3-ui";

          const steps = [
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
          ];

          const nextButtonProperties = {
            iconRight: "pi pi-chevron-right",
            label: "Next",
            severity: "primary",
            variant: "filled",
          };

          const previousButtonProperties = {
            iconLeft: "pi pi-chevron-left",
            label: "Back",
            severity: 'secondary',
            variant: "filled",
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.stepper.usage.withSlot") }}</h2>

      <div class="section-content">
        <Stepper :steps="steps">
          <template #1>
            <TextInput
              v-model="formData.name"
              :label="$t('ui.stepper.label.name')"
              :placeholder="$t('ui.stepper.placeholder.name')"
              name="name"
            />
          </template>
          <template #2>
            <NumberInput
              v-model="formData.phone"
              :label="$t('ui.stepper.label.phone')"
              :placeholder="$t('ui.stepper.placeholder.phone')"
              name="phone"
            />
          </template>
          <template #3>
            <TextInput
              v-model="formData.price"
              :label="$t('ui.stepper.label.price')"
              disabled
              name="price"
            />
          </template>
          <template #4>
            {{ $t("ui.stepper.usage.complete") }}
          </template>
        </Stepper>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Stepper :steps="steps"&gt;
            &lt;!-- Slot for rendering custom content with step in the `steps` prop --&gt;
            &lt;template #1&gt;
              &lt;TextInput
                v-model="formData.name"
                :label="$t('ui.stepper.label.name')"
                :placeholder="$t('ui.stepper.placeholder.name')"
                name="name"
              /&gt;
            &lt;/template&gt;
            &lt;template #2&gt;
              &lt;NumberInput
                v-model="formData.phone"
                :label="$t('ui.stepper.label.phone')"
                :placeholder="$t('ui.stepper.placeholder.phone')"
                name="phone"
              /&gt;
            &lt;/template&gt;
            &lt;template #3&gt;
              &lt;TextInput
                v-model="formData.price"
                disabled
                :label="$t('ui.stepper.label.price')"
                name="price"
              /&gt;
            &lt;/template&gt;
            &lt;template #4&gt;
              {&lbrace;&lbrace; t('ui.stepper.usage.complete') &rbrace;&rbrace;
            &lt;/template&gt;
            &lt;/Stepper&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { TextInput, NumberInput } from "@prefabs.tech/vue3-form";
          import { Stepper } from "@prefabs.tech/vue3-ui";

          import { reactive } from "vue";

          const { t } = useI18n();

          const steps = [
            {
              content: "Please enter personal details",
              label: "Personal",
              step: 1,
            },
            ...
          ];

          const formData = reactive({
            name: null,
            phone: null,
            price: "$50",
          });
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.stepper.usage.controlled") }}</h2>

      <div class="section-content">
        <Stepper :active-index="activeIndex" :steps="list" controlled />

        <div class="demo-stepper-content-wrapper">
          {{ renderStepContent(activeIndex) }}
        </div>

        <div class="demo-stepper-buttons-wrapper">
          <ButtonElement
            :disabled="activeIndex === 0"
            :label="$t('ui.stepper.label.previous')"
            variant="outlined"
            @click="onPrevious"
          />
          <ButtonElement
            :disabled="activeIndex === list.length - 1"
            :label="$t('ui.stepper.label.next')"
            @click="onNext"
          />
        </div>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Stepper
              :active-index="activeIndex"
              :steps="list"
              controlled
            /&gt;

            &lt;div class="demo-stepper-content-wrapper"&gt;
              &lbrace;&lbrace; renderStepContent(activeIndex) &rbrace;&rbrace;
            &lt;/div&gt;

            &lt;div class="demo-stepper-buttons-wrapper"&gt;
              &lt;ButtonElement
                :disabled="activeIndex === 0"
                label="Previous"
                variant="outlined"
                @click="onPrevious"
              /&gt;
              &lt;ButtonElement
                :disabled="activeIndex === list.length - 1"
                label="Next"
                @click="onNext"
              /&gt;
            &lt;/div&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Stepper } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const activeIndex = ref&lt;number&gt;(0);

          const list = [
            {
              label: "Personal",
            },
            {
              label: "Children",
            },
            {
              label: "Payment",
            },
            {
              label: "Confirmation",
            },
          ];

          const onNext = () => {
            if (activeIndex.value < (list.length - 1)) {
              activeIndex.value++;
            }
          };

          const onPrevious = () => {
            if (activeIndex.value > 0) {
              activeIndex.value--;
            }
          };

          const renderStepContent = (step: number) => {
            switch (step) {
              case 0:
                return "Please enter personal details";
              case 1:
                return "Please enter family details";
              case 2:
                return "Please enter payment details";
              case 3:
                return "Do you wish to continue?";
            }
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'StepperProperties' })
      "
      :slots-data="slotsData"
    />

    <!-- eslint-disable -->
    <SshPre language="html-vue">
      interface StepProperties {
        content?: string;
        label?: string;
        step?: number | string;
      }

      interface ActionButtonProperties {
        disabled?: boolean;
        iconLeft?: string;
        iconRight?: string;
        label?: string;
        rounded?: boolean;
        severity?: string;
        size?: string;
        variant?: string;
      }
    </SshPre>
  </UiPage>
</template>

<script setup lang="ts">
import { TextInput, NumberInput } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { ButtonElement, Stepper } from "@prefabs.tech/vue3-ui";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UiPage from "../UiPage.vue";

const { t } = useI18n();

const router = useRouter();

const activeIndex = ref<number>(0);
const formData = reactive({
  name: null,
  phone: null,
  price: "$50",
});

const eventsData = [
  {
    description: t("ui.stepper.documentation.eventDescription.complete"),
    name: "complete",
    payload: "-",
  },
];

const list = [
  {
    label: "Personal",
  },
  {
    label: "Children",
  },
  {
    label: "Payment",
  },
  {
    label: "Confirmation",
  },
];

const nextButtonProperties = {
  iconRight: "pi pi-chevron-right",
  label: "Next",
  severity: "primary",
  variant: "filled",
};

const previousButtonProperties = {
  iconLeft: "pi pi-chevron-left",
  label: "Back",
  severity: "secondary",
  variant: "filled",
};

const propsData = [
  {
    default: "0",
    description: t("ui.stepper.documentation.propsDescription.activeIndex"),
    prop: "activeIndex",
    type: "Number",
  },
  {
    default: "false",
    description: t("ui.stepper.documentation.propsDescription.controlled"),
    prop: "controlled",
    type: "Boolean",
  },
  {
    default: "-",
    description: t("ui.stepper.documentation.propsDescription.nextButton"),
    prop: "nextButtonProperties",
    type: "ActionButtonProperties",
  },
  {
    default: "-",
    description: t("ui.stepper.documentation.propsDescription.previousButton"),
    prop: "previousButtonProperties",
    type: "ActionButtonProperties",
  },
  {
    default: "-",
    description: t("ui.stepper.documentation.propsDescription.steps"),
    prop: "steps",
    type: "Array<StepProperties>",
  },
];

const slotsData = [
  {
    description: t("ui.stepper.documentation.slotDescription.step"),
    name: "{step}",
  },
];

const steps = [
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
];

const onFinish = () => {
  router.push("/ui");
};

const onNext = () => {
  if (activeIndex.value < list.length - 1) {
    activeIndex.value++;
  }
};

const onPrevious = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--;
  }
};

const renderStepContent = (step: number) => {
  switch (step) {
    case 0:
      return "Please enter personal details";
    case 1:
      return "Please enter family details";
    case 2:
      return "Please enter payment details";
    case 3:
      return "Do you wish to continue?";
  }
};
</script>

<style lang="css">
.demo-stepper-content-wrapper {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
}

.demo-stepper-buttons-wrapper {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
}
</style>
