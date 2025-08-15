import{d as f,H as v,e as g,o as $,j as p,B as e,f as o,h as s,t as l,u,x as r,v as i}from"./index-bCT4rut6.js";import{_ as P}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CPmCI4RS.js";import{_ as y}from"./UiPage.vue_vue_type_style_index_0_lang-v4oZwDY0.js";import"./PrefabsTechVue3TanstackTable.es-B5_SN5L-.js";import"./PrefabsTechVue3Form.es-CKSS41mn.js";const B={class:"section-content"},w={class:"popup-title"},E={class:"popup-body"},S={class:"section-content"},k={class:"section-content"},C={class:"section-content"},T={class:"section-content"},D={class:"section-content"},H=f({__name:"Index",setup(I){const m=[{description:"Emitted when the user clicks outside the popup.",name:"onClickOutside",payload:"-"}],d=[{default:'"popup"',description:"Aria label for accessibility, used on the trigger element.",prop:"ariaLabel",type:"String"},{default:"10",description:"Spacing in pixels between the trigger element and popup content.",prop:"offset",type:"Number"},{default:"-",description:"Supported position of the popup (`top`, `bottom`, `left`, or `right`).",prop:"position",type:"String"}],b=[{description:"Content to be shown in the popup.",name:"content"},{description:"The trigger element that opens the popup.",name:"default"}];return(n,t)=>{const a=v("SshPre");return $(),g(y,{"sub-title":n.$t("ui.popup.subtitle"),title:n.$t("ui.popup.title"),class:"demo"},{toolbar:p(()=>[s(u(i),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=N=>n.$router.push("/ui"))},null,8,["label"])]),default:p(()=>[t[26]||(t[26]=e()),o("section",null,[o("h2",null,l(n.$t("ui.popup.usage.basic")),1),t[5]||(t[5]=e()),o("div",B,[s(u(r),null,{content:p(()=>[o("h3",w,l(n.$t("ui.popup.title")),1),t[1]||(t[1]=e()),o("div",E,l(n.$t("ui.popup.content")),1)]),default:p(()=>[s(u(i),{label:n.$t("ui.popup.label.button"),severity:"success"},null,8,["label"]),t[2]||(t[2]=e())]),_:1}),t[4]||(t[4]=e()),s(a,{language:"html-vue"},{default:p(()=>t[3]||(t[3]=[e(`
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
        `)])),_:1})])]),t[27]||(t[27]=e()),o("section",null,[o("h2",null,l(n.$t("ui.popup.usage.withI18n")),1),t[9]||(t[9]=e()),o("div",S,[s(u(r),null,{content:p(()=>[e(l(n.$t("ui.popup.content")),1)]),default:p(()=>[s(u(i),{label:n.$t("ui.popup.label.button"),severity:"success"},null,8,["label"]),t[6]||(t[6]=e())]),_:1}),t[8]||(t[8]=e()),s(a,{language:"html-vue"},{default:p(()=>t[7]||(t[7]=[e(`
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
        `)])),_:1})])]),t[28]||(t[28]=e()),o("section",null,[o("h2",null,l(n.$t("ui.popup.usage.top")),1),t[13]||(t[13]=e()),o("div",k,[s(u(r),{position:"top"},{content:p(()=>[e(l(n.$t("ui.popup.content")),1)]),default:p(()=>[s(u(i),{label:n.$t("ui.popup.label.show"),severity:"success"},null,8,["label"]),t[10]||(t[10]=e())]),_:1}),t[12]||(t[12]=e()),s(a,{language:"html-vue"},{default:p(()=>t[11]||(t[11]=[e(`
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
        `)])),_:1})])]),t[29]||(t[29]=e()),o("section",null,[o("h2",null,l(n.$t("ui.popup.usage.bottom")),1),t[17]||(t[17]=e()),o("div",C,[s(u(r),{position:"bottom"},{content:p(()=>[e(l(n.$t("ui.popup.content")),1)]),default:p(()=>[s(u(i),{label:n.$t("ui.popup.label.show"),severity:"success"},null,8,["label"]),t[14]||(t[14]=e())]),_:1}),t[16]||(t[16]=e()),s(a,{language:"html-vue"},{default:p(()=>t[15]||(t[15]=[e(`
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
        `)])),_:1})])]),t[30]||(t[30]=e()),o("section",null,[o("h2",null,l(n.$t("ui.popup.usage.left")),1),t[21]||(t[21]=e()),o("div",T,[s(u(r),{position:"left"},{content:p(()=>[e(l(n.$t("ui.popup.content")),1)]),default:p(()=>[s(u(i),{label:n.$t("ui.popup.label.show"),severity:"success"},null,8,["label"]),t[18]||(t[18]=e())]),_:1}),t[20]||(t[20]=e()),s(a,{language:"html-vue"},{default:p(()=>t[19]||(t[19]=[e(`
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
        `)])),_:1})])]),t[31]||(t[31]=e()),o("section",null,[o("h2",null,l(n.$t("ui.popup.usage.right")),1),t[25]||(t[25]=e()),o("div",D,[s(u(r),{position:"right"},{content:p(()=>[e(l(n.$t("ui.popup.content")),1)]),default:p(()=>[s(u(i),{label:n.$t("ui.popup.label.show"),severity:"success"},null,8,["label"]),t[22]||(t[22]=e())]),_:1}),t[24]||(t[24]=e()),s(a,{language:"html-vue"},{default:p(()=>t[23]||(t[23]=[e(`
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
        `)])),_:1})])]),t[32]||(t[32]=e()),s(P,{"events-data":m,"props-data":d,"props-table-title":n.$t("common.properties",{value:"PopupProperties"}),"slots-data":b},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{H as default};
