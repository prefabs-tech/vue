import{d as p,r as g,o as m,h as f,w as s,a as o,t as c,b as n,e as a,f as i,l as v,v as b,j as _}from"./index-DLqblxUV.js";import{_ as L}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-Cbg9pBb_.js";import{_ as P}from"./UiPage.vue_vue_type_style_index_0_lang-BqFem4hB.js";import"./PrefabsTechVue3TanstackTable.es-mCRN2yKV.js";const $={class:"section-content"},k={class:"container"},B={name:"LoadingPageDemo"},S=p({...B,setup(C){const l=_(!1),r=[{default:"false",description:"Controls the visibility of the loading overlay.",prop:"loading",type:"Boolean"}],u=()=>{l.value=!0,setTimeout(()=>{l.value=!1},5e3)};return(e,t)=>{const d=g("SshPre");return m(),f(P,{subtitle:e.$t("ui.loading.subtitle"),title:e.$t("ui.loading.title"),class:"demo-loading"},{default:s(()=>[o("section",null,[o("h2",null,c(e.$t("ui.loading.usage.basic")),1),t[3]||(t[3]=n()),o("div",$,[o("div",k,[a(i(v),{label:e.$t("ui.loading.buttonLabel.clickMe"),onClick:u},null,8,["label"]),t[0]||(t[0]=n()),a(i(b),{loading:l.value},null,8,["loading"])]),t[2]||(t[2]=n()),a(d,{language:"html-vue"},{default:s(()=>[...t[1]||(t[1]=[n(`
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
        `,-1)])]),_:1})])]),t[4]||(t[4]=n()),a(L,{"props-data":r,"props-table-title":e.$t("common.properties",{value:"LoadingPageProperties"})},null,8,["props-table-title"])]),_:1},8,["subtitle","title"])}}});export{S as default};
