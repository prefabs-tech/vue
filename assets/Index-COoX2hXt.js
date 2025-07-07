import{J as b,$ as y}from"./DzangolabVue3Form.es-CJNK3UEj.js";import{d as V,J as c,L as $,M as N,r as s,I as E,e as F,o as B,i,E as e,f as o,t as m,g as u,u as n,p as P,A as z,x as D}from"./index-CcYpCnKU.js";import{a as I}from"./data-uYwV_J55.js";import{_ as C}from"./FormPage.vue_vue_type_style_index_0_lang-CBnKOpYJ.js";const R={class:"section-content"},G={class:"section-content"},U={class:"section-content"},M={class:"section-content"},k={class:"section-content"},L={class:"section-content"},K={class:"section-content"},W={class:"section-content"},w={class:"section-content"},J={class:"section-content"},O={class:"section-content"},T={class:"section-content"},A={class:"section-content"},j={class:"section-content"},q={class:"section-content"},H={class:"section-content"},Q={class:"section-content"},X={name:"SelectInputField"},el=V({...X,setup(Y){const{t:p}=c(),S=$.string({invalid_type_error:p("form.errors.multiselect.invalid")}).array().min(1,{message:p("form.errors.multiselect.invalid")});let r=N({customLabelSelect:s(),disabled:s("NP"),disabledMultiselect:s(["FR","NP"]),disabledSortInput:s(),groupingSelect:s(),i18nSelect:s(),input:s(),inputWithMinMax:s([]),inputWithValidation:s([]),labelValueKeyInput:s(),multiselect:s(),multiselectExtensive:s([]),multiselectGrouping:s([]),multiselectKeysInput:s([]),noLabelInput:s(),selectExtensive:s(),tooltipMultiselect:s([])});const f=s([{label:p("form.label.france"),value:"FR"},{label:p("form.label.germany"),value:"DE"},{disabled:!0,label:p("form.label.belgium"),value:"BE"},{label:p("form.label.nepal"),value:"NP"},{label:p("form.label.india"),value:"IN"}]),v=s([{code:"FR",country:p("form.label.france")},{code:"DE",country:p("form.label.germany")},{code:"BE",country:p("form.label.belgium"),disabled:!0},{code:"NP",country:p("form.label.nepal")},{code:"IN",country:p("form.label.india")}]),g=s([{label:p("form.label.europe"),options:[{label:p("form.label.germany"),value:"DE"},{label:p("form.label.france"),value:"FR"},{disabled:!0,label:p("form.label.belgium"),value:"BE"}]},{label:p("form.label.asia"),options:[{label:p("form.label.nepal"),value:"NP"},{label:p("form.label.india"),value:"IN"}]}]);return(t,l)=>{const d=E("SshPre");return B(),F(C,{title:t.$t("form.label.select"),class:"demo"},{toolbar:i(()=>[u(n(D),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=a=>t.$router.push("/form"))},null,8,["label"])]),default:i(()=>[l[70]||(l[70]=e()),o("section",null,[o("h2",null,m(t.$t("form.label.basicInput")),1),l[20]||(l[20]=e()),o("div",R,[u(n(b),{modelValue:n(r).noLabelInput,"onUpdate:modelValue":l[1]||(l[1]=a=>n(r).noLabelInput=a),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","options","placeholder"]),l[19]||(l[19]=e()),u(d,{language:"html-vue"},{default:i(()=>l[18]||(l[18]=[e(`
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
        `)])),_:1})])]),l[71]||(l[71]=e()),o("section",null,[o("h2",null,m(t.$t("form.label.labelInput")),1),l[23]||(l[23]=e()),o("div",G,[u(n(b),{modelValue:n(r).input,"onUpdate:modelValue":l[2]||(l[2]=a=>n(r).input=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),l[22]||(l[22]=e()),u(d,{language:"html-vue"},{default:i(()=>l[21]||(l[21]=[e(`
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
        `)])),_:1})])]),l[72]||(l[72]=e()),o("section",null,[o("h2",null,m(t.$t("form.label.disabled")),1),l[26]||(l[26]=e()),o("div",U,[u(n(b),{modelValue:n(r).disabled,"onUpdate:modelValue":l[3]||(l[3]=a=>n(r).disabled=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country"),disabled:""},null,8,["modelValue","label","options","placeholder"]),l[25]||(l[25]=e()),u(d,{language:"html-vue"},{default:i(()=>l[24]||(l[24]=[e(`
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
        `)])),_:1})])]),l[73]||(l[73]=e()),o("section",null,[o("h2",null,m(t.$t("form.label.disableSort")),1),l[29]||(l[29]=e()),o("div",M,[u(n(b),{modelValue:n(r).disabledSortInput,"onUpdate:modelValue":l[4]||(l[4]=a=>n(r).disabledSortInput=a),"has-sorted-options":!1,label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),l[28]||(l[28]=e()),u(d,{language:"html-vue"},{default:i(()=>l[27]||(l[27]=[e(`
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
        `)])),_:1})])]),l[74]||(l[74]=e()),o("section",null,[o("h2",null,m(t.$t("form.label.withLabelValueKeys")),1),l[32]||(l[32]=e()),o("div",k,[u(n(b),{modelValue:n(r).labelValueKeyInput,"onUpdate:modelValue":l[5]||(l[5]=a=>n(r).labelValueKeyInput=a),label:t.$t("form.label.country"),options:v.value,placeholder:t.$t("form.placeholder.country"),"label-key":"country","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),l[31]||(l[31]=e()),u(d,{language:"html-vue"},{default:i(()=>l[30]||(l[30]=[e(`
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
        `)])),_:1})])]),l[75]||(l[75]=e()),o("section",null,[o("h2",null,m(t.$t("form.label.withI18n")),1),l[35]||(l[35]=e()),o("div",L,[u(n(b),{modelValue:n(r).i18nSelect,"onUpdate:modelValue":l[6]||(l[6]=a=>n(r).i18nSelect=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country")},null,8,["modelValue","label","options","placeholder"]),l[34]||(l[34]=e()),u(d,{language:"html-vue"},{default:i(()=>l[33]||(l[33]=[e(`
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
        `)])),_:1})])]),l[76]||(l[76]=e()),o("section",null,[o("h2",null,m(t.$t("form.label.selectExtensive")),1),l[38]||(l[38]=e()),o("div",K,[u(n(b),{modelValue:n(r).selectExtensive,"onUpdate:modelValue":l[7]||(l[7]=a=>n(r).selectExtensive=a),label:t.$t("form.label.country"),options:n(I),placeholder:t.$t("form.placeholder.countries")},null,8,["modelValue","label","options","placeholder"]),l[37]||(l[37]=e()),u(d,{language:"html-vue"},{default:i(()=>l[36]||(l[36]=[e(`
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
        `)])),_:1})])]),l[77]||(l[77]=e()),o("section",null,[o("h2",null,m(t.$t("form.label.withGrouping")),1),l[41]||(l[41]=e()),o("div",W,[u(n(b),{modelValue:n(r).groupingSelect,"onUpdate:modelValue":l[8]||(l[8]=a=>n(r).groupingSelect=a),label:t.$t("form.label.country"),options:g.value,placeholder:t.$t("form.placeholder.countries")},null,8,["modelValue","label","options","placeholder"]),l[40]||(l[40]=e()),u(d,{language:"html-vue"},{default:i(()=>l[39]||(l[39]=[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Country"
              placeholder="Select countries"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
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
        `)])),_:1})])]),l[78]||(l[78]=e()),o("section",null,[o("h2",null,m(t.$t("form.label.multiselect")),1),l[44]||(l[44]=e()),o("div",w,[u(n(b),{modelValue:n(r).multiselect,"onUpdate:modelValue":l[9]||(l[9]=a=>n(r).multiselect=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"]),l[43]||(l[43]=e()),u(d,{language:"html-vue"},{default:i(()=>l[42]||(l[42]=[e(`
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
        `)])),_:1})])]),l[79]||(l[79]=e()),o("section",null,[o("h2",null,m(t.$t("form.label.disabledMultiselect")),1),l[47]||(l[47]=e()),o("div",J,[u(n(b),{modelValue:n(r).disabledMultiselect,"onUpdate:modelValue":l[10]||(l[10]=a=>n(r).disabledMultiselect=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.countries"),disabled:"",multiple:""},null,8,["modelValue","label","options","placeholder"]),l[46]||(l[46]=e()),u(d,{language:"html-vue"},{default:i(()=>l[45]||(l[45]=[e(`
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
        `)])),_:1})])]),l[80]||(l[80]=e()),o("section",null,[o("h2",null,m(t.$t("form.label.multiselectExtensive")),1),l[50]||(l[50]=e()),o("div",O,[u(n(b),{modelValue:n(r).multiselectExtensive,"onUpdate:modelValue":l[11]||(l[11]=a=>n(r).multiselectExtensive=a),label:t.$t("form.label.country"),options:n(I),placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"]),l[49]||(l[49]=e()),u(d,{language:"html-vue"},{default:i(()=>l[48]||(l[48]=[e(`
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
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          import { countries } from "../data";
          <\/script>
        `)])),_:1})])]),l[81]||(l[81]=e()),o("section",null,[o("h2",null,m(t.$t("form.label.multiselectWithKeys")),1),l[53]||(l[53]=e()),o("div",T,[u(n(b),{modelValue:n(r).multiselectKeysInput,"onUpdate:modelValue":l[12]||(l[12]=a=>n(r).multiselectKeysInput=a),label:t.$t("form.label.country"),options:v.value,placeholder:t.$t("form.placeholder.country"),"label-key":"country",multiple:"","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),l[52]||(l[52]=e()),u(d,{language:"html-vue"},{default:i(()=>l[51]||(l[51]=[e(`
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
        `)])),_:1})])]),l[82]||(l[82]=e()),o("section",null,[o("h2",null,m(t.$t("form.label.withTooltip")),1),l[56]||(l[56]=e()),o("div",A,[u(n(b),{modelValue:n(r).tooltipMultiselect,"onUpdate:modelValue":l[13]||(l[13]=a=>n(r).tooltipMultiselect=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.countries"),"tooltip-options":{offset:16,position:"top"},class:"tooltip-multiselect","enable-tooltip":"",multiple:""},null,8,["modelValue","label","options","placeholder"]),l[55]||(l[55]=e()),u(d,{language:"html-vue"},{default:i(()=>l[54]||(l[54]=[e(`
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
        `)])),_:1})])]),l[83]||(l[83]=e()),o("section",null,[o("h2",null,m(t.$t("form.label.multiselectGrouping")),1),l[59]||(l[59]=e()),o("div",j,[u(n(b),{modelValue:n(r).multiselectGrouping,"onUpdate:modelValue":l[14]||(l[14]=a=>n(r).multiselectGrouping=a),label:t.$t("form.label.country"),options:g.value,placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"]),l[58]||(l[58]=e()),u(d,{language:"html-vue"},{default:i(()=>l[57]||(l[57]=[e(`
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
        `)])),_:1})])]),l[84]||(l[84]=e()),o("section",null,[o("h2",null,m(t.$t("form.label.customLabel")),1),l[63]||(l[63]=e()),o("div",q,[u(n(b),{modelValue:n(r).customLabelSelect,"onUpdate:modelValue":l[15]||(l[15]=a=>n(r).customLabelSelect=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.country"),multiple:""},P({_:2},[z(f.value,(a,Z)=>({name:a.value,fn:i(()=>[o("span",null,[l[60]||(l[60]=o("i",{class:"pi pi-user"},null,-1)),e(" "+m(a.label),1)])])}))]),1032,["modelValue","label","options","placeholder"]),l[62]||(l[62]=e()),u(d,{language:"html-vue"},{default:i(()=>l[61]||(l[61]=[e(`
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
        `)])),_:1})])]),l[85]||(l[85]=e()),o("section",null,[o("h2",null,m(t.$t("form.label.minMaxValidation")),1),l[66]||(l[66]=e()),o("div",H,[u(n(y),null,{default:i(()=>[u(n(b),{modelValue:n(r).inputWithMinMax,"onUpdate:modelValue":l[16]||(l[16]=a=>n(r).inputWithMinMax=a),label:t.$t("form.label.country"),"max-selection":3,"min-selection":2,options:f.value,placeholder:t.$t("form.placeholder.countries"),multiple:""},null,8,["modelValue","label","options","placeholder"])]),_:1}),l[65]||(l[65]=e()),u(d,{language:"html-vue"},{default:i(()=>l[64]||(l[64]=[e(`
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
        `)])),_:1})])]),l[86]||(l[86]=e()),o("section",null,[o("h2",null,m(t.$t("form.label.customValidationInput")),1),l[69]||(l[69]=e()),o("div",Q,[u(n(y),null,{default:i(()=>[u(n(b),{modelValue:n(r).inputWithValidation,"onUpdate:modelValue":l[17]||(l[17]=a=>n(r).inputWithValidation=a),label:t.$t("form.label.country"),options:f.value,placeholder:t.$t("form.placeholder.countries"),schema:n(S),multiple:""},null,8,["modelValue","label","options","placeholder","schema"])]),_:1}),l[68]||(l[68]=e()),u(d,{language:"html-vue"},{default:i(()=>l[67]||(l[67]=[e(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{el as default};
