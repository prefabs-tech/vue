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
.editable-content > .card {
  --_height: var(--editable-content-height, 100%);
  --_width: var(--editable-content-width, 100%);

  height: var(--_height);
  min-height: 4rem;
  min-width: 8rem;
  padding: 0;
  width: var(--_width);
}

.editable-content > .card.small {
  --_width: 8rem;
  --_height: 4rem;
}

.editable-content > .card.medium {
  --_width: 12rem;
  --_height: 6rem;
}

.editable-content > .card.large {
  --_width: 16rem;
  --_height: 8rem;
}

.editable-content > .card.full {
  --_width: 100%;
  --_height: 100%;
}

.editable-content > .card:has(.content) {
  overflow: hidden;
  padding: 0.625rem;
}

.editable-content > .card > .card-body {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
}

.editable-content > .card .field {
  height: 100%;
  margin-bottom: 0;
  width: 100%;
}

.editable-content > .card .resize-both textarea {
  resize: both;
}

.editable-content > .card .resize-horizontal textarea {
  resize: horizontal;
}

.editable-content > .card .resize-none textarea {
  resize: none;
}

.editable-content > .card .resize-vertical textarea {
  resize: vertical;
}

.editable-content > .card .content > .disabled {
  cursor: default;
}

.editable-content > .card .content > * {
  margin: 0;
  padding: 0;
}
</style>
