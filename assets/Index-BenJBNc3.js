import{d as g,I as f,e as v,o as b,i as l,E as o,f as n,g as s,t as e,u as p,G as a,x as u}from"./index-Bd4j2-rg.js";import{_ as T}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-O_HYUQBU.js";import{_ as $}from"./UiPage.vue_vue_type_style_index_0_lang-K9J_RM37.js";import"./DzangolabVue3TanstackTable.es-Bq6qCDng.js";import"./DzangolabVue3Form.es-DDOaj7ZK.js";const y={class:"section-content"},k={class:"section-content"},z={class:"trigger"},B={class:"section-content"},S={class:"trigger"},C={class:"section-content"},D={class:"trigger"},N={class:"section-content"},P={class:"trigger"},w={class:"section-content"},E={class:"trigger"},V={class:"section-content"},I={class:"trigger"},F=g({__name:"Index",setup(L){const d=[{default:'"tooltip"',description:"The accessible label for the tooltip container.",prop:"ariaLabel",type:"String"},{default:"false",description:"Toggle the tooltip visibility on click.",prop:"clickable",type:"Boolean"},{default:"100",description:"Delay in milliseconds before the tooltip appears on hover.",prop:"delay",type:"Number"},{default:"10",description:"The spacing in pixels between the trigger and the tooltip.",prop:"offset",type:"Number"},{default:"-",description:"Supported position of the tooltip relative to the trigger.",prop:"position",type:'"top" | "bottom" | "left" | "right"'}],m=[{description:"The default slot used as the tooltip trigger element.",name:"default"},{description:"Slot used for the tooltip content that is displayed on hover or click.",name:"content"}];return(i,t)=>{const r=f("SshPre");return b(),v($,{"sub-title":i.$t("ui.tooltip.subtitle"),title:i.$t("ui.tooltip.title"),class:"demo"},{toolbar:l(()=>[s(p(u),{label:i.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=G=>i.$router.push("/ui"))},null,8,["label"])]),default:l(()=>[t[29]||(t[29]=o()),n("section",null,[n("h2",null,e(i.$t("ui.tooltip.usage.basic")),1),t[4]||(t[4]=o()),n("div",y,[s(p(a),null,{content:l(()=>[o(e(i.$t("ui.tooltip.content")),1)]),default:l(()=>[s(p(u),{label:i.$t("ui.tooltip.label.button"),severity:"success"},null,8,["label"]),t[1]||(t[1]=o())]),_:1}),t[3]||(t[3]=o()),s(r,{language:"html-vue"},{default:l(()=>t[2]||(t[2]=[o(`
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
        `)])),_:1})])]),t[30]||(t[30]=o()),n("section",null,[n("h2",null,e(i.$t("ui.tooltip.usage.top")),1),t[8]||(t[8]=o()),n("div",k,[s(p(a),{position:"top"},{content:l(()=>[o(e(i.$t("ui.tooltip.content")),1)]),default:l(()=>[n("div",z,e(i.$t("ui.tooltip.label.top")),1),t[5]||(t[5]=o())]),_:1}),t[7]||(t[7]=o()),s(r,{language:"html-vue"},{default:l(()=>t[6]||(t[6]=[o(`
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
        `)])),_:1})])]),t[31]||(t[31]=o()),n("section",null,[n("h2",null,e(i.$t("ui.tooltip.usage.bottom")),1),t[12]||(t[12]=o()),n("div",B,[s(p(a),{position:"bottom"},{content:l(()=>[o(e(i.$t("ui.tooltip.content")),1)]),default:l(()=>[n("div",S,e(i.$t("ui.tooltip.label.bottom")),1),t[9]||(t[9]=o())]),_:1}),t[11]||(t[11]=o()),s(r,{language:"html-vue"},{default:l(()=>t[10]||(t[10]=[o(`
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
        `)])),_:1})])]),t[32]||(t[32]=o()),n("section",null,[n("h2",null,e(i.$t("ui.tooltip.usage.left")),1),t[16]||(t[16]=o()),n("div",C,[s(p(a),{position:"left"},{content:l(()=>[o(e(i.$t("ui.tooltip.content")),1)]),default:l(()=>[n("div",D,e(i.$t("ui.tooltip.label.left")),1),t[13]||(t[13]=o())]),_:1}),t[15]||(t[15]=o()),s(r,{language:"html-vue"},{default:l(()=>t[14]||(t[14]=[o(`
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
        `)])),_:1})])]),t[33]||(t[33]=o()),n("section",null,[n("h2",null,e(i.$t("ui.tooltip.usage.right")),1),t[20]||(t[20]=o()),n("div",N,[s(p(a),{position:"right"},{content:l(()=>[o(e(i.$t("ui.tooltip.content")),1)]),default:l(()=>[n("div",P,e(i.$t("ui.tooltip.label.right")),1),t[17]||(t[17]=o())]),_:1}),t[19]||(t[19]=o()),s(r,{language:"html-vue"},{default:l(()=>t[18]||(t[18]=[o(`
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
        `)])),_:1})])]),t[34]||(t[34]=o()),n("section",null,[n("h2",null,e(i.$t("ui.tooltip.usage.clickable")),1),t[24]||(t[24]=o()),n("div",w,[s(p(a),{clickable:""},{content:l(()=>[o(e(i.$t("ui.tooltip.content")),1)]),default:l(()=>[n("div",E,e(i.$t("ui.tooltip.label.button")),1),t[21]||(t[21]=o())]),_:1}),t[23]||(t[23]=o()),s(r,{language:"html-vue"},{default:l(()=>t[22]||(t[22]=[o(`
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
        `)])),_:1})])]),t[35]||(t[35]=o()),n("section",null,[n("h2",null,e(i.$t("ui.tooltip.usage.delay")),1),t[28]||(t[28]=o()),n("div",V,[s(p(a),{delay:1e3},{content:l(()=>[o(e(i.$t("ui.tooltip.content")),1)]),default:l(()=>[n("div",I,e(i.$t("ui.tooltip.label.delay")),1),t[25]||(t[25]=o())]),_:1}),t[27]||(t[27]=o()),s(r,{language:"html-vue"},{default:l(()=>t[26]||(t[26]=[o(`
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
        `)])),_:1})])]),t[36]||(t[36]=o()),s(T,{"props-data":d,"props-table-title":i.$t("common.properties",{value:"PopupProperties"}),"slots-data":m},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{F as default};
