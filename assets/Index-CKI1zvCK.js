import{d as r,s as d,j as g,o as m,w as o,B as t,e as n,t as i,g as l,u as s,a2 as p,C as c}from"./index-Cc4iPlXT.js";import{_ as v}from"./UiPage.vue_vue_type_style_index_0_lang-DxERaYRa.js";const h={class:"section-content"},f={class:"section-content"},T={class:"trigger"},b={class:"section-content"},_={class:"trigger"},$={class:"section-content"},y={class:"trigger"},k={class:"section-content"},z={class:"trigger"},B={class:"section-content"},C={class:"trigger"},w={class:"section-content"},N={class:"trigger"},P=r({__name:"Index",setup(S){return(e,u)=>{const a=d("SshPre");return m(),g(v,{title:e.$t("ui.tooltip.title"),class:"demo"},{toolbar:o(()=>[l(s(c),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:u[0]||(u[0]=V=>e.$router.push("/ui"))},null,8,["label"])]),default:o(()=>[t(),n("section",null,[n("h2",null,i(e.$t("ui.tooltip.usage.basic")),1),t(),n("div",h,[l(s(p),null,{content:o(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:o(()=>[l(s(c),{label:e.$t("ui.tooltip.label.button"),severity:"success"},null,8,["label"]),t()]),_:1}),t(),l(a,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t()])]),t(),n("section",null,[n("h2",null,i(e.$t("ui.tooltip.usage.top")),1),t(),n("div",f,[l(s(p),{position:"top"},{content:o(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:o(()=>[n("div",T,i(e.$t("ui.tooltip.usage.top")),1),t()]),_:1}),t(),l(a,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t()])]),t(),n("section",null,[n("h2",null,i(e.$t("ui.tooltip.usage.bottom")),1),t(),n("div",b,[l(s(p),{position:"bottom"},{content:o(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:o(()=>[n("div",_,i(e.$t("ui.tooltip.usage.bottom")),1),t()]),_:1}),t(),l(a,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t()])]),t(),n("section",null,[n("h2",null,i(e.$t("ui.tooltip.usage.left")),1),t(),n("div",$,[l(s(p),{position:"left"},{content:o(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:o(()=>[n("div",y,i(e.$t("ui.tooltip.usage.left")),1),t()]),_:1}),t(),l(a,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t()])]),t(),n("section",null,[n("h2",null,i(e.$t("ui.tooltip.usage.right")),1),t(),n("div",k,[l(s(p),{position:"right"},{content:o(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:o(()=>[n("div",z,i(e.$t("ui.tooltip.usage.right")),1),t()]),_:1}),t(),l(a,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t()])]),t(),n("section",null,[n("h2",null,i(e.$t("ui.tooltip.usage.clickable")),1),t(),n("div",B,[l(s(p),{clickable:""},{content:o(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:o(()=>[n("div",C,i(e.$t("ui.tooltip.label.button")),1),t()]),_:1}),t(),l(a,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t()])]),t(),n("section",null,[n("h2",null,i(e.$t("ui.tooltip.usage.delay")),1),t(),n("div",w,[l(s(p),{delay:1e3},{content:o(()=>[t(i(e.$t("ui.tooltip.content")),1)]),default:o(()=>[n("div",N,i(e.$t("ui.tooltip.label.delay")),1),t()]),_:1}),t(),l(a,{language:"html-vue"},{default:o(()=>[t(`
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
        `)]),_:1}),t()])])]),_:1},8,["title"])}}});export{P as default};
