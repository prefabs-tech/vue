import{d as m,j as g,E as s,o as _,c as f,w as a,J as t,C as e,Z as i,f as o,N as c,as as p,aw as v}from"./index-66214709-97e5bbe8.js";import{_ as b}from"./UiPage.vue_vue_type_style_index_0_lang-424f635c.js";const k={class:"section-content"},h={class:"container"},N=m({__name:"Index",setup(C){const l=g(!1),r=()=>{l.value=!0,setTimeout(()=>{l.value=!1},5e3)};return(n,L)=>{const u=s("router-link"),d=s("SshPre");return _(),f(b,{title:n.$t("ui.loading.title"),class:"demo-loading"},{toolbar:a(()=>[t(u,{to:{name:"ui"},class:"back"},{default:a(()=>[e(i(n.$t("common.back")),1)]),_:1})]),default:a(()=>[e(),o("section",null,[o("h2",null,i(n.$t("ui.loading.usage.basic")),1),e(),o("div",k,[t(d,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),o("div",h,[t(c(p),{label:n.$t("ui.loading.buttonLabel.clickMe"),onClick:r},null,8,["label"]),e(),t(c(v),{loading:l.value},null,8,["loading"])])])])]),_:1},8,["title"])}}});export{N as default};
