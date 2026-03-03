import{o as b,w as D}from"./PrefabsTechVue3Form.es-BtPwf_9M.js";import{d as k,L as O,r as u,M as C,o as I,e as E,f as p,h as n,t as d,z as l,a as r,u as o,c as U,F as G,s as L,a1 as M,O as w,i as g,N as K}from"./index-Dyhkj2vJ.js";import{_ as T}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-DeajRu91.js";import{a as B}from"./data-uYwV_J55.js";import{_ as W}from"./FormPage.vue_vue_type_style_index_0_lang-CiaY08G6.js";import"./PrefabsTechVue3TanstackTable.es-DH-WyQBz.js";const z={class:"section-content"},H={class:"section-content"},j={class:"section-content"},q={class:"section-content"},A={class:"section-content"},Z={class:"section-content"},J={class:"section-content"},Q={class:"section-content"},X={class:"section-content"},Y={class:"section-content"},x={class:"section-content"},_={class:"section-content"},ee={class:"section-content"},le={class:"section-content"},te={class:"section-content"},ne={class:"section-content"},oe={class:"section-content"},ae={class:"section-content"},se={class:"selected-labels"},re={class:"section-content"},ie={class:"section-content"},pe={name:"SelectInputField"},ge=k({...pe,setup(ue){const{t:s}=O();let i=w({customSelectedLabelSelect:u([]),customLabelSelect:u(),disabled:u("NP"),disabledMultiselect:u(["FR","NP"]),disableSearchInput:u(),disabledSortInput:u(),groupingSelect:u(),i18nSelect:u(),input:u(),inputWithMinMax:u([]),inputWithValidation:u([]),labelValueKeyInput:u(),multiselect:u(),multiselectExtensive:u([]),multiselectGrouping:u([]),multiselectKeysInput:u([]),noLabelInput:u(),roleSelect:u(),selectExtensive:u(),tooltipMultiselect:u([])});const y=u(!1),V=u([]),f=u([{label:s("form.label.france"),value:"FR"},{label:s("form.label.germany"),value:"DE"},{disabled:!0,label:s("form.label.belgium"),value:"BE"},{label:s("form.label.nepal"),value:"NP"},{label:s("form.label.india"),value:"IN"}]),$=u([{code:"FR",country:s("form.label.france")},{code:"DE",country:s("form.label.germany")},{code:"BE",country:s("form.label.belgium"),disabled:!0},{code:"NP",country:s("form.label.nepal")},{code:"IN",country:s("form.label.india")}]),S=u([{label:s("form.label.europe"),options:[{label:s("form.label.germany"),value:"DE"},{label:s("form.label.france"),value:"FR"},{disabled:!0,label:s("form.label.belgium"),value:"BE"}]},{label:s("form.label.asia"),options:[{label:s("form.label.nepal"),value:"NP"},{label:s("form.label.india"),value:"IN"}]}]),F=g(()=>[{description:s("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | number | (string | number)[] | null | undefined"},{description:s("form.documentation.eventDescription.select.searchInput"),name:"update:searchInput",payload:"string"}]),R=g(()=>K.string({invalid_type_error:s("form.errors.multiselect.invalid")}).array().min(1,{message:s("form.errors.multiselect.invalid")})),P=g(()=>[{default:"-",description:s("form.documentation.propsDescription.select.customSearchHelperText"),prop:"customSearchHelperText",type:"String"},{default:"false",description:s("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:"false",description:s("form.documentation.propsDescription.select.disableSearch"),prop:"disableSearch",type:"Boolean"},{default:"false",description:s("form.documentation.propsDescription.select.enableCustomSearch"),prop:"enableCustomSearch",type:"Boolean"},{default:"true",description:s("form.documentation.propsDescription.select.enableTooltip"),prop:"enableTooltip",type:"Boolean"},{default:"true",description:s("form.documentation.propsDescription.select.hasSortedOptions"),prop:"hasSortedOptions",type:"Boolean"},{default:"-",description:s("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"-",description:s("form.documentation.propsDescription.select.labelKey"),prop:"labelKey",type:"String"},{default:"false",description:s("form.documentation.propsDescription.select.loading"),prop:"loading",type:"Boolean"},{default:"-",description:s("form.documentation.propsDescription.select.maxSelection"),prop:"maxSelection",type:"Number"},{default:"-",description:s("form.documentation.propsDescription.selectInput.minSelection"),prop:"minSelection",type:"Number"},{default:"-",description:s("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"boolean | number | string | (number | string)[] | null"},{default:"false",description:s("form.documentation.propsDescription.select.multiple"),prop:"multiple",type:"Boolean"},{default:'"select"',description:s("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:s("form.documentation.propsDescription.select.noOptionsMessage"),prop:"noOptionsMessage",type:"String"},{default:"-",description:s("form.documentation.propsDescription.select.options",{required:!0}),prop:"options",type:"SelectOption[] | GroupedOption[]"},{default:"-",description:s("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:s("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number | string[] | number[]>"},{default:"true",description:s("form.documentation.propsDescription.selectInput.showRemoveSelection"),prop:"showRemoveSelection",type:"Boolean"},{default:"-",description:s("form.documentation.propsDescription.selectInput.tooltipOptions"),prop:"tooltipOptions",type:"Object"},{default:"-",description:s("form.documentation.propsDescription.selectInput.valueKey"),prop:"valueKey",type:"String"}]),h=g(()=>[{description:s("form.documentation.slotDescription.select.group"),name:"group",props:"{ label: string, selected: boolean }"},{description:s("form.documentation.slotDescription.select.option"),name:"option",props:"{ multiple: boolean, option: SelectOption, selected: boolean }"},{description:s("form.documentation.slotDescription.select.selection"),name:"selection",props:"{ selectedLabels: string[] }"}]),N=async t=>{const e={filters:{OR:[]}};t?.trim()&&e.filters.OR.push({key:"name",operator:"ct",value:t}),i?.roleSelect&&e.filters.OR.push({key:"id",operator:"in",value:i?.roleSelect}),y.value=!0;const m=[{id:"1",name:"Superadmin"},{id:"2",name:"Admin"},{disabled:!0,id:"3",name:"Guest"},{id:"4",name:"Maintainer"},{id:"5",name:"User"}];await new Promise(v=>setTimeout(v,1e3));const a=m.filter(v=>e.filters.OR.some(c=>c.key==="name"&&c.operator==="ct"?String(v.name).toLowerCase().includes(String(c.value).toLowerCase()):c.key==="id"&&c.operator==="in"?c.value.includes(v.id):!1));V.value=a,y.value=!1};return N(),(t,e)=>{const m=C("SshPre");return I(),E(W,{subtitle:t.$t("form.subtitle.select"),title:t.$t("form.label.select"),class:"demo"},{default:p(()=>[n("section",null,[n("h2",null,d(t.$t("form.label.basicInput")),1),e[22]||(e[22]=l()),n("div",z,[r(o(b),{modelValue:o(i).noLabelInput,"onUpdate:modelValue":e[0]||(e[0]=a=>o(i).noLabelInput=a),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","options","placeholder"]),e[21]||(e[21]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[20]||(e[20]=[l(`
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
        `,-1)])]),_:1})])]),e[84]||(e[84]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.labelInput")),1),e[25]||(e[25]=l()),n("div",H,[r(o(b),{modelValue:o(i).input,"onUpdate:modelValue":e[1]||(e[1]=a=>o(i).input=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country"),name:"select-input"},null,8,["modelValue","label","options","placeholder"]),e[24]||(e[24]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[23]||(e[23]=[l(`
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
        `,-1)])]),_:1})])]),e[85]||(e[85]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.disabled")),1),e[28]||(e[28]=l()),n("div",j,[r(o(b),{modelValue:o(i).disabled,"onUpdate:modelValue":e[2]||(e[2]=a=>o(i).disabled=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country"),disabled:"",name:"disabled-select"},null,8,["modelValue","label","options","placeholder"]),e[27]||(e[27]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[26]||(e[26]=[l(`
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
        `,-1)])]),_:1})])]),e[86]||(e[86]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.disableSort")),1),e[31]||(e[31]=l()),n("div",q,[r(o(b),{modelValue:o(i).disabledSortInput,"onUpdate:modelValue":e[3]||(e[3]=a=>o(i).disabledSortInput=a),"has-sorted-options":!1,label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country"),name:"country"},null,8,["modelValue","label","options","placeholder"]),e[30]||(e[30]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[29]||(e[29]=[l(`
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
        `,-1)])]),_:1})])]),e[87]||(e[87]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.disableSearch")),1),e[34]||(e[34]=l()),n("div",A,[r(o(b),{modelValue:o(i).disableSearchInput,"onUpdate:modelValue":e[4]||(e[4]=a=>o(i).disableSearchInput=a),options:f.value,placeholder:t.$t("form.placeholder.country"),"disable-search":"",name:"search-disabled-select"},null,8,["modelValue","options","placeholder"]),e[33]||(e[33]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[32]||(e[32]=[l(`
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
        `,-1)])]),_:1})])]),e[88]||(e[88]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.withLabelValueKeys")),1),e[37]||(e[37]=l()),n("div",Z,[r(o(b),{modelValue:o(i).labelValueKeyInput,"onUpdate:modelValue":e[5]||(e[5]=a=>o(i).labelValueKeyInput=a),label:t.$t("form.label.country"),options:$.value,placeholder:t.$t("form.placeholder.country"),"label-key":"country",name:"country-select","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),e[36]||(e[36]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[35]||(e[35]=[l(`
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
        `,-1)])]),_:1})])]),e[89]||(e[89]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.withI18n")),1),e[40]||(e[40]=l()),n("div",J,[r(o(b),{modelValue:o(i).i18nSelect,"onUpdate:modelValue":e[6]||(e[6]=a=>o(i).i18nSelect=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country"),name:"i18n-select"},null,8,["modelValue","label","options","placeholder"]),e[39]||(e[39]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[38]||(e[38]=[l(`
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
        `,-1)])]),_:1})])]),e[90]||(e[90]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.serverSideSelect")),1),e[43]||(e[43]=l()),n("div",Q,[r(o(b),{modelValue:o(i).roleSelect,"onUpdate:modelValue":e[7]||(e[7]=a=>o(i).roleSelect=a),"custom-search-helper-text":t.$t("form.label.customSearchHelper"),label:t.$t("form.label.role"),loading:y.value,"no-options-message":t.$t("form.label.noRoleOptions"),options:V.value,placeholder:t.$t("form.placeholder.role"),"enable-custom-search":"","label-key":"name",name:"server-select","value-key":"id","onUpdate:searchInput":N},null,8,["modelValue","custom-search-helper-text","label","loading","no-options-message","options","placeholder"]),e[42]||(e[42]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[41]||(e[41]=[l(`
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
        `,-1)])]),_:1})])]),e[91]||(e[91]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.selectExtensive")),1),e[46]||(e[46]=l()),n("div",X,[r(o(b),{modelValue:o(i).selectExtensive,"onUpdate:modelValue":e[8]||(e[8]=a=>o(i).selectExtensive=a),label:t.$t("form.label.country"),options:o(B),placeholder:t.$t("form.placeholder.country"),name:"extensive-select"},null,8,["modelValue","label","options","placeholder"]),e[45]||(e[45]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[44]||(e[44]=[l(`
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
        `,-1)])]),_:1})])]),e[92]||(e[92]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.withGrouping")),1),e[49]||(e[49]=l()),n("div",Y,[r(o(b),{modelValue:o(i).groupingSelect,"onUpdate:modelValue":e[9]||(e[9]=a=>o(i).groupingSelect=a),label:t.$t("form.label.country"),options:S.value,placeholder:t.$t("form.placeholder.country"),name:"group-select"},null,8,["modelValue","label","options","placeholder"]),e[48]||(e[48]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[47]||(e[47]=[l(`
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
        `,-1)])]),_:1})])]),e[93]||(e[93]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.multiselect")),1),e[52]||(e[52]=l()),n("div",x,[r(o(b),{modelValue:o(i).multiselect,"onUpdate:modelValue":e[10]||(e[10]=a=>o(i).multiselect=a),label:t.$t("form.label.countries"),options:f.value,placeholder:t.$t("form.placeholder.countries"),multiple:"",name:"multiselect"},null,8,["modelValue","label","options","placeholder"]),e[51]||(e[51]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[50]||(e[50]=[l(`
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
        `,-1)])]),_:1})])]),e[94]||(e[94]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.disabledMultiselect")),1),e[55]||(e[55]=l()),n("div",_,[r(o(b),{modelValue:o(i).disabledMultiselect,"onUpdate:modelValue":e[11]||(e[11]=a=>o(i).disabledMultiselect=a),label:t.$t("form.label.countries"),options:f.value,placeholder:t.$t("form.placeholder.countries"),disabled:"",multiple:"",name:"disabled-multiselect"},null,8,["modelValue","label","options","placeholder"]),e[54]||(e[54]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[53]||(e[53]=[l(`
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
        `,-1)])]),_:1})])]),e[95]||(e[95]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.multiselectExtensive")),1),e[58]||(e[58]=l()),n("div",ee,[r(o(b),{modelValue:o(i).multiselectExtensive,"onUpdate:modelValue":e[12]||(e[12]=a=>o(i).multiselectExtensive=a),label:t.$t("form.label.countries"),options:o(B),placeholder:t.$t("form.placeholder.countries"),multiple:"",name:"extensive-multiselect"},null,8,["modelValue","label","options","placeholder"]),e[57]||(e[57]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[56]||(e[56]=[l(`
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
        `,-1)])]),_:1})])]),e[96]||(e[96]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.multiselectWithKeys")),1),e[61]||(e[61]=l()),n("div",le,[r(o(b),{modelValue:o(i).multiselectKeysInput,"onUpdate:modelValue":e[13]||(e[13]=a=>o(i).multiselectKeysInput=a),label:t.$t("form.label.countries"),options:$.value,placeholder:t.$t("form.placeholder.country"),"label-key":"country",multiple:"",name:"country-multiselect","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),e[60]||(e[60]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[59]||(e[59]=[l(`
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
        `,-1)])]),_:1})])]),e[97]||(e[97]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.withTooltip")),1),e[64]||(e[64]=l()),n("div",te,[r(o(b),{modelValue:o(i).tooltipMultiselect,"onUpdate:modelValue":e[14]||(e[14]=a=>o(i).tooltipMultiselect=a),label:t.$t("form.label.countries"),options:f.value,placeholder:t.$t("form.placeholder.countries"),"tooltip-options":{offset:16,position:"top"},class:"tooltip-multiselect","enable-tooltip":"",multiple:"",name:"tooltip-multiselect"},null,8,["modelValue","label","options","placeholder"]),e[63]||(e[63]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[62]||(e[62]=[l(`
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
        `,-1)])]),_:1})])]),e[98]||(e[98]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.multiselectGrouping")),1),e[67]||(e[67]=l()),n("div",ne,[r(o(b),{modelValue:o(i).multiselectGrouping,"onUpdate:modelValue":e[15]||(e[15]=a=>o(i).multiselectGrouping=a),label:t.$t("form.label.countries"),options:S.value,placeholder:t.$t("form.placeholder.countries"),multiple:"",name:"group-multiselect"},null,8,["modelValue","label","options","placeholder"]),e[66]||(e[66]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[65]||(e[65]=[l(`
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
        `,-1)])]),_:1})])]),e[99]||(e[99]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.customOptionLabel")),1),e[73]||(e[73]=l()),n("div",oe,[r(o(b),{modelValue:o(i).customLabelSelect,"onUpdate:modelValue":e[16]||(e[16]=a=>o(i).customLabelSelect=a),label:t.$t("form.label.countries"),options:S.value,placeholder:t.$t("form.placeholder.countries"),multiple:"",name:"custom-label-select"},{group:p(({label:a})=>[n("span",null,[e[68]||(e[68]=n("i",{class:"pi pi-map"},null,-1)),l(" "+d(a),1)])]),option:p(({option:a})=>[n("span",null,[e[69]||(e[69]=n("i",{class:"pi pi-map-marker"},null,-1)),l(" "+d(a.label),1)])]),_:1},8,["modelValue","label","options","placeholder"]),e[72]||(e[72]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[71]||(e[71]=[l(`
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
        `,-1)])]),_:1})])]),e[100]||(e[100]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.customSelectedLabel")),1),e[76]||(e[76]=l()),n("div",ae,[r(o(b),{modelValue:o(i).customSelectedLabelSelect,"onUpdate:modelValue":e[17]||(e[17]=a=>o(i).customSelectedLabelSelect=a),label:t.$t("form.label.countries"),options:f.value,placeholder:t.$t("form.placeholder.countries"),multiple:"",name:"custom-multiselect"},{selection:p(({selectedLabels:a})=>[n("div",se,[(I(!0),U(G,null,L(a,(v,c)=>(I(),E(o(M),{key:`custom-selected-label-${c}`,label:v},null,8,["label"]))),128))])]),_:1},8,["modelValue","label","options","placeholder"]),e[75]||(e[75]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[74]||(e[74]=[l(`
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
        `,-1)])]),_:1})])]),e[101]||(e[101]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.minMaxValidation")),1),e[79]||(e[79]=l()),n("div",re,[r(o(D),null,{default:p(()=>[r(o(b),{modelValue:o(i).inputWithMinMax,"onUpdate:modelValue":e[18]||(e[18]=a=>o(i).inputWithMinMax=a),label:t.$t("form.label.countries"),"max-selection":3,"min-selection":2,options:f.value,placeholder:t.$t("form.placeholder.countries"),multiple:"",name:"validation-multiselect"},null,8,["modelValue","label","options","placeholder"])]),_:1}),e[78]||(e[78]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[77]||(e[77]=[l(`
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
        `,-1)])]),_:1})])]),e[102]||(e[102]=l()),n("section",null,[n("h2",null,d(t.$t("form.label.customValidationInput")),1),e[82]||(e[82]=l()),n("div",ie,[r(o(D),null,{default:p(()=>[r(o(b),{modelValue:o(i).inputWithValidation,"onUpdate:modelValue":e[19]||(e[19]=a=>o(i).inputWithValidation=a),label:t.$t("form.label.countries"),options:f.value,placeholder:t.$t("form.placeholder.countries"),schema:R.value,multiple:"",name:"custom-validation-select"},null,8,["modelValue","label","options","placeholder","schema"])]),_:1}),e[81]||(e[81]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[80]||(e[80]=[l(`
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
        `,-1)])]),_:1})])]),e[103]||(e[103]=l()),r(T,{"events-data":F.value,"props-data":P.value,"props-table-title":t.$t("common.properties",{value:"SelectInputProperties"}),"slots-data":h.value},null,8,["events-data","props-data","props-table-title","slots-data"]),e[104]||(e[104]=l()),r(m,{language:"html-vue"},{default:p(()=>[...e[83]||(e[83]=[l(`
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
    `,-1)])]),_:1})]),_:1},8,["subtitle","title"])}}});export{ge as default};
