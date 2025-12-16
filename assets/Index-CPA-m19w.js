import{T as m}from"./PrefabsTechVue3Form.es-BQ7YGgxA.js";import{o as f}from"./PrefabsTechVue3TanstackTable.es-dKwBpG9l.js";import{d as $,I as P,M as V,J as D,e as k,o as N,i as a,B as t,f as o,t as u,h as r,u as p,q as S}from"./index-BsbuyGkK.js";import{_ as U}from"./FormPage.vue_vue_type_style_index_0_lang-CEnPXZTC.js";const h={class:"section-content"},w={class:"section-content"},A={class:"section-content"},F={class:"section-content"},J={class:"section-content"},X=$({__name:"Index",setup(K){const{t:s}=P(),c=[{accessorKey:"prop",header:"Property"},{accessorKey:"type",header:"Type"},{accessorKey:"default",header:"Default"},{accessorKey:"description",header:"Description"}],y=[{default:"[]",description:s("form.documentation.propsDescription.select.data"),id:1,prop:"data",type:"Data[]"},{default:"en",description:s("form.documentation.propsDescription.select.locale"),id:2,prop:"locale",type:"String"},{default:"-",description:s("form.documentation.propsDescription.input.modelValue"),id:3,prop:"modelValue",type:"String | Number | Array<String|Number> | undefined"},{default:"false",description:s("form.documentation.propsDescription.select.multiple"),id:4,prop:"multiple",type:"Boolean"},{default:"-",description:s("form.documentation.propsDescription.input.name"),id:5,prop:"name",type:"String"},{default:"-",description:s("form.documentation.propsDescription.input.placeholder"),id:6,prop:"placeholder",type:"String"}],v=[{accessorKey:"name",header:"Name"},{accessorKey:"payload",header:"Payload"},{accessorKey:"description",header:"Description"}],g=[{description:s("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | number | (string | number)[] | undefined"}],l=V({basic:void 0,custom:[],multiselect:[],includedCountries:[]}),C=["US","CA","FR","AU","NP"],b=[{code:"US",i18n:{en:"United States of America",fr:"États-Unis",th:"สหรัฐอเมริกา"}},{code:"FR",i18n:{th:"France override"}},{code:"JP",i18n:{en:"Japan (overwritten)",fr:"Japon",th:"ญี่ปุ่น"}},{code:"XX",i18n:{fr:"New Country(fr)",th:"New Country(th)",en:"New Country(en)"}}];return(n,e)=>{const d=D("SshPre");return N(),k(U,{subtitle:n.$t("form.subtitle.countryPicker"),title:n.$t("form.label.countryPicker")},{toolbar:a(()=>[r(p(S),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=i=>n.$router.push("/form"))},null,8,["label"])]),default:a(()=>[e[21]||(e[21]=t()),o("section",null,[o("h2",null,u(n.$t("form.label.basicInput")),1),e[7]||(e[7]=t()),o("div",h,[r(p(m),{modelValue:l.basic,"onUpdate:modelValue":e[1]||(e[1]=i=>l.basic=i),placeholder:n.$t("form.placeholder.country")},null,8,["modelValue","placeholder"]),e[6]||(e[6]=t()),r(d,{language:"html-vue"},{default:a(()=>e[5]||(e[5]=[t(`
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
        `)])),_:1})])]),e[22]||(e[22]=t()),o("section",null,[o("h2",null,u(n.$t("form.label.multiselect")),1),e[10]||(e[10]=t()),o("div",w,[r(p(m),{modelValue:l.multiselect,"onUpdate:modelValue":e[2]||(e[2]=i=>l.multiselect=i),placeholder:n.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[9]||(e[9]=t()),r(d,{language:"html-vue"},{default:a(()=>e[8]||(e[8]=[t(`
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
        `)])),_:1})])]),e[23]||(e[23]=t()),o("section",null,[o("h2",null,u(n.$t("form.label.customData")),1),e[13]||(e[13]=t()),o("div",A,[r(p(m),{modelValue:l.custom,"onUpdate:modelValue":e[3]||(e[3]=i=>l.custom=i),data:b,placeholder:n.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[12]||(e[12]=t()),r(d,{language:"html-vue"},{default:a(()=>e[11]||(e[11]=[t(`
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
        `)])),_:1})])]),e[24]||(e[24]=t()),o("section",null,[o("h2",null,u(n.$t("form.label.include")),1),e[16]||(e[16]=t()),o("div",F,[r(p(m),{modelValue:l.includedCountries,"onUpdate:modelValue":e[4]||(e[4]=i=>l.includedCountries=i),include:C,placeholder:n.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[15]||(e[15]=t()),r(d,{language:"html-vue"},{default:a(()=>e[14]||(e[14]=[t(`
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
        `)])),_:1})])]),e[25]||(e[25]=t()),o("section",null,[o("h2",null,u(n.$t("common.properties",{value:"CountryPickerProperties"})),1),e[17]||(e[17]=t()),r(p(f),{"columns-data":c,data:y,paginated:!1,"persist-state":!1})]),e[26]||(e[26]=t()),o("section",null,[o("h2",null,u(n.$t("common.events")),1),e[18]||(e[18]=t()),r(p(f),{"columns-data":v,data:g,paginated:!1,"persist-state":!1})]),e[27]||(e[27]=t()),o("section",null,[o("h2",null,u(n.$t("common.type")),1),e[20]||(e[20]=t()),o("div",J,[r(d,{language:"html-vue"},{default:a(()=>e[19]||(e[19]=[t(`
           interface Data {
            code: string;
            i18n: {
              en: string;
              fr: string;
              th: string;
            };
          }
          `)])),_:1})])])]),_:1},8,["subtitle","title"])}}});export{X as default};
