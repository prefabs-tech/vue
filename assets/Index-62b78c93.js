import{d as m,e as _,r as s,o as p,c as f,w as a,f as t,g as e,t as i,a as o,h as c,a5 as v,a9 as b}from"./index-6ec2f40d.js";const k={class:"section-content"},h={class:"container"},C=m({__name:"Index",setup(L){const l=_(!1),r=()=>{l.value=!0,setTimeout(()=>{l.value=!1},5e3)};return(n,P)=>{const u=s("router-link"),d=s("SshPre"),g=s("Page");return p(),f(g,{title:n.$t("ui.loading.title"),class:"demo-loading"},{toolbar:a(()=>[t(u,{to:{name:"ui"},class:"back"},{default:a(()=>[e(i(n.$t("common.back")),1)]),_:1})]),default:a(()=>[e(),o("section",null,[o("h2",null,i(n.$t("ui.loading.usage.basic")),1),e(),o("div",k,[t(d,{language:"html-vue"},{default:a(()=>[e(`
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
        `)]),_:1}),e(),o("div",h,[t(c(v),{label:n.$t("ui.loading.buttonLabel.clickMe"),onClick:r},null,8,["label"]),e(),t(c(b),{loading:l.value},null,8,["loading"])])])])]),_:1},8,["title"])}}});export{C as default};
