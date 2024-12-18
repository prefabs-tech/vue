import{d as r,K as c,o as d,c as b,w as n,L as p,C as t,N as l,f as o,E as s,az as a,at as i}from"./index-66214709-32602281.js";import{_ as g}from"./UiPage.vue_vue_type_style_index_0_lang-1ec4c90a.js";const h={class:"section-content"},v={class:"popup-title"},f={class:"popup-body"},_={class:"section-content"},$={class:"section-content"},P={class:"section-content"},B={class:"section-content"},y={class:"section-content"},C=r({__name:"Index",setup(E){return(e,z)=>{const m=c("router-link"),u=c("SshPre");return d(),b(g,{title:e.$t("ui.popup.title"),class:"demo"},{toolbar:n(()=>[p(m,{to:{name:"ui"},class:"back"},{default:n(()=>[t(l(e.$t("common.back")),1)]),_:1})]),default:n(()=>[t(),o("section",null,[o("h2",null,l(e.$t("ui.popup.usage.basic")),1),t(),o("div",h,[p(u,{language:"html-vue"},{default:n(()=>[t(`
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
        `)]),_:1}),t(),p(s(a),null,{content:n(()=>[o("h3",v,l(e.$t("ui.popup.title")),1),t(),o("div",f,l(e.$t("ui.popup.content")),1)]),default:n(()=>[p(s(i),{label:e.$t("ui.popup.label.button"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),o("section",null,[o("h2",null,l(e.$t("ui.popup.usage.withI18n")),1),t(),o("div",_,[p(u,{language:"html-vue"},{default:n(()=>[t(`
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
        `)]),_:1}),t(),p(s(a),null,{content:n(()=>[t(l(e.$t("ui.popup.content")),1)]),default:n(()=>[p(s(i),{label:e.$t("ui.popup.label.button"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),o("section",null,[o("h2",null,l(e.$t("ui.tooltip.usage.top")),1),t(),o("div",$,[p(u,{language:"html-vue"},{default:n(()=>[t(`
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
        `)]),_:1}),t(),p(s(a),{position:"top"},{content:n(()=>[t(l(e.$t("ui.popup.content")),1)]),default:n(()=>[p(s(i),{label:e.$t("ui.popup.usage.top"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),o("section",null,[o("h2",null,l(e.$t("ui.tooltip.usage.bottom")),1),t(),o("div",P,[p(u,{language:"html-vue"},{default:n(()=>[t(`
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
        `)]),_:1}),t(),p(s(a),{position:"bottom"},{content:n(()=>[t(l(e.$t("ui.popup.content")),1)]),default:n(()=>[p(s(i),{label:e.$t("ui.popup.usage.bottom"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),o("section",null,[o("h2",null,l(e.$t("ui.tooltip.usage.left")),1),t(),o("div",B,[p(u,{language:"html-vue"},{default:n(()=>[t(`
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
        `)]),_:1}),t(),p(s(a),{position:"left"},{content:n(()=>[t(l(e.$t("ui.popup.content")),1)]),default:n(()=>[p(s(i),{label:e.$t("ui.popup.usage.left"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),o("section",null,[o("h2",null,l(e.$t("ui.tooltip.usage.right")),1),t(),o("div",y,[p(u,{language:"html-vue"},{default:n(()=>[t(`
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
        `)]),_:1}),t(),p(s(a),{position:"right"},{content:n(()=>[t(l(e.$t("ui.popup.content")),1)]),default:n(()=>[p(s(i),{label:e.$t("ui.popup.usage.right"),severity:"success"},null,8,["label"]),t()]),_:1})])])]),_:1},8,["title"])}}});export{C as default};
