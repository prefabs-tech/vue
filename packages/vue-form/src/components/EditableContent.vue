<template>
  <div class="editable-content">
    <Card :class="size">
      <TextareaInput
        v-if="editContent"
        ref="dzangolabVueEditInput"
        :class="`resize-${resize} `"
        :model-value="modelValue"
        :placeholder="placeholder"
        name="editable-content"
        @update:model-value="onInput"
      />

      <div v-else class="content">
        <component
          :is="contentElement"
          :class="{ disabled: !allowEdit }"
          @click="allowEdit && (editContent = true)"
        >
          {{ modelValue }}
        </component>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
export default {
  name: "EditableContent",
};
</script>

<script setup lang="ts">
import { Card } from "@prefabs.tech/vue3-ui";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

import TextareaInput from "./TextareaInput.vue";

import type { PropType } from "vue";

const props = defineProps({
  allowEdit: {
    default: true,
    type: Boolean,
  },
  contentElement: {
    default: "p",
    type: String,
  },
  modelValue: {
    required: true,
    type: String as PropType<string | number | undefined>,
  },
  placeholder: {
    default: "",
    type: String,
  },
  resize: {
    default: "none",
    type: String,
  },
  size: {
    default: "small",
    type: String,
    validator: (value: string) =>
      ["small", "medium", "large", "full"].includes(value),
  },
});

const emit = defineEmits(["update:modelValue"]);

const dzangolabVueEditInput = ref();
const editContent = ref<boolean>(false);

onClickOutside(dzangolabVueEditInput, (event) => {
  if (String(props.modelValue).trim()) {
    editContent.value = false;
  }
});

const onInput = (value: string) => {
  emit("update:modelValue", value);
};
</script>

<style lang="css">
@import "../assets/css/editable-content.css";
</style>
