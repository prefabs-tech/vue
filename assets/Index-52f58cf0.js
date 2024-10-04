import{d as u,r as d,o as p,c as m,w as a,a as t,t as s,f as e,g as o,h as i,a6 as r}from"./index-305334af.js";const h={class:"section-content"},_={class:"content"},f={class:"section-content"},g={class:"content"},v={class:"section-content"},C={class:"content"},$={class:"section-content"},b={class:"title"},y={class:"content"},z={class:"footer"},I={class:"section-content"},w={class:"title"},P={class:"content"},S={class:"footer"},V=u({__name:"Index",setup(B){return(n,L)=>{const l=d("SshPre"),c=d("Page");return p(),m(c,{title:n.$t("ui.card.title"),class:"demo"},{default:a(()=>[t("section",null,[t("h2",null,s(n.$t("ui.card.usage.basic")),1),e(),t("div",h,[o(l,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Card>
              <p>
                ...
              </p>
            </Card>
          </template>

          <script setup lang="ts">
          import { Card } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),o(i(r),null,{default:a(()=>[t("p",_,s(n.$t("ui.card.content")),1)]),_:1})])]),e(),t("section",null,[t("h2",null,s(n.$t("ui.card.usage.withTitle")),1),e(),t("div",f,[o(l,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Card title="Lorem ipsum">
              <p>
                ...
              </p>
            </Card>
          </template>

          <script setup lang="ts">
          import { Card } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),o(i(r),{title:n.$t("ui.card.headerContent")},{default:a(()=>[t("p",g,s(n.$t("ui.card.content")),1)]),_:1},8,["title"])])]),e(),t("section",null,[t("h2",null,s(n.$t("ui.card.usage.withI18n")),1),e(),t("div",v,[o(l,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Card :title="t('ui.card.headerContent')">
              <p>
                {{ t('ui.card.content') }}
              </p>
            </Card>
          </template>

          <script setup lang="ts">
          import { Card } from "@dzangolab/vue3-ui";

          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();
          <\/script>
        `)]),_:1}),e(),o(i(r),{title:n.$t("ui.card.headerContent")},{default:a(()=>[t("p",C,s(n.$t("ui.card.content")),1)]),_:1},8,["title"])])]),e(),t("section",null,[t("h2",null,s(n.$t("ui.card.usage.slots")),1),e(),t("div",$,[o(l,{language:"html-vue"},{default:a(()=>[e(`
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
          import { Card } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),o(i(r),null,{header:a(()=>[t("h3",b,s(n.$t("ui.card.headerContent")),1)]),footer:a(()=>[t("div",z,s(n.$t("ui.card.footerContent")),1)]),default:a(()=>[e(),t("p",y,s(n.$t("ui.card.content")),1),e()]),_:1})])]),e(),t("section",null,[t("h2",null,s(n.$t("ui.card.usage.customStyle")),1),e(),t("div",I,[o(l,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Card class="custom-style-card">
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
          import { Card } from "@dzangolab/vue3-ui";
          <\/script>
        `)]),_:1}),e(),o(i(r),{class:"custom-style-card"},{header:a(()=>[t("h3",w,s(n.$t("ui.card.headerContent")),1)]),footer:a(()=>[t("div",S,s(n.$t("ui.card.footerContent")),1)]),default:a(()=>[e(),t("p",P,s(n.$t("ui.card.content")),1),e()]),_:1})])])]),_:1},8,["title"])}}});export{V as default};
