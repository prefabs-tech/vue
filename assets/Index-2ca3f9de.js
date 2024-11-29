import{d as _,a4 as p,j as l,G as u,o as c,c as b,w as s,K as r,C as e,S as o,f as n,D as g,av as L,a as h,g as k}from"./index-c6712957-bca2c2d1.js";import{_ as S}from"./UiPage.vue_vue_type_style_index_0_lang-e2e81d25.js";const y={class:"section-content"},D={key:0,class:"most-favourite"},N=_({__name:"Index",setup($){const{t:a}=p(),m=l([{id:1,data:a("ui.sortableList.games.basketball")},{id:2,data:a("ui.sortableList.games.cricket")},{id:3,data:a("ui.sortableList.games.football")},{id:4,data:a("ui.sortableList.games.hockey")},{id:5,data:a("ui.sortableList.games.volleyball")}]),i=l(),d=t=>{i.value=t[0].data};return(t,B)=>{const v=u("router-link"),f=u("SshPre");return c(),b(S,{title:t.$t("ui.sortableList.title"),class:"demo-sortable-list"},{toolbar:s(()=>[r(v,{to:{name:"ui"},class:"back"},{default:s(()=>[e(o(t.$t("common.back")),1)]),_:1})]),default:s(()=>[e(),n("section",null,[n("h2",null,o(t.$t("ui.sortableList.usage.basic")),1),e(),n("div",y,[r(f,{language:"html-vue"},{default:s(()=>[e(`
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
        `)]),_:1}),e(),n("h3",null,o(t.$t("ui.sortableList.usage.sortSport")),1),e(),r(g(L),{list:m.value,onOnDrag:d},null,8,["list"]),e(),i.value?(c(),h("div",D,o(t.$t("ui.sortableList.games.favourite",{sport:i.value})),1)):k("",!0)])])]),_:1},8,["title"])}}});export{N as default};
