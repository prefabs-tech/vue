import{R as b,$ as g}from"./DzangolabVue3Form.es-wFi6zzsC.js";import{d as S,z as h,A as V,B as $,r as p,y as I,l as c,o as z,p as s,C as e,e as t,t as d,g as u,u as n,E as L,j as F,D}from"./index-C0L6_lhn.js";import{_ as N}from"./FormPage.vue_vue_type_style_index_0_lang-vsJ3lGt1.js";const U={class:"section-content"},G={class:"section-content"},H={class:"section-content"},y={class:"section-content"},W={class:"section-content"},C={class:"section-content"},k={class:"section-content"},B={class:"section-content"},M={class:"section-content"},P={class:"section-content"},w={class:"section-content"},R={name:"SelectInputField"},q=S({...R,setup(j){const{t:f}=h(),v=V.string({invalid_type_error:f("form.errors.multiselect.invalid")}).array().min(1,{message:f("form.errors.multiselect.invalid")});let i=$({customLabelSelect:p(),disabled:p("de"),disabledMultiselect:p(["be","de"]),disabledSortInput:p(),i18nSelect:p(),input:p(),inputWithValidation:p([]),multiselect:p(),multiselectSearch:p(),noLabelInput:p(),selectWithSearch:p()});const r=p([{label:f("form.label.french"),value:"fr"},{label:f("form.label.german"),value:"de"},{disabled:!0,label:f("form.label.dutch"),value:"be"},{label:f("form.label.nepali"),value:"np"},{label:f("form.label.hindi"),value:"hi"}]);return(a,l)=>{const m=I("SshPre");return z(),c(N,{title:a.$t("form.label.select"),class:"demo"},{toolbar:s(()=>[u(n(D),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=o=>a.$router.push("/form"))},null,8,["label"])]),default:s(()=>[l[46]||(l[46]=e()),t("section",null,[t("h2",null,d(a.$t("form.label.basicInput")),1),l[14]||(l[14]=e()),t("div",U,[u(n(b),{modelValue:n(i).noLabelInput,"onUpdate:modelValue":l[1]||(l[1]=o=>n(i).noLabelInput=o),options:r.value,placeholder:a.$t("form.placeholder.language")},null,8,["modelValue","options","placeholder"]),l[13]||(l[13]=e()),u(m,{language:"html-vue"},{default:s(()=>l[12]||(l[12]=[e(`
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
        `)])),_:1})])]),l[47]||(l[47]=e()),t("section",null,[t("h2",null,d(a.$t("form.label.labelInput")),1),l[17]||(l[17]=e()),t("div",G,[u(n(b),{modelValue:n(i).input,"onUpdate:modelValue":l[2]||(l[2]=o=>n(i).input=o),label:a.$t("form.label.language"),options:r.value,placeholder:a.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),l[16]||(l[16]=e()),u(m,{language:"html-vue"},{default:s(()=>l[15]||(l[15]=[e(`
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
        `)])),_:1})])]),l[48]||(l[48]=e()),t("section",null,[t("h2",null,d(a.$t("form.label.disabled")),1),l[20]||(l[20]=e()),t("div",H,[u(n(b),{modelValue:n(i).disabled,"onUpdate:modelValue":l[3]||(l[3]=o=>n(i).disabled=o),label:a.$t("form.label.language"),options:r.value,disabled:""},null,8,["modelValue","label","options"]),l[19]||(l[19]=e()),u(m,{language:"html-vue"},{default:s(()=>l[18]||(l[18]=[e(`
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
        `)])),_:1})])]),l[49]||(l[49]=e()),t("section",null,[t("h2",null,d(a.$t("form.label.withSearch")),1),l[23]||(l[23]=e()),t("div",y,[u(n(b),{modelValue:n(i).selectWithSearch,"onUpdate:modelValue":l[4]||(l[4]=o=>n(i).selectWithSearch=o),label:a.$t("form.label.language"),options:r.value,placeholder:a.$t("form.placeholder.language"),"search-placeholder":a.$t("form.placeholder.search"),"enable-search":""},null,8,["modelValue","label","options","placeholder","search-placeholder"]),l[22]||(l[22]=e()),u(m,{language:"html-vue"},{default:s(()=>l[21]||(l[21]=[e(`
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
        `)])),_:1})])]),l[50]||(l[50]=e()),t("section",null,[t("h2",null,d(a.$t("form.label.disableSort")),1),l[26]||(l[26]=e()),t("div",W,[u(n(b),{modelValue:n(i).disabledSortInput,"onUpdate:modelValue":l[5]||(l[5]=o=>n(i).disabledSortInput=o),"has-sorted-options":!1,label:a.$t("form.label.language"),options:r.value,placeholder:a.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),l[25]||(l[25]=e()),u(m,{language:"html-vue"},{default:s(()=>l[24]||(l[24]=[e(`
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
        `)])),_:1})])]),l[51]||(l[51]=e()),t("section",null,[t("h2",null,d(a.$t("form.label.withI18n")),1),l[29]||(l[29]=e()),t("div",C,[u(n(b),{modelValue:n(i).i18nSelect,"onUpdate:modelValue":l[6]||(l[6]=o=>n(i).i18nSelect=o),label:a.$t("form.label.language"),options:r.value,placeholder:a.$t("form.placeholder.language")},null,8,["modelValue","label","options","placeholder"]),l[28]||(l[28]=e()),u(m,{language:"html-vue"},{default:s(()=>l[27]||(l[27]=[e(`
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
        `)])),_:1})])]),l[52]||(l[52]=e()),t("section",null,[t("h2",null,d(a.$t("form.label.multiselect")),1),l[32]||(l[32]=e()),t("div",k,[u(n(b),{modelValue:n(i).multiselect,"onUpdate:modelValue":l[7]||(l[7]=o=>n(i).multiselect=o),label:a.$t("form.label.language"),options:r.value,placeholder:a.$t("form.placeholder.languages"),multiple:""},null,8,["modelValue","label","options","placeholder"]),l[31]||(l[31]=e()),u(m,{language:"html-vue"},{default:s(()=>l[30]||(l[30]=[e(`
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
        `)])),_:1})])]),l[53]||(l[53]=e()),t("section",null,[t("h2",null,d(a.$t("form.label.disabledMultiselect")),1),l[35]||(l[35]=e()),t("div",B,[u(n(b),{modelValue:n(i).disabledMultiselect,"onUpdate:modelValue":l[8]||(l[8]=o=>n(i).disabledMultiselect=o),label:a.$t("form.label.language"),options:r.value,disabled:"",multiple:""},null,8,["modelValue","label","options"]),l[34]||(l[34]=e()),u(m,{language:"html-vue"},{default:s(()=>l[33]||(l[33]=[e(`
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
        `)])),_:1})])]),l[54]||(l[54]=e()),t("section",null,[t("h2",null,d(a.$t("form.label.multiselectSearch")),1),l[38]||(l[38]=e()),t("div",M,[u(n(b),{modelValue:n(i).multiselectSearch,"onUpdate:modelValue":l[9]||(l[9]=o=>n(i).multiselectSearch=o),label:a.$t("form.label.language"),options:r.value,placeholder:a.$t("form.placeholder.languages"),"search-placeholder":a.$t("form.placeholder.search"),"enable-search":"",multiple:""},null,8,["modelValue","label","options","placeholder","search-placeholder"]),l[37]||(l[37]=e()),u(m,{language:"html-vue"},{default:s(()=>l[36]||(l[36]=[e(`
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
        `)])),_:1})])]),l[55]||(l[55]=e()),t("section",null,[t("h2",null,d(a.$t("form.label.customLabel")),1),l[42]||(l[42]=e()),t("div",P,[u(n(b),{modelValue:n(i).customLabelSelect,"onUpdate:modelValue":l[10]||(l[10]=o=>n(i).customLabelSelect=o),label:a.$t("form.label.language"),options:r.value,placeholder:a.$t("form.placeholder.language"),multiple:""},L({_:2},[F(r.value,(o,A)=>({name:o.value,fn:s(()=>[t("span",null,[l[39]||(l[39]=t("i",{class:"pi pi-user"},null,-1)),e(" "+d(o.label),1)])])}))]),1032,["modelValue","label","options","placeholder"]),l[41]||(l[41]=e()),u(m,{language:"html-vue"},{default:s(()=>l[40]||(l[40]=[e(`
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
        `)])),_:1})])]),l[56]||(l[56]=e()),t("section",null,[t("h2",null,d(a.$t("form.label.inputWithValidation")),1),l[45]||(l[45]=e()),t("div",w,[u(n(g),null,{default:s(()=>[u(n(b),{modelValue:n(i).inputWithValidation,"onUpdate:modelValue":l[11]||(l[11]=o=>n(i).inputWithValidation=o),label:a.$t("form.label.language"),options:r.value,placeholder:a.$t("form.placeholder.languages"),schema:n(v),multiple:""},null,8,["modelValue","label","options","placeholder","schema"])]),_:1}),l[44]||(l[44]=e()),u(m,{language:"html-vue"},{default:s(()=>l[43]||(l[43]=[e(`
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
