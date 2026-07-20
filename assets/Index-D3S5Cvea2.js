import{D as e,E as t,On as n,St as r,_ as i,k as a,mt as o,qt as s,tr as c,v as l}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{O as u}from"./PrefabsTechVue3UI.es-CXZdzPpN.js";import{t as d}from"./ComponentDocumentation-BPcopVAa.js";import{t as f}from"./UiPage-3Ir0VIur.js";var p={class:`section-content`},m={class:`content`},h={class:`section-content`},g={class:`content`},_={class:`section-content`},v={class:`content`},y={class:`section-content`},b={class:`title`},x={class:`content`},S={class:`footer`},C=a({name:`CardDemo`,setup(a){let C=[{default:`-`,description:`Title text displayed in the card header. Ignored if header slot is provided.`,prop:`title`,type:`String`}],w=[{description:`Default slot for the main body content of the card.`,name:`default`},{description:`Slot for custom footer content, rendered at the bottom of the card.`,name:`footer`},{description:`Slot for custom header content, replaces the default title if provided.`,name:`header`}];return(a,T)=>{let E=r(`SshPre`);return o(),l(f,{subtitle:a.$t(`ui.card.subtitle`),title:a.$t(`ui.card.title`),class:`demo`},{default:s(()=>[i(`section`,null,[i(`h2`,null,c(a.$t(`ui.card.usage.basic`)),1),T[2]||=t(),i(`div`,p,[e(n(u),null,{default:s(()=>[i(`p`,m,c(a.$t(`ui.card.content`)),1)]),_:1}),T[1]||=t(),e(E,{language:`html-vue`},{default:s(()=>[...T[0]||=[t(`
          <template>
            <Card>
              <p>
                ...
              </p>
            </Card>
          </template>

          <script setup lang="ts">
          import { Card } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),T[14]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.card.usage.withTitle`)),1),T[5]||=t(),i(`div`,h,[e(n(u),{title:a.$t(`ui.card.headerContent`)},{default:s(()=>[i(`p`,g,c(a.$t(`ui.card.content`)),1)]),_:1},8,[`title`]),T[4]||=t(),e(E,{language:`html-vue`},{default:s(()=>[...T[3]||=[t(`
          <template>
            <Card title="Lorem ipsum">
              <p>
                ...
              </p>
            </Card>
          </template>

          <script setup lang="ts">
          import { Card } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),T[15]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.card.usage.withI18n`)),1),T[8]||=t(),i(`div`,_,[e(n(u),{title:a.$t(`ui.card.headerContent`)},{default:s(()=>[i(`p`,v,c(a.$t(`ui.card.content`)),1)]),_:1},8,[`title`]),T[7]||=t(),e(E,{language:`html-vue`},{default:s(()=>[...T[6]||=[t(`
          <template>
            <Card :title="t('ui.card.headerContent')">
              <p>
                {{ t('ui.card.content') }}
              </p>
            </Card>
          </template>

          <script setup lang="ts">
          import { Card } from "@prefabs.tech/vue3-ui";

          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `,-1)]]),_:1})])]),T[16]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.card.usage.slots`)),1),T[13]||=t(),i(`div`,y,[e(n(u),null,{header:s(()=>[i(`h3`,b,c(a.$t(`ui.card.headerContent`)),1)]),footer:s(()=>[i(`div`,S,c(a.$t(`ui.card.footerContent`)),1)]),default:s(()=>[T[9]||=t(),i(`p`,x,c(a.$t(`ui.card.content`)),1),T[10]||=t()]),_:1}),T[12]||=t(),e(E,{language:`html-vue`},{default:s(()=>[...T[11]||=[t(`
          <template>
            <Card>
              <template #header>
                <h3>Lorem ipsum</h3>
              </template>
              <p>
                ...
              </p>
              <template #footer>
                <div class="footer">
                  ...
                </div>
              </template>
            </Card>
          </template>

          <script setup lang="ts">
          import { Card } from "@prefabs.tech/vue3-ui";
          <\/script>
        `,-1)]]),_:1})])]),T[17]||=t(),e(d,{"props-data":C,"props-table-title":a.$t(`common.properties`,{value:`CardProperties`}),"slots-data":w},null,8,[`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}});export{C as default};