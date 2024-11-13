import{d as g,e as d,r,o as c,c as b,w as l,f as o,g as e,t as s,a as n,h as p,a8 as m,D as h,I as w,E as P}from"./index-282387c5.js";const $={class:"section-content"},k={class:"email"},C={class:"label"},D={class:"value"},S={class:"name"},y={class:"label"},N={class:"value"},z={class:"section-content"},B=n("div",{class:"trigger"},"...",-1),F=g({__name:"Index",setup(V){const t=d([{disabled:!0,label:"Change password",value:"password"},{label:"Profile",value:"profile"}]),i=d(!1),v=a=>{a===t.value[1].value&&(i.value=!0)};return(a,E)=>{const f=r("router-link"),u=r("SshPre"),_=r("Page");return c(),b(_,{title:a.$t("ui.dropdown.title"),class:"demo"},{toolbar:l(()=>[o(f,{to:{name:"ui"},class:"back"},{default:l(()=>[e(s(a.$t("common.back")),1)]),_:1})]),default:l(()=>[e(),n("section",null,[n("h2",null,s(a.$t("ui.dropdown.usage.basic")),1),e(),n("div",$,[o(u,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e(),o(p(m),{label:a.$t("ui.dropdown.label.user"),menu:t.value,onSelect:v},null,8,["label","menu"]),e(),i.value?(c(),h(w,{key:0},[n("div",k,[n("span",C,s(a.$t("ui.dropdown.label.email")),1),e(),n("span",D,s(": "+a.$t("ui.dropdown.usage.email")),1)]),e(),n("div",S,[n("span",y,s(a.$t("ui.dropdown.label.name")),1),e(),n("span",N,s(": "+a.$t("ui.dropdown.usage.name")),1)])],64)):P("",!0)])]),e(),n("section",null,[n("h2",null,s(a.$t("ui.dropdown.usage.withSlot")),1),e(),n("div",z,[o(u,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e(),o(p(m),{menu:t.value},{default:l(()=>[B]),_:1},8,["menu"])])])]),_:1},8,["title"])}}});export{F as default};
