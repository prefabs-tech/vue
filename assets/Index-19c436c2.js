import{d as r,o as d,c as g,w as e,a as o,t as i,f as t,g as l,h as s,a5 as m,a9 as p,r as u}from"./index-45a747cd.js";const h={class:"section-content"},v={class:"section-content"},_={class:"trigger"},f={class:"section-content"},T={class:"trigger"},b={class:"section-content"},$={class:"trigger"},y={class:"section-content"},z={class:"trigger"},B={class:"section-content"},C={class:"trigger"},N=r({__name:"Index",setup(P){return(n,S)=>{const a=u("SshPre"),c=u("Page");return d(),g(c,{title:n.$t("ui.tooltip.title"),class:"demo"},{default:e(()=>[o("section",null,[o("h2",null,i(n.$t("ui.tooltip.usage.basic")),1),t(),o("div",h,[l(a,{language:"html-vue"},{default:e(()=>[t(`
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

          <script setup lang="ts">
            import { ButtonElement, Tooltip } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t(),l(s(p),null,{content:e(()=>[t(i(n.$t("ui.tooltip.content")),1)]),default:e(()=>[l(s(m),{label:n.$t("ui.tooltip.label.button"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),o("section",null,[o("h2",null,i(n.$t("ui.tooltip.usage.top")),1),t(),o("div",v,[l(a,{language:"html-vue"},{default:e(()=>[t(`
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
        `)]),_:1}),t(),l(s(p),{position:"top"},{content:e(()=>[t(i(n.$t("ui.tooltip.content")),1)]),default:e(()=>[o("div",_,i(n.$t("ui.tooltip.usage.top")),1),t()]),_:1})])]),t(),o("section",null,[o("h2",null,i(n.$t("ui.tooltip.usage.bottom")),1),t(),o("div",f,[l(a,{language:"html-vue"},{default:e(()=>[t(`
          <template>
            <Tooltip position="bottom">
              <div class="trigger">
                Bottom
              </div>
              <template #tooltip>
                This is a tooltip
                </template>
            </Tooltip>

          <script setup lang="ts">
            import { Tooltip } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t(),l(s(p),{position:"bottom"},{content:e(()=>[t(i(n.$t("ui.tooltip.content")),1)]),default:e(()=>[o("div",T,i(n.$t("ui.tooltip.usage.bottom")),1),t()]),_:1})])]),t(),o("section",null,[o("h2",null,i(n.$t("ui.tooltip.usage.left")),1),t(),o("div",b,[l(a,{language:"html-vue"},{default:e(()=>[t(`
          <template>
            <Tooltip position="left">
              <div class="trigger">
                Left
              </div>
              <template #tooltip>
                This is a tooltip
                </template>
            </Tooltip>

          <script setup lang="ts">
            import { Tooltip } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t(),l(s(p),{position:"left"},{content:e(()=>[t(i(n.$t("ui.tooltip.content")),1)]),default:e(()=>[o("div",$,i(n.$t("ui.tooltip.usage.left")),1),t()]),_:1})])]),t(),o("section",null,[o("h2",null,i(n.$t("ui.tooltip.usage.right")),1),t(),o("div",y,[l(a,{language:"html-vue"},{default:e(()=>[t(`
          <template>
            <Tooltip position="right">
              <div class="trigger">
                Right
              </div>
              <template #tooltip>
                This is a tooltip
                </template>
            </Tooltip>

          <script setup lang="ts">
            import { Tooltip } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t(),l(s(p),{position:"right"},{content:e(()=>[t(i(n.$t("ui.tooltip.content")),1)]),default:e(()=>[o("div",z,i(n.$t("ui.tooltip.usage.right")),1),t()]),_:1})])]),t(),o("section",null,[o("h2",null,i(n.$t("ui.tooltip.usage.customStyle")),1),t(),o("div",B,[l(a,{language:"html-vue"},{default:e(()=>[t(`
          <template>
            <Tooltip class="custom-style-tooltip">
              <div class="trigger">
                Custom
              </div>
              <template #tooltip>
                This is a tooltip
                </template>
            </Tooltip>

          <script setup lang="ts">
            import { Tooltip } from "@dzangolab/vue3-ui";
          <\/script>

          <style lang="css">
            .custom-style-tooltip .tooltip-box {
              --_bg-color: var(--dz-success-color);
              --_text-color: var(--dz-secondary-color);
            }
          </style>
        `)]),_:1}),t(),l(s(p),{class:"custom-style-tooltip"},{content:e(()=>[t(i(n.$t("ui.tooltip.content")),1)]),default:e(()=>[o("div",C,i(n.$t("ui.tooltip.label.custom")),1),t()]),_:1})])])]),_:1},8,["title"])}}});export{N as default};
