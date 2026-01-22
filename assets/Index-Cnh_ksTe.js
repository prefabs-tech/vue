import{l as d,w as N}from"./PrefabsTechVue3Form.es-Bfedrzw7.js";import{d as R,I as P,L as k,M as U,r as i,J as C,e as E,o as S,i as s,f as o,B as l,t as m,h as r,u as n,a as G,F as L,y as D,a1 as M}from"./index-Bb0NF83y.js";import{a as F}from"./data-uYwV_J55.js";import{_ as w}from"./FormPage.vue_vue_type_style_index_0_lang-DVCHhFQS.js";const O={class:"section-content"},h={class:"section-content"},K={class:"section-content"},W={class:"section-content"},T={class:"section-content"},z={class:"section-content"},H={class:"section-content"},A={class:"section-content"},J={class:"section-content"},j={class:"section-content"},q={class:"section-content"},Q={class:"section-content"},X={class:"section-content"},Y={class:"section-content"},Z={class:"section-content"},x={class:"section-content"},_={class:"section-content"},ee={class:"section-content"},le={class:"selected-labels"},te={class:"section-content"},ne={class:"section-content"},oe={name:"SelectInputField"},pe=R({...oe,setup(ae){const{t:b}=P(),B=k.string({invalid_type_error:b("form.errors.multiselect.invalid")}).array().min(1,{message:b("form.errors.multiselect.invalid")});let u=U({customSelectedLabelSelect:i([]),customLabelSelect:i(),disabled:i("NP"),disabledMultiselect:i(["FR","NP"]),disableSearchInput:i(),disabledSortInput:i(),groupingSelect:i(),i18nSelect:i(),input:i(),inputWithMinMax:i([]),inputWithValidation:i([]),labelValueKeyInput:i(),multiselect:i(),multiselectExtensive:i([]),multiselectGrouping:i([]),multiselectKeysInput:i([]),noLabelInput:i(),roleSelect:i(),selectExtensive:i(),tooltipMultiselect:i([])});const g=i(!1),I=i([]),f=i([{label:b("form.label.france"),value:"FR"},{label:b("form.label.germany"),value:"DE"},{disabled:!0,label:b("form.label.belgium"),value:"BE"},{label:b("form.label.nepal"),value:"NP"},{label:b("form.label.india"),value:"IN"}]),V=i([{code:"FR",country:b("form.label.france")},{code:"DE",country:b("form.label.germany")},{code:"BE",country:b("form.label.belgium"),disabled:!0},{code:"NP",country:b("form.label.nepal")},{code:"IN",country:b("form.label.india")}]),y=i([{label:b("form.label.europe"),options:[{label:b("form.label.germany"),value:"DE"},{label:b("form.label.france"),value:"FR"},{disabled:!0,label:b("form.label.belgium"),value:"BE"}]},{label:b("form.label.asia"),options:[{label:b("form.label.nepal"),value:"NP"},{label:b("form.label.india"),value:"IN"}]}]),$=async t=>{const e={filters:{OR:[]}};t!=null&&t.trim()&&e.filters.OR.push({key:"name",operator:"ct",value:t}),u!=null&&u.roleSelect&&e.filters.OR.push({key:"id",operator:"in",value:u==null?void 0:u.roleSelect}),g.value=!0;const p=[{id:"1",name:"Superadmin"},{id:"2",name:"Admin"},{disabled:!0,id:"3",name:"Guest"},{id:"4",name:"Maintainer"},{id:"5",name:"User"}];await new Promise(c=>setTimeout(c,1e3));const a=p.filter(c=>e.filters.OR.some(v=>v.key==="name"&&v.operator==="ct"?String(c.name).toLowerCase().includes(String(v.value).toLowerCase()):v.key==="id"&&v.operator==="in"?v.value.includes(c.id):!1));I.value=a,g.value=!1};return $(),(t,e)=>{const p=C("SshPre");return S(),E(w,{title:t.$t("form.label.select"),class:"demo"},{default:s(()=>[o("section",null,[o("h2",null,m(t.$t("form.label.basicInput")),1),e[22]||(e[22]=l()),o("div",O,[r(n(d),{modelValue:n(u).noLabelInput,"onUpdate:modelValue":e[0]||(e[0]=a=>n(u).noLabelInput=a),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","options","placeholder"]),e[21]||(e[21]=l()),r(p,{language:"html-vue"},{default:s(()=>e[20]||(e[20]=[l(`
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
        `)])),_:1})])]),e[83]||(e[83]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.labelInput")),1),e[25]||(e[25]=l()),o("div",h,[r(n(d),{modelValue:n(u).input,"onUpdate:modelValue":e[1]||(e[1]=a=>n(u).input=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),e[24]||(e[24]=l()),r(p,{language:"html-vue"},{default:s(()=>e[23]||(e[23]=[l(`
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
        `)])),_:1})])]),e[84]||(e[84]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.disabled")),1),e[28]||(e[28]=l()),o("div",K,[r(n(d),{modelValue:n(u).disabled,"onUpdate:modelValue":e[2]||(e[2]=a=>n(u).disabled=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country"),disabled:""},null,8,["modelValue","label","options","placeholder"]),e[27]||(e[27]=l()),r(p,{language:"html-vue"},{default:s(()=>e[26]||(e[26]=[l(`
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
        `)])),_:1})])]),e[85]||(e[85]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.disableSort")),1),e[31]||(e[31]=l()),o("div",W,[r(n(d),{modelValue:n(u).disabledSortInput,"onUpdate:modelValue":e[3]||(e[3]=a=>n(u).disabledSortInput=a),"has-sorted-options":!1,label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),e[30]||(e[30]=l()),r(p,{language:"html-vue"},{default:s(()=>e[29]||(e[29]=[l(`
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
        `)])),_:1})])]),e[86]||(e[86]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.disableSearch")),1),e[34]||(e[34]=l()),o("div",T,[r(n(d),{modelValue:n(u).disableSearchInput,"onUpdate:modelValue":e[4]||(e[4]=a=>n(u).disableSearchInput=a),options:f.value,placeholder:t.$t("form.placeholder.country"),"disable-search":""},null,8,["modelValue","options","placeholder"]),e[33]||(e[33]=l()),r(p,{language:"html-vue"},{default:s(()=>e[32]||(e[32]=[l(`
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
        `)])),_:1})])]),e[87]||(e[87]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.withLabelValueKeys")),1),e[37]||(e[37]=l()),o("div",z,[r(n(d),{modelValue:n(u).labelValueKeyInput,"onUpdate:modelValue":e[5]||(e[5]=a=>n(u).labelValueKeyInput=a),label:t.$t("form.label.country"),options:V.value,placeholder:t.$t("form.placeholder.country"),"label-key":"country","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),e[36]||(e[36]=l()),r(p,{language:"html-vue"},{default:s(()=>e[35]||(e[35]=[l(`
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
        `)])),_:1})])]),e[88]||(e[88]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.withI18n")),1),e[40]||(e[40]=l()),o("div",H,[r(n(d),{modelValue:n(u).i18nSelect,"onUpdate:modelValue":e[6]||(e[6]=a=>n(u).i18nSelect=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),e[39]||(e[39]=l()),r(p,{language:"html-vue"},{default:s(()=>e[38]||(e[38]=[l(`
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
        `)])),_:1})])]),e[89]||(e[89]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.serverSideSelect")),1),e[43]||(e[43]=l()),o("div",A,[r(n(d),{modelValue:n(u).roleSelect,"onUpdate:modelValue":e[7]||(e[7]=a=>n(u).roleSelect=a),"custom-search-helper-text":t.$t("form.label.customSearchHelper"),label:t.$t("form.label.role"),loading:g.value,"no-options-message":t.$t("form.label.noRoleOptions"),options:I.value,placeholder:t.$t("form.placeholder.role"),"enable-custom-search":"","label-key":"name","value-key":"id","onUpdate:searchInput":$},null,8,["modelValue","custom-search-helper-text","label","loading","no-options-message","options","placeholder"]),e[42]||(e[42]=l()),r(p,{language:"html-vue"},{default:s(()=>e[41]||(e[41]=[l(`
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
        `)])),_:1})])]),e[90]||(e[90]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.selectExtensive")),1),e[46]||(e[46]=l()),o("div",J,[r(n(d),{modelValue:n(u).selectExtensive,"onUpdate:modelValue":e[8]||(e[8]=a=>n(u).selectExtensive=a),label:t.$t("form.label.country"),options:n(F),placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),e[45]||(e[45]=l()),r(p,{language:"html-vue"},{default:s(()=>e[44]||(e[44]=[l(`
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
        `)])),_:1})])]),e[91]||(e[91]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.withGrouping")),1),e[49]||(e[49]=l()),o("div",j,[r(n(d),{modelValue:n(u).groupingSelect,"onUpdate:modelValue":e[9]||(e[9]=a=>n(u).groupingSelect=a),label:t.$t("form.label.country"),options:y.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),e[48]||(e[48]=l()),r(p,{language:"html-vue"},{default:s(()=>e[47]||(e[47]=[l(`
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
        `)])),_:1})])]),e[92]||(e[92]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.multiselect")),1),e[52]||(e[52]=l()),o("div",q,[r(n(d),{modelValue:n(u).multiselect,"onUpdate:modelValue":e[10]||(e[10]=a=>n(u).multiselect=a),label:t.$t("form.label.countries"),options:f.value,placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"]),e[51]||(e[51]=l()),r(p,{language:"html-vue"},{default:s(()=>e[50]||(e[50]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Countries"
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
        `)])),_:1})])]),e[93]||(e[93]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.disabledMultiselect")),1),e[55]||(e[55]=l()),o("div",Q,[r(n(d),{modelValue:n(u).disabledMultiselect,"onUpdate:modelValue":e[11]||(e[11]=a=>n(u).disabledMultiselect=a),label:t.$t("form.label.countries"),options:f.value,placeholder:t.$t("form.placeholder.countries"),disabled:"",multiple:""},null,8,["modelValue","label","options","placeholder"]),e[54]||(e[54]=l()),r(p,{language:"html-vue"},{default:s(()=>e[53]||(e[53]=[l(`
          <template>
            <SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Countries"
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
        `)])),_:1})])]),e[94]||(e[94]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.multiselectExtensive")),1),e[58]||(e[58]=l()),o("div",X,[r(n(d),{modelValue:n(u).multiselectExtensive,"onUpdate:modelValue":e[12]||(e[12]=a=>n(u).multiselectExtensive=a),label:t.$t("form.label.countries"),options:n(F),placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"]),e[57]||(e[57]=l()),r(p,{language:"html-vue"},{default:s(()=>e[56]||(e[56]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :options="countries"
              label="Countries"
              multiple
              placeholder="Select countries"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import { countries } from "../data";
          <\/script>
        `)])),_:1})])]),e[95]||(e[95]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.multiselectWithKeys")),1),e[61]||(e[61]=l()),o("div",Y,[r(n(d),{modelValue:n(u).multiselectKeysInput,"onUpdate:modelValue":e[13]||(e[13]=a=>n(u).multiselectKeysInput=a),label:t.$t("form.label.countries"),options:V.value,placeholder:t.$t("form.placeholder.country"),"label-key":"country",multiple:"","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),e[60]||(e[60]=l()),r(p,{language:"html-vue"},{default:s(()=>e[59]||(e[59]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Countries"
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
        `)])),_:1})])]),e[96]||(e[96]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.withTooltip")),1),e[64]||(e[64]=l()),o("div",Z,[r(n(d),{modelValue:n(u).tooltipMultiselect,"onUpdate:modelValue":e[14]||(e[14]=a=>n(u).tooltipMultiselect=a),label:t.$t("form.label.countries"),options:f.value,placeholder:t.$t("form.placeholder.countries"),"tooltip-options":{offset:16,position:"top"},class:"tooltip-multiselect","enable-tooltip":"",multiple:""},null,8,["modelValue","label","options","placeholder"]),e[63]||(e[63]=l()),r(p,{language:"html-vue"},{default:s(()=>e[62]||(e[62]=[l(`
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
        `)])),_:1})])]),e[97]||(e[97]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.multiselectGrouping")),1),e[67]||(e[67]=l()),o("div",x,[r(n(d),{modelValue:n(u).multiselectGrouping,"onUpdate:modelValue":e[15]||(e[15]=a=>n(u).multiselectGrouping=a),label:t.$t("form.label.countries"),options:y.value,placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"]),e[66]||(e[66]=l()),r(p,{language:"html-vue"},{default:s(()=>e[65]||(e[65]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Countries"
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
        `)])),_:1})])]),e[98]||(e[98]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.customOptionLabel")),1),e[73]||(e[73]=l()),o("div",_,[r(n(d),{modelValue:n(u).customLabelSelect,"onUpdate:modelValue":e[16]||(e[16]=a=>n(u).customLabelSelect=a),label:t.$t("form.label.countries"),options:y.value,placeholder:t.$t("form.placeholder.countries"),multiple:""},{group:s(({label:a})=>[o("span",null,[e[68]||(e[68]=o("i",{class:"pi pi-map"},null,-1)),l(" "+m(a),1)])]),option:s(({option:a})=>[o("span",null,[e[69]||(e[69]=o("i",{class:"pi pi-map-marker"},null,-1)),l(" "+m(a.label),1)])]),_:1},8,["modelValue","label","options","placeholder"]),e[72]||(e[72]=l()),r(p,{language:"html-vue"},{default:s(()=>e[71]||(e[71]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :label="t('form.label.countries')"
              :options="options"
              :placeholder="t('form.placeholder.countries')"
              multiple
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
        `)])),_:1})])]),e[99]||(e[99]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.customSelectedLabel")),1),e[76]||(e[76]=l()),o("div",ee,[r(n(d),{modelValue:n(u).customSelectedLabelSelect,"onUpdate:modelValue":e[17]||(e[17]=a=>n(u).customSelectedLabelSelect=a),label:t.$t("form.label.countries"),options:f.value,placeholder:t.$t("form.placeholder.countries"),multiple:""},{selection:s(({selectedLabels:a})=>[o("div",le,[(S(!0),G(L,null,D(a,(c,v)=>(S(),E(n(M),{key:`custom-selected-label-${v}`,label:c},null,8,["label"]))),128))])]),_:1},8,["modelValue","label","options","placeholder"]),e[75]||(e[75]=l()),r(p,{language:"html-vue"},{default:s(()=>e[74]||(e[74]=[l(`
          <template>
            <SelectInput 
              v-model="input"
              :label="t('form.label.countries')"
              :options="options"
              :placeholder="t('form.placeholder.countries')"
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
        `)])),_:1})])]),e[100]||(e[100]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.minMaxValidation")),1),e[79]||(e[79]=l()),o("div",te,[r(n(N),null,{default:s(()=>[r(n(d),{modelValue:n(u).inputWithMinMax,"onUpdate:modelValue":e[18]||(e[18]=a=>n(u).inputWithMinMax=a),label:t.$t("form.label.countries"),"max-selection":3,"min-selection":2,options:f.value,placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"])]),_:1}),e[78]||(e[78]=l()),r(p,{language:"html-vue"},{default:s(()=>e[77]||(e[77]=[l(`
          <Form>
            <SelectInput 
              v-model="input"
              :max-selection="3"
              :min-selection="2"
              :options="options"
              label="Countries"
              multiple
              placeholder="Select countries"
            />
          </Form>

          <script setup lang="ts">
          import { Form, SelectInput } from "@prefabs.tech/vue3-form";
          <\/script>
        `)])),_:1})])]),e[101]||(e[101]=l()),o("section",null,[o("h2",null,m(t.$t("form.label.customValidationInput")),1),e[82]||(e[82]=l()),o("div",ne,[r(n(N),null,{default:s(()=>[r(n(d),{modelValue:n(u).inputWithValidation,"onUpdate:modelValue":e[19]||(e[19]=a=>n(u).inputWithValidation=a),label:t.$t("form.label.countries"),options:f.value,placeholder:t.$t("form.placeholder.countries"),schema:n(B),multiple:""},null,8,["modelValue","label","options","placeholder","schema"])]),_:1}),e[81]||(e[81]=l()),r(p,{language:"html-vue"},{default:s(()=>e[80]||(e[80]=[l(`
          <Form>
            <SelectInput 
              v-model="input"
              :options="options"
              :schema="inputSchema"
              label="Countries"
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{pe as default};
