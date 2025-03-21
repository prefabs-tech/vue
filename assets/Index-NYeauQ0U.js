import{d as r,A as d,e as b,o as g,w as o,E as n,f as p,t as u,i as l,u as s,x as m,j as i}from"./index-_fy2Xf79.js";import{_ as v}from"./UiPage.vue_vue_type_style_index_0_lang-Bzw4JMNp.js";const f={class:"section-content"},$={class:"popup-title"},P={class:"popup-body"},y={class:"section-content"},B={class:"section-content"},E={class:"section-content"},z={class:"section-content"},T={class:"section-content"},N=r({__name:"Index",setup(k){return(e,t)=>{const a=d("SshPre");return g(),b(v,{title:e.$t("ui.popup.title"),class:"demo"},{toolbar:o(()=>[l(s(i),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=C=>e.$router.push("/ui"))},null,8,["label"])]),default:o(()=>[t[26]||(t[26]=n()),p("section",null,[p("h2",null,u(e.$t("ui.popup.usage.basic")),1),t[5]||(t[5]=n()),p("div",f,[l(s(m),null,{content:o(()=>[p("h3",$,u(e.$t("ui.popup.title")),1),t[1]||(t[1]=n()),p("div",P,u(e.$t("ui.popup.content")),1)]),default:o(()=>[l(s(i),{label:e.$t("ui.popup.label.button"),severity:"success"},null,8,["label"]),t[2]||(t[2]=n())]),_:1}),t[4]||(t[4]=n()),l(a,{language:"html-vue"},{default:o(()=>t[3]||(t[3]=[n(`
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
        `)])),_:1})])]),t[27]||(t[27]=n()),p("section",null,[p("h2",null,u(e.$t("ui.popup.usage.withI18n")),1),t[9]||(t[9]=n()),p("div",y,[l(s(m),null,{content:o(()=>[n(u(e.$t("ui.popup.content")),1)]),default:o(()=>[l(s(i),{label:e.$t("ui.popup.label.button"),severity:"success"},null,8,["label"]),t[6]||(t[6]=n())]),_:1}),t[8]||(t[8]=n()),l(a,{language:"html-vue"},{default:o(()=>t[7]||(t[7]=[n(`
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
        `)])),_:1})])]),t[28]||(t[28]=n()),p("section",null,[p("h2",null,u(e.$t("ui.tooltip.usage.top")),1),t[13]||(t[13]=n()),p("div",B,[l(s(m),{position:"top"},{content:o(()=>[n(u(e.$t("ui.popup.content")),1)]),default:o(()=>[l(s(i),{label:e.$t("ui.popup.usage.top"),severity:"success"},null,8,["label"]),t[10]||(t[10]=n())]),_:1}),t[12]||(t[12]=n()),l(a,{language:"html-vue"},{default:o(()=>t[11]||(t[11]=[n(`
          <template>
            <Popup position="top">
              <ButtonElement
                :label="Top"
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
        `)])),_:1})])]),t[29]||(t[29]=n()),p("section",null,[p("h2",null,u(e.$t("ui.tooltip.usage.bottom")),1),t[17]||(t[17]=n()),p("div",E,[l(s(m),{position:"bottom"},{content:o(()=>[n(u(e.$t("ui.popup.content")),1)]),default:o(()=>[l(s(i),{label:e.$t("ui.popup.usage.bottom"),severity:"success"},null,8,["label"]),t[14]||(t[14]=n())]),_:1}),t[16]||(t[16]=n()),l(a,{language:"html-vue"},{default:o(()=>t[15]||(t[15]=[n(`
          <template>
            <Popup position="bottom">
              <ButtonElement
                :label="Bottom"
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
        `)])),_:1})])]),t[30]||(t[30]=n()),p("section",null,[p("h2",null,u(e.$t("ui.tooltip.usage.left")),1),t[21]||(t[21]=n()),p("div",z,[l(s(m),{position:"left"},{content:o(()=>[n(u(e.$t("ui.popup.content")),1)]),default:o(()=>[l(s(i),{label:e.$t("ui.popup.usage.left"),severity:"success"},null,8,["label"]),t[18]||(t[18]=n())]),_:1}),t[20]||(t[20]=n()),l(a,{language:"html-vue"},{default:o(()=>t[19]||(t[19]=[n(`
          <template>
            <Popup position="left">
              <ButtonElement
                :label="Left"
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
        `)])),_:1})])]),t[31]||(t[31]=n()),p("section",null,[p("h2",null,u(e.$t("ui.tooltip.usage.right")),1),t[25]||(t[25]=n()),p("div",T,[l(s(m),{position:"right"},{content:o(()=>[n(u(e.$t("ui.popup.content")),1)]),default:o(()=>[l(s(i),{label:e.$t("ui.popup.usage.right"),severity:"success"},null,8,["label"]),t[22]||(t[22]=n())]),_:1}),t[24]||(t[24]=n()),l(a,{language:"html-vue"},{default:o(()=>t[23]||(t[23]=[n(`
          <template>
            <Popup position="right">
              <ButtonElement
                :label="Right"
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{N as default};
