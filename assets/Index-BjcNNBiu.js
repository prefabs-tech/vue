import{f as d,_ as g}from"./DzangolabVue3Form.es-Cf29nzIN.js";import{d as P,H as $,z as y,s as B,j as S,o as V,w as l,A as e,e as o,t as i,g as n,u as s,I as c,B as C}from"./index-j9ugvOHR.js";import{_ as D}from"./UiPage.vue_vue_type_style_index_0_lang-BeVgrYUm.js";const I={class:"section-content"},w={class:"section-content"},z={class:"section-content"},x=P({__name:"Index",setup(N){const b=$(),p=y({name:null,phone:null,price:"$50"}),h={iconRight:"pi pi-chevron-right",label:"Next",severity:"primary",variant:"filled"},f={iconLeft:"pi pi-chevron-left",label:"Back",severity:"secondary",variant:"filled"},u=[{content:"Please enter personal details",label:"Personal",step:1},{content:"Please enter contact details",label:"Contact",step:2},{content:"Please enter payment details",label:"Payment",step:3},{content:"Do you wish to continue?",label:"Confirmation",step:4}],v=()=>{b.push("/ui")};return(t,a)=>{const m=B("SshPre");return V(),S(D,{title:t.$t("ui.stepper.title"),class:"demo"},{toolbar:l(()=>[n(s(C),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:a[0]||(a[0]=r=>t.$router.push("/ui"))},null,8,["label"])]),default:l(()=>[e(),o("section",null,[o("h2",null,i(t.$t("ui.stepper.usage.basic")),1),e(),o("div",I,[n(s(c),{steps:u,onComplete:v}),e(),n(m,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e()])]),e(),o("section",null,[o("h2",null,i(t.$t("ui.stepper.usage.buttonProperties")),1),e(),o("div",w,[n(s(c),{"next-button-properties":h,"previous-button-properties":f,steps:u}),e(),n(m,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e()])]),e(),o("section",null,[o("h2",null,i(t.$t("ui.stepper.usage.withSlot")),1),e(),o("div",z,[n(s(c),{steps:u},{1:l(()=>[n(s(d),{modelValue:p.name,"onUpdate:modelValue":a[1]||(a[1]=r=>p.name=r),label:t.$t("ui.stepper.label.name"),placeholder:t.$t("ui.stepper.placeholder.name"),name:"name"},null,8,["modelValue","label","placeholder"])]),2:l(()=>[n(s(g),{modelValue:p.phone,"onUpdate:modelValue":a[2]||(a[2]=r=>p.phone=r),label:t.$t("ui.stepper.label.phone"),placeholder:t.$t("ui.stepper.placeholder.phone"),name:"phone"},null,8,["modelValue","label","placeholder"])]),3:l(()=>[n(s(d),{modelValue:p.price,"onUpdate:modelValue":a[3]||(a[3]=r=>p.price=r),label:t.$t("ui.stepper.label.price"),disabled:"",name:"price"},null,8,["modelValue","label"])]),4:l(()=>[e(i(t.$t("ui.stepper.usage.complete")),1)]),_:1}),e(),n(m,{language:"html-vue"},{default:l(()=>[e(`
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
        `)]),_:1}),e()])])]),_:1},8,["title"])}}});export{x as default};
