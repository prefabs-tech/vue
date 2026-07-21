import{D as e,E as t,On as n,St as r,_ as i,b as a,bt as o,g as s,gn as c,k as l,mt as u,o as d,qt as f,tr as p,v as m,vn as h}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{D as g}from"./PrefabsTechVue3UI.es-EJDYzbRH.js";import{p as _}from"./vee-validate-Dcr5wvVn.js";import{T as v}from"./PrefabsTechVue3Layout.es-DjWCbXPc.js";import{t as y}from"./FormPage-Ca1LZeR4.js";import{c as b,l as x}from"./PrefabsTechVue3TanstackTable.es-Dqv6JrPc.js";import{t as S}from"./ComponentDocumentation-CFBF3GmY.js";import{t as C}from"./data-Df7Ttrby.js";var w={class:`section-content`},ee={class:`section-content`},T={class:`section-content`},E={class:`section-content`},D={class:`section-content`},O={class:`section-content`},k={class:`section-content`},A={class:`section-content`},j={class:`section-content`},M={class:`section-content`},N={class:`section-content`},P={class:`section-content`},F={class:`section-content`},I={class:`section-content`},L={class:`section-content`},R={class:`section-content`},z={class:`section-content`},B={class:`section-content`},V={class:`selected-labels`},H={class:`section-content`},U={class:`section-content`},W=l({name:`SelectInputDemo`,setup(l){let{t:W}=v(),G=c({customLabelSelect:h(),customSelectedLabelSelect:h([]),disabled:h(`NP`),disabledMultiselect:h([`FR`,`NP`]),disabledSortInput:h(),disableSearchInput:h(),groupingSelect:h(),i18nSelect:h(),input:h(),inputWithMinMax:h([]),inputWithValidation:h([]),labelValueKeyInput:h(),multiselect:h(),multiselectExtensive:h([]),multiselectGrouping:h([]),multiselectKeysInput:h([]),noLabelInput:h(),roleSelect:h(),selectExtensive:h(),tooltipMultiselect:h([])}),K=h(!1),q=h([]),J=h([{label:W(`form.label.france`),value:`FR`},{label:W(`form.label.germany`),value:`DE`},{disabled:!0,label:W(`form.label.belgium`),value:`BE`},{label:W(`form.label.nepal`),value:`NP`},{label:W(`form.label.india`),value:`IN`}]),Y=h([{code:`FR`,country:W(`form.label.france`)},{code:`DE`,country:W(`form.label.germany`)},{code:`BE`,country:W(`form.label.belgium`),disabled:!0},{code:`NP`,country:W(`form.label.nepal`)},{code:`IN`,country:W(`form.label.india`)}]),X=h([{label:W(`form.label.europe`),options:[{label:W(`form.label.germany`),value:`DE`},{label:W(`form.label.france`),value:`FR`},{disabled:!0,label:W(`form.label.belgium`),value:`BE`}]},{label:W(`form.label.asia`),options:[{label:W(`form.label.nepal`),value:`NP`},{label:W(`form.label.india`),value:`IN`}]}]),Z=s(()=>[{description:W(`form.documentation.eventDescription.input.modelValue`),name:`update:modelValue`,payload:`string | number | (string | number)[] | null | undefined`},{description:W(`form.documentation.eventDescription.select.searchInput`),name:`update:searchInput`,payload:`string`}]),Q=s(()=>_({invalid_type_error:W(`form.errors.multiselect.invalid`)}).array().min(1,{message:W(`form.errors.multiselect.invalid`)})),te=s(()=>[{default:`-`,description:W(`form.documentation.propsDescription.select.customSearchHelperText`),prop:`customSearchHelperText`,type:`String`},{default:`false`,description:W(`form.documentation.propsDescription.input.disabled`),prop:`disabled`,type:`Boolean`},{default:`false`,description:W(`form.documentation.propsDescription.select.disableSearch`),prop:`disableSearch`,type:`Boolean`},{default:`false`,description:W(`form.documentation.propsDescription.select.enableCustomSearch`),prop:`enableCustomSearch`,type:`Boolean`},{default:`true`,description:W(`form.documentation.propsDescription.select.enableTooltip`),prop:`enableTooltip`,type:`Boolean`},{default:`true`,description:W(`form.documentation.propsDescription.select.hasSortedOptions`),prop:`hasSortedOptions`,type:`Boolean`},{default:`-`,description:W(`form.documentation.propsDescription.input.label`),prop:`label`,type:`String`},{default:`-`,description:W(`form.documentation.propsDescription.select.labelKey`),prop:`labelKey`,type:`String`},{default:`false`,description:W(`form.documentation.propsDescription.select.loading`),prop:`loading`,type:`Boolean`},{default:`-`,description:W(`form.documentation.propsDescription.select.maxSelection`),prop:`maxSelection`,type:`Number`},{default:`-`,description:W(`form.documentation.propsDescription.select.minSelection`),prop:`minSelection`,type:`Number`},{default:`-`,description:W(`form.documentation.propsDescription.input.modelValue`),prop:`modelValue`,type:`boolean | number | string | (number | string)[] | null`},{default:`false`,description:W(`form.documentation.propsDescription.select.multiple`),prop:`multiple`,type:`Boolean`},{default:`"select"`,description:W(`form.documentation.propsDescription.input.name`),prop:`name`,type:`String`},{default:`-`,description:W(`form.documentation.propsDescription.select.noOptionsMessage`),prop:`noOptionsMessage`,type:`String`},{default:`-`,description:W(`form.documentation.propsDescription.select.options`,{required:!0}),prop:`options`,type:`SelectOption[] | GroupedOption[]`},{default:`-`,description:W(`form.documentation.propsDescription.input.placeholder`),prop:`placeholder`,type:`String`},{default:`-`,description:W(`form.documentation.propsDescription.input.schema`),prop:`schema`,type:`z.ZodType<string | number | string[] | number[]>`},{default:`true`,description:W(`form.documentation.propsDescription.select.showRemoveSelection`),prop:`showRemoveSelection`,type:`Boolean`},{default:`-`,description:W(`form.documentation.propsDescription.select.tooltipOptions`),prop:`tooltipOptions`,type:`Object`},{default:`-`,description:W(`form.documentation.propsDescription.select.valueKey`),prop:`valueKey`,type:`String`}]),ne=s(()=>[{description:W(`form.documentation.slotDescription.select.group`),name:`group`,props:`{ label: string, selected: boolean }`},{description:W(`form.documentation.slotDescription.select.option`),name:`option`,props:`{ multiple: boolean, option: SelectOption, selected: boolean }`},{description:W(`form.documentation.slotDescription.select.selection`),name:`selection`,props:`{ selectedLabels: string[] }`}]),$=async e=>{let t={filters:{OR:[]}};e?.trim()&&t.filters.OR.push({key:`name`,operator:`ct`,value:e}),G?.roleSelect&&t.filters.OR.push({key:`id`,operator:`in`,value:G?.roleSelect}),K.value=!0;let n=[{id:`1`,name:`Superadmin`},{id:`2`,name:`Admin`},{disabled:!0,id:`3`,name:`Guest`},{id:`4`,name:`Maintainer`},{id:`5`,name:`User`}];await new Promise(e=>setTimeout(e,1e3));let r=n.filter(e=>t.filters.OR.some(t=>t.key===`name`&&t.operator===`ct`?String(e.name).toLowerCase().includes(String(t.value).toLowerCase()):t.key===`id`&&t.operator===`in`&&t.value.includes(e.id)));q.value=r,K.value=!1};return $(),(s,c)=>{let l=r(`SshPre`);return u(),m(y,{subtitle:s.$t(`form.subtitle.select`),title:s.$t(`form.label.select`),class:`demo`},{default:f(()=>[i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.basicInput`)),1),c[22]||=t(),i(`div`,w,[e(n(x),{modelValue:n(G).noLabelInput,"onUpdate:modelValue":c[0]||=e=>n(G).noLabelInput=e,options:J.value,placeholder:s.$t(`form.placeholder.country`)},null,8,[`modelValue`,`options`,`placeholder`]),c[21]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[20]||=[t(`
          <template>
            <SelectInput
              v-model="input"
              :options="options"
              placeholder="Select a country"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          <\/script>
        `,-1)]]),_:1})])]),c[84]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.labelInput`)),1),c[25]||=t(),i(`div`,ee,[e(n(x),{modelValue:n(G).input,"onUpdate:modelValue":c[1]||=e=>n(G).input=e,label:s.$t(`form.label.country`),options:J.value,placeholder:s.$t(`form.placeholder.country`),name:`select-input`},null,8,[`modelValue`,`label`,`options`,`placeholder`]),c[24]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[23]||=[t(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Country"
              name="select"
              placeholder="Select a country"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          <\/script>
        `,-1)]]),_:1})])]),c[85]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.disabled`)),1),c[28]||=t(),i(`div`,T,[e(n(x),{modelValue:n(G).disabled,"onUpdate:modelValue":c[2]||=e=>n(G).disabled=e,label:s.$t(`form.label.country`),options:J.value,placeholder:s.$t(`form.placeholder.country`),disabled:``,name:`disabled-select`},null,8,[`modelValue`,`label`,`options`,`placeholder`]),c[27]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[26]||=[t(`
          <template>
            <SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Country
              name="select""
              placeholder="Select a country"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
  
          const disabled = ref("de");

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          <\/script>
        `,-1)]]),_:1})])]),c[86]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.disableSort`)),1),c[31]||=t(),i(`div`,E,[e(n(x),{modelValue:n(G).disabledSortInput,"onUpdate:modelValue":c[3]||=e=>n(G).disabledSortInput=e,"has-sorted-options":!1,label:s.$t(`form.label.country`),options:J.value,placeholder:s.$t(`form.placeholder.country`),name:`country`},null,8,[`modelValue`,`label`,`options`,`placeholder`]),c[30]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[29]||=[t(`
          <template>
            <SelectInput 
              v-model="input"
              :has-sorted-options="false"
              :options="options"
              label="Country"
              name="select"
              placeholder="Select a country"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          <\/script>
        `,-1)]]),_:1})])]),c[87]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.disableSearch`)),1),c[34]||=t(),i(`div`,D,[e(n(x),{modelValue:n(G).disableSearchInput,"onUpdate:modelValue":c[4]||=e=>n(G).disableSearchInput=e,options:J.value,placeholder:s.$t(`form.placeholder.country`),"disable-search":``,name:`search-disabled-select`},null,8,[`modelValue`,`options`,`placeholder`]),c[33]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[32]||=[t(`
          <template>
            <SelectInput
              v-model="input"
              :options="options"
              disable-search
              name="select"
              placeholder="Select a country"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          <\/script>
        `,-1)]]),_:1})])]),c[88]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.withLabelValueKeys`)),1),c[37]||=t(),i(`div`,O,[e(n(x),{modelValue:n(G).labelValueKeyInput,"onUpdate:modelValue":c[5]||=e=>n(G).labelValueKeyInput=e,label:s.$t(`form.label.country`),options:Y.value,placeholder:s.$t(`form.placeholder.country`),"label-key":`country`,name:`country-select`,"value-key":`code`},null,8,[`modelValue`,`label`,`options`,`placeholder`]),c[36]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[35]||=[t(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Country"
              label-key="country"
              name="select"
              placeholder="Select a country"
              value-key="code"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { code: "FR", country: "France" },
            { code: "DE", country: "Germany" },
            { code: "BE", country: "Belgium", disabled: true },
            { code: "NP", country: "Nepal" },
            { code: "IN", country: "India" },
          ]);
          <\/script>
        `,-1)]]),_:1})])]),c[89]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.withI18n`)),1),c[40]||=t(),i(`div`,k,[e(n(x),{modelValue:n(G).i18nSelect,"onUpdate:modelValue":c[6]||=e=>n(G).i18nSelect=e,label:s.$t(`form.label.country`),options:J.value,placeholder:s.$t(`form.placeholder.country`),name:`i18n-select`},null,8,[`modelValue`,`label`,`options`,`placeholder`]),c[39]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[38]||=[t(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              :label="t('form.label.country')"
              :placeholder="t('form.placeholder.country')"
              name="select"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          <\/script>
        `,-1)]]),_:1})])]),c[90]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.serverSideSelect`)),1),c[43]||=t(),i(`div`,A,[e(n(x),{modelValue:n(G).roleSelect,"onUpdate:modelValue":c[7]||=e=>n(G).roleSelect=e,"custom-search-helper-text":s.$t(`form.label.customSearchHelper`),label:s.$t(`form.label.role`),loading:K.value,"no-options-message":s.$t(`form.label.noRoleOptions`),options:q.value,placeholder:s.$t(`form.placeholder.role`),"enable-custom-search":``,"label-key":`name`,name:`server-select`,"value-key":`id`,"onUpdate:searchInput":$},null,8,[`modelValue`,`custom-search-helper-text`,`label`,`loading`,`no-options-message`,`options`,`placeholder`]),c[42]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[41]||=[t(`
          <template>
            <SelectInput 
              v-model="input"
              :custom-search-helper-text="$t('form.label.customSearchHelper')"
              :label="$t('form.label.role')"
              :loading="loading"
              :no-options-message="$t('form.label.noRoleOptions')"
              :options="options"
              :placeholder="$t('form.placeholder.role')"
              enable-custom-search
              label-key="name"
              name="select"
              value-key="id"
              @update:search-input="fetchRoles"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const loading = ref<boolean>(false);
          const options = ref([]);

          const fetchRoles= (searchInput) => {
            loading.value = true;
            ...
            options.value = response;
            loading.value = false;
          }
          <\/script>
        `,-1)]]),_:1})])]),c[91]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.selectExtensive`)),1),c[46]||=t(),i(`div`,j,[e(n(x),{modelValue:n(G).selectExtensive,"onUpdate:modelValue":c[8]||=e=>n(G).selectExtensive=e,label:s.$t(`form.label.country`),options:n(C),placeholder:s.$t(`form.placeholder.country`),name:`extensive-select`},null,8,[`modelValue`,`label`,`options`,`placeholder`]),c[45]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[44]||=[t(`
          <template>
            <SelectInput 
              v-model="input"
              :options="countries"
              label="Country"
              name="select"
              placeholder="Select a country"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import { countries } from "../data";
          <\/script>
        `,-1)]]),_:1})])]),c[92]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.withGrouping`)),1),c[49]||=t(),i(`div`,M,[e(n(x),{modelValue:n(G).groupingSelect,"onUpdate:modelValue":c[9]||=e=>n(G).groupingSelect=e,label:s.$t(`form.label.country`),options:X.value,placeholder:s.$t(`form.placeholder.country`),name:`group-select`},null,8,[`modelValue`,`label`,`options`,`placeholder`]),c[48]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[47]||=[t(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Country"
              name="select"
              placeholder="Select a country"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            {
              label: t("form.label.europe"),
              options: [
                { label: t("form.label.germany"), value: "DE" },
                { label: t("form.label.france"), value: "FR" },
                { disabled: true, label: t("form.label.belgium"), value: "BE" },
              ],
            },
            {
              label: t("form.label.asia"),
              options: [
                { label: t("form.label.nepal"), value: "NP" },
                { label: t("form.label.india"), value: "IN" },
              ],
            },
          ]);
          <\/script>
        `,-1)]]),_:1})])]),c[93]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.multiselect`)),1),c[52]||=t(),i(`div`,N,[e(n(x),{modelValue:n(G).multiselect,"onUpdate:modelValue":c[10]||=e=>n(G).multiselect=e,label:s.$t(`form.label.countries`),options:J.value,placeholder:s.$t(`form.placeholder.countries`),multiple:``,name:`multiselect`},null,8,[`modelValue`,`label`,`options`,`placeholder`]),c[51]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[50]||=[t(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Countries"
              multiple
              name="select"
              placeholder="Select countries"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          <\/script>
        `,-1)]]),_:1})])]),c[94]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.disabledMultiselect`)),1),c[55]||=t(),i(`div`,P,[e(n(x),{modelValue:n(G).disabledMultiselect,"onUpdate:modelValue":c[11]||=e=>n(G).disabledMultiselect=e,label:s.$t(`form.label.countries`),options:J.value,placeholder:s.$t(`form.placeholder.countries`),disabled:``,multiple:``,name:`disabled-multiselect`},null,8,[`modelValue`,`label`,`options`,`placeholder`]),c[54]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[53]||=[t(`
          <template>
            <SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Countries"
              multiple
              name="select"
              placeholder="Select countries"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const disabled = ref(["be", "de"]);

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          <\/script>
        `,-1)]]),_:1})])]),c[95]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.multiselectExtensive`)),1),c[58]||=t(),i(`div`,F,[e(n(x),{modelValue:n(G).multiselectExtensive,"onUpdate:modelValue":c[12]||=e=>n(G).multiselectExtensive=e,label:s.$t(`form.label.countries`),options:n(C),placeholder:s.$t(`form.placeholder.countries`),multiple:``,name:`extensive-multiselect`},null,8,[`modelValue`,`label`,`options`,`placeholder`]),c[57]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[56]||=[t(`
          <template>
            <SelectInput 
              v-model="input"
              :options="countries"
              label="Countries"
              multiple
              name="select"
              placeholder="Select countries"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import { countries } from "../data";
          <\/script>
        `,-1)]]),_:1})])]),c[96]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.multiselectWithKeys`)),1),c[61]||=t(),i(`div`,I,[e(n(x),{modelValue:n(G).multiselectKeysInput,"onUpdate:modelValue":c[13]||=e=>n(G).multiselectKeysInput=e,label:s.$t(`form.label.countries`),options:Y.value,placeholder:s.$t(`form.placeholder.country`),"label-key":`country`,multiple:``,name:`country-multiselect`,"value-key":`code`},null,8,[`modelValue`,`label`,`options`,`placeholder`]),c[60]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[59]||=[t(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Countries"
              label-key="language"
              placeholder="Select a country"
              multiple
              name="select"
              value-key="code"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { code: "FR", country: "France" },
            { code: "DE", country: "Germany" },
            { code: "BE", country: "Belgium", disabled: true },
            { code: "NP", country: "Nepal" },
            { code: "IN", country: "India" },
          ]);
          <\/script>
        `,-1)]]),_:1})])]),c[97]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.withTooltip`)),1),c[64]||=t(),i(`div`,L,[e(n(x),{modelValue:n(G).tooltipMultiselect,"onUpdate:modelValue":c[14]||=e=>n(G).tooltipMultiselect=e,label:s.$t(`form.label.countries`),options:J.value,placeholder:s.$t(`form.placeholder.countries`),"tooltip-options":{offset:16,position:`top`},class:`tooltip-multiselect`,"enable-tooltip":``,multiple:``,name:`tooltip-multiselect`},null,8,[`modelValue`,`label`,`options`,`placeholder`]),c[63]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[62]||=[t(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              :tooltip-options="{
                offset: 16,
                position: 'top',
              }"
              enable-tooltip
              label="Countries"
              multiple
              name="select"
              placeholder="Select countries"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          <\/script>
        `,-1)]]),_:1})])]),c[98]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.multiselectGrouping`)),1),c[67]||=t(),i(`div`,R,[e(n(x),{modelValue:n(G).multiselectGrouping,"onUpdate:modelValue":c[15]||=e=>n(G).multiselectGrouping=e,label:s.$t(`form.label.countries`),options:X.value,placeholder:s.$t(`form.placeholder.countries`),multiple:``,name:`group-multiselect`},null,8,[`modelValue`,`label`,`options`,`placeholder`]),c[66]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[65]||=[t(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Countries"
              multiple
              name="select"
              placeholder="Select countries"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const options = ref([
            {
              label: t("form.label.europe"),
              options: [
                { label: t("form.label.germany"), value: "DE" },
                { label: t("form.label.france"), value: "FR" },
                { disabled: true, label: t("form.label.belgium"), value: "BE" },
              ],
            },
            {
              label: t("form.label.asia"),
              options: [
                { label: t("form.label.nepal"), value: "NP" },
                { label: t("form.label.india"), value: "IN" },
              ],
            },
          ]);
          <\/script>
        `,-1)]]),_:1})])]),c[99]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.customOptionLabel`)),1),c[73]||=t(),i(`div`,z,[e(n(x),{modelValue:n(G).customLabelSelect,"onUpdate:modelValue":c[16]||=e=>n(G).customLabelSelect=e,label:s.$t(`form.label.countries`),options:X.value,placeholder:s.$t(`form.placeholder.countries`),multiple:``,name:`custom-label-select`},{group:f(({label:e})=>[i(`span`,null,[c[68]||=i(`i`,{class:`pi pi-map`},null,-1),t(` `+p(e),1)])]),option:f(({option:e})=>[i(`span`,null,[c[69]||=i(`i`,{class:`pi pi-map-marker`},null,-1),t(` `+p(e.label),1)])]),_:1},8,[`modelValue`,`label`,`options`,`placeholder`]),c[72]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[71]||=[t(`
          <template>
            <SelectInput 
              v-model="input"
              :label="t('form.label.countries')"
              :options="options"
              :placeholder="t('form.placeholder.countries')"
              multiple
              name="select"
            >
              <template #group="{ label }">
                <span>
                  <i class="pi pi-map" />
                  {{ label }}
                </span>
              </template>

              <template #option="{ option }">
                <span>
                  <i class="pi pi-map-marker" />
                  {{ option.label }}
                </span>
              </template>
            </SelectInput>
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();

          const input = ref();
          const options = [
            {
              label: t("form.label.europe"),
              options: [
                { label: t("form.label.germany"), value: "DE" },
                { label: t("form.label.france"), value: "FR" },
                { disabled: true, label: t("form.label.belgium"), value: "BE" },
              ],
            },
            {
              label: t("form.label.asia"),
              options: [
                { label: t("form.label.nepal"), value: "NP" },
                { label: t("form.label.india"), value: "IN" },
              ],
            },
          ];
          <\/script>
        `,-1)]]),_:1})])]),c[100]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.customSelectedLabel`)),1),c[76]||=t(),i(`div`,B,[e(n(x),{modelValue:n(G).customSelectedLabelSelect,"onUpdate:modelValue":c[17]||=e=>n(G).customSelectedLabelSelect=e,label:s.$t(`form.label.countries`),options:J.value,placeholder:s.$t(`form.placeholder.countries`),multiple:``,name:`custom-multiselect`},{selection:f(({selectedLabels:e})=>[i(`div`,V,[(u(!0),a(d,null,o(e,(e,t)=>(u(),m(n(g),{key:`custom-selected-label-${t}`,label:e},null,8,[`label`]))),128))])]),_:1},8,[`modelValue`,`label`,`options`,`placeholder`]),c[75]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[74]||=[t(`
          <template>
            <SelectInput 
              v-model="input"
              :label="t('form.label.countries')"
              :options="options"
              :placeholder="t('form.placeholder.countries')"
              multiple
              name="select"
            >
              <template #selection="{ selectedLabels }">
               <div class="selected-labels">
                  <BadgeComponent
                    v-for="(label, index) in selectedLabels" 
                    :key="\`custom-selected-label-\${index}\`"
                    :label="label"
                  />
                </div>
              </template>
            </SelectInput>
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          <\/script>
        `,-1)]]),_:1})])]),c[101]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.minMaxValidation`)),1),c[79]||=t(),i(`div`,H,[e(n(b),null,{default:f(()=>[e(n(x),{modelValue:n(G).inputWithMinMax,"onUpdate:modelValue":c[18]||=e=>n(G).inputWithMinMax=e,label:s.$t(`form.label.countries`),"max-selection":3,"min-selection":2,options:J.value,placeholder:s.$t(`form.placeholder.countries`),multiple:``,name:`validation-multiselect`},null,8,[`modelValue`,`label`,`options`,`placeholder`])]),_:1}),c[78]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[77]||=[t(`
          <Form>
            <SelectInput 
              v-model="input"
              :max-selection="3"
              :min-selection="2"
              :options="options"
              label="Countries"
              multiple
              name="select"
              placeholder="Select countries"
            />
          </Form>

          <script setup lang="ts">
          import { Form, SelectInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `,-1)]]),_:1})])]),c[102]||=t(),i(`section`,null,[i(`h2`,null,p(s.$t(`form.label.customValidationInput`)),1),c[82]||=t(),i(`div`,U,[e(n(b),null,{default:f(()=>[e(n(x),{modelValue:n(G).inputWithValidation,"onUpdate:modelValue":c[19]||=e=>n(G).inputWithValidation=e,label:s.$t(`form.label.countries`),options:J.value,placeholder:s.$t(`form.placeholder.countries`),schema:Q.value,multiple:``,name:`custom-validation-select`},null,8,[`modelValue`,`label`,`options`,`placeholder`,`schema`])]),_:1}),c[81]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[80]||=[t(`
          <Form>
            <SelectInput 
              v-model="input"
              :options="options"
              :schema="inputSchema"
              label="Countries"
              multiple
              name="select"
              placeholder="Select countries"
            />
          </Form>

          <script setup lang="ts">
          import { Form, SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const inputSchema = z
            .string({invalid_type_error: "Please select at least one valid option"})
            .array()
            .min(1, { message: "Please select at least one valid option" });

            const options = ref([
              { label: "France", value: "FR" },
              { label: "Germany", value: "DE" },
              { disabled: true, label: "Belgium", value: "BE" },
              { label: "Nepal", value: "NP" },
              { label: "India", value: "IN" },
            ]);
          <\/script>
        `,-1)]]),_:1})])]),c[103]||=t(),e(S,{"events-data":Z.value,"props-data":te.value,"props-table-title":s.$t(`common.properties`,{value:`SelectInputProperties`}),"slots-data":ne.value},null,8,[`events-data`,`props-data`,`props-table-title`,`slots-data`]),c[104]||=t(),e(l,{language:`html-vue`},{default:f(()=>[...c[83]||=[t(`
      interface SelectOption extends Record<string, unknown> {
        disabled?: boolean;
        groupLabel?: string;
        label?: string;
        value?: string | number;
      }

      interface GroupedOption {
        label: string;
        options: SelectOption[];
      }
    `,-1)]]),_:1})]),_:1},8,[`subtitle`,`title`])}}});export{W as default};