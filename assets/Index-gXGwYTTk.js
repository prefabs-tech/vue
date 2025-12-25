import{T as m}from"./PrefabsTechVue3Form.es-BoUjuj1d.js";import{o as c}from"./PrefabsTechVue3TanstackTable.es-2c4k5kzO.js";import{d as D,I as S,M as V,J as $,e as b,o as A,i as p,f as o,B as t,t as u,h as l,u as d}from"./index-DpADEPPw.js";import{_ as B}from"./FormPage.vue_vue_type_style_index_0_lang-CsFxIGFH.js";const F={class:"section-content"},K={class:"section-content"},I={class:"section-content"},k={class:"section-content"},h={class:"section-content"},L={class:"section-content"},R={class:"section-content"},w={class:"section-content"},G={class:"section-content"},X=D({__name:"Index",setup(J){const{t:s}=S(),v=[{accessorKey:"prop",header:"Property"},{accessorKey:"type",header:"Type"},{accessorKey:"default",header:"Default"},{accessorKey:"description",header:"Description"}],C=[{default:"[]",description:s("form.documentation.propsDescription.select.data"),id:1,prop:"data",type:"CountryOption[]"},{default:"[]",description:s("form.documentation.propsDescription.select.exclude"),id:2,prop:"exclude",type:"String[]"},{default:"[]",description:s("form.documentation.propsDescription.select.favorites"),id:3,prop:"favorites",type:"String[]"},{default:"true",description:s("form.documentation.propsDescription.select.hasSortedOption"),id:4,prop:"has-sorted-options",type:"Boolean"},{default:"[]",description:s("form.documentation.propsDescription.select.include"),id:5,prop:"include",type:"String[]"},{default:"true",description:s("form.documentation.propsDescription.select.includeFavorites"),id:6,prop:"includeFavorites",type:"Boolean"},{default:"en",description:s("form.documentation.propsDescription.select.locale"),id:7,prop:"locale",type:"String"},{default:"-",description:s("form.documentation.propsDescription.input.modelValue"),id:8,prop:"modelValue",type:"String | Number | Array<String|Number> | undefined"},{default:"false",description:s("form.documentation.propsDescription.select.multiple"),id:9,prop:"multiple",type:"Boolean"},{default:"-",description:s("form.documentation.propsDescription.input.placeholder"),id:10,prop:"placeholder",type:"String"}],y=[{accessorKey:"name",header:"Name"},{accessorKey:"payload",header:"Payload"},{accessorKey:"description",header:"Description"}],N=[{description:s("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | number | (string | number)[] | undefined"}],P=[{code:"NP",i18n:{np:"नेपाल"}},{code:"US",i18n:{np:"संयुक्त राज्य अमेरिका"}},{code:"CN",i18n:{np:"चीन"}},{code:"GB",i18n:{np:"बेलायत"}},{code:"IN",i18n:{np:"भारत"}},{code:"PK",i18n:{np:"पाकिस्तान"}},{code:"LK",i18n:{np:"श्रीलंका"}},{code:"BD",i18n:{np:"बंगलादेश"}},{code:"AF",i18n:{np:"अफगानिस्तान"}}],r=V({basic:void 0,custom:[],customLocale:[],excludedCountries:[],includedCountries:[],multiselect:[]}),g=["US","AU"],f=["US","CA","FR","AU","NP"],U=[{code:"US",i18n:{en:"United States of America",fr:"États-Unis",th:"สหรัฐอเมริกา"}},{code:"FR",i18n:{th:"France override"}},{code:"JP",i18n:{en:"Japan (overwritten)",fr:"Japon",th:"ญี่ปุ่น"}},{code:"XX",i18n:{fr:"New Country(fr)",th:"New Country(th)",en:"New Country(en)"}}];return(n,e)=>{const a=$("SshPre");return A(),b(B,{subtitle:n.$t("form.subtitle.countryPicker"),title:n.$t("form.label.countryPicker")},{default:p(()=>[o("section",null,[o("h2",null,u(n.$t("form.label.basicInput")),1),e[10]||(e[10]=t()),o("div",F,[l(d(m),{modelValue:r.basic,"onUpdate:modelValue":e[0]||(e[0]=i=>r.basic=i),placeholder:n.$t("form.placeholder.country")},null,8,["modelValue","placeholder"]),e[9]||(e[9]=t()),l(a,{language:"html-vue"},{default:p(()=>e[8]||(e[8]=[t(`
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
        `)])),_:1})])]),e[36]||(e[36]=t()),o("section",null,[o("h2",null,u(n.$t("form.label.multiselect")),1),e[13]||(e[13]=t()),o("div",K,[l(d(m),{modelValue:r.multiselect,"onUpdate:modelValue":e[1]||(e[1]=i=>r.multiselect=i),placeholder:n.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[12]||(e[12]=t()),l(a,{language:"html-vue"},{default:p(()=>e[11]||(e[11]=[t(`
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
        `)])),_:1})])]),e[37]||(e[37]=t()),o("section",null,[o("h2",null,u(n.$t("form.label.customData")),1),e[16]||(e[16]=t()),o("div",I,[l(d(m),{modelValue:r.custom,"onUpdate:modelValue":e[2]||(e[2]=i=>r.custom=i),data:U,placeholder:n.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[15]||(e[15]=t()),l(a,{language:"html-vue"},{default:p(()=>e[14]||(e[14]=[t(`
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
        `)])),_:1})])]),e[38]||(e[38]=t()),o("section",null,[o("h2",null,u(n.$t("form.label.include")),1),e[19]||(e[19]=t()),o("div",k,[l(d(m),{modelValue:r.includedCountries,"onUpdate:modelValue":e[3]||(e[3]=i=>r.includedCountries=i),include:f,placeholder:n.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[18]||(e[18]=t()),l(a,{language:"html-vue"},{default:p(()=>e[17]||(e[17]=[t(`
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
        `)])),_:1})])]),e[39]||(e[39]=t()),o("section",null,[o("h2",null,u(n.$t("form.label.exclude")),1),e[22]||(e[22]=t()),o("div",h,[l(d(m),{modelValue:r.excludedCountries,"onUpdate:modelValue":e[4]||(e[4]=i=>r.excludedCountries=i),exclude:g,include:f,placeholder:n.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[21]||(e[21]=t()),l(a,{language:"html-vue"},{default:p(()=>e[20]||(e[20]=[t(`
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
        `)])),_:1})])]),e[40]||(e[40]=t()),o("section",null,[o("h2",null,u(n.$t("form.label.customLocale")),1),e[25]||(e[25]=t()),o("div",L,[l(d(m),{modelValue:r.customLocale,"onUpdate:modelValue":e[5]||(e[5]=i=>r.customLocale=i),data:P,include:["NP","US","CN","GB","PK","IN","LK","BD","AF"],placeholder:n.$t("form.placeholder.countries"),locale:"np",multiple:""},null,8,["modelValue","placeholder"]),e[24]||(e[24]=t()),l(a,{language:"html-vue"},{default:p(()=>e[23]||(e[23]=[t(`
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
        `)])),_:1})])]),e[41]||(e[41]=t()),o("section",null,[o("h2",null,u(n.$t("form.label.favorites")),1),e[28]||(e[28]=t()),o("div",R,[l(d(m),{modelValue:r.favorites,"onUpdate:modelValue":e[6]||(e[6]=i=>r.favorites=i),exclude:["CN","AF"],favorites:["NP","US","ID","QW"],"has-sorted-options":!1,include:["NP","US","CN","GB","IR","PK","IN","LK","BD","AF"],placeholder:n.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[27]||(e[27]=t()),l(a,{language:"html-vue"},{default:p(()=>e[26]||(e[26]=[t(`
          <template>
              <CountryPicker
                v-model="input"
                :exclude="['CN', 'AF']"
                :favorites="['NP', 'US','ID','QW]"
                :has-sorted-options="false"
                :include="['NP', 'US', 'CN', 'GB', 'PK','IR','IN', 'LK', 'BD', 'AF']"
                multiple
                placeholder="$t('form.placeholder.countries')"
              />
          </template>

          <script setup lang="ts">
          import { ref } from 'vue';
          
          const input = ref();
          <\/script>
        `)])),_:1})])]),e[42]||(e[42]=t()),o("section",null,[o("h2",null,u(n.$t("form.label.includeFavorites")),1),e[31]||(e[31]=t()),o("div",w,[l(d(m),{modelValue:r.favorites,"onUpdate:modelValue":e[7]||(e[7]=i=>r.favorites=i),exclude:["CN","AF"],favorites:["NP","US","ID","QW"],"has-sorted-options":!1,include:["NP","US","CN","GB","IR","PK","IN","LK","BD","AF"],"include-favorites":!1,placeholder:n.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[30]||(e[30]=t()),l(a,{language:"html-vue"},{default:p(()=>e[29]||(e[29]=[t(`
          <template>
              <CountryPicker
                v-model="input"
                :exclude="['CN', 'AF']"
                :favorites="['NP', 'US','ID','QW]"
                :has-sorted-options="false"
                :include="['NP', 'US', 'CN', 'GB', 'PK','IR','IN', 'LK', 'BD', 'AF']"
                :include-favorites="false"
                multiple
                placeholder="$t('form.placeholder.countries')"
              />
          </template>

          <script setup lang="ts">
          import { ref } from 'vue';
          
          const input = ref();
          <\/script>
        `)])),_:1})])]),e[43]||(e[43]=t()),o("section",null,[o("h2",null,u(n.$t("common.properties",{value:"CountryPickerProperties"})),1),e[32]||(e[32]=t()),l(d(c),{"columns-data":v,data:C,paginated:!1,"persist-state":!1})]),e[44]||(e[44]=t()),o("section",null,[o("h2",null,u(n.$t("common.events")),1),e[33]||(e[33]=t()),l(d(c),{"columns-data":y,data:N,paginated:!1,"persist-state":!1})]),e[45]||(e[45]=t()),o("section",null,[o("h2",null,u(n.$t("common.type")),1),e[35]||(e[35]=t()),o("div",G,[l(a,{language:"html-vue"},{default:p(()=>e[34]||(e[34]=[t(`
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
        `)])),_:1})])])]),_:1},8,["subtitle","title"])}}});export{X as default};
