<template>
  <div
    :data-active-color="activeColor"
    :data-color="backgroundColor"
    class="sidebar"
  >
    <div class="logo">
      <Logo />
    </div>
    <div class="sidebar-wrapper" ref="sidebarScrollArea">
      <slot> </slot>
      <ul class="nav">
        <slot name="links">
          <!-- <sidebar-item
            :key="link.name + index"
            :link="link"
            v-for="(link, index) in sidebarLinks"
            v-if="link.show"
          >
            <sidebar-item
              :key="subLink.name + index"
              :link="subLink"
              v-for="(subLink, index) in link.children"
              v-if="link.show"
            >
            </sidebar-item>
          </sidebar-item> -->
        </slot>
        <slot name="afterNavLinks"></slot>
      </ul>
      <slot name="afterSidebarMenu"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Sidebar",
};
</script>

<script setup lang="ts">
import Logo from "./Logo.vue";

defineProps({
  activeColor: {
    default: null,
    type: String,
  },
  backgroundColor: {
    default: null,
    type: String,
  },
});
</script>

<style lang="css">
.sidebar {
  bottom: 0;
  height: auto;
  left: 0;
  overflow: hidden;
  padding: 1rem;
  position: fixed;
  top: 0;
  transition: 0.2s ease-out;
  width: 16rem;
  z-index: 999;
}
</style>
