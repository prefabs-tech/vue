import{d as r,r as c,o as d,c as g,w as o,a as n,t as l,f as t,g as p,h as s,a5 as a,ab as i}from"./index-bdeedbb5.js";const b={class:"section-content"},h={class:"popup-title"},v={class:"popup-body"},f={class:"section-content"},P={class:"section-content"},_={class:"section-content"},$={class:"section-content"},B={class:"section-content"},T=r({__name:"Index",setup(y){return(e,E)=>{const u=c("SshPre"),m=c("Page");return d(),g(m,{title:e.$t("ui.popup.title"),class:"demo"},{default:o(()=>[n("section",null,[n("h2",null,l(e.$t("ui.popup.usage.basic")),1),t(),n("div",b,[p(u,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),p(s(i),null,{content:o(()=>[n("h3",h,l(e.$t("ui.popup.title")),1),t(),n("div",v,l(e.$t("ui.popup.content")),1)]),default:o(()=>[p(s(a),{label:e.$t("ui.popup.label.button"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),n("section",null,[n("h2",null,l(e.$t("ui.popup.usage.withI18n")),1),t(),n("div",f,[p(u,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),p(s(i),null,{content:o(()=>[t(l(e.$t("ui.popup.content")),1)]),default:o(()=>[p(s(a),{label:e.$t("ui.popup.label.button"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),n("section",null,[n("h2",null,l(e.$t("ui.tooltip.usage.top")),1),t(),n("div",P,[p(u,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),p(s(i),{position:"top"},{content:o(()=>[t(l(e.$t("ui.popup.content")),1)]),default:o(()=>[p(s(a),{label:e.$t("ui.popup.usage.top"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),n("section",null,[n("h2",null,l(e.$t("ui.tooltip.usage.bottom")),1),t(),n("div",_,[p(u,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),p(s(i),{position:"bottom"},{content:o(()=>[t(l(e.$t("ui.popup.content")),1)]),default:o(()=>[p(s(a),{label:e.$t("ui.popup.usage.bottom"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),n("section",null,[n("h2",null,l(e.$t("ui.tooltip.usage.left")),1),t(),n("div",$,[p(u,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),p(s(i),{position:"left"},{content:o(()=>[t(l(e.$t("ui.popup.content")),1)]),default:o(()=>[p(s(a),{label:e.$t("ui.popup.usage.left"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),n("section",null,[n("h2",null,l(e.$t("ui.tooltip.usage.right")),1),t(),n("div",B,[p(u,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),p(s(i),{position:"right"},{content:o(()=>[t(l(e.$t("ui.popup.content")),1)]),default:o(()=>[p(s(a),{label:e.$t("ui.popup.usage.right"),severity:"success"},null,8,["label"]),t()]),_:1})])])]),_:1},8,["title"])}}});export{T as default};
