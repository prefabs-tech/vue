import{D as e,E as t,On as n,St as r,_ as i,b as a,k as o,mt as s,o as c,qt as l,tr as u,v as d,vn as f,y as p}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{v as m}from"./PrefabsTechVue3UI.es-EJDYzbRH.js";import{T as h}from"./PrefabsTechVue3Layout.es-DjWCbXPc.js";import{t as g}from"./ComponentDocumentation-CFBF3GmY.js";import{t as _}from"./UiPage-eTNUnuuQ.js";var v={class:`section-content`},y={class:`email`},b={class:`label`},x={class:`value`},S={class:`name`},C={class:`label`},w={class:`value`},T={class:`section-content`},E={class:`section-content`},D={class:`section-content`},O=o({name:`DropdownDemo`,setup(o){let{t:O}=h(),k=[{disabled:!0,icon:`pi pi-lock`,label:`Change password`,value:`password`},{icon:`pi pi-user`,label:`Profile`,value:`profile`}],A=[{label:O(`ui.dropdown.label.view`),severity:`primary`,value:`view`},{label:O(`ui.dropdown.label.edit`),severity:`warning`,value:`edit`},{label:O(`ui.dropdown.label.delete`),severity:`danger`,value:`delete`}],j=f(!1),M=[{description:`Emitted when a menu item is selected. Payload is the selected item.`,name:`select`,payload:`DropdownMenu`}],N=[{default:`-`,description:`Optional icon for the trigger element.`,prop:`icon`,type:`String`},{default:`-`,description:`Label text for the dropdown trigger.`,prop:`label`,type:`String`},{default:`-`,description:`Array of menu items for the dropdown.`,prop:`menu`,type:`Array<DropdownMenu>`}],P=[{description:`Custom trigger content for the dropdown.`,name:`default`},{description:`Custom icon slot for each menu item by key.`,name:"`icon-${key}`"}],F=e=>{e===k[1]&&(j.value=!0)};return(o,f)=>{let h=r(`SshPre`);return s(),d(_,{subtitle:o.$t(`ui.dropdown.subtitle`),title:o.$t(`ui.dropdown.title`),class:`demo`},{default:l(()=>[i(`section`,null,[i(`h2`,null,u(o.$t(`ui.dropdown.usage.basic`)),1),f[6]||=t(),i(`div`,v,[e(n(m),{label:o.$t(`ui.dropdown.label.user`),menu:k,onSelect:F},null,8,[`label`]),f[4]||=t(),j.value?(s(),a(c,{key:0},[i(`div`,y,[i(`span`,b,u(o.$t(`ui.dropdown.label.email`)),1),f[0]||=t(),i(`span`,x,u(`: `+o.$t(`ui.dropdown.usage.email`)),1)]),f[2]||=t(),i(`div`,S,[i(`span`,C,u(o.$t(`ui.dropdown.label.name`)),1),f[1]||=t(),i(`span`,w,u(`: `+o.$t(`ui.dropdown.usage.name`)),1)])],64)):p(``,!0),f[5]||=t(),e(h,{language:`html-vue`},{default:l(()=>[...f[3]||=[t(`
          <template>
            <Dropdown 
              :menu="menu"
              label="User"
              @select="onSelect"
            />

            <template v-if="showProfile">
              <div class="email">
                <span class="label">
                  Email
                </span>
                <span class="value">
                  : monorepo@prefabs.tech.com
                </span>
              </div>
              <div class="name">
                <span class="label">
                  Name
                </span>
                <span class="value">
                  : Monorepo
                </span>
              </div>
            </template>
          </template>

          <script setup lang="ts">
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

          const showProfile = ref<boolean>(false);

          const onSelect = (item: DropdownMenu) => {
            if (item === menu.value[1]) {
              showProfile.value = true;
            }
          };
          <\/script>

          <style lang="css">
          .dropdown-menu {
            --_width: fit-content;
          }
          </style>
        `,-1)]]),_:1})])]),f[17]||=t(),i(`section`,null,[i(`h2`,null,u(o.$t(`ui.dropdown.usage.severity`)),1),f[10]||=t(),i(`div`,T,[e(n(m),{menu:A},{default:l(()=>[...f[7]||=[i(`i`,{class:`pi pi-cog`},null,-1)]]),_:1}),f[9]||=t(),e(h,{language:`html-vue`},{default:l(()=>[...f[8]||=[t(`
          <template>
            <Dropdown :menu="menu">
              <i class="pi pi-cog" />
            </Dropdown>

          </template>

          <script setup lang="ts">
          import { Dropdown } from "@prefabs.tech/vue3-ui";

          const menu = [
            {
              label: "View",
              severity: "primary",
              value: "view",
            },
            {
              label: "Edit",
              severity: "warning",
              value: "edit",
            },
            {
              label: "Delete",
              severity: "danger",
              value: "delete",
            },
          ];
          <\/script>
        `,-1)]]),_:1})])]),f[18]||=t(),i(`section`,null,[i(`h2`,null,u(o.$t(`ui.dropdown.usage.withSlot`)),1),f[14]||=t(),i(`div`,E,[e(n(m),{menu:k},{default:l(()=>[...f[11]||=[i(`svg`,{height:`24`,width:`24`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`},[i(`circle`,{cx:`12`,cy:`12`,r:`1.75`,fill:`currentColor`}),t(),i(`circle`,{cx:`19`,cy:`12`,r:`1.75`,fill:`currentColor`}),t(),i(`circle`,{cx:`5`,cy:`12`,r:`1.75`,fill:`currentColor`})],-1)]]),_:1}),f[13]||=t(),e(h,{language:`html-vue`},{default:l(()=>[...f[12]||=[t(`
          <template>
            <Dropdown 
              :menu="menu"
            >
              <img src="/ellipsis-h.svg" />
            </Dropdown>
          </template>

          <script setup lang="ts">
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
          <\/script>

          <style lang="css">
          .dropdown-menu {
            --_width: fit-content;
          }
          </style>
        `,-1)]]),_:1})])]),f[19]||=t(),e(g,{"events-data":M,"props-data":N,"props-table-title":o.$t(`common.properties`,{value:`DropdownProperties`}),"slots-data":P},null,8,[`props-table-title`]),f[20]||=t(),i(`section`,null,[i(`h2`,null,u(o.$t(`common.type`)),1),f[16]||=t(),i(`div`,D,[e(h,{language:`html-vue`},{default:l(()=>[...f[15]||=[t(`
            interface DropdownMenu {
              class?: string;
              disabled?: boolean;
              display?: boolean;
              icon?: string;
              key?: string;
              label?: string;
              severity?: 'alternate' | 'danger' | 'primary' | 'secondary' | 'success' | 'warning';
              value?: string | number;
            }
          `,-1)]]),_:1})])])]),_:1},8,[`subtitle`,`title`])}}});export{O as default};