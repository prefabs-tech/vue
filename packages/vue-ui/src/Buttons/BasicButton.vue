<template>
  <RouterLink :to="{ name: props.to ?? '' }">
    <button
      :disabled="disabled || loading"
      class="loading-button"
      :class="{ loading: loading }"
      @click="$emit('click')"
    >
      <slot name="iconLeft"></slot>
      <slot>
        <div class="label">
          <span>{{ label }}</span>
        </div>
        <LoadingIcon v-if="loading" />
      </slot>
      <slot name="iconRight"></slot>
    </button>
  </RouterLink>
</template>

<script lang="ts">
export default {
  name: "BasicButton",
};
</script>

<script setup lang="ts">
import LoadingIcon from "../components/LoadingIcon.vue";

import type { Saverity } from "../types";
import type { PropType } from "vue";

defineEmits(["click"]);

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  saverity: {
    type: String as PropType<Saverity>,
    default: "primary",
  },
  to: {
    default: "",
    type: String,
  },
});
</script>
