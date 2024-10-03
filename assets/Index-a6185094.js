import{d as _,e as p,o as s,c as l,w as i,a as e,t as f,f as n,g as r,h as c,a5 as v,a8 as b,E as h,r as u}from"./index-9392f0ee.js";const k={class:"section-content"},B={class:"container"},x=_({__name:"Index",setup(C){const t=p(!1),d=()=>{t.value=!0,setTimeout(()=>{t.value=!1},5e3)};return(a,o)=>{const g=u("SshPre"),m=u("Page");return s(),l(m,{title:a.$t("ui.loading.title"),class:"demo-loading"},{default:i(()=>[e("section",null,[e("h2",null,f(a.$t("ui.loading.usage.basic")),1),n(),e("div",k,[r(g,{language:"html-vue"},{default:i(()=>[n(`
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
        `)]),_:1}),n(),e("div",B,[r(c(v),{label:a.$t("ui.loading.buttonLabel.clickMe"),onClick:o[0]||(o[0]=L=>d())},null,8,["label"]),n(),t.value?(s(),l(c(b),{key:0})):h("",!0)])])])]),_:1},8,["title"])}}});export{x as default};
