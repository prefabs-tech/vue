<template>
  <div ref="dzangolabVueUIPopup" class="popup-container">
    <div class="popup-trigger" @click="togglePopup">
      <slot />
    </div>
    <div v-if="isVisible && hasContent" class="popup-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Popup",
};
</script>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { computed, ref, useSlots } from "vue";

const emit = defineEmits(["onClickOutside"]);

const slots = useSlots();

const dzangolabVueUIPopup = ref(null);
const isVisible = ref(false);

const hasContent = computed(() => !!slots.default);

onClickOutside(dzangolabVueUIPopup, (event) => {
  isVisible.value = false;
  emit("onClickOutside");
});

const togglePopup = () => (isVisible.value = !isVisible.value);
</script>
