import{a as d,E as N}from"./PrefabsTechVue3Form.es-Bze17toz.js";import{d as P,I as k,L as U,M as C,r as s,J as G,e as E,o as g,i,f as o,B as l,t as m,h as r,u as n,k as L,y as F,a as D,F as M,a1 as h}from"./index-D_DhoSCk.js";import{a as B}from"./data-uYwV_J55.js";import{_ as O}from"./FormPage.vue_vue_type_style_index_0_lang-BVPtOYj2.js";const w={class:"section-content"},K={class:"section-content"},W={class:"section-content"},T={class:"section-content"},z={class:"section-content"},H={class:"section-content"},A={class:"section-content"},J={class:"section-content"},j={class:"section-content"},q={class:"section-content"},Q={class:"section-content"},X={class:"section-content"},Y={class:"section-content"},Z={class:"section-content"},x={class:"section-content"},_={class:"section-content"},ee={class:"section-content"},le={class:"section-content"},te={class:"selected-labels"},ne={class:"section-content"},oe={class:"section-content"},ae={name:"SelectInputField"},me=P({...ae,setup(ue){const{t:b}=k(),R=U.string({invalid_type_error:b("form.errors.multiselect.invalid")}).array().min(1,{message:b("form.errors.multiselect.invalid")});let a=C({customSelectedLabelSelect:s([]),customLabelSelect:s(),disabled:s("NP"),disabledMultiselect:s(["FR","NP"]),disableSearchInput:s(),disabledSortInput:s(),groupingSelect:s(),i18nSelect:s(),input:s(),inputWithMinMax:s([]),inputWithValidation:s([]),labelValueKeyInput:s(),multiselect:s(),multiselectExtensive:s([]),multiselectGrouping:s([]),multiselectKeysInput:s([]),noLabelInput:s(),roleSelect:s(),selectExtensive:s(),tooltipMultiselect:s([])});const y=s(!1),S=s([]),f=s([{label:b("form.label.france"),value:"FR"},{label:b("form.label.germany"),value:"DE"},{disabled:!0,label:b("form.label.belgium"),value:"BE"},{label:b("form.label.nepal"),value:"NP"},{label:b("form.label.india"),value:"IN"}]),I=s([{code:"FR",country:b("form.label.france")},{code:"DE",country:b("form.label.germany")},{code:"BE",country:b("form.label.belgium"),disabled:!0},{code:"NP",country:b("form.label.nepal")},{code:"IN",country:b("form.label.india")}]),V=s([{label:b("form.label.europe"),options:[{label:b("form.label.germany"),value:"DE"},{label:b("form.label.france"),value:"FR"},{disabled:!0,label:b("form.label.belgium"),value:"BE"}]},{label:b("form.label.asia"),options:[{label:b("form.label.nepal"),value:"NP"},{label:b("form.label.india"),value:"IN"}]}]),$=async t=>{const e={filters:{OR:[]}};t!=null&&t.trim()&&e.filters.OR.push({key:"name",operator:"ct",value:t}),a!=null&&a.roleSelect&&e.filters.OR.push({key:"id",operator:"in",value:a==null?void 0:a.roleSelect}),y.value=!0;const p=[{id:"1",name:"Superadmin"},{id:"2",name:"Admin"},{disabled:!0,id:"3",name:"Guest"},{id:"4",name:"Maintainer"},{id:"5",name:"User"}];await new Promise(c=>setTimeout(c,1e3));const u=p.filter(c=>e.filters.OR.some(v=>v.key==="name"&&v.operator==="ct"?String(c.name).toLowerCase().includes(String(v.value).toLowerCase()):v.key==="id"&&v.operator==="in"?v.value.includes(c.id):!1));S.value=u,y.value=!1};return $(),(t,e)=>{const p=G("SshPre");return g(),E(O,{title:t.$t("form.label.select"),class:"demo"},{default:i(()=>[o("section",null,[o("h2",null,m(t.$t("form.label.basicInput")),1),e[22]||(e[22]=l()),o("div",w,[r(n(d),{modelValue:n(a).noLabelInput,"onUpdate:modelValue":e[0]||(e[0]=u=>n(a).noLabelInput=u),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","options","placeholder"]),e[21]||(e[21]=l()),r(p,{language:"html-vue"},{default:i(()=>e[20]||(e[20]=[l(`
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
        `)])),_:1})])]),e[81]||(e[81]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.labelInput")),1),e[25]||(e[25]=l()),o("div",K,[r(n(d),{modelValue:n(a).input,"onUpdate:modelValue":e[1]||(e[1]=u=>n(a).input=u),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),e[24]||(e[24]=l()),r(p,{language:"html-vue"},{default:i(()=>e[23]||(e[23]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Country"
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
        `)])),_:1})])]),e[82]||(e[82]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.disabled")),1),e[28]||(e[28]=l()),o("div",W,[r(n(d),{modelValue:n(a).disabled,"onUpdate:modelValue":e[2]||(e[2]=u=>n(a).disabled=u),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country"),disabled:""},null,8,["modelValue","label","options","placeholder"]),e[27]||(e[27]=l()),r(p,{language:"html-vue"},{default:i(()=>e[26]||(e[26]=[l(`
          <template>
            <SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Country"
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
        `)])),_:1})])]),e[83]||(e[83]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.disableSort")),1),e[31]||(e[31]=l()),o("div",T,[r(n(d),{modelValue:n(a).disabledSortInput,"onUpdate:modelValue":e[3]||(e[3]=u=>n(a).disabledSortInput=u),"has-sorted-options":!1,label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),e[30]||(e[30]=l()),r(p,{language:"html-vue"},{default:i(()=>e[29]||(e[29]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :has-sorted-options="false"
              :options="options"
              label="Country"
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
        `)])),_:1})])]),e[84]||(e[84]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.disableSearch")),1),e[34]||(e[34]=l()),o("div",z,[r(n(d),{modelValue:n(a).disableSearchInput,"onUpdate:modelValue":e[4]||(e[4]=u=>n(a).disableSearchInput=u),options:f.value,placeholder:t.$t("form.placeholder.country"),"disable-search":""},null,8,["modelValue","options","placeholder"]),e[33]||(e[33]=l()),r(p,{language:"html-vue"},{default:i(()=>e[32]||(e[32]=[l(`
          <template>
            <SelectInput
              v-model="input"
              :options="options"
              disable-search
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
        `)])),_:1})])]),e[85]||(e[85]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.withLabelValueKeys")),1),e[37]||(e[37]=l()),o("div",H,[r(n(d),{modelValue:n(a).labelValueKeyInput,"onUpdate:modelValue":e[5]||(e[5]=u=>n(a).labelValueKeyInput=u),label:t.$t("form.label.country"),options:I.value,placeholder:t.$t("form.placeholder.country"),"label-key":"country","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),e[36]||(e[36]=l()),r(p,{language:"html-vue"},{default:i(()=>e[35]||(e[35]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Country"
              label-key="country"
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
        `)])),_:1})])]),e[86]||(e[86]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.withI18n")),1),e[40]||(e[40]=l()),o("div",A,[r(n(d),{modelValue:n(a).i18nSelect,"onUpdate:modelValue":e[6]||(e[6]=u=>n(a).i18nSelect=u),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),e[39]||(e[39]=l()),r(p,{language:"html-vue"},{default:i(()=>e[38]||(e[38]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              :label="t('form.label.country')"
              :placeholder="t('form.placeholder.country')"
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
        `)])),_:1})])]),e[87]||(e[87]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.serverSideSelect")),1),e[43]||(e[43]=l()),o("div",J,[r(n(d),{modelValue:n(a).roleSelect,"onUpdate:modelValue":e[7]||(e[7]=u=>n(a).roleSelect=u),"custom-search-helper-text":t.$t("form.label.customSearchHelper"),label:t.$t("form.label.role"),loading:y.value,"no-options-message":t.$t("form.label.noRoleOptions"),options:S.value,placeholder:t.$t("form.placeholder.role"),"enable-custom-search":"","label-key":"name","value-key":"id","onUpdate:searchInput":$},null,8,["modelValue","custom-search-helper-text","label","loading","no-options-message","options","placeholder"]),e[42]||(e[42]=l()),r(p,{language:"html-vue"},{default:i(()=>e[41]||(e[41]=[l(`
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
        `)])),_:1})])]),e[88]||(e[88]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.selectExtensive")),1),e[46]||(e[46]=l()),o("div",j,[r(n(d),{modelValue:n(a).selectExtensive,"onUpdate:modelValue":e[8]||(e[8]=u=>n(a).selectExtensive=u),label:t.$t("form.label.country"),options:n(B),placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),e[45]||(e[45]=l()),r(p,{language:"html-vue"},{default:i(()=>e[44]||(e[44]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :options="countries"
              label="Country"
              placeholder="Select a country"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import { countries } from "../data";
          <\/script>
        `)])),_:1})])]),e[89]||(e[89]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.withGrouping")),1),e[49]||(e[49]=l()),o("div",q,[r(n(d),{modelValue:n(a).groupingSelect,"onUpdate:modelValue":e[9]||(e[9]=u=>n(a).groupingSelect=u),label:t.$t("form.label.country"),options:V.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),e[48]||(e[48]=l()),r(p,{language:"html-vue"},{default:i(()=>e[47]||(e[47]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Country"
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
        `)])),_:1})])]),e[90]||(e[90]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.multiselect")),1),e[52]||(e[52]=l()),o("div",Q,[r(n(d),{modelValue:n(a).multiselect,"onUpdate:modelValue":e[10]||(e[10]=u=>n(a).multiselect=u),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"]),e[51]||(e[51]=l()),r(p,{language:"html-vue"},{default:i(()=>e[50]||(e[50]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Country"
              multiple
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
        `)])),_:1})])]),e[91]||(e[91]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.disabledMultiselect")),1),e[55]||(e[55]=l()),o("div",X,[r(n(d),{modelValue:n(a).disabledMultiselect,"onUpdate:modelValue":e[11]||(e[11]=u=>n(a).disabledMultiselect=u),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.countries"),disabled:"",multiple:""},null,8,["modelValue","label","options","placeholder"]),e[54]||(e[54]=l()),r(p,{language:"html-vue"},{default:i(()=>e[53]||(e[53]=[l(`
          <template>
            <SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Country"
              multiple
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
        `)])),_:1})])]),e[92]||(e[92]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.multiselectExtensive")),1),e[58]||(e[58]=l()),o("div",Y,[r(n(d),{modelValue:n(a).multiselectExtensive,"onUpdate:modelValue":e[12]||(e[12]=u=>n(a).multiselectExtensive=u),label:t.$t("form.label.country"),options:n(B),placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"]),e[57]||(e[57]=l()),r(p,{language:"html-vue"},{default:i(()=>e[56]||(e[56]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :options="countries"
              label="Country"
              multiple
              placeholder="Select countries"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import { countries } from "../data";
          <\/script>
        `)])),_:1})])]),e[93]||(e[93]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.multiselectWithKeys")),1),e[61]||(e[61]=l()),o("div",Z,[r(n(d),{modelValue:n(a).multiselectKeysInput,"onUpdate:modelValue":e[13]||(e[13]=u=>n(a).multiselectKeysInput=u),label:t.$t("form.label.country"),options:I.value,placeholder:t.$t("form.placeholder.country"),"label-key":"country",multiple:"","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),e[60]||(e[60]=l()),r(p,{language:"html-vue"},{default:i(()=>e[59]||(e[59]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Country"
              label-key="language"
              placeholder="Select a country"
              multiple
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
        `)])),_:1})])]),e[94]||(e[94]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.withTooltip")),1),e[64]||(e[64]=l()),o("div",x,[r(n(d),{modelValue:n(a).tooltipMultiselect,"onUpdate:modelValue":e[14]||(e[14]=u=>n(a).tooltipMultiselect=u),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.countries"),"tooltip-options":{offset:16,position:"top"},class:"tooltip-multiselect","enable-tooltip":"",multiple:""},null,8,["modelValue","label","options","placeholder"]),e[63]||(e[63]=l()),r(p,{language:"html-vue"},{default:i(()=>e[62]||(e[62]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              :tooltip-options="{
                offset: 16,
                position: 'top',
              }"
              enable-tooltip
              label="Country"
              multiple
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
        `)])),_:1})])]),e[95]||(e[95]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.multiselectGrouping")),1),e[67]||(e[67]=l()),o("div",_,[r(n(d),{modelValue:n(a).multiselectGrouping,"onUpdate:modelValue":e[15]||(e[15]=u=>n(a).multiselectGrouping=u),label:t.$t("form.label.country"),options:V.value,placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"]),e[66]||(e[66]=l()),r(p,{language:"html-vue"},{default:i(()=>e[65]||(e[65]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Country"
              multiple
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
        `)])),_:1})])]),e[96]||(e[96]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.customOptionLabel")),1),e[71]||(e[71]=l()),o("div",ee,[r(n(d),{modelValue:n(a).customLabelSelect,"onUpdate:modelValue":e[16]||(e[16]=u=>n(a).customLabelSelect=u),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country"),multiple:""},L({_:2},[F(f.value,(u,c)=>({name:u.label,fn:i(()=>[o("span",null,[e[68]||(e[68]=o("i",{class:"pi pi-user"},null,-1)),l(" "+m(u.label),1)])])}))]),1032,["modelValue","label","options","placeholder"]),e[70]||(e[70]=l()),r(p,{language:"html-vue"},{default:i(()=>e[69]||(e[69]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :label="t('form.label.country')"
              :options="options"
              :placeholder="t('form.placeholder.country')"
              multiple
            >
              <template
                v-for="(option, index) in options"
                #[option.label]
              >
                <span>
                  <i class="pi pi-user" />
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

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          <\/script>
        `)])),_:1})])]),e[97]||(e[97]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.customSelectedLabel")),1),e[74]||(e[74]=l()),o("div",le,[r(n(d),{modelValue:n(a).customSelectedLabelSelect,"onUpdate:modelValue":e[17]||(e[17]=u=>n(a).customSelectedLabelSelect=u),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country"),multiple:""},{selection:i(({selectedLabels:u})=>[o("div",te,[(g(!0),D(M,null,F(u,(c,v)=>(g(),E(n(h),{key:`custom-selected-label-${v}`,label:c},null,8,["label"]))),128))])]),_:1},8,["modelValue","label","options","placeholder"]),e[73]||(e[73]=l()),r(p,{language:"html-vue"},{default:i(()=>e[72]||(e[72]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :label="t('form.label.country')"
              :options="options"
              :placeholder="t('form.placeholder.country')"
              multiple
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
        `)])),_:1})])]),e[98]||(e[98]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.minMaxValidation")),1),e[77]||(e[77]=l()),o("div",ne,[r(n(N),null,{default:i(()=>[r(n(d),{modelValue:n(a).inputWithMinMax,"onUpdate:modelValue":e[18]||(e[18]=u=>n(a).inputWithMinMax=u),label:t.$t("form.label.country"),"max-selection":3,"min-selection":2,options:f.value,placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"])]),_:1}),e[76]||(e[76]=l()),r(p,{language:"html-vue"},{default:i(()=>e[75]||(e[75]=[l(`
          <Form>
            <SelectInput 
              v-model="input"
              :max-selection="3"
              :min-selection="2"
              :options="options"
              label="Country"
              multiple
              placeholder="Select countries"
            />
          </Form>

          <script setup lang="ts">
          import { Form, SelectInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[99]||(e[99]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.customValidationInput")),1),e[80]||(e[80]=l()),o("div",oe,[r(n(N),null,{default:i(()=>[r(n(d),{modelValue:n(a).inputWithValidation,"onUpdate:modelValue":e[19]||(e[19]=u=>n(a).inputWithValidation=u),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.countries"),schema:n(R),multiple:""},null,8,["modelValue","label","options","placeholder","schema"])]),_:1}),e[79]||(e[79]=l()),r(p,{language:"html-vue"},{default:i(()=>e[78]||(e[78]=[l(`
          <Form>
            <SelectInput 
              v-model="input"
              :options="options"
              :schema="inputSchema"
              label="Country"
              multiple
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{me as default};
