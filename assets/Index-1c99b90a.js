import{d as r,r as u,o as d,c as g,w as e,a as o,t as l,f as t,g as i,h as s,a5 as m,ae as p}from"./index-469e9c4b.js";const v={class:"section-content"},h={class:"section-content"},_={class:"trigger"},f={class:"section-content"},T={class:"trigger"},b={class:"section-content"},$={class:"trigger"},y={class:"section-content"},z={class:"trigger"},k={class:"section-content"},B={class:"trigger"},C={class:"section-content"},N={class:"trigger"},P={class:"section-content"},S={class:"trigger"},E=r({__name:"Index",setup(w){return(n,V)=>{const a=u("SshPre"),c=u("Page");return d(),g(c,{title:n.$t("ui.tooltip.title"),class:"demo"},{default:e(()=>[o("section",null,[o("h2",null,l(n.$t("ui.tooltip.usage.basic")),1),t(),o("div",v,[i(a,{language:"html-vue"},{default:e(()=>[t(`
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
        `)]),_:1}),t(),i(s(p),null,{content:e(()=>[t(l(n.$t("ui.tooltip.content")),1)]),default:e(()=>[i(s(m),{label:n.$t("ui.tooltip.label.button"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),o("section",null,[o("h2",null,l(n.$t("ui.tooltip.usage.top")),1),t(),o("div",h,[i(a,{language:"html-vue"},{default:e(()=>[t(`
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
              width: 12rem
            }
          </style>
        `)]),_:1}),t(),i(s(p),{position:"top"},{content:e(()=>[t(l(n.$t("ui.tooltip.content")),1)]),default:e(()=>[o("div",_,l(n.$t("ui.tooltip.usage.top")),1),t()]),_:1})])]),t(),o("section",null,[o("h2",null,l(n.$t("ui.tooltip.usage.bottom")),1),t(),o("div",f,[i(a,{language:"html-vue"},{default:e(()=>[t(`
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
        `)]),_:1}),t(),i(s(p),{position:"bottom"},{content:e(()=>[t(l(n.$t("ui.tooltip.content")),1)]),default:e(()=>[o("div",T,l(n.$t("ui.tooltip.usage.bottom")),1),t()]),_:1})])]),t(),o("section",null,[o("h2",null,l(n.$t("ui.tooltip.usage.left")),1),t(),o("div",b,[i(a,{language:"html-vue"},{default:e(()=>[t(`
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
        `)]),_:1}),t(),i(s(p),{position:"left"},{content:e(()=>[t(l(n.$t("ui.tooltip.content")),1)]),default:e(()=>[o("div",$,l(n.$t("ui.tooltip.usage.left")),1),t()]),_:1})])]),t(),o("section",null,[o("h2",null,l(n.$t("ui.tooltip.usage.right")),1),t(),o("div",y,[i(a,{language:"html-vue"},{default:e(()=>[t(`
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
        `)]),_:1}),t(),i(s(p),{position:"right"},{content:e(()=>[t(l(n.$t("ui.tooltip.content")),1)]),default:e(()=>[o("div",z,l(n.$t("ui.tooltip.usage.right")),1),t()]),_:1})])]),t(),o("section",null,[o("h2",null,l(n.$t("ui.tooltip.usage.clickable")),1),t(),o("div",k,[i(a,{language:"html-vue"},{default:e(()=>[t(`
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
        `)]),_:1}),t(),i(s(p),{clickable:""},{content:e(()=>[t(l(n.$t("ui.tooltip.content")),1)]),default:e(()=>[o("div",B,l(n.$t("ui.tooltip.usage.clickable")),1),t()]),_:1})])]),t(),o("section",null,[o("h2",null,l(n.$t("ui.tooltip.usage.delay")),1),t(),o("div",C,[i(a,{language:"html-vue"},{default:e(()=>[t(`
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
        `)]),_:1}),t(),i(s(p),{delay:1e3},{content:e(()=>[t(l(n.$t("ui.tooltip.content")),1)]),default:e(()=>[o("div",N,l(n.$t("ui.tooltip.label.delay")),1),t()]),_:1})])]),t(),o("section",null,[o("h2",null,l(n.$t("ui.tooltip.usage.customStyle")),1),t(),o("div",P,[i(a,{language:"html-vue"},{default:e(()=>[t(`
          <template>
            <Tooltip class="custom-style-tooltip">
              <div class="trigger">
                Custom
              </div>
              <template #tooltip>
                This is a tooltip
              </template>
            </Tooltip>
          </template>

          <script setup lang="ts">
          import { Tooltip } from "@dzangolab/vue3-ui";
          <\/script>

          <style lang="css">
            .custom-style-tooltip .tooltip-box {
              --_bg-color: var(--dz-success-color);
              --_text-color: var(--dz-secondary-color);
            }
          </style>
        `)]),_:1}),t(),i(s(p),{class:"custom-style-tooltip"},{content:e(()=>[t(l(n.$t("ui.tooltip.content")),1)]),default:e(()=>[o("div",S,l(n.$t("ui.tooltip.label.custom")),1),t()]),_:1})])])]),_:1},8,["title"])}}});export{E as default};
