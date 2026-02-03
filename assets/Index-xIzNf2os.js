import{d as f,J as g,b as v,o as $,h as o,e as p,y as e,g as s,t as l,u,q as a,l as r}from"./index-CcgkNhek.js";import{_ as P}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-3HTF-xmp.js";import{_ as y}from"./UiPage.vue_vue_type_style_index_0_lang-mZqaI-tE.js";import"./PrefabsTechVue3TanstackTable.es-CMugsYiG.js";import"./PrefabsTechVue3Form.es-CviYuyTJ.js";const B={class:"section-content"},w={class:"popup-title"},E={class:"popup-body"},S={class:"section-content"},T={class:"section-content"},C={class:"section-content"},k={class:"section-content"},D={class:"section-content"},J=f({__name:"Index",setup(I){const m=[{description:"Emitted when the user clicks outside the popup.",name:"onClickOutside",payload:"-"}],d=[{default:'"popup"',description:"Aria label for accessibility, used on the trigger element.",prop:"ariaLabel",type:"String"},{default:"10",description:"Spacing in pixels between the trigger element and popup content.",prop:"offset",type:"Number"},{default:"-",description:"Supported position of the popup (`top`, `bottom`, `left`, or `right`).",prop:"position",type:"String"}],b=[{description:"Content to be shown in the popup.",name:"content"},{description:"The trigger element that opens the popup.",name:"default"}];return(n,t)=>{const i=g("SshPre");return $(),v(y,{subtitle:n.$t("ui.popup.subtitle"),title:n.$t("ui.popup.title"),class:"demo"},{default:o(()=>[p("section",null,[p("h2",null,l(n.$t("ui.popup.usage.basic")),1),t[4]||(t[4]=e()),p("div",B,[s(u(a),null,{content:o(()=>[p("h3",w,l(n.$t("ui.popup.title")),1),t[0]||(t[0]=e()),p("div",E,l(n.$t("ui.popup.content")),1)]),default:o(()=>[s(u(r),{label:n.$t("ui.popup.label.button"),severity:"success"},null,8,["label"]),t[1]||(t[1]=e())]),_:1}),t[3]||(t[3]=e()),s(i,{language:"html-vue"},{default:o(()=>[...t[2]||(t[2]=[e(`
          <template>
            <Popup>
              <ButtonElement
                :label="Click me"
                severity="success"
              />

              <template #content>
                <h3 class="popup-title">Popup</h3>
                <div class="popup-body">This is a popup</div>
              </template>
            </Popup>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Popup } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),t[25]||(t[25]=e()),p("section",null,[p("h2",null,l(n.$t("ui.popup.usage.withI18n")),1),t[8]||(t[8]=e()),p("div",S,[s(u(a),null,{content:o(()=>[e(l(n.$t("ui.popup.content")),1)]),default:o(()=>[s(u(r),{label:n.$t("ui.popup.label.button"),severity:"success"},null,8,["label"]),t[5]||(t[5]=e())]),_:1}),t[7]||(t[7]=e()),s(i,{language:"html-vue"},{default:o(()=>[...t[6]||(t[6]=[e(`
          <template>
            <Popup>
              <ButtonElement
                :label="t('ui.popup.label.button')"
                severity="success"
              />
              <template #content>
              {{ t("ui.popup.content") }}
              </template>
            </Popup>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Popup } from "@prefabs.tech/vue3-ui";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `,-1)])]),_:1})])]),t[26]||(t[26]=e()),p("section",null,[p("h2",null,l(n.$t("ui.popup.usage.top")),1),t[12]||(t[12]=e()),p("div",T,[s(u(a),{position:"top"},{content:o(()=>[e(l(n.$t("ui.popup.content")),1)]),default:o(()=>[s(u(r),{label:n.$t("ui.popup.label.show"),severity:"success"},null,8,["label"]),t[9]||(t[9]=e())]),_:1}),t[11]||(t[11]=e()),s(i,{language:"html-vue"},{default:o(()=>[...t[10]||(t[10]=[e(`
          <template>
            <Popup position="top">
              <ButtonElement
                :label="Show"
                severity="success"
              />
              <template #content>
                This is a popup
              </template>
            </Popup>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Popup } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),t[27]||(t[27]=e()),p("section",null,[p("h2",null,l(n.$t("ui.popup.usage.bottom")),1),t[16]||(t[16]=e()),p("div",C,[s(u(a),{position:"bottom"},{content:o(()=>[e(l(n.$t("ui.popup.content")),1)]),default:o(()=>[s(u(r),{label:n.$t("ui.popup.label.show"),severity:"success"},null,8,["label"]),t[13]||(t[13]=e())]),_:1}),t[15]||(t[15]=e()),s(i,{language:"html-vue"},{default:o(()=>[...t[14]||(t[14]=[e(`
          <template>
            <Popup position="bottom">
              <ButtonElement
                :label="Show"
                severity="success"
              />
              <template #content>
                This is a popup
              </template>
            </Popup>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Popup } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),t[28]||(t[28]=e()),p("section",null,[p("h2",null,l(n.$t("ui.popup.usage.left")),1),t[20]||(t[20]=e()),p("div",k,[s(u(a),{position:"left"},{content:o(()=>[e(l(n.$t("ui.popup.content")),1)]),default:o(()=>[s(u(r),{label:n.$t("ui.popup.label.show"),severity:"success"},null,8,["label"]),t[17]||(t[17]=e())]),_:1}),t[19]||(t[19]=e()),s(i,{language:"html-vue"},{default:o(()=>[...t[18]||(t[18]=[e(`
          <template>
            <Popup position="left">
              <ButtonElement
                :label="Show"
                severity="success"
              />
              <template #content>
                This is a popup
              </template>
            </Popup>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Popup } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),t[29]||(t[29]=e()),p("section",null,[p("h2",null,l(n.$t("ui.popup.usage.right")),1),t[24]||(t[24]=e()),p("div",D,[s(u(a),{position:"right"},{content:o(()=>[e(l(n.$t("ui.popup.content")),1)]),default:o(()=>[s(u(r),{label:n.$t("ui.popup.label.show"),severity:"success"},null,8,["label"]),t[21]||(t[21]=e())]),_:1}),t[23]||(t[23]=e()),s(i,{language:"html-vue"},{default:o(()=>[...t[22]||(t[22]=[e(`
          <template>
            <Popup position="right">
              <ButtonElement
                :label="Show"
                severity="success"
              />
              <template #content>
                This is a popup
              </template>
            </Popup>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Popup } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)])]),_:1})])]),t[30]||(t[30]=e()),s(P,{"events-data":m,"props-data":d,"props-table-title":n.$t("common.properties",{value:"PopupProperties"}),"slots-data":b},null,8,["props-table-title"])]),_:1},8,["subtitle","title"])}}});export{J as default};
