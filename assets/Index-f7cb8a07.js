import{d,r as u,o as g,c as m,w as o,f as l,g as t,t as i,a as n,h as s,a5 as h,ah as p}from"./index-6ec2f40d.js";const v={class:"section-content"},_={class:"section-content"},f={class:"trigger"},T={class:"section-content"},b={class:"trigger"},$={class:"section-content"},y={class:"trigger"},k={class:"section-content"},z={class:"trigger"},B={class:"section-content"},C={class:"trigger"},P={class:"section-content"},w={class:"trigger"},D=d({__name:"Index",setup(N){return(e,S)=>{const c=u("router-link"),a=u("SshPre"),r=u("Page");return g(),m(r,{title:e.$t("ui.tooltip.title"),class:"demo"},{toolbar:o(()=>[l(c,{to:{name:"ui"},class:"back"},{default:o(()=>[t(i(e.$t("common.back")),1)]),_:1})]),default:o(()=>[t(),n("section",null,[n("h2",null,i(e.$t("ui.tooltip.usage.basic")),1),t(),n("div",v,[l(a,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),l(s(p),null,{content:o(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:o(()=>[l(s(h),{label:e.$t("ui.tooltip.label.button"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),n("section",null,[n("h2",null,i(e.$t("ui.tooltip.usage.top")),1),t(),n("div",_,[l(a,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),l(s(p),{position:"top"},{content:o(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:o(()=>[n("div",f,i(e.$t("ui.tooltip.usage.top")),1),t()]),_:1})])]),t(),n("section",null,[n("h2",null,i(e.$t("ui.tooltip.usage.bottom")),1),t(),n("div",T,[l(a,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),l(s(p),{position:"bottom"},{content:o(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:o(()=>[n("div",b,i(e.$t("ui.tooltip.usage.bottom")),1),t()]),_:1})])]),t(),n("section",null,[n("h2",null,i(e.$t("ui.tooltip.usage.left")),1),t(),n("div",$,[l(a,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),l(s(p),{position:"left"},{content:o(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:o(()=>[n("div",y,i(e.$t("ui.tooltip.usage.left")),1),t()]),_:1})])]),t(),n("section",null,[n("h2",null,i(e.$t("ui.tooltip.usage.right")),1),t(),n("div",k,[l(a,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),l(s(p),{position:"right"},{content:o(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:o(()=>[n("div",z,i(e.$t("ui.tooltip.usage.right")),1),t()]),_:1})])]),t(),n("section",null,[n("h2",null,i(e.$t("ui.tooltip.usage.clickable")),1),t(),n("div",B,[l(a,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),l(s(p),{clickable:""},{content:o(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:o(()=>[n("div",C,i(e.$t("ui.tooltip.label.button")),1),t()]),_:1})])]),t(),n("section",null,[n("h2",null,i(e.$t("ui.tooltip.usage.delay")),1),t(),n("div",P,[l(a,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t(),l(s(p),{delay:1e3},{content:o(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:o(()=>[n("div",w,i(e.$t("ui.tooltip.label.delay")),1),t()]),_:1})])])]),_:1},8,["title"])}}});export{D as default};
