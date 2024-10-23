import{d,u as m,e as _,r as o,o as g,c as p,w as l,a,t as b,f as s,g as i,h as f,ac as v}from"./index-73b31e6e.js";const L={class:"section-content"},y=d({__name:"Index",setup(h){const{t}=m(),n=_([{id:1,data:t("ui.sortableList.games.basketball")},{id:2,data:t("ui.sortableList.games.cricket")},{id:3,data:t("ui.sortableList.games.football")},{id:4,data:t("ui.sortableList.games.hokey")},{id:5,data:t("ui.sortableList.games.volleyball")}]),r=e=>{n.value=e};return(e,k)=>{const c=o("SshPre"),u=o("Page");return g(),p(u,{title:e.$t("ui.sortableList.title"),class:"demo-sortable-list"},{default:l(()=>[a("section",null,[a("h2",null,b(e.$t("ui.sortableList.usage.basic")),1),s(),a("div",L,[i(c,{language:"html-vue"},{default:l(()=>[s(`
          <template>
            <SortableList :list="list" @on-drag="onDrag" />
          </template>

          <script setup lang="ts"> 
            import { SortableList } from "@dzangolab/vue3-ui";
            import { ref } from "vue";
  
            const list = ref([
              {
                id: 1,
                data: "Basketball",
              },
              ...
            ]);

            const onDrag = (sortedList: []) => {
              ...
            };
          <\/script>
        `)]),_:1}),s(),i(f(v),{list:n.value,onOnDrag:r},null,8,["list"])])])]),_:1},8,["title"])}}});export{y as default};
