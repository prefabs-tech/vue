import{D as e,E as t,On as n,St as r,_ as i,gn as a,k as o,mt as s,qt as c,tr as l,v as u}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{E as d}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{t as f}from"./FormPage-qAqvgJ-r.js";import{C as p}from"./PrefabsTechVue3TanstackTable.es-CqNazKU2.js";import{t as m}from"./ComponentDocumentation-BPcopVAa.js";import{n as h,t as g}from"./np-Bq3MDNyj.js";var _={AF:`Afghanistan`,AL:`Albania`,AO:`Angola`,AR:`Argentina`,AU:`Australia`,BE:`Belgium`,BR:`Brazil`,BG:`Bulgaria`,CA:`Canada`,CL:`Chile`,CN:`China`,DK:`Denmark`,DO:`Dominican Republic`,EG:`Egypt`,ES:`Spain`,ET:`Ethiopia`,FI:`Finland`,FR:`France`,DE:`Germany`,GH:`Ghana`,GR:`Greece`,IN:`India`,ID:`Indonesia`,IE:`Ireland`,JP:`Japan`,JO:`Jordan`,KE:`Kenya`,KR:`South Korea`,LB:`Lebanon`,LT:`Lithuania`,MY:`Malaysia`,MX:`Mexico`,NL:`Netherlands`,NP:`Nepal`,NZ:`New Zealand`,NO:`Norway`,PK:`Pakistan`,PH:`Philippines`,PL:`Poland`,QA:`Qatar`,RO:`Romania`,RU:`Russia`,SA:`Saudi Arabia`,SE:`Sweden`,SG:`Singapore`,TH:`Thailand`,TR:`Turkey`,UA:`Ukraine`,US:`United States`,VN:`Vietnam`,ZA:`South Africa`,ZW:`Zimbabwe`,XA:`Auralis`,XB:`Borexia`,XC:`Cyrenia`,XD:`Draxonia`,XE:`Eldwyn`,XF:`Farynth`,XG:`Galenor`,XH:`Helior`,XI:`Ithoria`,XJ:`Jorvex`,XK:`Krythos`,XL:`Lumeria`,XM:`Mythara`,XN:`Novera`,XO:`Orinthal`,XP:`Pyronix`,XQ:`Quorath`,XR:`Ravaryn`,XS:`Sylvara`,XT:`Thrylos`,XU:`Ulmaris`,XV:`Valthera`,XW:`Wyncrest`,XX:`Xanthera`,XY:`Yloria`,XZ:`Zephyron`},v={class:`section-content`},y={class:`section-content`},b={class:`section-content`},x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w={class:`section-content`},T={class:`section-content`},E={class:`section-content`},D={class:`section-content`},O={class:`section-content`},k={class:`section-content`},A={class:`section-content`},j={class:`section-content`},M=o({name:`CountryPickerDemo`,setup(o){let{locale:M,t:N}=d(),P={en:{..._,ASEAN:`ASEAN`,EU:`European Union`},fr:{...h,ASEAN:`ASEAN`,EU:`Union Européenne`}},F=[{default:`[]`,description:N(`form.documentation.propsDescription.select.exclude`),prop:`exclude`,type:`String[]`},{default:`en`,description:N(`form.documentation.propsDescription.select.fallbackLocale`),prop:`fallbackLocale`,type:`String`},{default:`[]`,description:N(`form.documentation.propsDescription.select.favorites`),prop:`favorites`,type:`String[]`},{default:`true`,description:N(`form.documentation.propsDescription.select.flags`),prop:`flags`,type:`Boolean`},{default:`-`,description:N(`form.documentation.propsDescription.select.flagsPath`),prop:`flagsPath`,type:`(code: string) => string`},{default:`left`,description:N(`form.documentation.propsDescription.select.flagsPosition`),prop:`flagsPosition`,type:`left | right | right-edge`},{default:`rectangular`,description:N(`form.documentation.propsDescription.select.flagsStyle`),prop:`flagsStyle`,type:`circle | rectangular | square`},{default:`-`,description:N(`form.documentation.propsDescription.countryPicker.groups`),prop:`groups`,type:`CountryPickerGroups`},{default:`true`,description:N(`form.documentation.propsDescription.countryPicker.hasSortedOptions`),prop:`hasSortedOptions`,type:`Boolean`},{default:`[]`,description:N(`form.documentation.propsDescription.select.include`),prop:`include`,type:`String[]`},{default:`true`,description:N(`form.documentation.propsDescription.select.includeFavorites`),prop:`includeFavorites`,type:`Boolean`},{default:`en`,description:N(`form.documentation.propsDescription.select.locale`),prop:`locale`,type:`String`},{default:`{ en: defaultEnCatalogue }`,description:N(`form.documentation.propsDescription.select.locales`),prop:`locales`,type:`CountryPickerLocales`},{default:`-`,description:N(`form.documentation.propsDescription.input.modelValue`),prop:`modelValue`,type:`String | Number | Array<String|Number> | undefined`},{default:`false`,description:N(`form.documentation.propsDescription.select.multiple`),prop:`multiple`,type:`Boolean`},{default:`-`,description:N(`form.documentation.propsDescription.input.placeholder`),prop:`placeholder`,type:`String`}],I=[{description:N(`form.documentation.eventDescription.input.modelValue`),name:`update:modelValue`,payload:`string | number | (string | number)[] | undefined`}],L=a({basic:void 0,custom:[],customFlags:void 0,customLocale:void 0,excludedCountries:[],fallback:void 0,favorites:void 0,flags:void 0,groups:void 0,groupsWithFavorites:void 0,groupsWithTranslations:void 0,includedCountries:[],includeFavorites:void 0,multiselect:[]}),R={Europe:[`FR`,`DE`,`IT`,`ES`],"North America":[`US`,`CA`]},z=[`FR`,`CN`,`BR`],B=[`NP`,`US`,`GB`],V={"European Hubs":[`GB`,`DE`,`FR`],"North America HQ":[`US`,`CA`],"Offshore Dev Center":[`IN`,`VN`,`PH`]},H=[`US`,`GB`,`DE`,`FR`,`JP`],U={ASEAN:[`VN`,`TH`,`SG`],EU:[`FR`,`DE`,`IT`,`ES`]},W=[{description:N(`form.documentation.slotDescription.countryPicker.option`),name:`option`,props:`{ multiple: boolean, option: SelectOption, selected: boolean }`}],G=e=>`https://flagcdn.com/${e.toLowerCase().trim()}.svg`;return(a,o)=>{let d=r(`SshPre`);return s(),u(f,{subtitle:a.$t(`form.subtitle.countryPicker`),title:a.$t(`form.label.countryPicker`)},{default:c(()=>[i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.basicInput`)),1),o[15]||=t(),i(`div`,v,[e(n(p),{modelValue:L.basic,"onUpdate:modelValue":o[0]||=e=>L.basic=e,placeholder:a.$t(`form.placeholder.country`)},null,8,[`modelValue`,`placeholder`]),o[14]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[13]||=[t(`
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
        `,-1)]]),_:1})])]),o[54]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.multiselect`)),1),o[18]||=t(),i(`div`,y,[e(n(p),{modelValue:L.multiselect,"onUpdate:modelValue":o[1]||=e=>L.multiselect=e,placeholder:a.$t(`form.placeholder.countries`),name:`multiselect`,multiple:``},null,8,[`modelValue`,`placeholder`]),o[17]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[16]||=[t(`
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
        `,-1)]]),_:1})])]),o[55]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.customLocale`)),1),o[21]||=t(),i(`div`,b,[e(n(p),{modelValue:L.customLocale,"onUpdate:modelValue":o[2]||=e=>L.customLocale=e,locales:{np:n(g)},placeholder:a.$t(`form.placeholder.country`),locale:`np`,name:`custom-locale`},null,8,[`modelValue`,`locales`,`placeholder`]),o[20]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[19]||=[t(`
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
        `,-1)]]),_:1})])]),o[56]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.fallbackLocale`)),1),o[24]||=t(),i(`div`,x,[e(n(p),{modelValue:L.fallback,"onUpdate:modelValue":o[3]||=e=>L.fallback=e,locales:{np:n(g),fr:n(h)},placeholder:a.$t(`form.placeholder.country`),"fallback-locale":`fr`,locale:`gb`,name:`fallback-locale`},null,8,[`modelValue`,`locales`,`placeholder`]),o[23]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[22]||=[t(`
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
        `,-1)]]),_:1})])]),o[57]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.flagsStyle`)),1),o[27]||=t(),i(`div`,S,[e(n(p),{modelValue:L.flags,"onUpdate:modelValue":o[4]||=e=>L.flags=e,placeholder:a.$t(`form.placeholder.country`),"flags-position":`right-edge`,"flags-style":`circle`,name:`flag-country`},null,8,[`modelValue`,`placeholder`]),o[26]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[25]||=[t(`
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
        `,-1)]]),_:1})])]),o[58]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.customFlagsPath`)),1),o[30]||=t(),i(`div`,C,[e(n(p),{modelValue:L.customFlags,"onUpdate:modelValue":o[5]||=e=>L.customFlags=e,"flags-path":G,placeholder:a.$t(`form.placeholder.country`),name:`custom-flag-country`},null,8,[`modelValue`,`placeholder`]),o[29]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[28]||=[t(`
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
        `,-1)]]),_:1})])]),o[59]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.include`)),1),o[33]||=t(),i(`div`,w,[e(n(p),{modelValue:L.includedCountries,"onUpdate:modelValue":o[6]||=e=>L.includedCountries=e,include:H,placeholder:a.$t(`form.placeholder.country`),name:`include-country`},null,8,[`modelValue`,`placeholder`]),o[32]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[31]||=[t(`
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
        `,-1)]]),_:1})])]),o[60]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.exclude`)),1),o[36]||=t(),i(`div`,T,[e(n(p),{modelValue:L.excludedCountries,"onUpdate:modelValue":o[7]||=e=>L.excludedCountries=e,exclude:z,placeholder:a.$t(`form.placeholder.country`),name:`exclude-country`},null,8,[`modelValue`,`placeholder`]),o[35]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[34]||=[t(`
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
        `,-1)]]),_:1})])]),o[61]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.favorites`)),1),o[39]||=t(),i(`div`,E,[e(n(p),{modelValue:L.favorites,"onUpdate:modelValue":o[8]||=e=>L.favorites=e,favorites:B,placeholder:a.$t(`form.placeholder.country`),name:`favorites-country`},null,8,[`modelValue`,`placeholder`]),o[38]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[37]||=[t(`
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
        `,-1)]]),_:1})])]),o[62]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.includeFavorites`)),1),o[42]||=t(),i(`div`,D,[e(n(p),{modelValue:L.includeFavorites,"onUpdate:modelValue":o[9]||=e=>L.includeFavorites=e,favorites:B,"include-favorites":!1,placeholder:a.$t(`form.placeholder.country`),name:`include-favorites-country`},null,8,[`modelValue`,`placeholder`]),o[41]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[40]||=[t(`
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
        `,-1)]]),_:1})])]),o[63]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.grouping`)),1),o[45]||=t(),i(`div`,O,[e(n(p),{modelValue:L.groups,"onUpdate:modelValue":o[10]||=e=>L.groups=e,groups:V,locale:n(M),placeholder:a.$t(`form.placeholder.country`),name:`group-country`},null,8,[`modelValue`,`locale`,`placeholder`]),o[44]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[43]||=[t(`
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
        `,-1)]]),_:1})])]),o[64]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.groupingWithTranslations`)),1),o[48]||=t(),i(`div`,k,[e(n(p),{modelValue:L.groupsWithTranslations,"onUpdate:modelValue":o[11]||=e=>L.groupsWithTranslations=e,groups:U,locale:n(M),locales:P,placeholder:a.$t(`form.placeholder.country`),name:`translated-country`},null,8,[`modelValue`,`locale`,`placeholder`]),o[47]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[46]||=[t(`
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
        `,-1)]]),_:1})])]),o[65]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`form.label.groupingWithFavroties`)),1),o[51]||=t(),i(`div`,A,[e(n(p),{modelValue:L.groupsWithFavorites,"onUpdate:modelValue":o[12]||=e=>L.groupsWithFavorites=e,favorites:[`US`,`FR`],groups:R,"has-sorted-options":!1,locale:n(M),placeholder:a.$t(`form.placeholder.country`),name:`group-favorites-country`},null,8,[`modelValue`,`locale`,`placeholder`]),o[50]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[49]||=[t(`
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
        `,-1)]]),_:1})])]),o[66]||=t(),e(m,{"events-data":I,"props-data":F,"props-table-title":a.$t(`common.properties`,{value:`CountryPickerProperties`}),"slots-data":W},null,8,[`props-table-title`]),o[67]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`common.type`)),1),o[53]||=t(),i(`div`,j,[e(d,{language:`html-vue`},{default:c(()=>[...o[52]||=[t(`           
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
        `,-1)]]),_:1})])])]),_:1},8,[`subtitle`,`title`])}}});export{M as default};