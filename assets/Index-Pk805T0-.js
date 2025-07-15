import{d as m,r as g,I as f,e as b,o as v,i,E as n,f as l,g as o,t as c,u as s,x as r,P as $}from"./index-DcmBGXRe.js";import{_ as k}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-vgnZxmzK.js";import{_ as C}from"./UiPage.vue_vue_type_style_index_0_lang-DpVtSpAA.js";import"./DzangolabVue3TanstackTable.es-Cu8P28Bt.js";import"./DzangolabVue3Form.es-Bhd4fL6B.js";const L={class:"section-content"},P={class:"container"},z=m({__name:"Index",setup(B){const a=g(!1),u=[{default:"false",description:"Controls the visibility of the loading overlay.",prop:"loading",type:"Boolean"}],d=()=>{a.value=!0,setTimeout(()=>{a.value=!1},5e3)};return(e,t)=>{const p=f("SshPre");return v(),b(C,{"sub-title":e.$t("ui.loading.subtitle"),title:e.$t("ui.loading.title"),class:"demo-loading"},{toolbar:i(()=>[o(s(r),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:t[0]||(t[0]=y=>e.$router.push("/ui"))},null,8,["label"])]),default:i(()=>[t[5]||(t[5]=n()),l("section",null,[l("h2",null,c(e.$t("ui.loading.usage.basic")),1),t[4]||(t[4]=n()),l("div",L,[l("div",P,[o(s(r),{label:e.$t("ui.loading.buttonLabel.clickMe"),onClick:d},null,8,["label"]),t[1]||(t[1]=n()),o(s($),{loading:a.value},null,8,["loading"])]),t[3]||(t[3]=n()),o(p,{language:"html-vue"},{default:i(()=>t[2]||(t[2]=[n(`
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
