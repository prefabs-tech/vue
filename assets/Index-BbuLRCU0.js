import{d as b,r as p,y as g,l as w,o as m,p as a,C as s,e,t as o,g as t,a as $,b as C,u as i,U as v,F as P,D}from"./index-BtmL1dl6.js";import{_ as S}from"./UiPage.vue_vue_type_style_index_0_lang-C9BlYuJN.js";const c={class:"section-content"},k={class:"email"},y={class:"label"},z={class:"value"},N={class:"name"},B={class:"label"},V={class:"value"},E={class:"section-content"},O=b({__name:"Index",setup(F){const r=p([{disabled:!0,label:"Change password",value:"password"},{label:"Profile",value:"profile"}]),u=p(!1),f=l=>{l===r.value[1].value&&(u.value=!0)};return(l,n)=>{const d=g("SshPre");return m(),w(S,{title:l.$t("ui.dropdown.title"),class:"demo"},{toolbar:a(()=>[t(i(D),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=U=>l.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[n[12]||(n[12]=s()),e("section",null,[e("h2",null,o(l.$t("ui.dropdown.usage.basic")),1),n[7]||(n[7]=s()),e("div",c,[t(i(v),{label:l.$t("ui.dropdown.label.user"),menu:r.value,onSelect:f},null,8,["label","menu"]),n[5]||(n[5]=s()),u.value?(m(),$(P,{key:0},[e("div",k,[e("span",y,o(l.$t("ui.dropdown.label.email")),1),n[1]||(n[1]=s()),e("span",z,o(": "+l.$t("ui.dropdown.usage.email")),1)]),n[3]||(n[3]=s()),e("div",N,[e("span",B,o(l.$t("ui.dropdown.label.name")),1),n[2]||(n[2]=s()),e("span",V,o(": "+l.$t("ui.dropdown.usage.name")),1)])],64)):C("",!0),n[6]||(n[6]=s()),t(d,{language:"html-vue"},{default:a(()=>n[4]||(n[4]=[s(`
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
        `)])),_:1})])]),n[13]||(n[13]=s()),e("section",null,[e("h2",null,o(l.$t("ui.dropdown.usage.withSlot")),1),n[11]||(n[11]=s()),e("div",E,[t(i(v),{menu:r.value},{default:a(()=>n[8]||(n[8]=[e("div",{class:"trigger"},"...",-1)])),_:1},8,["menu"]),n[10]||(n[10]=s()),t(d,{language:"html-vue"},{default:a(()=>n[9]||(n[9]=[s(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{O as default};
