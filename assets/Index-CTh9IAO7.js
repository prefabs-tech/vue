import{d as f,r as p,s as b,j as g,o as m,w as l,C as e,e as n,t as s,g as o,a as w,b as h,u as r,V as c,F as _,D as $}from"./index-CVjUtB44.js";import{_ as C}from"./UiPage.vue_vue_type_style_index_0_lang-Sn8JrzpY.js";const P={class:"section-content"},D={class:"email"},S={class:"label"},k={class:"value"},y={class:"name"},z={class:"label"},N={class:"value"},V={class:"section-content"},B=n("div",{class:"trigger"},"...",-1),I=f({__name:"Index",setup(E){const t=p([{disabled:!0,label:"Change password",value:"password"},{label:"Profile",value:"profile"}]),i=p(!1),v=a=>{a===t.value[1].value&&(i.value=!0)};return(a,u)=>{const d=b("SshPre");return m(),g(C,{title:a.$t("ui.dropdown.title"),class:"demo"},{toolbar:l(()=>[o(r($),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:u[0]||(u[0]=F=>a.$router.push("/ui"))},null,8,["label"])]),default:l(()=>[e(),n("section",null,[n("h2",null,s(a.$t("ui.dropdown.usage.basic")),1),e(),n("div",P,[o(r(c),{label:a.$t("ui.dropdown.label.user"),menu:t.value,onSelect:v},null,8,["label","menu"]),e(),i.value?(m(),w(_,{key:0},[n("div",D,[n("span",S,s(a.$t("ui.dropdown.label.email")),1),e(),n("span",k,s(": "+a.$t("ui.dropdown.usage.email")),1)]),e(),n("div",y,[n("span",z,s(a.$t("ui.dropdown.label.name")),1),e(),n("span",N,s(": "+a.$t("ui.dropdown.usage.name")),1)])],64)):h("",!0),e(),o(d,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e()])]),e(),n("section",null,[n("h2",null,s(a.$t("ui.dropdown.usage.withSlot")),1),e(),n("div",V,[o(r(c),{menu:t.value},{default:l(()=>[B]),_:1},8,["menu"]),e(),o(d,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{I as default};
