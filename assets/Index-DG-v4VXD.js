import{T as m}from"./PrefabsTechVue3Form.es-C1gH_GmP.js";import{d as f,M as c,J as v,e as b,o as y,i as a,B as n,f as o,t as p,h as l,u as i,q as P}from"./index-DbjSbq9X.js";import{_ as C}from"./FormPage.vue_vue_type_style_index_0_lang-wIjBnCfl.js";const V={class:"section-content"},g={class:"section-content"},k={class:"section-content"},J=f({__name:"Index",setup($){const r=c({basic:void 0,multiselect:[],custom:[]}),d=[{code:"US",i18n:{en:"United States of America",fr:"États-Unis",th:"สหรัฐอเมริกา"}},{code:"FR",i18n:{th:"France override"}},{code:"JP",i18n:{en:"Japan (overwritten)",fr:"Japon",th:"ญี่ปุ่น"}},{code:"XX",i18n:{en:"Testland",fr:"Pays Test",th:"ประเทศทดสอบ"}}];return(t,e)=>{const u=v("SshPre");return y(),b(C,{title:t.$t("form.label.countryPicker")},{toolbar:a(()=>[l(i(P),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=s=>t.$router.push("/form"))},null,8,["label"])]),default:a(()=>[e[13]||(e[13]=n()),o("section",null,[o("h2",null,p(t.$t("form.label.basicInput")),1),e[6]||(e[6]=n()),o("div",V,[l(i(m),{modelValue:r.basic,"onUpdate:modelValue":e[1]||(e[1]=s=>r.basic=s),placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","placeholder"]),e[5]||(e[5]=n()),l(u,{language:"html-vue"},{default:a(()=>e[4]||(e[4]=[n(`
         <template>
            <CountryPicker
              v-model="input"
              placeholder="Select a country"
            />
          </template>
                  
          <script setup lang="ts">
          import { CountryPicker } from '@prefabs.tech/vue3-form';
          import { ref } from 'vue';
                  
          const input = ref();
          <\/script>
        `)])),_:1})])]),e[14]||(e[14]=n()),o("section",null,[o("h2",null,p(t.$t("form.label.multiselect")),1),e[9]||(e[9]=n()),o("div",g,[l(i(m),{modelValue:r.multiselect,"onUpdate:modelValue":e[2]||(e[2]=s=>r.multiselect=s),placeholder:t.$t("form.placeholder.country"),multiple:""},null,8,["modelValue","placeholder"]),e[8]||(e[8]=n()),l(u,{language:"html-vue"},{default:a(()=>e[7]||(e[7]=[n(`
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
        `)])),_:1})])]),e[15]||(e[15]=n()),o("section",null,[o("h2",null,p(t.$t("form.label.customData")),1),e[12]||(e[12]=n()),o("div",k,[l(i(m),{modelValue:r.custom,"onUpdate:modelValue":e[3]||(e[3]=s=>r.custom=s),data:d,placeholder:t.$t("form.placeholder.country"),multiple:""},null,8,["modelValue","placeholder"]),e[11]||(e[11]=n()),l(u,{language:"html-vue"},{default:a(()=>e[10]||(e[10]=[n(`
                <template>
            <CountryPicker
              v-model="input"
              :data="data"
              multiple
              placeholder="Select Countries"
            />
          </template>

          <script setup lang="ts">
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref<string[]>([]);

          const data = [
            {
              code: "US",
              i18n: {
                en: "United States of America",
              },
            },
            {
              code: "FR",
              i18n: {
                en: "France",
                fr: "France",
                th: "ฝรั่งเศส"
              },
            },
            {
              code: "JP",
              i18n: {
                en: "Japan ",
                fr: "Japon",
                th: "ญี่ปุ่น"
              }
            },
            {
              code: "XX",
              i18n: {
                en: "Testland",
                fr: "Pays Test",
                th: "ประเทศทดสอบ"
              }
            },
          ];
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{J as default};
