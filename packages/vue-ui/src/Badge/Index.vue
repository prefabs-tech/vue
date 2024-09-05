<template>
  <span :class="badgeClassName" :style="style">
    <template v-if="icon">
      <slot name="icon">
        <i :class="icon" />
      </slot>
    </template>

    <div v-if="label" class="label">
      {{ label }}
    </div>
  </span>
</template>

<script lang="ts">
export default {
  name: "Badge",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  className: {
    default: "",
    type: String,
  },
  color: {
    default: "default",
    type: String,
  },
  fullWidth: Boolean,
  icon: {
    default: null,
    type: [String, Boolean],
  },
  label: {
    default: null,
    type: [String, Boolean],
  },
  rounded: Boolean,
  style: {
    default: () => ({}),
    type: Object,
  },
});

const badgeClassName = computed(() => {
  return ["badge", props.className, props.fullWidth, props.rounded && "rounded"]
    .filter(Boolean)
    .join(" ");
});
</script>

<style lang="css" scoped>
.badge {
  align-items: center;
  background-color: var(--dz-primary-color);
  border-radius: 5px;
  color: white;
  display: inline-flex;
  font-size: 0.875rem;
  font-weight: 700;
  gap: 0.25rem;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  width: max-content;
}

.badge.rounded {
  border-radius: 25px;
  padding: 0.25rem 0.6rem;
}

.badge.full-width {
  width: 100%;
}
</style>
