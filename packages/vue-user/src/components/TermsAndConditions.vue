<template>
  <div class="terms-and-conditions">
    <Checkbox v-if="hasCheckbox" :name="name" @update:model-value="onChange" />
    <slot>
      <TermsAndServices :route="route" />
    </slot>
  </div>
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
@import "../assets/css/terms-and-conditions.css";
</style>
