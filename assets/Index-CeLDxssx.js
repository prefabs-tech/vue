import{d as m,r as g,J as f,e as v,o as b,j as i,C as n,f as l,h as o,t as c,u as s,v as r,R as $}from"./index-Ds2msYCw.js";import{_ as k}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-B0kn2xaD.js";import{_ as C}from"./UiPage.vue_vue_type_style_index_0_lang-AIG7okUj.js";import"./PrefabsTechVue3TanstackTable.es-P3WI3auJ.js";import"./PrefabsTechVue3Form.es-Bvobumkz.js";const L={class:"section-content"},B={class:"container"},E=m({__name:"Index",setup(P){const a=g(!1),u=[{default:"false",description:"Controls the visibility of the loading overlay.",prop:"loading",type:"Boolean"}],p=()=>{a.value=!0,setTimeout(()=>{a.value=!1},5e3)};return(e,t)=>{const d=f("SshPre");return b(),v(C,{"sub-title":e.$t("ui.loading.subtitle"),title:e.$t("ui.loading.title"),class:"demo-loading"},{toolbar:i(()=>[o(s(r),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=y=>e.$router.push("/ui"))},null,8,["label"])]),default:i(()=>[t[5]||(t[5]=n()),l("section",null,[l("h2",null,c(e.$t("ui.loading.usage.basic")),1),t[4]||(t[4]=n()),l("div",L,[l("div",B,[o(s(r),{label:e.$t("ui.loading.buttonLabel.clickMe"),onClick:p},null,8,["label"]),t[1]||(t[1]=n()),o(s($),{loading:a.value},null,8,["loading"])]),t[3]||(t[3]=n()),o(d,{language:"html-vue"},{default:i(()=>t[2]||(t[2]=[n(`
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
        `)])),_:1})])]),t[6]||(t[6]=n()),o(k,{"props-data":u,"props-table-title":e.$t("common.properties",{value:"LoadingPageProperties"})},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{E as default};
