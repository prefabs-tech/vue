import{d as E,r as d,y as L,l as m,o as f,p as a,C as e,e as o,t as r,b,g as s,u as i,D as u,W as p}from"./index-btaM6fHL.js";import{_ as z}from"./UiPage.vue_vue_type_style_index_0_lang-TDF0kXS0.js";const D={class:"section-content"},O={class:"container"},I={class:"section-content"},T={class:"container"},N={class:"section-content"},V={class:"container"},S={class:"section-content"},U={class:"container"},H={class:"section-content"},P={class:"container"},W={class:"section-content"},A={class:"container"},G=E({__name:"Index",setup(j){const k=d(void 0),y=d(!1),M=d(!1),$=d(!1),w=d(!1),C=d(!1),g=d(!1),B=()=>{k.value=new Date,g.value=!1};return(l,n)=>{const v=L("SshPre");return f(),m(z,{title:l.$t("ui.confirmationModal.title"),class:"demo"},{toolbar:a(()=>[s(i(u),{label:l.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=t=>l.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[n[53]||(n[53]=e()),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.basic")),1),n[25]||(n[25]=e()),o("div",D,[o("div",O,[s(i(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[1]||(n[1]=t=>g.value=!0)},null,8,["label"]),n[21]||(n[21]=e()),o("span",null,r(k.value),1)]),n[23]||(n[23]=e()),g.value?(f(),m(i(p),{key:0,"onOn:close":n[2]||(n[2]=t=>g.value=!1),"onOn:confirm":n[3]||(n[3]=t=>B())})):b("",!0),n[24]||(n[24]=e()),s(v,{language:"html-vue"},{default:a(()=>n[22]||(n[22]=[e(`
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
        `)])),_:1})])]),n[54]||(n[54]=e()),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.withDivider")),1),n[29]||(n[29]=e()),o("div",I,[o("div",T,[s(i(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[4]||(n[4]=t=>y.value=!0)},null,8,["label"])]),n[27]||(n[27]=e()),y.value?(f(),m(i(p),{key:0,divider:"","onOn:close":n[5]||(n[5]=t=>y.value=!1),"onOn:confirm":n[6]||(n[6]=t=>y.value=!1)})):b("",!0),n[28]||(n[28]=e()),s(v,{language:"html-vue"},{default:a(()=>n[26]||(n[26]=[e(`
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
        `)])),_:1})])]),n[55]||(n[55]=e()),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.disableHeader")),1),n[33]||(n[33]=e()),o("div",N,[o("div",V,[s(i(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[7]||(n[7]=t=>w.value=!0)},null,8,["label"])]),n[31]||(n[31]=e()),w.value?(f(),m(i(p),{key:0,"disable-header":"","onOn:close":n[8]||(n[8]=t=>w.value=!1),"onOn:confirm":n[9]||(n[9]=t=>w.value=!1)})):b("",!0),n[32]||(n[32]=e()),s(v,{language:"html-vue"},{default:a(()=>n[30]||(n[30]=[e(`
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
        `)])),_:1})])]),n[56]||(n[56]=e()),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.disableBody")),1),n[37]||(n[37]=e()),o("div",S,[o("div",U,[s(i(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[10]||(n[10]=t=>$.value=!0)},null,8,["label"])]),n[35]||(n[35]=e()),$.value?(f(),m(i(p),{key:0,"disable-body":"","onOn:close":n[11]||(n[11]=t=>$.value=!1),"onOn:confirm":n[12]||(n[12]=t=>$.value=!1)})):b("",!0),n[36]||(n[36]=e()),s(v,{language:"html-vue"},{default:a(()=>n[34]||(n[34]=[e(`
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
        `)])),_:1})])]),n[57]||(n[57]=e()),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.slots")),1),n[44]||(n[44]=e()),o("div",H,[o("div",P,[s(i(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[13]||(n[13]=t=>M.value=!0)},null,8,["label"])]),n[42]||(n[42]=e()),M.value?(f(),m(i(p),{key:0,onClick:n[16]||(n[16]=t=>M.value=!1)},{header:a(()=>[o("span",null,r(l.$t("ui.confirmationModal.headerContent.deleteUser")),1)]),body:a(()=>[o("p",null,r(l.$t("ui.confirmationModal.bodyContent.confirmDelete")),1)]),footer:a(()=>[s(i(u),{size:"small",label:l.$t("ui.confirmationModal.buttonLabel.cancel"),severity:"secondary",onClick:n[14]||(n[14]=t=>M.value=!1)},null,8,["label"]),n[38]||(n[38]=e()),s(i(u),{size:"small",label:l.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger",onClick:n[15]||(n[15]=t=>M.value=!1)},null,8,["label"])]),_:1})):b("",!0),n[43]||(n[43]=e()),s(v,{language:"html-vue"},{default:a(()=>n[41]||(n[41]=[e(`
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
        `)])),_:1})])]),n[58]||(n[58]=e()),o("section",null,[o("h2",null,r(l.$t("ui.confirmationModal.usage.withI18n")),1),n[52]||(n[52]=e()),o("div",W,[o("div",A,[s(i(u),{label:l.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[17]||(n[17]=t=>C.value=!0)},null,8,["label"]),n[45]||(n[45]=e()),o("span",null,r(k.value),1)]),n[50]||(n[50]=e()),C.value?(f(),m(i(p),{key:0,"onOn:close":n[20]||(n[20]=t=>C.value=!1)},{header:a(()=>[o("span",null,r(l.$t("ui.confirmationModal.headerContent.deleteUser")),1)]),body:a(()=>[o("p",null,r(l.$t("ui.confirmationModal.bodyContent.confirmDelete")),1)]),footer:a(()=>[s(i(u),{size:"small",label:l.$t("ui.confirmationModal.buttonLabel.cancel"),severity:"secondary",onClick:n[18]||(n[18]=t=>C.value=!1)},null,8,["label"]),n[46]||(n[46]=e()),s(i(u),{size:"small",label:l.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger",onClick:n[19]||(n[19]=t=>C.value=!1)},null,8,["label"])]),_:1})):b("",!0),n[51]||(n[51]=e()),s(v,{language:"html-vue"},{default:a(()=>n[49]||(n[49]=[e(`
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
        `)])),_:1})])])]),_:1},8,["title"])}}});export{G as default};
