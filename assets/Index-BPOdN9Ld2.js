import{D as e,E as t,On as n,St as r,_ as i,k as a,mt as o,qt as s,tr as c,v as l,vn as u,y as d}from"./runtime-core.esm-bundler-BKdLzFmX.js";import{T as f,o as p}from"./PrefabsTechVue3UI.es-EJDYzbRH.js";import{T as m}from"./PrefabsTechVue3Layout.es-DjWCbXPc.js";import{t as h}from"./ComponentDocumentation-CFBF3GmY.js";import{t as g}from"./UiPage-eTNUnuuQ.js";var _={class:`section-content`},v={class:`container`},y={class:`section-content`},b={class:`container`},x={class:`section-content`},S={class:`container`},C={class:`section-content`},w={class:`container`},T=a({name:`ConfirmationModalDemo`,setup(a){let{t:T}=m(),E=u(void 0),D=u(!1),O=u(!1),k=u(!1),A=u(!1),j=[{description:T(`ui.confirmationModal.documentation.eventDescription.close`),name:`on:close`,payload:`-`},{description:T(`ui.confirmationModal.documentation.eventDescription.confirm`),name:`on:confirm`,payload:`-`}],M=[{default:`-`,description:T(`ui.confirmationModal.documentation.propsDescription.acceptOptions`),prop:`acceptButtonOptions`,type:`ButtonProperties`},{default:`-`,description:T(`ui.confirmationModal.documentation.propsDescription.cancelOptions`),prop:`cancelButtonOptions`,type:`ButtonProperties`},{default:`true`,description:T(`ui.confirmationModal.documentation.propsDescription.closable`),prop:`closable`,type:`Boolean`},{default:`pi pi-times`,description:T(`ui.confirmationModal.documentation.propsDescription.closeIcon`),prop:`closeIcon`,type:`String`},{default:`true`,description:T(`ui.confirmationModal.documentation.propsDescription.dismissOnClickOut`),prop:`dismissOnClickOut`,type:`Boolean`},{default:`Confirmation required`,description:T(`ui.confirmationModal.documentation.propsDescription.header`),prop:`header`,type:`String`},{default:`pi pi-exclamation-triangle`,description:T(`ui.confirmationModal.documentation.propsDescription.icon`),prop:`icon`,type:`Boolean | String`},{default:`Are you sure you want to proceed?`,description:T(`ui.confirmationModal.documentation.propsDescription.message`),prop:`message`,type:`String`}],N=[{description:T(`ui.confirmationModal.documentation.slotDescription.header`),name:`header`},{description:T(`ui.confirmationModal.documentation.slotDescription.message`),name:`message`},{description:T(`ui.confirmationModal.documentation.slotDescription.footer`),name:`footer`},{description:T(`ui.confirmationModal.documentation.slotDescription.closeIcon`),name:`closeIcon`},{description:T(`ui.confirmationModal.documentation.slotDescription.icon`),name:`icon`}],P=()=>{E.value=new Date,A.value=!1};return(a,u)=>{let m=r(`SshPre`);return o(),l(g,{subtitle:a.$t(`ui.confirmationModal.subtitle`),title:a.$t(`ui.confirmationModal.title`),class:`demo`},{default:s(()=>[i(`section`,null,[i(`h2`,null,c(a.$t(`ui.confirmationModal.usage.basic`)),1),u[19]||=t(),i(`div`,_,[i(`div`,v,[e(n(p),{label:a.$t(`ui.confirmationModal.buttonLabel.confirm`),severity:`success`,onClick:u[0]||=e=>A.value=!0},null,8,[`label`]),u[15]||=t(),i(`span`,null,c(E.value),1)]),u[17]||=t(),A.value?(o(),l(n(f),{key:0,header:a.$t(`ui.confirmationModal.headerContent.confirm`),message:a.$t(`ui.confirmationModal.bodyContent.confirm`),"onOn:close":u[1]||=e=>A.value=!1,"onOn:confirm":u[2]||=e=>P()},null,8,[`header`,`message`])):d(``,!0),u[18]||=t(),e(m,{language:`html-vue`},{default:s(()=>[...u[16]||=[t(`
          <template>
            <ButtonElement
              label="Confirm"
              severity="success"
              @click="showModal = true"
            />

            <span>{{ currentTime }}</span>
  
            <ConfirmationModal
              v-if="showModal"
              header="Confirm"
              message="Are you sure you want to proceed?"
              @on:close="showModal = false"
              @on:confirm="onConfirm()"
            />
          </template>
  
          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";
  
            const currentTime = ref(undefined as unknown as Date);
            const showModal = ref(false);
  
            const onConfirm = () => {
              currentTime.value = new Date();
              showModal.value = false;
            };
          <\/script>
        `,-1)]]),_:1})])]),u[41]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.confirmationModal.usage.buttonOptions`)),1),u[23]||=t(),i(`div`,y,[i(`div`,b,[e(n(p),{label:a.$t(`ui.confirmationModal.buttonLabel.delete`),severity:`danger`,onClick:u[3]||=e=>O.value=!0},null,8,[`label`])]),u[21]||=t(),O.value?(o(),l(n(f),{key:0,"accept-button-options":{label:a.$t(`ui.confirmationModal.buttonLabel.delete`),severity:`danger`},"cancel-button-options":{label:a.$t(`ui.confirmationModal.buttonLabel.cancel`)},header:a.$t(`ui.confirmationModal.headerContent.deleteUser`),message:a.$t(`ui.confirmationModal.bodyContent.confirmDelete`),"onOn:close":u[4]||=e=>O.value=!1,"onOn:confirm":u[5]||=e=>O.value=!1},null,8,[`accept-button-options`,`cancel-button-options`,`header`,`message`])):d(``,!0),u[22]||=t(),e(m,{language:`html-vue`},{default:s(()=>[...u[20]||=[t(`
          <template>
            <ButtonElement
              label="Delete"
              severity="danger"
              @click="showModal = true"
            />

            <span>{{ currentTime }}</span>
  
            <ConfirmationModal
              v-if="showModal"
              :accept-button-options="{
                label: 'Delete',
                severity: 'danger',
              }"
              :cancel-button-options="{
                label: 'Cancel',
              }"
              header="Delete user"
              message="Are you sure to delete user?"
              @on:close="showModal = false"
              @on:confirm="showModal = false"
            />
          </template>
  
          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `,-1)]]),_:1})])]),u[42]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.confirmationModal.usage.slots`)),1),u[33]||=t(),i(`div`,x,[i(`div`,S,[e(n(p),{label:a.$t(`ui.confirmationModal.buttonLabel.confirm`),severity:`success`,onClick:u[6]||=e=>D.value=!0},null,8,[`label`])]),u[31]||=t(),D.value?(o(),l(n(f),{key:0,"dismiss-on-click-out":!1,"onOn:close":u[10]||=e=>D.value=!1},{header:s(()=>[i(`span`,null,c(a.$t(`ui.confirmationModal.headerContent.confirm`)),1)]),closeIcon:s(()=>[i(`i`,{class:`close-icon pi pi-times-circle`,onClick:u[7]||=e=>D.value=!1})]),icon:s(()=>[...u[24]||=[i(`i`,{class:`pi pi-exclamation-circle`},null,-1)]]),message:s(()=>[i(`p`,null,c(a.$t(`ui.confirmationModal.bodyContent.confirm`)),1)]),footer:s(()=>[e(n(p),{size:`small`,label:a.$t(`ui.confirmationModal.buttonLabel.cancel`),severity:`secondary`,onClick:u[8]||=e=>D.value=!1},null,8,[`label`]),u[25]||=t(),e(n(p),{size:`small`,label:a.$t(`ui.confirmationModal.buttonLabel.confirm`),severity:`success`,onClick:u[9]||=e=>D.value=!1},null,8,[`label`])]),_:1})):d(``,!0),u[32]||=t(),e(m,{language:`html-vue`},{default:s(()=>[...u[30]||=[t(`
          <template>
            <ButtonElement
              label="Confirm"
              severity="success"
              @click="showModal = true"
            />

            <ConfirmationModal
              v-if="showModal"
              :dismiss-on-click-out="false"
              @on:close="showModal = false"
            >
              <template #header>
                <span>Confirmation required</span>
              </template>

              <template #closeIcon>
                <i
                  class="close-icon pi pi-times-circle"
                  @click="showModal = false"
                />
              </template>

              <template #icon>
                <i class="pi pi-exclamation-circle" />
              </template>

              <template #message>
                <p>Are you sure you want to proceed?</p>
              </template>

              <template #footer>
                <ButtonElement
                  label="Cancel"
                  severity="secondary"
                  @click="showModal = false"
                />
                <ButtonElement
                  label="Confirm"
                  severity="success"
                  @click="showModal = false"
                />
              </template>
            </ConfirmationModal>
          </template>

          <script setup lang="ts">
            import { ButtonElement, ConfirmationModal } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";

            const showModal = ref(false);
          <\/script>
        `,-1)]]),_:1})])]),u[43]||=t(),i(`section`,null,[i(`h2`,null,c(a.$t(`ui.confirmationModal.usage.withI18n`)),1),u[40]||=t(),i(`div`,C,[i(`div`,w,[e(n(p),{label:a.$t(`ui.confirmationModal.buttonLabel.delete`),severity:`danger`,onClick:u[11]||=e=>k.value=!0},null,8,[`label`])]),u[38]||=t(),k.value?(o(),l(n(f),{key:0,"onOn:close":u[14]||=e=>k.value=!1},{header:s(()=>[i(`span`,null,c(a.$t(`ui.confirmationModal.headerContent.deleteUser`)),1)]),message:s(()=>[i(`p`,null,c(a.$t(`ui.confirmationModal.bodyContent.confirmDelete`)),1)]),footer:s(()=>[e(n(p),{size:`small`,label:a.$t(`ui.confirmationModal.buttonLabel.cancel`),severity:`secondary`,onClick:u[12]||=e=>k.value=!1},null,8,[`label`]),u[34]||=t(),e(n(p),{size:`small`,label:a.$t(`ui.confirmationModal.buttonLabel.delete`),severity:`danger`,onClick:u[13]||=e=>k.value=!1},null,8,[`label`])]),_:1})):d(``,!0),u[39]||=t(),e(m,{language:`html-vue`},{default:s(()=>[...u[37]||=[t(`
          <template>
            <ButtonElement
              :label="t('ui.confirmationModal.buttonLabel.delete')"
              severity="danger"
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

              <template #message>
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
            import { ButtonElement, ConfirmationModal } from "@prefabs.tech/vue3-ui";
            import { ref } from "vue";
            import { useI18n } from "@prefabs.tech/vue3-i18n";

            const showModal = ref(false);
            const { t } = useI18n();
          <\/script>
        `,-1)]]),_:1})])]),u[44]||=t(),e(h,{"events-data":j,"props-data":M,"props-table-title":a.$t(`common.properties`,{value:`ConfirmationModalProperties`}),"slots-data":N},null,8,[`props-table-title`])]),_:1},8,[`subtitle`,`title`])}}});export{T as default};