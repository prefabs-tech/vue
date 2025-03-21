import{H as b,g as P}from"./DzangolabVue3Form.es-Br0A5kim.js";import{d as h,H as $,D as y,A as S,e as V,o as B,w as o,E as t,f as s,t as i,i as l,u as p,J as d,j as C}from"./index-C49kGRMu.js";import{_ as D}from"./UiPage.vue_vue_type_style_index_0_lang-CawN8G72.js";const I={class:"section-content"},w={class:"section-content"},N={class:"section-content"},F=h({__name:"Index",setup(k){const c=$(),a=y({name:null,phone:null,price:"$50"}),f={iconRight:"pi pi-chevron-right",label:"Next",severity:"primary",variant:"filled"},v={iconLeft:"pi pi-chevron-left",label:"Back",severity:"secondary",variant:"filled"},u=[{content:"Please enter personal details",label:"Personal",step:1},{content:"Please enter contact details",label:"Contact",step:2},{content:"Please enter payment details",label:"Payment",step:3},{content:"Do you wish to continue?",label:"Confirmation",step:4}],g=()=>{c.push("/ui")};return(n,e)=>{const m=S("SshPre");return B(),V(D,{title:n.$t("ui.stepper.title"),class:"demo"},{toolbar:o(()=>[l(p(C),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=r=>n.$router.push("/ui"))},null,8,["label"])]),default:o(()=>[e[16]||(e[16]=t()),s("section",null,[s("h2",null,i(n.$t("ui.stepper.usage.basic")),1),e[6]||(e[6]=t()),s("div",I,[l(p(d),{steps:u,onComplete:g}),e[5]||(e[5]=t()),l(m,{language:"html-vue"},{default:o(()=>e[4]||(e[4]=[t(`
          <template>
            <Stepper :steps="steps" @complete="onFinish" />
          </template>

          <script setup lang="ts">
          import { Stepper } from "@dzangolab/vue3-ui";

          import { useRouter } from "vue-router";

          const router = useRouter();

          const steps = [
            {
              content: "Please enter personal details",
              label: "Personal",
              step: 1,
            },
            {
              content: "Please enter contact details",
              label: "Contact",
              step: 2,
            },
            {
              content: "Please enter payment details",
              label: "Payment",
              step: 3,
            },
            {
              content: "Do you wish to continue?",
              label: "Confirmation",
              step: 4,
            },
          ];

          const onFinish = () => {
            router.push("/ui");
          };
          <\/script>
        `)])),_:1})])]),e[17]||(e[17]=t()),s("section",null,[s("h2",null,i(n.$t("ui.stepper.usage.buttonProperties")),1),e[9]||(e[9]=t()),s("div",w,[l(p(d),{"next-button-properties":f,"previous-button-properties":v,steps:u}),e[8]||(e[8]=t()),l(m,{language:"html-vue"},{default:o(()=>e[7]||(e[7]=[t(`
          <template>
            <Stepper
              :next-button-properties="nextButtonProperties"
              :previous-button-properties="previousButtonProperties" 
              :steps="steps"
            />
          </template>

          <script setup lang="ts">
          import { Stepper } from "@dzangolab/vue3-ui";

          const steps = [
            {
              content: "Please enter personal details",
              label: "Personal",
              step: 1,
            },
            {
              content: "Please enter contact details",
              label: "Contact",
              step: 2,
            },
            {
              content: "Please enter payment details",
              label: "Payment",
              step: 3,
            },
            {
              content: "Do you wish to continue?",
              label: "Confirmation",
              step: 4,
            },
          ];

          const nextButtonProperties = {
            iconRight: "pi pi-chevron-right",
            label: "Next",
            severity: "primary",
            variant: "filled",
          };

          const previousButtonProperties = {
            iconLeft: "pi pi-chevron-left",
            label: "Back",
            severity: 'secondary',
            variant: "filled",
          };
          <\/script>
        `)])),_:1})])]),e[18]||(e[18]=t()),s("section",null,[s("h2",null,i(n.$t("ui.stepper.usage.withSlot")),1),e[15]||(e[15]=t()),s("div",N,[l(p(d),{steps:u},{1:o(()=>[l(p(b),{modelValue:a.name,"onUpdate:modelValue":e[1]||(e[1]=r=>a.name=r),label:n.$t("ui.stepper.label.name"),placeholder:n.$t("ui.stepper.placeholder.name"),name:"name"},null,8,["modelValue","label","placeholder"])]),2:o(()=>[l(p(P),{modelValue:a.phone,"onUpdate:modelValue":e[2]||(e[2]=r=>a.phone=r),label:n.$t("ui.stepper.label.phone"),placeholder:n.$t("ui.stepper.placeholder.phone"),name:"phone"},null,8,["modelValue","label","placeholder"])]),3:o(()=>[l(p(b),{modelValue:a.price,"onUpdate:modelValue":e[3]||(e[3]=r=>a.price=r),label:n.$t("ui.stepper.label.price"),disabled:"",name:"price"},null,8,["modelValue","label"])]),4:o(()=>[t(i(n.$t("ui.stepper.usage.complete")),1)]),_:1}),e[14]||(e[14]=t()),l(m,{language:"html-vue"},{default:o(()=>e[13]||(e[13]=[t(`
          <template>
            <Stepper :steps="steps">
            <!-- Slot for rendering custom content with step in the \`steps\` prop -->
            <template #1>
              <TextInput
                v-model="formData.name"
                :label="$t('ui.stepper.label.name')"
                :placeholder="$t('ui.stepper.placeholder.name')"
                name="name"
              />
            </template>
            <template #2>
              <NumberInput
                v-model="formData.phone"
                :label="$t('ui.stepper.label.phone')"
                :placeholder="$t('ui.stepper.placeholder.phone')"
                name="phone"
              />
            </template>
            <template #3>
              <TextInput
                v-model="formData.price"
                disabled
                :label="$t('ui.stepper.label.price')"
                name="price"
              />
            </template>
            <template #4>
              {{{ t('ui.stepper.usage.complete') }}
            </template>
            </Stepper>
          </template>

          <script setup lang="ts">
          import { useI18n } from "@dzangolab/vue3-i18n";
          import { TextInput, NumberInput } from "@dzangolab/vue3-form";
          import { Stepper } from "@dzangolab/vue3-ui";

          import { reactive } from "vue";

          const { t } = useI18n();

          const steps = [
            {
              content: "Please enter personal details",
              label: "Personal",
              step: 1,
            },
            ...
          ];

          const formData = reactive({
            name: null,
            phone: null,
            price: "$50",
          });
          <\/script>
        `)])),_:1})])])]),_:1},8,["title"])}}});export{F as default};
