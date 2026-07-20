import{D as e,E as t,On as n,St as r,_ as i,k as a,mt as o,qt as s,tr as c,v as l}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{n as u,o as d}from"./PrefabsTechVue3UI.es-CXZdzPpN.js";import{t as f}from"./ComponentDocumentation-BPcopVAa.js";import{t as p}from"./UiPage-3Ir0VIur.js";var m={class:`section-content`},h={class:`popup-title`},g={class:`popup-body`},_={class:`section-content`},v={class:`section-content`},y={class:`section-content`},b={class:`section-content`},x={class:`section-content`},S=a({name:`PopupDemo`,setup(a){let S=[{description:`Emitted when the user clicks outside the popup.`,name:`onClickOutside`,payload:`-`}],C=[{default:`"popup"`,description:`Aria label for accessibility, used on the trigger element.`,prop:`ariaLabel`,type:`String`},{default:`10`,description:`Spacing in pixels between the trigger element and popup content.`,prop:`offset`,type:`Number`},{default:`-`,description:"Supported position of the popup (`top`, `bottom`, `left`, or `right`).",prop:`position`,type:`String`}],w=[{description:`Content to be shown in the popup.`,name:`content`},{description:`The trigger element that opens the popup.`,name:`default`}];return(a,T)=>{let E=r(`SshPre`);return o(),l(p,{subtitle:a.$t(`ui.popup.subtitle`),title:a.$t(`ui.popup.title`),class:`demo`},{default:s(()=>[i(`section`,null,[i(`h2`,null,c(a.$t(`ui.popup.usage.basic`)),1),T[4]||=t(),i(`div`,m,[e(n(u),null,{content:s(()=>[i(`h3`,h,c(a.$t(`ui.popup.title`)),1),T[0]||=t(),i(`div`,g,c(a.$t(`ui.popup.content`)),1)]),default:s(()=>[e(n(d),{label:a.$t(`ui.popup.label.button`),severity:`success`},null,8,[`label`]),T[1]||=t()]),_:1}),T[3]||=t(),e(E,{language:`html-vue`},{default:s(()=>[...T[2]||=[t(`
          <template>
            <Popup>
              <ButtonElement
                :label="Click me"
                severity="success"
              />

              <template #content>
                <h3 class="popup-title">Popup</h3>
                <div class="popup-body">This is a popup</div>
              </template>
            </Popup>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Popup } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),T[25]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.popup.usage.withI18n`)),1),T[8]||=t(),i(`div`,_,[e(n(u),null,{content:s(()=>[t(c(a.$t(`ui.popup.content`)),1)]),default:s(()=>[e(n(d),{label:a.$t(`ui.popup.label.button`),severity:`success`},null,8,[`label`]),T[5]||=t()]),_:1}),T[7]||=t(),e(E,{language:`html-vue`},{default:s(()=>[...T[6]||=[t(`
          <template>
            <Popup>
              <ButtonElement
                :label="t('ui.popup.label.button')"
                severity="success"
              />
              <template #content>
              {{ t("ui.popup.content") }}
              </template>
            </Popup>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Popup } from "@prefabs.tech/vue3-ui";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `,-1)]]),_:1})])]),T[26]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.popup.usage.top`)),1),T[12]||=t(),i(`div`,v,[e(n(u),{position:`top`},{content:s(()=>[t(c(a.$t(`ui.popup.content`)),1)]),default:s(()=>[e(n(d),{label:a.$t(`ui.popup.label.show`),severity:`success`},null,8,[`label`]),T[9]||=t()]),_:1}),T[11]||=t(),e(E,{language:`html-vue`},{default:s(()=>[...T[10]||=[t(`
          <template>
            <Popup position="top">
              <ButtonElement
                :label="Show"
                severity="success"
              />
              <template #content>
                This is a popup
              </template>
            </Popup>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Popup } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),T[27]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.popup.usage.bottom`)),1),T[16]||=t(),i(`div`,y,[e(n(u),{position:`bottom`},{content:s(()=>[t(c(a.$t(`ui.popup.content`)),1)]),default:s(()=>[e(n(d),{label:a.$t(`ui.popup.label.show`),severity:`success`},null,8,[`label`]),T[13]||=t()]),_:1}),T[15]||=t(),e(E,{language:`html-vue`},{default:s(()=>[...T[14]||=[t(`
          <template>
            <Popup position="bottom">
              <ButtonElement
                :label="Show"
                severity="success"
              />
              <template #content>
                This is a popup
              </template>
            </Popup>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Popup } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),T[28]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.popup.usage.left`)),1),T[20]||=t(),i(`div`,b,[e(n(u),{position:`left`},{content:s(()=>[t(c(a.$t(`ui.popup.content`)),1)]),default:s(()=>[e(n(d),{label:a.$t(`ui.popup.label.show`),severity:`success`},null,8,[`label`]),T[17]||=t()]),_:1}),T[19]||=t(),e(E,{language:`html-vue`},{default:s(()=>[...T[18]||=[t(`
          <template>
            <Popup position="left">
              <ButtonElement
                :label="Show"
                severity="success"
              />
              <template #content>
                This is a popup
              </template>
            </Popup>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Popup } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),T[29]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.popup.usage.right`)),1),T[24]||=t(),i(`div`,x,[e(n(u),{position:`right`},{content:s(()=>[t(c(a.$t(`ui.popup.content`)),1)]),default:s(()=>[e(n(d),{label:a.$t(`ui.popup.label.show`),severity:`success`},null,8,[`label`]),T[21]||=t()]),_:1}),T[23]||=t(),e(E,{language:`html-vue`},{default:s(()=>[...T[22]||=[t(`
          <template>
            <Popup position="right">
              <ButtonElement
                :label="Show"
                severity="success"
              />
              <template #content>
                This is a popup
              </template>
            </Popup>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Popup } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),T[30]||=t(),e(f,{"events-data":S,"props-data":C,"props-table-title":a.$t(`common.properties`,{value:`PopupProperties`}),"slots-data":w},null,8,[`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}});export{S as default};