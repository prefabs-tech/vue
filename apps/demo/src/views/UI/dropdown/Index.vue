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
              { disabled: true, label: "Change password", value: "password"  },
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

    <section>
      <h2>{{ $t("ui.dropdown.usage.withSlot") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Dropdown 
              :menu="menu"
              @select="onSelect"
            &gt;
              &lt;div class="trigger"&gt;...&lt;/div&gt;
            &lt;/Dropdown&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { Dropdown } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const menu = ref([
              { disabled: true, label: "Change password", value: "password"  },
              { label: "Profile", value: "profile" },
            ]);

            const onSelect = (value: string | number) => {
              ...
            };
          &lt;/script&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Dropdown :menu="menu">
          <div class="trigger">...</div>
        </Dropdown>
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.dropdown.usage.customStyle") }}</h2>

      <div class="section-content">
        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Dropdown 
              :label="$t('ui.dropdown.label.user')"
              :menu="menu"
              class="custom-style-dropdown"
            /&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
            import { Dropdown } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const menu = ref([
              { disabled: true, label: "Change password", value: "password"  },
              { label: "Profile", value: "profile" },
            ]);
          &lt;/script&gt;

          &lt;style lang="css"&gt;
            .custom-style-dropdown .dropdown ul {
              --_min-width: 12rem;
            }

            .custom-style-dropdown .dropdown-trigger:hover,
            .custom-style-dropdown .dropdown-trigger.triggered {
              --_bg-color: var(--dz-primary-color);
              
              color: #fff;
            }

            .custom-style-dropdown ul > li.menu-item:hover:not(.disabled) {
              --_bg-color: var(--dz-primary-color);

              color: #fff;
            }
          &lt;style&gt;
        </SshPre>
        <!-- eslint-enable -->

        <Dropdown
          :label="$t('ui.dropdown.label.user')"
          :menu="menu"
          class="custom-style-dropdown"
        />
      </div>
    </section>
  </Page>
</template>

<script setup lang="ts">
import { Dropdown } from "@dzangolab/vue3-ui";
import { ref } from "vue";

const menu = ref([
  { disabled: true, label: "Change password", value: "password" },
  { label: "Profile", value: "profile" },
]);
</script>

<style lang="css">
.trigger {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
}

.custom-style-dropdown .dropdown ul {
  --_min-width: 12rem;
}

.custom-style-dropdown .dropdown-trigger:hover,
.custom-style-dropdown .dropdown-trigger.triggered {
  --_bg-color: var(--dz-primary-color);

  color: #fff;
}

.custom-style-dropdown ul > li.menu-item:hover:not(.disabled) {
  --_bg-color: var(--dz-primary-color);

  color: #fff;
}
</style>
