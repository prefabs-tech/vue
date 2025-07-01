import{D as d,a as y}from"./DzangolabVue3Form.es-CO5GChOq.js";import{d as I,J as c,L as S,M as V,r as s,I as $,e as N,o as F,i,E as e,f as o,t as p,g as u,u as n,p as E,A as B,x as P}from"./index-CcZ_F--3.js";import{a as z}from"./data-uYwV_J55.js";import{_ as D}from"./FormPage.vue_vue_type_style_index_0_lang-C7BOFJ-f.js";const C={class:"section-content"},R={class:"section-content"},U={class:"section-content"},k={class:"section-content"},M={class:"section-content"},G={class:"section-content"},L={class:"section-content"},K={class:"section-content"},W={class:"section-content"},w={class:"section-content"},O={class:"section-content"},A={class:"section-content"},J={class:"section-content"},T={name:"SelectInputField"},Y=I({...T,setup(Z){const{t:b}=c(),g=S.string({invalid_type_error:b("form.errors.multiselect.invalid")}).array().min(1,{message:b("form.errors.multiselect.invalid")});let r=V({customLabelSelect:s(),disabled:s("NP"),disabledMultiselect:s(["FR","NP"]),disabledSortInput:s(),i18nSelect:s(),input:s(),inputWithMinMax:s([]),inputWithValidation:s([]),labelValueKeyInput:s(),multiselect:s(),multiselectKeysInput:s([]),noLabelInput:s()});const f=s([{label:b("form.label.france"),value:"FR"},{label:b("form.label.germany"),value:"DE"},{disabled:!0,label:b("form.label.belgium"),value:"BE"},{label:b("form.label.nepal"),value:"NP"},{label:b("form.label.india"),value:"IN"}]),v=s([{code:"FR",country:b("form.label.france")},{code:"DE",country:b("form.label.germany")},{code:"BE",country:b("form.label.belgium"),disabled:!0},{code:"NP",country:b("form.label.nepal")},{code:"IN",country:b("form.label.india")}]);return(t,l)=>{const m=$("SshPre");return F(),N(D,{title:t.$t("form.label.select"),class:"demo"},{toolbar:i(()=>[u(n(P),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=a=>t.$router.push("/form"))},null,8,["label"])]),default:i(()=>[l[54]||(l[54]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.basicInput")),1),l[16]||(l[16]=e()),o("div",C,[u(n(d),{modelValue:n(r).noLabelInput,"onUpdate:modelValue":l[1]||(l[1]=a=>n(r).noLabelInput=a),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","options","placeholder"]),l[15]||(l[15]=e()),u(m,{language:"html-vue"},{default:i(()=>l[14]||(l[14]=[e(`
          <template>
            <SelectInput
              v-model="input"
              :options="options"
              placeholder="Select a country"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          <\/script>
        `)])),_:1})])]),l[55]||(l[55]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.labelInput")),1),l[19]||(l[19]=e()),o("div",R,[u(n(d),{modelValue:n(r).input,"onUpdate:modelValue":l[2]||(l[2]=a=>n(r).input=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),l[18]||(l[18]=e()),u(m,{language:"html-vue"},{default:i(()=>l[17]||(l[17]=[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Country"
              placeholder="Select a country"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          <\/script>
        `)])),_:1})])]),l[56]||(l[56]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.disabled")),1),l[22]||(l[22]=e()),o("div",U,[u(n(d),{modelValue:n(r).disabled,"onUpdate:modelValue":l[3]||(l[3]=a=>n(r).disabled=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country"),disabled:""},null,8,["modelValue","label","options","placeholder"]),l[21]||(l[21]=e()),u(m,{language:"html-vue"},{default:i(()=>l[20]||(l[20]=[e(`
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
          import { SelectInput } from "@dzangolab/vue3-form";
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
        `)])),_:1})])]),l[57]||(l[57]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.disableSort")),1),l[25]||(l[25]=e()),o("div",k,[u(n(d),{modelValue:n(r).disabledSortInput,"onUpdate:modelValue":l[4]||(l[4]=a=>n(r).disabledSortInput=a),"has-sorted-options":!1,label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),l[24]||(l[24]=e()),u(m,{language:"html-vue"},{default:i(()=>l[23]||(l[23]=[e(`
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
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          <\/script>
        `)])),_:1})])]),l[58]||(l[58]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.withLabelValueKeys")),1),l[28]||(l[28]=e()),o("div",M,[u(n(d),{modelValue:n(r).labelValueKeyInput,"onUpdate:modelValue":l[5]||(l[5]=a=>n(r).labelValueKeyInput=a),label:t.$t("form.label.country"),options:v.value,placeholder:t.$t("form.placeholder.country"),"label-key":"country","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),l[27]||(l[27]=e()),u(m,{language:"html-vue"},{default:i(()=>l[26]||(l[26]=[e(`
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
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { code: "FR", country: "France" },
            { code: "DE", country: "Germany" },
            { code: "BE", country: "Belgium", disabled: true },
            { code: "NP", country: "Nepal" },
            { code: "IN", country: "India" },
          ]);
          <\/script>
        `)])),_:1})])]),l[59]||(l[59]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.withI18n")),1),l[31]||(l[31]=e()),o("div",G,[u(n(d),{modelValue:n(r).i18nSelect,"onUpdate:modelValue":l[6]||(l[6]=a=>n(r).i18nSelect=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),l[30]||(l[30]=e()),u(m,{language:"html-vue"},{default:i(()=>l[29]||(l[29]=[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              :label="t('form.label.country')"
              :placeholder="t('form.placeholder.country')"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          <\/script>
        `)])),_:1})])]),l[60]||(l[60]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.selectExtensive")),1),l[34]||(l[34]=e()),o("div",L,[u(n(d),{modelValue:n(r).multiselect,"onUpdate:modelValue":l[7]||(l[7]=a=>n(r).multiselect=a),label:t.$t("form.label.country"),options:n(z),placeholder:t.$t("form.placeholder.countries")},null,8,["modelValue","label","options","placeholder"]),l[33]||(l[33]=e()),u(m,{language:"html-vue"},{default:i(()=>l[32]||(l[32]=[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="countries"
              label="Country"
              placeholder="Select countries"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          import { countries } from "../data";
          <\/script>
        `)])),_:1})])]),l[61]||(l[61]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.multiselect")),1),l[37]||(l[37]=e()),o("div",K,[u(n(d),{modelValue:n(r).multiselect,"onUpdate:modelValue":l[8]||(l[8]=a=>n(r).multiselect=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"]),l[36]||(l[36]=e()),u(m,{language:"html-vue"},{default:i(()=>l[35]||(l[35]=[e(`
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
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          <\/script>
        `)])),_:1})])]),l[62]||(l[62]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.disabledMultiselect")),1),l[40]||(l[40]=e()),o("div",W,[u(n(d),{modelValue:n(r).disabledMultiselect,"onUpdate:modelValue":l[9]||(l[9]=a=>n(r).disabledMultiselect=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.countries"),disabled:"",multiple:""},null,8,["modelValue","label","options","placeholder"]),l[39]||(l[39]=e()),u(m,{language:"html-vue"},{default:i(()=>l[38]||(l[38]=[e(`
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
          import { SelectInput } from "@dzangolab/vue3-form";
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
        `)])),_:1})])]),l[63]||(l[63]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.multiselectWithKeys")),1),l[43]||(l[43]=e()),o("div",w,[u(n(d),{modelValue:n(r).multiselectKeysInput,"onUpdate:modelValue":l[10]||(l[10]=a=>n(r).multiselectKeysInput=a),label:t.$t("form.label.country"),options:v.value,placeholder:t.$t("form.placeholder.country"),"label-key":"country",multiple:"","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),l[42]||(l[42]=e()),u(m,{language:"html-vue"},{default:i(()=>l[41]||(l[41]=[e(`
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
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { code: "FR", country: "France" },
            { code: "DE", country: "Germany" },
            { code: "BE", country: "Belgium", disabled: true },
            { code: "NP", country: "Nepal" },
            { code: "IN", country: "India" },
          ]);
          <\/script>
        `)])),_:1})])]),l[64]||(l[64]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.customLabel")),1),l[47]||(l[47]=e()),o("div",O,[u(n(d),{modelValue:n(r).customLabelSelect,"onUpdate:modelValue":l[11]||(l[11]=a=>n(r).customLabelSelect=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country"),multiple:""},E({_:2},[B(f.value,(a,j)=>({name:a.value,fn:i(()=>[o("span",null,[l[44]||(l[44]=o("i",{class:"pi pi-user"},null,-1)),e(" "+p(a.label),1)])])}))]),1032,["modelValue","label","options","placeholder"]),l[46]||(l[46]=e()),u(m,{language:"html-vue"},{default:i(()=>l[45]||(l[45]=[e(`
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
                #[option.value]
              >
                <span>
                  <i class="pi pi-user" />
                  {{ option.label }}
                </span>
              </template>
            </SelectInput>
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();

          const options = ref([
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" },
            { disabled: true, label: "Belgium", value: "BE" },
            { label: "Nepal", value: "NP" },
            { label: "India", value: "IN" },
          ]);
          <\/script>
        `)])),_:1})])]),l[65]||(l[65]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.minMaxValidation")),1),l[50]||(l[50]=e()),o("div",A,[u(n(y),null,{default:i(()=>[u(n(d),{modelValue:n(r).inputWithMinMax,"onUpdate:modelValue":l[12]||(l[12]=a=>n(r).inputWithMinMax=a),label:t.$t("form.label.country"),"max-selection":3,"min-selection":2,options:f.value,placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"])]),_:1}),l[49]||(l[49]=e()),u(m,{language:"html-vue"},{default:i(()=>l[48]||(l[48]=[e(`
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
          import { Form, SelectInput } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),l[66]||(l[66]=e()),o("section",null,[o("h2",null,p(t.$t("form.label.customValidationInput")),1),l[53]||(l[53]=e()),o("div",J,[u(n(y),null,{default:i(()=>[u(n(d),{modelValue:n(r).inputWithValidation,"onUpdate:modelValue":l[13]||(l[13]=a=>n(r).inputWithValidation=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.countries"),schema:n(g),multiple:""},null,8,["modelValue","label","options","placeholder","schema"])]),_:1}),l[52]||(l[52]=e()),u(m,{language:"html-vue"},{default:i(()=>l[51]||(l[51]=[e(`
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
          import { Form, SelectInput } from "@dzangolab/vue3-form";
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{Y as default};
