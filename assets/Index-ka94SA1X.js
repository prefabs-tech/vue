import{d as w,r as d,K as c,f as b,o as m,i as t,D as l,g as e,t as s,h as a,a as g,b as $,u as r,H as f,F as y,v as C}from"./index-DEqLF64v.js";import{_ as k}from"./UiPage.vue_vue_type_style_index_0_lang-B2Z4Qspo.js";const D={class:"section-content"},P={class:"email"},S={class:"label"},h={class:"value"},z={class:"name"},B={class:"label"},N={class:"value"},V={class:"section-content"},x=w({__name:"Index",setup(M){const i=d([{disabled:!0,icon:"pi pi-lock",label:"Change password",value:"password"},{icon:"pi pi-user",label:"Profile",value:"profile"}]),u=d(!1),v=o=>{o===i.value[1]&&(u.value=!0)};return(o,n)=>{const p=c("SshPre");return m(),b(k,{title:o.$t("ui.dropdown.title"),class:"demo"},{toolbar:t(()=>[a(r(C),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=E=>o.$router.push("/ui"))},null,8,["label"])]),default:t(()=>[n[12]||(n[12]=l()),e("section",null,[e("h2",null,s(o.$t("ui.dropdown.usage.basic")),1),n[7]||(n[7]=l()),e("div",D,[a(r(f),{label:o.$t("ui.dropdown.label.user"),menu:i.value,onSelect:v},null,8,["label","menu"]),n[5]||(n[5]=l()),u.value?(m(),g(y,{key:0},[e("div",P,[e("span",S,s(o.$t("ui.dropdown.label.email")),1),n[1]||(n[1]=l()),e("span",h,s(": "+o.$t("ui.dropdown.usage.email")),1)]),n[3]||(n[3]=l()),e("div",z,[e("span",B,s(o.$t("ui.dropdown.label.name")),1),n[2]||(n[2]=l()),e("span",N,s(": "+o.$t("ui.dropdown.usage.name")),1)])],64)):$("",!0),n[6]||(n[6]=l()),a(p,{language:"html-vue"},{default:t(()=>n[4]||(n[4]=[l(`
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
        `)])),_:1})])]),n[13]||(n[13]=l()),e("section",null,[e("h2",null,s(o.$t("ui.dropdown.usage.withSlot")),1),n[11]||(n[11]=l()),e("div",V,[a(r(f),{menu:i.value},{default:t(()=>n[8]||(n[8]=[e("svg",{height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[e("circle",{cx:"12",cy:"12",r:"1.75",fill:"currentColor"}),l(),e("circle",{cx:"19",cy:"12",r:"1.75",fill:"currentColor"}),l(),e("circle",{cx:"5",cy:"12",r:"1.75",fill:"currentColor"})],-1)])),_:1},8,["menu"]),n[10]||(n[10]=l()),a(p,{language:"html-vue"},{default:t(()=>n[9]||(n[9]=[l(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{x as default};
