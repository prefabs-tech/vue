import{d as u,J as g,o as c,c as C,w as t,K as n,D as s,ao as f,W as e,f as o,L as d,aw as _,a as L,F as k,b as v,ae as b}from"./index-729398ab-97e0bd19.js";import{_ as h}from"./UiPage.vue_vue_type_style_index_0_lang-e133bb3e.js";const $={class:"section-content"},w=u({__name:"Index",setup(x){const m=[{name:"Card 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"},{name:"Card 5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing"}];return(i,r)=>{const l=g("SshPre");return c(),C(h,{title:i.$t("ui.gridContainer.title"),class:"demo"},{toolbar:t(()=>[n(s(f),{label:i.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:r[0]||(r[0]=a=>i.$router.push("/ui"))},null,8,["label"])]),default:t(()=>[e(),o("section",null,[o("h2",null,d(i.$t("ui.gridContainer.usage.basic")),1),e(),o("div",$,[n(s(_),null,{default:t(()=>[(c(),L(k,null,v(m,(a,p)=>n(s(b),{key:p+"-"+a.name,title:a.name},{default:t(()=>[e(d(a.description),1)]),_:2},1032,["title"])),64))]),_:1}),e(),n(l,{language:"html-vue"},{default:t(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{w as default};
