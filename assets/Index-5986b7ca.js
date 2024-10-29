import{d as p,u as f,e as i,r,o as l,c as _,w as u,a,t as n,f as s,g as c,h as b,ac as h,D as L,E as k}from"./index-96711986.js";const y={class:"section-content"},S={key:0,class:"most-favourite"},C=p({__name:"Index",setup(D){const{t:e}=f(),d=i([{id:1,data:e("ui.sortableList.games.basketball")},{id:2,data:e("ui.sortableList.games.cricket")},{id:3,data:e("ui.sortableList.games.football")},{id:4,data:e("ui.sortableList.games.hockey")},{id:5,data:e("ui.sortableList.games.volleyball")}]),o=i(),m=t=>{o.value=t[0].data};return(t,B)=>{const v=r("SshPre"),g=r("Page");return l(),_(g,{title:t.$t("ui.sortableList.title"),class:"demo-sortable-list"},{default:u(()=>[a("section",null,[a("h2",null,n(t.$t("ui.sortableList.usage.basic")),1),s(),a("div",y,[c(v,{language:"html-vue"},{default:u(()=>[s(`
          <template>
            <h3>Sort sports from most to least favorite</h3>

            <SortableList :list="list" @on-drag="onDrag" />

            <div v-if="mostFavourite" class="most-favourite">
              {{ mostFavorite + " is your most favorite sport." }}
            </div>
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

            const mostFavourite = ref<string>();

            const onDrag = (sortedList: [{ id: number, data: string }]) => {
              mostFavourite.value = sortedList[0].data;
            };
          <\/script>
        `)]),_:1}),s(),a("h3",null,n(t.$t("ui.sortableList.usage.sortSport")),1),s(),c(b(h),{list:d.value,onOnDrag:m},null,8,["list"]),s(),o.value?(l(),L("div",S,n(t.$t("ui.sortableList.games.favourite",{sport:o.value})),1)):k("",!0)])])]),_:1},8,["title"])}}});export{C as default};
