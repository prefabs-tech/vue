import{d as c,j as m,J as g,o as p,c as f,w as o,K as t,D as s,ao as u,W as e,f as a,L as _,aA as v}from"./index-729398ab-97e0bd19.js";import{_ as b}from"./UiPage.vue_vue_type_style_index_0_lang-7e455287.js";const h={class:"section-content"},k={class:"container"},y=c({__name:"Index",setup(L){const l=m(!1),r=()=>{l.value=!0,setTimeout(()=>{l.value=!1},5e3)};return(n,i)=>{const d=g("SshPre");return p(),f(b,{title:n.$t("ui.loading.title"),class:"demo-loading"},{toolbar:o(()=>[t(s(u),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:i[0]||(i[0]=$=>n.$router.push("/ui"))},null,8,["label"])]),default:o(()=>[e(),a("section",null,[a("h2",null,_(n.$t("ui.loading.usage.basic")),1),e(),a("div",h,[a("div",k,[t(s(u),{label:n.$t("ui.loading.buttonLabel.clickMe"),onClick:r},null,8,["label"]),e(),t(s(v),{loading:l.value},null,8,["loading"])]),e(),t(d,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{y as default};
