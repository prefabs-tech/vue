import{d as S,u as h,b as g,e as m,o as F,c as R,w as i,a as s,t as d,f as e,g as t,h as l,r as f}from"./index-3bb8d7f9.js";import{m as V,G as c,z as D}from"./DzangolabVue3Form.es-ceb02955.js";const I={class:"demo-section"},B={class:"demo-section"},_={class:"demo-section"},$={class:"demo-section"},y={class:"demo-section"},z={class:"demo-section"},U={class:"demo-section"},P={name:"SelectInputField"},L=S({...P,setup(M){const{t:b}=h(),v=V.string({invalid_type_error:b("form.errors.multiSelect.invalid")}).array().min(1,{message:b("form.errors.multiSelect.invalid")});let a=g({customStyleInput:m(),disabled:m("DE"),disabledMultiSelect:m(["BE","DE"]),input:m(),inputWithValidation:m(),multiSelect:m(),noLabelInput:m()});const p=m([{value:"FR",label:"FR"},{value:"DE",label:"DE"},{value:"BE",label:"BE"},{value:"FE",label:"FE"},{value:"RE",label:"RE"}]);return(n,o)=>{const r=f("SshPre"),E=f("Page");return F(),R(E,{title:n.$t("form.label.select")},{default:i(()=>[s("section",I,[s("h3",null,d(n.$t("form.label.basicInput")),1),e(),t(r,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <SelectInput
            v-model="input"
            :options="options"
            placeholder="Select a value"
          />
        </template>

        <script setup lang="ts">
        import { SelectInput } from "@dzangolab/vue3-form";
        import { ref } from "vue";

        const options = ref([
          { value: "FR", label: "FR" },
          { value: "DE", label: "DE" },
          { value: "BE", label: "BE" },
          { value: "FE", label: "FE" },
          { value: "RE", label: "RE" },
        ]);
        <\/script>
      `)]),_:1}),e(),t(l(c),{modelValue:l(a).noLabelInput,"onUpdate:modelValue":o[0]||(o[0]=u=>l(a).noLabelInput=u),options:p.value,placeholder:n.$t("form.placeholder.select"),class:"form-field"},null,8,["modelValue","options","placeholder"])]),e(),s("section",B,[s("h3",null,d(n.$t("form.label.labelInput")),1),e(),t(r,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <SelectInput 
            v-model="input"
            :options="options"
            label="Select"
            placeholder="Select a value"
          />
        </template>

        <script setup lang="ts">
        import { SelectInput } from "@dzangolab/vue3-form";
        import { ref } from "vue";

        const options = ref([
          { value: "FR", label: "FR" },
          { value: "DE", label: "DE" },
          { value: "BE", label: "BE" },
          { value: "FE", label: "FE" },
          { value: "RE", label: "RE" },
        ]);
        <\/script>
      `)]),_:1}),e(),t(l(c),{modelValue:l(a).input,"onUpdate:modelValue":o[1]||(o[1]=u=>l(a).input=u),label:n.$t("form.label.select"),options:p.value,placeholder:n.$t("form.placeholder.select"),class:"form-field"},null,8,["modelValue","label","options","placeholder"])]),e(),s("section",_,[s("h3",null,d(n.$t("form.label.disabled")),1),e(),t(r,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <SelectInput 
            v-model="disabled"
            :options="options"
            disabled
            label="Disabled"
          />
        </template>

        <script setup lang="ts">
        import { SelectInput } from "@dzangolab/vue3-form";
        import { ref } from "vue";

        const disabled = ref("DE");

        const options = ref([
          { value: "FR", label: "FR" },
          { value: "DE", label: "DE" },
          { value: "BE", label: "BE" },
          { value: "FE", label: "FE" },
          { value: "RE", label: "RE" },
        ]);
        <\/script>
      `)]),_:1}),e(),t(l(c),{modelValue:l(a).disabled,"onUpdate:modelValue":o[2]||(o[2]=u=>l(a).disabled=u),label:n.$t("form.label.disabled"),options:p.value,class:"form-field",disabled:""},null,8,["modelValue","label","options"])]),e(),s("section",$,[s("h3",null,d(n.$t("form.label.multiSelect")),1),e(),t(r,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <SelectInput 
            v-model="input"
            :options="options"
            label="Select"
            multiple
            placeholder="Select multiple value"
          />
        </template>

        <script setup lang="ts">
        import { SelectInput } from "@dzangolab/vue3-form";
        import { ref } from "vue";

        const options = ref([
          { value: "FR", label: "FR" },
          { value: "DE", label: "DE" },
          { value: "BE", label: "BE" },
          { value: "FE", label: "FE" },
          { value: "RE", label: "RE" },
        ]);
        <\/script>
      `)]),_:1}),e(),t(l(c),{modelValue:l(a).multiSelect,"onUpdate:modelValue":o[3]||(o[3]=u=>l(a).multiSelect=u),label:n.$t("form.label.select"),options:p.value,placeholder:n.$t("form.placeholder.multiSelect"),class:"form-field",multiple:""},null,8,["modelValue","label","options","placeholder"])]),e(),s("section",y,[s("h3",null,d(n.$t("form.label.disabledMultiSelect")),1),e(),t(r,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <SelectInput 
            v-model="disabled"
            :options="options"
            disabled
            label="Disabled"
            multiple
          />
        </template>

        <script setup lang="ts">
        import { SelectInput } from "@dzangolab/vue3-form";
        import { ref } from "vue";

        const disabled = ref(["BE", "DE"]);

        const options = ref([
          { value: "FR", label: "FR" },
          { value: "DE", label: "DE" },
          { value: "BE", label: "BE" },
          { value: "FE", label: "FE" },
          { value: "RE", label: "RE" },
        ]);
        <\/script>
      `)]),_:1}),e(),t(l(c),{modelValue:l(a).disabledMultiSelect,"onUpdate:modelValue":o[4]||(o[4]=u=>l(a).disabledMultiSelect=u),label:n.$t("form.label.disabled"),options:p.value,class:"form-field",disabled:"",multiple:""},null,8,["modelValue","label","options"])]),e(),s("section",z,[s("h3",null,d(n.$t("form.label.inputWithValidation")),1),e(),t(r,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <SelectInput 
            v-model="input"
            :options="options"
            :schema="inputSchema"
            label="Select"
            multiple
            placeholder="Select multiple value"
          />
        </template>

        <script setup lang="ts">
        import { SelectInput } from "@dzangolab/vue3-form";
        import { ref } from "vue";

        const inputSchema = z
          .string({invalid_type_error: "Please select atleast one valid option"})
          .array()
          .min(1, { message: "Please select atleast one valid option" });

        const options = ref([
          { value: "FR", label: "FR" },
          { value: "DE", label: "DE" },
          { value: "BE", label: "BE" },
          { value: "FE", label: "FE" },
          { value: "RE", label: "RE" },
        ]);
        <\/script>
      `)]),_:1}),e(),t(l(D),null,{default:i(()=>[t(l(c),{modelValue:l(a).inputWithValidation,"onUpdate:modelValue":o[5]||(o[5]=u=>l(a).inputWithValidation=u),label:n.$t("form.label.select"),options:p.value,placeholder:n.$t("form.placeholder.multiSelect"),schema:l(v),class:"form-field",multiple:""},null,8,["modelValue","label","options","placeholder","schema"])]),_:1})]),e(),s("section",U,[s("h3",null,d(n.$t("form.label.customStyleInput")),1),e(),t(r,{language:"html-vue"},{default:i(()=>[e(`
        <template>
          <SelectInput 
            v-model="input"
            :options="options"
            class="custom-style-select"
            label="Select"
            multiple
            placeholder="Select multiple value"
          />
        </template>

        <script setup lang="ts">
        import { SelectInput } from "@dzangolab/vue3-form";
        import { ref } from "vue";

        const options = ref([
          { value: "FR", label: "FR" },
          { value: "DE", label: "DE" },
          { value: "BE", label: "BE" },
          { value: "FE", label: "FE" },
          { value: "RE", label: "RE" },
        ]);
        <\/script>

        <style lang="css">
        .custom-style-select .multiple-mode .selected-option {
          --_multiselect-tag-border-radius: 1rem;
          --_multiselect-tag-color: #007aff;

          color: #fff;
        }

        .custom-style-select .multiselect-input {
          --_multiselect-border-color: #007aff;
        }

        .custom-style-select .multiselect-option.selected {
          --_multiselect-selected-bg-color: #22c55e;
          --_multiselect-selected-color: #fff;
        }
      </style>
      `)]),_:1}),e(),t(l(c),{modelValue:l(a).multiSelect,"onUpdate:modelValue":o[6]||(o[6]=u=>l(a).multiSelect=u),label:n.$t("form.label.select"),options:p.value,placeholder:n.$t("form.placeholder.multiSelect"),class:"form-field custom-style-select",multiple:""},null,8,["modelValue","label","options","placeholder"])])]),_:1},8,["title"])}}});export{L as default};
