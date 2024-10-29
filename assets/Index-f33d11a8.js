import{d as _,e as u,r as d,o as p,c as g,w as l,a as e,t as s,f as n,g as o,h as c,a8 as m,D as h,I as w,E as b}from"./index-0d27d87c.js";const P={class:"section-content"},$={class:"email"},C={class:"label"},D={class:"value"},S={class:"name"},y={class:"label"},N={class:"value"},k={class:"section-content"},z=e("div",{class:"trigger"},"...",-1),I=_({__name:"Index",setup(B){const t=u([{disabled:!0,label:"Change password",value:"password"},{label:"Profile",value:"profile"}]),r=u(!1),v=a=>{a===t.value[1].value&&(r.value=!0)};return(a,V)=>{const i=d("SshPre"),f=d("Page");return p(),g(f,{title:a.$t("ui.dropdown.title"),class:"demo"},{default:l(()=>[e("section",null,[e("h2",null,s(a.$t("ui.dropdown.usage.basic")),1),n(),e("div",P,[o(i,{language:"html-vue"},{default:l(()=>[n(`
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
        `)]),_:1}),n(),o(c(m),{label:a.$t("ui.dropdown.label.user"),menu:t.value,onSelect:v},null,8,["label","menu"]),n(),r.value?(p(),h(w,{key:0},[e("div",$,[e("span",C,s(a.$t("ui.dropdown.label.email")),1),n(),e("span",D,s(": "+a.$t("ui.dropdown.usage.email")),1)]),n(),e("div",S,[e("span",y,s(a.$t("ui.dropdown.label.name")),1),n(),e("span",N,s(": "+a.$t("ui.dropdown.usage.name")),1)])],64)):b("",!0)])]),n(),e("section",null,[e("h2",null,s(a.$t("ui.dropdown.usage.withSlot")),1),n(),e("div",k,[o(i,{language:"html-vue"},{default:l(()=>[n(`
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
        `)]),_:1}),n(),o(c(m),{menu:t.value},{default:l(()=>[z]),_:1},8,["menu"])])])]),_:1},8,["title"])}}});export{I as default};
