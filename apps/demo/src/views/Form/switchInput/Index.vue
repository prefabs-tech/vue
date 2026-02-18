<template>
  <FormPage
    :subtitle="$t('form.subtitle.switch')"
    :title="$t('form.label.switch')"
    class="demo"
  >
    <section>
      <h2>{{ $t("form.label.basicInput") }}</h2>

      <div class="section-content">
        <SwitchInput v-model="formData.noLabelInput" />

        <!-- eslint-disable -->
         <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SwitchInput v-model="input" /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.labelInput") }}</h2>

      <div class="section-content">
        <SwitchInput
          v-model="formData.input"
          :label="$t('form.label.switch')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SwitchInput v-model="input" label="Switch" /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.disabled") }}</h2>

      <div class="section-content">
        <SwitchInput
          v-model="formData.disabled"
          :label="$t('form.label.disabled')"
          disabled
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SwitchInput 
              v-model="disabled"
              disabled
              label="Disabled"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const disabled = ref(true);
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withOnOffLabel") }}</h2>

      <div class="section-content">
        <SwitchInput
          v-model="formData.onOffLabel"
          :label="$t('form.label.switch')"
          :off-label="$t('form.label.no')"
          :on-label="$t('form.label.yes')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SwitchInput
              v-model="input"
              :label="$t('form.label.switch')"
              off-label="No"
              on-label="Yes"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          &lt;/script&gt;

          &lt;style&gt;
            .switch input[type=checkbox] {
              --_width: 5rem;
            }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.withI18n") }}</h2>

      <div class="section-content">
        <SwitchInput
          v-model="formData.input"
          :label="$t('form.label.switch')"
        />

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;SwitchInput 
              v-model="input"
              :label="t('form.label.switch')"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { SwitchInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("form.label.inputWithValidation") }}</h2>

      <div class="section-content">
        <Form>
          <SwitchInput
            v-model="formData.inputWithValidation"
            :label="$t('form.label.switch')"
            :schema="inputSchema"
          />
        </Form>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;Form&gt;
            &lt;SwitchInput 
              v-model="disabled"
              :schema="inputSchema"
              label="Switch"
            /&gt;
          &lt;/Form&gt;

          &lt;script setup lang="ts"&gt;
          import { Form, SwitchInput } from "@prefabs.tech/vue3-form";

          const inputSchema = z.coerce
            .boolean()
            .refine((value) => value === true, {
              message: "The switch value must be true.",
            });
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'SwitchInputProperties' })
      "
    />
  </FormPage>
</template>

<script lang="ts">
export default {
  name: "SwitchInput",
};
</script>

<script setup lang="ts">
import { Form, SwitchInput } from "@prefabs.tech/vue3-form";
import { useI18n } from "@prefabs.tech/vue3-i18n";
import { computed, reactive, ref } from "vue";
import { z } from "zod";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import FormPage from "../FormPage.vue";

const { t } = useI18n();

const inputSchema = computed(() =>
  z.coerce.boolean().refine((value) => value === true, {
    message: t("form.errors.switch.invalid"),
  }),
);

let formData = reactive({
  disabled: ref(true),
  input: ref(),
  inputWithValidation: ref(false),
  noLabelInput: ref(),
  onOffLabel: ref(),
});

const eventsData = computed(() => [
  {
    description: t("form.documentation.eventDescription.input.modelValue"),
    name: "update:modelValue",
    payload: "value: boolean",
  },
]);

const propsData = computed(() => [
  {
    default: "false",
    description: t("form.documentation.propsDescription.input.disabled"),
    prop: "disabled",
    type: "Boolean",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.label"),
    prop: "label",
    type: "String",
  },
  {
    default: "false",
    description: t("form.documentation.propsDescription.input.modelValue"),
    prop: "modelValue",
    type: "Boolean",
  },
  {
    default: '"switch"',
    description: t("form.documentation.propsDescription.input.name"),
    prop: "name",
    type: "String",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.switch.offLabel"),
    prop: "offLabel",
    type: "String",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.switch.onLabel"),
    prop: "onLabel",
    type: "String",
  },
  {
    default: "-",
    description: t("form.documentation.propsDescription.input.schema"),
    prop: "schema",
    type: "z.ZodType<string | number | boolean>",
  },
]);
</script>
