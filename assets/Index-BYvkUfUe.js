import{d as g,I as f,e as v,o as $,i as p,D as n,f as o,g as l,t as s,u,y as r,v as i}from"./index-DGEdpNlT.js";import{_ as P}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-w-1MG47i.js";import{_ as y}from"./UiPage.vue_vue_type_style_index_0_lang-CJfgoDj8.js";import"./DzangolabVue3TanstackTable.es-BzFwKY2H.js";import"./DzangolabVue3Form.es-DymaP3TR.js";const B={class:"section-content"},w={class:"popup-title"},E={class:"popup-body"},S={class:"section-content"},z={class:"section-content"},k={class:"section-content"},C={class:"section-content"},T={class:"section-content"},j=g({__name:"Index",setup(D){const m=[{description:"Emitted when the user clicks outside the popup.",name:"onClickOutside",payload:"-"}],d=[{default:'"popup"',description:"Aria label for accessibility, used on the trigger element.",prop:"ariaLabel",type:"String"},{default:"10",description:"Spacing in pixels between the trigger element and popup content.",prop:"offset",type:"Number"},{default:"-",description:"Supported position of the popup (`top`, `bottom`, `left`, or `right`).",prop:"position",type:"String"}],b=[{description:"Content to be shown in the popup.",name:"content"},{description:"The trigger element that opens the popup.",name:"default"}];return(e,t)=>{const a=f("SshPre");return $(),v(y,{"sub-title":e.$t("ui.popup.subtitle"),title:e.$t("ui.popup.title"),class:"demo"},{toolbar:p(()=>[l(u(i),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=I=>e.$router.push("/ui"))},null,8,["label"])]),default:p(()=>[t[26]||(t[26]=n()),o("section",null,[o("h2",null,s(e.$t("ui.popup.usage.basic")),1),t[5]||(t[5]=n()),o("div",B,[l(u(r),null,{content:p(()=>[o("h3",w,s(e.$t("ui.popup.title")),1),t[1]||(t[1]=n()),o("div",E,s(e.$t("ui.popup.content")),1)]),default:p(()=>[l(u(i),{label:e.$t("ui.popup.label.button"),severity:"success"},null,8,["label"]),t[2]||(t[2]=n())]),_:1}),t[4]||(t[4]=n()),l(a,{language:"html-vue"},{default:p(()=>t[3]||(t[3]=[n(`
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
          import { ButtonElement, Popup } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[27]||(t[27]=n()),o("section",null,[o("h2",null,s(e.$t("ui.popup.usage.withI18n")),1),t[9]||(t[9]=n()),o("div",S,[l(u(r),null,{content:p(()=>[n(s(e.$t("ui.popup.content")),1)]),default:p(()=>[l(u(i),{label:e.$t("ui.popup.label.button"),severity:"success"},null,8,["label"]),t[6]||(t[6]=n())]),_:1}),t[8]||(t[8]=n()),l(a,{language:"html-vue"},{default:p(()=>t[7]||(t[7]=[n(`
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
          import { ButtonElement, Popup } from "@dzangolab/vue3-ui";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)])),_:1})])]),t[28]||(t[28]=n()),o("section",null,[o("h2",null,s(e.$t("ui.popup.usage.top")),1),t[13]||(t[13]=n()),o("div",z,[l(u(r),{position:"top"},{content:p(()=>[n(s(e.$t("ui.popup.content")),1)]),default:p(()=>[l(u(i),{label:e.$t("ui.popup.label.show"),severity:"success"},null,8,["label"]),t[10]||(t[10]=n())]),_:1}),t[12]||(t[12]=n()),l(a,{language:"html-vue"},{default:p(()=>t[11]||(t[11]=[n(`
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
          import { ButtonElement, Popup } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[29]||(t[29]=n()),o("section",null,[o("h2",null,s(e.$t("ui.popup.usage.bottom")),1),t[17]||(t[17]=n()),o("div",k,[l(u(r),{position:"bottom"},{content:p(()=>[n(s(e.$t("ui.popup.content")),1)]),default:p(()=>[l(u(i),{label:e.$t("ui.popup.label.show"),severity:"success"},null,8,["label"]),t[14]||(t[14]=n())]),_:1}),t[16]||(t[16]=n()),l(a,{language:"html-vue"},{default:p(()=>t[15]||(t[15]=[n(`
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
          import { ButtonElement, Popup } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[30]||(t[30]=n()),o("section",null,[o("h2",null,s(e.$t("ui.popup.usage.left")),1),t[21]||(t[21]=n()),o("div",C,[l(u(r),{position:"left"},{content:p(()=>[n(s(e.$t("ui.popup.content")),1)]),default:p(()=>[l(u(i),{label:e.$t("ui.popup.label.show"),severity:"success"},null,8,["label"]),t[18]||(t[18]=n())]),_:1}),t[20]||(t[20]=n()),l(a,{language:"html-vue"},{default:p(()=>t[19]||(t[19]=[n(`
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
          import { ButtonElement, Popup } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[31]||(t[31]=n()),o("section",null,[o("h2",null,s(e.$t("ui.popup.usage.right")),1),t[25]||(t[25]=n()),o("div",T,[l(u(r),{position:"right"},{content:p(()=>[n(s(e.$t("ui.popup.content")),1)]),default:p(()=>[l(u(i),{label:e.$t("ui.popup.label.show"),severity:"success"},null,8,["label"]),t[22]||(t[22]=n())]),_:1}),t[24]||(t[24]=n()),l(a,{language:"html-vue"},{default:p(()=>t[23]||(t[23]=[n(`
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
          import { ButtonElement, Popup } from "@dzangolab/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[32]||(t[32]=n()),l(P,{"events-data":m,"props-data":d,"props-table-title":e.$t("common.properties",{value:"PopupProperties"}),"slots-data":b},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{j as default};
