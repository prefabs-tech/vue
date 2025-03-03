import{d as m,r as g,y as p,l as f,o as v,p as s,C as t,e as l,t as c,g as o,u as i,D as r,W as b}from"./index-C0L6_lhn.js";import{_ as k}from"./UiPage.vue_vue_type_style_index_0_lang-BVNwWCJe.js";const C={class:"section-content"},$={class:"container"},N=m({__name:"Index",setup(L){const a=g(!1),u=()=>{a.value=!0,setTimeout(()=>{a.value=!1},5e3)};return(e,n)=>{const d=p("SshPre");return v(),f(k,{title:e.$t("ui.loading.title"),class:"demo-loading"},{toolbar:s(()=>[o(i(r),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=B=>e.$router.push("/ui"))},null,8,["label"])]),default:s(()=>[n[5]||(n[5]=t()),l("section",null,[l("h2",null,c(e.$t("ui.loading.usage.basic")),1),n[4]||(n[4]=t()),l("div",C,[l("div",$,[o(i(r),{label:e.$t("ui.loading.buttonLabel.clickMe"),onClick:u},null,8,["label"]),n[1]||(n[1]=t()),o(i(b),{loading:a.value},null,8,["loading"])]),n[3]||(n[3]=t()),o(d,{language:"html-vue"},{default:s(()=>n[2]||(n[2]=[t(`
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
