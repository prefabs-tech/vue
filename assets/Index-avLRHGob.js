import{d as u,K as g,f as C,o as d,i as t,D as i,g as a,t as m,h as o,u as r,Y as f,a as L,F as k,z as v,O as b,v as $}from"./index-CSsCuN9S.js";import{_}from"./UiPage.vue_vue_type_style_index_0_lang-D8MPKkjX.js";const x={class:"section-content"},G=u({__name:"Index",setup(y){const p=[{name:"Card 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"}];return(n,e)=>{const c=g("SshPre");return d(),C(_,{title:n.$t("ui.gridContainer.title"),class:"demo"},{toolbar:t(()=>[o(r($),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=s=>n.$router.push("/ui"))},null,8,["label"])]),default:t(()=>[e[4]||(e[4]=i()),a("section",null,[a("h2",null,m(n.$t("ui.gridContainer.usage.basic")),1),e[3]||(e[3]=i()),a("div",x,[o(r(f),null,{default:t(()=>[(d(),L(k,null,v(p,(s,l)=>o(r(b),{key:l+"-"+s.name,title:s.name},{default:t(()=>[i(m(s.description),1)]),_:2},1032,["title"])),64))]),_:1}),e[2]||(e[2]=i()),o(c,{language:"html-vue"},{default:t(()=>e[1]||(e[1]=[i(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{G as default};
