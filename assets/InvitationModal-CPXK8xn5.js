import{D as e,E as t,On as n,St as r,_ as i,g as a,k as o,mt as s,qt as c,tr as l,v as u,vn as d}from"./runtime-core.esm-bundler-CIxmKYxc.js";import{o as f}from"./PrefabsTechVue3UI.es-CXZdzPpN.js";import{E as p}from"./PrefabsTechVue3Layout.es-ByeEwOwS.js";import{t as m}from"./PrefabsTechVue3User.es-3IhSa1BI.js";import{t as h}from"./ComponentDocumentation-BPcopVAa.js";import{t as g}from"./UserPage-itluPCyW.js";var _={class:`section-content`},v={class:`section-content`},y={class:`section-content`},b={class:`section-content`},x={class:`section-content`},S={class:`section-content`},C={class:`section-content`},w=o({name:`InvitationModalDemo`,setup(o){let{t:w}=p(),T=d(!1),E=d(!1),D=d(!1),O=d(!1),k=d(!1),A=d(!1),j=d(!1),M=[{id:1,name:`ADMIN`},{id:2,name:`SUPERADMIN`},{id:3,name:`USER`}],N=[{id:1,name:`Admin`,origin:`admin-origin`,supportedRoles:[{id:1,name:`ADMIN`},{id:2,name:`SUPERADMIN`}]},{id:2,name:`User`,origin:`user-origin`,supportedRoles:[{id:3,name:`USER`}]}],P=a(()=>[{description:w(`user.documentation.eventDescription.invitation.close`),name:`on:close`,payload:`-`},{description:w(`user.documentation.eventDescription.invitation.submitted`),name:`submitted`,payload:`-`}]),F=a(()=>[{default:`-`,description:w(`user.documentation.propsDescription.invitation.apps`),prop:`apps`,type:`Array<InvitationAppOption>`},{default:`-`,description:w(`user.documentation.propsDescription.invitation.appSchema`),prop:`appSchema`,type:`z.ZodType<string | number | string[] | number[]>`},{default:`false`,description:w(`user.documentation.propsDescription.invitation.dismissOnClickOut`),prop:`dismissOnClickOut`,type:`Boolean`},{default:`-`,description:w(`user.documentation.propsDescription.invitation.expiresAfterSchema`),prop:`expiresAfterSchema`,type:`z.ZodType<string | number>`},{default:`-`,description:w(`user.documentation.propsDescription.invitation.expiresAtSchema`),prop:`expiresAtSchema`,type:`z.ZodType<string | number | Date | object>`},{default:`-`,description:w(`user.documentation.propsDescription.invitation.expiryMode`),prop:`expiryMode`,type:`"calendar" | "days"`},{default:`-`,description:w(`user.documentation.propsDescription.invitation.invitationData`),prop:`invitationData`,type:`InvitationPayload`},{default:`-`,description:w(`user.documentation.propsDescription.invitation.roles`),prop:`roles`,type:`Array<InvitationRoleOption>`},{default:`-`,description:w(`user.documentation.propsDescription.invitation.roleSchema`),prop:`roleSchema`,type:`z.ZodType<string | number | string[] | number[]>`},{default:`false`,description:w(`user.documentation.propsDescription.invitation.show`),prop:`show`,type:`Boolean`},{default:`-`,description:w(`user.documentation.propsDescription.invitation.submitLabel`),prop:`submitLabel`,type:`String`},{default:`-`,description:w(`user.documentation.propsDescription.invitation.title`),prop:`title`,type:`String`}]);return(a,o)=>{let d=r(`SshPre`);return s(),u(g,{subtitle:a.$t(`user.subtitle.invitationModal`),title:a.$t(`user.label.invitationModal`),class:`demo-invitation-modal`},{default:c(()=>[i(`section`,null,[i(`h2`,null,l(a.$t(`user.label.basic`)),1),o[17]||=t(),i(`div`,_,[e(n(f),{label:a.$t(`user.label.invite`),onClick:o[0]||=e=>k.value=!0},null,8,[`label`]),o[15]||=t(),e(n(m),{show:k.value,"onOn:close":o[1]||=e=>k.value=!1},null,8,[`show`]),o[16]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[14]||=[t(`
          <template>
            <ButtonElement
              label="Invite"
              @click="showModal = true"
            />

            <InvitationModal
              :show="showModal"
              @on:close="showModal = false"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);
          <\/script>
        `,-1)]]),_:1})])]),o[43]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`user.label.withTitle`)),1),o[21]||=t(),i(`div`,v,[e(n(f),{label:a.$t(`user.label.send`),onClick:o[2]||=e=>j.value=!0},null,8,[`label`]),o[19]||=t(),e(n(m),{show:j.value,title:a.$t(`user.label.invite`),"onOn:close":o[3]||=e=>j.value=!1},null,8,[`show`,`title`]),o[20]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[18]||=[t(`
          <template>
            <ButtonElement
              label="Send"
              @click="showModal = true"
            />

            <InvitationModal
              :show="showModal"
              title="Invite"
              @on:close="showModal = false"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);
          <\/script>
        `,-1)]]),_:1})])]),o[44]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`user.label.enableDismiss`)),1),o[25]||=t(),i(`div`,y,[e(n(f),{label:a.$t(`user.label.inviteUser`),onClick:o[4]||=e=>E.value=!0},null,8,[`label`]),o[23]||=t(),e(n(m),{show:E.value,title:a.$t(`user.label.inviteUser`),"dismiss-on-click-out":``,"onOn:close":o[5]||=e=>E.value=!1},null,8,[`show`,`title`]),o[24]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[22]||=[t(`
          <template>
            <ButtonElement
              label="Invite user"
              @click="showModal = true"
            />

            <InvitationModal
              :show="showModal"
              dismiss-on-click-out
              title="Invite user"
              @on:close="showModal = false"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);
          <\/script>
        `,-1)]]),_:1})])]),o[45]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`user.label.withAppField`)),1),o[29]||=t(),i(`div`,b,[e(n(f),{label:a.$t(`user.label.invite`),onClick:o[6]||=e=>T.value=!0},null,8,[`label`]),o[27]||=t(),e(n(m),{apps:N,show:T.value,title:a.$t(`user.label.inviteToApp`),"onOn:close":o[7]||=e=>T.value=!1},null,8,[`show`,`title`]),o[28]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[26]||=[t(`
          <template>
            <ButtonElement
              label="Invite"
              @click="showModal = true"
            />

            <InvitationModal
              :apps="apps"
              :show="showModal"
              title="Invite to app"
              @on:close="showModal = false"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);

          const apps = [
            {
              id: 1,
              name: "Admin",
              origin: "admin-origin",
              supportedRoles: [
                {
                  id: 1,
                  name: "ADMIN",
                },
                {
                  id: 2,
                  name: "SUPERADMIN",
                },
              ],
            },
            {
              id: 2,
              name: "User",
              origin: "user-origin",
              supportedRoles: [
                {
                  id: 3,
                  name: "USER",
                },
              ],
            },
          ];
          <\/script>
        `,-1)]]),_:1})])]),o[46]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`user.label.withRoleField`)),1),o[33]||=t(),i(`div`,x,[e(n(f),{label:a.$t(`user.label.sendInvitation`),onClick:o[8]||=e=>A.value=!0},null,8,[`label`]),o[31]||=t(),e(n(m),{roles:M,show:A.value,title:a.$t(`user.label.inviteWithRole`),"onOn:close":o[9]||=e=>A.value=!1},null,8,[`show`,`title`]),o[32]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[30]||=[t(`
          <template>
            <ButtonElement
              label="Send invitation"
              @click="showModal = true"
            />

            <InvitationModal
              :roles="roles"
              :show="showModal"
              title="Invite with role"
              @on:close="showModal = false"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);

          const roles = [
            {
              id: 1,
              name: "ADMIN",
            },
            {
              id: 2,
              name: "SUPERADMIN",
            },
            {
              id: 3,
              name: "USER",
            },
          ];
          <\/script>
        `,-1)]]),_:1})])]),o[47]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`user.label.withExpiryDate`)),1),o[37]||=t(),i(`div`,S,[e(n(f),{label:a.$t(`user.label.inviteUser`),onClick:o[10]||=e=>O.value=!0},null,8,[`label`]),o[35]||=t(),e(n(m),{roles:M,show:O.value,title:a.$t(`user.label.inviteWithExpiry`),"expiry-mode":`calendar`,"onOn:close":o[11]||=e=>O.value=!1},null,8,[`show`,`title`]),o[36]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[34]||=[t(`
          <template>
            <ButtonElement
              label="Invite user"
              @click="showModal = true"
            />

            <InvitationModal
              :roles="roles"
              :show="showModal"
              expiry-mode="calendar"
              title="Invite with expiry date"
              @on:close="showModal = false"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);

          const roles = [
            ...
          ];
          <\/script>
        `,-1)]]),_:1})])]),o[48]||=t(),i(`section`,null,[i(`h2`,null,l(a.$t(`user.label.withExpiryDays`)),1),o[41]||=t(),i(`div`,C,[e(n(f),{label:a.$t(`user.label.sendInvitation`),onClick:o[12]||=e=>D.value=!0},null,8,[`label`]),o[39]||=t(),e(n(m),{roles:M,show:D.value,title:a.$t(`user.label.inviteWithExpiry`),"expiry-mode":`days`,"onOn:close":o[13]||=e=>D.value=!1},null,8,[`show`,`title`]),o[40]||=t(),e(d,{language:`html-vue`},{default:c(()=>[...o[38]||=[t(`
          <template>
            <ButtonElement
              label="Send invitation"
              @click="showModal = true"
            />

            <InvitationModal
              :roles="roles"
              :show="showModal"
              expiry-mode="days"
              title="Invite with expiry date"
              @on:close="showModal = false"
            />
          </template>

          <script setup lang="ts">
          import { ButtonElement } from "@prefabs.tech/vue3-ui";
          import { InvitationModal } from "@prefabs.tech/vue3-user";
          import { ref } from "vue";
          
          const showModal = ref(false);

          const roles = [
            ...
          ];
          <\/script>
        `,-1)]]),_:1})])]),o[49]||=t(),e(h,{"events-data":P.value,"props-data":F.value,"props-table-title":a.$t(`common.properties`,{value:`InvitationModalProperties`})},null,8,[`events-data`,`props-data`,`props-table-title`]),o[50]||=t(),i(`section`,null,[e(d,{language:`html-vue`},{default:c(()=>[...o[42]||=[t(`
        interface InvitationAppOption {
          id: number;
          label?: string;
          name: string;
          origin: string;
          supportedRoles: InvitationRoleOption[];
        }

        interface InvitationPayload {
          appId?: number;
          email: string;
          expiresAt?: Date | string;
          role?: string;
        }

        interface InvitationRoleOption {
          id: number;
          name: string;
        }
      `,-1)]]),_:1})])]),_:1},8,[`subtitle`,`title`])}}});export{w as default};