import{d as g,K as s,o as c,c as C,w as e,L as i,C as t,M as o,f as r,E as d,ax as _,a as f,F as k,b as L,ag as h}from"./index-137faed7-eb3bdd72.js";import{_ as b}from"./UiPage.vue_vue_type_style_index_0_lang-2b5d74bc.js";const v={class:"section-content"},G=g({__name:"Index",setup(x){const m=[{name:"Card 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"}];return(a,B)=>{const p=s("router-link"),l=s("SshPre");return c(),C(b,{title:a.$t("ui.gridContainer.title"),class:"demo"},{toolbar:e(()=>[i(p,{to:{name:"ui"},class:"back"},{default:e(()=>[t(o(a.$t("common.back")),1)]),_:1})]),default:e(()=>[t(),r("section",null,[r("h2",null,o(a.$t("ui.gridContainer.usage.basic")),1),t(),r("div",v,[i(l,{language:"html-vue"},{default:e(()=>[t(`
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
          import { Card, GridContainer } from "@dzangolab/vue3-ui";

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
        `)]),_:1}),t(),i(d(_),null,{default:e(()=>[(c(),f(k,null,L(m,(n,u)=>i(d(h),{key:u+"-"+n.name,title:n.name},{default:e(()=>[t(o(n.description),1)]),_:2},1032,["title"])),64))]),_:1})])])]),_:1},8,["title"])}}});export{G as default};
