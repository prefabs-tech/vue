import{d as b,r as d,z as w,e as g,o as m,w as a,E as l,f as e,t as s,i as t,a as c,b as $,u as r,_ as f,F as k,j as P}from"./index-VvkgXLKV.js";import{_ as C}from"./UiPage.vue_vue_type_style_index_0_lang-5lnnBOr1.js";const D={class:"section-content"},z={class:"email"},S={class:"label"},y={class:"value"},N={class:"name"},B={class:"label"},V={class:"value"},E={class:"section-content"},O=b({__name:"Index",setup(M){const i=d([{disabled:!0,icon:"pi pi-lock",label:"Change password",value:"password"},{icon:"pi pi-user",label:"Profile",value:"profile"}]),u=d(!1),v=o=>{o===i.value[1]&&(u.value=!0)};return(o,n)=>{const p=w("SshPre");return m(),g(C,{title:o.$t("ui.dropdown.title"),class:"demo"},{toolbar:a(()=>[t(r(P),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=F=>o.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[n[12]||(n[12]=l()),e("section",null,[e("h2",null,s(o.$t("ui.dropdown.usage.basic")),1),n[7]||(n[7]=l()),e("div",D,[t(r(f),{label:o.$t("ui.dropdown.label.user"),menu:i.value,onSelect:v},null,8,["label","menu"]),n[5]||(n[5]=l()),u.value?(m(),c(k,{key:0},[e("div",z,[e("span",S,s(o.$t("ui.dropdown.label.email")),1),n[1]||(n[1]=l()),e("span",y,s(": "+o.$t("ui.dropdown.usage.email")),1)]),n[3]||(n[3]=l()),e("div",N,[e("span",B,s(o.$t("ui.dropdown.label.name")),1),n[2]||(n[2]=l()),e("span",V,s(": "+o.$t("ui.dropdown.usage.name")),1)])],64)):$("",!0),n[6]||(n[6]=l()),t(p,{language:"html-vue"},{default:a(()=>n[4]||(n[4]=[l(`
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
        `)])),_:1})])]),n[13]||(n[13]=l()),e("section",null,[e("h2",null,s(o.$t("ui.dropdown.usage.withSlot")),1),n[11]||(n[11]=l()),e("div",E,[t(r(f),{menu:i.value},{default:a(()=>n[8]||(n[8]=[e("div",{class:"trigger"},"...",-1)])),_:1},8,["menu"]),n[10]||(n[10]=l()),t(p,{language:"html-vue"},{default:a(()=>n[9]||(n[9]=[l(`
          <template>
            <Dropdown 
              :menu="menu"
            >
              <div class="trigger">...</div>
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
          .trigger {
            font-size: 1.5rem;
            font-weight: 600;
            letter-spacing: 0.2rem;
          }
          </style>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{O as default};
