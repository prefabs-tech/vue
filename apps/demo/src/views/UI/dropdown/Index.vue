<template>
  <UiPage
    :sub-title="$t('ui.dropdown.subtitle')"
    :title="$t('ui.dropdown.title')"
    class="demo"
  >
    <template #toolbar>
      <ButtonElement
        :label="$t('common.back')"
        icon-left="pi pi-chevron-left"
        size="medium"
        variant="textOnly"
        @click="$router.push('/ui')"
      />
    </template>

    <section>
      <h2>{{ $t("ui.dropdown.usage.basic") }}</h2>

      <div class="section-content">
        <Dropdown
          :label="$t('ui.dropdown.label.user')"
          :menu="menu"
          @select="onSelect"
        />

        <template v-if="showProfile">
          <div class="email">
            <span class="label">
              {{ $t("ui.dropdown.label.email") }}
            </span>
            <span class="value">
              {{ ": " + $t("ui.dropdown.usage.email") }}
            </span>
          </div>
          <div class="name">
            <span class="label">
              {{ $t("ui.dropdown.label.name") }}
            </span>
            <span class="value">
              {{ ": " + $t("ui.dropdown.usage.name") }}
            </span>
          </div>
        </template>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Dropdown 
              :menu="menu"
              label="User"
              @select="onSelect"
            /&gt;

            &lt;template v-if="showProfile"&gt;
              &lt;div class="email"&gt;
                &lt;span class="label"&gt;
                  Email
                &lt;/span&gt;
                &lt;span class="value"&gt;
                  : monorepo@prefabs.tech.com
                &lt;/span&gt;
              &lt;/div&gt;
              &lt;div class="name"&gt;
                &lt;span class="label"&gt;
                  Name
                &lt;/span&gt;
                &lt;span class="value"&gt;
                  : Monorepo
                &lt;/span&gt;
              &lt;/div&gt;
            &lt;/template&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Dropdown } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          import type { DropdownMenu } from "@prefabs.tech/vue3-ui";

          const menu = [
            {
              disabled: true,
              icon: "pi pi-lock",
              label: "Change password",
              value: "password",
            },
            { icon: "pi pi-user", label: "Profile", value: "profile" },
          ];

          const showProfile = ref&lt;boolean&gt;(false);

          const onSelect = (item: DropdownMenu) => {
            if (item === menu.value[1]) {
              showProfile.value = true;
            }
          };
          &lt;/script&gt;

          &lt;style lang="css"&gt;
          .dropdown-menu {
            --_width: fit-content;
          }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <section>
      <h2>{{ $t("ui.dropdown.usage.withSlot") }}</h2>

      <div class="section-content">
        <Dropdown :menu="menu">
          <svg
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="1.75" fill="currentColor" />
            <circle cx="19" cy="12" r="1.75" fill="currentColor" />
            <circle cx="5" cy="12" r="1.75" fill="currentColor" />
          </svg>
        </Dropdown>

        <!-- eslint-disable -->
        <SshPre language="html-vue">
          &lt;template&gt;
            &lt;Dropdown 
              :menu="menu"
            &gt;
              &lt;img src="/ellipsis-h.svg" /&gt;
            &lt;/Dropdown&gt;
          &lt;/template&gt;

          &lt;script setup lang="ts"&gt;
          import { Dropdown } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const menu = [
            {
              disabled: true,
              icon: "pi pi-lock",
              label: "Change password",
              value: "password",
            },
            { icon: "pi pi-user", label: "Profile", value: "profile" },
          ];
          &lt;/script&gt;

          &lt;style lang="css"&gt;
          .dropdown-menu {
            --_width: fit-content;
          }
          &lt;/style&gt;
        </SshPre>
        <!-- eslint-enable -->
      </div>
    </section>

    <ComponentDocumentation
      :events-data="eventsData"
      :props-data="propsData"
      :props-table-title="
        $t('common.properties', { value: 'DropdownProperties' })
      "
      :slots-data="slotsData"
    />

    <section>
      <h2>{{ $t("common.type") }}</h2>
      <div class="section-content">
        <!-- eslint-disable -->
          <SshPre language="html-vue">
            interface DropdownMenu {
              class?: string;
              disabled?: boolean;
              display?: boolean;
              icon?: string;
              key?: string;
              label?: string;
              value?: string | number;
            }
          </SshPre>
          <!-- eslint-enable -->
      </div>
    </section>
  </UiPage>
</template>

<script setup lang="ts">
import { ButtonElement, Dropdown } from "@prefabs.tech/vue3-ui";
import { ref } from "vue";

import ComponentDocumentation from "../../../components/ComponentDocumentation.vue";
import UiPage from "../UiPage.vue";

import type { DropdownMenu } from "@prefabs.tech/vue3-ui";

const menu = ref([
  {
    disabled: true,
    icon: "pi pi-lock",
    label: "Change password",
    value: "password",
  },
  { icon: "pi pi-user", label: "Profile", value: "profile" },
]);

const showProfile = ref<boolean>(false);

const eventsData = [
  {
    description:
      "Emitted when a menu item is selected. Payload is the selected item.",
    name: "select",
    payload: "DropdownMenu",
  },
];

const propsData = [
  {
    default: "-",
    description: "Optional icon for the trigger element.",
    prop: "icon",
    type: "String",
  },
  {
    default: "-",
    description: "Label text for the dropdown trigger.",
    prop: "label",
    type: "String",
  },
  {
    default: "-",
    description: "Array of menu items for the dropdown.",
    prop: "menu",
    type: "Array<DropdownMenu>",
  },
];

const slotsData = [
  {
    description: "Custom trigger content for the dropdown.",
    name: "default",
  },
  {
    description: "Custom icon slot for each menu item by key.",
    name: "`icon-${key}`",
  },
];

const onSelect = (item: DropdownMenu) => {
  if (item === menu.value[1]) {
    showProfile.value = true;
  }
};
</script>

<style lang="css">
.demo .section-content .dropdown-menu {
  --_width: fit-content;
}
</style>
