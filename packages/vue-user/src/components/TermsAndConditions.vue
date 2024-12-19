<template>
  <div v-if="hasCheckbox" :class="`field ${name}`">
    <div class="input-field-checkbox">
      <input :id="name" :name="name" type="checkbox" />
      <slot>
        <label :for="name">{{ label }}</label>
      </slot>
    </div>
  </div>
  <p v-else :class="name" :aria-label="name">
    <slot>
      {{ label }}
    </slot>
  </p>
</template>

<script lang="ts">
export default {
  name: "TermsAndConditions",
};
</script>

<script setup lang="ts">
defineProps({
  hasCheckbox: {
    default: true,
    type: Boolean,
  },
  label: {
    default: undefined,
    required: false,
    type: String,
  },
  name: {
    default: "terms-and-conditions",
    type: String,
  },
});
</script>
