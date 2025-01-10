import{d as g,K as s,o as c,c as C,w as t,L as i,C as e,M as o,f as r,E as d,ax as _,a as f,F as k,b as L,ag as h}from"./index-8e1c3ab6-d459558c.js";import{_ as b}from"./UiPage.vue_vue_type_style_index_0_lang-31abb775.js";const v={class:"section-content"},G=g({__name:"Index",setup(x){const m=[{name:"Card 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"}];return(a,B)=>{const p=s("router-link"),l=s("SshPre");return c(),C(b,{title:a.$t("ui.gridContainer.title"),class:"demo"},{toolbar:t(()=>[i(p,{to:{name:"ui"},class:"back"},{default:t(()=>[e(o(a.$t("common.back")),1)]),_:1})]),default:t(()=>[e(),r("section",null,[r("h2",null,o(a.$t("ui.gridContainer.usage.basic")),1),e(),r("div",v,[i(d(_),null,{default:t(()=>[(c(),f(k,null,L(m,(n,u)=>i(d(h),{key:u+"-"+n.name,title:n.name},{default:t(()=>[e(o(n.description),1)]),_:2},1032,["title"])),64))]),_:1}),e(),i(l,{language:"html-vue"},{default:t(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{G as default};
