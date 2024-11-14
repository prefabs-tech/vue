<template>
  <div ref="dzangolabVueUIPopup" class="popup-container">
    <div :aria-label="ariaLabel" class="popup-trigger" @click="togglePopup">
      <slot />
    </div>
    <div
      v-if="isVisible && hasContent"
      :class="['popup-content', popupPosition]"
    >
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

const props = defineProps({
  ariaLabel: {
    default: "popup",
    type: String,
  },
  position: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["onClickOutside"]);

const slots = useSlots();

const dzangolabVueUIPopup = ref(null);
const isVisible = ref(false);
const popupPosition = ref<string>();

const hasContent = computed(() => !!slots.content);

onClickOutside(dzangolabVueUIPopup, (event) => {
  isVisible.value = false;
  emit("onClickOutside");
});

const getBestPosition = (): string => {
  const triggerElement = document.querySelector(".popup-trigger");

  if (props.position) {
    return props.position;
  } else if (triggerElement) {
    const triggerRect = triggerElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    const spaceTop = triggerRect.top;
    const spaceBottom = viewportHeight - triggerRect.bottom;
    const spaceLeft = triggerRect.left;
    const spaceRight = viewportWidth - triggerRect.right;

    const maxSpace = Math.max(spaceTop, spaceBottom, spaceLeft, spaceRight);

    if (maxSpace === spaceTop) {
      return "top";
    } else if (maxSpace === spaceBottom) {
      return "bottom";
    } else if (maxSpace === spaceLeft) {
      return "left";
    } else {
      return "right";
    }
  }

  return "bottom";
};

const togglePopup = () => {
  isVisible.value = !isVisible.value;

  popupPosition.value = getBestPosition();
};

defineExpose({
  isVisible,
  togglePopup,
});
</script>
