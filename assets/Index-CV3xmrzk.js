import{d as c,r as d,I as y,e as $,o as m,i,E as o,f as e,g as l,t as s,a as D,b as C,u as p,Y as f,F as k,x as P}from"./index-Bdud0j5e.js";import{_ as S}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-DFZjOTSZ.js";import{_ as h}from"./UiPage.vue_vue_type_style_index_0_lang-DQaJfO8B.js";import"./DzangolabVue3TanstackTable.es-BrkXXNJU.js";import"./DzangolabVue3Form.es-BTkCogpx.js";const M={class:"section-content"},z={class:"email"},B={class:"label"},N={class:"value"},E={class:"name"},V={class:"label"},A={class:"value"},F={class:"section-content"},I={class:"section-content"},x=c({__name:"Index",setup(O){const a=d([{disabled:!0,icon:"pi pi-lock",label:"Change password",value:"password"},{icon:"pi pi-user",label:"Profile",value:"profile"}]),u=d(!1),v=[{description:"Emitted when a menu item is selected. Payload is the selected item.",name:"select",payload:"DropdownMenu"}],w=[{default:"-",description:"Optional icon for the trigger element.",prop:"icon",type:"String"},{default:"-",description:"Label text for the dropdown trigger.",prop:"label",type:"String"},{default:"-",description:"Array of menu items for the dropdown.",prop:"menu",type:"Array<DropdownMenu>"}],b=[{description:"Custom trigger content for the dropdown.",name:"default"},{description:"Custom icon slot for each menu item by key.",name:"`icon-${key}`"}],g=t=>{t===a.value[1]&&(u.value=!0)};return(t,n)=>{const r=y("SshPre");return m(),$(h,{"sub-title":t.$t("ui.dropdown.subtitle"),title:t.$t("ui.dropdown.title"),class:"demo"},{toolbar:i(()=>[l(p(P),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=Y=>t.$router.push("/ui"))},null,8,["label"])]),default:i(()=>[n[14]||(n[14]=o()),e("section",null,[e("h2",null,s(t.$t("ui.dropdown.usage.basic")),1),n[7]||(n[7]=o()),e("div",M,[l(p(f),{label:t.$t("ui.dropdown.label.user"),menu:a.value,onSelect:g},null,8,["label","menu"]),n[5]||(n[5]=o()),u.value?(m(),D(k,{key:0},[e("div",z,[e("span",B,s(t.$t("ui.dropdown.label.email")),1),n[1]||(n[1]=o()),e("span",N,s(": "+t.$t("ui.dropdown.usage.email")),1)]),n[3]||(n[3]=o()),e("div",E,[e("span",V,s(t.$t("ui.dropdown.label.name")),1),n[2]||(n[2]=o()),e("span",A,s(": "+t.$t("ui.dropdown.usage.name")),1)])],64)):C("",!0),n[6]||(n[6]=o()),l(r,{language:"html-vue"},{default:i(()=>n[4]||(n[4]=[o(`
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
                  : monorepo@dzangolab.com
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
          import { Dropdown } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          import type { DropdownMenu } from "@dzangolab/vue3-ui";

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
        `)])),_:1})])]),n[15]||(n[15]=o()),e("section",null,[e("h2",null,s(t.$t("ui.dropdown.usage.withSlot")),1),n[11]||(n[11]=o()),e("div",F,[l(p(f),{menu:a.value},{default:i(()=>n[8]||(n[8]=[e("svg",{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("circle",{cx:"12",cy:"12",r:"1.75",fill:"currentColor"}),o(),e("circle",{cx:"19",cy:"12",r:"1.75",fill:"currentColor"}),o(),e("circle",{cx:"5",cy:"12",r:"1.75",fill:"currentColor"})],-1)])),_:1},8,["menu"]),n[10]||(n[10]=o()),l(r,{language:"html-vue"},{default:i(()=>n[9]||(n[9]=[o(`
          <template>
            <Dropdown 
              :menu="menu"
            >
              <img src="/ellipsis-h.svg" />
            </Dropdown>
          </template>

          <script setup lang="ts">
          import { Dropdown } from "@dzangolab/vue3-ui";
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
        `)])),_:1})])]),n[16]||(n[16]=o()),l(S,{"events-data":v,"props-data":w,"props-table-title":t.$t("common.properties",{value:"DropdownProperties"}),"slots-data":b},null,8,["props-table-title"]),n[17]||(n[17]=o()),e("section",null,[e("h2",null,s(t.$t("common.type")),1),n[13]||(n[13]=o()),e("div",I,[l(r,{language:"html-vue"},{default:i(()=>n[12]||(n[12]=[o(`
            interface DropdownMenu {
              class?: string;
              disabled?: boolean;
              display?: boolean;
              icon?: string;
              key?: string;
              label?: string;
              value?: string | number;
            }
          `)])),_:1})])])]),_:1},8,["sub-title","title"])}}});export{x as default};
