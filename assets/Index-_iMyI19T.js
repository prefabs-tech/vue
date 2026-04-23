import{d as g,r as c,o as f,h as w,w as l,a as i,t as o,b as e,e as s,f as r,M as a}from"./index-CTgebNEw.js";import{_ as b}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-BXaH2hxJ.js";import{_ as y}from"./UiPage.vue_vue_type_style_index_0_lang-B4HcPxk1.js";import"./PrefabsTechVue3TanstackTable.es-Cz1PNbVe.js";const h={class:"section-content"},D={class:"content-wrapper"},$={class:"section-content"},x={class:"content-wrapper vertical"},C={name:"DividerDemo"},T=g({...C,setup(P){const p="Programming isn’t about what you know; it’s about what you can figure out.",d="Code is read much more often than it is written.",u="The most dangerous phrase in the language is, ‘We’ve always done it this way.'",v=[{default:'"horizontal"',description:"Sets the direction of the divider.",prop:"orientation",type:'"horizontal" | "vertical"'}];return(n,t)=>{const m=c("SshPre");return f(),w(y,{subtitle:n.$t("ui.divider.subtitle"),title:n.$t("ui.divider.title"),class:"demo"},{default:l(()=>[i("section",null,[i("h2",null,o(n.$t("ui.divider.usage.horizontal")),1),t[6]||(t[6]=e()),i("div",h,[i("div",D,[i("p",{class:"content-item"},o(p)),t[0]||(t[0]=e()),s(r(a)),t[1]||(t[1]=e()),i("p",{class:"content-item"},o(d)),t[2]||(t[2]=e()),s(r(a),{orientation:"horizontal"}),t[3]||(t[3]=e()),i("p",{class:"content-item"},o(u))]),t[5]||(t[5]=e()),s(m,{language:"html-vue"},{default:l(()=>[...t[4]||(t[4]=[e(`
          <template>
            <div class="content-wrapper">
              <p class="content-item">
                Programming isn’t about what you know; it’s about what you can figure out.
              </p>
              <Divider />
              <p class="content-item">
                Code is read much more often than it is written.
              </p>
              <Divider orientation="horizontal" />
              <p class="content-item">
                The most dangerous phrase in the language is, ‘We’ve always done it this way.'
              </p>
            </div>
          </template>

          <script setup lang="ts">
          import { Divider } from "@prefabs.tech/vue3-ui";
          <\/script>

          <style lang="css">
          .content-wrapper {
            border: 1px solid #b5b5b5;
            border-radius: 0.3rem;
            display: flex;
            flex-direction: column;
            padding: 1rem 0.75rem;
          }
          </style>
        `,-1)])]),_:1})])]),t[14]||(t[14]=e()),i("section",null,[i("h2",null,o(n.$t("ui.divider.usage.vertical")),1),t[13]||(t[13]=e()),i("div",$,[i("div",x,[i("p",{class:"content-item"},o(p)),t[7]||(t[7]=e()),s(r(a),{orientation:"vertical"}),t[8]||(t[8]=e()),i("p",{class:"content-item"},o(d)),t[9]||(t[9]=e()),s(r(a),{orientation:"vertical"}),t[10]||(t[10]=e()),i("p",{class:"content-item"},o(u))]),t[12]||(t[12]=e()),s(m,{language:"html-vue"},{default:l(()=>[...t[11]||(t[11]=[e(`
          <template>
            <div class="content-wrapper vertical">
              <p class="content-item">
                Programming isn’t about what you know; it’s about what you can figure out.
              </p>
              <Divider orientation="vertical" />
              <p class="content-item">
                Code is read much more often than it is written.
              </p>
              <Divider orientation="vertical" />
              <p class="content-item">
                The most dangerous phrase in the language is, ‘We’ve always done it this way.'
              </p>
            </div>
          </template>

          <script setup lang="ts">
          import { Divider } from "@prefabs.tech/vue3-ui";
          <\/script>

          <style lang="css">
          .content-wrapper {
            border: 1px solid #b5b5b5;
            border-radius: 0.3rem;
            display: flex;
            flex-direction: column;
            padding: 1rem 0.75rem;
          }

          .content-wrapper > .content-item {
            width: 100%;
          }

          .content-wrapper.vertical {
            flex-direction: row;
          }
          </style>
        `,-1)])]),_:1})])]),t[15]||(t[15]=e()),s(b,{"props-data":v,"props-table-title":n.$t("common.properties",{value:"DividerProperties"})},null,8,["props-table-title"])]),_:1},8,["subtitle","title"])}}});export{T as default};
