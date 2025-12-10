import{T as m}from"./PrefabsTechVue3Form.es-B2BaFGU7.js";import{d,N as f,L as v,e as c,o as b,j as i,C as t,f as o,t as p,h as n,u,v as y}from"./index-CA3Jbfm5.js";import{_ as C}from"./FormPage.vue_vue_type_style_index_0_lang-B2jtbqUY.js";const k={class:"section-content"},V={class:"section-content"},N=d({__name:"Index",setup($){const r=f({basic:void 0,multiselect:void 0});return(l,e)=>{const a=v("SshPre");return b(),c(C,{title:l.$t("form.label.countryPicker")},{toolbar:i(()=>[n(u(y),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=s=>l.$router.push("/form"))},null,8,["label"])]),default:i(()=>[e[9]||(e[9]=t()),o("section",null,[o("h2",null,p(l.$t("form.label.basicInput")),1),e[5]||(e[5]=t()),o("div",k,[n(u(m),{modelValue:r.basic,"onUpdate:modelValue":e[1]||(e[1]=s=>r.basic=s),placeholder:l.$t("form.placeholder.country")},null,8,["modelValue","placeholder"]),e[4]||(e[4]=t()),n(a,{language:"html-vue"},{default:i(()=>e[3]||(e[3]=[t(`
         <template>
            <CountryPicker
              v-model="input"
              :placeholder="Select a country"
            />
          </template>
                  
          <script setup lang="ts">
          import { CountryPicker } from '@prefabs.tech/vue3-form';
          import { ref } from 'vue';
                  
          const input = ref();
          <\/script>
        `)])),_:1})])]),e[10]||(e[10]=t()),o("section",null,[o("h2",null,p(l.$t("form.label.multiselect")),1),e[8]||(e[8]=t()),o("div",V,[n(u(m),{modelValue:r.multiselect,"onUpdate:modelValue":e[2]||(e[2]=s=>r.multiselect=s),placeholder:l.$t("form.placeholder.country"),multiple:""},null,8,["modelValue","placeholder"]),e[7]||(e[7]=t()),n(a,{language:"html-vue"},{default:i(()=>e[6]||(e[6]=[t(`
          <template>
            <CountryPicker
              v-model="input"
              multiple
              placeholder="Select Countries"
            />
          </template>

          <script setup lang="ts">
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();

        
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{N as default};
