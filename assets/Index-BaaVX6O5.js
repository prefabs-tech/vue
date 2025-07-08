import{d as z,r as d,I,e as m,o as f,i as a,E as e,f as o,g as s,t as r,b as p,u as i,x as u,H as b}from"./index-BTiWyi3W.js";import{_ as O}from"./ComponentDocumentation.vue_vue_type_script_setup_true_lang-BfrGqMkT.js";import{_ as S}from"./UiPage.vue_vue_type_style_index_0_lang-4hxpe8TA.js";import"./DzangolabVue3TanstackTable.es-CdCiNgB8.js";import"./DzangolabVue3Form.es-BsREXlwe.js";const T={class:"section-content"},H={class:"container"},N={class:"section-content"},V={class:"container"},P={class:"section-content"},U={class:"container"},A={class:"section-content"},j={class:"container"},q={class:"section-content"},F={class:"container"},G={class:"section-content"},J={class:"container"},Z=z({__name:"Index",setup(K){const k=d(void 0),C=d(!1),M=d(!1),$=d(!1),w=d(!1),y=d(!1),g=d(!1),B=[{description:"Emitted when the modal is closed.",name:"on:close",payload:"-"},{description:"Emitted when the Confirm button is clicked.",name:"on:confirm",payload:"-"}],E=[{default:"false",description:"If true, hides the default body content of the modal.",prop:"disableBody",type:"Boolean"},{default:"false",description:"If true, hides the default header content of the modal.",prop:"disableHeader",type:"Boolean"},{default:"false",description:"If true, adds a visual divider (border) to the modal container.",prop:"divider",type:"Boolean"}],D=[{description:"Slot to override the default body message.",name:"body"},{description:"Slot to override the default footer.",name:"footer"},{description:"Slot to override the default header title.",name:"header"}],L=()=>{k.value=new Date,g.value=!1};return(t,n)=>{const v=I("SshPre");return f(),m(S,{"sub-title":t.$t("ui.confirmationModal.subtitle"),title:t.$t("ui.confirmationModal.title"),class:"demo"},{toolbar:a(()=>[s(i(u),{label:t.$t("common.back"),"icon-left":"pi pi-chevron-left",size:"medium",variant:"textOnly",onClick:n[0]||(n[0]=l=>t.$router.push("/ui"))},null,8,["label"])]),default:a(()=>[n[53]||(n[53]=e()),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.basic")),1),n[25]||(n[25]=e()),o("div",T,[o("div",H,[s(i(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[1]||(n[1]=l=>g.value=!0)},null,8,["label"]),n[21]||(n[21]=e()),o("span",null,r(k.value),1)]),n[23]||(n[23]=e()),g.value?(f(),m(i(b),{key:0,"onOn:close":n[2]||(n[2]=l=>g.value=!1),"onOn:confirm":n[3]||(n[3]=l=>L())})):p("",!0),n[24]||(n[24]=e()),s(v,{language:"html-vue"},{default:a(()=>n[22]||(n[22]=[e(`
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
        `)])),_:1})])]),n[54]||(n[54]=e()),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.withDivider")),1),n[29]||(n[29]=e()),o("div",N,[o("div",V,[s(i(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[4]||(n[4]=l=>C.value=!0)},null,8,["label"])]),n[27]||(n[27]=e()),C.value?(f(),m(i(b),{key:0,divider:"","onOn:close":n[5]||(n[5]=l=>C.value=!1),"onOn:confirm":n[6]||(n[6]=l=>C.value=!1)})):p("",!0),n[28]||(n[28]=e()),s(v,{language:"html-vue"},{default:a(()=>n[26]||(n[26]=[e(`
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
        `)])),_:1})])]),n[55]||(n[55]=e()),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.disableHeader")),1),n[33]||(n[33]=e()),o("div",P,[o("div",U,[s(i(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[7]||(n[7]=l=>w.value=!0)},null,8,["label"])]),n[31]||(n[31]=e()),w.value?(f(),m(i(b),{key:0,"disable-header":"","onOn:close":n[8]||(n[8]=l=>w.value=!1),"onOn:confirm":n[9]||(n[9]=l=>w.value=!1)})):p("",!0),n[32]||(n[32]=e()),s(v,{language:"html-vue"},{default:a(()=>n[30]||(n[30]=[e(`
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
        `)])),_:1})])]),n[56]||(n[56]=e()),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.disableBody")),1),n[37]||(n[37]=e()),o("div",A,[o("div",j,[s(i(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[10]||(n[10]=l=>$.value=!0)},null,8,["label"])]),n[35]||(n[35]=e()),$.value?(f(),m(i(b),{key:0,"disable-body":"","onOn:close":n[11]||(n[11]=l=>$.value=!1),"onOn:confirm":n[12]||(n[12]=l=>$.value=!1)})):p("",!0),n[36]||(n[36]=e()),s(v,{language:"html-vue"},{default:a(()=>n[34]||(n[34]=[e(`
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
        `)])),_:1})])]),n[57]||(n[57]=e()),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.slots")),1),n[44]||(n[44]=e()),o("div",q,[o("div",F,[s(i(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[13]||(n[13]=l=>M.value=!0)},null,8,["label"])]),n[42]||(n[42]=e()),M.value?(f(),m(i(b),{key:0,onClick:n[16]||(n[16]=l=>M.value=!1)},{header:a(()=>[o("span",null,r(t.$t("ui.confirmationModal.headerContent.deleteUser")),1)]),body:a(()=>[o("p",null,r(t.$t("ui.confirmationModal.bodyContent.confirmDelete")),1)]),footer:a(()=>[s(i(u),{size:"small",label:t.$t("ui.confirmationModal.buttonLabel.cancel"),severity:"secondary",onClick:n[14]||(n[14]=l=>M.value=!1)},null,8,["label"]),n[38]||(n[38]=e()),s(i(u),{size:"small",label:t.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger",onClick:n[15]||(n[15]=l=>M.value=!1)},null,8,["label"])]),_:1})):p("",!0),n[43]||(n[43]=e()),s(v,{language:"html-vue"},{default:a(()=>n[41]||(n[41]=[e(`
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
        `)])),_:1})])]),n[58]||(n[58]=e()),o("section",null,[o("h2",null,r(t.$t("ui.confirmationModal.usage.withI18n")),1),n[52]||(n[52]=e()),o("div",G,[o("div",J,[s(i(u),{label:t.$t("ui.confirmationModal.buttonLabel.confirm"),severity:"success",onClick:n[17]||(n[17]=l=>y.value=!0)},null,8,["label"]),n[45]||(n[45]=e()),o("span",null,r(k.value),1)]),n[50]||(n[50]=e()),y.value?(f(),m(i(b),{key:0,"onOn:close":n[20]||(n[20]=l=>y.value=!1)},{header:a(()=>[o("span",null,r(t.$t("ui.confirmationModal.headerContent.deleteUser")),1)]),body:a(()=>[o("p",null,r(t.$t("ui.confirmationModal.bodyContent.confirmDelete")),1)]),footer:a(()=>[s(i(u),{size:"small",label:t.$t("ui.confirmationModal.buttonLabel.cancel"),severity:"secondary",onClick:n[18]||(n[18]=l=>y.value=!1)},null,8,["label"]),n[46]||(n[46]=e()),s(i(u),{size:"small",label:t.$t("ui.confirmationModal.buttonLabel.delete"),severity:"danger",onClick:n[19]||(n[19]=l=>y.value=!1)},null,8,["label"])]),_:1})):p("",!0),n[51]||(n[51]=e()),s(v,{language:"html-vue"},{default:a(()=>n[49]||(n[49]=[e(`
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
        `)])),_:1})])]),n[59]||(n[59]=e()),s(O,{"events-data":B,"props-data":E,"props-table-title":t.$t("common.properties",{value:"ConfirmationModalProperties"}),"slots-data":D},null,8,["props-table-title"])]),_:1},8,["sub-title","title"])}}});export{Z as default};
