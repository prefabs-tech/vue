import{e as b,O as S}from"./PrefabsTechVue3Form.es-CJNYCL6x.js";import{d as N,H as E,J as F,L as B,r as i,I as P,e as R,o as C,j as s,C as e,f as o,t as d,h as u,u as n,l as U,z as D,v as G}from"./index-DZg_9J5y.js";import{a as V}from"./data-uYwV_J55.js";import{_ as k}from"./FormPage.vue_vue_type_style_index_0_lang-gwuEIxDv.js";const M={class:"section-content"},L={class:"section-content"},w={class:"section-content"},K={class:"section-content"},W={class:"section-content"},O={class:"section-content"},z={class:"section-content"},T={class:"section-content"},j={class:"section-content"},A={class:"section-content"},H={class:"section-content"},J={class:"section-content"},q={class:"section-content"},Q={class:"section-content"},X={class:"section-content"},Y={class:"section-content"},Z={class:"section-content"},h={class:"section-content"},x={name:"SelectInputField"},al=N({...x,setup(_){const{t:m}=E(),$=F.string({invalid_type_error:m("form.errors.multiselect.invalid")}).array().min(1,{message:m("form.errors.multiselect.invalid")});let r=B({customLabelSelect:i(),disabled:i("NP"),disabledMultiselect:i(["FR","NP"]),disabledSortInput:i(),groupingSelect:i(),i18nSelect:i(),input:i(),inputWithMinMax:i([]),inputWithValidation:i([]),labelValueKeyInput:i(),multiselect:i(),multiselectExtensive:i([]),multiselectGrouping:i([]),multiselectKeysInput:i([]),noLabelInput:i(),roleSelect:i(),selectExtensive:i(),tooltipMultiselect:i([])});const v=i(!1),y=i([]),f=i([{label:m("form.label.france"),value:"FR"},{label:m("form.label.germany"),value:"DE"},{disabled:!0,label:m("form.label.belgium"),value:"BE"},{label:m("form.label.nepal"),value:"NP"},{label:m("form.label.india"),value:"IN"}]),g=i([{code:"FR",country:m("form.label.france")},{code:"DE",country:m("form.label.germany")},{code:"BE",country:m("form.label.belgium"),disabled:!0},{code:"NP",country:m("form.label.nepal")},{code:"IN",country:m("form.label.india")}]),c=i([{label:m("form.label.europe"),options:[{label:m("form.label.germany"),value:"DE"},{label:m("form.label.france"),value:"FR"},{disabled:!0,label:m("form.label.belgium"),value:"BE"}]},{label:m("form.label.asia"),options:[{label:m("form.label.nepal"),value:"NP"},{label:m("form.label.india"),value:"IN"}]}]),I=async t=>{v.value=!0;const l=[{id:"1",name:"Superadmin"},{id:"2",name:"Admin"},{disabled:!0,id:"3",name:"Guest"},{id:"4",name:"Maintainer"},{id:"5",name:"User"}];await new Promise(p=>setTimeout(p,1e3)),t?y.value=l==null?void 0:l.filter(p=>String(p.name).toLowerCase().includes(String(t).toLowerCase())):y.value=l,v.value=!1};return I(),(t,l)=>{const p=P("SshPre");return C(),R(k,{title:t.$t("form.label.select"),class:"demo"},{toolbar:s(()=>[u(n(G),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=a=>t.$router.push("/form"))},null,8,["label"])]),default:s(()=>[l[74]||(l[74]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.basicInput")),1),l[21]||(l[21]=e()),o("div",M,[u(n(b),{modelValue:n(r).noLabelInput,"onUpdate:modelValue":l[1]||(l[1]=a=>n(r).noLabelInput=a),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","options","placeholder"]),l[20]||(l[20]=e()),u(p,{language:"html-vue"},{default:s(()=>l[19]||(l[19]=[e(`
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
        `)])),_:1})])]),l[75]||(l[75]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.labelInput")),1),l[24]||(l[24]=e()),o("div",L,[u(n(b),{modelValue:n(r).input,"onUpdate:modelValue":l[2]||(l[2]=a=>n(r).input=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),l[23]||(l[23]=e()),u(p,{language:"html-vue"},{default:s(()=>l[22]||(l[22]=[e(`
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
        `)])),_:1})])]),l[76]||(l[76]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.disabled")),1),l[27]||(l[27]=e()),o("div",w,[u(n(b),{modelValue:n(r).disabled,"onUpdate:modelValue":l[3]||(l[3]=a=>n(r).disabled=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country"),disabled:""},null,8,["modelValue","label","options","placeholder"]),l[26]||(l[26]=e()),u(p,{language:"html-vue"},{default:s(()=>l[25]||(l[25]=[e(`
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
        `)])),_:1})])]),l[77]||(l[77]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.disableSort")),1),l[30]||(l[30]=e()),o("div",K,[u(n(b),{modelValue:n(r).disabledSortInput,"onUpdate:modelValue":l[4]||(l[4]=a=>n(r).disabledSortInput=a),"has-sorted-options":!1,label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),l[29]||(l[29]=e()),u(p,{language:"html-vue"},{default:s(()=>l[28]||(l[28]=[e(`
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
        `)])),_:1})])]),l[78]||(l[78]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.withLabelValueKeys")),1),l[33]||(l[33]=e()),o("div",W,[u(n(b),{modelValue:n(r).labelValueKeyInput,"onUpdate:modelValue":l[5]||(l[5]=a=>n(r).labelValueKeyInput=a),label:t.$t("form.label.country"),options:g.value,placeholder:t.$t("form.placeholder.country"),"label-key":"country","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),l[32]||(l[32]=e()),u(p,{language:"html-vue"},{default:s(()=>l[31]||(l[31]=[e(`
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
        `)])),_:1})])]),l[79]||(l[79]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.withI18n")),1),l[36]||(l[36]=e()),o("div",O,[u(n(b),{modelValue:n(r).i18nSelect,"onUpdate:modelValue":l[6]||(l[6]=a=>n(r).i18nSelect=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),l[35]||(l[35]=e()),u(p,{language:"html-vue"},{default:s(()=>l[34]||(l[34]=[e(`
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
        `)])),_:1})])]),l[80]||(l[80]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.serverSideSelect")),1),l[39]||(l[39]=e()),o("div",z,[u(n(b),{modelValue:n(r).roleSelect,"onUpdate:modelValue":l[7]||(l[7]=a=>n(r).roleSelect=a),label:t.$t("form.label.role"),loading:v.value,options:y.value,placeholder:t.$t("form.placeholder.role"),"enable-custom-search":"","label-key":"name","value-key":"id","onUpdate:searchInput":I},null,8,["modelValue","label","loading","options","placeholder"]),l[38]||(l[38]=e()),u(p,{language:"html-vue"},{default:s(()=>l[37]||(l[37]=[e(`
          <template>
            <SelectInput 
              v-model="input"
              :loading="loading"
              :options="options"
              enable-custom-search
              label="Role"
              label-key="name"
              placeholder="Select a role"
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
        `)])),_:1})])]),l[81]||(l[81]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.selectExtensive")),1),l[42]||(l[42]=e()),o("div",T,[u(n(b),{modelValue:n(r).selectExtensive,"onUpdate:modelValue":l[8]||(l[8]=a=>n(r).selectExtensive=a),label:t.$t("form.label.country"),options:n(V),placeholder:t.$t("form.placeholder.countries")},null,8,["modelValue","label","options","placeholder"]),l[41]||(l[41]=e()),u(p,{language:"html-vue"},{default:s(()=>l[40]||(l[40]=[e(`
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
        `)])),_:1})])]),l[82]||(l[82]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.withGrouping")),1),l[45]||(l[45]=e()),o("div",j,[u(n(b),{modelValue:n(r).groupingSelect,"onUpdate:modelValue":l[9]||(l[9]=a=>n(r).groupingSelect=a),label:t.$t("form.label.country"),options:c.value,placeholder:t.$t("form.placeholder.countries")},null,8,["modelValue","label","options","placeholder"]),l[44]||(l[44]=e()),u(p,{language:"html-vue"},{default:s(()=>l[43]||(l[43]=[e(`
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
        `)])),_:1})])]),l[83]||(l[83]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.multiselect")),1),l[48]||(l[48]=e()),o("div",A,[u(n(b),{modelValue:n(r).multiselect,"onUpdate:modelValue":l[10]||(l[10]=a=>n(r).multiselect=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"]),l[47]||(l[47]=e()),u(p,{language:"html-vue"},{default:s(()=>l[46]||(l[46]=[e(`
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
        `)])),_:1})])]),l[84]||(l[84]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.disabledMultiselect")),1),l[51]||(l[51]=e()),o("div",H,[u(n(b),{modelValue:n(r).disabledMultiselect,"onUpdate:modelValue":l[11]||(l[11]=a=>n(r).disabledMultiselect=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.countries"),disabled:"",multiple:""},null,8,["modelValue","label","options","placeholder"]),l[50]||(l[50]=e()),u(p,{language:"html-vue"},{default:s(()=>l[49]||(l[49]=[e(`
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
        `)])),_:1})])]),l[85]||(l[85]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.multiselectExtensive")),1),l[54]||(l[54]=e()),o("div",J,[u(n(b),{modelValue:n(r).multiselectExtensive,"onUpdate:modelValue":l[12]||(l[12]=a=>n(r).multiselectExtensive=a),label:t.$t("form.label.country"),options:n(V),placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"]),l[53]||(l[53]=e()),u(p,{language:"html-vue"},{default:s(()=>l[52]||(l[52]=[e(`
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
        `)])),_:1})])]),l[86]||(l[86]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.multiselectWithKeys")),1),l[57]||(l[57]=e()),o("div",q,[u(n(b),{modelValue:n(r).multiselectKeysInput,"onUpdate:modelValue":l[13]||(l[13]=a=>n(r).multiselectKeysInput=a),label:t.$t("form.label.country"),options:g.value,placeholder:t.$t("form.placeholder.country"),"label-key":"country",multiple:"","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),l[56]||(l[56]=e()),u(p,{language:"html-vue"},{default:s(()=>l[55]||(l[55]=[e(`
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
        `)])),_:1})])]),l[87]||(l[87]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.withTooltip")),1),l[60]||(l[60]=e()),o("div",Q,[u(n(b),{modelValue:n(r).tooltipMultiselect,"onUpdate:modelValue":l[14]||(l[14]=a=>n(r).tooltipMultiselect=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.countries"),"tooltip-options":{offset:16,position:"top"},class:"tooltip-multiselect","enable-tooltip":"",multiple:""},null,8,["modelValue","label","options","placeholder"]),l[59]||(l[59]=e()),u(p,{language:"html-vue"},{default:s(()=>l[58]||(l[58]=[e(`
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
        `)])),_:1})])]),l[88]||(l[88]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.multiselectGrouping")),1),l[63]||(l[63]=e()),o("div",X,[u(n(b),{modelValue:n(r).multiselectGrouping,"onUpdate:modelValue":l[15]||(l[15]=a=>n(r).multiselectGrouping=a),label:t.$t("form.label.country"),options:c.value,placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"]),l[62]||(l[62]=e()),u(p,{language:"html-vue"},{default:s(()=>l[61]||(l[61]=[e(`
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
        `)])),_:1})])]),l[89]||(l[89]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.customLabel")),1),l[67]||(l[67]=e()),o("div",Y,[u(n(b),{modelValue:n(r).customLabelSelect,"onUpdate:modelValue":l[16]||(l[16]=a=>n(r).customLabelSelect=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country"),multiple:""},U({_:2},[D(f.value,(a,ll)=>({name:a.label,fn:s(()=>[o("span",null,[l[64]||(l[64]=o("i",{class:"pi pi-user"},null,-1)),e(" "+d(a.label),1)])])}))]),1032,["modelValue","label","options","placeholder"]),l[66]||(l[66]=e()),u(p,{language:"html-vue"},{default:s(()=>l[65]||(l[65]=[e(`
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
        `)])),_:1})])]),l[90]||(l[90]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.minMaxValidation")),1),l[70]||(l[70]=e()),o("div",Z,[u(n(S),null,{default:s(()=>[u(n(b),{modelValue:n(r).inputWithMinMax,"onUpdate:modelValue":l[17]||(l[17]=a=>n(r).inputWithMinMax=a),label:t.$t("form.label.country"),"max-selection":3,"min-selection":2,options:f.value,placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"])]),_:1}),l[69]||(l[69]=e()),u(p,{language:"html-vue"},{default:s(()=>l[68]||(l[68]=[e(`
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
        `)])),_:1})])]),l[91]||(l[91]=e()),o("section",null,[o("h2",null,d(t.$t("form.label.customValidationInput")),1),l[73]||(l[73]=e()),o("div",h,[u(n(S),null,{default:s(()=>[u(n(b),{modelValue:n(r).inputWithValidation,"onUpdate:modelValue":l[18]||(l[18]=a=>n(r).inputWithValidation=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.countries"),schema:n($),multiple:""},null,8,["modelValue","label","options","placeholder","schema"])]),_:1}),l[72]||(l[72]=e()),u(p,{language:"html-vue"},{default:s(()=>l[71]||(l[71]=[e(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{al as default};
