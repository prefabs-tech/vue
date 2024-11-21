<template>
  <div class="demo">
    <Sidebar :menu="menu" class="demo-aside" no-header />
    <div class="demo-main">
      <Page :title="title" :sub-title="subTitle">
        <template #toolbar>
          <slot name="toolbar"></slot>
        </template>
        <slot></slot>
      </Page>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "UiPage",
};
</script>

<script setup lang="ts">
import { Sidebar } from "@dzangolab/vue3-layout";

import type { PropType } from "vue";

defineProps({
  subTitle: {
    default: undefined,
    required: false,
    type: String as PropType<string>,
  },
  title: {
    default: undefined,
    required: false,
    type: String as PropType<string>,
  },
});

const menu = [
  {
    name: "Get started",
    routeName: "ui",
  },
  {
    name: "Accordion",
    routeName: "accordion",
  },
  {
    name: "Badge",
    routeName: "badge",
  },
  {
    name: "Button",
    routeName: "button",
  },
  {
    name: "Card",
    routeName: "card",
  },
  {
    name: "Confirmation modal",
    routeName: "confirmationModal",
  },
  {
    name: "Dropdown",
    routeName: "dropdown",
  },
  {
    name: "Loading page",
    routeName: "loadingPage",
  },
  {
    name: "Message",
    routeName: "message",
  },
  {
    name: "Popup",
    routeName: "popup",
  },
  {
    name: "Sortable list",
    routeName: "sortableList",
  },
  {
    name: "Stepper",
    routeName: "stepper",
  },
  {
    name: "Tabbed panel",
    routeName: "tabbedPanel",
  },
  {
    name: "Tooltip",
    routeName: "tooltip",
  },
  {
    name: "Typography",
    routeName: "typography",
  },
  {
    name: "Youtube facade",
    routeName: "youtubeFacade",
  },
];
</script>

<style lang="css">
.demo {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.demo > .demo-main {
  flex-basis: 0;
  flex-grow: 999;
}

.demo-aside {
  --_bg-color: #fff;
  --_color: #000;
  --_position: relative;
  --_width: 100%;
}

.demo-aside .link.active,
.demo-aside .link:hover {
  --_hover-bg-color: transparent;
  --_bg-color: transparent;

  text-decoration: underline;
}

.demo-aside .nav-menu-item > .link {
  --_font-weight: 400;
}

.demo-aside .nav-menu > .menu {
  border-bottom: none;
}

@media screen and (min-width: 576px) {
  .demo {
    flex-direction: row;
  }

  .demo-aside {
    --_width: 15rem;

    min-width: var(--_width);
    border-right: 1px solid black;
  }
}
</style>
