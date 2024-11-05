import{d as r,r as u,o as d,c as g,w as e,a as n,t as i,f as t,g as l,h as s,a5 as m,ah as p}from"./index-bdeedbb5.js";const h={class:"section-content"},v={class:"section-content"},_={class:"trigger"},f={class:"section-content"},T={class:"trigger"},b={class:"section-content"},$={class:"trigger"},y={class:"section-content"},z={class:"trigger"},k={class:"section-content"},B={class:"trigger"},C={class:"section-content"},P={class:"trigger"},V=r({__name:"Index",setup(w){return(o,N)=>{const a=u("SshPre"),c=u("Page");return d(),g(c,{title:o.$t("ui.tooltip.title"),class:"demo"},{default:e(()=>[n("section",null,[n("h2",null,i(o.$t("ui.tooltip.usage.basic")),1),t(),n("div",h,[l(a,{language:"html-vue"},{default:e(()=>[t(`
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
        `)]),_:1}),t(),l(s(p),null,{content:e(()=>[t(i(o.$t("ui.tooltip.content")),1)]),default:e(()=>[l(s(m),{label:o.$t("ui.tooltip.label.button"),severity:"success"},null,8,["label"]),t()]),_:1})])]),t(),n("section",null,[n("h2",null,i(o.$t("ui.tooltip.usage.top")),1),t(),n("div",v,[l(a,{language:"html-vue"},{default:e(()=>[t(`
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
        `)]),_:1}),t(),l(s(p),{position:"top"},{content:e(()=>[t(i(o.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",_,i(o.$t("ui.tooltip.usage.top")),1),t()]),_:1})])]),t(),n("section",null,[n("h2",null,i(o.$t("ui.tooltip.usage.bottom")),1),t(),n("div",f,[l(a,{language:"html-vue"},{default:e(()=>[t(`
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
        `)]),_:1}),t(),l(s(p),{position:"bottom"},{content:e(()=>[t(i(o.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",T,i(o.$t("ui.tooltip.usage.bottom")),1),t()]),_:1})])]),t(),n("section",null,[n("h2",null,i(o.$t("ui.tooltip.usage.left")),1),t(),n("div",b,[l(a,{language:"html-vue"},{default:e(()=>[t(`
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
        `)]),_:1}),t(),l(s(p),{position:"left"},{content:e(()=>[t(i(o.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",$,i(o.$t("ui.tooltip.usage.left")),1),t()]),_:1})])]),t(),n("section",null,[n("h2",null,i(o.$t("ui.tooltip.usage.right")),1),t(),n("div",y,[l(a,{language:"html-vue"},{default:e(()=>[t(`
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
        `)]),_:1}),t(),l(s(p),{position:"right"},{content:e(()=>[t(i(o.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",z,i(o.$t("ui.tooltip.usage.right")),1),t()]),_:1})])]),t(),n("section",null,[n("h2",null,i(o.$t("ui.tooltip.usage.clickable")),1),t(),n("div",k,[l(a,{language:"html-vue"},{default:e(()=>[t(`
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
        `)]),_:1}),t(),l(s(p),{clickable:""},{content:e(()=>[t(i(o.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",B,i(o.$t("ui.tooltip.label.button")),1),t()]),_:1})])]),t(),n("section",null,[n("h2",null,i(o.$t("ui.tooltip.usage.delay")),1),t(),n("div",C,[l(a,{language:"html-vue"},{default:e(()=>[t(`
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
        `)]),_:1}),t(),l(s(p),{delay:1e3},{content:e(()=>[t(i(o.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",P,i(o.$t("ui.tooltip.label.delay")),1),t()]),_:1})])])]),_:1},8,["title"])}}});export{V as default};
