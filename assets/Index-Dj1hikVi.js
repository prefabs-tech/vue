import{D as e,E as t,On as n,St as r,Zn as i,_ as a,k as o,mt as s,qt as c,tr as l,v as u}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{T as d}from"./PrefabsTechVue3Layout.es-DjWCbXPc.js";import{t as f}from"./FormPage-Ca1LZeR4.js";import{S as p}from"./PrefabsTechVue3TanstackTable.es-Dqv6JrPc.js";import{t as m}from"./ComponentDocumentation-CFBF3GmY.js";import{n as h,t as g}from"./np-Bq3MDNyj.js";var _={AU:`Australia`,CA:`Canada`,CN:`China`,DE:`Germany`,EG:`Egypt`,ES:`Spain`,FR:`France`,IT:`Italy`,JP:`Japan`,US:`United States`},v={class:`section-content`},y={class:`section-content`},b={class:`section-content`},x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w={class:`section-content`},T={class:`section-content`},E={class:`section-content`},D={class:`custom-render`},O={class:`section-content`},k={class:`demo-country`},A=o({name:`CountryDisplayDemo`,setup(o){let{t:A}=d(),{locale:j}=d(),M={en:_,fr:h,np:g},N=[{default:`-`,description:A(`form.documentation.propsDescription.select.countryCode`),id:`1`,prop:`code`,type:`String`},{default:`en`,description:A(`form.documentation.propsDescription.select.fallbackLocale`),id:`2`,prop:`fallbackLocale`,type:`String`},{default:`-`,description:A(`form.documentation.propsDescription.select.flagsPath`),id:`3`,prop:`flagsPath`,type:`(code: string) => string`},{default:`left`,description:A(`form.documentation.propsDescription.select.flagsPosition`),id:`4`,prop:`flagsPosition`,type:`left | right | right-edge`},{default:`rectangular`,description:A(`form.documentation.propsDescription.select.flagsStyle`),id:`5`,prop:`flagsStyle`,type:`circle | rectangular | square`},{default:`en`,description:A(`form.documentation.propsDescription.select.locale`),id:`6`,prop:`locale`,type:`String`},{default:`{ en: defaultEnCatalogue }`,description:A(`form.documentation.propsDescription.select.locales`),id:`7`,prop:`locales`,type:`Record<string, Record<string, string>>`},{default:`true`,description:A(`form.documentation.propsDescription.select.showFlag`),id:`8`,prop:`showFlag`,type:`Boolean`}],P=[{description:A(`form.documentation.slotDescription.country.default`),name:`default`,props:`{ code: string, label: string }`}],F=e=>`https://flagcdn.com/${e.toLowerCase().trim()}.svg`;return(o,d)=>{let h=r(`SshPre`);return s(),u(f,{subtitle:o.$t(`form.subtitle.country`),title:o.$t(`form.label.country`)},{default:c(()=>[a(`section`,null,[a(`h2`,null,l(o.$t(`form.label.basicInput`)),1),d[2]||=t(),a(`div`,v,[e(n(p),{code:`US`}),d[1]||=t(),e(h,{language:`html-vue`},{default:c(()=>[...d[0]||=[t(`
          <template>
            <Country code="US" />
          </template>
                  
          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script>
        `,-1)]]),_:1})])]),d[50]||=t(),a(`section`,null,[a(`h2`,null,l(o.$t(`form.label.customLocale`)),1),d[5]||=t(),a(`div`,y,[e(n(p),{locale:`np`,locales:M,code:`NP`}),d[4]||=t(),e(h,{language:`html-vue`},{default:c(()=>[...d[3]||=[t(`
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
        `,-1)]]),_:1})])]),d[51]||=t(),a(`section`,null,[a(`h2`,null,l(o.$t(`form.label.localesSupport`)),1),d[8]||=t(),a(`div`,b,[e(n(p),{locale:n(j),locales:M,code:`EG`},null,8,[`locale`]),d[7]||=t(),e(h,{language:`html-vue`},{default:c(()=>[...d[6]||=[t(`
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
        `,-1)]]),_:1})])]),d[52]||=t(),a(`section`,null,[a(`h2`,null,l(o.$t(`form.label.fallbackLocale`)),1),d[11]||=t(),a(`div`,x,[e(n(p),{locale:n(j),locales:M,code:`GB`,"fallback-locale":`np`},null,8,[`locale`]),d[10]||=t(),e(h,{language:`html-vue`},{default:c(()=>[...d[9]||=[t(`
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
        `,-1)]]),_:1})])]),d[53]||=t(),a(`section`,null,[a(`h2`,null,l(o.$t(`form.label.flagVisibility`)),1),d[14]||=t(),a(`div`,S,[e(n(p),{"show-flag":!1,code:`CA`}),d[13]||=t(),e(h,{language:`html-vue`},{default:c(()=>[...d[12]||=[t(`
          <template>
            <Country :show-flag="false" code="CA" />
          </template>
                  
          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script>
        `,-1)]]),_:1})])]),d[54]||=t(),a(`section`,null,[a(`h2`,null,l(o.$t(`form.label.flagsStyle`)),1),d[26]||=t(),a(`div`,C,[a(`h3`,null,l(o.$t(`form.label.rectangle`)),1),d[18]||=t(),e(n(p),{code:`US`}),d[19]||=t(),e(h,{language:`html-vue`},{default:c(()=>[...d[15]||=[t(`
          <template>
            <Country code="US"> 
          </template>

          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script>       
        `,-1)]]),_:1}),d[20]||=t(),a(`h3`,null,l(o.$t(`form.label.square`)),1),d[21]||=t(),e(n(p),{code:`US`,"flags-style":`square`}),d[22]||=t(),e(h,{language:`html-vue`},{default:c(()=>[...d[16]||=[t(`
          <template>
            <Country code="US" flags-style="square"> 
          </template>

          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script>          
        `,-1)]]),_:1}),d[23]||=t(),a(`h3`,null,l(o.$t(`form.label.circle`)),1),d[24]||=t(),e(n(p),{code:`US`,"flags-style":`circle`}),d[25]||=t(),e(h,{language:`html-vue`},{default:c(()=>[...d[17]||=[t(`
          <template>
            <Country code="US" flags-style="circle"> 
          </template>   

          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script>       
        `,-1)]]),_:1})])]),d[55]||=t(),a(`section`,null,[a(`h2`,null,l(o.$t(`form.label.flagsPosition`)),1),d[38]||=t(),a(`div`,w,[a(`h3`,null,l(o.$t(`form.label.left`)),1),d[30]||=t(),e(n(p),{code:`BR`}),d[31]||=t(),e(h,{language:`html-vue`},{default:c(()=>[...d[27]||=[t(`
          <template>
            <Country code="BR"> 
          </template>     

          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script>  
        `,-1)]]),_:1}),d[32]||=t(),a(`h3`,null,l(o.$t(`form.label.right`)),1),d[33]||=t(),e(n(p),{code:`BR`,"flags-position":`right`}),d[34]||=t(),e(h,{language:`html-vue`},{default:c(()=>[...d[28]||=[t(`
          <template>
            <Country code="BR" flags-position="right"> 
          </template>

          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script> 
        `,-1)]]),_:1}),d[35]||=t(),a(`h3`,null,l(o.$t(`form.label.rightEdge`)),1),d[36]||=t(),e(n(p),{code:`BR`,"flags-position":`right-edge`}),d[37]||=t(),e(h,{language:`html-vue`},{default:c(()=>[...d[29]||=[t(`
          <template>
            <Country code="BR" flags-position="right-edge"> 
          </template>
          
          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script>  
        `,-1)]]),_:1})])]),d[56]||=t(),a(`section`,null,[a(`h2`,null,l(o.$t(`form.label.customFlagsPath`)),1),d[41]||=t(),a(`div`,T,[e(n(p),{"flags-path":F,code:`CA`}),d[40]||=t(),e(h,{language:`html-vue`},{default:c(()=>[...d[39]||=[t(`
          <template>
            <Country :flags-path="flagsPath" code="CA" />
          </template>
                  
          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';

          const flagsPath = (code: string) => {
            return \`https://flagcdn.com/\${code.toLowerCase().trim()}.svg\`;
          };
          <\/script>
        `,-1)]]),_:1})])]),d[57]||=t(),a(`section`,null,[a(`h2`,null,l(o.$t(`form.label.customRender`)),1),d[45]||=t(),a(`div`,E,[e(n(p),{code:`JP`},{default:c(({code:e,label:n})=>[a(`div`,D,[a(`span`,{class:i(`flag-icon flag-icon-${e.toLowerCase()} flag-icon-rounded`)},null,2),d[42]||=t(),a(`span`,null,l(n),1)])]),_:1}),d[44]||=t(),e(h,{language:`html-vue`},{default:c(()=>[...d[43]||=[t(`
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
        `,-1)]]),_:1})])]),d[58]||=t(),a(`section`,null,[a(`h2`,null,l(o.$t(`form.label.missingCountryCode`)),1),d[49]||=t(),a(`div`,O,[a(`div`,k,[a(`span`,null,l(o.$t(`form.label.country`)),1),d[46]||=t(),e(n(p),{code:`WW`})]),d[48]||=t(),e(h,{language:`html-vue`},{default:c(()=>[...d[47]||=[t(`
          <template>
            <Country code="WW" />
          </template>
                  
          <script setup lang="ts">
          import { Country } from '@prefabs.tech/vue3-form';
          <\/script>
        `,-1)]]),_:1})])]),d[59]||=t(),e(m,{"props-data":N,"props-table-title":o.$t(`common.properties`,{value:`CountryProperties`}),"slots-data":P},null,8,[`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}});export{A as default};