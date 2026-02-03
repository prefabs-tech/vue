import{d as p,J as g,b as m,o as f,h as s,e as o,y as n,g as a,t as c,u as i,l as b,S as v,r as L}from"./index-CcgkNhek.js";import{_}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-3HTF-xmp.js";import{_ as $}from"./UiPage.vue_vue_type_style_index_0_lang-mZqaI-tE.js";import"./PrefabsTechVue3TanstackTable.es-CMugsYiG.js";import"./PrefabsTechVue3Form.es-CviYuyTJ.js";const k={class:"section-content"},B={class:"container"},V=p({__name:"Index",setup(C){const l=L(!1),r=[{default:"false",description:"Controls the visibility of the loading overlay.",prop:"loading",type:"Boolean"}],u=()=>{l.value=!0,setTimeout(()=>{l.value=!1},5e3)};return(e,t)=>{const d=g("SshPre");return f(),m($,{subtitle:e.$t("ui.loading.subtitle"),title:e.$t("ui.loading.title"),class:"demo-loading"},{default:s(()=>[o("section",null,[o("h2",null,c(e.$t("ui.loading.usage.basic")),1),t[3]||(t[3]=n()),o("div",k,[o("div",B,[a(i(b),{label:e.$t("ui.loading.buttonLabel.clickMe"),onClick:u},null,8,["label"]),t[0]||(t[0]=n()),a(i(v),{loading:l.value},null,8,["loading"])]),t[2]||(t[2]=n()),a(d,{language:"html-vue"},{default:s(()=>[...t[1]||(t[1]=[n(`
          <template>
            <ButtonElement label="Click me" @click="startLoading" />

            <LoadingPage :loading="loading" />
          </template>
          
          <script setup lang="ts"> 
            import { ButtonElement, LoadingPage } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";

            const loading = ref(false);

            const startLoading = () => {
              loading.value = true;

              setTimeout(() => {
                loading.value = false;
              }, 5000);
            };
          <\/script>
        `,-1)])]),_:1})])]),t[4]||(t[4]=n()),a(_,{"props-data":r,"props-table-title":e.$t("common.properties",{value:"LoadingPageProperties"})},null,8,["props-table-title"])]),_:1},8,["subtitle","title"])}}});export{V as default};
