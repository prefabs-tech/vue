import{D as b,a as v}from"./DzangolabVue3Form.es-Otap2pXL.js";import{d as I,J as V,L as $,M as h,r,I as y,e as L,o as z,i as s,E as e,f as t,t as p,g as u,u as n,p as F,A as k,x as D}from"./index-D2OHXJ3Q.js";import{_ as M}from"./FormPage.vue_vue_type_style_index_0_lang-uSJYHKq_.js";const U={class:"section-content"},N={class:"section-content"},G={class:"section-content"},H={class:"section-content"},K={class:"section-content"},W={class:"section-content"},c={class:"section-content"},C={class:"section-content"},P={class:"section-content"},w={class:"section-content"},B={class:"section-content"},O={class:"section-content"},A={name:"SelectInputField"},q=I({...A,setup(E){const{t:d}=V(),S=$.string({invalid_type_error:d("form.errors.multiselect.invalid")}).array().min(1,{message:d("form.errors.multiselect.invalid")});let i=h({customLabelSelect:r(),disabled:r("de"),disabledMultiselect:r(["be","de"]),disabledSortInput:r(),i18nSelect:r(),input:r(),inputWithMinMax:r([]),inputWithValidation:r([]),labelValueKeyInput:r(),multiselect:r(),multiselectKeysInput:r([]),noLabelInput:r()});const g=r([{label:d("form.label.french"),value:"fr"},{label:d("form.label.german"),value:"de"},{disabled:!0,label:d("form.label.dutch"),value:"be"},{label:d("form.label.nepali"),value:"np"},{label:d("form.label.hindi"),value:"hi"}]),f=r([{code:"fr",language:d("form.label.french")},{code:"de",language:d("form.label.german")},{code:"be",disabled:!0,language:d("form.label.dutch")},{code:"np",language:d("form.label.nepali")},{code:"hi",language:d("form.label.hindi")}]);return(a,l)=>{const m=y("SshPre");return z(),L(M,{title:a.$t("form.label.select"),class:"demo"},{toolbar:s(()=>[u(n(D),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=o=>a.$router.push("/form"))},null,8,["label"])]),default:s(()=>[l[50]||(l[50]=e()),t("section",null,[t("h2",null,p(a.$t("form.label.basicInput")),1),l[15]||(l[15]=e()),t("div",U,[u(n(b),{modelValue:n(i).noLabelInput,"onUpdate:modelValue":l[1]||(l[1]=o=>n(i).noLabelInput=o),options:g.value,placeholder:a.$t("form.placeholder.language")},null,8,["modelValue","options","placeholder"]),l[14]||(l[14]=e()),u(m,{language:"html-vue"},{default:s(()=>l[13]||(l[13]=[e(`
          <template>
            <SelectInput
              v-model="input"
              :options="options"
              placeholder="Select a language"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          <\/script>
        `)])),_:1})])]),l[51]||(l[51]=e()),t("section",null,[t("h2",null,p(a.$t("form.label.labelInput")),1),l[18]||(l[18]=e()),t("div",N,[u(n(b),{modelValue:n(i).input,"onUpdate:modelValue":l[2]||(l[2]=o=>n(i).input=o),label:a.$t("form.label.language"),options:g.value,placeholder:a.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),l[17]||(l[17]=e()),u(m,{language:"html-vue"},{default:s(()=>l[16]||(l[16]=[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Language"
              placeholder="Select a language"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          <\/script>
        `)])),_:1})])]),l[52]||(l[52]=e()),t("section",null,[t("h2",null,p(a.$t("form.label.disabled")),1),l[21]||(l[21]=e()),t("div",G,[u(n(b),{modelValue:n(i).disabled,"onUpdate:modelValue":l[3]||(l[3]=o=>n(i).disabled=o),label:a.$t("form.label.language"),options:g.value,disabled:""},null,8,["modelValue","label","options"]),l[20]||(l[20]=e()),u(m,{language:"html-vue"},{default:s(()=>l[19]||(l[19]=[e(`
          <template>
            <SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Language"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";
  
          const disabled = ref("de");

          const options = ref([
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          <\/script>
        `)])),_:1})])]),l[53]||(l[53]=e()),t("section",null,[t("h2",null,p(a.$t("form.label.disableSort")),1),l[24]||(l[24]=e()),t("div",H,[u(n(b),{modelValue:n(i).disabledSortInput,"onUpdate:modelValue":l[4]||(l[4]=o=>n(i).disabledSortInput=o),"has-sorted-options":!1,label:a.$t("form.label.language"),options:g.value,placeholder:a.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),l[23]||(l[23]=e()),u(m,{language:"html-vue"},{default:s(()=>l[22]||(l[22]=[e(`
          <template>
            <SelectInput 
              v-model="input"
              :has-sorted-options="false"
              :options="options"
              label="Language"
              placeholder="Select a language"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          <\/script>
        `)])),_:1})])]),l[54]||(l[54]=e()),t("section",null,[t("h2",null,p(a.$t("form.label.withLabelValueKeys")),1),l[27]||(l[27]=e()),t("div",K,[u(n(b),{modelValue:n(i).labelValueKeyInput,"onUpdate:modelValue":l[5]||(l[5]=o=>n(i).labelValueKeyInput=o),label:a.$t("form.label.language"),options:f.value,placeholder:a.$t("form.placeholder.language"),"label-key":"language","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),l[26]||(l[26]=e()),u(m,{language:"html-vue"},{default:s(()=>l[25]||(l[25]=[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Language"
              label-key="language"
              placeholder="Select a language"
              value-key="code"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { code: "fr", language: t("form.label.french") },
            { code: "de", language: t("form.label.german") },
            { code: "be", disabled: true, language: t("form.label.dutch") },
            { code: "np", language: t("form.label.nepali") },
            { code: "hi", language: t("form.label.hindi") },
          ]);
          <\/script>
        `)])),_:1})])]),l[55]||(l[55]=e()),t("section",null,[t("h2",null,p(a.$t("form.label.withI18n")),1),l[30]||(l[30]=e()),t("div",W,[u(n(b),{modelValue:n(i).i18nSelect,"onUpdate:modelValue":l[6]||(l[6]=o=>n(i).i18nSelect=o),label:a.$t("form.label.language"),options:g.value,placeholder:a.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),l[29]||(l[29]=e()),u(m,{language:"html-vue"},{default:s(()=>l[28]||(l[28]=[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              :label="t('form.label.language')"
              :placeholder="t('form.placeholder.language')"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";
          import { useI18n } from "@dzangolab/vue3-i18n";

          const { t } = useI18n();

          const options = ref([
            { label: t("form.label.french"), value: "fr"},
            { label: t("form.label.german"), value: "de"},
            { disabled: true, label: t("form.label.dutch"), value: "be", },
            { label: t("form.label.nepali"), value: "np",  },
            { label: t("form.label.hindi"), value: "hi" },
          ]);
          <\/script>
        `)])),_:1})])]),l[56]||(l[56]=e()),t("section",null,[t("h2",null,p(a.$t("form.label.multiselect")),1),l[33]||(l[33]=e()),t("div",c,[u(n(b),{modelValue:n(i).multiselect,"onUpdate:modelValue":l[7]||(l[7]=o=>n(i).multiselect=o),label:a.$t("form.label.language"),options:g.value,placeholder:a.$t("form.placeholder.languages"),multiple:""},null,8,["modelValue","label","options","placeholder"]),l[32]||(l[32]=e()),u(m,{language:"html-vue"},{default:s(()=>l[31]||(l[31]=[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Language"
              multiple
              placeholder="Select languages"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          <\/script>
        `)])),_:1})])]),l[57]||(l[57]=e()),t("section",null,[t("h2",null,p(a.$t("form.label.disabledMultiselect")),1),l[36]||(l[36]=e()),t("div",C,[u(n(b),{modelValue:n(i).disabledMultiselect,"onUpdate:modelValue":l[8]||(l[8]=o=>n(i).disabledMultiselect=o),label:a.$t("form.label.language"),options:g.value,disabled:"",multiple:""},null,8,["modelValue","label","options"]),l[35]||(l[35]=e()),u(m,{language:"html-vue"},{default:s(()=>l[34]||(l[34]=[e(`
          <template>
            <SelectInput 
              v-model="disabled"
              :options="options"
              disabled
              label="Language"
              multiple
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const disabled = ref(["be", "de"]);

          const options = ref([
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          <\/script>
        `)])),_:1})])]),l[58]||(l[58]=e()),t("section",null,[t("h2",null,p(a.$t("form.label.multiselectWithKeys")),1),l[39]||(l[39]=e()),t("div",P,[u(n(b),{modelValue:n(i).multiselectKeysInput,"onUpdate:modelValue":l[9]||(l[9]=o=>n(i).multiselectKeysInput=o),label:a.$t("form.label.language"),options:f.value,placeholder:a.$t("form.placeholder.language"),"label-key":"language",multiple:"","value-key":"code"},null,8,["modelValue","label","options","placeholder"]),l[38]||(l[38]=e()),u(m,{language:"html-vue"},{default:s(()=>l[37]||(l[37]=[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              label="Language"
              label-key="language"
              placeholder="Select a language"
              multiple
              value-key="code"
            />
          </template>

          <script setup lang="ts">
          import { SelectInput } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          const options = ref([
            { code: "fr", language: t("form.label.french") },
            { code: "de", language: t("form.label.german") },
            { code: "be", disabled: true, language: t("form.label.dutch") },
            { code: "np", language: t("form.label.nepali") },
            { code: "hi", language: t("form.label.hindi") },
          ]);
          <\/script>
        `)])),_:1})])]),l[59]||(l[59]=e()),t("section",null,[t("h2",null,p(a.$t("form.label.customLabel")),1),l[43]||(l[43]=e()),t("div",w,[u(n(b),{modelValue:n(i).customLabelSelect,"onUpdate:modelValue":l[10]||(l[10]=o=>n(i).customLabelSelect=o),label:a.$t("form.label.language"),options:g.value,placeholder:a.$t("form.placeholder.language"),multiple:""},F({_:2},[k(g.value,(o,J)=>({name:o.value,fn:s(()=>[t("span",null,[l[40]||(l[40]=t("i",{class:"pi pi-user"},null,-1)),e(" "+p(o.label),1)])])}))]),1032,["modelValue","label","options","placeholder"]),l[42]||(l[42]=e()),u(m,{language:"html-vue"},{default:s(()=>l[41]||(l[41]=[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              :label="t('form.label.language')"
              :placeholder="t('form.placeholder.language')"
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
            { label: "French", value: "fr"},
            { label: "German", value: "de"},
            { disabled: true, label: "Dutch", value: "be", },
            { label: "Nepali", value: "np",  },
            { label: "Hindi", value: "hi" },
          ]);
          <\/script>
        `)])),_:1})])]),l[60]||(l[60]=e()),t("section",null,[t("h2",null,p(a.$t("form.label.minMaxValidation")),1),l[46]||(l[46]=e()),t("div",B,[u(n(v),null,{default:s(()=>[u(n(b),{modelValue:n(i).inputWithMinMax,"onUpdate:modelValue":l[11]||(l[11]=o=>n(i).inputWithMinMax=o),label:a.$t("form.label.language"),"max-selection":3,"min-selection":2,options:g.value,placeholder:a.$t("form.placeholder.languages"),multiple:""},null,8,["modelValue","label","options","placeholder"])]),_:1}),l[45]||(l[45]=e()),u(m,{language:"html-vue"},{default:s(()=>l[44]||(l[44]=[e(`
          <Form>
            <SelectInput 
              v-model="input"
              :max-selection="3"
              :min-selection="2"
              :options="options"
              label="Language"
              multiple
              placeholder="Select languages"
            />
          </Form>

          <script setup lang="ts">
          import { Form, SelectInput } from "@dzangolab/vue3-form";
          <\/script>
        `)])),_:1})])]),l[61]||(l[61]=e()),t("section",null,[t("h2",null,p(a.$t("form.label.customValidationInput")),1),l[49]||(l[49]=e()),t("div",O,[u(n(v),null,{default:s(()=>[u(n(b),{modelValue:n(i).inputWithValidation,"onUpdate:modelValue":l[12]||(l[12]=o=>n(i).inputWithValidation=o),label:a.$t("form.label.language"),options:g.value,placeholder:a.$t("form.placeholder.languages"),schema:n(S),multiple:""},null,8,["modelValue","label","options","placeholder","schema"])]),_:1}),l[48]||(l[48]=e()),u(m,{language:"html-vue"},{default:s(()=>l[47]||(l[47]=[e(`
          <Form>
            <SelectInput 
              v-model="input"
              :options="options"
              :schema="inputSchema"
              label="Language"
              multiple
              placeholder="Select languages"
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
              { label: "French", value: "fr"},
              { label: "German", value: "de"},
              { disabled: true, label: "Dutch", value: "be", },
              { label: "Nepali", value: "np",  },
              { label: "Hindi", value: "hi" },
            ]);
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{q as default};
