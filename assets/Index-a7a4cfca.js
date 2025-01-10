import{d as E,j as d,K as h,o as m,c as f,w as i,L as a,C as n,M as r,f as o,E as s,aq as u,av as v,g as b}from"./index-8e1c3ab6-d459558c.js";import{_ as L}from"./UiPage.vue_vue_type_style_index_0_lang-31abb775.js";const z={class:"section-content"},D={class:"container"},O={class:"section-content"},I={class:"container"},T={class:"section-content"},N={class:"container"},V={class:"section-content"},S={class:"container"},U={class:"section-content"},H={class:"container"},P={class:"section-content"},j={class:"container"},F=E({__name:"Index",setup(q){const g=d(void 0),C=d(!1),p=d(!1),w=d(!1),y=d(!1),M=d(!1),$=d(!1),k=()=>{g.value=new Date,$.value=!1};return(l,e)=>{const B=h("router-link"),c=h("SshPre");return m(),f(L,{title:l.$t("ui.confirmationModal.title"),class:"demo"},{toolbar:i(()=>[a(B,{to:{name:"ui"},class:"back"},{default:i(()=>[n(r(l.$t("common.back")),1)]),_:1})]),default:i(()=>[n(),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.basic")),1),n(),o("div",z,[o("div",D,[a(s(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:e[0]||(e[0]=t=>$.value=!0)},null,8,["label"]),n(),o("span",null,r(g.value),1)]),n(),$.value?(m(),f(s(v),{key:0,"onOn:close":e[1]||(e[1]=t=>$.value=!1),"onOn:confirm":e[2]||(e[2]=t=>k())})):b("",!0),n(),a(c,{language:"html-vue"},{default:i(()=>[n(`
          <template>
            <ButtonElement
              label="Confirm"
              severity="success"
              @click="showModal = true"
            />

            <span>{{ currentTime }}</span>
  
            <ConfirmationModal
              v-if="showModal"
              @on:close="showModal = false"
              @on:confirm="onConfirm()"
            />
          </template>
  
          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";
  
            const currentTime = ref(undefined as unknown as Date);
            const showModal = ref(false);
  
            const onConfirm = () => {
              currentTime.value = new Date();
              showModal.value = false;
            };
          <\/script>
        `)]),_:1}),n()])]),n(),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.withDivider")),1),n(),o("div",O,[o("div",I,[a(s(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:e[3]||(e[3]=t=>C.value=!0)},null,8,["label"])]),n(),C.value?(m(),f(s(v),{key:0,divider:"","onOn:close":e[4]||(e[4]=t=>C.value=!1),"onOn:confirm":e[5]||(e[5]=t=>C.value=!1)})):b("",!0),n(),a(c,{language:"html-vue"},{default:i(()=>[n(`
          <template>
            <ButtonElement
              label="Confirm"
              severity="success"
              @click="showModal = true"
            />

            <ConfirmationModal
              v-if="showModal"
              divider
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            />
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `)]),_:1}),n()])]),n(),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.disableHeader")),1),n(),o("div",T,[o("div",N,[a(s(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:e[6]||(e[6]=t=>y.value=!0)},null,8,["label"])]),n(),y.value?(m(),f(s(v),{key:0,"disable-header":"","onOn:close":e[7]||(e[7]=t=>y.value=!1),"onOn:confirm":e[8]||(e[8]=t=>y.value=!1)})):b("",!0),n(),a(c,{language:"html-vue"},{default:i(()=>[n(`
          <template>
            <ButtonElement
              label="Confirm"
              severity="success"
              @click="showModal = true"
            />

            <ConfirmationModal
              v-if="showModal"
              disable-header
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            />
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `)]),_:1}),n()])]),n(),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.disableBody")),1),n(),o("div",V,[o("div",S,[a(s(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:e[9]||(e[9]=t=>w.value=!0)},null,8,["label"])]),n(),w.value?(m(),f(s(v),{key:0,"disable-body":"","onOn:close":e[10]||(e[10]=t=>w.value=!1),"onOn:confirm":e[11]||(e[11]=t=>w.value=!1)})):b("",!0),n(),a(c,{language:"html-vue"},{default:i(()=>[n(`
          <template>
            <ButtonElement
              label="Confirm"
              severity="success"
              @click="showModal = true"
            />

            <ConfirmationModal
              v-if="showModal"
              disable-body
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            />
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `)]),_:1}),n()])]),n(),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.slots")),1),n(),o("div",U,[o("div",H,[a(s(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:e[12]||(e[12]=t=>p.value=!0)},null,8,["label"])]),n(),p.value?(m(),f(s(v),{key:0,onClick:e[15]||(e[15]=t=>p.value=!1)},{header:i(()=>[o("span",null,r(l.$t("ui.confirmationModal.headerContent.deleteUser")),1)]),body:i(()=>[o("p",null,r(l.$t("ui.confirmationModal.bodyContent.confirmDelete")),1)]),footer:i(()=>[a(s(u),{size:"small",label:l.$t("ui.confirmationModal.buttonLabel.cancel"),severity:"secondary",onClick:e[13]||(e[13]=t=>p.value=!1)},null,8,["label"]),n(),a(s(u),{size:"small",label:l.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger",onClick:e[14]||(e[14]=t=>p.value=!1)},null,8,["label"])]),_:1})):b("",!0),n(),a(c,{language:"html-vue"},{default:i(()=>[n(`
          <template>
            <ButtonElement
              label="Confirm"
              severity="success"
              @click="showModal = true"
            />

            <ConfirmationModal
              v-if="showModal"
              @on:close="showModal = false"
            >
              <template #header>
                <span>Delete user</span>
              </template>

              <template #body>
                <p>Are you sure to delete user?</p>
              </template>

              <template #footer>
                <ButtonElement
                  label="Cancel"
                  severity="secondary"
                  @click="showModal = false"
                />
                <ButtonElement
                  label="Confirm"
                  severity="danger"
                  @click="showModal = false"
                />
              </template>
            </ConfirmationModal>
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `)]),_:1}),n()])]),n(),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.withI18n")),1),n(),o("div",P,[o("div",j,[a(s(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:e[16]||(e[16]=t=>M.value=!0)},null,8,["label"]),n(),o("span",null,r(g.value),1)]),n(),M.value?(m(),f(s(v),{key:0,"onOn:close":e[19]||(e[19]=t=>M.value=!1)},{header:i(()=>[o("span",null,r(l.$t("ui.confirmationModal.headerContent.deleteUser")),1)]),body:i(()=>[o("p",null,r(l.$t("ui.confirmationModal.bodyContent.confirmDelete")),1)]),footer:i(()=>[a(s(u),{size:"small",label:l.$t("ui.confirmationModal.buttonLabel.cancel"),severity:"secondary",onClick:e[17]||(e[17]=t=>M.value=!1)},null,8,["label"]),n(),a(s(u),{size:"small",label:l.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger",onClick:e[18]||(e[18]=t=>M.value=!1)},null,8,["label"])]),_:1})):b("",!0),n(),a(c,{language:"html-vue"},{default:i(()=>[n(`
          <template>
            <ButtonElement
              :label="t('ui.confirmationModal.buttonLabel.confirm')"
              severity="success"
              @click="showModal = true"
            />

            <ConfirmationModal
              v-if="showModal"
              @on:close="showModal = false"
            >
              <template #header>
                <span>
                  {{ t("ui.confirmationModal.headerContent.deleteUser") }}
                </span>
              </template>

              <template #body>
                <p>
                  {{ t("ui.confirmationModal.bodyContent.confirmDelete") }}
                </p>
              </template>

              <template #footer>
                <ButtonElement
                  :label="t('ui.confirmationModal.buttonLabel.cancel')"
                  severity="secondary"
                  @click="showI18nModal = false"
                />
                <ButtonElement
                  :label="t('ui.confirmationModal.buttonLabel.delete')"
                  severity="danger"
                  @click="showI18nModal = false"
                />
              </template>
            </ConfirmationModal>
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";
            import { useI18n } from "@dzangolab/vue3-i18n";

            const showModal = ref(false);
            const { t } = useI18n();
          <\/script>
        `)]),_:1}),n()])])]),_:1},8,["title"])}}});export{F as default};
