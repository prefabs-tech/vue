<template>
  <div
    ref="dzangolabVueUITooltip"
    :aria-label="ariaLabel"
    class="tooltip-container"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    @click="toggleTooltip"
  >
    <div
      ref="dzangolabVueUITooltipTrigger"
      :class="[{ clickable: clickable }, 'tooltip-trigger']"
    >
      <slot />
    </div>
    <div
      v-if="isVisible"
      ref="dzangolabVueUITooltipContent"
      :class="['tooltip-content', tooltipPosition]"
      :style="tooltipStyles"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TooltipComponent",
};
</script>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  useSlots,
} from "vue";

import { getBestPosition, getScrollableParents } from "../utils";

const props = defineProps({
  ariaLabel: {
    default: "tooltip",
    type: String,
  },
  clickable: {
    default: false,
    type: Boolean,
  },
  delay: {
    default: 100,
    type: Number,
  },
  offset: {
    default: 10,
    type: Number,
  },
  position: {
    default: undefined,
    type: String,
    validator(value: string) {
      return ["bottom", "left", "right", "top"].includes(value);
    },
  },
});

const dzangolabVueUITooltip = ref<HTMLElement | null>(null);
const dzangolabVueUITooltipContent = ref<HTMLElement | null>(null);
const dzangolabVueUITooltipTrigger = ref<HTMLElement | null>(null);
const isVisible = ref<boolean>(false);
const tooltipPosition = ref<string>();
const tooltipStyles = ref({ left: "0", top: "0" });
const scrollListeners = ref<{ element: Element; listener: () => void }[]>([]);
const isTriggerClicked = ref<boolean>(false);
const timerId = ref<null | ReturnType<typeof setTimeout>>(null);

const slots = useSlots();
const { height: windowHeight, width: windowWidth } = useWindowSize();

const hasContentSlot = computed(() => !!slots.content);

onBeforeUnmount(() => {
  window.removeEventListener("resize", hideTooltip);
  for (const { element, listener } of scrollListeners.value) {
    element.removeEventListener("scroll", listener);
  }
  scrollListeners.value = [];
});

const showTooltip = () => {
  if (hasContentSlot.value) {
    if (timerId.value) {
      clearTimeout(timerId.value);
    }

    timerId.value = setTimeout(() => {
      isVisible.value = true;

      nextTick(() => updatePosition());
    }, props.delay);
  }
};

const toggleTooltip = () => {
  if (hasContentSlot.value && props.clickable) {
    isTriggerClicked.value = !isTriggerClicked.value;
  }

  if (isTriggerClicked.value) {
    nextTick(() => {
      updatePosition();
    });
  }
};

const hideTooltip = () => {
  if (timerId.value) {
    clearTimeout(timerId.value);
  }

  if (!isTriggerClicked.value) {
    isVisible.value = false;
  }
};

const updatePosition = () => {
  if (
    !dzangolabVueUITooltipTrigger.value ||
    !dzangolabVueUITooltipContent.value
  ) {
    return;
  }

  const triggerRect =
    dzangolabVueUITooltipTrigger.value.getBoundingClientRect();
  const contentRect =
    dzangolabVueUITooltipContent.value.getBoundingClientRect();

  let top = 0;
  let left = 0;
  const position = props.position || getBestPosition(triggerRect);

  const fitsAbove = triggerRect.top - contentRect.height - props.offset >= 0;
  const fitsBelow =
    windowHeight.value -
      (triggerRect.bottom + contentRect.height + props.offset) >=
    0;

  const horizontalCenter =
    triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
  const verticalCenter =
    triggerRect.top + triggerRect.height / 2 - contentRect.height / 2;

  switch (position) {
    case "bottom": {
      top = fitsBelow
        ? triggerRect.bottom + props.offset
        : triggerRect.top - contentRect.height - props.offset;
      left = horizontalCenter;
      break;
    }

    case "left": {
      left = triggerRect.left - contentRect.width - props.offset;
      top = verticalCenter;
      break;
    }

    case "right": {
      left = triggerRect.left + triggerRect.width + props.offset;
      top = verticalCenter;
      break;
    }

    case "top": {
      top = fitsAbove
        ? triggerRect.top - contentRect.height - props.offset
        : triggerRect.bottom + props.offset;
      left = horizontalCenter;
      break;
    }
  }

  const spaceBelow = windowHeight.value - (top + contentRect.height);
  const spaceAbove = top;

  isVisible.value = spaceAbove > 0 && spaceBelow > 0;

  if (position === "right" || position === "left") {
    left = Math.max(0, left);
  } else {
    if (left + contentRect.width > windowWidth.value) {
      left = windowWidth.value - contentRect.width;
    }
    left = Math.max(0, left);

    const maxTop = windowHeight.value - contentRect.height;
    top = Math.min(Math.max(top, 0), maxTop);
  }

  tooltipStyles.value = {
    left: `${left}px`,
    top: `${top}px`,
  };
  tooltipPosition.value = position;
};

onMounted(() => {
  window.addEventListener("resize", hideTooltip);
  if (dzangolabVueUITooltip.value) {
    const parents = getScrollableParents(dzangolabVueUITooltip.value);
    for (const parent of parents) {
      const listener = () => {
        isTriggerClicked.value = false;

        hideTooltip();
      };
      parent.addEventListener("scroll", listener);
      scrollListeners.value.push({ element: parent, listener });
    }
  }
});
</script>
