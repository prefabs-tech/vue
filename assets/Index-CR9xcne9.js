import{d as g,J as C,e as f,o,i,f as n,B as t,h as s,t as d,u as m,R as L,a as _,F as k,y as v,O as b}from"./index-CJbrnafS.js";import{_ as B}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-D7ESYrvb.js";import{_ as $}from"./UiPage.vue_vue_type_style_index_0_lang-Cbrf14Fv.js";import"./PrefabsTechVue3TanstackTable.es-Bmjd-iKe.js";import"./PrefabsTechVue3Form.es-CI4G5F8T.js";const x={class:"section-content"},h=g({__name:"Index",setup(y){const c=[{name:"Card 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"}],p=[{name:"default",description:"Default slot to render grid items inside the container."}];return(a,e)=>{const u=C("SshPre");return o(),f($,{subtitle:a.$t("ui.gridContainer.subtitle"),title:a.$t("ui.gridContainer.title"),class:"demo"},{default:i(()=>[n("section",null,[n("h2",null,d(a.$t("ui.gridContainer.usage.basic")),1),e[2]||(e[2]=t()),n("div",x,[s(m(L),null,{default:i(()=>[(o(),_(k,null,v(c,(r,l)=>s(m(b),{key:l+"-"+r.name,title:r.name},{default:i(()=>[t(d(r.description),1)]),_:2},1032,["title"])),64))]),_:1}),e[1]||(e[1]=t()),s(u,{language:"html-vue"},{default:i(()=>e[0]||(e[0]=[t(`
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
        `)])),_:1})])]),e[3]||(e[3]=t()),s(B,{"slots-data":p})]),_:1},8,["subtitle","title"])}}});export{h as default};
