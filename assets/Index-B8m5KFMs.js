import{a as b,E as $}from"./PrefabsTechVue3Form.es-B2BaFGU7.js";import{d as F,I as B,M as R,N as P,r as s,L as C,e as k,o as U,j as i,C as l,f as o,t as d,h as r,u as t,l as G,z as M,v as D}from"./index-CA3Jbfm5.js";import{a as N}from"./data-uYwV_J55.js";import{_ as L}from"./FormPage.vue_vue_type_style_index_0_lang-B2jtbqUY.js";const O={class:"section-content"},w={class:"section-content"},K={class:"section-content"},W={class:"section-content"},h={class:"section-content"},z={class:"section-content"},T={class:"section-content"},H={class:"section-content"},j={class:"section-content"},A={class:"section-content"},q={class:"section-content"},J={class:"section-content"},Q={class:"section-content"},X={class:"section-content"},Y={class:"section-content"},Z={class:"section-content"},x={class:"section-content"},_={class:"section-content"},ee={name:"SelectInputField"},ue=F({...ee,setup(le){const{t:m}=B(),E=R.string({invalid_type_error:m("form.errors.multiselect.invalid")}).array().min(1,{message:m("form.errors.multiselect.invalid")});let a=P({customLabelSelect:s(),disabled:s("NP"),disabledMultiselect:s(["FR","NP"]),disabledSortInput:s(),groupingSelect:s(),i18nSelect:s(),input:s(),inputWithMinMax:s([]),inputWithValidation:s([]),labelValueKeyInput:s(),multiselect:s(),multiselectExtensive:s([]),multiselectGrouping:s([]),multiselectKeysInput:s([]),noLabelInput:s(),roleSelect:s(),selectExtensive:s(),tooltipMultiselect:s([])});const g=s(!1),c=s([]),f=s([{label:m("form.label.france"),value:"FR"},{label:m("form.label.germany"),value:"DE"},{disabled:!0,label:m("form.label.belgium"),value:"BE"},{label:m("form.label.nepal"),value:"NP"},{label:m("form.label.india"),value:"IN"}]),I=s([{code:"FR",country:m("form.label.france")},{code:"DE",country:m("form.label.germany")},{code:"BE",country:m("form.label.belgium"),disabled:!0},{code:"NP",country:m("form.label.nepal")},{code:"IN",country:m("form.label.india")}]),S=s([{label:m("form.label.europe"),options:[{label:m("form.label.germany"),value:"DE"},{label:m("form.label.france"),value:"FR"},{disabled:!0,label:m("form.label.belgium"),value:"BE"}]},{label:m("form.label.asia"),options:[{label:m("form.label.nepal"),value:"NP"},{label:m("form.label.india"),value:"IN"}]}]),V=async n=>{const e={filters:{OR:[]}};n!=null&&n.trim()&&e.filters.OR.push({key:"name",operator:"ct",value:n}),a!=null&&a.roleSelect&&e.filters.OR.push({key:"id",operator:"in",value:a==null?void 0:a.roleSelect}),g.value=!0;const p=[{id:"1",name:"Superadmin"},{id:"2",name:"Admin"},{disabled:!0,id:"3",name:"Guest"},{id:"4",name:"Maintainer"},{id:"5",name:"User"}];await new Promise(y=>setTimeout(y,1e3));const u=p.filter(y=>e.filters.OR.some(v=>v.key==="name"&&v.operator==="ct"?String(y.name).toLowerCase().includes(String(v.value).toLowerCase()):v.key==="id"&&v.operator==="in"?v.value.includes(y.id):!1));c.value=u,g.value=!1};return V(),(n,e)=>{const p=C("SshPre");return U(),k(L,{title:n.$t("form.label.select"),class:"demo"},{toolbar:i(()=>[r(t(D),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=u=>n.$router.push("/form"))},null,8,["label"])]),default:i(()=>[e[74]||(e[74]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.basicInput")),1),e[21]||(e[21]=l()),o("div",O,[r(t(b),{modelValue:t(a).noLabelInput,"onUpdate:modelValue":e[1]||(e[1]=u=>t(a).noLabelInput=u),options:f.value,placeholder:n.$t("form.placeholder.country")},null,8,["modelValue","options","placeholder"]),e[20]||(e[20]=l()),r(p,{language:"html-vue"},{default:i(()=>e[19]||(e[19]=[l(`
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
        `)])),_:1})])]),e[75]||(e[75]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.labelInput")),1),e[24]||(e[24]=l()),o("div",w,[r(t(b),{modelValue:t(a).input,"onUpdate:modelValue":e[2]||(e[2]=u=>t(a).input=u),label:n.$t("form.label.country"),options:f.value,placeholder:n.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),e[23]||(e[23]=l()),r(p,{language:"html-vue"},{default:i(()=>e[22]||(e[22]=[l(`
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
        `)])),_:1})])]),e[76]||(e[76]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.disabled")),1),e[27]||(e[27]=l()),o("div",K,[r(t(b),{modelValue:t(a).disabled,"onUpdate:modelValue":e[3]||(e[3]=u=>t(a).disabled=u),label:n.$t("form.label.country"),options:f.value,placeholder:n.$t("form.placeholder.country"),disabled:""},null,8,["modelValue","label","options","placeholder"]),e[26]||(e[26]=l()),r(p,{language:"html-vue"},{default:i(()=>e[25]||(e[25]=[l(`
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
        `)])),_:1})])]),e[77]||(e[77]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.disableSort")),1),e[30]||(e[30]=l()),o("div",W,[r(t(b),{modelValue:t(a).disabledSortInput,"onUpdate:modelValue":e[4]||(e[4]=u=>t(a).disabledSortInput=u),"has-sorted-options":!1,label:n.$t("form.label.country"),options:f.value,placeholder:n.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),e[29]||(e[29]=l()),r(p,{language:"html-vue"},{default:i(()=>e[28]||(e[28]=[l(`
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
        `)])),_:1})])]),e[78]||(e[78]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.withLabelValueKeys")),1),e[33]||(e[33]=l()),o("div",h,[r(t(b),{modelValue:t(a).labelValueKeyInput,"onUpdate:modelValue":e[5]||(e[5]=u=>t(a).labelValueKeyInput=u),label:n.$t("form.label.country"),options:I.value,placeholder:n.$t("form.placeholder.country"),"label-key":"country","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),e[32]||(e[32]=l()),r(p,{language:"html-vue"},{default:i(()=>e[31]||(e[31]=[l(`
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
        `)])),_:1})])]),e[79]||(e[79]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.withI18n")),1),e[36]||(e[36]=l()),o("div",z,[r(t(b),{modelValue:t(a).i18nSelect,"onUpdate:modelValue":e[6]||(e[6]=u=>t(a).i18nSelect=u),label:n.$t("form.label.country"),options:f.value,placeholder:n.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),e[35]||(e[35]=l()),r(p,{language:"html-vue"},{default:i(()=>e[34]||(e[34]=[l(`
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
        `)])),_:1})])]),e[80]||(e[80]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.serverSideSelect")),1),e[39]||(e[39]=l()),o("div",T,[r(t(b),{modelValue:t(a).roleSelect,"onUpdate:modelValue":e[7]||(e[7]=u=>t(a).roleSelect=u),"custom-search-helper-text":n.$t("form.label.customSearchHelper"),label:n.$t("form.label.role"),loading:g.value,"no-options-message":n.$t("form.label.noRoleOptions"),options:c.value,placeholder:n.$t("form.placeholder.role"),"enable-custom-search":"","label-key":"name","value-key":"id","onUpdate:searchInput":V},null,8,["modelValue","custom-search-helper-text","label","loading","no-options-message","options","placeholder"]),e[38]||(e[38]=l()),r(p,{language:"html-vue"},{default:i(()=>e[37]||(e[37]=[l(`
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
        `)])),_:1})])]),e[81]||(e[81]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.selectExtensive")),1),e[42]||(e[42]=l()),o("div",H,[r(t(b),{modelValue:t(a).selectExtensive,"onUpdate:modelValue":e[8]||(e[8]=u=>t(a).selectExtensive=u),label:n.$t("form.label.country"),options:t(N),placeholder:n.$t("form.placeholder.countries")},null,8,["modelValue","label","options","placeholder"]),e[41]||(e[41]=l()),r(p,{language:"html-vue"},{default:i(()=>e[40]||(e[40]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :options="countries"
              label="Country"
              placeholder="Select countries"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import { countries } from "../data";
          <\/script>
        `)])),_:1})])]),e[82]||(e[82]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.withGrouping")),1),e[45]||(e[45]=l()),o("div",j,[r(t(b),{modelValue:t(a).groupingSelect,"onUpdate:modelValue":e[9]||(e[9]=u=>t(a).groupingSelect=u),label:n.$t("form.label.country"),options:S.value,placeholder:n.$t("form.placeholder.countries")},null,8,["modelValue","label","options","placeholder"]),e[44]||(e[44]=l()),r(p,{language:"html-vue"},{default:i(()=>e[43]||(e[43]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Country"
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
        `)])),_:1})])]),e[83]||(e[83]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.multiselect")),1),e[48]||(e[48]=l()),o("div",A,[r(t(b),{modelValue:t(a).multiselect,"onUpdate:modelValue":e[10]||(e[10]=u=>t(a).multiselect=u),label:n.$t("form.label.country"),options:f.value,placeholder:n.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"]),e[47]||(e[47]=l()),r(p,{language:"html-vue"},{default:i(()=>e[46]||(e[46]=[l(`
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
        `)])),_:1})])]),e[84]||(e[84]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.disabledMultiselect")),1),e[51]||(e[51]=l()),o("div",q,[r(t(b),{modelValue:t(a).disabledMultiselect,"onUpdate:modelValue":e[11]||(e[11]=u=>t(a).disabledMultiselect=u),label:n.$t("form.label.country"),options:f.value,placeholder:n.$t("form.placeholder.countries"),disabled:"",multiple:""},null,8,["modelValue","label","options","placeholder"]),e[50]||(e[50]=l()),r(p,{language:"html-vue"},{default:i(()=>e[49]||(e[49]=[l(`
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
        `)])),_:1})])]),e[85]||(e[85]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.multiselectExtensive")),1),e[54]||(e[54]=l()),o("div",J,[r(t(b),{modelValue:t(a).multiselectExtensive,"onUpdate:modelValue":e[12]||(e[12]=u=>t(a).multiselectExtensive=u),label:n.$t("form.label.country"),options:t(N),placeholder:n.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"]),e[53]||(e[53]=l()),r(p,{language:"html-vue"},{default:i(()=>e[52]||(e[52]=[l(`
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
        `)])),_:1})])]),e[86]||(e[86]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.multiselectWithKeys")),1),e[57]||(e[57]=l()),o("div",Q,[r(t(b),{modelValue:t(a).multiselectKeysInput,"onUpdate:modelValue":e[13]||(e[13]=u=>t(a).multiselectKeysInput=u),label:n.$t("form.label.country"),options:I.value,placeholder:n.$t("form.placeholder.country"),"label-key":"country",multiple:"","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),e[56]||(e[56]=l()),r(p,{language:"html-vue"},{default:i(()=>e[55]||(e[55]=[l(`
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
        `)])),_:1})])]),e[87]||(e[87]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.withTooltip")),1),e[60]||(e[60]=l()),o("div",X,[r(t(b),{modelValue:t(a).tooltipMultiselect,"onUpdate:modelValue":e[14]||(e[14]=u=>t(a).tooltipMultiselect=u),label:n.$t("form.label.country"),options:f.value,placeholder:n.$t("form.placeholder.countries"),"tooltip-options":{offset:16,position:"top"},class:"tooltip-multiselect","enable-tooltip":"",multiple:""},null,8,["modelValue","label","options","placeholder"]),e[59]||(e[59]=l()),r(p,{language:"html-vue"},{default:i(()=>e[58]||(e[58]=[l(`
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
        `)])),_:1})])]),e[88]||(e[88]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.multiselectGrouping")),1),e[63]||(e[63]=l()),o("div",Y,[r(t(b),{modelValue:t(a).multiselectGrouping,"onUpdate:modelValue":e[15]||(e[15]=u=>t(a).multiselectGrouping=u),label:n.$t("form.label.country"),options:S.value,placeholder:n.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"]),e[62]||(e[62]=l()),r(p,{language:"html-vue"},{default:i(()=>e[61]||(e[61]=[l(`
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
        `)])),_:1})])]),e[89]||(e[89]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.customLabel")),1),e[67]||(e[67]=l()),o("div",Z,[r(t(b),{modelValue:t(a).customLabelSelect,"onUpdate:modelValue":e[16]||(e[16]=u=>t(a).customLabelSelect=u),label:n.$t("form.label.country"),options:f.value,placeholder:n.$t("form.placeholder.country"),multiple:""},G({_:2},[M(f.value,(u,y)=>({name:u.label,fn:i(()=>[o("span",null,[e[64]||(e[64]=o("i",{class:"pi pi-user"},null,-1)),l(" "+d(u.label),1)])])}))]),1032,["modelValue","label","options","placeholder"]),e[66]||(e[66]=l()),r(p,{language:"html-vue"},{default:i(()=>e[65]||(e[65]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              :label="t('form.label.country')"
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
        `)])),_:1})])]),e[90]||(e[90]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.minMaxValidation")),1),e[70]||(e[70]=l()),o("div",x,[r(t($),null,{default:i(()=>[r(t(b),{modelValue:t(a).inputWithMinMax,"onUpdate:modelValue":e[17]||(e[17]=u=>t(a).inputWithMinMax=u),label:n.$t("form.label.country"),"max-selection":3,"min-selection":2,options:f.value,placeholder:n.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"])]),_:1}),e[69]||(e[69]=l()),r(p,{language:"html-vue"},{default:i(()=>e[68]||(e[68]=[l(`
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
        `)])),_:1})])]),e[91]||(e[91]=l()),o("section",null,[o("h2",null,d(n.$t("form.label.customValidationInput")),1),e[73]||(e[73]=l()),o("div",_,[r(t($),null,{default:i(()=>[r(t(b),{modelValue:t(a).inputWithValidation,"onUpdate:modelValue":e[18]||(e[18]=u=>t(a).inputWithValidation=u),label:n.$t("form.label.country"),options:f.value,placeholder:n.$t("form.placeholder.countries"),schema:t(E),multiple:""},null,8,["modelValue","label","options","placeholder","schema"])]),_:1}),e[72]||(e[72]=l()),r(p,{language:"html-vue"},{default:i(()=>e[71]||(e[71]=[l(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{ue as default};
