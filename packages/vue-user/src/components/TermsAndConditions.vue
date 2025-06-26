<template>
  <div v-if="hasCheckbox" :class="`field ${name}`">
    <div class="input-field-checkbox">
      <Checkbox :name="name" @update:model-value="onChange" />

      <slot>
        <TermsAndServices :route="route" />
      </slot>
    </div>
  </div>
  <p v-else :class="name" :aria-label="name">
    <slot>
      <TermsAndServices :route="route" />
    </slot>
  </p>
</template>

<script lang="ts">
// eslint-disable-next-line vue/one-component-per-file
export default {
  name: "TermsAndConditions",
};
</script>

<script setup lang="ts">
import { Checkbox } from "@dzangolab/vue3-form";

import TermsAndServices from "./TermsAndServices.vue";

defineProps({
  hasCheckbox: {
    default: true,
    type: Boolean,
  },
  name: {
    default: "terms-and-conditions",
    type: String,
  },
  route: {
    default: undefined,
    type: String,
  },
});

const emit = defineEmits(["update:check"]);

const onChange = (value: boolean) => {
  emit("update:check", value);
};
</script>
<style lang="css">
.input-field-checkbox {
  align-items: baseline;
  color: #525252;
  display: flex;
  font-size: 14px;
  gap: 0.5rem;
  line-height: 1.35;
}

.input-field-checkbox input {
  width: fit-content;
}

.signup .terms-and-conditions a {
  color: var(--dz-primary-color, #1c4786);
  text-decoration: underline;
}

.signup .terms-and-conditions input[type="checkbox"],
.signup .terms-and-conditions input[type="checkbox"]:focus-visible {
  box-shadow: none;
  cursor: pointer;
  height: fit-content;
}
</style>
