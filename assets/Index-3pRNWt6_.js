import{W as b,q as v}from"./DzangolabVue3Form.es-CGwoylC4.js";import{d as S,L as h,M as V,N as I,r as p,K as $,f as L,o as z,i as s,E as e,g as a,t as d,h as u,u as n,l as F,A as c,x as N}from"./index-DJ2A_cv8.js";import{_ as D}from"./FormPage.vue_vue_type_style_index_0_lang-D1CXrsJh.js";const M={class:"section-content"},U={class:"section-content"},W={class:"section-content"},G={class:"section-content"},H={class:"section-content"},y={class:"section-content"},k={class:"section-content"},C={class:"section-content"},P={class:"section-content"},w={class:"section-content"},B={class:"section-content"},q={class:"section-content"},A={name:"SelectInputField"},J=S({...A,setup(E){const{t:f}=h(),g=V.string({invalid_type_error:f("form.errors.multiselect.invalid")}).array().min(1,{message:f("form.errors.multiselect.invalid")});let i=I({customLabelSelect:p(),disabled:p("de"),disabledMultiselect:p(["be","de"]),disabledSortInput:p(),i18nSelect:p(),input:p(),inputWithMinMax:p([]),inputWithValidation:p([]),multiselect:p(),multiselectSearch:p(),noLabelInput:p(),selectWithSearch:p()});const r=p([{label:f("form.label.french"),value:"fr"},{label:f("form.label.german"),value:"de"},{disabled:!0,label:f("form.label.dutch"),value:"be"},{label:f("form.label.nepali"),value:"np"},{label:f("form.label.hindi"),value:"hi"}]);return(t,l)=>{const m=$("SshPre");return z(),L(D,{title:t.$t("form.label.select"),class:"demo"},{toolbar:s(()=>[u(n(N),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=o=>t.$router.push("/form"))},null,8,["label"])]),default:s(()=>[l[50]||(l[50]=e()),a("section",null,[a("h2",null,d(t.$t("form.label.basicInput")),1),l[15]||(l[15]=e()),a("div",M,[u(n(b),{modelValue:n(i).noLabelInput,"onUpdate:modelValue":l[1]||(l[1]=o=>n(i).noLabelInput=o),options:r.value,placeholder:t.$t("form.placeholder.language")},null,8,["modelValue","options","placeholder"]),l[14]||(l[14]=e()),u(m,{language:"html-vue"},{default:s(()=>l[13]||(l[13]=[e(`
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
        `)])),_:1})])]),l[51]||(l[51]=e()),a("section",null,[a("h2",null,d(t.$t("form.label.labelInput")),1),l[18]||(l[18]=e()),a("div",U,[u(n(b),{modelValue:n(i).input,"onUpdate:modelValue":l[2]||(l[2]=o=>n(i).input=o),label:t.$t("form.label.language"),options:r.value,placeholder:t.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),l[17]||(l[17]=e()),u(m,{language:"html-vue"},{default:s(()=>l[16]||(l[16]=[e(`
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
        `)])),_:1})])]),l[52]||(l[52]=e()),a("section",null,[a("h2",null,d(t.$t("form.label.disabled")),1),l[21]||(l[21]=e()),a("div",W,[u(n(b),{modelValue:n(i).disabled,"onUpdate:modelValue":l[3]||(l[3]=o=>n(i).disabled=o),label:t.$t("form.label.language"),options:r.value,disabled:""},null,8,["modelValue","label","options"]),l[20]||(l[20]=e()),u(m,{language:"html-vue"},{default:s(()=>l[19]||(l[19]=[e(`
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
        `)])),_:1})])]),l[53]||(l[53]=e()),a("section",null,[a("h2",null,d(t.$t("form.label.withSearch")),1),l[24]||(l[24]=e()),a("div",G,[u(n(b),{modelValue:n(i).selectWithSearch,"onUpdate:modelValue":l[4]||(l[4]=o=>n(i).selectWithSearch=o),label:t.$t("form.label.language"),options:r.value,placeholder:t.$t("form.placeholder.language"),"search-placeholder":t.$t("form.placeholder.search"),"enable-search":""},null,8,["modelValue","label","options","placeholder","search-placeholder"]),l[23]||(l[23]=e()),u(m,{language:"html-vue"},{default:s(()=>l[22]||(l[22]=[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              enable-search
              label="Language"
              placeholder="Select a language"
              search-placeholder="Search..."
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
        `)])),_:1})])]),l[54]||(l[54]=e()),a("section",null,[a("h2",null,d(t.$t("form.label.disableSort")),1),l[27]||(l[27]=e()),a("div",H,[u(n(b),{modelValue:n(i).disabledSortInput,"onUpdate:modelValue":l[5]||(l[5]=o=>n(i).disabledSortInput=o),"has-sorted-options":!1,label:t.$t("form.label.language"),options:r.value,placeholder:t.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),l[26]||(l[26]=e()),u(m,{language:"html-vue"},{default:s(()=>l[25]||(l[25]=[e(`
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
        `)])),_:1})])]),l[55]||(l[55]=e()),a("section",null,[a("h2",null,d(t.$t("form.label.withI18n")),1),l[30]||(l[30]=e()),a("div",y,[u(n(b),{modelValue:n(i).i18nSelect,"onUpdate:modelValue":l[6]||(l[6]=o=>n(i).i18nSelect=o),label:t.$t("form.label.language"),options:r.value,placeholder:t.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),l[29]||(l[29]=e()),u(m,{language:"html-vue"},{default:s(()=>l[28]||(l[28]=[e(`
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
        `)])),_:1})])]),l[56]||(l[56]=e()),a("section",null,[a("h2",null,d(t.$t("form.label.multiselect")),1),l[33]||(l[33]=e()),a("div",k,[u(n(b),{modelValue:n(i).multiselect,"onUpdate:modelValue":l[7]||(l[7]=o=>n(i).multiselect=o),label:t.$t("form.label.language"),options:r.value,placeholder:t.$t("form.placeholder.languages"),multiple:""},null,8,["modelValue","label","options","placeholder"]),l[32]||(l[32]=e()),u(m,{language:"html-vue"},{default:s(()=>l[31]||(l[31]=[e(`
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
        `)])),_:1})])]),l[57]||(l[57]=e()),a("section",null,[a("h2",null,d(t.$t("form.label.disabledMultiselect")),1),l[36]||(l[36]=e()),a("div",C,[u(n(b),{modelValue:n(i).disabledMultiselect,"onUpdate:modelValue":l[8]||(l[8]=o=>n(i).disabledMultiselect=o),label:t.$t("form.label.language"),options:r.value,disabled:"",multiple:""},null,8,["modelValue","label","options"]),l[35]||(l[35]=e()),u(m,{language:"html-vue"},{default:s(()=>l[34]||(l[34]=[e(`
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
        `)])),_:1})])]),l[58]||(l[58]=e()),a("section",null,[a("h2",null,d(t.$t("form.label.multiselectSearch")),1),l[39]||(l[39]=e()),a("div",P,[u(n(b),{modelValue:n(i).multiselectSearch,"onUpdate:modelValue":l[9]||(l[9]=o=>n(i).multiselectSearch=o),label:t.$t("form.label.language"),options:r.value,placeholder:t.$t("form.placeholder.languages"),"search-placeholder":t.$t("form.placeholder.search"),"enable-search":"",multiple:""},null,8,["modelValue","label","options","placeholder","search-placeholder"]),l[38]||(l[38]=e()),u(m,{language:"html-vue"},{default:s(()=>l[37]||(l[37]=[e(`
          <template>
            <SelectInput 
              v-model="input"
              :options="options"
              enable-search
              label="Language"
              multiple
              placeholder="Select languages"
              search-placeholder="Search..."
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
        `)])),_:1})])]),l[59]||(l[59]=e()),a("section",null,[a("h2",null,d(t.$t("form.label.customLabel")),1),l[43]||(l[43]=e()),a("div",w,[u(n(b),{modelValue:n(i).customLabelSelect,"onUpdate:modelValue":l[10]||(l[10]=o=>n(i).customLabelSelect=o),label:t.$t("form.label.language"),options:r.value,placeholder:t.$t("form.placeholder.language"),multiple:""},F({_:2},[c(r.value,(o,K)=>({name:o.value,fn:s(()=>[a("span",null,[l[40]||(l[40]=a("i",{class:"pi pi-user"},null,-1)),e(" "+d(o.label),1)])])}))]),1032,["modelValue","label","options","placeholder"]),l[42]||(l[42]=e()),u(m,{language:"html-vue"},{default:s(()=>l[41]||(l[41]=[e(`
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
        `)])),_:1})])]),l[60]||(l[60]=e()),a("section",null,[a("h2",null,d(t.$t("form.label.minMaxValidation")),1),l[46]||(l[46]=e()),a("div",B,[u(n(v),null,{default:s(()=>[u(n(b),{modelValue:n(i).inputWithMinMax,"onUpdate:modelValue":l[11]||(l[11]=o=>n(i).inputWithMinMax=o),label:t.$t("form.label.language"),"max-selection":3,"min-selection":2,options:r.value,placeholder:t.$t("form.placeholder.languages"),multiple:""},null,8,["modelValue","label","options","placeholder"])]),_:1}),l[45]||(l[45]=e()),u(m,{language:"html-vue"},{default:s(()=>l[44]||(l[44]=[e(`
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
        `)])),_:1})])]),l[61]||(l[61]=e()),a("section",null,[a("h2",null,d(t.$t("form.label.customValidationInput")),1),l[49]||(l[49]=e()),a("div",q,[u(n(v),null,{default:s(()=>[u(n(b),{modelValue:n(i).inputWithValidation,"onUpdate:modelValue":l[12]||(l[12]=o=>n(i).inputWithValidation=o),label:t.$t("form.label.language"),options:r.value,placeholder:t.$t("form.placeholder.languages"),schema:n(g),multiple:""},null,8,["modelValue","label","options","placeholder","schema"])]),_:1}),l[48]||(l[48]=e()),u(m,{language:"html-vue"},{default:s(()=>l[47]||(l[47]=[e(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{J as default};
