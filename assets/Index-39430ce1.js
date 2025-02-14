import{d as p,a5 as b,j as u,J as g,o as m,c as _,w as n,K as i,D as d,ao as L,W as e,f as a,L as r,aE as h,a as k,g as y}from"./index-729398ab-97e0bd19.js";import{_ as $}from"./UiPage.vue_vue_type_style_index_0_lang-e133bb3e.js";const S={class:"section-content"},D={key:0,class:"most-favourite"},V=p({__name:"Index",setup(B){const{t:s}=b(),c=u([{id:1,data:s("ui.sortableList.games.basketball")},{id:2,data:s("ui.sortableList.games.cricket")},{id:3,data:s("ui.sortableList.games.football")},{id:4,data:s("ui.sortableList.games.hockey")},{id:5,data:s("ui.sortableList.games.volleyball")}]),o=u(),v=t=>{o.value=t[0].data};return(t,l)=>{const f=g("SshPre");return m(),_($,{title:t.$t("ui.sortableList.title"),class:"demo-sortable-list"},{toolbar:n(()=>[i(d(L),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=C=>t.$router.push("/ui"))},null,8,["label"])]),default:n(()=>[e(),a("section",null,[a("h2",null,r(t.$t("ui.sortableList.usage.basic")),1),e(),a("div",S,[a("h3",null,r(t.$t("ui.sortableList.usage.sortSport")),1),e(),i(d(h),{list:c.value,onOnDrag:v},null,8,["list"]),e(),o.value?(m(),k("div",D,r(t.$t("ui.sortableList.games.favourite",{sport:o.value})),1)):y("",!0),e(),i(f,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{V as default};
