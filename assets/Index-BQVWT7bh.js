import{T as m}from"./PrefabsTechVue3Form.es-DHurZAur.js";import{o as c}from"./PrefabsTechVue3TanstackTable.es-CheUeZRW.js";import{d as P,I as V,M as U,J as k,e as D,o as S,i as s,B as t,f as o,t as u,h as n,u as d,q as N}from"./index-BvGOqJBj.js";import{_ as h}from"./FormPage.vue_vue_type_style_index_0_lang-B7yrGDEL.js";const A={class:"section-content"},w={class:"section-content"},F={class:"section-content"},J={class:"section-content"},K={class:"section-content"},B={class:"section-content"},z=P({__name:"Index",setup(R){const{t:p}=V(),y=[{accessorKey:"prop",header:"Property"},{accessorKey:"type",header:"Type"},{accessorKey:"default",header:"Default"},{accessorKey:"description",header:"Description"}],v=[{default:"[]",description:p("form.documentation.propsDescription.select.data"),id:1,prop:"data",type:"Data[]"},{default:"en",description:p("form.documentation.propsDescription.select.locale"),id:2,prop:"locale",type:"String"},{default:"-",description:p("form.documentation.propsDescription.input.modelValue"),id:3,prop:"modelValue",type:"String | Number | Array<String|Number> | undefined"},{default:"false",description:p("form.documentation.propsDescription.select.multiple"),id:4,prop:"multiple",type:"Boolean"},{default:"-",description:p("form.documentation.propsDescription.input.name"),id:5,prop:"name",type:"String"},{default:"-",description:p("form.documentation.propsDescription.input.placeholder"),id:6,prop:"placeholder",type:"String"}],C=[{accessorKey:"name",header:"Name"},{accessorKey:"payload",header:"Payload"},{accessorKey:"description",header:"Description"}],g=[{description:p("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | number | (string | number)[] | undefined"}],r=U({basic:void 0,custom:[],multiselect:[],includedCountries:[]}),b=["US","AU"],f=["US","CA","FR","AU","NP"],$=[{code:"US",i18n:{en:"United States of America",fr:"États-Unis",th:"สหรัฐอเมริกา"}},{code:"FR",i18n:{th:"France override"}},{code:"JP",i18n:{en:"Japan (overwritten)",fr:"Japon",th:"ญี่ปุ่น"}},{code:"XX",i18n:{fr:"New Country(fr)",th:"New Country(th)",en:"New Country(en)"}}];return(l,e)=>{const a=k("SshPre");return S(),D(h,{subtitle:l.$t("form.subtitle.countryPicker"),title:l.$t("form.label.countryPicker")},{toolbar:s(()=>[n(d(N),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=i=>l.$router.push("/form"))},null,8,["label"])]),default:s(()=>[e[25]||(e[25]=t()),o("section",null,[o("h2",null,u(l.$t("form.label.basicInput")),1),e[8]||(e[8]=t()),o("div",A,[n(d(m),{modelValue:r.basic,"onUpdate:modelValue":e[1]||(e[1]=i=>r.basic=i),placeholder:l.$t("form.placeholder.country")},null,8,["modelValue","placeholder"]),e[7]||(e[7]=t()),n(a,{language:"html-vue"},{default:s(()=>e[6]||(e[6]=[t(`
         <template>
            <CountryPicker
              v-model="input"
              placeholder="$t('form.placeholder.country')"
            />
          </template>
                  
          <script setup lang="ts">
          import { CountryPicker } from '@prefabs.tech/vue3-form';
          import { ref } from 'vue';
                  
          const input = ref();
          <\/script>
        `)])),_:1})])]),e[26]||(e[26]=t()),o("section",null,[o("h2",null,u(l.$t("form.label.multiselect")),1),e[11]||(e[11]=t()),o("div",w,[n(d(m),{modelValue:r.multiselect,"onUpdate:modelValue":e[2]||(e[2]=i=>r.multiselect=i),placeholder:l.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[10]||(e[10]=t()),n(a,{language:"html-vue"},{default:s(()=>e[9]||(e[9]=[t(`
          <template>
            <CountryPicker
              v-model="input"
              multiple
              placeholder="$t('form.placeholder.countries')"
            />
          </template>

          <script setup lang="ts">
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          <\/script>
        `)])),_:1})])]),e[27]||(e[27]=t()),o("section",null,[o("h2",null,u(l.$t("form.label.customData")),1),e[14]||(e[14]=t()),o("div",F,[n(d(m),{modelValue:r.custom,"onUpdate:modelValue":e[3]||(e[3]=i=>r.custom=i),data:$,placeholder:l.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[13]||(e[13]=t()),n(a,{language:"html-vue"},{default:s(()=>e[12]||(e[12]=[t(`
          <template>
            <CountryPicker
              v-model="input"
              :data="data"
              multiple
              placeholder="$t('form.placeholder.countries')"
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
                en: "New Country(en)",
                fr: "New Country(fr)",
                th: "New Country(th)",
              },
            },
          ];
          <\/script>
        `)])),_:1})])]),e[28]||(e[28]=t()),o("section",null,[o("h2",null,u(l.$t("form.label.include")),1),e[17]||(e[17]=t()),o("div",J,[n(d(m),{modelValue:r.includedCountries,"onUpdate:modelValue":e[4]||(e[4]=i=>r.includedCountries=i),include:f,placeholder:l.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[16]||(e[16]=t()),n(a,{language:"html-vue"},{default:s(()=>e[15]||(e[15]=[t(`
          <template>
            <CountryPicker
              v-model="input"
              :include="includedCountries"
              multiple
              placeholder="$t('form.placeholder.countries')"
            />
          </template>

          <script setup lang="ts">
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const includedCountries = ['US', 'CA', 'FR', 'AU','NP'];
          <\/script>
        `)])),_:1})])]),e[29]||(e[29]=t()),o("section",null,[o("h2",null,u(l.$t("form.label.exclude")),1),e[20]||(e[20]=t()),o("div",K,[n(d(m),{modelValue:r.excludedCountries,"onUpdate:modelValue":e[5]||(e[5]=i=>r.excludedCountries=i),exclude:b,include:f,placeholder:l.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[19]||(e[19]=t()),n(a,{language:"html-vue"},{default:s(()=>e[18]||(e[18]=[t(`
          <template>
            <CountryPicker
              v-model="input"
              :exclude="excludedCountries"
              :include="includedCountries"
              multiple
              placeholder="$t('form.placeholder.countries')"
            />
          </template>

          <script setup lang="ts">
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          
          const excludedCountries = ["US", "AU"];
          const includedCountries = ["US", "CA", "FR", "AU", "NP"];
          <\/script>
        `)])),_:1})])]),e[30]||(e[30]=t()),o("section",null,[o("h2",null,u(l.$t("common.properties",{value:"CountryPickerProperties"})),1),e[21]||(e[21]=t()),n(d(c),{"columns-data":y,data:v,paginated:!1,"persist-state":!1})]),e[31]||(e[31]=t()),o("section",null,[o("h2",null,u(l.$t("common.events")),1),e[22]||(e[22]=t()),n(d(c),{"columns-data":C,data:g,paginated:!1,"persist-state":!1})]),e[32]||(e[32]=t()),o("section",null,[o("h2",null,u(l.$t("common.type")),1),e[24]||(e[24]=t()),o("div",B,[n(a,{language:"html-vue"},{default:s(()=>e[23]||(e[23]=[t(`
           interface Data {
            code: string;
            i18n: {
              en: string;
              fr: string;
              th: string;
            };
          }
          `)])),_:1})])])]),_:1},8,["subtitle","title"])}}});export{z as default};
