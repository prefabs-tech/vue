<template>
  <span :class="tagClassName" :style="style">
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
  name: "Tag",
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

const tagClassName = computed(() => {
  return ["tag", props.className, props.fullWidth, props.rounded && "rounded"]
    .filter(Boolean)
    .join(" ");
});
</script>

<style lang="css" scoped>
.tag {
  align-items: center;
  border-radius: 5px;
  color: #4a4747;
  display: inline-flex;
  font-size: 0.875rem;
  font-weight: normal;
  gap: 0.25rem;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  width: max-content;
}

.tag.rounded {
  border-radius: 25px;
  padding: 0.25rem 0.6rem;
}

.tag.full-width {
  width: 100%;
}
</style>
