import{T as m}from"./PrefabsTechVue3Form.es-D9-_5BWA.js";import{o as f}from"./PrefabsTechVue3TanstackTable.es-tWEKG63H.js";import{d as $,I as U,M as V,J as S,e as D,o as k,i as s,B as t,f as o,t as u,h as l,u as p,q as A}from"./index-HpHJTGi-.js";import{_ as K}from"./FormPage.vue_vue_type_style_index_0_lang-DtikJTEb.js";const B={class:"section-content"},F={class:"section-content"},h={class:"section-content"},w={class:"section-content"},I={class:"section-content"},L={class:"section-content"},J={class:"section-content"},q=$({__name:"Index",setup(R){const{t:d}=U(),C=[{accessorKey:"prop",header:"Property"},{accessorKey:"type",header:"Type"},{accessorKey:"default",header:"Default"},{accessorKey:"description",header:"Description"}],y=[{default:"[]",description:d("form.documentation.propsDescription.select.data"),id:1,prop:"data",type:"CountryOption[]"},{default:"[]",description:d("form.documentation.propsDescription.select.exclude"),id:2,prop:"exclude",type:"String"},{default:"[]",description:d("form.documentation.propsDescription.select.include"),id:3,prop:"include",type:"String"},{default:"en",description:d("form.documentation.propsDescription.select.locale"),id:4,prop:"locale",type:"String"},{default:"-",description:d("form.documentation.propsDescription.input.modelValue"),id:5,prop:"modelValue",type:"String | Number | Array<String|Number> | undefined"},{default:"false",description:d("form.documentation.propsDescription.select.multiple"),id:6,prop:"multiple",type:"Boolean"},{default:"-",description:d("form.documentation.propsDescription.input.placeholder"),id:7,prop:"placeholder",type:"String"}],v=[{accessorKey:"name",header:"Name"},{accessorKey:"payload",header:"Payload"},{accessorKey:"description",header:"Description"}],g=[{description:d("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | number | (string | number)[] | undefined"}],P=[{code:"NP",i18n:{np:"नेपाल"}},{code:"US",i18n:{np:"संयुक्त राज्य अमेरिका"}},{code:"CN",i18n:{np:"चीन"}},{code:"GB",i18n:{np:"बेलायत"}},{code:"IN",i18n:{np:"भारत"}},{code:"PK",i18n:{np:"पाकिस्तान"}},{code:"LK",i18n:{np:"श्रीलंका"}},{code:"BD",i18n:{np:"बंगलादेश"}},{code:"AF",i18n:{np:"अफगानिस्तान"}}],r=V({basic:void 0,custom:[],customLocale:[],excludedCountries:[],includedCountries:[],multiselect:[]}),b=["US","AU"],c=["US","CA","FR","AU","NP"],N=[{code:"US",i18n:{en:"United States of America",fr:"États-Unis",th:"สหรัฐอเมริกา"}},{code:"FR",i18n:{th:"France override"}},{code:"JP",i18n:{en:"Japan (overwritten)",fr:"Japon",th:"ญี่ปุ่น"}},{code:"XX",i18n:{fr:"New Country(fr)",th:"New Country(th)",en:"New Country(en)"}}];return(n,e)=>{const a=S("SshPre");return k(),D(K,{subtitle:n.$t("form.subtitle.countryPicker"),title:n.$t("form.label.countryPicker")},{toolbar:s(()=>[l(p(A),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=i=>n.$router.push("/form"))},null,8,["label"])]),default:s(()=>[e[29]||(e[29]=t()),o("section",null,[o("h2",null,u(n.$t("form.label.basicInput")),1),e[9]||(e[9]=t()),o("div",B,[l(p(m),{modelValue:r.basic,"onUpdate:modelValue":e[1]||(e[1]=i=>r.basic=i),placeholder:n.$t("form.placeholder.country")},null,8,["modelValue","placeholder"]),e[8]||(e[8]=t()),l(a,{language:"html-vue"},{default:s(()=>e[7]||(e[7]=[t(`
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
        `)])),_:1})])]),e[30]||(e[30]=t()),o("section",null,[o("h2",null,u(n.$t("form.label.multiselect")),1),e[12]||(e[12]=t()),o("div",F,[l(p(m),{modelValue:r.multiselect,"onUpdate:modelValue":e[2]||(e[2]=i=>r.multiselect=i),placeholder:n.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[11]||(e[11]=t()),l(a,{language:"html-vue"},{default:s(()=>e[10]||(e[10]=[t(`
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
        `)])),_:1})])]),e[31]||(e[31]=t()),o("section",null,[o("h2",null,u(n.$t("form.label.customData")),1),e[15]||(e[15]=t()),o("div",h,[l(p(m),{modelValue:r.custom,"onUpdate:modelValue":e[3]||(e[3]=i=>r.custom=i),data:N,placeholder:n.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[14]||(e[14]=t()),l(a,{language:"html-vue"},{default:s(()=>e[13]||(e[13]=[t(`
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
        `)])),_:1})])]),e[32]||(e[32]=t()),o("section",null,[o("h2",null,u(n.$t("form.label.include")),1),e[18]||(e[18]=t()),o("div",w,[l(p(m),{modelValue:r.includedCountries,"onUpdate:modelValue":e[4]||(e[4]=i=>r.includedCountries=i),include:c,placeholder:n.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[17]||(e[17]=t()),l(a,{language:"html-vue"},{default:s(()=>e[16]||(e[16]=[t(`
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
          const input = ref();
          <\/script>
        `)])),_:1})])]),e[33]||(e[33]=t()),o("section",null,[o("h2",null,u(n.$t("form.label.exclude")),1),e[21]||(e[21]=t()),o("div",I,[l(p(m),{modelValue:r.excludedCountries,"onUpdate:modelValue":e[5]||(e[5]=i=>r.excludedCountries=i),exclude:b,include:c,placeholder:n.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[20]||(e[20]=t()),l(a,{language:"html-vue"},{default:s(()=>e[19]||(e[19]=[t(`
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
          const input = ref();
          <\/script>
        `)])),_:1})])]),e[34]||(e[34]=t()),o("section",null,[o("h2",null,u(n.$t("form.label.customLocale")),1),e[24]||(e[24]=t()),o("div",L,[l(p(m),{modelValue:r.customLocale,"onUpdate:modelValue":e[6]||(e[6]=i=>r.customLocale=i),data:P,include:["NP","US","CN","GB","PK","IN","LK","BD","AF"],placeholder:n.$t("form.placeholder.countries"),locale:"np",multiple:""},null,8,["modelValue","placeholder"]),e[23]||(e[23]=t()),l(a,{language:"html-vue"},{default:s(()=>e[22]||(e[22]=[t(`
          <template>
              <CountryPicker
                v-model="input"
                :data="nepaliCountries"
                :include="['NP', 'US', 'CN', 'GB', 'IN', 'PK','LK','BD','AF']"
                locale="np"
                multiple
                placeholder="$t('form.placeholder.countries')"
              />
          </template>

          <script setup lang="ts">
          import { ref } from 'vue';
          
          const input = ref();
          const nepaliCountries = [
            { code: 'NP', i18n: { np: 'नेपाल' } },
            { code: 'US', i18n: { np: 'संयुक्त राज्य अमेरिका' } },
            { code: 'CN', i18n: { np: 'चीन' } },
            { code: 'GB', i18n: { np: 'बेलायत' } },
            { code: 'IN', i18n: { np: 'भारत' } },
            { code: "PK", i18n: { np: "पाकिस्तान" } },
            { code: "LK", i18n: { np: "श्रीलंका" } },
            { code: "BD", i18n: { np: "बंगलादेश" } },
            { code: "AF", i18n: { np: "अफगानिस्तान" } },
          ];
          <\/script>
        `)])),_:1})])]),e[35]||(e[35]=t()),o("section",null,[o("h2",null,u(n.$t("common.properties",{value:"CountryPickerProperties"})),1),e[25]||(e[25]=t()),l(p(f),{"columns-data":C,data:y,paginated:!1,"persist-state":!1})]),e[36]||(e[36]=t()),o("section",null,[o("h2",null,u(n.$t("common.events")),1),e[26]||(e[26]=t()),l(p(f),{"columns-data":v,data:g,paginated:!1,"persist-state":!1})]),e[37]||(e[37]=t()),o("section",null,[o("h2",null,u(n.$t("common.type")),1),e[28]||(e[28]=t()),o("div",J,[l(a,{language:"html-vue"},{default:s(()=>e[27]||(e[27]=[t(`
            interface CountryOption {
              code: string;
              i18n: {
                en: string;
                fr: string;
                th: string;
                [key: string]: string;
              };
            }
           
            interface CountryData {
              code: string;
              i18n?: Partial  <CountryOption["i18n"];> 
            };
        `)])),_:1})])])]),_:1},8,["subtitle","title"])}}});export{q as default};
