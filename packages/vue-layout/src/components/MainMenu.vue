<template>
  <ResponsiveMenu
    ref="mainMenu"
    :active-route="activeRoute ?? 'home'"
    :routes="routes"
    @change-route="$emit('close')"
  />
</template>

<script lang="ts">
export default {
  name: "MainMenu",
};
</script>

<script setup lang="ts">
import { ResponsiveMenu } from "@dzangolab/vue3-ui";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import type { PropType } from "vue";

defineEmits<{
  (e: "close"): void;
}>();

const props = defineProps({
  routes: {
    required: true,
    type: Array as PropType<{ name: string; route: string }[]>,
  },
});

const route = useRoute();
const router = useRouter();

const activeRoute = computed(() => {
  let matchedRoute = props.routes?.find(
    (routeData) => routeData.route === route?.name,
  )?.route;

  if (!matchedRoute) {
    const match = route?.path.match(/^\/([^/]+)/);
    if (match) {
      matchedRoute = getRouteNameFromPath(`/${match[1]}`);
    }
  }

  return matchedRoute;
});

const getRouteNameFromPath = (path: string) => {
  const route = router.getRoutes().find((r) => r.path === path);
  return String(route?.name);
};
</script>
