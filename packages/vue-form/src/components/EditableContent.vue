<template>
  <div class="editable-content">
    <Card ref="PrefabsTechVueCard" :class="size">
      <TextareaInput
        v-if="editContent"
        ref="PrefabsTechVueEditInput"
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
          @click="onEditContent"
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
import { nextTick, ref } from "vue";

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

const PrefabsTechVueEditInput = ref();
const PrefabsTechVueCard = ref();
const editContent = ref<boolean>(false);

onClickOutside(PrefabsTechVueEditInput, (event) => {
  if (String(props.modelValue).trim()) {
    editContent.value = false;
  }
});

const getTextarea = (): HTMLTextAreaElement | null => {
  return PrefabsTechVueEditInput.value?.$el?.querySelector("textarea") ?? null;
};

const onEditContent = () => {
  if (props.allowEdit) {
    editContent.value = true;

    nextTick(() => {
      const textarea = getTextarea();

      textarea?.focus();
      resizeContent();
    });
  }
};

const onInput = (value: string) => {
  emit("update:modelValue", value);

  resizeContent();
};

const resizeContent = async () => {
  if (props.size !== "full") {
    return;
  }

  await nextTick();

  const textarea = getTextarea();
  const card = PrefabsTechVueCard.value?.$el;

  if (!textarea) {
    return;
  }

  card.style.height = "auto";
  card.style.height = textarea.scrollHeight + "px";
};
</script>

<style lang="css">
@import "../assets/css/editable-content.css";
</style>
