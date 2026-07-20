import{D as e,E as t,On as n,St as r,_ as i,k as a,mt as o,qt as s,tr as c,v as l}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{d as u}from"./PrefabsTechVue3UI.es-CXZdzPpN.js";import{t as d}from"./ComponentDocumentation-BPcopVAa.js";import{t as f}from"./UiPage-3Ir0VIur.js";var p={class:`section-content`},m={class:`content-wrapper`},h={class:`section-content`},g={class:`content-wrapper vertical`},_=a({name:`DividerDemo`,setup(a){let _=`Programming isn’t about what you know; it’s about what you can figure out.`,v=`Code is read much more often than it is written.`,y=`The most dangerous phrase in the language is, ‘We’ve always done it this way.'`,b=[{default:`"horizontal"`,description:`Sets the direction of the divider.`,prop:`orientation`,type:`"horizontal" | "vertical"`}];return(a,x)=>{let S=r(`SshPre`);return o(),l(f,{subtitle:a.$t(`ui.divider.subtitle`),title:a.$t(`ui.divider.title`),class:`demo`},{default:s(()=>[i(`section`,null,[i(`h2`,null,c(a.$t(`ui.divider.usage.horizontal`)),1),x[6]||=t(),i(`div`,p,[i(`div`,m,[i(`p`,{class:`content-item`},c(_)),x[0]||=t(),e(n(u)),x[1]||=t(),i(`p`,{class:`content-item`},c(v)),x[2]||=t(),e(n(u),{orientation:`horizontal`}),x[3]||=t(),i(`p`,{class:`content-item`},c(y))]),x[5]||=t(),e(S,{language:`html-vue`},{default:s(()=>[...x[4]||=[t(`
          <template>
            <div class="content-wrapper">
              <p class="content-item">
                Programming isn’t about what you know; it’s about what you can figure out.
              </p>
              <Divider />
              <p class="content-item">
                Code is read much more often than it is written.
              </p>
              <Divider orientation="horizontal" />
              <p class="content-item">
                The most dangerous phrase in the language is, ‘We’ve always done it this way.'
              </p>
            </div>
          </template>

          <script setup lang="ts">
          import { Divider } from "@prefabs.tech/vue3-ui";
          <\/script>

          <style lang="css">
          .content-wrapper {
            border: 1px solid #b5b5b5;
            border-radius: 0.3rem;
            display: flex;
            flex-direction: column;
            padding: 1rem 0.75rem;
          }
          </style>
        `,-1)]]),_:1})])]),x[14]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.divider.usage.vertical`)),1),x[13]||=t(),i(`div`,h,[i(`div`,g,[i(`p`,{class:`content-item`},c(_)),x[7]||=t(),e(n(u),{orientation:`vertical`}),x[8]||=t(),i(`p`,{class:`content-item`},c(v)),x[9]||=t(),e(n(u),{orientation:`vertical`}),x[10]||=t(),i(`p`,{class:`content-item`},c(y))]),x[12]||=t(),e(S,{language:`html-vue`},{default:s(()=>[...x[11]||=[t(`
          <template>
            <div class="content-wrapper vertical">
              <p class="content-item">
                Programming isn’t about what you know; it’s about what you can figure out.
              </p>
              <Divider orientation="vertical" />
              <p class="content-item">
                Code is read much more often than it is written.
              </p>
              <Divider orientation="vertical" />
              <p class="content-item">
                The most dangerous phrase in the language is, ‘We’ve always done it this way.'
              </p>
            </div>
          </template>

          <script setup lang="ts">
          import { Divider } from "@prefabs.tech/vue3-ui";
          <\/script>

          <style lang="css">
          .content-wrapper {
            border: 1px solid #b5b5b5;
            border-radius: 0.3rem;
            display: flex;
            flex-direction: column;
            padding: 1rem 0.75rem;
          }

          .content-wrapper > .content-item {
            width: 100%;
          }

          .content-wrapper.vertical {
            flex-direction: row;
          }
          </style>
        `,-1)]]),_:1})])]),x[15]||=t(),e(d,{"props-data":b,"props-table-title":a.$t(`common.properties`,{value:`DividerProperties`})},null,8,[`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}});export{_ as default};