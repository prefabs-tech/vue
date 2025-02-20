import{d as f,r as p,s as b,j as g,o as m,w as l,A as e,e as n,t as s,g as o,a as w,b as h,u as r,S as c,F as _,B as $}from"./index-j9ugvOHR.js";import{_ as P}from"./UiPage.vue_vue_type_style_index_0_lang-BeVgrYUm.js";const C={class:"section-content"},S={class:"email"},k={class:"label"},D={class:"value"},y={class:"name"},z={class:"label"},B={class:"value"},N={class:"section-content"},V=n("div",{class:"trigger"},"...",-1),A=f({__name:"Index",setup(E){const t=p([{disabled:!0,label:"Change password",value:"password"},{label:"Profile",value:"profile"}]),i=p(!1),v=a=>{a===t.value[1].value&&(i.value=!0)};return(a,u)=>{const d=b("SshPre");return m(),g(P,{title:a.$t("ui.dropdown.title"),class:"demo"},{toolbar:l(()=>[o(r($),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:u[0]||(u[0]=F=>a.$router.push("/ui"))},null,8,["label"])]),default:l(()=>[e(),n("section",null,[n("h2",null,s(a.$t("ui.dropdown.usage.basic")),1),e(),n("div",C,[o(r(c),{label:a.$t("ui.dropdown.label.user"),menu:t.value,onSelect:v},null,8,["label","menu"]),e(),i.value?(m(),w(_,{key:0},[n("div",S,[n("span",k,s(a.$t("ui.dropdown.label.email")),1),e(),n("span",D,s(": "+a.$t("ui.dropdown.usage.email")),1)]),e(),n("div",y,[n("span",z,s(a.$t("ui.dropdown.label.name")),1),e(),n("span",B,s(": "+a.$t("ui.dropdown.usage.name")),1)])],64)):h("",!0),e(),o(d,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,s(a.$t("ui.dropdown.usage.withSlot")),1),e(),n("div",N,[o(r(c),{menu:t.value},{default:l(()=>[V]),_:1},8,["menu"]),e(),o(d,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{A as default};
