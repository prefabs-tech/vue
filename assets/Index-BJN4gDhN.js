import{x as f,w as k}from"./PrefabsTechVue3Form.es-CJrbuyVl.js";import{d as y,L as D,M as O,o as $,e as h,f as s,h as o,t as b,z as n,a,u as l,l as S,O as R,r as m,i as d,N as z}from"./index-gsYvP72M.js";import{_ as B}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CorU4Nr9.js";import{_ as w}from"./FormPage.vue_vue_type_style_index_0_lang-hGT_6CDO.js";import"./PrefabsTechVue3TanstackTable.es-ic69Yqey.js";const F={class:"section-content"},N={class:"section-content"},P={class:"section-content"},T={class:"section-content"},q={name:"RadioInput"},L=y({...q,setup(C){const{t}=D();let r=R({disabled:m("car"),i18nInput:m(),input:m(),inputWithValidation:m(),noLabelInput:m()});const c=d(()=>[{description:t("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"value: string"}]),v=d(()=>[{label:t("form.label.male"),value:"male"},{label:t("form.label.female"),value:"female"}]),V=d(()=>z.string({required_error:t("form.errors.radio.required")}).nonempty({message:t("form.errors.radio.required")})),I=d(()=>[{default:"-",description:t("form.documentation.propsDescription.radio.direction"),prop:"direction",type:'"vertical" | "horizontal"'},{default:"false",description:t("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:"-",description:t("form.documentation.propsDescription.input.helperText"),prop:"helperText",type:"String"},{default:"-",description:t("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:'""',description:t("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"String | Number"},{default:'"radio"',description:t("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:"-",description:t("form.documentation.propsDescription.radio.options"),prop:"options",type:"InputOption[]"},{default:"-",description:t("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number | boolean>"}]),g=d(()=>[{label:t("form.label.bike"),value:"bike"},{label:t("form.label.car"),value:"car"},{label:t("form.label.truck"),value:"truck"}]);return(i,e)=>{const u=O("SshPre");return $(),h(w,{subtitle:i.$t("form.subtitle.radio"),title:i.$t("form.label.radio"),class:"demo"},{default:s(()=>[o("section",null,[o("h2",null,b(i.$t("form.label.basicInput")),1),e[6]||(e[6]=n()),o("div",F,[a(l(f),{modelValue:l(r).input,"onUpdate:modelValue":e[0]||(e[0]=p=>l(r).input=p),label:i.$t("form.label.gender"),options:v.value,direction:"horizontal",name:"label-input"},null,8,["modelValue","label","options"]),e[5]||(e[5]=n()),a(u,{language:"html-vue"},{default:s(()=>[...e[4]||(e[4]=[n(`
          <template>
            <RadioInput
              v-model="input"
              :options="genderOptions"
              direction="horizontal"
              label="Gender"
              name="gender"
            />
          </template>

          <script setup lang="ts">
          import { RadioInput } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          
          const genderOptions = [
            {
              label: "Male",
              value: "male",
            },
            {
              label: "Female",
              value: "female",
            },
          ];
          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),e[18]||(e[18]=n()),o("section",null,[o("h2",null,b(i.$t("form.label.disabled")),1),e[9]||(e[9]=n()),o("div",N,[a(l(f),{modelValue:l(r).disabled,"onUpdate:modelValue":e[1]||(e[1]=p=>l(r).disabled=p),label:i.$t("form.label.vehicle"),options:g.value,disabled:"",name:"disabled-input"},null,8,["modelValue","label","options"]),e[8]||(e[8]=n()),a(u,{language:"html-vue"},{default:s(()=>[...e[7]||(e[7]=[n(`
          <template>
            <RadioInput 
              v-model="input"
              :options="vehicleOptions"
              disabled
              label="Vehicle"
              name="vehicle"
            />
          </template>

          <script setup lang="ts">
          import { RadioInput } from "@prefabs.tech/vue3-form";
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
        `,-1)])]),_:1})])]),e[19]||(e[19]=n()),o("section",null,[o("h2",null,b(i.$t("form.label.withI18n")),1),e[12]||(e[12]=n()),o("div",P,[a(l(f),{modelValue:l(r).i18nInput,"onUpdate:modelValue":e[2]||(e[2]=p=>l(r).i18nInput=p),label:i.$t("form.label.vehicle"),options:g.value,direction:"horizontal",name:"i18n-input"},null,8,["modelValue","label","options"]),e[11]||(e[11]=n()),a(u,{language:"html-vue"},{default:s(()=>[...e[10]||(e[10]=[n(`
          <template>
            <RadioInput 
              v-model="input"
              :label="t('form.label.vehicle')"
              :options="vehicleOptions"
              direction="horizontal"
              name="vehicle"
            />
          </template>

          <script setup lang="ts">
          import { RadioInput } from "@prefabs.tech/vue3-form";
          import { useI18n } from "@prefabs.tech/vue3-i18n";

          const { t } = useI18n();

          const vehicleOptions = [
            {
              label: t("form.label.bike"),
              value: "bike",
            },
            {
              label: t("form.label.car"),
              value: "car",
            },
            {
              label: t("form.label.truck"),
              value: "truck",
            },
          ];
          <\/script>
        `,-1)])]),_:1})])]),e[20]||(e[20]=n()),o("section",null,[o("h2",null,b(i.$t("form.label.inputWithValidation")),1),e[16]||(e[16]=n()),o("div",T,[a(l(k),null,{default:s(()=>[a(l(f),{modelValue:l(r).inputWithValidation,"onUpdate:modelValue":e[3]||(e[3]=p=>l(r).inputWithValidation=p),label:i.$t("form.label.gender"),options:v.value,schema:V.value,name:"gender"},null,8,["modelValue","label","options","schema"]),e[13]||(e[13]=n()),a(l(S),{label:l(t)("form.label.submit")},null,8,["label"])]),_:1}),e[15]||(e[15]=n()),a(u,{language:"html-vue"},{default:s(()=>[...e[14]||(e[14]=[n(`
          <template>
            <Form>
              <RadioInput 
                v-model="input"
                :options="genderOptions"
                :schema="inputSchema"
                label="Gender"
                name="gender"
              />

              <ButtonElement label="Submit" />
            </Form>
          </template>

          <script setup lang="ts">
          import { Form, RadioInput } from "@prefabs.tech/vue3-form";
          import { ButtonElement } from "@prefabs.tech/vue3-ui";

          const inputSchema = z
            .string({
              required_error: "Please choose one option",
            })
            .nonempty({ message: "Please choose one option" });

          const genderOptions = [
            {
              label: "Male",
              value: "male",
            },
            {
              label: "Female",
              value: "female",
            },
          ];
          <\/script>
        `,-1)])]),_:1})])]),e[21]||(e[21]=n()),a(B,{"events-data":c.value,"props-data":I.value,"props-table-title":i.$t("common.properties",{value:"RadioInputProperties"})},null,8,["events-data","props-data","props-table-title"]),e[22]||(e[22]=n()),a(u,{language:"html-vue"},{default:s(()=>[...e[17]||(e[17]=[n(`
      interface InputOption {
        label: string;
        value: string | number;
      }
    `,-1)])]),_:1})]),_:1},8,["subtitle","title"])}}});export{L as default};
