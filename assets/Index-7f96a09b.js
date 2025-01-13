import{F as d,U as $}from"./DzangolabVue3Form.es-d1fadff1.js";import{d as y,Z as S,p as V,K as b,o as _,c as B,w as n,L as o,C as e,M as i,f as l,E as p,aE as c}from"./index-8e1c3ab6-475a9ed5.js";import{_ as C}from"./UiPage.vue_vue_type_style_index_0_lang-5541a295.js";import"./index-f29306f7.js";const D={class:"section-content"},k={class:"section-content"},I={class:"section-content"},U=y({__name:"Index",setup(w){const h=S(),a=V({name:null,phone:null,price:"$50"}),f={iconRight:"pi pi-chevron-right",label:"Next",severity:"primary",variant:"filled"},v={iconLeft:"pi pi-chevron-left",label:"Back",severity:"secondary",variant:"filled"},u=[{content:"Please enter personal details",label:"Personal",step:1},{content:"Please enter contact details",label:"Contact",step:2},{content:"Please enter payment details",label:"Payment",step:3},{content:"Do you wish to continue?",label:"Confirmation",step:4}],P=()=>{h.push("/ui")};return(t,s)=>{const g=b("router-link"),m=b("SshPre");return _(),B(C,{title:t.$t("ui.stepper.title"),class:"demo"},{toolbar:n(()=>[o(g,{to:{name:"ui"},class:"back"},{default:n(()=>[e(i(t.$t("common.back")),1)]),_:1})]),default:n(()=>[e(),l("section",null,[l("h2",null,i(t.$t("ui.stepper.usage.basic")),1),e(),l("div",D,[o(p(c),{steps:u,onComplete:P}),e(),o(m,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(t.$t("ui.stepper.usage.buttonProperties")),1),e(),l("div",k,[o(p(c),{"next-button-properties":f,"previous-button-properties":v,steps:u}),e(),o(m,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e()])]),e(),l("section",null,[l("h2",null,i(t.$t("ui.stepper.usage.withSlot")),1),e(),l("div",I,[o(p(c),{steps:u},{1:n(()=>[o(p(d),{modelValue:a.name,"onUpdate:modelValue":s[0]||(s[0]=r=>a.name=r),label:t.$t("ui.stepper.label.name"),placeholder:t.$t("ui.stepper.placeholder.name"),name:"name"},null,8,["modelValue","label","placeholder"])]),2:n(()=>[o(p($),{modelValue:a.phone,"onUpdate:modelValue":s[1]||(s[1]=r=>a.phone=r),label:t.$t("ui.stepper.label.phone"),placeholder:t.$t("ui.stepper.placeholder.phone"),name:"phone"},null,8,["modelValue","label","placeholder"])]),3:n(()=>[o(p(d),{modelValue:a.price,"onUpdate:modelValue":s[2]||(s[2]=r=>a.price=r),label:t.$t("ui.stepper.label.price"),disabled:"",name:"price"},null,8,["modelValue","label"])]),4:n(()=>[e(i(t.$t("ui.stepper.usage.complete")),1)]),_:1}),e(),o(m,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{U as default};
