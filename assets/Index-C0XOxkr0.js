import{i as d,b as N}from"./PrefabsTechVue3Form.es-BveMBhI2.js";import{d as R,M as P,O as k,r as i,N as U,o as I,e as E,f as r,h as n,t as m,A as l,a as u,u as t,c as D,F as C,s as G,a1 as L,P as M}from"./index-B9ZmqYta.js";import{a as F}from"./data-uYwV_J55.js";import{_ as h}from"./FormPage.vue_vue_type_style_index_0_lang-vSBkflfy.js";const O={class:"section-content"},w={class:"section-content"},K={class:"section-content"},W={class:"section-content"},T={class:"section-content"},z={class:"section-content"},A={class:"section-content"},H={class:"section-content"},j={class:"section-content"},q={class:"section-content"},J={class:"section-content"},Q={class:"section-content"},X={class:"section-content"},Y={class:"section-content"},Z={class:"section-content"},x={class:"section-content"},_={class:"section-content"},ee={class:"section-content"},le={class:"selected-labels"},te={class:"section-content"},ne={class:"section-content"},oe={name:"SelectInputField"},pe=R({...oe,setup(ae){const{t:b}=P(),B=k.string({invalid_type_error:b("form.errors.multiselect.invalid")}).array().min(1,{message:b("form.errors.multiselect.invalid")});let s=M({customSelectedLabelSelect:i([]),customLabelSelect:i(),disabled:i("NP"),disabledMultiselect:i(["FR","NP"]),disableSearchInput:i(),disabledSortInput:i(),groupingSelect:i(),i18nSelect:i(),input:i(),inputWithMinMax:i([]),inputWithValidation:i([]),labelValueKeyInput:i(),multiselect:i(),multiselectExtensive:i([]),multiselectGrouping:i([]),multiselectKeysInput:i([]),noLabelInput:i(),roleSelect:i(),selectExtensive:i(),tooltipMultiselect:i([])});const g=i(!1),S=i([]),f=i([{label:b("form.label.france"),value:"FR"},{label:b("form.label.germany"),value:"DE"},{disabled:!0,label:b("form.label.belgium"),value:"BE"},{label:b("form.label.nepal"),value:"NP"},{label:b("form.label.india"),value:"IN"}]),V=i([{code:"FR",country:b("form.label.france")},{code:"DE",country:b("form.label.germany")},{code:"BE",country:b("form.label.belgium"),disabled:!0},{code:"NP",country:b("form.label.nepal")},{code:"IN",country:b("form.label.india")}]),y=i([{label:b("form.label.europe"),options:[{label:b("form.label.germany"),value:"DE"},{label:b("form.label.france"),value:"FR"},{disabled:!0,label:b("form.label.belgium"),value:"BE"}]},{label:b("form.label.asia"),options:[{label:b("form.label.nepal"),value:"NP"},{label:b("form.label.india"),value:"IN"}]}]),$=async o=>{const e={filters:{OR:[]}};o?.trim()&&e.filters.OR.push({key:"name",operator:"ct",value:o}),s?.roleSelect&&e.filters.OR.push({key:"id",operator:"in",value:s?.roleSelect}),g.value=!0;const p=[{id:"1",name:"Superadmin"},{id:"2",name:"Admin"},{disabled:!0,id:"3",name:"Guest"},{id:"4",name:"Maintainer"},{id:"5",name:"User"}];await new Promise(c=>setTimeout(c,1e3));const a=p.filter(c=>e.filters.OR.some(v=>v.key==="name"&&v.operator==="ct"?String(c.name).toLowerCase().includes(String(v.value).toLowerCase()):v.key==="id"&&v.operator==="in"?v.value.includes(c.id):!1));S.value=a,g.value=!1};return $(),(o,e)=>{const p=U("SshPre");return I(),E(h,{title:o.$t("form.label.select"),class:"demo"},{default:r(()=>[n("section",null,[n("h2",null,m(o.$t("form.label.basicInput")),1),e[22]||(e[22]=l()),n("div",O,[u(t(d),{modelValue:t(s).noLabelInput,"onUpdate:modelValue":e[0]||(e[0]=a=>t(s).noLabelInput=a),options:f.value,placeholder:o.$t("form.placeholder.country")},null,8,["modelValue","options","placeholder"]),e[21]||(e[21]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[20]||(e[20]=[l(`
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
        `,-1)])]),_:1})])]),e[83]||(e[83]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.labelInput")),1),e[25]||(e[25]=l()),n("div",w,[u(t(d),{modelValue:t(s).input,"onUpdate:modelValue":e[1]||(e[1]=a=>t(s).input=a),label:o.$t("form.label.country"),options:f.value,placeholder:o.$t("form.placeholder.country"),name:"select-input"},null,8,["modelValue","label","options","placeholder"]),e[24]||(e[24]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[23]||(e[23]=[l(`
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
        `,-1)])]),_:1})])]),e[84]||(e[84]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.disabled")),1),e[28]||(e[28]=l()),n("div",K,[u(t(d),{modelValue:t(s).disabled,"onUpdate:modelValue":e[2]||(e[2]=a=>t(s).disabled=a),label:o.$t("form.label.country"),options:f.value,placeholder:o.$t("form.placeholder.country"),disabled:"",name:"disabled-select"},null,8,["modelValue","label","options","placeholder"]),e[27]||(e[27]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[26]||(e[26]=[l(`
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
        `,-1)])]),_:1})])]),e[85]||(e[85]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.disableSort")),1),e[31]||(e[31]=l()),n("div",W,[u(t(d),{modelValue:t(s).disabledSortInput,"onUpdate:modelValue":e[3]||(e[3]=a=>t(s).disabledSortInput=a),"has-sorted-options":!1,label:o.$t("form.label.country"),options:f.value,placeholder:o.$t("form.placeholder.country"),name:"country"},null,8,["modelValue","label","options","placeholder"]),e[30]||(e[30]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[29]||(e[29]=[l(`
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
        `,-1)])]),_:1})])]),e[86]||(e[86]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.disableSearch")),1),e[34]||(e[34]=l()),n("div",T,[u(t(d),{modelValue:t(s).disableSearchInput,"onUpdate:modelValue":e[4]||(e[4]=a=>t(s).disableSearchInput=a),options:f.value,placeholder:o.$t("form.placeholder.country"),"disable-search":"",name:"search-disabled-select"},null,8,["modelValue","options","placeholder"]),e[33]||(e[33]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[32]||(e[32]=[l(`
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
        `,-1)])]),_:1})])]),e[87]||(e[87]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.withLabelValueKeys")),1),e[37]||(e[37]=l()),n("div",z,[u(t(d),{modelValue:t(s).labelValueKeyInput,"onUpdate:modelValue":e[5]||(e[5]=a=>t(s).labelValueKeyInput=a),label:o.$t("form.label.country"),options:V.value,placeholder:o.$t("form.placeholder.country"),"label-key":"country",name:"country-select","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),e[36]||(e[36]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[35]||(e[35]=[l(`
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
        `,-1)])]),_:1})])]),e[88]||(e[88]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.withI18n")),1),e[40]||(e[40]=l()),n("div",A,[u(t(d),{modelValue:t(s).i18nSelect,"onUpdate:modelValue":e[6]||(e[6]=a=>t(s).i18nSelect=a),label:o.$t("form.label.country"),options:f.value,placeholder:o.$t("form.placeholder.country"),name:"i18n-select"},null,8,["modelValue","label","options","placeholder"]),e[39]||(e[39]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[38]||(e[38]=[l(`
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
        `,-1)])]),_:1})])]),e[89]||(e[89]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.serverSideSelect")),1),e[43]||(e[43]=l()),n("div",H,[u(t(d),{modelValue:t(s).roleSelect,"onUpdate:modelValue":e[7]||(e[7]=a=>t(s).roleSelect=a),"custom-search-helper-text":o.$t("form.label.customSearchHelper"),label:o.$t("form.label.role"),loading:g.value,"no-options-message":o.$t("form.label.noRoleOptions"),options:S.value,placeholder:o.$t("form.placeholder.role"),"enable-custom-search":"","label-key":"name",name:"server-select","value-key":"id","onUpdate:searchInput":$},null,8,["modelValue","custom-search-helper-text","label","loading","no-options-message","options","placeholder"]),e[42]||(e[42]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[41]||(e[41]=[l(`
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
        `,-1)])]),_:1})])]),e[90]||(e[90]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.selectExtensive")),1),e[46]||(e[46]=l()),n("div",j,[u(t(d),{modelValue:t(s).selectExtensive,"onUpdate:modelValue":e[8]||(e[8]=a=>t(s).selectExtensive=a),label:o.$t("form.label.country"),options:t(F),placeholder:o.$t("form.placeholder.country"),name:"extensive-select"},null,8,["modelValue","label","options","placeholder"]),e[45]||(e[45]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[44]||(e[44]=[l(`
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
        `,-1)])]),_:1})])]),e[91]||(e[91]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.withGrouping")),1),e[49]||(e[49]=l()),n("div",q,[u(t(d),{modelValue:t(s).groupingSelect,"onUpdate:modelValue":e[9]||(e[9]=a=>t(s).groupingSelect=a),label:o.$t("form.label.country"),options:y.value,placeholder:o.$t("form.placeholder.country"),name:"group-select"},null,8,["modelValue","label","options","placeholder"]),e[48]||(e[48]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[47]||(e[47]=[l(`
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
        `,-1)])]),_:1})])]),e[92]||(e[92]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.multiselect")),1),e[52]||(e[52]=l()),n("div",J,[u(t(d),{modelValue:t(s).multiselect,"onUpdate:modelValue":e[10]||(e[10]=a=>t(s).multiselect=a),label:o.$t("form.label.countries"),options:f.value,placeholder:o.$t("form.placeholder.countries"),multiple:"",name:"multiselect"},null,8,["modelValue","label","options","placeholder"]),e[51]||(e[51]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[50]||(e[50]=[l(`
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
        `,-1)])]),_:1})])]),e[93]||(e[93]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.disabledMultiselect")),1),e[55]||(e[55]=l()),n("div",Q,[u(t(d),{modelValue:t(s).disabledMultiselect,"onUpdate:modelValue":e[11]||(e[11]=a=>t(s).disabledMultiselect=a),label:o.$t("form.label.countries"),options:f.value,placeholder:o.$t("form.placeholder.countries"),disabled:"",multiple:"",name:"disabled-multiselect"},null,8,["modelValue","label","options","placeholder"]),e[54]||(e[54]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[53]||(e[53]=[l(`
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
        `,-1)])]),_:1})])]),e[94]||(e[94]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.multiselectExtensive")),1),e[58]||(e[58]=l()),n("div",X,[u(t(d),{modelValue:t(s).multiselectExtensive,"onUpdate:modelValue":e[12]||(e[12]=a=>t(s).multiselectExtensive=a),label:o.$t("form.label.countries"),options:t(F),placeholder:o.$t("form.placeholder.countries"),multiple:"",name:"extensive-multiselect"},null,8,["modelValue","label","options","placeholder"]),e[57]||(e[57]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[56]||(e[56]=[l(`
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
        `,-1)])]),_:1})])]),e[95]||(e[95]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.multiselectWithKeys")),1),e[61]||(e[61]=l()),n("div",Y,[u(t(d),{modelValue:t(s).multiselectKeysInput,"onUpdate:modelValue":e[13]||(e[13]=a=>t(s).multiselectKeysInput=a),label:o.$t("form.label.countries"),options:V.value,placeholder:o.$t("form.placeholder.country"),"label-key":"country",multiple:"",name:"country-multiselect","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),e[60]||(e[60]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[59]||(e[59]=[l(`
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
        `,-1)])]),_:1})])]),e[96]||(e[96]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.withTooltip")),1),e[64]||(e[64]=l()),n("div",Z,[u(t(d),{modelValue:t(s).tooltipMultiselect,"onUpdate:modelValue":e[14]||(e[14]=a=>t(s).tooltipMultiselect=a),label:o.$t("form.label.countries"),options:f.value,placeholder:o.$t("form.placeholder.countries"),"tooltip-options":{offset:16,position:"top"},class:"tooltip-multiselect","enable-tooltip":"",multiple:"",name:"tooltip-multiselect"},null,8,["modelValue","label","options","placeholder"]),e[63]||(e[63]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[62]||(e[62]=[l(`
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
        `,-1)])]),_:1})])]),e[97]||(e[97]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.multiselectGrouping")),1),e[67]||(e[67]=l()),n("div",x,[u(t(d),{modelValue:t(s).multiselectGrouping,"onUpdate:modelValue":e[15]||(e[15]=a=>t(s).multiselectGrouping=a),label:o.$t("form.label.countries"),options:y.value,placeholder:o.$t("form.placeholder.countries"),multiple:"",name:"group-multiselect"},null,8,["modelValue","label","options","placeholder"]),e[66]||(e[66]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[65]||(e[65]=[l(`
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
        `,-1)])]),_:1})])]),e[98]||(e[98]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.customOptionLabel")),1),e[73]||(e[73]=l()),n("div",_,[u(t(d),{modelValue:t(s).customLabelSelect,"onUpdate:modelValue":e[16]||(e[16]=a=>t(s).customLabelSelect=a),label:o.$t("form.label.countries"),options:y.value,placeholder:o.$t("form.placeholder.countries"),multiple:"",name:"custom-label-select"},{group:r(({label:a})=>[n("span",null,[e[68]||(e[68]=n("i",{class:"pi pi-map"},null,-1)),l(" "+m(a),1)])]),option:r(({option:a})=>[n("span",null,[e[69]||(e[69]=n("i",{class:"pi pi-map-marker"},null,-1)),l(" "+m(a.label),1)])]),_:1},8,["modelValue","label","options","placeholder"]),e[72]||(e[72]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[71]||(e[71]=[l(`
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
        `,-1)])]),_:1})])]),e[99]||(e[99]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.customSelectedLabel")),1),e[76]||(e[76]=l()),n("div",ee,[u(t(d),{modelValue:t(s).customSelectedLabelSelect,"onUpdate:modelValue":e[17]||(e[17]=a=>t(s).customSelectedLabelSelect=a),label:o.$t("form.label.countries"),options:f.value,placeholder:o.$t("form.placeholder.countries"),multiple:"",name:"custom-multiselect"},{selection:r(({selectedLabels:a})=>[n("div",le,[(I(!0),D(C,null,G(a,(c,v)=>(I(),E(t(L),{key:`custom-selected-label-${v}`,label:c},null,8,["label"]))),128))])]),_:1},8,["modelValue","label","options","placeholder"]),e[75]||(e[75]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[74]||(e[74]=[l(`
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
        `,-1)])]),_:1})])]),e[100]||(e[100]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.minMaxValidation")),1),e[79]||(e[79]=l()),n("div",te,[u(t(N),null,{default:r(()=>[u(t(d),{modelValue:t(s).inputWithMinMax,"onUpdate:modelValue":e[18]||(e[18]=a=>t(s).inputWithMinMax=a),label:o.$t("form.label.countries"),"max-selection":3,"min-selection":2,options:f.value,placeholder:o.$t("form.placeholder.countries"),multiple:"",name:"validation-multiselect"},null,8,["modelValue","label","options","placeholder"])]),_:1}),e[78]||(e[78]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[77]||(e[77]=[l(`
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
        `,-1)])]),_:1})])]),e[101]||(e[101]=l()),n("section",null,[n("h2",null,m(o.$t("form.label.customValidationInput")),1),e[82]||(e[82]=l()),n("div",ne,[u(t(N),null,{default:r(()=>[u(t(d),{modelValue:t(s).inputWithValidation,"onUpdate:modelValue":e[19]||(e[19]=a=>t(s).inputWithValidation=a),label:o.$t("form.label.countries"),options:f.value,placeholder:o.$t("form.placeholder.countries"),schema:t(B),multiple:"",name:"custom-validation-select"},null,8,["modelValue","label","options","placeholder","schema"])]),_:1}),e[81]||(e[81]=l()),u(p,{language:"html-vue"},{default:r(()=>[...e[80]||(e[80]=[l(`
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
        `,-1)])]),_:1})])])]),_:1},8,["title"])}}});export{pe as default};
