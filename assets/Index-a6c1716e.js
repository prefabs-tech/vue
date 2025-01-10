import{$ as D,N as B,Y as C,L}from"./DzangolabVue3Form.es-e6467f04.js";import{d as V,p as F,j as d,K as M,o as $,c as P,w as s,L as a,C as l,M as u,f as n,E as i,aq as m,X as p,a as z,F as I,b as N}from"./index-8e1c3ab6-d459558c.js";import{_ as y}from"./UiPage.vue_vue_type_style_index_0_lang-cc50959c.js";import"./index-55edaaac.js";const O={class:"section-content"},S={class:"section-content"},A={class:"section-content"},T={class:"label"},U={class:"value"},Y={class:"section-content"},_={class:"section-content"},j={role:"heading"},J=V({__name:"Index",setup(q){const f=F({email:d(),password:d()}),k=[{label:"Name",value:"Acer Nitro 5"},{label:"Category",value:"Laptop"},{label:"Color",value:"Black"}],v=d(!1),w=d(!1),b=d(!1),c=d(!1),h=d(!1);return(o,e)=>{const g=M("router-link"),r=M("SshPre");return $(),P(y,{title:o.$t("ui.modal.title"),class:"demo"},{toolbar:s(()=>[a(g,{to:{name:"ui"},class:"back"},{default:s(()=>[l(u(o.$t("common.back")),1)]),_:1})]),default:s(()=>[l(),n("section",null,[n("h2",null,u(o.$t("ui.modal.usage.basic")),1),l(),n("div",O,[a(i(m),{label:o.$t("ui.modal.label.open"),onClick:e[0]||(e[0]=t=>b.value=!0)},null,8,["label"]),l(),a(i(p),{show:b.value,"onOn:close":e[1]||(e[1]=t=>b.value=!1)},{default:s(()=>[l(u(o.$t("ui.modal.content")),1)]),_:1},8,["show"]),l(),a(r,{language:"html-vue"},{default:s(()=>[l(`
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
          import { ButtonElement, Modal } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const showModal = ref(false);
          <\/script>
        `)]),_:1}),l()])]),l(),n("section",null,[n("h2",null,u(o.$t("ui.modal.usage.withTitle")),1),l(),n("div",S,[a(i(m),{label:o.$t("ui.modal.label.show"),onClick:e[2]||(e[2]=t=>h.value=!0)},null,8,["label"]),l(),a(i(p),{show:h.value,title:o.$t("ui.modal.header.productDetail"),"onOn:close":e[3]||(e[3]=t=>h.value=!1)},{default:s(()=>[l(u(o.$t("ui.modal.content")),1)]),_:1},8,["show","title"]),l(),a(r,{language:"html-vue"},{default:s(()=>[l(`
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
          import { ButtonElement, Modal } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const showModal = ref(false);
          <\/script>
        `)]),_:1}),l()])]),l(),n("section",null,[n("h2",null,u(o.$t("ui.modal.usage.disableDismiss")),1),l(),n("div",A,[a(i(m),{label:o.$t("ui.modal.label.viewDetail"),onClick:e[4]||(e[4]=t=>v.value=!0)},null,8,["label"]),l(),a(i(p),{"dismiss-on-click-out":!1,show:v.value,title:o.$t("ui.modal.header.productDetail"),"onOn:close":e[5]||(e[5]=t=>v.value=!1)},{default:s(()=>[($(),z(I,null,N(k,(t,E)=>n("div",{key:E+"-"+t,class:"info"},[n("span",T,u(t.label),1),l(),n("span",U,u(" : "+t.value),1)])),64))]),_:1},8,["show","title"]),l(),a(r,{language:"html-vue"},{default:s(()=>[l(`
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
          import { ButtonElement, Modal } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const productDetail = [
            ...
          ];

          const showModal = ref(false);
          <\/script>
        `)]),_:1}),l()])]),l(),n("section",null,[n("h2",null,u(o.$t("ui.confirmationModal.usage.withI18n")),1),l(),n("div",Y,[a(i(m),{label:o.$t("ui.modal.label.show"),onClick:e[6]||(e[6]=t=>w.value=!0)},null,8,["label"]),l(),a(i(p),{show:w.value,title:o.$t("ui.modal.header.productDetail"),"onOn:close":e[7]||(e[7]=t=>w.value=!1)},{default:s(()=>[l(u(o.$t("ui.modal.content")),1)]),_:1},8,["show","title"]),l(),a(r,{language:"html-vue"},{default:s(()=>[l(`
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
          import { useI18n } from "@dzangolab/vue3-i18n";
          import { ButtonElement, Modal } from "@dzangolab/vue3-ui";
          import { ref } from "vue";

          const { t } = useI18n();

          const showModal = ref(false);
          <\/script>
        `)]),_:1}),l()])]),l(),n("section",null,[n("h2",null,u(o.$t("ui.confirmationModal.usage.slots")),1),l(),n("div",_,[a(i(m),{label:o.$t("ui.modal.label.login"),"icon-left":"pi pi-user",onClick:e[8]||(e[8]=t=>c.value=!0)},null,8,["label"]),l(),a(i(p),{show:c.value,"onOn:close":e[12]||(e[12]=t=>c.value=!1)},{header:s(()=>[n("span",j,u(o.$t("ui.modal.label.login")),1)]),footer:s(()=>[a(g,{to:"/form/password-input"},{default:s(()=>[l(u(o.$t("ui.modal.label.forgotPassword")),1)]),_:1})]),default:s(()=>[l(),a(i(D),null,{default:s(()=>[a(i(B),{modelValue:f.email,"onUpdate:modelValue":e[9]||(e[9]=t=>f.email=t),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l(),a(i(C),{modelValue:f.password,"onUpdate:modelValue":e[10]||(e[10]=t=>f.password=t),label:o.$t("form.label.password"),placeholder:o.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),l(),a(i(L),{"submit-label":o.$t("ui.modal.label.login"),alignment:"filled",class:"login-actions",onCancel:e[11]||(e[11]=t=>c.value=!1)},null,8,["submit-label"])]),_:1}),l()]),_:1},8,["show"]),l(),a(r,{language:"html-vue"},{default:s(()=>[l(`
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
          import { Email, Form, FormActions, Password } from "@dzangolab/vue3-form";
          import { ButtonElement, Modal } from "@dzangolab/vue3-ui";
          import { reactive, ref } from "vue";

          const formData = reactive({
            email: ref(),
            password: ref(),
          });

          const showModal = ref(false);
          <\/script>
        `)]),_:1}),l()])])]),_:1},8,["title"])}}});export{J as default};
