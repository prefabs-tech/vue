import{d as r,K as u,o as d,c as g,w as n,L as l,C as t,M as i,f as o,E as s,aG as p,au as m}from"./index-137faed7-cbf069b7.js";import{_ as h}from"./UiPage.vue_vue_type_style_index_0_lang-5337d4d6.js";const v={class:"section-content"},_={class:"section-content"},f={class:"trigger"},T={class:"section-content"},b={class:"trigger"},$={class:"section-content"},y={class:"trigger"},k={class:"section-content"},z={class:"trigger"},B={class:"section-content"},C={class:"trigger"},w={class:"section-content"},E={class:"trigger"},D=r({__name:"Index",setup(I){return(e,N)=>{const c=u("router-link"),a=u("SshPre");return d(),g(h,{title:e.$t("ui.tooltip.title"),class:"demo"},{toolbar:n(()=>[l(c,{to:{name:"ui"},class:"back"},{default:n(()=>[t(i(e.$t("common.back")),1)]),_:1})]),default:n(()=>[t(),o("section",null,[o("h2",null,i(e.$t("ui.tooltip.usage.basic")),1),t(),o("div",v,[l(a,{language:"html-vue"},{default:n(()=>[t(`
          <template>
            <Tooltip>
              <ButtonElement
                :label="Tooltip"
                severity="success"
              />
              <template #tooltip>
                This is a tooltip
              </template>
            </Tooltip>
          </template>

          <script setup lang="ts">
            import { ButtonElement, Tooltip } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t(),l(s(p),null,{content:n(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:n(()=>[l(s(m),{label:e.$t("ui.tooltip.label.button"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),o("section",null,[o("h2",null,i(e.$t("ui.tooltip.usage.top")),1),t(),o("div",_,[l(a,{language:"html-vue"},{default:n(()=>[t(`
          <template>
            <Tooltip position="top">
              <div class="trigger">
                Top
              </div>
              />
              <template #tooltip>
                This is a tooltip
              </template>
            </Tooltip>
          </template>

          <script setup lang="ts">
          import { Tooltip } from "@dzangolab/vue3-ui";
          <\/script>

          <style lang="css">
            .trigger {
              border: 1px solid #000;
              border-radius: 0.25rem;
              padding: 0.5rem;
              text-align: center;
              width: 12rem
            }
          </style>
        `)]),_:1}),t(),l(s(p),{position:"top"},{content:n(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:n(()=>[o("div",f,i(e.$t("ui.tooltip.usage.top")),1),t()]),_:1})])]),t(),o("section",null,[o("h2",null,i(e.$t("ui.tooltip.usage.bottom")),1),t(),o("div",T,[l(a,{language:"html-vue"},{default:n(()=>[t(`
          <template>
            <Tooltip position="bottom">
              <div class="trigger">
                Bottom
              </div>
              <template #tooltip>
                This is a tooltip
              </template>
            </Tooltip>
          </template>

          <script setup lang="ts">
          import { Tooltip } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t(),l(s(p),{position:"bottom"},{content:n(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:n(()=>[o("div",b,i(e.$t("ui.tooltip.usage.bottom")),1),t()]),_:1})])]),t(),o("section",null,[o("h2",null,i(e.$t("ui.tooltip.usage.left")),1),t(),o("div",$,[l(a,{language:"html-vue"},{default:n(()=>[t(`
          <template>
            <Tooltip position="left">
              <div class="trigger">
                Left
              </div>
              <template #tooltip>
                This is a tooltip
              </template>
            </Tooltip>
          </template>

          <script setup lang="ts">
          import { Tooltip } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t(),l(s(p),{position:"left"},{content:n(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:n(()=>[o("div",y,i(e.$t("ui.tooltip.usage.left")),1),t()]),_:1})])]),t(),o("section",null,[o("h2",null,i(e.$t("ui.tooltip.usage.right")),1),t(),o("div",k,[l(a,{language:"html-vue"},{default:n(()=>[t(`
          <template>
            <Tooltip position="right">
              <div class="trigger">
                Right
              </div>
              <template #tooltip>
                This is a tooltip
              </template>
            </Tooltip>
          </template>

          <script setup lang="ts">
          import { Tooltip } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t(),l(s(p),{position:"right"},{content:n(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:n(()=>[o("div",z,i(e.$t("ui.tooltip.usage.right")),1),t()]),_:1})])]),t(),o("section",null,[o("h2",null,i(e.$t("ui.tooltip.usage.clickable")),1),t(),o("div",B,[l(a,{language:"html-vue"},{default:n(()=>[t(`
          <template>
            <Tooltip clickable>
              <div class="trigger">
                Clickable
              </div>
              <template #tooltip>
                This is a tooltip
              </template>
            </Tooltip>
          </template>

          <script setup lang="ts">
          import { Tooltip } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t(),l(s(p),{clickable:""},{content:n(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:n(()=>[o("div",C,i(e.$t("ui.tooltip.label.button")),1),t()]),_:1})])]),t(),o("section",null,[o("h2",null,i(e.$t("ui.tooltip.usage.delay")),1),t(),o("div",w,[l(a,{language:"html-vue"},{default:n(()=>[t(`
          <template>
            <Tooltip :delay="1000">
              <div class="trigger">
                Delay
              </div>
              <template #tooltip>
                This is a tooltip
              </template>
            </Tooltip>
          </template>

          <script setup lang="ts">
          import { Tooltip } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t(),l(s(p),{delay:1e3},{content:n(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:n(()=>[o("div",E,i(e.$t("ui.tooltip.label.delay")),1),t()]),_:1})])])]),_:1},8,["title"])}}});export{D as default};
