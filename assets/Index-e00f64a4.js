import{d as g,b as y,e as c,r as b,o as $,c as V,w as a,a as n,t as i,f as e,g as l,h as s,ad as d}from"./index-fd38b0f1.js";import{t as v,G as B}from"./DzangolabVue3Form.es-890891a3.js";const S={class:"section-content"},C={class:"section-content"},D={class:"section-content"},w=g({__name:"Index",setup(I){const o=y({name:null,phone:null,price:"$50"}),f=c({iconRight:"pi pi-chevron-right",label:"Next",severity:"primary",variant:"filled"}),h=c({iconLeft:"pi pi-chevron-left",label:"Back",severity:"secondary",variant:"filled"}),u=c([{content:"Please enter personal details",label:"Personal",step:1},{content:"Please enter contact details",label:"Contact",step:2},{content:"Please enter payment details",label:"Payment",step:3},{content:"Do you wish to continue?",label:"Confirmation",step:4}]);return(t,p)=>{const m=b("SshPre"),P=b("Page");return $(),V(P,{title:t.$t("ui.stepper.title"),class:"demo"},{default:a(()=>[n("section",null,[n("h2",null,i(t.$t("ui.stepper.usage.basic")),1),e(),n("div",S,[l(m,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Stepper :steps="steps" />
          </template>

          <script setup lang="ts">
          import { Stepper } from "@dzangolab/vue3-ui";

          const steps = ref([
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
          ]);
          <\/script>
        `)]),_:1}),e(),l(s(d),{steps:u.value},null,8,["steps"])])]),e(),n("section",null,[n("h2",null,i(t.$t("ui.stepper.usage.buttonProperties")),1),e(),n("div",C,[l(m,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Stepper
              :next-button-properties="nextButtonProperties"
              :previous-button-properties="previousButtonProperties" 
              :steps="steps"
            />
          </template>

          <script setup lang="ts">
          import { Stepper } from "@dzangolab/vue3-ui";

          const steps = ref([
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
          ]);

          const nextButtonProperties = ref({
            iconRight: "pi pi-chevron-right",
            label: "Next",
            severity: "primary",
            variant: "filled",
          });

          const previousButtonProperties = ref({
            iconLeft: "pi pi-chevron-left",
            label: "Back",
            severity: 'secondary',
            variant: "filled",
          });
          <\/script>
        `)]),_:1}),e(),l(s(d),{"next-button-properties":f.value,"previous-button-properties":h.value,steps:u.value},null,8,["next-button-properties","previous-button-properties","steps"])])]),e(),n("section",null,[n("h2",null,i(t.$t("ui.stepper.usage.withSlot")),1),e(),n("div",D,[l(m,{language:"html-vue"},{default:a(()=>[e(`
          <template>
            <Stepper :steps="steps">
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

          import { reactive, ref } from "vue";

          const { t } = useI18n();

          const steps = ref([
            {
              content: "Please enter personal details",
              label: "Personal",
              step: 1,
            },
            ...
          ]);

          const formData = reactive({
            name: null,
            phone: null,
            price: "$50",
          });
          <\/script>
        `)]),_:1}),e(),l(s(d),{steps:u.value},{1:a(()=>[l(s(v),{modelValue:o.name,"onUpdate:modelValue":p[0]||(p[0]=r=>o.name=r),label:t.$t("ui.stepper.label.name"),placeholder:t.$t("ui.stepper.placeholder.name"),name:"name"},null,8,["modelValue","label","placeholder"])]),2:a(()=>[l(s(B),{modelValue:o.phone,"onUpdate:modelValue":p[1]||(p[1]=r=>o.phone=r),label:t.$t("ui.stepper.label.phone"),placeholder:t.$t("ui.stepper.placeholder.phone"),name:"phone"},null,8,["modelValue","label","placeholder"])]),3:a(()=>[l(s(v),{modelValue:o.price,"onUpdate:modelValue":p[2]||(p[2]=r=>o.price=r),label:t.$t("ui.stepper.label.price"),disabled:"",name:"price"},null,8,["modelValue","label"])]),4:a(()=>[e(i(t.$t("ui.stepper.usage.complete")),1)]),_:1},8,["steps"])])])]),_:1},8,["title"])}}});export{w as default};
