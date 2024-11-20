import{d as _,u as b,e as u,r,o as c,c as f,w as s,f as l,g as e,t as o,a as n,h,ac as L,D as k,E as y}from"./index-d455476b.js";const S={class:"section-content"},D={key:0,class:"most-favourite"},C=_({__name:"Index",setup(B){const{t:a}=b(),d=u([{id:1,data:a("ui.sortableList.games.basketball")},{id:2,data:a("ui.sortableList.games.cricket")},{id:3,data:a("ui.sortableList.games.football")},{id:4,data:a("ui.sortableList.games.hockey")},{id:5,data:a("ui.sortableList.games.volleyball")}]),i=u(),m=t=>{i.value=t[0].data};return(t,F)=>{const v=r("router-link"),g=r("SshPre"),p=r("Page");return c(),f(p,{title:t.$t("ui.sortableList.title"),class:"demo-sortable-list"},{toolbar:s(()=>[l(v,{to:{name:"ui"},class:"back"},{default:s(()=>[e(o(t.$t("common.back")),1)]),_:1})]),default:s(()=>[e(),n("section",null,[n("h2",null,o(t.$t("ui.sortableList.usage.basic")),1),e(),n("div",S,[l(g,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e(),n("h3",null,o(t.$t("ui.sortableList.usage.sortSport")),1),e(),l(h(L),{list:d.value,onOnDrag:m},null,8,["list"]),e(),i.value?(c(),k("div",D,o(t.$t("ui.sortableList.games.favourite",{sport:i.value})),1)):y("",!0)])])]),_:1},8,["title"])}}});export{C as default};
