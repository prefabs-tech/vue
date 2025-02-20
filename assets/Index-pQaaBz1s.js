import{d as c,r as m,s as g,j as p,o as f,w as o,A as e,e as t,t as v,g as a,u as s,B as r,V as _}from"./index-j9ugvOHR.js";import{_ as b}from"./UiPage.vue_vue_type_style_index_0_lang-BeVgrYUm.js";const h={class:"section-content"},k={class:"container"},P=c({__name:"Index",setup($){const l=m(!1),u=()=>{l.value=!0,setTimeout(()=>{l.value=!1},5e3)};return(n,i)=>{const d=g("SshPre");return f(),p(b,{title:n.$t("ui.loading.title"),class:"demo-loading"},{toolbar:o(()=>[a(s(r),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:i[0]||(i[0]=B=>n.$router.push("/ui"))},null,8,["label"])]),default:o(()=>[e(),t("section",null,[t("h2",null,v(n.$t("ui.loading.usage.basic")),1),e(),t("div",h,[t("div",k,[a(s(r),{label:n.$t("ui.loading.buttonLabel.clickMe"),onClick:u},null,8,["label"]),e(),a(s(_),{loading:l.value},null,8,["loading"])]),e(),a(d,{language:"html-vue"},{default:o(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{P as default};
