import{d as f,j as p,J as g,o as m,c as _,w as s,K as o,D as r,ao as b,W as e,f as n,L as l,ay as c,a as w,F as h,g as $}from"./index-729398ab-97e0bd19.js";import{_ as P}from"./UiPage.vue_vue_type_style_index_0_lang-e133bb3e.js";const y={class:"section-content"},C={class:"email"},D={class:"label"},S={class:"value"},k={class:"name"},z={class:"label"},N={class:"value"},B={class:"section-content"},V=n("div",{class:"trigger"},"...",-1),J=f({__name:"Index",setup(F){const t=p([{disabled:!0,label:"Change password",value:"password"},{label:"Profile",value:"profile"}]),i=p(!1),v=a=>{a===t.value[1].value&&(i.value=!0)};return(a,u)=>{const d=g("SshPre");return m(),_(P,{title:a.$t("ui.dropdown.title"),class:"demo"},{toolbar:s(()=>[o(r(b),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:u[0]||(u[0]=E=>a.$router.push("/ui"))},null,8,["label"])]),default:s(()=>[e(),n("section",null,[n("h2",null,l(a.$t("ui.dropdown.usage.basic")),1),e(),n("div",y,[o(r(c),{label:a.$t("ui.dropdown.label.user"),menu:t.value,onSelect:v},null,8,["label","menu"]),e(),i.value?(m(),w(h,{key:0},[n("div",C,[n("span",D,l(a.$t("ui.dropdown.label.email")),1),e(),n("span",S,l(": "+a.$t("ui.dropdown.usage.email")),1)]),e(),n("div",k,[n("span",z,l(a.$t("ui.dropdown.label.name")),1),e(),n("span",N,l(": "+a.$t("ui.dropdown.usage.name")),1)])],64)):$("",!0),e(),o(d,{language:"html-vue"},{default:s(()=>[e(`
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

          const menu = ref([
            { disabled: true, label: "Change password", value: "password"  },
            { label: "Profile", value: "profile" },
          ]);

          const showProfile = ref<boolean>(false);

          const onSelect = (value: string | number) => {
            if (value === menu.value[1].value) {
              showProfile.value = true;
            }
          };
          <\/script>
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,l(a.$t("ui.dropdown.usage.withSlot")),1),e(),n("div",B,[o(r(c),{menu:t.value},{default:s(()=>[V]),_:1},8,["menu"]),e(),o(d,{language:"html-vue"},{default:s(()=>[e(`
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

          const menu = ref([
            { disabled: true, label: "Change password", value: "password"  },
            { label: "Profile", value: "profile" },
          ]);
          <\/script>

          <style lang="css">
          .trigger {
            font-size: 1.5rem;
            font-weight: 600;
            letter-spacing: 0.2rem;
          }
          </style>
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{J as default};
