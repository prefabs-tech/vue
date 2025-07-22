import{d as m,r as g,J as f,e as v,o as b,i,D as n,f as l,g as o,t as c,u as s,v as r,Q as $}from"./index-BLLu7sZz.js";import{_ as k}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-BHGsT5Km.js";import{_ as C}from"./UiPage.vue_vue_type_style_index_0_lang-CTdadv5J.js";import"./DzangolabVue3TanstackTable.es-By0FH77m.js";import"./DzangolabVue3Form.es-Q4CvOA23.js";const L={class:"section-content"},B={class:"container"},z=m({__name:"Index",setup(P){const a=g(!1),u=[{default:"false",description:"Controls the visibility of the loading overlay.",prop:"loading",type:"Boolean"}],d=()=>{a.value=!0,setTimeout(()=>{a.value=!1},5e3)};return(e,t)=>{const p=f("SshPre");return b(),v(C,{"sub-title":e.$t("ui.loading.subtitle"),title:e.$t("ui.loading.title"),class:"demo-loading"},{toolbar:i(()=>[o(s(r),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=y=>e.$router.push("/ui"))},null,8,["label"])]),default:i(()=>[t[5]||(t[5]=n()),l("section",null,[l("h2",null,c(e.$t("ui.loading.usage.basic")),1),t[4]||(t[4]=n()),l("div",L,[l("div",B,[o(s(r),{label:e.$t("ui.loading.buttonLabel.clickMe"),onClick:d},null,8,["label"]),t[1]||(t[1]=n()),o(s($),{loading:a.value},null,8,["loading"])]),t[3]||(t[3]=n()),o(p,{language:"html-vue"},{default:i(()=>t[2]||(t[2]=[n(`
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
        `)])),_:1})])]),t[6]||(t[6]=n()),o(k,{"props-data":u,"props-table-title":e.$t("common.properties",{value:"LoadingPageProperties"})},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{z as default};
