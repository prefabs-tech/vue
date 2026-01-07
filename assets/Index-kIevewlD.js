import{d as m,J as g,e as f,o as v,i as e,f as n,B as o,h as s,t as l,u as p,D as u,q as b}from"./index-BD1JkeeG.js";import{_ as T}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CIWiUywF.js";import{_ as $}from"./UiPage.vue_vue_type_style_index_0_lang-CYzTBhJM.js";import"./PrefabsTechVue3TanstackTable.es-CR4-_zCY.js";import"./PrefabsTechVue3Form.es-EvWtY9Xa.js";const y={class:"section-content"},k={class:"section-content"},B={class:"trigger"},D={class:"section-content"},S={class:"trigger"},N={class:"section-content"},C={class:"trigger"},P={class:"section-content"},w={class:"trigger"},V={class:"section-content"},E={class:"trigger"},L={class:"section-content"},q={class:"trigger"},F=m({__name:"Index",setup(I){const a=[{default:'"tooltip"',description:"The accessible label for the tooltip container.",prop:"ariaLabel",type:"String"},{default:"false",description:"Toggle the tooltip visibility on click.",prop:"clickable",type:"Boolean"},{default:"100",description:"Delay in milliseconds before the tooltip appears on hover.",prop:"delay",type:"Number"},{default:"10",description:"The spacing in pixels between the trigger and the tooltip.",prop:"offset",type:"Number"},{default:"-",description:"Supported position of the tooltip relative to the trigger.",prop:"position",type:'"top" | "bottom" | "left" | "right"'}],d=[{description:"The default slot used as the tooltip trigger element.",name:"default"},{description:"Slot used for the tooltip content that is displayed on hover or click.",name:"content"}];return(i,t)=>{const r=g("SshPre");return v(),f($,{subtitle:i.$t("ui.tooltip.subtitle"),title:i.$t("ui.tooltip.title"),class:"demo"},{default:e(()=>[n("section",null,[n("h2",null,l(i.$t("ui.tooltip.usage.basic")),1),t[3]||(t[3]=o()),n("div",y,[s(p(u),null,{content:e(()=>[o(l(i.$t("ui.tooltip.content")),1)]),default:e(()=>[s(p(b),{label:i.$t("ui.tooltip.label.button"),severity:"success"},null,8,["label"]),t[0]||(t[0]=o())]),_:1}),t[2]||(t[2]=o()),s(r,{language:"html-vue"},{default:e(()=>t[1]||(t[1]=[o(`
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
            import { ButtonElement, Tooltip } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[28]||(t[28]=o()),n("section",null,[n("h2",null,l(i.$t("ui.tooltip.usage.top")),1),t[7]||(t[7]=o()),n("div",k,[s(p(u),{position:"top"},{content:e(()=>[o(l(i.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",B,l(i.$t("ui.tooltip.label.top")),1),t[4]||(t[4]=o())]),_:1}),t[6]||(t[6]=o()),s(r,{language:"html-vue"},{default:e(()=>t[5]||(t[5]=[o(`
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
          import { Tooltip } from "@prefabs.tech/vue3-ui";
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
        `)])),_:1})])]),t[29]||(t[29]=o()),n("section",null,[n("h2",null,l(i.$t("ui.tooltip.usage.bottom")),1),t[11]||(t[11]=o()),n("div",D,[s(p(u),{position:"bottom"},{content:e(()=>[o(l(i.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",S,l(i.$t("ui.tooltip.label.bottom")),1),t[8]||(t[8]=o())]),_:1}),t[10]||(t[10]=o()),s(r,{language:"html-vue"},{default:e(()=>t[9]||(t[9]=[o(`
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
          import { Tooltip } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[30]||(t[30]=o()),n("section",null,[n("h2",null,l(i.$t("ui.tooltip.usage.left")),1),t[15]||(t[15]=o()),n("div",N,[s(p(u),{position:"left"},{content:e(()=>[o(l(i.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",C,l(i.$t("ui.tooltip.label.left")),1),t[12]||(t[12]=o())]),_:1}),t[14]||(t[14]=o()),s(r,{language:"html-vue"},{default:e(()=>t[13]||(t[13]=[o(`
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
          import { Tooltip } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[31]||(t[31]=o()),n("section",null,[n("h2",null,l(i.$t("ui.tooltip.usage.right")),1),t[19]||(t[19]=o()),n("div",P,[s(p(u),{position:"right"},{content:e(()=>[o(l(i.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",w,l(i.$t("ui.tooltip.label.right")),1),t[16]||(t[16]=o())]),_:1}),t[18]||(t[18]=o()),s(r,{language:"html-vue"},{default:e(()=>t[17]||(t[17]=[o(`
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
          import { Tooltip } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[32]||(t[32]=o()),n("section",null,[n("h2",null,l(i.$t("ui.tooltip.usage.clickable")),1),t[23]||(t[23]=o()),n("div",V,[s(p(u),{clickable:""},{content:e(()=>[o(l(i.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",E,l(i.$t("ui.tooltip.label.button")),1),t[20]||(t[20]=o())]),_:1}),t[22]||(t[22]=o()),s(r,{language:"html-vue"},{default:e(()=>t[21]||(t[21]=[o(`
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
          import { Tooltip } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[33]||(t[33]=o()),n("section",null,[n("h2",null,l(i.$t("ui.tooltip.usage.delay")),1),t[27]||(t[27]=o()),n("div",L,[s(p(u),{delay:1e3},{content:e(()=>[o(l(i.$t("ui.tooltip.content")),1)]),default:e(()=>[n("div",q,l(i.$t("ui.tooltip.label.delay")),1),t[24]||(t[24]=o())]),_:1}),t[26]||(t[26]=o()),s(r,{language:"html-vue"},{default:e(()=>t[25]||(t[25]=[o(`
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
          import { Tooltip } from "@prefabs.tech/vue3-ui";
          <\/script>
        `)])),_:1})])]),t[34]||(t[34]=o()),s(T,{"props-data":a,"props-table-title":i.$t("common.properties",{value:"PopupProperties"}),"slots-data":d},null,8,["props-table-title"])]),_:1},8,["subtitle","title"])}}});export{F as default};
