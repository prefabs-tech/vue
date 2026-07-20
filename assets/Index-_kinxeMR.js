import{D as e,E as t,On as n,St as r,_ as i,k as a,mt as o,qt as s,tr as c,v as l}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{m as u,o as d}from"./PrefabsTechVue3UI.es-CXZdzPpN.js";import{t as f}from"./ComponentDocumentation-BPcopVAa.js";import{t as p}from"./UiPage-3Ir0VIur.js";var m={class:`section-content`},h={class:`section-content`},g={class:`trigger`},_={class:`section-content`},v={class:`trigger`},y={class:`section-content`},b={class:`trigger`},x={class:`section-content`},S={class:`trigger`},C={class:`section-content`},w={class:`trigger`},T={class:`section-content`},E={class:`trigger`},D=a({name:`TooltipDemo`,setup(a){let D=[{default:`"tooltip"`,description:`The accessible label for the tooltip container.`,prop:`ariaLabel`,type:`String`},{default:`false`,description:`Toggle the tooltip visibility on click.`,prop:`clickable`,type:`Boolean`},{default:`100`,description:`Delay in milliseconds before the tooltip appears on hover.`,prop:`delay`,type:`Number`},{default:`10`,description:`The spacing in pixels between the trigger and the tooltip.`,prop:`offset`,type:`Number`},{default:`-`,description:`Supported position of the tooltip relative to the trigger.`,prop:`position`,type:`"top" | "bottom" | "left" | "right"`}],O=[{description:`The default slot used as the tooltip trigger element.`,name:`default`},{description:`Slot used for the tooltip content that is displayed on hover or click.`,name:`content`}];return(a,k)=>{let A=r(`SshPre`);return o(),l(p,{subtitle:a.$t(`ui.tooltip.subtitle`),title:a.$t(`ui.tooltip.title`),class:`demo`},{default:s(()=>[i(`section`,null,[i(`h2`,null,c(a.$t(`ui.tooltip.usage.basic`)),1),k[3]||=t(),i(`div`,m,[e(n(u),null,{content:s(()=>[t(c(a.$t(`ui.tooltip.content`)),1)]),default:s(()=>[e(n(d),{label:a.$t(`ui.tooltip.label.button`),severity:`success`},null,8,[`label`]),k[0]||=t()]),_:1}),k[2]||=t(),e(A,{language:`html-vue`},{default:s(()=>[...k[1]||=[t(`
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
        `,-1)]]),_:1})])]),k[28]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.tooltip.usage.top`)),1),k[7]||=t(),i(`div`,h,[e(n(u),{position:`top`},{content:s(()=>[t(c(a.$t(`ui.tooltip.content`)),1)]),default:s(()=>[i(`div`,g,c(a.$t(`ui.tooltip.label.top`)),1),k[4]||=t()]),_:1}),k[6]||=t(),e(A,{language:`html-vue`},{default:s(()=>[...k[5]||=[t(`
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
        `,-1)]]),_:1})])]),k[29]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.tooltip.usage.bottom`)),1),k[11]||=t(),i(`div`,_,[e(n(u),{position:`bottom`},{content:s(()=>[t(c(a.$t(`ui.tooltip.content`)),1)]),default:s(()=>[i(`div`,v,c(a.$t(`ui.tooltip.label.bottom`)),1),k[8]||=t()]),_:1}),k[10]||=t(),e(A,{language:`html-vue`},{default:s(()=>[...k[9]||=[t(`
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
        `,-1)]]),_:1})])]),k[30]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.tooltip.usage.left`)),1),k[15]||=t(),i(`div`,y,[e(n(u),{position:`left`},{content:s(()=>[t(c(a.$t(`ui.tooltip.content`)),1)]),default:s(()=>[i(`div`,b,c(a.$t(`ui.tooltip.label.left`)),1),k[12]||=t()]),_:1}),k[14]||=t(),e(A,{language:`html-vue`},{default:s(()=>[...k[13]||=[t(`
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
        `,-1)]]),_:1})])]),k[31]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.tooltip.usage.right`)),1),k[19]||=t(),i(`div`,x,[e(n(u),{position:`right`},{content:s(()=>[t(c(a.$t(`ui.tooltip.content`)),1)]),default:s(()=>[i(`div`,S,c(a.$t(`ui.tooltip.label.right`)),1),k[16]||=t()]),_:1}),k[18]||=t(),e(A,{language:`html-vue`},{default:s(()=>[...k[17]||=[t(`
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
        `,-1)]]),_:1})])]),k[32]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.tooltip.usage.clickable`)),1),k[23]||=t(),i(`div`,C,[e(n(u),{clickable:``},{content:s(()=>[t(c(a.$t(`ui.tooltip.content`)),1)]),default:s(()=>[i(`div`,w,c(a.$t(`ui.tooltip.label.button`)),1),k[20]||=t()]),_:1}),k[22]||=t(),e(A,{language:`html-vue`},{default:s(()=>[...k[21]||=[t(`
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
        `,-1)]]),_:1})])]),k[33]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.tooltip.usage.delay`)),1),k[27]||=t(),i(`div`,T,[e(n(u),{delay:1e3},{content:s(()=>[t(c(a.$t(`ui.tooltip.content`)),1)]),default:s(()=>[i(`div`,E,c(a.$t(`ui.tooltip.label.delay`)),1),k[24]||=t()]),_:1}),k[26]||=t(),e(A,{language:`html-vue`},{default:s(()=>[...k[25]||=[t(`
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
        `,-1)]]),_:1})])]),k[34]||=t(),e(f,{"props-data":D,"props-table-title":a.$t(`common.properties`,{value:`PopupProperties`}),"slots-data":O},null,8,[`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}});export{D as default};