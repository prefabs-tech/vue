import{C as p,E as b}from"./PrefabsTechVue3Form.es-DV1FRZxy.js";import{d as y,I as P,N as D,M as c,L as R,e as U,o as S,j as u,C as l,f as o,t as m,h as r,u as s,v as A}from"./index-STrZF6Wn.js";import{c as C}from"./data-uYwV_J55.js";import{_ as g}from"./FormPage.vue_vue_type_style_index_0_lang-B08UBD6i.js";const $={class:"section-content"},h={class:"section-content"},Z={class:"section-content"},k={class:"section-content"},N={class:"section-content"},O={class:"section-content"},V={name:"CurrencyPickerDemo"},I=y({...V,setup(B){const{t:v}=P(),t=D({basic:void 0,extensivePicker:void 0,multiselect:void 0,selectOptionsInput:void 0,selectWithOrder:void 0,validationInput:void 0}),f=c.preprocess(n=>n??[],c.array(c.string()).min(1,{message:v("form.errors.currencyPicker.invalid")})),d=[{code:"AUD",label:"Australian Dollar",symbol:"$",value:"AUD"},{code:"GBP",label:"British Pound",symbol:"£",value:"GBP"},{code:"EUR",disabled:!0,label:"Euro",symbol:"€",value:"EUR"},{code:"JPY",label:"Japanese Yen",symbol:"¥",value:"JPY"},{code:"USD",label:"US Dollar",symbol:"$",value:"USD"},{code:"DZD",label:"Algerian dinar",value:"DZD"},{code:"ZAR",label:"South African Rand",value:"ZAR"},{code:"NPR",label:"Nepalese rupee",symbol:"Rs",value:"NPR"}];return(n,e)=>{const i=R("SshPre");return S(),U(g,{title:n.$t("form.label.currencyPicker"),class:"demo"},{toolbar:u(()=>[r(s(A),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=a=>n.$router.push("/form"))},null,8,["label"])]),default:u(()=>[e[25]||(e[25]=l()),o("section",null,[o("h2",null,m(n.$t("form.label.basicInput")),1),e[9]||(e[9]=l()),o("div",$,[r(s(p),{modelValue:t.basic,"onUpdate:modelValue":e[1]||(e[1]=a=>t.basic=a),options:d,placeholder:n.$t("form.placeholder.currency")},null,8,["modelValue","placeholder"]),e[8]||(e[8]=l()),r(i,{language:"html-vue"},{default:u(()=>e[7]||(e[7]=[l(`
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
        `)])),_:1})])]),e[26]||(e[26]=l()),o("section",null,[o("h2",null,m(n.$t("form.label.selectLabelOrder")),1),e[12]||(e[12]=l()),o("div",h,[r(s(p),{modelValue:t.selectWithOrder,"onUpdate:modelValue":e[2]||(e[2]=a=>t.selectWithOrder=a),"option-label-order":["symbol","label","code"],options:d,placeholder:n.$t("form.placeholder.currency")},null,8,["modelValue","placeholder"]),e[11]||(e[11]=l()),r(i,{language:"html-vue"},{default:u(()=>e[10]||(e[10]=[l(`
          <template>
            <CurrencyPicker
              v-model="input"
              :option-label-order="['symbol', 'label', 'code']"
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
        `)])),_:1})])]),e[27]||(e[27]=l()),o("section",null,[o("h2",null,m(n.$t("form.label.currencyPickerExtensive")),1),e[15]||(e[15]=l()),o("div",Z,[r(s(p),{modelValue:t.extensivePicker,"onUpdate:modelValue":e[3]||(e[3]=a=>t.extensivePicker=a),options:s(C),placeholder:n.$t("form.placeholder.currency")},null,8,["modelValue","options","placeholder"]),e[14]||(e[14]=l()),r(i,{language:"html-vue"},{default:u(()=>e[13]||(e[13]=[l(`
          <template>
            <CurrencyPicker
              v-model="input"
              :options="currencies"
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
        `)])),_:1})])]),e[28]||(e[28]=l()),o("section",null,[o("h2",null,m(n.$t("form.label.multiselect")),1),e[18]||(e[18]=l()),o("div",k,[r(s(p),{modelValue:t.multiselect,"onUpdate:modelValue":e[4]||(e[4]=a=>t.multiselect=a),options:d,placeholder:n.$t("form.placeholder.currency"),multiple:""},null,8,["modelValue","placeholder"]),e[17]||(e[17]=l()),r(i,{language:"html-vue"},{default:u(()=>e[16]||(e[16]=[l(`
          <template>
            <CurrencyPicker
              v-model="input"
              :options="options"
              multiple
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
        `)])),_:1})])]),e[29]||(e[29]=l()),o("section",null,[o("h2",null,m(n.$t("form.label.withSelectOptions")),1),e[21]||(e[21]=l()),o("div",N,[r(s(b),null,{default:u(()=>[r(s(p),{modelValue:t.selectOptionsInput,"onUpdate:modelValue":e[5]||(e[5]=a=>t.selectOptionsInput=a),options:d,placeholder:n.$t("form.placeholder.currency"),"selection-options":{hasSortedOptions:!1,maxSelection:3,minSelection:2,showRemoveSelection:!0},multiple:""},null,8,["modelValue","placeholder"])]),_:1}),e[20]||(e[20]=l()),r(i,{language:"html-vue"},{default:u(()=>e[19]||(e[19]=[l(`
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
        `)])),_:1})])]),e[30]||(e[30]=l()),o("section",null,[o("h2",null,m(n.$t("form.label.customValidationInput")),1),e[24]||(e[24]=l()),o("div",O,[r(s(b),null,{default:u(()=>[r(s(p),{modelValue:t.validationInput,"onUpdate:modelValue":e[6]||(e[6]=a=>t.validationInput=a),options:d,placeholder:n.$t("form.placeholder.currency"),schema:s(f),multiple:""},null,8,["modelValue","placeholder","schema"])]),_:1}),e[23]||(e[23]=l()),r(i,{language:"html-vue"},{default:u(()=>e[22]||(e[22]=[l(`
          <template>
            <Form>
              <CurrencyPicker
                v-model="input"
                :options="options"
                :schema="inputSchema"
                multiple
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{I as default};
