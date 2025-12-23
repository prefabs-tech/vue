import{T as m}from"./PrefabsTechVue3Form.es-JJOMbn2S.js";import{o as c}from"./PrefabsTechVue3TanstackTable.es-DcZUwQPE.js";import{d as $,I as D,M as S,J as V,e as b,o as A,i as u,B as t,f as o,t as p,h as n,u as d,q as B}from"./index-DLHnW3Hk.js";import{_ as F}from"./FormPage.vue_vue_type_style_index_0_lang-At3nlgdF.js";const K={class:"section-content"},k={class:"section-content"},I={class:"section-content"},L={class:"section-content"},h={class:"section-content"},R={class:"section-content"},w={class:"section-content"},G={class:"section-content"},J={class:"section-content"},q=$({__name:"Index",setup(O){const{t:s}=D(),v=[{accessorKey:"prop",header:"Property"},{accessorKey:"type",header:"Type"},{accessorKey:"default",header:"Default"},{accessorKey:"description",header:"Description"}],C=[{default:"[]",description:s("form.documentation.propsDescription.select.data"),id:1,prop:"data",type:"CountryOption[]"},{default:"[]",description:s("form.documentation.propsDescription.select.exclude"),id:2,prop:"exclude",type:"String[]"},{default:"[]",description:s("form.documentation.propsDescription.select.favorites"),id:3,prop:"favorites",type:"String[]"},{default:"true",description:s("form.documentation.propsDescription.select.hasSortedOption"),id:4,prop:"has-sorted-options",type:"Boolean"},{default:"[]",description:s("form.documentation.propsDescription.select.include"),id:5,prop:"include",type:"String[]"},{default:"true",description:s("form.documentation.propsDescription.select.includeFavorites"),id:6,prop:"includeFavorites",type:"Boolean"},{default:"en",description:s("form.documentation.propsDescription.select.locale"),id:7,prop:"locale",type:"String"},{default:"-",description:s("form.documentation.propsDescription.input.modelValue"),id:8,prop:"modelValue",type:"String | Number | Array<String|Number> | undefined"},{default:"false",description:s("form.documentation.propsDescription.select.multiple"),id:9,prop:"multiple",type:"Boolean"},{default:"-",description:s("form.documentation.propsDescription.input.placeholder"),id:10,prop:"placeholder",type:"String"}],y=[{accessorKey:"name",header:"Name"},{accessorKey:"payload",header:"Payload"},{accessorKey:"description",header:"Description"}],N=[{description:s("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | number | (string | number)[] | undefined"}],P=[{code:"NP",i18n:{np:"नेपाल"}},{code:"US",i18n:{np:"संयुक्त राज्य अमेरिका"}},{code:"CN",i18n:{np:"चीन"}},{code:"GB",i18n:{np:"बेलायत"}},{code:"IN",i18n:{np:"भारत"}},{code:"PK",i18n:{np:"पाकिस्तान"}},{code:"LK",i18n:{np:"श्रीलंका"}},{code:"BD",i18n:{np:"बंगलादेश"}},{code:"AF",i18n:{np:"अफगानिस्तान"}}],r=S({basic:void 0,custom:[],customLocale:[],excludedCountries:[],includedCountries:[],multiselect:[]}),g=["US","AU"],f=["US","CA","FR","AU","NP"],U=[{code:"US",i18n:{en:"United States of America",fr:"États-Unis",th:"สหรัฐอเมริกา"}},{code:"FR",i18n:{th:"France override"}},{code:"JP",i18n:{en:"Japan (overwritten)",fr:"Japon",th:"ญี่ปุ่น"}},{code:"XX",i18n:{fr:"New Country(fr)",th:"New Country(th)",en:"New Country(en)"}}];return(l,e)=>{const a=V("SshPre");return A(),b(F,{subtitle:l.$t("form.subtitle.countryPicker"),title:l.$t("form.label.countryPicker")},{toolbar:u(()=>[n(d(B),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=i=>l.$router.push("/form"))},null,8,["label"])]),default:u(()=>[e[37]||(e[37]=t()),o("section",null,[o("h2",null,p(l.$t("form.label.basicInput")),1),e[11]||(e[11]=t()),o("div",K,[n(d(m),{modelValue:r.basic,"onUpdate:modelValue":e[1]||(e[1]=i=>r.basic=i),placeholder:l.$t("form.placeholder.country")},null,8,["modelValue","placeholder"]),e[10]||(e[10]=t()),n(a,{language:"html-vue"},{default:u(()=>e[9]||(e[9]=[t(`
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
        `)])),_:1})])]),e[38]||(e[38]=t()),o("section",null,[o("h2",null,p(l.$t("form.label.multiselect")),1),e[14]||(e[14]=t()),o("div",k,[n(d(m),{modelValue:r.multiselect,"onUpdate:modelValue":e[2]||(e[2]=i=>r.multiselect=i),placeholder:l.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[13]||(e[13]=t()),n(a,{language:"html-vue"},{default:u(()=>e[12]||(e[12]=[t(`
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
        `)])),_:1})])]),e[39]||(e[39]=t()),o("section",null,[o("h2",null,p(l.$t("form.label.customData")),1),e[17]||(e[17]=t()),o("div",I,[n(d(m),{modelValue:r.custom,"onUpdate:modelValue":e[3]||(e[3]=i=>r.custom=i),data:U,placeholder:l.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[16]||(e[16]=t()),n(a,{language:"html-vue"},{default:u(()=>e[15]||(e[15]=[t(`
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
        `)])),_:1})])]),e[40]||(e[40]=t()),o("section",null,[o("h2",null,p(l.$t("form.label.include")),1),e[20]||(e[20]=t()),o("div",L,[n(d(m),{modelValue:r.includedCountries,"onUpdate:modelValue":e[4]||(e[4]=i=>r.includedCountries=i),include:f,placeholder:l.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[19]||(e[19]=t()),n(a,{language:"html-vue"},{default:u(()=>e[18]||(e[18]=[t(`
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
        `)])),_:1})])]),e[41]||(e[41]=t()),o("section",null,[o("h2",null,p(l.$t("form.label.exclude")),1),e[23]||(e[23]=t()),o("div",h,[n(d(m),{modelValue:r.excludedCountries,"onUpdate:modelValue":e[5]||(e[5]=i=>r.excludedCountries=i),exclude:g,include:f,placeholder:l.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[22]||(e[22]=t()),n(a,{language:"html-vue"},{default:u(()=>e[21]||(e[21]=[t(`
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
        `)])),_:1})])]),e[42]||(e[42]=t()),o("section",null,[o("h2",null,p(l.$t("form.label.customLocale")),1),e[26]||(e[26]=t()),o("div",R,[n(d(m),{modelValue:r.customLocale,"onUpdate:modelValue":e[6]||(e[6]=i=>r.customLocale=i),data:P,include:["NP","US","CN","GB","PK","IN","LK","BD","AF"],placeholder:l.$t("form.placeholder.countries"),locale:"np",multiple:""},null,8,["modelValue","placeholder"]),e[25]||(e[25]=t()),n(a,{language:"html-vue"},{default:u(()=>e[24]||(e[24]=[t(`
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
        `)])),_:1})])]),e[43]||(e[43]=t()),o("section",null,[o("h2",null,p(l.$t("form.label.favorites")),1),e[29]||(e[29]=t()),o("div",w,[n(d(m),{modelValue:r.favorites,"onUpdate:modelValue":e[7]||(e[7]=i=>r.favorites=i),exclude:["CN","AF"],favorites:["NP","US","ID","QW"],"has-sorted-options":!1,include:["NP","US","CN","GB","IR","PK","IN","LK","BD","AF"],placeholder:l.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[28]||(e[28]=t()),n(a,{language:"html-vue"},{default:u(()=>e[27]||(e[27]=[t(`
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
        `)])),_:1})])]),e[44]||(e[44]=t()),o("section",null,[o("h2",null,p(l.$t("form.label.includeFavorites")),1),e[32]||(e[32]=t()),o("div",G,[n(d(m),{modelValue:r.favorites,"onUpdate:modelValue":e[8]||(e[8]=i=>r.favorites=i),exclude:["CN","AF"],favorites:["NP","US","ID","QW"],"has-sorted-options":!1,include:["NP","US","CN","GB","IR","PK","IN","LK","BD","AF"],"include-favorites":!1,placeholder:l.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","placeholder"]),e[31]||(e[31]=t()),n(a,{language:"html-vue"},{default:u(()=>e[30]||(e[30]=[t(`
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
        `)])),_:1})])]),e[45]||(e[45]=t()),o("section",null,[o("h2",null,p(l.$t("common.properties",{value:"CountryPickerProperties"})),1),e[33]||(e[33]=t()),n(d(c),{"columns-data":v,data:C,paginated:!1,"persist-state":!1})]),e[46]||(e[46]=t()),o("section",null,[o("h2",null,p(l.$t("common.events")),1),e[34]||(e[34]=t()),n(d(c),{"columns-data":y,data:N,paginated:!1,"persist-state":!1})]),e[47]||(e[47]=t()),o("section",null,[o("h2",null,p(l.$t("common.type")),1),e[36]||(e[36]=t()),o("div",J,[n(a,{language:"html-vue"},{default:u(()=>e[35]||(e[35]=[t(`
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
