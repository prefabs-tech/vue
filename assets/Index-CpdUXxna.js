import{d as g,N as C,o,e as f,f as i,h as n,t as d,A as t,a as s,u as m,R as L,c as _,F as k,s as $,$ as b}from"./index-DM9wUdee.js";import{_ as v}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CDdMtKGw.js";import{_ as x}from"./UiPage.vue_vue_type_style_index_0_lang-Cx5JgbVi.js";import"./PrefabsTechVue3TanstackTable.es-Cu5UvKBj.js";import"./PrefabsTechVue3Form.es-C9e69xVv.js";const B={class:"section-content"},h=g({__name:"Index",setup(N){const c=[{name:"Card 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"}],p=[{name:"default",description:"Default slot to render grid items inside the container."}];return(r,e)=>{const u=C("SshPre");return o(),f(x,{subtitle:r.$t("ui.gridContainer.subtitle"),title:r.$t("ui.gridContainer.title"),class:"demo"},{default:i(()=>[n("section",null,[n("h2",null,d(r.$t("ui.gridContainer.usage.basic")),1),e[2]||(e[2]=t()),n("div",B,[s(m(L),null,{default:i(()=>[(o(),_(k,null,$(c,(a,l)=>s(m(b),{key:l+"-"+a.name,title:a.name},{default:i(()=>[t(d(a.description),1)]),_:2},1032,["title"])),64))]),_:1}),e[1]||(e[1]=t()),s(u,{language:"html-vue"},{default:i(()=>[...e[0]||(e[0]=[t(`
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
        `,-1)])]),_:1})])]),e[3]||(e[3]=t()),s(v,{"slots-data":p})]),_:1},8,["subtitle","title"])}}});export{h as default};
