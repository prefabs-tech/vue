import{B as p}from"./DzangolabVue3Form.es-DEEXKQQj.js";import{d,N as b,K as f,f as v,o as y,i as s,E as o,g as n,t as c,h as r,u,x as S}from"./index-tfHBYoZR.js";import{_ as U}from"./FormPage.vue_vue_type_style_index_0_lang-DLyp7v72.js";const h={class:"section-content"},D={class:"section-content"},P={name:"CurrencySelectorDemo"},E=d({...P,setup($){const a=b({basic:void 0,selectWithSearch:void 0}),i=[{code:"AUD",label:"Australian Dollar",symbol:"$",value:"AUD"},{code:"GBP",label:"British Pound",symbol:"£",value:"GBP"},{code:"EUR",label:"Euro",symbol:"€",value:"EUR"},{code:"JPY",label:"Japanese Yen",symbol:"¥",value:"JPY"},{code:"USD",label:"US Dollar",symbol:"$",value:"USD"}];return(l,e)=>{const m=f("SshPre");return y(),v(U,{title:l.$t("form.label.currencySelector"),class:"demo"},{toolbar:s(()=>[r(u(S),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=t=>l.$router.push("/form"))},null,8,["label"])]),default:s(()=>[e[9]||(e[9]=o()),n("section",null,[n("h2",null,c(l.$t("form.label.basicInput")),1),e[5]||(e[5]=o()),n("div",h,[r(u(p),{modelValue:a.basic,"onUpdate:modelValue":e[1]||(e[1]=t=>a.basic=t),options:i,placeholder:l.$t("form.placeholder.currency")},null,8,["modelValue","placeholder"]),e[4]||(e[4]=o()),r(m,{language:"html-vue"},{default:s(()=>e[3]||(e[3]=[o(`
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
        `)])),_:1})])]),e[10]||(e[10]=o()),n("section",null,[n("h2",null,c(l.$t("form.label.withSearch")),1),e[8]||(e[8]=o()),n("div",D,[r(u(p),{modelValue:a.selectWithSearch,"onUpdate:modelValue":e[2]||(e[2]=t=>a.selectWithSearch=t),options:i,placeholder:l.$t("form.placeholder.currency"),"search-placeholder":l.$t("form.placeholder.search"),"enable-search":""},null,8,["modelValue","placeholder","search-placeholder"]),e[7]||(e[7]=o()),r(m,{language:"html-vue"},{default:s(()=>e[6]||(e[6]=[o(`
          <template>
            <CurrencySelector
              v-model="input"
              :options="options"
              enable-search
              placeholder="Select a currency"
              search-placeholder="Select..."
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{E as default};
