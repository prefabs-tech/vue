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
import { ResponsiveMenu } from "@prefabs.tech/vue3-ui";
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
    matchedRoute = currentParentRouteName.value;
  }

  return matchedRoute;
});

const currentParentRouteName = computed(() => {
  const matched = route?.matched;

  if (matched?.length > 1) {
    const parentRoute = matched[matched.length - 2];

    return getRouteNameFromPath(parentRoute?.path);
  }

  return "";
});

const getRouteNameFromPath = (path: string) => {
  const route = router.getRoutes().find((r) => r.path === path);
  return String(route?.name);
};
</script>
