import{d as r,r as c,o as g,c as d,w as n,a as o,t as p,f as t,g as l,h as u,a5 as a,aa as i}from"./index-ab4b1676.js";const b={class:"section-content"},v={class:"section-content"},h={class:"section-content"},f={class:"section-content"},_={class:"section-content"},P={class:"section-content"},$={class:"section-content"},z=r({__name:"Index",setup(y){return(e,B)=>{const s=c("SshPre"),m=c("Page");return g(),d(m,{title:e.$t("ui.popup.title"),class:"demo"},{default:n(()=>[o("section",null,[o("h2",null,p(e.$t("ui.popup.usage.basic")),1),t(),o("div",b,[l(s,{language:"html-vue"},{default:n(()=>[t(`
          <template>
            <Popup>
              <ButtonElement
                :label="Click me"
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
        `)]),_:1}),t(),l(u(i),null,{content:n(()=>[t(p(e.$t("ui.popup.content")),1)]),default:n(()=>[l(u(a),{label:e.$t("ui.popup.label.button"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),o("section",null,[o("h2",null,p(e.$t("ui.popup.usage.withI18n")),1),t(),o("div",v,[l(s,{language:"html-vue"},{default:n(()=>[t(`
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
          import { useI18n } from "@dzangolab/vue3-i18n";
          import { ButtonElement, Popup } from "@dzangolab/vue3-ui";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),t(),l(u(i),null,{content:n(()=>[t(p(e.$t("ui.popup.content")),1)]),default:n(()=>[l(u(a),{label:e.$t("ui.popup.label.button"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),o("section",null,[o("h2",null,p(e.$t("ui.tooltip.usage.top")),1),t(),o("div",h,[l(s,{language:"html-vue"},{default:n(()=>[t(`
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
        `)]),_:1}),t(),l(u(i),{position:"top"},{content:n(()=>[t(p(e.$t("ui.popup.content")),1)]),default:n(()=>[l(u(a),{label:e.$t("ui.popup.usage.top"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),o("section",null,[o("h2",null,p(e.$t("ui.tooltip.usage.bottom")),1),t(),o("div",f,[l(s,{language:"html-vue"},{default:n(()=>[t(`
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
        `)]),_:1}),t(),l(u(i),{position:"bottom"},{content:n(()=>[t(p(e.$t("ui.popup.content")),1)]),default:n(()=>[l(u(a),{label:e.$t("ui.popup.usage.bottom"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),o("section",null,[o("h2",null,p(e.$t("ui.tooltip.usage.left")),1),t(),o("div",_,[l(s,{language:"html-vue"},{default:n(()=>[t(`
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
        `)]),_:1}),t(),l(u(i),{position:"left"},{content:n(()=>[t(p(e.$t("ui.popup.content")),1)]),default:n(()=>[l(u(a),{label:e.$t("ui.popup.usage.left"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),o("section",null,[o("h2",null,p(e.$t("ui.tooltip.usage.right")),1),t(),o("div",P,[l(s,{language:"html-vue"},{default:n(()=>[t(`
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
        `)]),_:1}),t(),l(u(i),{position:"right"},{content:n(()=>[t(p(e.$t("ui.popup.content")),1)]),default:n(()=>[l(u(a),{label:e.$t("ui.popup.usage.right"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),o("section",null,[o("h2",null,p(e.$t("ui.popup.usage.customStyle")),1),t(),o("div",$,[l(s,{language:"html-vue"},{default:n(()=>[t(`
          <template>
            <Popup class="custom-style-popup">
              <ButtonElement
                :label="Click me"
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
        `)]),_:1}),t(),l(u(i),{class:"custom-style-popup"},{content:n(()=>[t(p(e.$t("ui.popup.content")),1)]),default:n(()=>[l(u(a),{label:e.$t("ui.popup.label.button"),severity:"success"},null,8,["label"]),t()]),_:1})])])]),_:1},8,["title"])}}});export{z as default};
