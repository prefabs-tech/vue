import{Q as m,r as y}from"./PrefabsTechVue3Form.es-BmJfIqTO.js";import{d as S,L as U,M as g,o as A,e as C,f as s,h as o,t as c,z as n,a as t,u,O,i as b,N as f}from"./index-C7ch2MF9.js";import{_ as k}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-ClDG4-uz.js";import{c as h}from"./data-uYwV_J55.js";import{_ as $}from"./FormPage.vue_vue_type_style_index_0_lang-DFUOhfZo.js";import"./PrefabsTechVue3TanstackTable.es-BbS_od31.js";const V={class:"section-content"},Z={class:"section-content"},B={class:"section-content"},N={class:"section-content"},E={class:"section-content"},J={class:"section-content"},Y={name:"CurrencyPickerDemo"},Q=S({...Y,setup(G){const{t:r}=U(),a=O({basic:void 0,extensivePicker:void 0,multiselect:void 0,selectOptionsInput:void 0,selectWithOrder:void 0,validationInput:void 0}),d=[{code:"AUD",label:"Australian Dollar",symbol:"$",value:"AUD"},{code:"GBP",label:"British Pound",symbol:"£",value:"GBP"},{code:"EUR",disabled:!0,label:"Euro",symbol:"€",value:"EUR"},{code:"JPY",label:"Japanese Yen",symbol:"¥",value:"JPY"},{code:"USD",label:"US Dollar",symbol:"$",value:"USD"},{code:"DZD",label:"Algerian dinar",value:"DZD"},{code:"ZAR",label:"South African Rand",value:"ZAR"},{code:"NPR",label:"Nepalese rupee",symbol:"Rs",value:"NPR"}],v=b(()=>[{description:r("form.documentation.eventDescription.input.modelValue"),name:"update:modelValue",payload:"string | number | string[] | number[] | null | undefined"},{description:r("form.documentation.eventDescription.currencyPicker.searchInput"),name:"update:searchInput",payload:"string"}]),D=b(()=>f.preprocess(l=>l??[],f.array(f.string()).min(1,{message:r("form.errors.currencyPicker.invalid")}))),P=b(()=>[{default:"false",description:r("form.documentation.propsDescription.input.disabled"),prop:"disabled",type:"Boolean"},{default:"-",description:r("form.documentation.propsDescription.input.label"),prop:"label",type:"String"},{default:"-",description:r("form.documentation.propsDescription.input.modelValue"),prop:"modelValue",type:"boolean | number | string | (number | string)[] | null"},{default:"false",description:r("form.documentation.propsDescription.select.multiple"),prop:"multiple",type:"Boolean"},{default:'"currency"',description:r("form.documentation.propsDescription.input.name"),prop:"name",type:"String"},{default:'["code", "label", "symbol"]',description:r("form.documentation.propsDescription.currencyPicker.optionLabelOrder"),prop:"optionLabelOrder",type:"Array<keyof CurrencyOption>"},{default:"-",description:r("form.documentation.propsDescription.currencyPicker.options"),prop:"options",type:"CurrencyOption[]"},{default:"-",description:r("form.documentation.propsDescription.input.placeholder"),prop:"placeholder",type:"String"},{default:"-",description:r("form.documentation.propsDescription.input.schema"),prop:"schema",type:"z.ZodType<string | number | string[] | number[]>"},{default:"-",description:r("form.documentation.propsDescription.currencyPicker.selectionOptions"),prop:"selectionOptions",type:"Object"}]),R=b(()=>[{description:r("form.documentation.slotDescription.currencyPicker.option"),name:"option",props:"{ multiple: boolean, option: CurrencyOption, selected: boolean }"},{description:r("form.documentation.slotDescription.currencyPicker.selection"),name:"selection",props:"{ selectedLabels: string[] }"}]);return(l,e)=>{const p=g("SshPre");return A(),C($,{subtitle:u(r)("form.subtitle.currencyPicker"),title:l.$t("form.label.currencyPicker"),class:"demo"},{default:s(()=>[o("section",null,[o("h2",null,c(l.$t("form.label.basicInput")),1),e[8]||(e[8]=n()),o("div",V,[t(u(m),{modelValue:a.basic,"onUpdate:modelValue":e[0]||(e[0]=i=>a.basic=i),options:d,placeholder:l.$t("form.placeholder.currency")},null,8,["modelValue","placeholder"]),e[7]||(e[7]=n()),t(p,{language:"html-vue"},{default:s(()=>[...e[6]||(e[6]=[n(`
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
        `,-1)])]),_:1})])]),e[25]||(e[25]=n()),o("section",null,[o("h2",null,c(l.$t("form.label.selectLabelOrder")),1),e[11]||(e[11]=n()),o("div",Z,[t(u(m),{modelValue:a.selectWithOrder,"onUpdate:modelValue":e[1]||(e[1]=i=>a.selectWithOrder=i),"option-label-order":["symbol","label","code"],options:d,placeholder:l.$t("form.placeholder.currency"),name:"ordered-currency"},null,8,["modelValue","placeholder"]),e[10]||(e[10]=n()),t(p,{language:"html-vue"},{default:s(()=>[...e[9]||(e[9]=[n(`
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
        `,-1)])]),_:1})])]),e[26]||(e[26]=n()),o("section",null,[o("h2",null,c(l.$t("form.label.currencyPickerExtensive")),1),e[14]||(e[14]=n()),o("div",B,[t(u(m),{modelValue:a.extensivePicker,"onUpdate:modelValue":e[2]||(e[2]=i=>a.extensivePicker=i),options:u(h),placeholder:l.$t("form.placeholder.currency"),name:"extensive-currency"},null,8,["modelValue","options","placeholder"]),e[13]||(e[13]=n()),t(p,{language:"html-vue"},{default:s(()=>[...e[12]||(e[12]=[n(`
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
        `,-1)])]),_:1})])]),e[27]||(e[27]=n()),o("section",null,[o("h2",null,c(l.$t("form.label.multiselect")),1),e[17]||(e[17]=n()),o("div",N,[t(u(m),{modelValue:a.multiselect,"onUpdate:modelValue":e[3]||(e[3]=i=>a.multiselect=i),options:d,placeholder:l.$t("form.placeholder.currency"),multiple:"",name:"multiselect-currency"},null,8,["modelValue","placeholder"]),e[16]||(e[16]=n()),t(p,{language:"html-vue"},{default:s(()=>[...e[15]||(e[15]=[n(`
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
        `,-1)])]),_:1})])]),e[28]||(e[28]=n()),o("section",null,[o("h2",null,c(l.$t("form.label.withSelectOptions")),1),e[20]||(e[20]=n()),o("div",E,[t(u(y),null,{default:s(()=>[t(u(m),{modelValue:a.selectOptionsInput,"onUpdate:modelValue":e[4]||(e[4]=i=>a.selectOptionsInput=i),options:d,placeholder:l.$t("form.placeholder.currency"),"selection-options":{hasSortedOptions:!1,maxSelection:3,minSelection:2,showRemoveSelection:!0},multiple:"",name:"select-currency"},null,8,["modelValue","placeholder"])]),_:1}),e[19]||(e[19]=n()),t(p,{language:"html-vue"},{default:s(()=>[...e[18]||(e[18]=[n(`
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
                }"
                multiple
                name="currency"
                placeholder="Select a currency"
              />
            </Form>
          </template>

          <script setup lang="ts">
          import { CurrencyPicker, Form } from "@prefabs.tech/vue3-form";
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
        `,-1)])]),_:1})])]),e[29]||(e[29]=n()),o("section",null,[o("h2",null,c(l.$t("form.label.customValidationInput")),1),e[23]||(e[23]=n()),o("div",J,[t(u(y),null,{default:s(()=>[t(u(m),{modelValue:a.validationInput,"onUpdate:modelValue":e[5]||(e[5]=i=>a.validationInput=i),options:d,placeholder:l.$t("form.placeholder.currency"),schema:D.value,multiple:"",name:"validation-currency"},null,8,["modelValue","placeholder","schema"])]),_:1}),e[22]||(e[22]=n()),t(p,{language:"html-vue"},{default:s(()=>[...e[21]||(e[21]=[n(`
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
        `,-1)])]),_:1})])]),e[30]||(e[30]=n()),t(k,{"events-data":v.value,"props-data":P.value,"props-table-title":l.$t("common.properties",{value:"CurrencyPickerProperties"}),"slots-data":R.value},null,8,["events-data","props-data","props-table-title","slots-data"]),e[31]||(e[31]=n()),t(p,{language:"html-vue"},{default:s(()=>[...e[24]||(e[24]=[n(`
      interface CurrencyOption extends SelectOption {
        code?: string;
        symbol?: string;
      }
    `,-1)])]),_:1})]),_:1},8,["subtitle","title"])}}});export{Q as default};
