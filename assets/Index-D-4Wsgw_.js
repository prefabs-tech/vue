import{d as g,r as d,J as y,e as $,o as m,j as i,C as o,f as e,h as s,t as l,a as D,b as C,u as p,G as f,F as h,v as k}from"./index-qbZHo0y6.js";import{_ as P}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CfEHKesE.js";import{_ as S}from"./UiPage.vue_vue_type_style_index_0_lang-DXWVo1kO.js";import"./PrefabsTechVue3TanstackTable.es-CpAXdbhR.js";import"./PrefabsTechVue3Form.es-Cfb7Ra_o.js";const M={class:"section-content"},B={class:"email"},N={class:"label"},V={class:"value"},E={class:"name"},A={class:"label"},F={class:"value"},O={class:"section-content"},j={class:"section-content"},q=g({__name:"Index",setup(z){const r=d([{disabled:!0,icon:"pi pi-lock",label:"Change password",value:"password"},{icon:"pi pi-user",label:"Profile",value:"profile"}]),u=d(!1),v=[{description:"Emitted when a menu item is selected. Payload is the selected item.",name:"select",payload:"DropdownMenu"}],w=[{default:"-",description:"Optional icon for the trigger element.",prop:"icon",type:"String"},{default:"-",description:"Label text for the dropdown trigger.",prop:"label",type:"String"},{default:"-",description:"Array of menu items for the dropdown.",prop:"menu",type:"Array<DropdownMenu>"}],c=[{description:"Custom trigger content for the dropdown.",name:"default"},{description:"Custom icon slot for each menu item by key.",name:"`icon-${key}`"}],b=t=>{t===r.value[1]&&(u.value=!0)};return(t,n)=>{const a=y("SshPre");return m(),$(S,{"sub-title":t.$t("ui.dropdown.subtitle"),title:t.$t("ui.dropdown.title"),class:"demo"},{toolbar:i(()=>[s(p(k),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=G=>t.$router.push("/ui"))},null,8,["label"])]),default:i(()=>[n[14]||(n[14]=o()),e("section",null,[e("h2",null,l(t.$t("ui.dropdown.usage.basic")),1),n[7]||(n[7]=o()),e("div",M,[s(p(f),{label:t.$t("ui.dropdown.label.user"),menu:r.value,onSelect:b},null,8,["label","menu"]),n[5]||(n[5]=o()),u.value?(m(),D(h,{key:0},[e("div",B,[e("span",N,l(t.$t("ui.dropdown.label.email")),1),n[1]||(n[1]=o()),e("span",V,l(": "+t.$t("ui.dropdown.usage.email")),1)]),n[3]||(n[3]=o()),e("div",E,[e("span",A,l(t.$t("ui.dropdown.label.name")),1),n[2]||(n[2]=o()),e("span",F,l(": "+t.$t("ui.dropdown.usage.name")),1)])],64)):C("",!0),n[6]||(n[6]=o()),s(a,{language:"html-vue"},{default:i(()=>n[4]||(n[4]=[o(`
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
        `)])),_:1})])]),n[15]||(n[15]=o()),e("section",null,[e("h2",null,l(t.$t("ui.dropdown.usage.withSlot")),1),n[11]||(n[11]=o()),e("div",O,[s(p(f),{menu:r.value},{default:i(()=>n[8]||(n[8]=[e("svg",{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("circle",{cx:"12",cy:"12",r:"1.75",fill:"currentColor"}),o(),e("circle",{cx:"19",cy:"12",r:"1.75",fill:"currentColor"}),o(),e("circle",{cx:"5",cy:"12",r:"1.75",fill:"currentColor"})],-1)])),_:1},8,["menu"]),n[10]||(n[10]=o()),s(a,{language:"html-vue"},{default:i(()=>n[9]||(n[9]=[o(`
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
        `)])),_:1})])]),n[16]||(n[16]=o()),s(P,{"events-data":v,"props-data":w,"props-table-title":t.$t("common.properties",{value:"DropdownProperties"}),"slots-data":c},null,8,["props-table-title"]),n[17]||(n[17]=o()),e("section",null,[e("h2",null,l(t.$t("common.type")),1),n[13]||(n[13]=o()),e("div",j,[s(a,{language:"html-vue"},{default:i(()=>n[12]||(n[12]=[o(`
            interface DropdownMenu {
              class?: string;
              disabled?: boolean;
              display?: boolean;
              icon?: string;
              key?: string;
              label?: string;
              value?: string | number;
            }
          `)])),_:1})])])]),_:1},8,["sub-title","title"])}}});export{q as default};
