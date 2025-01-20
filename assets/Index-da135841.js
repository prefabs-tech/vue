import{d as r,K as u,o as d,c as g,w as e,L as l,C as t,M as i,f as n,E as s,aI as p,as as m}from"./index-6962cf42-46e4151e.js";import{_ as h}from"./UiPage.vue_vue_type_style_index_0_lang-081924df.js";const v={class:"section-content"},_={class:"section-content"},f={class:"trigger"},T={class:"section-content"},b={class:"trigger"},$={class:"section-content"},y={class:"trigger"},k={class:"section-content"},z={class:"trigger"},B={class:"section-content"},C={class:"trigger"},w={class:"section-content"},E={class:"trigger"},D=r({__name:"Index",setup(I){return(o,N)=>{const c=u("router-link"),a=u("SshPre");return d(),g(h,{title:o.$t("ui.tooltip.title"),class:"demo"},{toolbar:e(()=>[l(c,{to:{name:"ui"},class:"back"},{default:e(()=>[t(i(o.$t("common.back")),1)]),_:1})]),default:e(()=>[t(),n("section",null,[n("h2",null,i(o.$t("ui.tooltip.usage.basic")),1),t(),n("div",v,[l(s(p),null,{content:e(()=>[t(i(o.$t("ui.tooltip.content")),1)]),default:e(()=>[l(s(m),{label:o.$t("ui.tooltip.label.button"),severity:"success"},null,8,["label"]),t()]),_:1}),t(),l(a,{language:"html-vue"},{default:e(()=>[t(`
          <template>
            <Tooltip>
              <ButtonElement
                :label="Tooltip"
                severity="success"
              />
              <template #content>
                This is a tooltip
              </template>
            </Tooltip>
          </template>

          <script setup lang="ts">
            import { ButtonElement, Tooltip } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t()])]),t(),n("section",null,[n("h2",null,i(o.$t("ui.tooltip.usage.top")),1),t(),n("div",_,[l(s(p),{position:"top"},{content:e(()=>[t(i(o.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",f,i(o.$t("ui.tooltip.usage.top")),1),t()]),_:1}),t(),l(a,{language:"html-vue"},{default:e(()=>[t(`
          <template>
            <Tooltip position="top">
              <div class="trigger">
                Top
              </div>
              />
              <template #content>
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
        `)]),_:1}),t()])]),t(),n("section",null,[n("h2",null,i(o.$t("ui.tooltip.usage.bottom")),1),t(),n("div",T,[l(s(p),{position:"bottom"},{content:e(()=>[t(i(o.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",b,i(o.$t("ui.tooltip.usage.bottom")),1),t()]),_:1}),t(),l(a,{language:"html-vue"},{default:e(()=>[t(`
          <template>
            <Tooltip position="bottom">
              <div class="trigger">
                Bottom
              </div>
              <template #content>
                This is a tooltip
              </template>
            </Tooltip>
          </template>

          <script setup lang="ts">
          import { Tooltip } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t()])]),t(),n("section",null,[n("h2",null,i(o.$t("ui.tooltip.usage.left")),1),t(),n("div",$,[l(s(p),{position:"left"},{content:e(()=>[t(i(o.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",y,i(o.$t("ui.tooltip.usage.left")),1),t()]),_:1}),t(),l(a,{language:"html-vue"},{default:e(()=>[t(`
          <template>
            <Tooltip position="left">
              <div class="trigger">
                Left
              </div>
              <template #content>
                This is a tooltip
              </template>
            </Tooltip>
          </template>

          <script setup lang="ts">
          import { Tooltip } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t()])]),t(),n("section",null,[n("h2",null,i(o.$t("ui.tooltip.usage.right")),1),t(),n("div",k,[l(s(p),{position:"right"},{content:e(()=>[t(i(o.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",z,i(o.$t("ui.tooltip.usage.right")),1),t()]),_:1}),t(),l(a,{language:"html-vue"},{default:e(()=>[t(`
          <template>
            <Tooltip position="right">
              <div class="trigger">
                Right
              </div>
              <template #content>
                This is a tooltip
              </template>
            </Tooltip>
          </template>

          <script setup lang="ts">
          import { Tooltip } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t()])]),t(),n("section",null,[n("h2",null,i(o.$t("ui.tooltip.usage.clickable")),1),t(),n("div",B,[l(s(p),{clickable:""},{content:e(()=>[t(i(o.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",C,i(o.$t("ui.tooltip.label.button")),1),t()]),_:1}),t(),l(a,{language:"html-vue"},{default:e(()=>[t(`
          <template>
            <Tooltip clickable>
              <div class="trigger">
                Clickable
              </div>
              <template #content>
                This is a tooltip
              </template>
            </Tooltip>
          </template>

          <script setup lang="ts">
          import { Tooltip } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t()])]),t(),n("section",null,[n("h2",null,i(o.$t("ui.tooltip.usage.delay")),1),t(),n("div",w,[l(s(p),{delay:1e3},{content:e(()=>[t(i(o.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",E,i(o.$t("ui.tooltip.label.delay")),1),t()]),_:1}),t(),l(a,{language:"html-vue"},{default:e(()=>[t(`
          <template>
            <Tooltip :delay="1000">
              <div class="trigger">
                Delay
              </div>
              <template #content>
                This is a tooltip
              </template>
            </Tooltip>
          </template>

          <script setup lang="ts">
          import { Tooltip } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),t()])])]),_:1},8,["title"])}}});export{D as default};
