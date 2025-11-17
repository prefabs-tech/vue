import{d as y,G as D,r as $,H as C,e as k,o as v,j as s,B as t,f as e,h as l,t as i,a as P,b as S,u as a,D as d,F as M,v as h}from"./index-CVH4OLxf.js";import{_ as B}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-C_Qa-nj1.js";import{_ as N}from"./UiPage.vue_vue_type_style_index_0_lang-DZzGP3QU.js";import"./PrefabsTechVue3TanstackTable.es-CcclW_bq.js";import"./PrefabsTechVue3Form.es-kbbaSG9O.js";const V={class:"section-content"},E={class:"email"},A={class:"label"},F={class:"value"},I={class:"name"},O={class:"label"},j={class:"value"},z={class:"section-content"},G={class:"section-content"},H={class:"section-content"},R=y({__name:"Index",setup(L){const{t:p}=D(),u=[{disabled:!0,icon:"pi pi-lock",label:"Change password",value:"password"},{icon:"pi pi-user",label:"Profile",value:"profile"}],f=[{label:p("ui.dropdown.label.view"),severity:"primary",value:"view"},{label:p("ui.dropdown.label.edit"),severity:"warning",value:"edit"},{label:p("ui.dropdown.label.delete"),severity:"danger",value:"delete"}],m=$(!1),w=[{description:"Emitted when a menu item is selected. Payload is the selected item.",name:"select",payload:"DropdownMenu"}],b=[{default:"-",description:"Optional icon for the trigger element.",prop:"icon",type:"String"},{default:"-",description:"Label text for the dropdown trigger.",prop:"label",type:"String"},{default:"-",description:"Array of menu items for the dropdown.",prop:"menu",type:"Array<DropdownMenu>"}],g=[{description:"Custom trigger content for the dropdown.",name:"default"},{description:"Custom icon slot for each menu item by key.",name:"`icon-${key}`"}],c=o=>{o===u[1]&&(m.value=!0)};return(o,n)=>{const r=C("SshPre");return v(),k(N,{"sub-title":o.$t("ui.dropdown.subtitle"),title:o.$t("ui.dropdown.title"),class:"demo"},{toolbar:s(()=>[l(a(h),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=T=>o.$router.push("/ui"))},null,8,["label"])]),default:s(()=>[n[18]||(n[18]=t()),e("section",null,[e("h2",null,i(o.$t("ui.dropdown.usage.basic")),1),n[7]||(n[7]=t()),e("div",V,[l(a(d),{label:o.$t("ui.dropdown.label.user"),menu:u,onSelect:c},null,8,["label"]),n[5]||(n[5]=t()),m.value?(v(),P(M,{key:0},[e("div",E,[e("span",A,i(o.$t("ui.dropdown.label.email")),1),n[1]||(n[1]=t()),e("span",F,i(": "+o.$t("ui.dropdown.usage.email")),1)]),n[3]||(n[3]=t()),e("div",I,[e("span",O,i(o.$t("ui.dropdown.label.name")),1),n[2]||(n[2]=t()),e("span",j,i(": "+o.$t("ui.dropdown.usage.name")),1)])],64)):S("",!0),n[6]||(n[6]=t()),l(r,{language:"html-vue"},{default:s(()=>n[4]||(n[4]=[t(`
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
        `)])),_:1})])]),n[19]||(n[19]=t()),e("section",null,[e("h2",null,i(o.$t("ui.dropdown.usage.severity")),1),n[11]||(n[11]=t()),e("div",z,[l(a(d),{menu:f},{default:s(()=>n[8]||(n[8]=[e("i",{class:"pi pi-cog"},null,-1)])),_:1}),n[10]||(n[10]=t()),l(r,{language:"html-vue"},{default:s(()=>n[9]||(n[9]=[t(`
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
        `)])),_:1})])]),n[20]||(n[20]=t()),e("section",null,[e("h2",null,i(o.$t("ui.dropdown.usage.withSlot")),1),n[15]||(n[15]=t()),e("div",G,[l(a(d),{menu:u},{default:s(()=>n[12]||(n[12]=[e("svg",{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("circle",{cx:"12",cy:"12",r:"1.75",fill:"currentColor"}),t(),e("circle",{cx:"19",cy:"12",r:"1.75",fill:"currentColor"}),t(),e("circle",{cx:"5",cy:"12",r:"1.75",fill:"currentColor"})],-1)])),_:1}),n[14]||(n[14]=t()),l(r,{language:"html-vue"},{default:s(()=>n[13]||(n[13]=[t(`
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
        `)])),_:1})])]),n[21]||(n[21]=t()),l(B,{"events-data":w,"props-data":b,"props-table-title":o.$t("common.properties",{value:"DropdownProperties"}),"slots-data":g},null,8,["props-table-title"]),n[22]||(n[22]=t()),e("section",null,[e("h2",null,i(o.$t("common.type")),1),n[17]||(n[17]=t()),e("div",H,[l(r,{language:"html-vue"},{default:s(()=>n[16]||(n[16]=[t(`
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
          `)])),_:1})])])]),_:1},8,["sub-title","title"])}}});export{R as default};
