import{T as m}from"./PrefabsTechVue3Form.es-C8cZvswu.js";import{o as f}from"./PrefabsTechVue3TanstackTable.es-B8ktQfTo.js";import{d as P,I as S,M as D,J as V,e as C,o as $,i as a,B as t,f as n,t as p,h as r,u,q as k}from"./index-CbitnnAc.js";import{_ as h}from"./FormPage.vue_vue_type_style_index_0_lang-BIAL5Kfc.js";const T={class:"section-content"},U={class:"section-content"},J={class:"section-content"},K={class:"section-content"},A=P({__name:"Index",setup(N){const{t:l}=S(),c=[{accessorKey:"prop",header:"Property"},{accessorKey:"type",header:"Type"},{accessorKey:"default",header:"Default"},{accessorKey:"description",header:"Description"}],y=[{default:"[]",description:l("form.documentation.propsDescription.Selector.data"),id:1,prop:"data",type:"Data[]"},{default:"en",description:l("form.documentation.propsDescription.Selector.locale"),id:2,prop:"locale",type:"String"},{default:"-",description:l("form.documentation.propsDescription.input.modelValue"),id:3,prop:"modelValue",type:"String | Number | Array<String|Number> | undefined"},{default:"false",description:l("form.documentation.propsDescription.Selector.multiple"),id:4,prop:"multiple",type:"Boolean"},{default:"-",description:l("form.documentation.propsDescription.input.name"),id:5,prop:"name",type:"String"},{default:"-",description:l("form.documentation.propsDescription.input.placeholder"),id:6,prop:"placeholder",type:"String"}],v=[{accessorKey:"name",header:"Name"},{accessorKey:"payload",header:"Payload"},{accessorKey:"description",header:"Description"}],g=[{description:l("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | number | (string | number)[] | undefined"}],s=D({basic:void 0,multiselect:[],custom:[]}),b=[{code:"US",i18n:{en:"United States of America",fr:"États-Unis",th:"สหรัฐอเมริกา"}},{code:"FR",i18n:{th:"France override"}},{code:"JP",i18n:{en:"Japan (overwritten)",fr:"Japon",th:"ญี่ปุ่น"}},{code:"XX",i18n:{en:"Testland",fr:"Pays Test",th:"ประเทศทดสอบ"}}];return(o,e)=>{const d=V("SshPre");return $(),C(h,{subtitle:o.$t("form.subtitle.countryPicker"),title:o.$t("form.label.countryPicker")},{toolbar:a(()=>[r(u(k),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=i=>o.$router.push("/form"))},null,8,["label"])]),default:a(()=>[e[17]||(e[17]=t()),n("section",null,[n("h2",null,p(o.$t("form.label.basicInput")),1),e[6]||(e[6]=t()),n("div",T,[r(u(m),{modelValue:s.basic,"onUpdate:modelValue":e[1]||(e[1]=i=>s.basic=i),placeholder:o.$t("form.placeholder.country")},null,8,["modelValue","placeholder"]),e[5]||(e[5]=t()),r(d,{language:"html-vue"},{default:a(()=>e[4]||(e[4]=[t(`
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
        `)])),_:1})])]),e[18]||(e[18]=t()),n("section",null,[n("h2",null,p(o.$t("form.label.multiselect")),1),e[9]||(e[9]=t()),n("div",U,[r(u(m),{modelValue:s.multiselect,"onUpdate:modelValue":e[2]||(e[2]=i=>s.multiselect=i),placeholder:o.$t("form.placeholder.country"),multiple:""},null,8,["modelValue","placeholder"]),e[8]||(e[8]=t()),r(d,{language:"html-vue"},{default:a(()=>e[7]||(e[7]=[t(`
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
        `)])),_:1})])]),e[19]||(e[19]=t()),n("section",null,[n("h2",null,p(o.$t("form.label.customData")),1),e[12]||(e[12]=t()),n("div",J,[r(u(m),{modelValue:s.custom,"onUpdate:modelValue":e[3]||(e[3]=i=>s.custom=i),data:b,placeholder:o.$t("form.placeholder.country"),multiple:""},null,8,["modelValue","placeholder"]),e[11]||(e[11]=t()),r(d,{language:"html-vue"},{default:a(()=>e[10]||(e[10]=[t(`
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
        `)])),_:1})])]),e[20]||(e[20]=t()),n("section",null,[n("h2",null,p(o.$t("common.properties",{value:"CountryPickerProperties"})),1),e[13]||(e[13]=t()),r(u(f),{"columns-data":c,data:y,paginated:!1,"persist-state":!1})]),e[21]||(e[21]=t()),n("section",null,[n("h2",null,p(o.$t("common.events")),1),e[14]||(e[14]=t()),r(u(f),{"columns-data":v,data:g,paginated:!1,"persist-state":!1})]),e[22]||(e[22]=t()),n("section",null,[n("h2",null,p(o.$t("common.type")),1),e[16]||(e[16]=t()),n("div",K,[r(d,{language:"html-vue"},{default:a(()=>e[15]||(e[15]=[t(`
           interface Data {
            code: string;
            i18n: {
              en: string;
              fr: string;
              th: string;
            };
          }
          `)])),_:1})])])]),_:1},8,["subtitle","title"])}}});export{A as default};
