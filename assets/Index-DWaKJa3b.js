import{j as m}from"./PrefabsTechVue3Form.es-DprCpqVP.js";import{d as U,L as $,M as N,o as D,e as T,f as u,h as t,t as d,z as e,a as n,u as a,O as F}from"./index-CRANkXBf.js";import{f as g,n as y}from"./np-DQ2uz8tk.js";import{_ as R}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CBpBAjGj.js";import{_ as X}from"./FormPage.vue_vue_type_style_index_0_lang-DVxFiYRT.js";import"./PrefabsTechVue3TanstackTable.es-B7ulBxf4.js";const B="Afghanistan",I="Albania",L="Angola",G="Argentina",H="Australia",O="Belgium",W="Brazil",w="Bulgaria",J="Canada",K="Chile",M="China",Z="Denmark",j="Dominican Republic",Q="Egypt",Y="Spain",z="Ethiopia",q="Finland",x="France",_="Germany",oo="Ghana",eo="Greece",to="India",lo="Indonesia",no="Ireland",ro="Japan",so="Jordan",ao="Kenya",io="South Korea",uo="Lebanon",po="Lithuania",mo="Malaysia",co="Mexico",fo="Netherlands",go="Nepal",yo="New Zealand",vo="Norway",Co="Pakistan",So="Philippines",bo="Poland",Po="Qatar",Eo="Romania",Vo="Russia",Ao="Saudi Arabia",ho="Sweden",ko="Singapore",Uo="Thailand",$o="Turkey",No="Ukraine",Do="United States",To="Vietnam",Fo="South Africa",Ro="Zimbabwe",Xo="Auralis",Bo="Borexia",Io="Cyrenia",Lo="Draxonia",Go="Eldwyn",Ho="Farynth",Oo="Galenor",Wo="Helior",wo="Ithoria",Jo="Jorvex",Ko="Krythos",Mo="Lumeria",Zo="Mythara",jo="Novera",Qo="Orinthal",Yo="Pyronix",zo="Quorath",qo="Ravaryn",xo="Sylvara",_o="Thrylos",oe="Ulmaris",ee="Valthera",te="Wyncrest",le="Xanthera",ne="Yloria",re="Zephyron",se={AF:B,AL:I,AO:L,AR:G,AU:H,BE:O,BR:W,BG:w,CA:J,CL:K,CN:M,DK:Z,DO:j,EG:Q,ES:Y,ET:z,FI:q,FR:x,DE:_,GH:oo,GR:eo,IN:to,ID:lo,IE:no,JP:ro,JO:so,KE:ao,KR:io,LB:uo,LT:po,MY:mo,MX:co,NL:fo,NP:go,NZ:yo,NO:vo,PK:Co,PH:So,PL:bo,QA:Po,RO:Eo,RU:Vo,SA:Ao,SE:ho,SG:ko,TH:Uo,TR:$o,UA:No,US:Do,VN:To,ZA:Fo,ZW:Ro,XA:Xo,XB:Bo,XC:Io,XD:Lo,XE:Go,XF:Ho,XG:Oo,XH:Wo,XI:wo,XJ:Jo,XK:Ko,XL:Mo,XM:Zo,XN:jo,XO:Qo,XP:Yo,XQ:zo,XR:qo,XS:xo,XT:_o,XU:oe,XV:ee,XW:te,XX:le,XY:ne,XZ:re},ae={class:"section-content"},ie={class:"section-content"},ue={class:"section-content"},pe={class:"section-content"},de={class:"section-content"},me={class:"section-content"},ce={class:"section-content"},fe={class:"section-content"},ge={class:"section-content"},ye={class:"section-content"},ve={class:"section-content"},Ce={class:"section-content"},Se={class:"section-content"},be={class:"section-content"},$e=U({__name:"Index",setup(Pe){const{locale:c,t:i}=$(),v={en:{...se,ASEAN:"ASEAN",EU:"European Union"},fr:{...g,ASEAN:"ASEAN",EU:"Union Européenne"}},C=[{default:"[]",description:i("form.documentation.propsDescription.select.exclude"),prop:"exclude",type:"String[]"},{default:"en",description:i("form.documentation.propsDescription.select.fallbackLocale"),prop:"fallbackLocale",type:"String"},{default:"[]",description:i("form.documentation.propsDescription.select.favorites"),prop:"favorites",type:"String[]"},{default:"true",description:i("form.documentation.propsDescription.select.flags"),prop:"flags",type:"Boolean"},{default:"-",description:i("form.documentation.propsDescription.select.flagsPath"),prop:"flagsPath",type:"(code: string) => string"},{default:"left",description:i("form.documentation.propsDescription.select.flagsPosition"),prop:"flagsPosition",type:"left | right | right-edge"},{default:"rectangular",description:i("form.documentation.propsDescription.select.flagsStyle"),prop:"flagsStyle",type:"circle | rectangular | square"},{default:"-",description:i("form.documentation.propsDescription.countryPicker.groups"),prop:"groups",type:"CountryPickerGroups"},{default:"true",description:i("form.documentation.propsDescription.countryPicker.hasSortedOptions"),prop:"hasSortedOptions",type:"Boolean"},{default:"[]",description:i("form.documentation.propsDescription.select.include"),prop:"include",type:"String[]"},{default:"true",description:i("form.documentation.propsDescription.select.includeFavorites"),prop:"includeFavorites",type:"Boolean"},{default:"en",description:i("form.documentation.propsDescription.select.locale"),prop:"locale",type:"String"},{default:"{ en: defaultEnCatalogue }",description:i("form.documentation.propsDescription.select.locales"),prop:"locales",type:"CountryPickerLocales"},{default:"-",description:i("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"String | Number | Array<String|Number> | undefined"},{default:"false",description:i("form.documentation.propsDescription.select.multiple"),prop:"multiple",type:"Boolean"},{default:"-",description:i("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"}],S=[{description:i("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | number | (string | number)[] | undefined"}],r=F({basic:void 0,custom:[],customFlags:void 0,customLocale:void 0,excludedCountries:[],fallback:void 0,flags:void 0,groups:void 0,groupsWithTranslations:void 0,includedCountries:[],multiselect:[]}),b={"North America":["US","CA"],Europe:["FR","DE","IT","ES"]},P=["FR","CN","BR"],f=["NP","US","GB"],E={"North America HQ":["US","CA"],"Offshore Dev Center":["IN","VN","PH"],"European Hubs":["GB","DE","FR"]},V=["US","GB","DE","FR","JP"],A={EU:["FR","DE","IT","ES"],ASEAN:["VN","TH","SG"]},h=[{description:i("form.documentation.slotDescription.countryPicker.option"),name:"option",props:"{ multiple: boolean, option: SelectOption, selected: boolean }"}],k=l=>`https://flagcdn.com/${l.toLowerCase().trim()}.svg`;return(l,o)=>{const p=N("SshPre");return D(),T(X,{subtitle:l.$t("form.subtitle.countryPicker"),title:l.$t("form.label.countryPicker")},{default:u(()=>[t("section",null,[t("h2",null,d(l.$t("form.label.basicInput")),1),o[15]||(o[15]=e()),t("div",ae,[n(a(m),{modelValue:r.basic,"onUpdate:modelValue":o[0]||(o[0]=s=>r.basic=s),placeholder:l.$t("form.placeholder.country")},null,8,["modelValue","placeholder"]),o[14]||(o[14]=e()),n(p,{language:"html-vue"},{default:u(()=>[...o[13]||(o[13]=[e(`
          <template>
            <CountryPicker
              v-model="input"
              :placeholder="$t('form.placeholder.country')"
            />
          </template>
                  
          <script setup lang="ts">
          import { CountryPicker } from '@prefabs.tech/vue3-form';
          import { ref } from 'vue';
                  
          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),o[54]||(o[54]=e()),t("section",null,[t("h2",null,d(l.$t("form.label.multiselect")),1),o[18]||(o[18]=e()),t("div",ie,[n(a(m),{modelValue:r.multiselect,"onUpdate:modelValue":o[1]||(o[1]=s=>r.multiselect=s),placeholder:l.$t("form.placeholder.countries"),name:"multiselect",multiple:""},null,8,["modelValue","placeholder"]),o[17]||(o[17]=e()),n(p,{language:"html-vue"},{default:u(()=>[...o[16]||(o[16]=[e(`
          <template>
            <CountryPicker
              v-model="input"
              :placeholder="$t('form.placeholder.countries')"
              multiple
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),o[55]||(o[55]=e()),t("section",null,[t("h2",null,d(l.$t("form.label.customLocale")),1),o[21]||(o[21]=e()),t("div",ue,[n(a(m),{modelValue:r.customLocale,"onUpdate:modelValue":o[2]||(o[2]=s=>r.customLocale=s),locales:{np:a(y)},placeholder:l.$t("form.placeholder.country"),locale:"np",name:"custom-locale"},null,8,["modelValue","locales","placeholder"]),o[20]||(o[20]=e()),n(p,{language:"html-vue"},{default:u(()=>[...o[19]||(o[19]=[e(`
          <template>
            <CountryPicker
              v-model="input"
              :locale="locale"
              :locales="locales"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { ref } from 'vue';

          import nepaliTranslation from "./np.json";
          
          const locale = "np";
        
          const locales = {
            np: nepaliTranslation,
          };

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),o[56]||(o[56]=e()),t("section",null,[t("h2",null,d(l.$t("form.label.fallbackLocale")),1),o[24]||(o[24]=e()),t("div",pe,[n(a(m),{modelValue:r.fallback,"onUpdate:modelValue":o[3]||(o[3]=s=>r.fallback=s),locales:{np:a(y),fr:a(g)},placeholder:l.$t("form.placeholder.country"),"fallback-locale":"fr",locale:"gb",name:"fallback-locale"},null,8,["modelValue","locales","placeholder"]),o[23]||(o[23]=e()),n(p,{language:"html-vue"},{default:u(()=>[...o[22]||(o[22]=[e(`
          <template>
            <CountryPicker
              v-model="input"
              :fallback-locale="fallbackLocale"
              :locale="locale"
              :locales="locales"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { ref } from 'vue';

          import frenchTranslation from "./fr.json";
          import nepaliTranslation from "./np.json";
          
          const fallbackLocale = "fr";
          const locale = "gb";
          const locales = {
            fr: frenchTranslation,
            np: nepaliTranslation,
          };
          
          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),o[57]||(o[57]=e()),t("section",null,[t("h2",null,d(l.$t("form.label.flagsStyle")),1),o[27]||(o[27]=e()),t("div",de,[n(a(m),{modelValue:r.flags,"onUpdate:modelValue":o[4]||(o[4]=s=>r.flags=s),placeholder:l.$t("form.placeholder.country"),"flags-position":"right-edge","flags-style":"circle",name:"flag-country"},null,8,["modelValue","placeholder"]),o[26]||(o[26]=e()),n(p,{language:"html-vue"},{default:u(()=>[...o[25]||(o[25]=[e(`
          <template>
            <CountryPicker
              v-model="input"
              :placeholder="$t('form.placeholder.country')"
              flags-position="right-edge"
              flags-style="circle"
              name="country"
            />
          </template>
                  
          <script setup lang="ts">
          import { CountryPicker } from '@prefabs.tech/vue3-form';
          import { ref } from 'vue';
          import { useI18n } from "vue-i18n";
                  
          const { locale } = useI18n();

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),o[58]||(o[58]=e()),t("section",null,[t("h2",null,d(l.$t("form.label.customFlagsPath")),1),o[30]||(o[30]=e()),t("div",me,[n(a(m),{modelValue:r.customFlags,"onUpdate:modelValue":o[5]||(o[5]=s=>r.customFlags=s),"flags-path":k,placeholder:l.$t("form.placeholder.country"),name:"custom-flag-country"},null,8,["modelValue","placeholder"]),o[29]||(o[29]=e()),n(p,{language:"html-vue"},{default:u(()=>[...o[28]||(o[28]=[e(`
          <template>
            <CountryPicker
              v-model="input"
              :flags-path="flagsPath"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>
                  
          <script setup lang="ts">
          import { CountryPicker } from '@prefabs.tech/vue3-form';
          import { ref } from 'vue';
                  
          const input = ref();

          const flagsPath = (code: string) => {
            return \`https://flagcdn.com/\${code.toLowerCase().trim()}.svg\`;
          };
          <\/script>
        `,-1)])]),_:1})])]),o[59]||(o[59]=e()),t("section",null,[t("h2",null,d(l.$t("form.label.include")),1),o[33]||(o[33]=e()),t("div",ce,[n(a(m),{modelValue:r.includedCountries,"onUpdate:modelValue":o[6]||(o[6]=s=>r.includedCountries=s),include:V,placeholder:l.$t("form.placeholder.country"),name:"include-country"},null,8,["modelValue","placeholder"]),o[32]||(o[32]=e()),n(p,{language:"html-vue"},{default:u(()=>[...o[31]||(o[31]=[e(`
          <template>
            <CountryPicker
              v-model="input"
              :include="includedCountries"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const includedCountries = ["US", "GB", "DE", "FR", "JP"];

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),o[60]||(o[60]=e()),t("section",null,[t("h2",null,d(l.$t("form.label.exclude")),1),o[36]||(o[36]=e()),t("div",fe,[n(a(m),{modelValue:r.excludedCountries,"onUpdate:modelValue":o[7]||(o[7]=s=>r.excludedCountries=s),exclude:P,placeholder:l.$t("form.placeholder.country"),name:"exclude-country"},null,8,["modelValue","placeholder"]),o[35]||(o[35]=e()),n(p,{language:"html-vue"},{default:u(()=>[...o[34]||(o[34]=[e(`
          <template>
            <CountryPicker
              v-model="input"
              :exclude="excludedCountries"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { CountryPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          
          const excludedCountries = ["FR", "CN", "BR"];
          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),o[61]||(o[61]=e()),t("section",null,[t("h2",null,d(l.$t("form.label.favorites")),1),o[39]||(o[39]=e()),t("div",ge,[n(a(m),{modelValue:r.favorites,"onUpdate:modelValue":o[8]||(o[8]=s=>r.favorites=s),favorites:f,placeholder:l.$t("form.placeholder.country"),name:"favorites-country"},null,8,["modelValue","placeholder"]),o[38]||(o[38]=e()),n(p,{language:"html-vue"},{default:u(()=>[...o[37]||(o[37]=[e(`
          <template>
            <CountryPicker
              v-model="input"
              :favorites="favoriteCountries"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { ref } from 'vue';
          
          const favoriteCountries = ["NP", "US", "GB"];

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),o[62]||(o[62]=e()),t("section",null,[t("h2",null,d(l.$t("form.label.includeFavorites")),1),o[42]||(o[42]=e()),t("div",ye,[n(a(m),{modelValue:r.includeFavorites,"onUpdate:modelValue":o[9]||(o[9]=s=>r.includeFavorites=s),favorites:f,"include-favorites":!1,placeholder:l.$t("form.placeholder.country"),name:"include-favorites-country"},null,8,["modelValue","placeholder"]),o[41]||(o[41]=e()),n(p,{language:"html-vue"},{default:u(()=>[...o[40]||(o[40]=[e(`
          <template>
            <CountryPicker
              v-model="input"
              :favorites="favoriteCountries"
              :include-favorites="false"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { ref } from 'vue';
          
          const favoriteCountries = ["NP", "US", "GB"];

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),o[63]||(o[63]=e()),t("section",null,[t("h2",null,d(l.$t("form.label.grouping")),1),o[45]||(o[45]=e()),t("div",ve,[n(a(m),{modelValue:r.groups,"onUpdate:modelValue":o[10]||(o[10]=s=>r.groups=s),groups:E,locale:a(c),placeholder:l.$t("form.placeholder.country"),name:"group-country"},null,8,["modelValue","locale","placeholder"]),o[44]||(o[44]=e()),n(p,{language:"html-vue"},{default:u(()=>[...o[43]||(o[43]=[e(`
          <template>
            <CountryPicker
              v-model="input"
              :groups="groups"
              :locale="locale"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { ref } from 'vue';

          const { locale } = useI18n();
          
          const groups = {
            "North America HQ": ["US", "CA"],
            "Offshore Dev Center": ["IN", "VN", "PH"],
            "European Hubs": ["GB", "DE", "FR"],
          };

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),o[64]||(o[64]=e()),t("section",null,[t("h2",null,d(l.$t("form.label.groupingWithTranslations")),1),o[48]||(o[48]=e()),t("div",Ce,[n(a(m),{modelValue:r.groupsWithTranslations,"onUpdate:modelValue":o[11]||(o[11]=s=>r.groupsWithTranslations=s),groups:A,locale:a(c),locales:v,placeholder:l.$t("form.placeholder.country"),name:"translated-country"},null,8,["modelValue","locale","placeholder"]),o[47]||(o[47]=e()),n(p,{language:"html-vue"},{default:u(()=>[...o[46]||(o[46]=[e(`
          <template>
            <CountryPicker
              v-model="input"
              :groups="groups"
              :locale="locale"
              :locales="locales"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { ref } from 'vue';

          import englishTranslation from "./en.json";
          import frenchTranslation from "./fr.json";

          const { locale } = useI18n();

          const groups = {
            EU: ["FR", "DE", "IT", "ES"],
            ASEAN: ["VN", "TH", "SG"],
          };
          const locales = {
            en: {
              ...englishTranslation,
              ASEAN: "ASEAN",
              EU: "European Union",
            },
            fr: {
              ...frenchTranslation,
              ASEAN: "ASEAN",
              EU: "Union Européenne",
            },
          };

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),o[65]||(o[65]=e()),t("section",null,[t("h2",null,d(l.$t("form.label.groupingWithFavroties")),1),o[51]||(o[51]=e()),t("div",Se,[n(a(m),{modelValue:r.groupsWithFavorites,"onUpdate:modelValue":o[12]||(o[12]=s=>r.groupsWithFavorites=s),favorites:["US","FR"],groups:b,"has-sorted-options":!1,locale:a(c),placeholder:l.$t("form.placeholder.country"),name:"group-favorites-country"},null,8,["modelValue","locale","placeholder"]),o[50]||(o[50]=e()),n(p,{language:"html-vue"},{default:u(()=>[...o[49]||(o[49]=[e(`
          <template>
            <CountryPicker
              v-model="input"
              :favorites="['US', 'FR']"
              :groups="groups"
              :has-sorted-options="false"
              :locale="locale"
              :placeholder="$t('form.placeholder.country')"
              name="country"
            />
          </template>

          <script setup lang="ts">
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { ref } from 'vue';

          const { locale } = useI18n();

          const groups = {
            "North America": ["US", "CA"],
            Europe: ["FR", "DE", "IT", "ES"],
          };

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),o[66]||(o[66]=e()),n(R,{"events-data":S,"props-data":C,"props-table-title":l.$t("common.properties",{value:"CountryPickerProperties"}),"slots-data":h},null,8,["props-table-title"]),o[67]||(o[67]=e()),t("section",null,[t("h2",null,d(l.$t("common.type")),1),o[53]||(o[53]=e()),t("div",be,[n(p,{language:"html-vue"},{default:u(()=>[...o[52]||(o[52]=[e(`           
          type CountryPickerGroups = Record<string, string[]>;
          type CountryPickerLocales = Record<string, CountryPickerTranslation>;
          type CountryPickerTranslation = Record<string, string>;

          Example Locales: 
          { 
            en:{ "US": "USA" }, 
            fr: { "US": "États-Unis" } 
          }

          Example Groups:
          {
            "European Union": ["AT", "BE", "FR", "DE"],
            "North America": ["US", "CA", "MX"]
          }
        `,-1)])]),_:1})])])]),_:1},8,["subtitle","title"])}}});export{$e as default};
