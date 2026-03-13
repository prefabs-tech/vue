import{d as g,M as C,o,e as f,f as i,h as n,t as d,z as t,a as s,u as m,S as _,c as L,F as k,s as b,Q as v}from"./index-C7ch2MF9.js";import{_ as $}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-ClDG4-uz.js";import{_ as B}from"./UiPage.vue_vue_type_style_index_0_lang-DZ2Xpq-s.js";import"./PrefabsTechVue3TanstackTable.es-BbS_od31.js";import"./PrefabsTechVue3Form.es-BmJfIqTO.js";const D={class:"section-content"},G={name:"GridContainerDemo"},w=g({...G,setup(S){const c=[{name:"Card 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"}],p=[{name:"default",description:"Default slot to render grid items inside the container."}];return(a,e)=>{const u=C("SshPre");return o(),f(B,{subtitle:a.$t("ui.gridContainer.subtitle"),title:a.$t("ui.gridContainer.title"),class:"demo"},{default:i(()=>[n("section",null,[n("h2",null,d(a.$t("ui.gridContainer.usage.basic")),1),e[2]||(e[2]=t()),n("div",D,[s(m(_),null,{default:i(()=>[(o(),L(k,null,b(c,(r,l)=>s(m(v),{key:l+"-"+r.name,title:r.name},{default:i(()=>[t(d(r.description),1)]),_:2},1032,["title"])),64))]),_:1}),e[1]||(e[1]=t()),s(u,{language:"html-vue"},{default:i(()=>[...e[0]||(e[0]=[t(`
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
        `,-1)])]),_:1})])]),e[3]||(e[3]=t()),s($,{"slots-data":p})]),_:1},8,["subtitle","title"])}}});export{w as default};
