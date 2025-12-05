import{_ as b,C}from"./PrefabsTechVue3Form.es-Di8AZxfp.js";import{d as I,I as V,M as $,N as D,r as d,L as S,e as O,o as L,j as u,C as l,f as t,t as m,h as i,u as n,v as T}from"./index-B6N9A8ln.js";import{o as f}from"./PrefabsTechVue3TanstackTable.es-CR43FMod.js";import{_ as z}from"./FormPage.vue_vue_type_style_index_0_lang--VbqjpLS.js";const K={class:"section-content"},P={class:"section-content"},B={class:"section-content"},N={class:"section-content"},U={class:"section-content"},W={class:"section-content"},w={name:"CheckboxInput"},M=I({...w,setup(A){const{t:o}=V(),v=$.string().array().min(6,{message:o("form.errors.checkbox.min",{min:6})});let s=D({disabled:d(["car"]),inputWithValidation:d(),multiCheckbox:d([]),noLabelInput:d()});const h=[{label:o("form.label.title"),value:1},{label:o("form.label.solutions"),value:2},{label:o("form.label.deliverableList"),value:3},{label:o("form.label.workInProgress"),value:4},{label:o("form.label.summary"),value:5},{label:o("form.label.next"),value:6},{label:o("form.label.assumptions"),value:7},{label:o("form.label.generalQuestions"),value:8},{label:o("form.label.consequences"),value:9},{label:o("form.label.other"),value:10}],k=[{accessorKey:"name",header:"Name"},{accessorKey:"description",header:"Description"}],y=[{description:"Triggers on single checkbox input state change",id:1,name:"update:checked"},{description:"Triggers on selected value of multiple checkboxes input change",id:1,name:"update:modelValue"}],g=[{accessorKey:"name",header:"Property"},{accessorKey:"type",header:"Type"},{accessorKey:"default",header:"Default"},{accessorKey:"description",header:"Description"}],x=[{default:"false",description:"Determines the checked state of a single checkbox.",id:1,name:"checked",type:"boolean"},{default:"-",description:"Defines the layout direction for multiple checkboxes.",id:2,name:"direction",type:'"horizontal" | "vertical"'},{default:"-",description:"Disables the checkbox input.",id:3,name:"disabled",type:"boolean"},{default:"-",description:"Label for the single checkbox.",id:4,name:"inputLabel",type:"string"},{default:"-",description:"Label for the group of checkboxes.",id:5,name:"label",type:"string"},{default:"-",description:"Array of selected values for multiple checkboxes.",id:6,name:"modelValue",type:"string[]"},{default:"checkbox",description:"The name attribute for the checkbox input.",id:7,name:"name",type:"string"},{default:"[]",description:"Options for multiple checkboxes.",id:8,name:"options",type:"Array<{ value, label }>"},{default:"[]",description:"Determines the validation schema for checkbox input",id:9,name:"schema",type:"ZodType"}],c=[{label:o("form.label.bike"),value:"bike"},{label:o("form.label.car"),value:"car"},{label:o("form.label.truck"),value:"truck"}];return(a,e)=>{const p=S("SshPre");return L(),O(z,{subtitle:a.$t("form.subtitle.checkbox"),title:a.$t("form.label.checkbox"),class:"demo"},{toolbar:u(()=>[i(n(T),{label:a.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=r=>a.$router.push("/form"))},null,8,["label"])]),default:u(()=>[e[19]||(e[19]=l()),t("section",null,[t("h2",null,m(a.$t("form.label.basicInput")),1),e[7]||(e[7]=l()),t("div",K,[i(n(b),{checked:n(s).noLabelInput,"onUpdate:checked":e[1]||(e[1]=r=>n(s).noLabelInput=r),"input-label":a.$t("form.label.accept"),name:"basic"},null,8,["checked","input-label"]),e[6]||(e[6]=l()),i(p,{language:"html-vue"},{default:u(()=>e[5]||(e[5]=[l(`
          <template>
            <CheckboxInput
              v-model:checked="input"
              :input-label="Accept"
              name="input"
            />
          </template>

          <script setup lang="ts">
          import { CheckboxInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          <\/script>
        `)])),_:1})])]),e[20]||(e[20]=l()),t("section",null,[t("h2",null,m(a.$t("form.label.multiCheckbox")),1),e[10]||(e[10]=l()),t("div",P,[i(n(b),{modelValue:n(s).multiCheckbox,"onUpdate:modelValue":e[2]||(e[2]=r=>n(s).multiCheckbox=r),label:a.$t("form.label.vehicle"),options:c,name:"multi-checkbox"},null,8,["modelValue","label"]),e[9]||(e[9]=l()),i(p,{language:"html-vue"},{default:u(()=>e[8]||(e[8]=[l(`
          <template>
            <CheckboxInput
              v-model="input"
              :options="vehicleOptions"
              label="Vehicle"
              name="checkbox"
            />
          </template>

          <script setup lang="ts">
          import { CheckboxInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();
          const vehicleOptions = [
            {
              label: "Bike",
              value: "bike",
            },
            {
              label: "Car",
              value: "car",
            },
            {
              label: "Truck",
              value: "truck",
            },
          ];
          <\/script>
        `)])),_:1})])]),e[21]||(e[21]=l()),t("section",null,[t("h2",null,m(a.$t("form.label.disabled")),1),e[13]||(e[13]=l()),t("div",B,[i(n(b),{modelValue:n(s).disabled,"onUpdate:modelValue":e[3]||(e[3]=r=>n(s).disabled=r),label:a.$t("form.label.vehicle"),options:c,direction:"horizontal",disabled:"",name:"disabled-checkbox"},null,8,["modelValue","label"]),e[12]||(e[12]=l()),i(p,{language:"html-vue"},{default:u(()=>e[11]||(e[11]=[l(`
          <template>
            <CheckboxInput
              v-model="input"
              :options="vehicleOptions"
              direction="horizontal"
              disabled
              label="Vehicle"
              name="checkbox"
            />
          </template>

          <script setup lang="ts">
          import { CheckboxInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref(["car"]);
          const vehicleOptions = [
            {
              label: "Bike",
              value: "bike",
            },
            {
              label: "Car",
              value: "car",
            },
            {
              label: "Truck",
              value: "truck",
            },
          ];
          <\/script>
        `)])),_:1})])]),e[22]||(e[22]=l()),t("section",null,[t("h2",null,m(a.$t("form.label.inputWithValidation")),1),e[16]||(e[16]=l()),t("div",N,[i(n(C),null,{default:u(()=>[i(n(b),{modelValue:n(s).inputWithValidation,"onUpdate:modelValue":e[4]||(e[4]=r=>n(s).inputWithValidation=r),label:a.$t("form.label.dailySynchro"),options:h,schema:n(v),name:"daily-synchro"},null,8,["modelValue","label","schema"])]),_:1}),e[15]||(e[15]=l()),i(p,{language:"html-vue"},{default:u(()=>e[14]||(e[14]=[l(`
          <template>
            <Form>
              <CheckboxInput
                v-model="input"
                :label="t('form.label.dailySynchro')"
                :options="dailySynchroOptions"
                :schema="inputSchema"
                name="checkbox"
              />
            </Form>
          </template>

          <script setup lang="ts">
          import { Form, CheckboxInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { ref } from "vue";

          const { t } = useI18n();

          const inputSchema = z
            .string()
            .array()
            .min(6, { message: t("form.errors.checkbox.min", { min: 6 }) });

          const input = ref();
          const dailySynchroOptions = [
            {
              label: t("form.label.title"),
              value: 1,
            },
            {
              label: t("form.label.solutions"),
              value: 2,
            },
            {
              label: t("form.label.deliverableList"),
              value: 3,
            },
            {
              label: t("form.label.workInProgress"),
              value: 4,
            },
            {
              label: t("form.label.summary"),
              value: 5,
            },
            {
              label: t("form.label.next"),
              value: 6,
            },
            {
              label: t("form.label.assumptions"),
              value: 7,
            },
            {
              label: t("form.label.generalQuestions"),
              value: 8,
            },
            {
              label: t("form.label.consequences"),
              value: 9,
            },
            {
              label: t("form.label.other"),
              value: 10,
            },
          ];
          <\/script>
        `)])),_:1})])]),e[23]||(e[23]=l()),t("section",null,[t("h2",null,m(a.$t("common.properties",{value:"CheckboxInputProperties"})),1),e[17]||(e[17]=l()),t("div",U,[i(n(f),{"columns-data":g,data:x,paginated:!1,"persist-state":!1})])]),e[24]||(e[24]=l()),t("section",null,[t("h2",null,m(a.$t("common.events")),1),e[18]||(e[18]=l()),t("div",W,[i(n(f),{"columns-data":k,data:y,paginated:!1,"persist-state":!1})])])]),_:1},8,["subtitle","title"])}}});export{M as default};
