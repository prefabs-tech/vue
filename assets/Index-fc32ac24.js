import{d as E,j as d,K as g,o as m,c as f,w as i,L as a,C as e,M as r,f as o,E as s,au as u,av as c,g as p}from"./index-137faed7-55cf5996.js";import{_ as L}from"./UiPage.vue_vue_type_style_index_0_lang-1f543b0e.js";const O={class:"section-content"},z={class:"container"},D={class:"section-content"},I={class:"container"},N={class:"section-content"},T={class:"container"},V={class:"section-content"},S={class:"container"},U={class:"section-content"},H={class:"container"},P={class:"section-content"},j={class:"container"},F=E({__name:"Index",setup(A){const b=d(void 0),M=d(!1),y=d(!1),w=d(!1),C=d(!1),$=d(!1),h=d(!1),k=()=>{b.value=new Date,h.value=!1};return(l,n)=>{const B=g("router-link"),v=g("SshPre");return m(),f(L,{title:l.$t("ui.confirmationModal.title"),class:"demo"},{toolbar:i(()=>[a(B,{to:{name:"ui"},class:"back"},{default:i(()=>[e(r(l.$t("common.back")),1)]),_:1})]),default:i(()=>[e(),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.basic")),1),e(),o("div",O,[a(v,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <div>
              <ButtonElement
                label="Confirm"
                severity="success"
                @click="showModal = true"
              />
              <span>`+r(b.value)+`</span>
            </div>

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
        `,1)]),_:1}),e(),o("div",z,[a(s(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[0]||(n[0]=t=>h.value=!0)},null,8,["label"]),e(),o("span",null,r(b.value),1)]),e(),h.value?(m(),f(s(c),{key:0,"onOn:close":n[1]||(n[1]=t=>h.value=!1),"onOn:confirm":n[2]||(n[2]=t=>k())})):p("",!0)])]),e(),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.withDivider")),1),e(),o("div",D,[a(v,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <div>
              <ButtonElement
                label="Confirm"
                severity="success"
                @click="showModal = true"
              />
            </div>

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
        `)]),_:1}),e(),o("div",I,[a(s(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[3]||(n[3]=t=>M.value=!0)},null,8,["label"])]),e(),M.value?(m(),f(s(c),{key:0,divider:"","onOn:close":n[4]||(n[4]=t=>M.value=!1),"onOn:confirm":n[5]||(n[5]=t=>M.value=!1)})):p("",!0)])]),e(),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.disableHeader")),1),e(),o("div",N,[a(v,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <div>
              <ButtonElement
                label="Confirm"
                severity="success"
                @click="showModal = true"
              />
            </div>

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
        `)]),_:1}),e(),o("div",T,[a(s(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[6]||(n[6]=t=>C.value=!0)},null,8,["label"])]),e(),C.value?(m(),f(s(c),{key:0,"disable-header":"","onOn:close":n[7]||(n[7]=t=>C.value=!1),"onOn:confirm":n[8]||(n[8]=t=>C.value=!1)})):p("",!0)])]),e(),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.disableBody")),1),e(),o("div",V,[a(v,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <div>
              <ButtonElement
                label="Confirm"
                severity="success"
                @click="showModal = true"
              />
            </div>

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
        `)]),_:1}),e(),o("div",S,[a(s(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[9]||(n[9]=t=>w.value=!0)},null,8,["label"])]),e(),w.value?(m(),f(s(c),{key:0,"disable-body":"","onOn:close":n[10]||(n[10]=t=>w.value=!1),"onOn:confirm":n[11]||(n[11]=t=>w.value=!1)})):p("",!0)])]),e(),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.slots")),1),e(),o("div",U,[a(v,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <div>
              <ButtonElement
                label="Confirm"
                severity="success"
                @click="showModal = true"
              />
            </div>

            <ConfirmationModal
              v-if="showModal"
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            >
              <template #header>
                <span>Delete user</span>
              </template>

              <template #body>
                <p>Are you sure to delete user?</p>
              </template>

              <template #footer>
                <ButtonElement label="Cancel" severity="secondary" />
                <ButtonElement label="Confirm" severity="danger" />
              </template>
            </ConfirmationModal>
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@dzangolab/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `)]),_:1}),e(),o("div",H,[a(s(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[12]||(n[12]=t=>y.value=!0)},null,8,["label"]),e(),o("span",null,r(b.value),1)]),e(),y.value?(m(),f(s(c),{key:0,"onOn:close":n[13]||(n[13]=t=>y.value=!1),"onOn:confirm":n[14]||(n[14]=t=>y.value=!1)},{header:i(()=>[o("span",null,r(l.$t("ui.confirmationModal.headerContent.deleteUser")),1)]),body:i(()=>[o("p",null,r(l.$t("ui.confirmationModal.bodyContent.confirmDelete")),1)]),footer:i(()=>[a(s(u),{size:"small",label:l.$t("ui.confirmationModal.buttonLabel.cancel"),severity:"secondary"},null,8,["label"]),e(),a(s(u),{size:"small",label:l.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger"},null,8,["label"])]),_:1})):p("",!0)])]),e(),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.withI18n")),1),e(),o("div",P,[a(v,{language:"html-vue"},{default:i(()=>[e(`
          <template>
            <div>
              <ButtonElement
                :label="t('ui.confirmationModal.buttonLabel.confirm')"
                severity="success"
                @click="showModal = true"
              />
            </div>

            <ConfirmationModal
              v-if="showModal"
              @on:close="showModal = false"
              @on:confirm="showModal = false"
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
                  :label="t('ui.confirmationModal.buttonLabel.cancel')" severity="secondary"
                />
                <ButtonElement
                  :label="t('ui.confirmationModal.buttonLabel.delete')" severity="danger"
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
        `)]),_:1}),e(),o("div",j,[a(s(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[15]||(n[15]=t=>$.value=!0)},null,8,["label"]),e(),o("span",null,r(b.value),1)]),e(),$.value?(m(),f(s(c),{key:0,"onOn:close":n[16]||(n[16]=t=>$.value=!1),"onOn:confirm":n[17]||(n[17]=t=>$.value=!1)},{header:i(()=>[o("span",null,r(l.$t("ui.confirmationModal.headerContent.deleteUser")),1)]),body:i(()=>[o("p",null,r(l.$t("ui.confirmationModal.bodyContent.confirmDelete")),1)]),footer:i(()=>[a(s(u),{size:"small",label:l.$t("ui.confirmationModal.buttonLabel.cancel"),severity:"secondary"},null,8,["label"]),e(),a(s(u),{size:"small",label:l.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger"},null,8,["label"])]),_:1})):p("",!0)])])]),_:1},8,["title"])}}});export{F as default};
