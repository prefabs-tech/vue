<template>
  <Page :title="$t('ui.dropdown.title')" class="demo">
    <section>
      <h2>{{ $t("ui.dropdown.usage.basic") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Dropdown 
              label="User"
              :menu="menu"
              @select="onSelect"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Dropdown } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const menu = ref([
            { label: "Change password", value: "password", disabled: true },
            { label: "Profile", value: "profile" },
          ]);

          const onSelect = (value: string | number) => {
            ...
          };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Dropdown :label="$t('ui.dropdown.label.user')" :menu="menu" />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { Dropdown } from "@dzangolab/vue3-ui";
import { ref } from "vue";

const menu = ref([
  { label: "Change password", value: "password", disabled: true },
  { label: "Profile", value: "profile" },
]);
</script>

<style lang="css">
.custom-style-dropdown .dropdown-content {
  --_bg-color: var(--dz-success-color);
  --_border-radius: 0.5rem;
  --_text-color: #fff;
}
</style>
