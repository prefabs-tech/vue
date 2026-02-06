import{d as y,M as D,N as $,o as f,e as C,f as i,h as e,t as s,A as t,a as l,u,C as d,c as P,F as k,b as S,r as h}from"./index-DM9wUdee.js";import{_ as M}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CDdMtKGw.js";import{_ as N}from"./UiPage.vue_vue_type_style_index_0_lang-Cx5JgbVi.js";import"./PrefabsTechVue3TanstackTable.es-Cu5UvKBj.js";import"./PrefabsTechVue3Form.es-C9e69xVv.js";const B={class:"section-content"},V={class:"email"},E={class:"label"},A={class:"value"},F={class:"name"},I={class:"label"},L={class:"value"},O={class:"section-content"},T={class:"section-content"},U={class:"section-content"},K=y({__name:"Index",setup(j){const{t:a}=D(),p=[{disabled:!0,icon:"pi pi-lock",label:"Change password",value:"password"},{icon:"pi pi-user",label:"Profile",value:"profile"}],v=[{label:a("ui.dropdown.label.view"),severity:"primary",value:"view"},{label:a("ui.dropdown.label.edit"),severity:"warning",value:"edit"},{label:a("ui.dropdown.label.delete"),severity:"danger",value:"delete"}],m=h(!1),w=[{description:"Emitted when a menu item is selected. Payload is the selected item.",name:"select",payload:"DropdownMenu"}],g=[{default:"-",description:"Optional icon for the trigger element.",prop:"icon",type:"String"},{default:"-",description:"Label text for the dropdown trigger.",prop:"label",type:"String"},{default:"-",description:"Array of menu items for the dropdown.",prop:"menu",type:"Array<DropdownMenu>"}],b=[{description:"Custom trigger content for the dropdown.",name:"default"},{description:"Custom icon slot for each menu item by key.",name:"`icon-${key}`"}],c=o=>{o===p[1]&&(m.value=!0)};return(o,n)=>{const r=$("SshPre");return f(),C(N,{subtitle:o.$t("ui.dropdown.subtitle"),title:o.$t("ui.dropdown.title"),class:"demo"},{default:i(()=>[e("section",null,[e("h2",null,s(o.$t("ui.dropdown.usage.basic")),1),n[6]||(n[6]=t()),e("div",B,[l(u(d),{label:o.$t("ui.dropdown.label.user"),menu:p,onSelect:c},null,8,["label"]),n[4]||(n[4]=t()),m.value?(f(),P(k,{key:0},[e("div",V,[e("span",E,s(o.$t("ui.dropdown.label.email")),1),n[0]||(n[0]=t()),e("span",A,s(": "+o.$t("ui.dropdown.usage.email")),1)]),n[2]||(n[2]=t()),e("div",F,[e("span",I,s(o.$t("ui.dropdown.label.name")),1),n[1]||(n[1]=t()),e("span",L,s(": "+o.$t("ui.dropdown.usage.name")),1)])],64)):S("",!0),n[5]||(n[5]=t()),l(r,{language:"html-vue"},{default:i(()=>[...n[3]||(n[3]=[t(`
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
        `,-1)])]),_:1})])]),n[17]||(n[17]=t()),e("section",null,[e("h2",null,s(o.$t("ui.dropdown.usage.severity")),1),n[10]||(n[10]=t()),e("div",O,[l(u(d),{menu:v},{default:i(()=>[...n[7]||(n[7]=[e("i",{class:"pi pi-cog"},null,-1)])]),_:1}),n[9]||(n[9]=t()),l(r,{language:"html-vue"},{default:i(()=>[...n[8]||(n[8]=[t(`
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
        `,-1)])]),_:1})])]),n[18]||(n[18]=t()),e("section",null,[e("h2",null,s(o.$t("ui.dropdown.usage.withSlot")),1),n[14]||(n[14]=t()),e("div",T,[l(u(d),{menu:p},{default:i(()=>[...n[11]||(n[11]=[e("svg",{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("circle",{cx:"12",cy:"12",r:"1.75",fill:"currentColor"}),t(),e("circle",{cx:"19",cy:"12",r:"1.75",fill:"currentColor"}),t(),e("circle",{cx:"5",cy:"12",r:"1.75",fill:"currentColor"})],-1)])]),_:1}),n[13]||(n[13]=t()),l(r,{language:"html-vue"},{default:i(()=>[...n[12]||(n[12]=[t(`
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
        `,-1)])]),_:1})])]),n[19]||(n[19]=t()),l(M,{"events-data":w,"props-data":g,"props-table-title":o.$t("common.properties",{value:"DropdownProperties"}),"slots-data":b},null,8,["props-table-title"]),n[20]||(n[20]=t()),e("section",null,[e("h2",null,s(o.$t("common.type")),1),n[16]||(n[16]=t()),e("div",U,[l(r,{language:"html-vue"},{default:i(()=>[...n[15]||(n[15]=[t(`
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
          `,-1)])]),_:1})])])]),_:1},8,["subtitle","title"])}}});export{K as default};
