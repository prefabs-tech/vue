import{d as p,r as m,J as g,e as f,o as c,i,f as o,B as n,h as a,t as v,u as s,q as b,S as B}from"./index-XZcpcliP.js";import{_ as L}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-myJ7kgbK.js";import{_}from"./UiPage.vue_vue_type_style_index_0_lang-Bo-tfcuc.js";import"./PrefabsTechVue3TanstackTable.es-B37K5b-F.js";import"./PrefabsTechVue3Form.es-BwAUYCmF.js";const $={class:"section-content"},k={class:"container"},V=p({__name:"Index",setup(C){const l=m(!1),r=[{default:"false",description:"Controls the visibility of the loading overlay.",prop:"loading",type:"Boolean"}],u=()=>{l.value=!0,setTimeout(()=>{l.value=!1},5e3)};return(e,t)=>{const d=g("SshPre");return c(),f(_,{subtitle:e.$t("ui.loading.subtitle"),title:e.$t("ui.loading.title"),class:"demo-loading"},{default:i(()=>[o("section",null,[o("h2",null,v(e.$t("ui.loading.usage.basic")),1),t[3]||(t[3]=n()),o("div",$,[o("div",k,[a(s(b),{label:e.$t("ui.loading.buttonLabel.clickMe"),onClick:u},null,8,["label"]),t[0]||(t[0]=n()),a(s(B),{loading:l.value},null,8,["loading"])]),t[2]||(t[2]=n()),a(d,{language:"html-vue"},{default:i(()=>t[1]||(t[1]=[n(`
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
        `)])),_:1})])]),t[4]||(t[4]=n()),a(L,{"props-data":r,"props-table-title":e.$t("common.properties",{value:"LoadingPageProperties"})},null,8,["props-table-title"])]),_:1},8,["subtitle","title"])}}});export{V as default};
