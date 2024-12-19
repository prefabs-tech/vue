import{i as b,F as y}from"./DzangolabVue3Form.es-aac43f24.js";import{d as B,Z as S,p as V,j as m,K as h,o as C,c as _,w as n,L as o,C as e,M as i,f as l,E as p,aB as d}from"./index-66214709-ea91fece.js";import{_ as D}from"./UiPage.vue_vue_type_style_index_0_lang-a2f0c891.js";import"./index-d21a9980.js";const k={class:"section-content"},I={class:"section-content"},w={class:"section-content"},T=B({__name:"Index",setup(N){const f=S(),a=V({name:null,phone:null,price:"$50"}),v=m({iconRight:"pi pi-chevron-right",label:"Next",severity:"primary",variant:"filled"}),P=m({iconLeft:"pi pi-chevron-left",label:"Back",severity:"secondary",variant:"filled"}),u=m([{content:"Please enter personal details",label:"Personal",step:1},{content:"Please enter contact details",label:"Contact",step:2},{content:"Please enter payment details",label:"Payment",step:3},{content:"Do you wish to continue?",label:"Confirmation",step:4}]),g=()=>{f.push("/ui")};return(t,s)=>{const $=h("router-link"),c=h("SshPre");return C(),_(D,{title:t.$t("ui.stepper.title"),class:"demo"},{toolbar:n(()=>[o($,{to:{name:"ui"},class:"back"},{default:n(()=>[e(i(t.$t("common.back")),1)]),_:1})]),default:n(()=>[e(),l("section",null,[l("h2",null,i(t.$t("ui.stepper.usage.basic")),1),e(),l("div",k,[o(c,{language:"html-vue"},{default:n(()=>[e(`
          <template>
            <Stepper :steps="steps" @complete="onFinish" />
          </template>

          <script setup lang="ts">
          import { Stepper } from "@dzangolab/vue3-ui";

          import { useRouter } from "vue-router";

          const router = useRouter();

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

          const onFinish = () => {
            router.push("/ui");
          };
          <\/script>
        `)]),_:1}),e(),o(p(d),{steps:u.value,onComplete:g},null,8,["steps"])])]),e(),l("section",null,[l("h2",null,i(t.$t("ui.stepper.usage.buttonProperties")),1),e(),l("div",I,[o(c,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e(),o(p(d),{"next-button-properties":v.value,"previous-button-properties":P.value,steps:u.value},null,8,["next-button-properties","previous-button-properties","steps"])])]),e(),l("section",null,[l("h2",null,i(t.$t("ui.stepper.usage.withSlot")),1),e(),l("div",w,[o(c,{language:"html-vue"},{default:n(()=>[e(`
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
        `)]),_:1}),e(),o(p(d),{steps:u.value},{1:n(()=>[o(p(b),{modelValue:a.name,"onUpdate:modelValue":s[0]||(s[0]=r=>a.name=r),label:t.$t("ui.stepper.label.name"),placeholder:t.$t("ui.stepper.placeholder.name"),name:"name"},null,8,["modelValue","label","placeholder"])]),2:n(()=>[o(p(y),{modelValue:a.phone,"onUpdate:modelValue":s[1]||(s[1]=r=>a.phone=r),label:t.$t("ui.stepper.label.phone"),placeholder:t.$t("ui.stepper.placeholder.phone"),name:"phone"},null,8,["modelValue","label","placeholder"])]),3:n(()=>[o(p(b),{modelValue:a.price,"onUpdate:modelValue":s[2]||(s[2]=r=>a.price=r),label:t.$t("ui.stepper.label.price"),disabled:"",name:"price"},null,8,["modelValue","label"])]),4:n(()=>[e(i(t.$t("ui.stepper.usage.complete")),1)]),_:1},8,["steps"])])])]),_:1},8,["title"])}}});export{T as default};
