import{d as _,j as u,K as d,o as c,c as g,w as l,L as o,C as e,M as s,f as n,E as p,az as m,a as b,F as w,g as h}from"./index-6962cf42-46e4151e.js";import{_ as $}from"./UiPage.vue_vue_type_style_index_0_lang-083e2ed9.js";const P={class:"section-content"},k={class:"email"},C={class:"label"},S={class:"value"},y={class:"name"},D={class:"label"},z={class:"value"},N={class:"section-content"},B=n("div",{class:"trigger"},"...",-1),M=_({__name:"Index",setup(V){const t=u([{disabled:!0,label:"Change password",value:"password"},{label:"Profile",value:"profile"}]),r=u(!1),v=a=>{a===t.value[1].value&&(r.value=!0)};return(a,E)=>{const f=d("router-link"),i=d("SshPre");return c(),g($,{title:a.$t("ui.dropdown.title"),class:"demo"},{toolbar:l(()=>[o(f,{to:{name:"ui"},class:"back"},{default:l(()=>[e(s(a.$t("common.back")),1)]),_:1})]),default:l(()=>[e(),n("section",null,[n("h2",null,s(a.$t("ui.dropdown.usage.basic")),1),e(),n("div",P,[o(p(m),{label:a.$t("ui.dropdown.label.user"),menu:t.value,onSelect:v},null,8,["label","menu"]),e(),r.value?(c(),b(w,{key:0},[n("div",k,[n("span",C,s(a.$t("ui.dropdown.label.email")),1),e(),n("span",S,s(": "+a.$t("ui.dropdown.usage.email")),1)]),e(),n("div",y,[n("span",D,s(a.$t("ui.dropdown.label.name")),1),e(),n("span",z,s(": "+a.$t("ui.dropdown.usage.name")),1)])],64)):h("",!0),e(),o(i,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,s(a.$t("ui.dropdown.usage.withSlot")),1),e(),n("div",N,[o(p(m),{menu:t.value},{default:l(()=>[B]),_:1},8,["menu"]),e(),o(i,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{M as default};
