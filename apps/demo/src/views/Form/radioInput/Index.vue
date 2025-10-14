<template>
  <FormPage :title="$t('form.label.radio')" class="demo">
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
        <RadioInput
          v-model="formData.input"
          :label="$t('form.label.gender')"
          :options="genderOptions"
          direction="horizontal"
          name="label-input"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;RadioInput
              v-model="input"
              :options="genderOptions"
              direction="horizontal"
              label="Gender"
              name="gender"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { RadioInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          
          const genderOptions = [
            {
              label: "Male",
              value: "male",
            },
            {
              label: "Female",
              value: "female",
            },
          ];
          const input = ref();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <RadioInput
          v-model="formData.disabled"
          :label="$t('form.label.vehicle')"
          :options="vehicleOptions"
          disabled
          name="disabled-input"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;RadioInput 
              v-model="input"
              :options="vehicleOptions"
              disabled
              label="Vehicle"
              name="vehicle"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { RadioInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const vehicleOptions = [
            {
              label: "Bike",
              value: "bike",
            },
            {
              label: "Car",
              value: "car",
            },
            {
              label: "Truck",
              value: "truck",
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withI18n") }}</h2>

      <div class="section-content">
        <RadioInput
          v-model="formData.i18nInput"
          :label="$t('form.label.vehicle')"
          :options="vehicleOptions"
          direction="horizontal"
          name="i18n-input"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;RadioInput 
              v-model="input"
              :label="t('form.label.vehicle')"
              :options="vehicleOptions"
              direction="horizontal"
              name="vehicle"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { RadioInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();

          const vehicleOptions = [
            {
              label: t("form.label.bike"),
              value: "bike",
            },
            {
              label: t("form.label.car"),
              value: "car",
            },
            {
              label: t("form.label.truck"),
              value: "truck",
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.inputWithValidation") }}</h2>

      <div class="section-content">
        <Form>
          <RadioInput
            v-model="formData.inputWithValidation"
            :label="$t('form.label.gender')"
            :options="genderOptions"
            :schema="inputSchema"
            name="gender"
          />

          <ButtonElement :label="t('form.label.submit')" />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Form&gt;
              &lt;RadioInput 
                v-model="input"
                :options="genderOptions"
                :schema="inputSchema"
                label="Gender"
                name="gender"
              /&gt;

              &lt;ButtonElement label="Submit" /&gt;
            &lt;/Form&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, RadioInput } from "@prefabs.tech/vue3-form";
          import { ButtonElement } from "@prefabs.tech/vue3-ui";

          const inputSchema = z
            .string({
              required_error: "Please choose one option",
            })
            .nonempty({ message: "Please choose one option" });

          const genderOptions = [
            {
              label: "Male",
              value: "male",
            },
            {
              label: "Female",
              value: "female",
            },
          ];
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "RadioInput",
};
</script>

<script setup lang="ts">
import { Form, RadioInput } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { ButtonElement } from "@prefabs.tech/vue3-ui";
import { reactive, ref } from "vue";
import { z } from "zod";

import FormPage from "../FormPage.vue";

const { t } = useI18n();

const inputSchema = z
  .string({
    required_error: t("form.errors.radio.required"),
  })
  .nonempty({ message: t("form.errors.radio.required") });

let formData = reactive({
  disabled: ref("car"),
  i18nInput: ref(),
  input: ref(),
  inputWithValidation: ref(),
  noLabelInput: ref(),
});

const genderOptions = [
  {
    label: t("form.label.male"),
    value: "male",
  },
  {
    label: t("form.label.female"),
    value: "female",
  },
];

const vehicleOptions = [
  {
    label: t("form.label.bike"),
    value: "bike",
  },
  {
    label: t("form.label.car"),
    value: "car",
  },
  {
    label: t("form.label.truck"),
    value: "truck",
  },
];
</script>
