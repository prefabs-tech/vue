import{$ as V,M as L,C as S,O as F}from"./PrefabsTechVue3Form.es-B5mhzLCL.js";import{d as z,E as I,L as N,r as d,H as D,e as A,o as B,i as a,B as o,f as n,g as t,t as r,u as i,v as m,a7 as f,a as T,F as U,y as H}from"./index-OrS9uXRl.js";import{_ as K}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-BRcdnkYt.js";import{_ as j}from"./UiPage.vue_vue_type_style_index_0_lang-CS-Il0Is.js";import"./PrefabsTechVue3TanstackTable.es-D_Ewpddt.js";const q={class:"section-content"},G={class:"section-content"},J={class:"section-content"},Q={class:"label"},R={class:"value"},W={class:"section-content"},X={class:"section-content"},Y={class:"section-content"},Z={role:"heading"},tl=z({__name:"Index",setup(x){const{t:u}=I(),E=[{description:u("ui.modal.documentation.eventDescription.close"),name:"on:close",payload:"-"}],C=[{label:"Name",value:"Acer Nitro 5"},{label:"Category",value:"Laptop"},{label:"Color",value:"Black"}],h=[{default:"true",description:u("ui.modal.documentation.propsDescription.dismissOnClickOut"),prop:"dismissOnClickOut",type:"Boolean"},{default:"false",description:u("ui.modal.documentation.propsDescription.show"),prop:"show",type:"Boolean"},{default:"medium",description:u("ui.modal.documentation.propsDescription.size"),prop:"size",type:'"medium" | "large"'},{default:"-",description:u("ui.modal.documentation.propsDescription.title"),prop:"title",type:"String"}],O=[{description:u("ui.modal.documentation.slotDescription.default"),name:"default"},{description:u("ui.modal.documentation.slotDescription.footer"),name:"footer"},{description:u("ui.modal.documentation.slotDescription.header"),name:"header"}],v=N({email:d(),password:d()}),b=d(!1),M=d(!1),$=d(!1),g=d(!1),w=d(!1),k=d(!1);return(e,l)=>{const p=D("SshPre"),y=D("router-link");return B(),A(j,{"sub-title":e.$t("ui.modal.subtitle"),title:e.$t("ui.modal.title"),class:"demo"},{toolbar:a(()=>[t(i(m),{label:e.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=s=>e.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[l[45]||(l[45]=o()),n("section",null,[n("h2",null,r(e.$t("ui.modal.usage.basic")),1),l[19]||(l[19]=o()),n("div",q,[t(i(m),{label:e.$t("ui.modal.label.open"),onClick:l[1]||(l[1]=s=>$.value=!0)},null,8,["label"]),l[17]||(l[17]=o()),t(i(f),{show:$.value,"onOn:close":l[2]||(l[2]=s=>$.value=!1)},{default:a(()=>[o(r(e.$t("ui.modal.content")),1)]),_:1},8,["show"]),l[18]||(l[18]=o()),t(p,{language:"html-vue"},{default:a(()=>l[16]||(l[16]=[o(`
          <template>
            <ButtonElement
              label="Open"
              @click="showModal = true"
            />

            <Modal :show="showModal" @on:close="showModal = false" >
              Lorem ipsum...
            </Modal>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),l[46]||(l[46]=o()),n("section",null,[n("h2",null,r(e.$t("ui.modal.usage.withTitle")),1),l[23]||(l[23]=o()),n("div",G,[t(i(m),{label:e.$t("ui.modal.label.show"),onClick:l[3]||(l[3]=s=>k.value=!0)},null,8,["label"]),l[21]||(l[21]=o()),t(i(f),{show:k.value,title:e.$t("ui.modal.header.productDetail"),"onOn:close":l[4]||(l[4]=s=>k.value=!1)},{default:a(()=>[o(r(e.$t("ui.modal.content")),1)]),_:1},8,["show","title"]),l[22]||(l[22]=o()),t(p,{language:"html-vue"},{default:a(()=>l[20]||(l[20]=[o(`
          <template>
            <ButtonElement
              label="Show"
              @click="showModal = true"
            />

            <Modal
              :show="showModal"
              title="Product detail"
              @on:close="showModal = false"
            >
              Lorem ipsum...
            </Modal>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),l[47]||(l[47]=o()),n("section",null,[n("h2",null,r(e.$t("ui.modal.usage.disableDismiss")),1),l[28]||(l[28]=o()),n("div",J,[t(i(m),{label:e.$t("ui.modal.label.viewDetail"),onClick:l[5]||(l[5]=s=>b.value=!0)},null,8,["label"]),l[26]||(l[26]=o()),t(i(f),{"dismiss-on-click-out":!1,show:b.value,title:e.$t("ui.modal.header.productDetail"),"onOn:close":l[6]||(l[6]=s=>b.value=!1)},{default:a(()=>[(B(),T(U,null,H(C,(s,P)=>n("div",{key:P+"-"+s,class:"info"},[n("span",Q,r(s.label),1),l[24]||(l[24]=o()),n("span",R,r(" : "+s.value),1)])),64))]),_:1},8,["show","title"]),l[27]||(l[27]=o()),t(p,{language:"html-vue"},{default:a(()=>l[25]||(l[25]=[o(`
          <template>
            <ButtonElement
              label="View detail"
              @click="showModal = true"
            />

            <Modal
              :dismiss-on-click-out="false"
              :show="showModal"
              title="Product detail"
              @on:close="showModal = false"
            >
              <div
                v-for="(detail, index) in productDetail"
                :key="index + '-' + detail"
                class="info"
              >
                <span class="label">{{ detail.label }}</span>
                <span class="value">{{ " : " + detail.value }}</span>
              </div>
            </Modal>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const productDetail = [
            ...
          ];

          const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),l[48]||(l[48]=o()),n("section",null,[n("h2",null,r(e.$t("ui.modal.usage.size")),1),l[32]||(l[32]=o()),n("div",W,[t(i(m),{label:e.$t("ui.modal.label.show"),onClick:l[7]||(l[7]=s=>g.value=!0)},null,8,["label"]),l[30]||(l[30]=o()),t(i(f),{show:g.value,title:e.$t("ui.modal.header.productDetail"),size:"large","onOn:close":l[8]||(l[8]=s=>g.value=!1)},{default:a(()=>[o(r(e.$t("ui.modal.content")),1)]),_:1},8,["show","title"]),l[31]||(l[31]=o()),t(p,{language:"html-vue"},{default:a(()=>l[29]||(l[29]=[o(`
          <template>
            <ButtonElement
              label="Show"
              @click="showModal = true"
            />

            <Modal
              :show="showModal"
              size="large"
              title="Product detail"
              @on:close="showModal = false"
            >
              Lorem ipsum...
            </Modal>
          </template>

          <script setup lang="ts">
          import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),l[49]||(l[49]=o()),n("section",null,[n("h2",null,r(e.$t("ui.confirmationModal.usage.withI18n")),1),l[36]||(l[36]=o()),n("div",X,[t(i(m),{label:e.$t("ui.modal.label.show"),onClick:l[9]||(l[9]=s=>M.value=!0)},null,8,["label"]),l[34]||(l[34]=o()),t(i(f),{show:M.value,title:e.$t("ui.modal.header.productDetail"),"onOn:close":l[10]||(l[10]=s=>M.value=!1)},{default:a(()=>[o(r(e.$t("ui.modal.content")),1)]),_:1},8,["show","title"]),l[35]||(l[35]=o()),t(p,{language:"html-vue"},{default:a(()=>l[33]||(l[33]=[o(`
          <template>
            <ButtonElement
              :label="t('ui.modal.label.show')"
              @click="showModal = true"
            />

            <Modal
              :show="showModal"
              :title="t('ui.modal.header.productDetail')"
              @on:close="showModal = false"
            >
              {{ t("ui.modal.content") }}
            </Modal>
          </template>

          <script setup lang="ts">
          import { useI18n } from "@prefabs.tech/vue3-i18n";
          import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
          import { ref } from "vue";

          const { t } = useI18n();

          const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),l[50]||(l[50]=o()),n("section",null,[n("h2",null,r(e.$t("ui.confirmationModal.usage.slots")),1),l[44]||(l[44]=o()),n("div",Y,[t(i(m),{label:e.$t("ui.modal.label.login"),"icon-left":"pi pi-user",onClick:l[11]||(l[11]=s=>w.value=!0)},null,8,["label"]),l[42]||(l[42]=o()),t(i(f),{show:w.value,"onOn:close":l[15]||(l[15]=s=>w.value=!1)},{header:a(()=>[n("span",Z,r(e.$t("ui.modal.label.login")),1)]),footer:a(()=>[t(y,{to:"/form/password-input"},{default:a(()=>[o(r(e.$t("ui.modal.label.forgotPassword")),1)]),_:1})]),default:a(()=>[l[39]||(l[39]=o()),t(i(V),{class:"login-form"},{default:a(()=>[t(i(L),{modelValue:v.email,"onUpdate:modelValue":l[12]||(l[12]=s=>v.email=s),label:e.$t("form.label.email"),placeholder:e.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l[37]||(l[37]=o()),t(i(S),{modelValue:v.password,"onUpdate:modelValue":l[13]||(l[13]=s=>v.password=s),label:e.$t("form.label.password"),placeholder:e.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),l[38]||(l[38]=o()),t(i(F),{"submit-label":e.$t("ui.modal.label.login"),alignment:"filled",class:"login-actions",onCancel:l[14]||(l[14]=s=>w.value=!1)},null,8,["submit-label"])]),_:1}),l[40]||(l[40]=o())]),_:1},8,["show"]),l[43]||(l[43]=o()),t(p,{language:"html-vue"},{default:a(()=>l[41]||(l[41]=[o(`
          <template>
            <ButtonElement
              icon-left="pi pi-user"
              label="Login"
              @click="showModal = true"
            />

            <Modal :show="showModal" @on:close="showModal = false" >
              <template #header>
                <span role="heading">Login</span>
              </template>

              <Form>
                <Email
                  v-model="formData.email"
                  label="Email"
                  placeholder="Enter a email"
                />

                <Password
                  v-model="formData.password"
                  label="Password"
                  placeholder="Enter a password"
                />

                <FormActions
                  alignment="filled"
                  class="login-actions"
                  submit-label="Login"
                  @cancel="showSlotModal = false"
                />
              </Form>

              <template #footer>
                <router-link to="/form/password-input">
                  Forgot password?
                </router-link>
              </template>
            </Modal>
          </template>

          <script setup lang="ts">
          import { Email, Form, FormActions, Password } from "@prefabs.tech/vue3-form";
          import { ButtonElement, Modal } from "@prefabs.tech/vue3-ui";
          import { reactive, ref } from "vue";

          const formData = reactive({
            email: ref(),
            password: ref(),
          });

          const showModal = ref(false);
          <\/script>
        `)])),_:1})])]),l[51]||(l[51]=o()),t(K,{"events-data":E,"props-data":h,"props-table-title":e.$t("common.properties",{value:"ModalProperties"}),"slots-data":O},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{tl as default};
