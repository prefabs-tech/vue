<template>
  <div
    v-if="filteredSlots"
    :class="['accordion', props.direction]"
    :aria-orientation="props.direction"
  >
    <section
      v-for="(slot, index) in filteredSlots"
      :key="index"
      :data-expanded="index === active"
    >
      <header>
        <button
          tabindex="0"
          type="button"
          :aria-expanded="index === active ? true : false"
          @click="handleClick(index)"
        >
          <component
            :is="
              typeof slot?.props?.icon === 'string' ? 'i' : slot?.props?.icon
            "
            :class="
              typeof slot?.props?.icon === 'string' ? slot.props.icon : 'icon'
            "
          />
          <span>{{ slot?.props?.title }}</span>
          <component
            :is="typeof activeIcon === 'string' ? 'i' : activeIcon"
            v-if="active === index"
            :class="typeof activeIcon === 'string' ? activeIcon : 'icon'"
          />
          <component
            :is="typeof inactiveIcon === 'string' ? 'i' : inactiveIcon"
            v-else
            :class="typeof inactiveIcon === 'string' ? inactiveIcon : 'icon'"
          />
        </button>
      </header>
      <Transition name="expand">
        <div v-if="index === active" class="pane" role="region">
          <component :is="slot" />
        </div>
      </Transition>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: "Accordion",
};
</script>

<script lang="ts" setup>
import { ref, useSlots } from "vue";

import type { PropType, VNode } from "vue";

const props = defineProps({
  activeIcon: {
    default: undefined,
    type: [String, Function] as PropType<string | (() => VNode)>,
  },
  canSelfCollapse: {
    default: false,
    required: false,
    type: Boolean,
  },
  defaultIndex: {
    default: 0,
    required: false,
    type: Number,
  },
  direction: {
    default: "vertical",
    required: false,
    type: String as PropType<"vertical" | "horizontal">,
  },
  inactiveIcon: {
    default: undefined,
    type: [String, Function] as PropType<string | (() => VNode)>,
  },
});

const active = ref(props.defaultIndex);

const handleClick = (index: number) => {
  active.value = !props.canSelfCollapse || active.value !== index ? index : -1;
};

const slots = useSlots();

const filteredSlots = slots?.default
  ? slots.default().filter((slot) => {
      return slot?.props?.title;
    })
  : null;
</script>
