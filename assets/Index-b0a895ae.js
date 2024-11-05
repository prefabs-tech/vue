import{d as r,e as g,r as l,o as _,c as m,w as s,a as e,t as p,f as n,g as o,h as i,a5 as f,a9 as v}from"./index-bdeedbb5.js";const h={class:"section-content"},b={class:"container"},B=r({__name:"Index",setup(k){const a=g(!1),c=()=>{a.value=!0,setTimeout(()=>{a.value=!1},5e3)};return(t,L)=>{const u=l("SshPre"),d=l("Page");return _(),m(d,{title:t.$t("ui.loading.title"),class:"demo-loading"},{default:s(()=>[e("section",null,[e("h2",null,p(t.$t("ui.loading.usage.basic")),1),n(),e("div",h,[o(u,{language:"html-vue"},{default:s(()=>[n(`
          <template>
            <ButtonElement label="Click me" @click="startLoading" />

            <LoadingPage :loading="loading" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement, LoadingPage } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const loading = ref(false);

            const startLoading = () => {
              loading.value = true;

              setTimeout(() => {
                loading.value = false;
              }, 5000);
            };
          <\/script>
        `)]),_:1}),n(),e("div",b,[o(i(f),{label:t.$t("ui.loading.buttonLabel.clickMe"),onClick:c},null,8,["label"]),n(),o(i(v),{loading:a.value},null,8,["loading"])])])])]),_:1},8,["title"])}}});export{B as default};
