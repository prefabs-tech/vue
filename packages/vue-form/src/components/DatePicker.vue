<template>
  <div class="field date-picker">
    <label>
      <span>{{ label }}</span>

      <Field
        v-slot="{ field, meta }"
        v-bind="{ modelValue }"
        :name="name"
        :rules="fieldSchema"
      >
        <VueDatePicker
          ref="dzangolabVueDatePicker"
          v-bind="filteredAttributes"
          :auto-apply="autoApply"
          :class="[
            {
              invalid: (meta.dirty || meta.touched) && !meta.valid,
              valid: meta.dirty && meta.valid && props.schema,
            },
          ]"
          :disabled="disabled"
          :filters="{ weekDays: disabledWeekDays }"
          :formats="{ input: format }"
          :model-value="modelValue"
          :placeholder="placeholder"
          :teleport="teleport"
          :time-config="{ enableTimePicker }"
          :name="field.name"
          tabindex="0"
          @update:model-value="onUpdate"
        />
        <ErrorMessage :name="name" />
      </Field>
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: "DatePicker",
};
</script>

<script setup lang="ts">
import type { PropType } from "vue";

import { toTypedSchema } from "@vee-validate/zod";
import "@vuepic/vue-datepicker/dist/main.css";
import { VueDatePicker } from "@vuepic/vue-datepicker";
import { ErrorMessage, Field } from "vee-validate";
import { computed, onBeforeUnmount, onMounted, ref, useAttrs } from "vue";
import { z } from "zod";

import type { MonthPickerValue } from "../types";

const props = defineProps({
  autoApply: {
    default: true,
    type: Boolean,
  },
  disabled: {
    default: false,
    type: Boolean,
  },
  disabledWeekDays: {
    default: undefined,
    type: Array as PropType<number[]>,
  },
  enableTimePicker: {
    default: false,
    type: Boolean,
  },
  format: {
    default: null,
    required: false,
    type: String,
  },
  label: {
    default: "",
    required: false,
    type: String as PropType<string>,
  },
  modelValue: {
    default: undefined,
    type: [Array, Date, Number, Object, String] as PropType<
      | Date
      | Date[]
      | MonthPickerValue
      | null
      | number
      | number[]
      | string
      | string[]
      | undefined
    >,
  },
  name: {
    default: "date",
    required: false,
    type: String as PropType<string>,
  },
  placeholder: {
    default: undefined,
    type: String,
  },
  schema: {
    default: undefined,
    required: false,
    type: Object as PropType<z.ZodType<Date | number | object | string>>,
  },
  teleport: {
    default: undefined,
    type: [Boolean, String] as PropType<boolean | string>,
  },
});

const emit = defineEmits(["update:modelValue"]);

const dzangolabVueDatePicker = ref();

const attributes = useAttrs();

const fieldSchema = props.schema ? toTypedSchema(props.schema) : undefined;

const filteredAttributes = computed(() => {
  const { class: _, ...rest } = attributes;

  return rest;
});

const closeOnScroll = () => {
  dzangolabVueDatePicker.value?.closeMenu?.();
};

const onUpdate = (
  date:
    | Date
    | Date[]
    | MonthPickerValue
    | number
    | number[]
    | string
    | string[],
) => {
  emit("update:modelValue", date);
};

onMounted(() => {
  if (props.teleport) {
    window.addEventListener("scroll", closeOnScroll, true);
  }
});

onBeforeUnmount(() => {
  if (props.teleport) {
    window.removeEventListener("scroll", closeOnScroll, true);
  }
});
</script>

<style lang="css">
@import "../assets/css/date-picker.css";
</style>
