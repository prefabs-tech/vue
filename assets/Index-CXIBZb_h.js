import{d as m,r as g,A as f,e as p,o as v,w as i,E as t,f as l,t as c,i as o,u as s,j as r,W as b}from"./index-DF-LJFyG.js";import{_ as k}from"./UiPage.vue_vue_type_style_index_0_lang-DWM3h69Q.js";const $={class:"section-content"},B={class:"container"},N=m({__name:"Index",setup(C){const a=g(!1),u=()=>{a.value=!0,setTimeout(()=>{a.value=!1},5e3)};return(e,n)=>{const d=f("SshPre");return v(),p(k,{title:e.$t("ui.loading.title"),class:"demo-loading"},{toolbar:i(()=>[o(s(r),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=L=>e.$router.push("/ui"))},null,8,["label"])]),default:i(()=>[n[5]||(n[5]=t()),l("section",null,[l("h2",null,c(e.$t("ui.loading.usage.basic")),1),n[4]||(n[4]=t()),l("div",$,[l("div",B,[o(s(r),{label:e.$t("ui.loading.buttonLabel.clickMe"),onClick:u},null,8,["label"]),n[1]||(n[1]=t()),o(s(b),{loading:a.value},null,8,["loading"])]),n[3]||(n[3]=t()),o(d,{language:"html-vue"},{default:i(()=>n[2]||(n[2]=[t(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{N as default};
