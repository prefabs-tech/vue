import{i as p}from"./PrefabsTechVue3Form.es-Ql6BW1dZ.js";import{d as c,M as d,N as $,o as S,e as P,f as r,h as l,t as s,A as o,a as n,u as i,v as T}from"./index-CAiRitWL.js";import{_ as D}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-QrQ6mn2y.js";import{n as B,f as L}from"./np-DQ2uz8tk.js";import{_ as U}from"./FormPage.vue_vue_type_style_index_0_lang-CcgRMzse.js";import"./PrefabsTechVue3TanstackTable.es-CCTu_o5f.js";const w="Australia",R="Canada",I="China",A="Germany",E="Egypt",k="Spain",N="France",F="Italy",G="Japan",j="United States",q={AU:w,CA:R,CN:I,DE:A,EG:E,ES:k,FR:N,IT:F,JP:G,US:j},J={class:"section-content"},V={class:"section-content"},W={class:"section-content"},z={class:"section-content"},M={class:"section-content"},H={class:"section-content"},K={class:"section-content"},O={class:"section-content"},Q={class:"section-content"},X={class:"custom-render"},Y={class:"section-content"},Z={class:"demo-country"},x="np",st=c({__name:"Index",setup(h){const{t:u}=d(),{locale:f}=d(),m={en:q,fr:L,np:B},g=[{default:"-",description:u("form.documentation.propsDescription.select.countryCode"),id:1,prop:"code",type:"String"},{default:"en",description:u("form.documentation.propsDescription.select.fallbackLocale"),id:2,prop:"fallbackLocale",type:"String"},{default:"-",description:u("form.documentation.propsDescription.select.flagsPath"),id:3,prop:"flagsPath",type:"(code: string) => string"},{default:"left",description:u("form.documentation.propsDescription.select.flagsPosition"),id:4,prop:"flagsPosition",type:"left | right | right-edge"},{default:"rectangular",description:u("form.documentation.propsDescription.select.flagsStyle"),id:5,prop:"flagsStyle",type:"circle | rectangular | square"},{default:"en",description:u("form.documentation.propsDescription.select.locale"),id:6,prop:"locale",type:"String"},{default:"{ en: defaultEnCatalogue }",description:u("form.documentation.propsDescription.select.locales"),id:7,prop:"locales",type:"Record<string, Record<string, string>>"},{default:"true",description:u("form.documentation.propsDescription.select.showFlag"),id:8,prop:"showFlag",type:"Boolean"}],y=[{description:u("form.documentation.slotDescription.country.default"),name:"default",props:"{ code: string, label: string }"}],C=e=>`https://flagcdn.com/${e.toLowerCase().trim()}.svg`;return(e,t)=>{const a=$("SshPre");return S(),P(U,{subtitle:e.$t("form.subtitle.country"),title:e.$t("form.label.country")},{default:r(()=>[l("section",null,[l("h2",null,s(e.$t("form.label.basicInput")),1),t[2]||(t[2]=o()),l("div",J,[n(i(p),{code:"US"}),t[1]||(t[1]=o()),n(a,{language:"html-vue"},{default:r(()=>[...t[0]||(t[0]=[o(`
          <template>
            <Country code="US" />
          </template>
                  
          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script>
        `,-1)])]),_:1})])]),t[50]||(t[50]=o()),l("section",null,[l("h2",null,s(e.$t("form.label.customLocale")),1),t[5]||(t[5]=o()),l("div",V,[n(i(p),{locale:x,locales:m,code:"NP"}),t[4]||(t[4]=o()),n(a,{language:"html-vue"},{default:r(()=>[...t[3]||(t[3]=[o(`
          <template>
            <Country :locale="selectedLocale" :locales="locales" code="NP" />
          </template>
                  
          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';

          import nepaliTranslation from "./np.json";

          const selectedLocale = "np";
          
          const locales = {
            np: nepaliTranslation,
          };
          <\/script>
        `,-1)])]),_:1})])]),t[51]||(t[51]=o()),l("section",null,[l("h2",null,s(e.$t("form.label.localesSupport")),1),t[8]||(t[8]=o()),l("div",W,[n(i(p),{locale:i(f),locales:m,code:"EG"},null,8,["locale"]),t[7]||(t[7]=o()),n(a,{language:"html-vue"},{default:r(()=>[...t[6]||(t[6]=[o(`
          <template>
            <Country :locale="locale" :locales="locales" code="EG" />
          </template>
                  
          <script setup lang="ts">
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { Country } from "@prefabs.tech/vue3-form";

          import englishTranslation from "./en.json";
          import frenchTranslation from "./fr.json";

          const { locale } = useI18n();
          
          const locales = {
            en: englishTranslation,
            fr: frenchTranslation,
          };
          <\/script>
        `,-1)])]),_:1})])]),t[52]||(t[52]=o()),l("section",null,[l("h2",null,s(e.$t("form.label.fallbackLocale")),1),t[11]||(t[11]=o()),l("div",z,[n(i(p),{locale:i(f),locales:m,code:"GB","fallback-locale":"np"},null,8,["locale"]),t[10]||(t[10]=o()),n(a,{language:"html-vue"},{default:r(()=>[...t[9]||(t[9]=[o(`
          <template>
            <Country
              :locale="locale"
              :locales="locales"
              code="GB"
              fallback-locale="np"
            />
          </template>
                  
          <script setup lang="ts">
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { Country } from '@prefabs.tech/vue3-form';

          import englishTranslation from "./en.json";
          import nepaliTranslation from "./np.json";
          
          const { locale } = useI18n();

          const locales = {
            en: englishTranslation,
            np: nepaliTranslation,
          };
          <\/script>
        `,-1)])]),_:1})])]),t[53]||(t[53]=o()),l("section",null,[l("h2",null,s(e.$t("form.label.flagVisibility")),1),t[14]||(t[14]=o()),l("div",M,[n(i(p),{"show-flag":!1,code:"CA"}),t[13]||(t[13]=o()),n(a,{language:"html-vue"},{default:r(()=>[...t[12]||(t[12]=[o(`
          <template>
            <Country :show-flag="false" code="CA" />
          </template>
                  
          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script>
        `,-1)])]),_:1})])]),t[54]||(t[54]=o()),l("section",null,[l("h2",null,s(e.$t("form.label.flagsStyle")),1),t[26]||(t[26]=o()),l("div",H,[l("h3",null,s(e.$t("form.label.rectangle")),1),t[18]||(t[18]=o()),n(i(p),{code:"US"}),t[19]||(t[19]=o()),n(a,{language:"html-vue"},{default:r(()=>[...t[15]||(t[15]=[o(`
          <template>
            <Country code="US"> 
          </template>

          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script>       
        `,-1)])]),_:1}),t[20]||(t[20]=o()),l("h3",null,s(e.$t("form.label.square")),1),t[21]||(t[21]=o()),n(i(p),{code:"US","flags-style":"square"}),t[22]||(t[22]=o()),n(a,{language:"html-vue"},{default:r(()=>[...t[16]||(t[16]=[o(`
          <template>
            <Country code="US" flags-style="square"> 
          </template>

          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script>          
        `,-1)])]),_:1}),t[23]||(t[23]=o()),l("h3",null,s(e.$t("form.label.circle")),1),t[24]||(t[24]=o()),n(i(p),{code:"US","flags-style":"circle"}),t[25]||(t[25]=o()),n(a,{language:"html-vue"},{default:r(()=>[...t[17]||(t[17]=[o(`
          <template>
            <Country code="US" flags-style="circle"> 
          </template>   

          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script>       
        `,-1)])]),_:1})])]),t[55]||(t[55]=o()),l("section",null,[l("h2",null,s(e.$t("form.label.flagsPosition")),1),t[38]||(t[38]=o()),l("div",K,[l("h3",null,s(e.$t("form.label.left")),1),t[30]||(t[30]=o()),n(i(p),{code:"BR"}),t[31]||(t[31]=o()),n(a,{language:"html-vue"},{default:r(()=>[...t[27]||(t[27]=[o(`
          <template>
            <Country code="BR"> 
          </template>     

          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script>  
        `,-1)])]),_:1}),t[32]||(t[32]=o()),l("h3",null,s(e.$t("form.label.right")),1),t[33]||(t[33]=o()),n(i(p),{code:"BR","flags-position":"right"}),t[34]||(t[34]=o()),n(a,{language:"html-vue"},{default:r(()=>[...t[28]||(t[28]=[o(`
          <template>
            <Country code="BR" flags-position="right"> 
          </template>

          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script> 
        `,-1)])]),_:1}),t[35]||(t[35]=o()),l("h3",null,s(e.$t("form.label.rightEdge")),1),t[36]||(t[36]=o()),n(i(p),{code:"BR","flags-position":"right-edge"}),t[37]||(t[37]=o()),n(a,{language:"html-vue"},{default:r(()=>[...t[29]||(t[29]=[o(`
          <template>
            <Country code="BR" flags-position="right-edge"> 
          </template>
          
          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script>  
        `,-1)])]),_:1})])]),t[56]||(t[56]=o()),l("section",null,[l("h2",null,s(e.$t("form.label.customFlagsPath")),1),t[41]||(t[41]=o()),l("div",O,[n(i(p),{"flags-path":C,code:"CA"}),t[40]||(t[40]=o()),n(a,{language:"html-vue"},{default:r(()=>[...t[39]||(t[39]=[o(`
          <template>
            <Country :flags-path="flagsPath" code="CA" />
          </template>
                  
          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';

          const flagsPath = (code: string) => {
            return \`https://flagcdn.com/\${code.toLowerCase().trim()}.svg\`;
          };
          <\/script>
        `,-1)])]),_:1})])]),t[57]||(t[57]=o()),l("section",null,[l("h2",null,s(e.$t("form.label.customRender")),1),t[45]||(t[45]=o()),l("div",Q,[n(i(p),{code:"JP"},{default:r(({code:b,label:v})=>[l("div",X,[l("span",{class:T(`flag-icon flag-icon-${b.toLowerCase()} flag-icon-rounded`)},null,2),t[42]||(t[42]=o()),l("span",null,s(v),1)])]),_:1}),t[44]||(t[44]=o()),n(a,{language:"html-vue"},{default:r(()=>[...t[43]||(t[43]=[o(`
          <template>
            <Country code="JP">
              <template #default="{ code, label }">
                <div class="custom-render">
                  <span :class="\`flag-icon flag-icon-\${code.toLowerCase()} flag-icon-rounded\`"></span>
                  <span>{{ label }}</span>
                </div>
              </template>
            </Country>
          </template>
                  
          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script>

          <style lang="css">
          @import "./assets/css/country.css";
          </style>
        `,-1)])]),_:1})])]),t[58]||(t[58]=o()),l("section",null,[l("h2",null,s(e.$t("form.label.missingCountryCode")),1),t[49]||(t[49]=o()),l("div",Y,[l("div",Z,[l("span",null,s(e.$t("form.label.country")),1),t[46]||(t[46]=o()),n(i(p),{code:"WW"})]),t[48]||(t[48]=o()),n(a,{language:"html-vue"},{default:r(()=>[...t[47]||(t[47]=[o(`
          <template>
            <Country code="WW" />
          </template>
                  
          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script>
        `,-1)])]),_:1})])]),t[59]||(t[59]=o()),n(D,{"props-data":g,"props-table-title":e.$t("common.properties",{value:"CountryProperties"}),"slots-data":y},null,8,["props-table-title"])]),_:1},8,["subtitle","title"])}}});export{st as default};
