import{e as D,J as B,n as C,t as V}from"./DzangolabVue3Form.es-4fb0bebc.js";import{d as F,p as L,j as d,K as M,o as $,c as P,w as s,L as a,C as l,M as u,f as n,E as i,au as p,X as f,a as S,F as z,b as y}from"./index-137faed7-55cf5996.js";import{_ as I}from"./UiPage.vue_vue_type_style_index_0_lang-34e8fabd.js";import"./index-782bd33e.js";const O={class:"section-content"},N={class:"section-content"},A={class:"section-content"},T={class:"label"},J={class:"value"},U={class:"section-content"},j={class:"section-content"},K={role:"heading"},R=F({__name:"Index",setup(X){const v=L({email:d(),password:d()}),k=[{label:"Name",value:"Acer Nitro 5"},{label:"Category",value:"Laptop"},{label:"Color",value:"Black"}],c=d(!1),w=d(!1),b=d(!1),r=d(!1),h=d(!1);return(o,e)=>{const g=M("router-link"),m=M("SshPre");return $(),P(I,{title:o.$t("ui.modal.title"),class:"demo"},{toolbar:s(()=>[a(g,{to:{name:"ui"},class:"back"},{default:s(()=>[l(u(o.$t("common.back")),1)]),_:1})]),default:s(()=>[l(),n("section",null,[n("h2",null,u(o.$t("ui.modal.usage.basic")),1),l(),n("div",O,[a(m,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l(),a(i(p),{label:o.$t("ui.modal.label.open"),onClick:e[0]||(e[0]=t=>b.value=!0)},null,8,["label"]),l(),a(i(f),{show:b.value,"onOn:close":e[1]||(e[1]=t=>b.value=!1)},{default:s(()=>[l(u(o.$t("ui.modal.content")),1)]),_:1},8,["show"])])]),l(),n("section",null,[n("h2",null,u(o.$t("ui.modal.usage.withTitle")),1),l(),n("div",N,[a(m,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l(),a(i(p),{label:o.$t("ui.modal.label.show"),onClick:e[2]||(e[2]=t=>h.value=!0)},null,8,["label"]),l(),a(i(f),{show:h.value,title:o.$t("ui.modal.header.productDetail"),"onOn:close":e[3]||(e[3]=t=>h.value=!1)},{default:s(()=>[l(u(o.$t("ui.modal.content")),1)]),_:1},8,["show","title"])])]),l(),n("section",null,[n("h2",null,u(o.$t("ui.modal.usage.disableDismiss")),1),l(),n("div",A,[a(m,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l(),a(i(p),{label:o.$t("ui.modal.label.viewDetail"),onClick:e[4]||(e[4]=t=>c.value=!0)},null,8,["label"]),l(),a(i(f),{"dismiss-on-click-out":!1,show:c.value,title:o.$t("ui.modal.header.productDetail"),"onOn:close":e[5]||(e[5]=t=>c.value=!1)},{default:s(()=>[($(),S(z,null,y(k,(t,E)=>n("div",{key:E+"-"+t,class:"info"},[n("span",T,u(t.label),1),l(),n("span",J,u(" : "+t.value),1)])),64))]),_:1},8,["show","title"])])]),l(),n("section",null,[n("h2",null,u(o.$t("ui.confirmationModal.usage.withI18n")),1),l(),n("div",U,[a(m,{language:"html-vue"},{default:s(()=>[l(`
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
        `)]),_:1}),l(),a(i(p),{label:o.$t("ui.modal.label.show"),onClick:e[6]||(e[6]=t=>w.value=!0)},null,8,["label"]),l(),a(i(f),{show:w.value,title:o.$t("ui.modal.header.productDetail"),"onOn:close":e[7]||(e[7]=t=>w.value=!1)},{default:s(()=>[l(u(o.$t("ui.modal.content")),1)]),_:1},8,["show","title"])])]),l(),n("section",null,[n("h2",null,u(o.$t("ui.confirmationModal.usage.slots")),1),l(),n("div",j,[a(m,{language:"html-vue"},{default:s(()=>[l(`
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
                  @submit="showSlotModal = false"
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
        `)]),_:1}),l(),a(i(p),{label:o.$t("ui.modal.label.login"),"icon-left":"pi pi-user",onClick:e[8]||(e[8]=t=>r.value=!0)},null,8,["label"]),l(),a(i(f),{show:r.value,"onOn:close":e[13]||(e[13]=t=>r.value=!1)},{header:s(()=>[n("span",K,u(o.$t("ui.modal.label.login")),1)]),footer:s(()=>[a(g,{to:"/form/password-input"},{default:s(()=>[l(u(o.$t("ui.modal.label.forgotPassword")),1)]),_:1})]),default:s(()=>[l(),a(i(D),null,{default:s(()=>[a(i(B),{modelValue:v.email,"onUpdate:modelValue":e[9]||(e[9]=t=>v.email=t),label:o.$t("form.label.email"),placeholder:o.$t("form.placeholder.email")},null,8,["modelValue","label","placeholder"]),l(),a(i(C),{modelValue:v.password,"onUpdate:modelValue":e[10]||(e[10]=t=>v.password=t),label:o.$t("form.label.password"),placeholder:o.$t("form.placeholder.password")},null,8,["modelValue","label","placeholder"]),l(),a(i(V),{"submit-label":o.$t("ui.modal.label.login"),alignment:"filled",class:"login-actions",onCancel:e[11]||(e[11]=t=>r.value=!1),onSubmit:e[12]||(e[12]=t=>r.value=!1)},null,8,["submit-label"])]),_:1}),l()]),_:1},8,["show"])])])]),_:1},8,["title"])}}});export{R as default};
