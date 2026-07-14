import{Y as m,W as f}from"./PrefabsTechVue3TanstackTable.es-CCWGft_y.js";import{d as S,u as R,r as U,o as g,h as A,w as i,a as o,t as c,b as n,e as r,f as u,i as C,m as b,p as O,n as k,s as h}from"./index-CL6G4kQC.js";import{_ as $}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-DYh4lDNV.js";import{c as V}from"./data-uYwV_J55.js";import{_ as Z}from"./FormPage.vue_vue_type_style_index_0_lang-BrBSJbsh.js";const B={class:"section-content"},N={class:"section-content"},Y={class:"section-content"},E={class:"section-content"},J={class:"section-content"},I={class:"section-content"},G={name:"CurrencyPickerDemo"},j=S({...G,setup(z){const{t}=R(),a=C({basic:void 0,extensivePicker:void 0,multiselect:void 0,selectOptionsInput:void 0,selectWithOrder:void 0,validationInput:void 0}),d=[{code:"AUD",label:"Australian Dollar",symbol:"$",value:"AUD"},{code:"GBP",label:"British Pound",symbol:"£",value:"GBP"},{code:"EUR",disabled:!0,label:"Euro",symbol:"€",value:"EUR"},{code:"JPY",label:"Japanese Yen",symbol:"¥",value:"JPY"},{code:"USD",label:"US Dollar",symbol:"$",value:"USD"},{code:"DZD",label:"Algerian dinar",value:"DZD"},{code:"ZAR",label:"South African Rand",value:"ZAR"},{code:"NPR",label:"Nepalese rupee",symbol:"Rs",value:"NPR"}],y=b(()=>[{description:t("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | number | string[] | number[] | null | undefined"},{description:t("form.documentation.eventDescription.currencyPicker.searchInput"),name:"update:searchInput",payload:"string"}]),v=b(()=>O(l=>l??[],k(h()).min(1,{message:t("form.errors.currencyPicker.invalid")}))),D=b(()=>[{default:"false",description:t("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:"-",description:t("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"-",description:t("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"boolean | number | string | (number | string)[] | null"},{default:"false",description:t("form.documentation.propsDescription.select.multiple"),prop:"multiple",type:"Boolean"},{default:'"currency"',description:t("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:'["code", "label", "symbol"]',description:t("form.documentation.propsDescription.currencyPicker.optionLabelOrder"),prop:"optionLabelOrder",type:"Array<keyof CurrencyOption>"},{default:"-",description:t("form.documentation.propsDescription.currencyPicker.options"),prop:"options",type:"CurrencyOption[]"},{default:"-",description:t("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:t("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number | string[] | number[]>"},{default:"-",description:t("form.documentation.propsDescription.currencyPicker.selectionOptions"),prop:"selectionOptions",type:"Object"}]),P=b(()=>[{description:t("form.documentation.slotDescription.currencyPicker.option"),name:"option",props:"{ multiple: boolean, option: CurrencyOption, selected: boolean }"},{description:t("form.documentation.slotDescription.currencyPicker.selection"),name:"selection",props:"{ selectedLabels: string[] }"}]);return(l,e)=>{const p=U("SshPre");return g(),A(Z,{subtitle:u(t)("form.subtitle.currencyPicker"),title:l.$t("form.label.currencyPicker"),class:"demo"},{default:i(()=>[o("section",null,[o("h2",null,c(l.$t("form.label.basicInput")),1),e[8]||(e[8]=n()),o("div",B,[r(u(m),{modelValue:a.basic,"onUpdate:modelValue":e[0]||(e[0]=s=>a.basic=s),options:d,placeholder:l.$t("form.placeholder.currency")},null,8,["modelValue","placeholder"]),e[7]||(e[7]=n()),r(p,{language:"html-vue"},{default:i(()=>[...e[6]||(e[6]=[n(`
          <template>
            <CurrencyPicker
              v-model="input"
              :options="options"
              placeholder="Select a currency"
            />
          </template>

          <script setup lang="ts">
          import { CurrencyPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@prefabs.tech/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
            { code: "DZD", label: "Algerian dinar", value: "DZD" },
            {
              code: "ZAR",
              label: "South African Rand",
              value: "ZAR",
            },
            { code: "NPR", label: "Nepalese rupee", symbol: "Rs", value: "NPR" },
          ] as CurrencyOption[];
          <\/script>
        `,-1)])]),_:1})])]),e[25]||(e[25]=n()),o("section",null,[o("h2",null,c(l.$t("form.label.selectLabelOrder")),1),e[11]||(e[11]=n()),o("div",N,[r(u(m),{modelValue:a.selectWithOrder,"onUpdate:modelValue":e[1]||(e[1]=s=>a.selectWithOrder=s),"option-label-order":["symbol","label","code"],options:d,placeholder:l.$t("form.placeholder.currency"),name:"ordered-currency"},null,8,["modelValue","placeholder"]),e[10]||(e[10]=n()),r(p,{language:"html-vue"},{default:i(()=>[...e[9]||(e[9]=[n(`
          <template>
            <CurrencyPicker
              v-model="input"
              :option-label-order="['symbol', 'label', 'code']"
              :options="options"
              name="currency"
              placeholder="Select a currency"
            />
          </template>

          <script setup lang="ts">
          import { CurrencyPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@prefabs.tech/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
            { code: "DZD", label: "Algerian dinar", value: "DZD" },
            {
              code: "ZAR",
              label: "South African Rand",
              value: "ZAR",
            },
            { code: "NPR", label: "Nepalese rupee", symbol: "Rs", value: "NPR" },
          ] as CurrencyOption[];
          <\/script>
        `,-1)])]),_:1})])]),e[26]||(e[26]=n()),o("section",null,[o("h2",null,c(l.$t("form.label.currencyPickerExtensive")),1),e[14]||(e[14]=n()),o("div",Y,[r(u(m),{modelValue:a.extensivePicker,"onUpdate:modelValue":e[2]||(e[2]=s=>a.extensivePicker=s),options:u(V),placeholder:l.$t("form.placeholder.currency"),name:"extensive-currency"},null,8,["modelValue","options","placeholder"]),e[13]||(e[13]=n()),r(p,{language:"html-vue"},{default:i(()=>[...e[12]||(e[12]=[n(`
          <template>
            <CurrencyPicker
              v-model="input"
              :options="currencies"
              name="currency"
              placeholder="Select a currency"
            />
          </template>

          <script setup lang="ts">
          import { CurrencyPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import { currencies } from "../data";

          import type { CurrencyOption } from "@prefabs.tech/vue3-form";

          const input = ref();
          <\/script>
        `,-1)])]),_:1})])]),e[27]||(e[27]=n()),o("section",null,[o("h2",null,c(l.$t("form.label.multiselect")),1),e[17]||(e[17]=n()),o("div",E,[r(u(m),{modelValue:a.multiselect,"onUpdate:modelValue":e[3]||(e[3]=s=>a.multiselect=s),options:d,placeholder:l.$t("form.placeholder.currency"),multiple:"",name:"multiselect-currency"},null,8,["modelValue","placeholder"]),e[16]||(e[16]=n()),r(p,{language:"html-vue"},{default:i(()=>[...e[15]||(e[15]=[n(`
          <template>
            <CurrencyPicker
              v-model="input"
              :options="options"
              multiple
              name="currency"
              placeholder="Select a currency"
            />
          </template>

          <script setup lang="ts">
          import { CurrencyPicker } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@prefabs.tech/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
            { code: "DZD", label: "Algerian dinar", value: "DZD" },
            {
              code: "ZAR",
              label: "South African Rand",
              value: "ZAR",
            },
            { code: "NPR", label: "Nepalese rupee", symbol: "Rs", value: "NPR" },
            ] as CurrencyOption[];
          <\/script>
        `,-1)])]),_:1})])]),e[28]||(e[28]=n()),o("section",null,[o("h2",null,c(l.$t("form.label.withSelectOptions")),1),e[20]||(e[20]=n()),o("div",J,[r(u(f),null,{default:i(()=>[r(u(m),{modelValue:a.selectOptionsInput,"onUpdate:modelValue":e[4]||(e[4]=s=>a.selectOptionsInput=s),options:d,placeholder:l.$t("form.placeholder.currency"),"selection-options":{hasSortedOptions:!1,maxSelection:3,minSelection:2,showRemoveSelection:!0},multiple:"",name:"select-currency"},null,8,["modelValue","placeholder"])]),_:1}),e[19]||(e[19]=n()),r(p,{language:"html-vue"},{default:i(()=>[...e[18]||(e[18]=[n(`
          <template>
            <Form>
              <CurrencyPicker
                v-model="input"
                :options="options"
                :selection-options="{
                  hasSortedOptions: false,
                  maxSelection: 3,
                  minSelection: 2,
                  showRemoveSelection: true,
                } as SelectInputProperties"
                multiple
                name="currency"
                placeholder="Select a currency"
              />
            </Form>
          </template>

          <script setup lang="ts">
          import type { CurrencyOption, SelectInputProperties } from "@prefabs.tech/vue3-form";

          import { CurrencyPicker, Form } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
            { code: "DZD", label: "Algerian dinar", value: "DZD" },
            {
              code: "ZAR",
              label: "South African Rand",
              value: "ZAR",
            },
            { code: "NPR", label: "Nepalese rupee", symbol: "Rs", value: "NPR" },
          ] as CurrencyOption[];
          <\/script>
        `,-1)])]),_:1})])]),e[29]||(e[29]=n()),o("section",null,[o("h2",null,c(l.$t("form.label.customValidationInput")),1),e[23]||(e[23]=n()),o("div",I,[r(u(f),null,{default:i(()=>[r(u(m),{modelValue:a.validationInput,"onUpdate:modelValue":e[5]||(e[5]=s=>a.validationInput=s),options:d,placeholder:l.$t("form.placeholder.currency"),schema:v.value,multiple:"",name:"validation-currency"},null,8,["modelValue","placeholder","schema"])]),_:1}),e[22]||(e[22]=n()),r(p,{language:"html-vue"},{default:i(()=>[...e[21]||(e[21]=[n(`
          <template>
            <Form>
              <CurrencyPicker
                v-model="input"
                :options="options"
                :schema="inputSchema"
                multiple
                name="currency"
                placeholder="Select a currency"
              />
            </Form>
          </template>

          <script setup lang="ts">
          import { CurrencyPicker, Form } from "@prefabs.tech/vue3-form";
          import { ref } from "vue";
          import { z } from "zod";

          import type { CurrencyOption } from "@prefabs.tech/vue3-form";

          const input = ref();

          const inputSchema = z.preprocess(
            (value) => (value === null || value === undefined ? [] : value),
            z
              .array(z.string())
              .min(1, { message: "Please select at least one valid option" })
          );

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", disabled: true, label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
            { code: "DZD", label: "Algerian dinar", value: "DZD" },
            {
              code: "ZAR",
              label: "South African Rand",
              value: "ZAR",
            },
            { code: "NPR", label: "Nepalese rupee", symbol: "Rs", value: "NPR" },
          ] as CurrencyOption[];
          <\/script>
        `,-1)])]),_:1})])]),e[30]||(e[30]=n()),r($,{"events-data":y.value,"props-data":D.value,"props-table-title":l.$t("common.properties",{value:"CurrencyPickerProperties"}),"slots-data":P.value},null,8,["events-data","props-data","props-table-title","slots-data"]),e[31]||(e[31]=n()),r(p,{language:"html-vue"},{default:i(()=>[...e[24]||(e[24]=[n(`
      interface CurrencyOption extends SelectOption {
        code?: string;
        symbol?: string;
      }
    `,-1)])]),_:1})]),_:1},8,["subtitle","title"])}}});export{j as default};
