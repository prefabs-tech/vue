import{D as e,E as t,On as n,St as r,_ as i,b as a,bt as o,k as s,mt as c,o as l,qt as u,tr as d,v as f}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{O as p,b as m}from"./PrefabsTechVue3UI.es-CXZdzPpN.js";import{t as h}from"./ComponentDocumentation-BPcopVAa.js";import{t as g}from"./UiPage-3Ir0VIur.js";var _={class:`section-content`},v=s({name:`GridContainerDemo`,setup(s){let v=[{description:`Lorem ipsum dolor sit amet, consectetur adipiscing`,name:`Card 1`},{description:`Lorem ipsum dolor sit amet, consectetur adipiscing`,name:`Card 2`},{description:`Lorem ipsum dolor sit amet, consectetur adipiscing`,name:`Card 3`},{description:`Lorem ipsum dolor sit amet, consectetur adipiscing`,name:`Card 4`},{description:`Lorem ipsum dolor sit amet, consectetur adipiscing`,name:`Card 5`}],y=[{description:`Default slot to render grid items inside the container.`,name:`default`}];return(s,b)=>{let x=r(`SshPre`);return c(),f(g,{subtitle:s.$t(`ui.gridContainer.subtitle`),title:s.$t(`ui.gridContainer.title`),class:`demo`},{default:u(()=>[i(`section`,null,[i(`h2`,null,d(s.$t(`ui.gridContainer.usage.basic`)),1),b[2]||=t(),i(`div`,_,[e(n(m),null,{default:u(()=>[(c(),a(l,null,o(v,(r,i)=>e(n(p),{key:i+`-`+r.name,title:r.name},{default:u(()=>[t(d(r.description),1)]),_:2},1032,[`title`])),64))]),_:1}),b[1]||=t(),e(x,{language:`html-vue`},{default:u(()=>[...b[0]||=[t(`
          <template>
            <GridContainer>
              <Card
                v-for="(menu, index) in packages"
                :key="index + '-' + menu.name"
                :title="menu.name"
              >
                {{ menu.description }}
              </Card>
            </GridContainer>
          </template>

          <script setup lang="ts">
          import { Card, GridContainer } from "@prefabs.tech/vue3-ui";

          const packages = [
            {
              name: "Card 1",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },
            {
              name: "Card 2",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },
            {
              name: "Card 3",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },

            {
              name: "Card 4",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },
            {
              name: "Card 5",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            },
          ];
          <\/script>
        `,-1)]]),_:1})])]),b[3]||=t(),e(h,{"slots-data":y})]),_:1},8,[`subtitle`,`title`])}}});export{v as default};