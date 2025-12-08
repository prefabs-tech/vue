<template>
  <Accordion :active-icon="activeIcon" :inactive-icon="inactiveIcon">
    <div title="Sagittis a curabitur">
      <p>
        A viverra adipiscing consequat vel non potenti ac vel consectetur
        tristique a integer suspendisse condimentum. Id donec cum aliquet a orci
        nec arcu ullamcorper fusce sodales pulvinar id tristique risus curae
        suscipit suspendisse ornare eu facilisis.
      </p>
      <p>
        Adipiscing quis adipiscing interdum orci interdum eu tincidunt dictum
        erat amet a ullamcorper montes vestibulum consequat tempus feugiat
        inceptos suspendisse dis class a at hac ullamcorper.
      </p>
    </div>

    <div title="Diam mus id per posuere vivamus">
      <p>
        Libero ultrices vestibulum adipiscing enim venenatis lobortis ipsum a
        nam scelerisque condimentum sociis ligula parturient posuere enim a.
        Consectetur a parturient torquent natoque quisque dui eu erat adipiscing
        gravida a augue ullamcorper parturient vivamus adipiscing adipiscing.
        Augue ullamcorper sociis magnis scelerisque nec ultrices vestibulum
        congue enim semper ut nam torquent curabitur vestibulum sociosqu porta
        imperdiet in parturient magnis commodo sed gravida cubilia.
      </p>
      <p>
        Purus cras a a mollis faucibus nam consequat fusce dictum praesent
        habitasse a himenaeos curabitur malesuada cras at ultricies. A
        adipiscing viverra montes ad eros ligula mattis eu aliquam enim cubilia
        adipiscing eu hac nisi feugiat scelerisque elementum cum parturient
        maecenas a cum. Nisl a leo litora amet elementum nam leo adipiscing erat
        a mollis proin adipiscing adipiscing eros pretium tristique.
      </p>
    </div>

    <div title="Diam a parturient sociosque">
      <p>
        Potenti lacus suscipit in ac adipiscing consectetur suspendisse dui
        aliquam egestas scelerisque porttitor nullam ad a elementum dignissim
        pulvinar.
      </p>
      <ul role="list">
        <li>Vestibulum parturient</li>
        <li>Ullamcorper orci condimentum</li>
        <li>Sodales scelerisque ultrices</li>
      </ul>
    </div>

    <div title="component">
      <TestComponent />
    </div>

    <slot name="extra-pane"></slot>
  </Accordion>
</template>

<script lang="ts">
export default {
  name: "DemoAccordion",
};
</script>

<script setup lang="ts">
import { Accordion } from "@prefabs.tech/vue3-ui";

import TestComponent from "./TestComponent.vue";

import type { PropType, VNode } from "vue";

defineProps({
  activeIcon: {
    default: undefined,
    type: [String, Function] as PropType<string | (() => VNode)>,
  },
  inactiveIcon: {
    default: undefined,
    type: [String, Function] as PropType<string | (() => VNode)>,
  },
});
</script>
