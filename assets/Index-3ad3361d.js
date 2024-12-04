import{d as m,j as g,G as s,o as _,c as f,w as a,K as t,C as e,S as i,f as o,D as c,ao as p,as as v}from"./index-9834d213-424e3f1e.js";import{_ as b}from"./UiPage.vue_vue_type_style_index_0_lang-a4751224.js";const k={class:"section-content"},h={class:"container"},P=m({__name:"Index",setup(C){const l=g(!1),r=()=>{l.value=!0,setTimeout(()=>{l.value=!1},5e3)};return(n,L)=>{const u=s("router-link"),d=s("SshPre");return _(),f(b,{title:n.$t("ui.loading.title"),class:"demo-loading"},{toolbar:a(()=>[t(u,{to:{name:"ui"},class:"back"},{default:a(()=>[e(i(n.$t("common.back")),1)]),_:1})]),default:a(()=>[e(),o("section",null,[o("h2",null,i(n.$t("ui.loading.usage.basic")),1),e(),o("div",k,[t(d,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),o("div",h,[t(c(p),{label:n.$t("ui.loading.buttonLabel.clickMe"),onClick:r},null,8,["label"]),e(),t(c(v),{loading:l.value},null,8,["loading"])])])])]),_:1},8,["title"])}}});export{P as default};
