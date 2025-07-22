import{I as c,T as B}from"./DzangolabVue3Form.es-Q4CvOA23.js";import{d as D,I as S,R as I,M as V,J as C,e as z,o as N,i as s,D as t,f as p,g as o,t as m,u as l,S as b,v as R}from"./index-BLLu7sZz.js";import{_ as k}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-BHGsT5Km.js";import{_ as w}from"./UiPage.vue_vue_type_style_index_0_lang-CTdadv5J.js";import"./DzangolabVue3TanstackTable.es-By0FH77m.js";const T={class:"section-content"},x={class:"section-content"},A={class:"section-content"},j=D({__name:"Index",setup(F){const{t:a}=S(),v=I(),r=V({name:null,phone:null,price:"$50"}),f=[{description:a("ui.stepper.documentation.eventDescription.complete"),name:"complete",payload:"-"}],g={iconRight:"pi pi-chevron-right",label:"Next",severity:"primary",variant:"filled"},P={iconLeft:"pi pi-chevron-left",label:"Back",severity:"secondary",variant:"filled"},y=[{default:"-",description:a("ui.stepper.documentation.propsDescription.nextButton"),prop:"nextButtonProperties",type:"ActionButtonProperties"},{default:"-",description:a("ui.stepper.documentation.propsDescription.PreviousButton"),prop:"previousButtonProperties",type:"ActionButtonProperties"},{default:"-",description:a("ui.stepper.documentation.propsDescription.steps"),prop:"steps",type:"Array<StepProperties>"}],$=[{description:a("ui.stepper.documentation.slotDescription.step"),name:"{step}"}],d=[{content:"Please enter personal details",label:"Personal",step:1},{content:"Please enter contact details",label:"Contact",step:2},{content:"Please enter payment details",label:"Payment",step:3},{content:"Do you wish to continue?",label:"Confirmation",step:4}],h=()=>{v.push("/ui")};return(n,e)=>{const u=C("SshPre");return N(),z(w,{"sub-title":n.$t("ui.stepper.subtitle"),title:n.$t("ui.stepper.title"),class:"demo-stepper"},{toolbar:s(()=>[o(l(R),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=i=>n.$router.push("/ui"))},null,8,["label"])]),default:s(()=>[e[17]||(e[17]=t()),p("section",null,[p("h2",null,m(n.$t("ui.stepper.usage.basic")),1),e[6]||(e[6]=t()),p("div",T,[o(l(b),{steps:d,onComplete:h}),e[5]||(e[5]=t()),o(u,{language:"html-vue"},{default:s(()=>e[4]||(e[4]=[t(`
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
        `)])),_:1})])]),e[18]||(e[18]=t()),p("section",null,[p("h2",null,m(n.$t("ui.stepper.usage.buttonProperties")),1),e[9]||(e[9]=t()),p("div",x,[o(l(b),{"next-button-properties":g,"previous-button-properties":P,steps:d}),e[8]||(e[8]=t()),o(u,{language:"html-vue"},{default:s(()=>e[7]||(e[7]=[t(`
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
        `)])),_:1})])]),e[19]||(e[19]=t()),p("section",null,[p("h2",null,m(n.$t("ui.stepper.usage.withSlot")),1),e[15]||(e[15]=t()),p("div",A,[o(l(b),{steps:d},{1:s(()=>[o(l(c),{modelValue:r.name,"onUpdate:modelValue":e[1]||(e[1]=i=>r.name=i),label:n.$t("ui.stepper.label.name"),placeholder:n.$t("ui.stepper.placeholder.name"),name:"name"},null,8,["modelValue","label","placeholder"])]),2:s(()=>[o(l(B),{modelValue:r.phone,"onUpdate:modelValue":e[2]||(e[2]=i=>r.phone=i),label:n.$t("ui.stepper.label.phone"),placeholder:n.$t("ui.stepper.placeholder.phone"),name:"phone"},null,8,["modelValue","label","placeholder"])]),3:s(()=>[o(l(c),{modelValue:r.price,"onUpdate:modelValue":e[3]||(e[3]=i=>r.price=i),label:n.$t("ui.stepper.label.price"),disabled:"",name:"price"},null,8,["modelValue","label"])]),4:s(()=>[t(m(n.$t("ui.stepper.usage.complete")),1)]),_:1}),e[14]||(e[14]=t()),o(u,{language:"html-vue"},{default:s(()=>e[13]||(e[13]=[t(`
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
        `)])),_:1})])]),e[20]||(e[20]=t()),o(k,{"events-data":f,"props-data":y,"props-table-title":n.$t("common.properties",{value:"StepperProperties"}),"slots-data":$},null,8,["props-table-title"]),e[21]||(e[21]=t()),o(u,{language:"html-vue"},{default:s(()=>e[16]||(e[16]=[t(`
      interface StepProperties {
        content?: string;
        label?: string;
        step?: number | string;
      }

      interface ActionButtonProperties {
        disabled?: boolean;
        iconLeft?: string;
        iconRight?: string;
        label?: string;
        rounded?: boolean;
        severity?: string;
        size?: string;
        variant?: string;
      }
    `)])),_:1})]),_:1},8,["sub-title","title"])}}});export{j as default};
