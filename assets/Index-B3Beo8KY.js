import{$ as y,M as P,C as V,O as F}from"./PrefabsTechVue3Form.es-DceiuSry.js";import{d as L,M as S,r as d,J as g,e as I,o as k,i as a,C as e,f as s,g as t,t as r,u as i,v as u,a7 as p,a as N,F as T,z as A}from"./index-B9AZRdEG.js";import{_ as z}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-Dt5YWwdh.js";import{_ as U}from"./UiPage.vue_vue_type_style_index_0_lang-BNR9-AuJ.js";import"./PrefabsTechVue3TanstackTable.es-DFgNjZel.js";const q={class:"section-content"},J={class:"section-content"},Q={class:"section-content"},j={class:"label"},G={class:"value"},H={class:"section-content"},K={class:"section-content"},R={role:"heading"},_=L({__name:"Index",setup(W){const h=[{description:"Emitted when the modal is requested to close (via close icon or outside click).",name:"on:close",payload:"-"}],C=[{label:"Name",value:"Acer Nitro 5"},{label:"Category",value:"Laptop"},{label:"Color",value:"Black"}],D=[{default:"true",description:"Closes the modal when clicking outside the modal content.",prop:"dismissOnClickOut",type:"Boolean"},{default:"false",description:"Controls the visibility of the modal.",prop:"show",type:"Boolean"},{default:"-",description:"Title for the modal. Override by `header` slot if provided.",prop:"title",type:"String"}],B=[{description:"Main content of the modal body.",name:"default"},{description:"Footer section of the modal. Placed below the content.",name:"footer"},{description:"Custom header content. Overrides `title` if provided.",name:"header"}],f=S({email:d(),password:d()}),w=d(!1),b=d(!1),M=d(!1),v=d(!1),$=d(!1);return(o,l)=>{const m=g("SshPre"),E=g("router-link");return k(),I(U,{"sub-title":o.$t("ui.modal.subtitle"),title:o.$t("ui.modal.title"),class:"demo"},{toolbar:a(()=>[t(i(u),{label:o.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:l[0]||(l[0]=n=>o.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[l[39]||(l[39]=e()),s("section",null,[s("h2",null,r(o.$t("ui.modal.usage.basic")),1),l[17]||(l[17]=e()),s("div",q,[t(i(u),{label:o.$t("ui.modal.label.open"),onClick:l[1]||(l[1]=n=>M.value=!0)},null,8,["label"]),l[15]||(l[15]=e()),t(i(p),{show:M.value,"onOn:close":l[2]||(l[2]=n=>M.value=!1)},{default:a(()=>[e(r(o.$t("ui.modal.content")),1)]),_:1},8,["show"]),l[16]||(l[16]=e()),t(m,{language:"html-vue"},{default:a(()=>l[14]||(l[14]=[e(`
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
        `)])),_:1})])]),l[40]||(l[40]=e()),s("section",null,[s("h2",null,r(o.$t("ui.modal.usage.withTitle")),1),l[21]||(l[21]=e()),s("div",J,[t(i(u),{label:o.$t("ui.modal.label.show"),onClick:l[3]||(l[3]=n=>$.value=!0)},null,8,["label"]),l[19]||(l[19]=e()),t(i(p),{show:$.value,title:o.$t("ui.modal.header.productDetail"),"onOn:close":l[4]||(l[4]=n=>$.value=!1)},{default:a(()=>[e(r(o.$t("ui.modal.content")),1)]),_:1},8,["show","title"]),l[20]||(l[20]=e()),t(m,{language:"html-vue"},{default:a(()=>l[18]||(l[18]=[e(`
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
        `)])),_:1})])]),l[41]||(l[41]=e()),s("section",null,[s("h2",null,r(o.$t("ui.modal.usage.disableDismiss")),1),l[26]||(l[26]=e()),s("div",Q,[t(i(u),{label:o.$t("ui.modal.label.viewDetail"),onClick:l[5]||(l[5]=n=>w.value=!0)},null,8,["label"]),l[24]||(l[24]=e()),t(i(p),{"dismiss-on-click-out":!1,show:w.value,title:o.$t("ui.modal.header.productDetail"),"onOn:close":l[6]||(l[6]=n=>w.value=!1)},{default:a(()=>[(k(),N(T,null,A(C,(n,O)=>s("div",{key:O+"-"+n,class:"info"},[s("span",j,r(n.label),1),l[22]||(l[22]=e()),s("span",G,r(" : "+n.value),1)])),64))]),_:1},8,["show","title"]),l[25]||(l[25]=e()),t(m,{language:"html-vue"},{default:a(()=>l[23]||(l[23]=[e(`
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
        `)])),_:1})])]),l[42]||(l[42]=e()),s("section",null,[s("h2",null,r(o.$t("ui.confirmationModal.usage.withI18n")),1),l[30]||(l[30]=e()),s("div",H,[t(i(u),{label:o.$t("ui.modal.label.show"),onClick:l[7]||(l[7]=n=>b.value=!0)},null,8,["label"]),l[28]||(l[28]=e()),t(i(p),{show:b.value,title:o.$t("ui.modal.header.productDetail"),"onOn:close":l[8]||(l[8]=n=>b.value=!1)},{default:a(()=>[e(r(o.$t("ui.modal.content")),1)]),_:1},8,["show","title"]),l[29]||(l[29]=e()),t(m,{language:"html-vue"},{default:a(()=>l[27]||(l[27]=[e(`
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
        `)])),_:1})])]),l[43]||(l[43]=e()),s("section",null,[s("h2",null,r(o.$t("ui.confirmationModal.usage.slots")),1),l[38]||(l[38]=e()),s("div",K,[t(i(u),{label:o.$t("ui.modal.label.login"),"icon-left":"pi pi-user",onClick:l[9]||(l[9]=n=>v.value=!0)},null,8,["label"]),l[36]||(l[36]=e()),t(i(p),{show:v.value,"onOn:close":l[13]||(l[13]=n=>v.value=!1)},{header:a(()=>[s("span",R,r(o.$t("ui.modal.label.login")),1)]),footer:a(()=>[t(E,{to:"/form/password-input"},{default:a(()=>[e(r(o.$t("ui.modal.label.forgotPassword")),1)]),_:1})]),default:a(()=>[l[33]||(l[33]=e()),t(i(y),{class:"login-form"},{default:a(()=>[t(i(P),{modelValue:f.email,"onUpdate:modelValue":l[10]||(l[10]=n=>f.email=n),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l[31]||(l[31]=e()),t(i(V),{modelValue:f.password,"onUpdate:modelValue":l[11]||(l[11]=n=>f.password=n),label:o.$t("form.label.password"),placeholder:o.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),l[32]||(l[32]=e()),t(i(F),{"submit-label":o.$t("ui.modal.label.login"),alignment:"filled",class:"login-actions",onCancel:l[12]||(l[12]=n=>v.value=!1)},null,8,["submit-label"])]),_:1}),l[34]||(l[34]=e())]),_:1},8,["show"]),l[37]||(l[37]=e()),t(m,{language:"html-vue"},{default:a(()=>l[35]||(l[35]=[e(`
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
        `)])),_:1})])]),l[44]||(l[44]=e()),t(z,{"events-data":h,"props-data":D,"props-table-title":o.$t("common.properties",{value:"ModalProperties"}),"slots-data":B},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{_ as default};
