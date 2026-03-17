import{d as g,r as C,o,h as f,w as i,a as n,t as d,b as t,e as s,f as m,Q as _,c as L,F as k,s as b,p as v}from"./index-8hfrWEeB.js";import{_ as $}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-Cp1TYnAN.js";import{_ as B}from"./UiPage.vue_vue_type_style_index_0_lang-CYhBGBPh.js";import"./PrefabsTechVue3TanstackTable.es-r7GKZhH-.js";const D={class:"section-content"},G={name:"GridContainerDemo"},V=g({...G,setup(w){const c=[{name:"Card 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"}],p=[{name:"default",description:"Default slot to render grid items inside the container."}];return(a,e)=>{const l=C("SshPre");return o(),f(B,{subtitle:a.$t("ui.gridContainer.subtitle"),title:a.$t("ui.gridContainer.title"),class:"demo"},{default:i(()=>[n("section",null,[n("h2",null,d(a.$t("ui.gridContainer.usage.basic")),1),e[2]||(e[2]=t()),n("div",D,[s(m(_),null,{default:i(()=>[(o(),L(k,null,b(c,(r,u)=>s(m(v),{key:u+"-"+r.name,title:r.name},{default:i(()=>[t(d(r.description),1)]),_:2},1032,["title"])),64))]),_:1}),e[1]||(e[1]=t()),s(l,{language:"html-vue"},{default:i(()=>[...e[0]||(e[0]=[t(`
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
        `,-1)])]),_:1})])]),e[3]||(e[3]=t()),s($,{"slots-data":p})]),_:1},8,["subtitle","title"])}}});export{V as default};
