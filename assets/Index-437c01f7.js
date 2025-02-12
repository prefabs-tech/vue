import{d as _,j as u,J as d,o as c,c as g,w as l,K as o,W as e,L as s,f as n,D as p,ay as m,a as b,F as w,g as h}from"./index-729398ab-7d472bf5.js";import{_ as $}from"./UiPage.vue_vue_type_style_index_0_lang-c48a2e84.js";const P={class:"section-content"},k={class:"email"},y={class:"label"},C={class:"value"},D={class:"name"},S={class:"label"},N={class:"value"},z={class:"section-content"},B=n("div",{class:"trigger"},"...",-1),j=_({__name:"Index",setup(V){const t=u([{disabled:!0,label:"Change password",value:"password"},{label:"Profile",value:"profile"}]),r=u(!1),v=a=>{a===t.value[1].value&&(r.value=!0)};return(a,F)=>{const f=d("router-link"),i=d("SshPre");return c(),g($,{title:a.$t("ui.dropdown.title"),class:"demo"},{toolbar:l(()=>[o(f,{to:{name:"ui"},class:"back"},{default:l(()=>[e(s(a.$t("common.back")),1)]),_:1})]),default:l(()=>[e(),n("section",null,[n("h2",null,s(a.$t("ui.dropdown.usage.basic")),1),e(),n("div",P,[o(p(m),{label:a.$t("ui.dropdown.label.user"),menu:t.value,onSelect:v},null,8,["label","menu"]),e(),r.value?(c(),b(w,{key:0},[n("div",k,[n("span",y,s(a.$t("ui.dropdown.label.email")),1),e(),n("span",C,s(": "+a.$t("ui.dropdown.usage.email")),1)]),e(),n("div",D,[n("span",S,s(a.$t("ui.dropdown.label.name")),1),e(),n("span",N,s(": "+a.$t("ui.dropdown.usage.name")),1)])],64)):h("",!0),e(),o(i,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,s(a.$t("ui.dropdown.usage.withSlot")),1),e(),n("div",z,[o(p(m),{menu:t.value},{default:l(()=>[B]),_:1},8,["menu"]),e(),o(i,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{j as default};
