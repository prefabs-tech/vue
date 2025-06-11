import{B as p}from"./DzangolabVue3Form.es-Dat2oXdq.js";import{d as c,N as d,r as b,K as f,f as v,o as y,i as n,E as l,g as a,t as D,h as t,u,x as U}from"./index-DZOt7f2Z.js";import{_ as S}from"./FormPage.vue_vue_type_style_index_0_lang-_nFbxOGC.js";const P={class:"section-content"},B={name:"CurrencySelectorDemo"},A=c({...B,setup($){const r=d({basic:b()}),m=[{code:"AUD",label:"Australian Dollar",symbol:"$",value:"AUD"},{code:"GBP",label:"British Pound",symbol:"£",value:"GBP"},{code:"EUR",label:"Euro",symbol:"€",value:"EUR"},{code:"JPY",label:"Japanese Yen",symbol:"¥",value:"JPY"},{code:"USD",label:"US Dollar",symbol:"$",value:"USD"}];return(o,e)=>{const i=f("SshPre");return y(),v(S,{title:o.$t("form.label.currencySelector"),class:"demo"},{toolbar:n(()=>[t(u(U),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=s=>o.$router.push("/form"))},null,8,["label"])]),default:n(()=>[e[5]||(e[5]=l()),a("section",null,[a("h2",null,D(o.$t("form.label.basicInput")),1),e[4]||(e[4]=l()),a("div",P,[t(u(p),{modelValue:r.basic,"onUpdate:modelValue":e[1]||(e[1]=s=>r.basic=s),options:m,placeholder:o.$t("form.placeholder.currency")},null,8,["modelValue","placeholder"]),e[3]||(e[3]=l()),t(i,{language:"html-vue"},{default:n(()=>e[2]||(e[2]=[l(`
          <template>
            <CurrencySelector
              v-model="input"
              :options="options"
              placeholder="Select a currency"
            />
          </template>

          <script setup lang="ts">
          import { CurrencySelector } from "@dzangolab/vue3-form";
          import { ref } from "vue";

          import type { CurrencyOption } from "@dzangolab/vue3-form";

          const input = ref();

          const options = [
            { code: "AUD", label: "Australian Dollar", symbol: "$", value: "AUD" },
            { code: "GBP", label: "British Pound", symbol: "£", value: "GBP" },
            { code: "EUR", label: "Euro", symbol: "€", value: "EUR" },
            { code: "JPY", label: "Japanese Yen", symbol: "¥", value: "JPY" },
            { code: "USD", label: "US Dollar", symbol: "$", value: "USD" },
          ] as CurrencyOption[];
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{A as default};
