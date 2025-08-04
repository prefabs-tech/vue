import{I as b,T as B}from"./PrefabsTechVue3Form.es-DkZwwYlu.js";import{d as D,E as S,Q as V,L as C,H as I,e as N,o as R,j as s,B as t,f as p,h as o,t as m,u as l,R as c,v as k}from"./index-7DYOETMS.js";import{_ as w}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-CbNeRugZ.js";import{_ as T}from"./UiPage.vue_vue_type_style_index_0_lang-ht0CzUMP.js";import"./PrefabsTechVue3TanstackTable.es-BQRYxunA.js";const x={class:"section-content"},A={class:"section-content"},L={class:"section-content"},O=D({__name:"Index",setup(F){const{t:a}=S(),f=V(),r=C({name:null,phone:null,price:"$50"}),v=[{description:a("ui.stepper.documentation.eventDescription.complete"),name:"complete",payload:"-"}],P={iconRight:"pi pi-chevron-right",label:"Next",severity:"primary",variant:"filled"},g={iconLeft:"pi pi-chevron-left",label:"Back",severity:"secondary",variant:"filled"},h=[{default:"-",description:a("ui.stepper.documentation.propsDescription.nextButton"),prop:"nextButtonProperties",type:"ActionButtonProperties"},{default:"-",description:a("ui.stepper.documentation.propsDescription.PreviousButton"),prop:"previousButtonProperties",type:"ActionButtonProperties"},{default:"-",description:a("ui.stepper.documentation.propsDescription.steps"),prop:"steps",type:"Array<StepProperties>"}],y=[{description:a("ui.stepper.documentation.slotDescription.step"),name:"{step}"}],d=[{content:"Please enter personal details",label:"Personal",step:1},{content:"Please enter contact details",label:"Contact",step:2},{content:"Please enter payment details",label:"Payment",step:3},{content:"Do you wish to continue?",label:"Confirmation",step:4}],$=()=>{f.push("/ui")};return(n,e)=>{const u=I("SshPre");return R(),N(T,{"sub-title":n.$t("ui.stepper.subtitle"),title:n.$t("ui.stepper.title"),class:"demo-stepper"},{toolbar:s(()=>[o(l(k),{label:n.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:e[0]||(e[0]=i=>n.$router.push("/ui"))},null,8,["label"])]),default:s(()=>[e[17]||(e[17]=t()),p("section",null,[p("h2",null,m(n.$t("ui.stepper.usage.basic")),1),e[6]||(e[6]=t()),p("div",x,[o(l(c),{steps:d,onComplete:$}),e[5]||(e[5]=t()),o(u,{language:"html-vue"},{default:s(()=>e[4]||(e[4]=[t(`
          <template>
            <Stepper :steps="steps" @complete="onFinish" />
          </template>

          <script setup lang="ts">
          import { Stepper } from "@prefabs.tech/vue3-ui";

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
        `)])),_:1})])]),e[18]||(e[18]=t()),p("section",null,[p("h2",null,m(n.$t("ui.stepper.usage.buttonProperties")),1),e[9]||(e[9]=t()),p("div",A,[o(l(c),{"next-button-properties":P,"previous-button-properties":g,steps:d}),e[8]||(e[8]=t()),o(u,{language:"html-vue"},{default:s(()=>e[7]||(e[7]=[t(`
          <template>
            <Stepper
              :next-button-properties="nextButtonProperties"
              :previous-button-properties="previousButtonProperties" 
              :steps="steps"
            />
          </template>

          <script setup lang="ts">
          import { Stepper } from "@prefabs.tech/vue3-ui";

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
        `)])),_:1})])]),e[19]||(e[19]=t()),p("section",null,[p("h2",null,m(n.$t("ui.stepper.usage.withSlot")),1),e[15]||(e[15]=t()),p("div",L,[o(l(c),{steps:d},{1:s(()=>[o(l(b),{modelValue:r.name,"onUpdate:modelValue":e[1]||(e[1]=i=>r.name=i),label:n.$t("ui.stepper.label.name"),placeholder:n.$t("ui.stepper.placeholder.name"),name:"name"},null,8,["modelValue","label","placeholder"])]),2:s(()=>[o(l(B),{modelValue:r.phone,"onUpdate:modelValue":e[2]||(e[2]=i=>r.phone=i),label:n.$t("ui.stepper.label.phone"),placeholder:n.$t("ui.stepper.placeholder.phone"),name:"phone"},null,8,["modelValue","label","placeholder"])]),3:s(()=>[o(l(b),{modelValue:r.price,"onUpdate:modelValue":e[3]||(e[3]=i=>r.price=i),label:n.$t("ui.stepper.label.price"),disabled:"",name:"price"},null,8,["modelValue","label"])]),4:s(()=>[t(m(n.$t("ui.stepper.usage.complete")),1)]),_:1}),e[14]||(e[14]=t()),o(u,{language:"html-vue"},{default:s(()=>e[13]||(e[13]=[t(`
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
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { TextInput, NumberInput } from "@prefabs.tech/vue3-form";
          import { Stepper } from "@prefabs.tech/vue3-ui";

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
        `)])),_:1})])]),e[20]||(e[20]=t()),o(w,{"events-data":v,"props-data":h,"props-table-title":n.$t("common.properties",{value:"StepperProperties"}),"slots-data":y},null,8,["props-table-title"]),e[21]||(e[21]=t()),o(u,{language:"html-vue"},{default:s(()=>e[16]||(e[16]=[t(`
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
    `)])),_:1})]),_:1},8,["sub-title","title"])}}});export{O as default};
