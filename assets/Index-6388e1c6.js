import{d as _,e as p,r as s,o as l,c as i,w as r,a as e,t as f,f as t,g as c,h as u,a5 as v,a9 as b,E as h}from"./index-11ad07c1.js";const k={class:"section-content"},C={class:"container"},x=_({__name:"Index",setup(L){const n=p(!1),d=()=>{n.value=!0,setTimeout(()=>{n.value=!1},5e3)};return(a,o)=>{const g=s("SshPre"),m=s("Page");return l(),i(m,{title:a.$t("ui.loading.title"),class:"demo-loading"},{default:r(()=>[e("section",null,[e("h2",null,f(a.$t("ui.loading.usage.basic")),1),t(),e("div",k,[c(g,{language:"html-vue"},{default:r(()=>[t(`
          <template>
            <ButtonElement label="Click me" @click="startLoading()" />

            <LoadingPage v-if="loading" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement, LoadingPage } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const loading = ref(false);

            const startLoading = () => {
              loading.value = true;
            };
          <\/script>
        `)]),_:1}),t(),e("div",C,[c(u(v),{label:a.$t("ui.loading.buttonLabel.clickMe"),onClick:o[0]||(o[0]=P=>d())},null,8,["label"]),t(),n.value?(l(),i(u(b),{key:0})):h("",!0)])])])]),_:1},8,["title"])}}});export{x as default};
